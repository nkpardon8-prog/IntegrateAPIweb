import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Opportunities | IntegrateAPI',
}

export default function OpportunitiesLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex-1">{children}</main>
}
