import { randomUUID } from 'node:crypto'
import { insertApplication } from '@/lib/db'
import { putResume } from '@/lib/blobs'
import { sendApplicationEmail } from '@/lib/resend'
import { rateLimit } from '@/lib/rate-limit'
import { clientIp } from '@/lib/ip'
import { applicationSchema } from '@/lib/validation'
import { jobs } from '@/data/jobs'

export const runtime = 'nodejs'

// Netlify Functions 6MB sync cap. Multipart PDFs are base64-encoded internally → 4MB raw ≈ 5.3MB wire,
// which is over the ~4.5MB effective binary ceiling. Cap at 3MB for safety margin.
const MAX_PDF_BYTES = 3 * 1024 * 1024

export async function POST(req: Request) {
  const ip = clientIp(req)
  if (!rateLimit(`apply:${ip}`, 3, 60_000)) {
    return Response.json(
      { error: 'Too many submissions. Try again in a minute.' },
      { status: 429 }
    )
  }

  try {
    const form = await req.formData()

    // Build plain object of non-file fields, stripping 'resume' so it doesn't hit Zod
    const raw: Record<string, unknown> = {}
    for (const [k, v] of form.entries()) {
      if (k === 'resume') continue
      raw[k] = v
    }
    if (typeof raw.availability_hours === 'string') {
      raw.availability_hours = Number(raw.availability_hours)
    }

    const parsed = applicationSchema.safeParse(raw)
    if (!parsed.success) {
      return Response.json({ error: 'Invalid submission.' }, { status: 400 })
    }
    const fields = parsed.data

    if (!jobs.some(j => j.slug === fields.role_slug && j.published)) {
      return Response.json({ error: 'Unknown role.' }, { status: 400 })
    }

    const resume = form.get('resume')
    if (!(resume instanceof File) || resume.size === 0) {
      return Response.json({ error: 'Resume PDF is required.' }, { status: 400 })
    }
    if (resume.type !== 'application/pdf') {
      return Response.json({ error: 'Resume must be a PDF.' }, { status: 400 })
    }
    if (resume.size > MAX_PDF_BYTES) {
      return Response.json({ error: 'Resume must be under 3MB.' }, { status: 400 })
    }

    const id = randomUUID()
    const resumeKey = `${id}.pdf`
    const buf = await resume.arrayBuffer()

    await putResume(resumeKey, buf)
    const inserted = await insertApplication({
      role_slug: fields.role_slug,
      first_name: fields.first_name,
      last_name: fields.last_name,
      email: fields.email,
      phone: fields.phone,
      school: fields.school,
      year: fields.year,
      linkedin_url: fields.linkedin_url || null,
      availability_hours: fields.availability_hours,
      why_this_role: fields.why_this_role,
      experience_story: fields.experience_story,
      resume_key: resumeKey,
    })

    // Await the email. Netlify kills the function context on return, so fire-and-forget loses the send.
    // Failure is logged but non-fatal: submission already persisted.
    try {
      await sendApplicationEmail({
        applicationId: inserted.id,
        roleSlug: fields.role_slug,
        first_name: fields.first_name,
        last_name: fields.last_name,
        email: fields.email,
        phone: fields.phone,
        school: fields.school,
        year: fields.year,
        linkedin_url: fields.linkedin_url || '',
        availability_hours: fields.availability_hours,
        why_this_role: fields.why_this_role,
        experience_story: fields.experience_story,
      })
    } catch (err) {
      console.error('Application email failed:', err)
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Application submit error:', err)
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
