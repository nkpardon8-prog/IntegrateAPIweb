import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Job } from '@/data/jobs'

interface RoleCardProps {
  job: Job
}

export function RoleCard({ job }: RoleCardProps) {
  return (
    <div className="bg-[#1a1a2e] border border-white/[0.08] rounded-xl p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-[#f0f0f0] mb-3">{job.title}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs font-medium text-[#3b82f6] border border-[#3b82f6]/30 bg-[#3b82f6]/10 rounded px-2 py-1">
          {job.type}
        </span>
        <span className="text-xs font-medium text-[#a0a0b0] border border-white/[0.08] bg-white/[0.03] rounded px-2 py-1">
          {job.location}
        </span>
      </div>

      <p className="text-[#a0a0b0] text-sm leading-relaxed mb-6 flex-1">{job.summary}</p>

      <Link
        href={`/opportunities/${job.slug}`}
        className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#2563eb] font-medium text-sm transition-colors"
      >
        View role
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
