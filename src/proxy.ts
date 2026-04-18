import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { ADMIN_COOKIE_NAME } from '@/lib/session-constants'

function secret() {
  const s = process.env.ADMIN_SESSION_SECRET
  if (!s) return null
  return new TextEncoder().encode(s)
}

function redirectToLogin(req: NextRequest) {
  return NextResponse.redirect(new URL('/admin', req.nextUrl.origin))
}

export async function proxy(req: NextRequest) {
  const isApi = req.nextUrl.pathname.startsWith('/api/admin')
  const unauthorized = () =>
    isApi
      ? NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      : redirectToLogin(req)

  const sec = secret()
  if (!sec) {
    return isApi
      ? NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
      : NextResponse.redirect(new URL('/admin?error=server', req.nextUrl.origin))
  }

  const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value
  if (!token) return unauthorized()
  try {
    await jwtVerify(token, sec)
    return NextResponse.next()
  } catch {
    return unauthorized()
  }
}

export const config = {
  matcher: [
    '/admin/applications',
    '/admin/applications/:path*',
    '/api/admin/applications/:path*',
    '/api/admin/resume/:path*',
  ],
}
