import Link from 'next/link'
import type { ComponentType } from 'react'
import { Bot, Code2, TrendingUp, Cog, Phone, Globe, GraduationCap, RefreshCw, ArrowRight, LucideIcon } from 'lucide-react'
import { services } from '@/data/services'
import { FadeIn } from '@/components/motion/fade-in'
import { AiAgentSystemsGraphic } from '@/components/graphics/services/ai-agent-systems'
import { CustomSoftwareCrmGraphic } from '@/components/graphics/services/custom-software-crm'
import { AutomatedSalesPipelinesGraphic } from '@/components/graphics/services/automated-sales-pipelines'
import { BackOfficeAutomationGraphic } from '@/components/graphics/services/back-office-automation'
import { AiPhoneSystemsGraphic } from '@/components/graphics/services/ai-phone-systems'
import { WebsitesDigitalPresenceGraphic } from '@/components/graphics/services/websites-digital-presence'
import { StaffTrainingAiAdoptionGraphic } from '@/components/graphics/services/staff-training-ai-adoption'
import { SystemMaintenanceEvolutionGraphic } from '@/components/graphics/services/system-maintenance-evolution'

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

const graphicMap: Record<string, ComponentType> = {
  'ai-agent-systems': AiAgentSystemsGraphic,
  'custom-software-crm': CustomSoftwareCrmGraphic,
  'automated-sales-pipelines': AutomatedSalesPipelinesGraphic,
  'back-office-automation': BackOfficeAutomationGraphic,
  'ai-phone-systems': AiPhoneSystemsGraphic,
  'websites-digital-presence': WebsitesDigitalPresenceGraphic,
  'staff-training-ai-adoption': StaffTrainingAiAdoptionGraphic,
  'system-maintenance-evolution': SystemMaintenanceEvolutionGraphic,
}

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What we build</h2>
            <p className="text-muted text-lg">Everything your business needs to run on autopilot.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            const Graphic = graphicMap[service.id]
            return (
              <FadeIn key={service.id} delay={i * 0.05}>
                <div className="bg-background border border-border rounded-xl p-6 h-full">
                  {Graphic ? (
                    <div className="text-accent mb-4">
                      <Graphic />
                    </div>
                  ) : (
                    Icon && <Icon className="w-7 h-7 text-accent mb-3" />
                  )}
                  <h3 className="text-foreground font-semibold mb-2 text-sm sm:text-base">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
        <FadeIn delay={0.2}>
          <div className="text-center mt-10">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
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
