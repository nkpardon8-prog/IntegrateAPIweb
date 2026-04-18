import { Fragment } from 'react'
import { Zap, Sparkles, Wrench, GitBranch, Target, ChevronRight } from 'lucide-react'

const BLOCKS = [
  { icon: Zap, label: 'Trigger', detail: 'Inbound email, form, call, webhook, or schedule' },
  { icon: Sparkles, label: 'Brain', detail: 'LLM + instructions + memory' },
  { icon: Wrench, label: 'Tools', detail: 'CRM, email, calendar, DB, phone, docs' },
  { icon: GitBranch, label: 'Decisions', detail: 'Route, draft, update, or escalate' },
  { icon: Target, label: 'Outcomes', detail: 'Humans handle the 10% that needs judgment' },
]

export function AgentAnatomyDiagram() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-2">
      {BLOCKS.map((b, i) => {
        const Icon = b.icon
        return (
          <Fragment key={b.label}>
            <div className="lg:flex-1 bg-card border border-border rounded-xl p-5 md:p-6 flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-sm font-semibold text-foreground">{b.label}</p>
              <p className="text-xs text-muted leading-snug">{b.detail}</p>
            </div>
            {i < BLOCKS.length - 1 && (
              <ChevronRight
                className="hidden lg:block w-4 h-4 text-muted flex-shrink-0"
                aria-hidden
              />
            )}
          </Fragment>
        )
      })}
    </div>
  )
}
