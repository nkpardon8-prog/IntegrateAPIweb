import { listApplications } from '@/lib/db'
import { ApplicationsTable } from '@/components/admin/applications-table'

export const dynamic = 'force-dynamic'

export default async function AdminApplicationsPage() {
  const rows = await listApplications()

  if (rows.length === 0) {
    return (
      <div className="bg-[#1a1a2e] border border-white/[0.08] rounded-xl p-8 text-center text-[#a0a0b0]">
        No applications yet.
      </div>
    )
  }

  return <ApplicationsTable rows={rows} />
}
