import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/data/case-studies'
import { FadeIn } from '@/components/motion/fade-in'

export const metadata: Metadata = {
  title: 'Results | IntegrateAPI',
  description:
    'Industries we\u2019ve served. Real problems, real builds, real outcomes. No company names.',
}

export default function ResultsPage() {
  return (
    <div className="bg-[#121220] text-[#f0f0f0]">
      {/* Page header */}
      <section className="py-20 md:py-28 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#3b82f6] text-sm font-medium tracking-widest uppercase mb-4">
              Results
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Industries most vendors ignore.
            </h1>
            <p className="text-xl text-[#a0a0b0] max-w-2xl">
              These are sectors where off-the-shelf software was never really built for how the work actually runs. No company names. Just what the problem looked like, what we built, and what changed.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {caseStudies.map((cs, i) => (
              <FadeIn key={cs.id} delay={i * 0.08}>
                <div className="bg-[#1a1a2e] border border-white/[0.08] rounded-xl p-8">
                  {/* Top row: badge + metric */}
                  <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
                    <span className="bg-[#3b82f6]/20 text-[#3b82f6] text-xs px-3 py-1 rounded-full font-medium">
                      {cs.badge}
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-[#f0f0f0]">
                      {cs.metric}
                    </span>
                  </div>

                  {/* Industry */}
                  <p className="text-[#f0f0f0] text-xl font-semibold mb-6">{cs.industry}</p>

                  {/* Problem / Solution / Outcome */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-[#3b82f6] mb-2">
                        The Problem
                      </p>
                      <p className="text-[#a0a0b0] text-sm leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-[#3b82f6] mb-2">
                        What We Built
                      </p>
                      <p className="text-[#a0a0b0] text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-[#3b82f6] mb-2">
                        What Changed
                      </p>
                      <p className="text-[#a0a0b0] text-sm leading-relaxed">{cs.outcome}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* And more card */}
            <FadeIn delay={caseStudies.length * 0.08}>
              <div className="bg-[#1a1a2e] border border-dashed border-white/[0.12] rounded-xl p-8 text-center">
                <p className="text-[#f0f0f0] text-xl font-semibold mb-2">
                  And more.
                </p>
                <p className="text-[#a0a0b0] max-w-2xl mx-auto">
                  If your industry isn&apos;t on this list, that&apos;s usually a sign it needs the most work. Ask us.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Underserved industries reinforcement */}
      <section className="py-20 md:py-28 border-t border-white/[0.06] bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Most of these sectors have had almost no real tech investment built for them.
            </h2>
            <p className="text-[#a0a0b0] text-lg leading-relaxed mb-4">
              The software most SMBs run on was built for someone else. A generic CRM, a generic scheduler, a generic accounting tool. Configured, not built. Bent to fit.
            </p>
            <p className="text-[#a0a0b0] text-lg leading-relaxed">
              We build for how the business actually works. Existing tools when they fit. Custom software when they don&apos;t. AI agents where they make the work disappear. And we stay as the business changes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to be the next one?
            </h2>
            <p className="text-[#a0a0b0] mb-8 text-lg">
              One week on us. We come in, watch how you work, and tell you where the opportunities are.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Book Your Discovery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
