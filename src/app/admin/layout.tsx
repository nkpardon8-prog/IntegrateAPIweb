import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Admin | IntegrateAPI',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex-1">{children}</main>
}
