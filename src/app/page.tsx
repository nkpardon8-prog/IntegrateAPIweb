import { Hero } from '@/components/sections/hero'
import { StatsBar } from '@/components/sections/stats-bar'
import { PainPoints } from '@/components/sections/pain-points'
import { ServicesOverview } from '@/components/sections/services-overview'
import { HowItWorksPreview } from '@/components/sections/how-it-works-preview'
import { ResultsPreview } from '@/components/sections/results-preview'
import { CTASection } from '@/components/sections/cta-section'
import { FAQ } from '@/components/sections/faq'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <PainPoints />
      <ServicesOverview />
      <HowItWorksPreview />
      <ResultsPreview />
      <CTASection />
      <FAQ />
    </>
  )
}
