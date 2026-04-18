import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { currentAdmin } from '@/lib/session'
import { LoginForm } from '@/components/admin/login-form'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Admin login',
}

export const dynamic = 'force-dynamic'

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const email = await currentAdmin()
  if (email) redirect('/admin/applications')
  const { error } = await searchParams
  return (
    <div className="flex items-center justify-center p-4 min-h-[70vh]">
      <div className="w-full max-w-md">
        <LoginForm serverError={error} />
      </div>
    </div>
  )
}
