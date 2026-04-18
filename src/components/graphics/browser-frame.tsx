import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BrowserFrameProps {
  children: ReactNode
  url?: string
  className?: string
}

export function BrowserFrame({ children, url, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden border border-border-strong bg-card shadow-2xl',
        className
      )}
    >
      <div className="flex items-center gap-2 px-3 py-2.5 bg-foreground/[0.04] border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-background/80 text-xs text-muted text-center truncate">
          {url ?? ''}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}
