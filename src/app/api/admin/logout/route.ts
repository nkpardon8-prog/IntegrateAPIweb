import { clearAdminCookie } from '@/lib/session'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  await clearAdminCookie()
  const base = process.env.NEXT_PUBLIC_SITE_URL || new URL(req.url).origin
  return Response.redirect(new URL('/admin', base), 303)
}
