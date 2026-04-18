import { getResumeStream } from '@/lib/blobs'
import { getApplication } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function sanitizeSegment(s: string) {
  return s.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80)
}

export async function GET(_: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params
  if (!/^[a-f0-9-]{36}$/.test(id)) {
    return new Response('Bad id', { status: 400 })
  }

  const app = await getApplication(id)
  if (!app) {
    return new Response('Not found', { status: 404 })
  }

  const stream = await getResumeStream(app.resume_key)
  if (!stream) {
    return new Response('Resume missing', { status: 404 })
  }

  const fname = `${sanitizeSegment(app.first_name)}-${sanitizeSegment(app.last_name)}-resume.pdf`
  return new Response(stream, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${fname}"`,
      'Cache-Control': 'private, no-store',
    },
  })
}
