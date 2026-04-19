import type { Metadata } from 'next'
import Link from 'next/link'
import { Bot, Code2, TrendingUp, Cog, Phone, Globe, GraduationCap, RefreshCw, ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import { FadeIn } from '@/components/motion/fade-in'
import { AgentAnatomySection } from '@/components/sections/agent-anatomy-section'
import { PageBottomCTA } from '@/components/sections/page-bottom-cta'
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

      {/* Agent anatomy diagram */}
      <AgentAnatomySection
        title="Anatomy of an agent."
        subtitle="Every AI system we build breaks down into the same five parts."
      />

      {/* Compliance callout band */}
      <section className="py-12 border-y border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground mb-1">
              Built inside your audit posture.
            </p>
            <p className="text-sm text-muted max-w-2xl">
              Our processes can be HIPAA- and SOC 2-compliant when the engagement requires it. We
              build into your controls, not ours.
            </p>
          </div>
          <Link
            href="/compliance"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-medium transition-colors flex-shrink-0"
          >
            How we handle sensitive data
            <ArrowRight className="w-4 h-4" />
          </Link>
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

      <PageBottomCTA
        title="Ready to see what we'd build for you?"
        subtitle="One week on us. You decide what happens after."
        primaryLabel="Book Your Discovery"
      />
    </div>
  )
}
