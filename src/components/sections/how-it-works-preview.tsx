import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

const steps = [
  {
    step: '01',
    label: 'Week 1',
    heading: 'We show up.',
    description: 'We spend time inside your business. Learn how it actually runs. No charge.',
  },
  {
    step: '02',
    label: 'Week 2',
    heading: 'We build the plan.',
    description: 'Custom implementation plan: save time, reduce stress, make more money. Still no charge.',
  },
  {
    step: '03',
    label: 'Decision',
    heading: 'You decide.',
    description: 'We present the plan. You say yes or no. No strings either way.',
  },
]

export function HowItWorksPreview() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#121220' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0f0] text-center mb-12">
            How it works
          </h2>
        </FadeIn>
        <div className="flex flex-col md:flex-row gap-0 relative">
          {steps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.1} className="flex-1">
              <div className="flex flex-col md:items-start items-start p-6 relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-8 w-px h-16 bg-white/[0.08]" />
                )}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-bold text-[#3b82f6] opacity-40">{step.step}</span>
                  <span className="text-xs font-medium text-[#a0a0b0] uppercase tracking-wider border border-white/[0.08] rounded px-2 py-1">
                    {step.label}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">{step.heading}</h3>
                <p className="text-[#a0a0b0] leading-relaxed">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-2xl font-bold text-[#f0f0f0] mb-6">
              No charge for the first 2 weeks.
            </p>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#2563eb] font-medium transition-colors"
            >
              Learn the full process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
