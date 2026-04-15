import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

export const metadata: Metadata = {
  title: 'How It Works | IntegrateAPI',
  description:
    'No risk, no fluff, just results. Learn how our discovery process works and how we build trust before asking for your commitment.',
}

const discoverySteps = [
  {
    number: '01',
    week: 'Week 1',
    title: 'We show up.',
    description:
      'We observe your operations, talk to your team, and find where AI and automation would hit hardest. No charge.',
  },
  {
    number: '02',
    week: 'Week 2',
    title: 'We build the plan.',
    description:
      'We write a custom plan focused on saving you time, reducing stress, and cutting costs. Still no charge.',
  },
  {
    number: '03',
    week: 'End of Week 2',
    title: 'You decide.',
    description:
      'We present, you choose. If yes, we move forward with clear pricing. If no, we part ways. No strings.',
  },
]

const phases = [
  {
    phase: 'Phase 1',
    label: 'Start Small',
    description:
      'One or two fast wins within days or weeks. We prove value before asking for more.',
  },
  {
    phase: 'Phase 2',
    label: 'Build Trust',
    description:
      'With results on the board, we step into medium work — CRM, campaign systems, automated pipelines.',
  },
  {
    phase: 'Phase 3',
    label: 'Go Deep',
    description:
      'Full automation, agentic systems, everything evolving with your business as it grows.',
  },
]

export default function HowItWorksPage() {
  return (
    <div className="bg-[#121220] text-[#f0f0f0]">
      {/* Page header */}
      <section className="py-20 md:py-28 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#3b82f6] text-sm font-medium tracking-widest uppercase mb-4">
              Process
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              No risk. No fluff. Just results.
            </h1>
            <p className="text-xl text-[#a0a0b0] max-w-2xl">
              We remove every barrier to saying yes. If what we build doesn&apos;t work for you, you pay nothing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Discovery Engagement */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discovery Engagement
            </h2>
            <p className="text-[#a0a0b0] text-lg mb-16 max-w-2xl">
              The first two weeks are how we earn the right to work with you.
            </p>
          </FadeIn>

          {/* Steps — vertical on mobile, horizontal on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 relative">
            {/* Connector line on desktop */}
            <div className="hidden md:block absolute top-12 left-[calc(16.666%+1rem)] right-[calc(16.666%+1rem)] h-px bg-white/[0.08]" />

            {discoverySteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="relative flex md:flex-col gap-6 md:gap-4 pb-12 md:pb-0">
                  {/* Vertical line on mobile */}
                  {i < discoverySteps.length - 1 && (
                    <div className="md:hidden absolute left-6 top-14 bottom-0 w-px bg-white/[0.08]" />
                  )}

                  {/* Number bubble */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center z-10">
                    <span className="text-[#3b82f6] font-bold text-sm">{step.number}</span>
                  </div>

                  <div>
                    <p className="text-[#3b82f6] text-xs font-medium tracking-widest uppercase mb-1">
                      {step.week}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-[#a0a0b0] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Callout */}
          <FadeIn delay={0.3}>
            <div className="mt-16 bg-[#1a1a2e] border border-white/[0.08] rounded-xl p-8 text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#f0f0f0]">
                The entire discovery is on us.
              </p>
              <p className="text-[#3b82f6] text-xl font-semibold mt-2">
                Zero cost. Zero commitment.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Escalation Model */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How we grow together
            </h2>
            <p className="text-[#a0a0b0] text-lg mb-16 max-w-2xl">
              We never lead with the biggest solution. We earn the right to go deeper.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((p, i) => (
              <FadeIn key={p.phase} delay={i * 0.1}>
                <div
                  className="bg-[#1a1a2e] border border-white/[0.08] rounded-xl p-6 h-full flex flex-col gap-3"
                  style={{ borderTopWidth: '3px', borderTopColor: `rgba(59,130,246,${0.4 + i * 0.3})` }}
                >
                  <p className="text-[#3b82f6] text-xs font-medium tracking-widest uppercase">
                    {p.phase}
                  </p>
                  <h3 className="text-xl font-bold">{p.label}</h3>
                  <p className="text-[#a0a0b0] leading-relaxed text-sm">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why we work this way */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why we work this way
              </h2>
              <p className="text-[#a0a0b0] text-lg leading-relaxed mb-4">
                Most tech vendors show up with a product and try to fit your business into it. We do the opposite.
              </p>
              <p className="text-[#a0a0b0] text-lg leading-relaxed mb-4">
                We earn trust through results, not through contracts. Small wins first. If those land, we go deeper. If they don&apos;t, we haven&apos;t wasted your time or money.
              </p>
              <p className="text-[#a0a0b0] text-lg leading-relaxed">
                That&apos;s the only way we know how to build a real working relationship.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ul className="mt-8 space-y-3">
                {[
                  'No long-term contracts required to start',
                  'No black-box pricing',
                  'No handoff to a support team after we build',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#a0a0b0]">
                    <Check className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See what two weeks looks like
            </h2>
            <p className="text-[#a0a0b0] mb-8 text-lg">
              No commitment. No cost. Just a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Book your free discovery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
