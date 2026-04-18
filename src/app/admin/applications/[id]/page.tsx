import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getApplication } from '@/lib/db'
import { ApplicationDetail } from '@/components/admin/application-detail'

export const dynamic = 'force-dynamic'

export default async function AdminApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const app = await getApplication(id)
  if (!app) notFound()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin/applications"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          ← Back to list
        </Link>
        <a
          href={`/api/admin/resume/${app.id}`}
          className="bg-accent hover:bg-accent-hover text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
        >
          Download resume
        </a>
      </div>

      <ApplicationDetail application={app} />
    </div>
  )
}
