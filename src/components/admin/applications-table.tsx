'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Application, ApplicationStatus } from '@/lib/db'

type StatusFilter = 'all' | ApplicationStatus

const STATUS_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'All statuses' },
  { value: 'new', label: 'New' },
  { value: 'reviewing', label: 'Reviewing' },
  { value: 'interviewing', label: 'Interviewing' },
  { value: 'offer', label: 'Offer' },
  { value: 'hired', label: 'Hired' },
  { value: 'rejected', label: 'Rejected' },
]

const STATUS_BADGE: Record<ApplicationStatus, string> = {
  new: 'bg-blue-500/20 text-blue-300',
  reviewing: 'bg-yellow-500/20 text-yellow-300',
  interviewing: 'bg-purple-500/20 text-purple-300',
  offer: 'bg-teal-500/20 text-teal-300',
  hired: 'bg-green-500/20 text-green-300',
  rejected: 'bg-foreground/10 text-muted',
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
})

function formatDate(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return dateFormatter.format(d)
}

interface ApplicationsTableProps {
  rows: Application[]
}

export function ApplicationsTable({ rows }: ApplicationsTableProps) {
  const router = useRouter()
  const [status, setStatus] = useState<StatusFilter>('all')

  const filtered = useMemo(() => {
    if (status === 'all') return rows
    return rows.filter(r => r.status === status)
  }, [rows, status])

  const selectClass =
    'bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors'

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <label htmlFor="status-filter" className="text-sm text-muted">
          Status
        </label>
        <select
          id="status-filter"
          value={status}
          onChange={e => setStatus(e.target.value as StatusFilter)}
          className={selectClass}
        >
          {STATUS_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="text-sm text-muted ml-auto">
          {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
        </span>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="text-muted text-xs uppercase tracking-wide">
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium w-8" aria-hidden="true" />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-muted text-sm"
                >
                  No applications match this filter.
                </td>
              </tr>
            ) : (
              filtered.map(row => (
                <tr
                  key={row.id}
                  onClick={() => router.push(`/admin/applications/${row.id}`)}
                  className="border-t border-border hover:bg-foreground/[0.03] cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3 text-sm text-foreground">
                    {formatDate(row.created_at)}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {row.first_name} {row.last_name}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted">
                    {row.role_slug}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_BADGE[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-muted">→</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
