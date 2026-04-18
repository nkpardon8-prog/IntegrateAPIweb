import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { AgentAnatomyDiagram } from './agent-anatomy-diagram'

interface AgentAnatomySectionProps {
  eyebrow?: string
  title: string
  subtitle: string
  cta?: { href: string; label: string }
}

export function AgentAnatomySection({ eyebrow, title, subtitle, cta }: AgentAnatomySectionProps) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            {eyebrow && (
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-muted text-lg leading-relaxed">{subtitle}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <AgentAnatomyDiagram />
        </FadeIn>
        {cta && (
          <FadeIn delay={0.2}>
            <div className="text-center mt-10">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
              >
                {cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
