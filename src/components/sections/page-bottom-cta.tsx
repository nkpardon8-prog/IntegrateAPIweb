import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { ChatTriggerButton } from '@/components/chat/chat-trigger-button'

interface PageBottomCTAProps {
  title: string
  subtitle: string
  primaryLabel: string
  primaryHref?: string
}

export function PageBottomCTA({
  title,
  subtitle,
  primaryLabel,
  primaryHref = '/contact',
}: PageBottomCTAProps) {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted mb-8 text-lg">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <ChatTriggerButton variant="secondary" label="Ask the bot" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
