import { listApplications } from '@/lib/db'
import { ApplicationsTable } from '@/components/admin/applications-table'

export const dynamic = 'force-dynamic'

export default async function AdminApplicationsPage() {
  const rows = await listApplications()

  if (rows.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center text-muted">
        No applications yet.
      </div>
    )
  }

  return <ApplicationsTable rows={rows} />
}
