import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/data/case-studies'
import { FadeIn } from '@/components/motion/fade-in'

export function ResultsPreview() {
  const featured = caseStudies.slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            Real businesses. Real results.
          </h2>
          <p className="text-muted text-center text-lg mb-12">No client names. Just outcomes.</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((study, i) => (
            <FadeIn key={study.id} delay={i * 0.1}>
              <div className="bg-background border border-border rounded-xl overflow-hidden h-full flex flex-col">
                {study.image && (
                  <div className="relative aspect-[16/10] bg-background/50">
                    <Image
                      src={study.image}
                      alt={`${study.industry} — ${study.metric}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-accent border border-accent/30 bg-accent/10 rounded px-2 py-1">
                      {study.badge}
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-4">{study.metric}</p>
                  <p className="text-muted text-sm leading-relaxed mb-3 flex-1">
                    <span className="text-foreground font-medium">Problem: </span>
                    {study.problem}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    <span className="text-foreground font-medium">Outcome: </span>
                    {study.outcome}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
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
