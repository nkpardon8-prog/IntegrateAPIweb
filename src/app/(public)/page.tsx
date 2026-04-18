import { Hero } from '@/components/sections/hero'
import { UnderservedIndustries } from '@/components/sections/underserved-industries'
import { StatsBar } from '@/components/sections/stats-bar'
import { PainPoints } from '@/components/sections/pain-points'
import { AgentAnatomySection } from '@/components/sections/agent-anatomy-section'
import { ServicesOverview } from '@/components/sections/services-overview'
import { HowItWorksPreview } from '@/components/sections/how-it-works-preview'
import { ResultsPreview } from '@/components/sections/results-preview'
import { CTASection } from '@/components/sections/cta-section'
import { FAQ } from '@/components/sections/faq'

export default function Home() {
  return (
    <>
      <Hero />
      <UnderservedIndustries />
      <StatsBar />
      <PainPoints />
      <AgentAnatomySection
        eyebrow="How an agent works"
        title="What an AI agent actually is."
        subtitle="Five moving parts. One system that runs without you in the loop."
      />
      <ServicesOverview />
      <HowItWorksPreview />
      <ResultsPreview />
      <CTASection />
      <FAQ />
    </>
  )
}
