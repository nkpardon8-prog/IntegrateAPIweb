import { Clock, DollarSign, Zap } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

const points = [
  {
    icon: Clock,
    heading: 'Your time is disappearing.',
    description: "You're losing 10+ hours a week to tasks AI could handle in seconds.",
  },
  {
    icon: DollarSign,
    heading: 'Revenue is slipping through the cracks.',
    description: 'Leads go cold. Pipelines stall. Revenue is slipping through manual processes.',
  },
  {
    icon: Zap,
    heading: 'Running a business is harder than it should be.',
    description: 'Running a business without the right tech feels harder than it needs to.',
  },
]

export function PainPoints() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#121220' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0f0] text-center mb-12">
            Sound familiar?
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <FadeIn key={point.heading} delay={i * 0.1}>
              <div className="bg-[#1a1a2e] border border-white/[0.08] rounded-xl p-6 h-full">
                <point.icon className="w-8 h-8 text-[#3b82f6] mb-4" />
                <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2">{point.heading}</h3>
                <p className="text-[#a0a0b0] leading-relaxed">{point.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
