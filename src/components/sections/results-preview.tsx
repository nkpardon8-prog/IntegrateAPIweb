import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/data/case-studies'
import { FadeIn } from '@/components/motion/fade-in'

export function ResultsPreview() {
  const featured = caseStudies.slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0f0] text-center mb-4">
            Real businesses. Real results.
          </h2>
          <p className="text-[#a0a0b0] text-center text-lg mb-12">No client names. Just outcomes.</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((study, i) => (
            <FadeIn key={study.id} delay={i * 0.1}>
              <div className="bg-[#121220] border border-white/[0.08] rounded-xl p-6 h-full flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-medium text-[#3b82f6] border border-[#3b82f6]/30 bg-[#3b82f6]/10 rounded px-2 py-1">
                    {study.badge}
                  </span>
                </div>
                <p className="text-3xl font-bold text-[#f0f0f0] mb-4">{study.metric}</p>
                <p className="text-[#a0a0b0] text-sm leading-relaxed mb-3 flex-1">
                  <span className="text-[#f0f0f0] font-medium">Problem: </span>
                  {study.problem}
                </p>
                <p className="text-[#a0a0b0] text-sm leading-relaxed">
                  <span className="text-[#f0f0f0] font-medium">Outcome: </span>
                  {study.outcome}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#2563eb] font-medium transition-colors"
            >
              See all results
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
