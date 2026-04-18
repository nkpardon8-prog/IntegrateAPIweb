import type { Metadata } from 'next'
import Link from 'next/link'
import { Bot, Code2, TrendingUp, Cog, Phone, Globe, GraduationCap, RefreshCw, ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import { FadeIn } from '@/components/motion/fade-in'
import type { LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What We Do | IntegrateAPI',
  description:
    'We build AI systems, automation tools, and custom software that fit how your business actually runs. No off-the-shelf solutions.',
}

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

export default function WhatWeDoPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Page header */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              What we build
            </h1>
            <p className="text-xl text-muted max-w-2xl">
              We don&apos;t sell software. We build what your business actually needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Bot
              return (
                <FadeIn key={service.id} delay={i * 0.05}>
                  <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="text-lg font-semibold">{service.title}</h2>
                    <p className="text-muted text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to see what we&apos;d build for you?
            </h2>
            <p className="text-muted mb-8 text-lg">
              One week on us. You decide what happens after.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors"
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
