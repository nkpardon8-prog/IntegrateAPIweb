'use client'

import { useState } from 'react'
import type { Application, ApplicationStatus } from '@/lib/db'

const STATUS_OPTIONS: ApplicationStatus[] = [
  'new',
  'reviewing',
  'interviewing',
  'offer',
  'hired',
  'rejected',
]

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
})

function formatDate(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return dateFormatter.format(d)
}

interface ApplicationDetailProps {
  application: Application
}

export function ApplicationDetail({ application }: ApplicationDetailProps) {
  const [status, setStatus] = useState<ApplicationStatus>(application.status)
  const [notes, setNotes] = useState(application.notes)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ kind: 'ok' | 'err'; text: string } | null>(
    null
  )

  async function handleSave() {
    setSaving(true)
    setMessage(null)
    try {
      const res = await fetch(`/api/admin/applications/${application.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, notes }),
      })
      if (res.ok) {
        setMessage({ kind: 'ok', text: 'Saved.' })
      } else {
        setMessage({ kind: 'err', text: 'Save failed. Try again.' })
      }
    } catch {
      setMessage({ kind: 'err', text: 'Save failed. Try again.' })
    } finally {
      setSaving(false)
    }
  }

  const inputClass =
    'bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors w-full'

  return (
    <div className="flex flex-col gap-6">
      <section className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          {application.first_name} {application.last_name}
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          <div>
            <dt className="text-muted">Email</dt>
            <dd className="text-foreground">
              <a
                href={`mailto:${application.email}`}
                className="hover:text-accent transition-colors"
              >
                {application.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">Phone</dt>
            <dd className="text-foreground">
              <a
                href={`tel:${application.phone}`}
                className="hover:text-accent transition-colors"
              >
                {application.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">School</dt>
            <dd className="text-foreground">
              {application.school}, {application.year}
            </dd>
          </div>
          <div>
            <dt className="text-muted">Availability</dt>
            <dd className="text-foreground">
              {application.availability_hours} hrs/week
            </dd>
          </div>
          <div>
            <dt className="text-muted">Role</dt>
            <dd className="text-foreground">{application.role_slug}</dd>
          </div>
          <div>
            <dt className="text-muted">Applied</dt>
            <dd className="text-foreground">{formatDate(application.created_at)}</dd>
          </div>
          {application.linkedin_url && (
            <div className="sm:col-span-2">
              <dt className="text-muted">LinkedIn</dt>
              <dd className="text-foreground">
                <a
                  href={application.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors break-all"
                >
                  {application.linkedin_url}
                </a>
              </dd>
            </div>
          )}
        </dl>
      </section>

      <section className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-sm font-medium text-muted mb-2 uppercase tracking-wide">
          Why this role?
        </h3>
        <p className="text-foreground whitespace-pre-wrap">
          {application.why_this_role}
        </p>
      </section>

      <section className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-sm font-medium text-muted mb-2 uppercase tracking-wide">
          Experience story
        </h3>
        <p className="text-foreground whitespace-pre-wrap">
          {application.experience_story}
        </p>
      </section>

      <section className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-foreground">Review</h3>

        <div>
          <label
            htmlFor="status"
            className="block text-sm text-muted mb-1"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={e => setStatus(e.target.value as ApplicationStatus)}
            className={inputClass}
          >
            {STATUS_OPTIONS.map(s => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm text-muted mb-1">
            Notes
          </label>
          <textarea
            id="notes"
            rows={6}
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Internal notes. Visible only to admins."
            className={inputClass}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
          {message && (
            <span
              className={
                message.kind === 'ok'
                  ? 'text-green-400 text-sm'
                  : 'text-red-400 text-sm'
              }
            >
              {message.text}
            </span>
          )}
        </div>
      </section>
    </div>
  )
}
