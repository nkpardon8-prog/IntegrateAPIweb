import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Job } from '@/data/jobs'

interface RoleCardProps {
  job: Job
}

export function RoleCard({ job }: RoleCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-foreground mb-3">{job.title}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs font-medium text-accent border border-accent/30 bg-accent/10 rounded px-2 py-1">
          {job.type}
        </span>
        <span className="text-xs font-medium text-muted border border-border bg-foreground/[0.03] rounded px-2 py-1">
          {job.location}
        </span>
      </div>

      <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{job.summary}</p>

      <Link
        href={`/opportunities/${job.slug}`}
        className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium text-sm transition-colors"
      >
        View role
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
