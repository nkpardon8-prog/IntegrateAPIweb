import Link from 'next/link'
import { Bot, Code2, TrendingUp, Cog, Phone, Globe, GraduationCap, RefreshCw, ArrowRight, LucideIcon } from 'lucide-react'
import { services } from '@/data/services'
import { FadeIn } from '@/components/motion/fade-in'

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Code2,
  TrendingUp,
  Cog,
  Phone,
  Globe,
  GraduationCap,
  RefreshCw,
}

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0f0] mb-4">What we build</h2>
            <p className="text-[#a0a0b0] text-lg">Everything your business needs to run on autopilot.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <FadeIn key={service.id} delay={i * 0.05}>
                <div className="bg-[#121220] border border-white/[0.08] rounded-xl p-6 h-full">
                  {Icon && <Icon className="w-7 h-7 text-[#3b82f6] mb-3" />}
                  <h3 className="text-[#f0f0f0] font-semibold mb-2 text-sm sm:text-base">{service.title}</h3>
                  <p className="text-[#a0a0b0] text-sm leading-relaxed">{service.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
        <FadeIn delay={0.2}>
          <div className="text-center mt-10">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#2563eb] font-medium transition-colors"
            >
              See everything we do
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
