import { timingSafeEqual } from 'node:crypto'
import { signAdminSession, setAdminCookie } from '@/lib/session'
import { rateLimit } from '@/lib/rate-limit'
import { clientIp } from '@/lib/ip'
import { loginSchema } from '@/lib/validation'

export const runtime = 'nodejs'

function safeEqual(a: string, b: string) {
  const A = Buffer.from(a)
  const B = Buffer.from(b)
  if (A.length !== B.length) return false
  return timingSafeEqual(A, B)
}

export async function POST(req: Request) {
  if (
    !process.env.ADMIN_EMAIL ||
    !process.env.ADMIN_PASSWORD ||
    !process.env.ADMIN_SESSION_SECRET
  ) {
    return Response.json({ error: 'Server misconfigured.' }, { status: 500 })
  }

  const ip = clientIp(req)
  if (!rateLimit(`login:${ip}`, 5, 10 * 60_000)) {
    return Response.json({ error: 'Too many attempts.' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid payload.' }, { status: 400 })
  }

  const parsed = loginSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: 'Invalid payload.' }, { status: 400 })
  }

  const { email, password } = parsed.data
  const ok =
    safeEqual(email, process.env.ADMIN_EMAIL) &&
    safeEqual(password, process.env.ADMIN_PASSWORD)

  if (!ok) {
    return Response.json({ error: 'Invalid credentials.' }, { status: 401 })
  }

  const token = await signAdminSession(email)
  await setAdminCookie(token)
  return Response.json({ ok: true })
}
