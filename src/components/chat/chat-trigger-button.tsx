'use client'

import { MessageSquare } from 'lucide-react'
import { chatStore } from './chat-store'

interface ChatTriggerButtonProps {
  variant?: 'primary' | 'secondary'
  label?: string
  className?: string
}

export function ChatTriggerButton({
  variant = 'secondary',
  label = 'Ask the bot',
  className = '',
}: ChatTriggerButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium px-6 py-3 rounded-lg transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-accent hover:bg-accent-hover text-white'
      : 'border border-border hover:border-border-strong text-foreground'

  return (
    <button
      type="button"
      onClick={() => chatStore.open()}
      className={`${base} ${styles} ${className}`.trim()}
    >
      <MessageSquare size={18} />
      {label}
    </button>
  )
}
