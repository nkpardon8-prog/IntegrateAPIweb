import { sendLeadEmail } from '@/lib/resend'
import { rateLimit } from '@/lib/rate-limit'
import { clientIp } from '@/lib/ip'

export async function POST(req: Request) {
  const ip = clientIp(req)
  if (!rateLimit(`contact:${ip}`, 5, 60000)) {
    return Response.json({ error: 'Too many requests. Please try again in a minute.' }, { status: 429 })
  }

  try {
    const body = await req.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 })
    }

    await sendLeadEmail({ name, email, company, message, source: 'contact-form' })
    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
