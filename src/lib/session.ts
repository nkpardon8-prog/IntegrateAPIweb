import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { ADMIN_COOKIE_NAME } from '@/lib/session-constants'

const secret = () => {
  const s = process.env.ADMIN_SESSION_SECRET
  if (!s) throw new Error('ADMIN_SESSION_SECRET not set')
  return new TextEncoder().encode(s)
}

export async function signAdminSession(email: string) {
  return await new SignJWT({ sub: email })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('12h')
    .sign(secret())
}

export async function verifyAdminToken(token: string) {
  const { payload } = await jwtVerify(token, secret())
  return payload
}

export async function setAdminCookie(token: string) {
  const jar = await cookies()
  jar.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 12,
  })
}

export async function clearAdminCookie() {
  const jar = await cookies()
  jar.delete(ADMIN_COOKIE_NAME)
}

export async function readAdminCookie() {
  const jar = await cookies()
  return jar.get(ADMIN_COOKIE_NAME)?.value ?? null
}

// Returns email on valid cookie, null otherwise.
export async function currentAdmin(): Promise<string | null> {
  const token = await readAdminCookie()
  if (!token) return null
  try {
    const payload = await verifyAdminToken(token)
    return typeof payload.sub === 'string' ? payload.sub : null
  } catch {
    return null
  }
}
