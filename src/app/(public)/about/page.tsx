import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { team } from '@/data/team'
import { FadeIn } from '@/components/motion/fade-in'
import { PageBottomCTA } from '@/components/sections/page-bottom-cta'

export const metadata: Metadata = {
  title: 'About IntegrateAPI',
  description:
    'Engineers and operators who build real systems for real businesses. Based in Salt Lake City and Seattle.',
}

const differentiators = [
  {
    title: "We start with your problems, not our products",
    description:
      "We have no software to push. We show up, learn how you operate, and build what actually fits. The solution comes after the problem.",
  },
  {
    title: "We stay",
    description:
      "After we build, we maintain, train, and evolve. The relationship doesn't end at delivery. We're there when things break and when you want to grow.",
  },
  {
    title: "We earn the right to go deeper",
    description:
      "Small wins first. Trust before scale. We prove value with something fast before asking you to go all-in on a bigger system.",
  },
]

const markets = [
  {
    region: 'Salt Lake City area',
    detail: 'Wasatch Front',
  },
  {
    region: 'Seattle area',
    detail: 'Puget Sound',
  },
  {
    region: 'Remote-capable',
    detail: 'For the right fit',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              We are not here to sell hype.
            </h1>
          </FadeIn>
          <div className="max-w-3xl space-y-5">
            <FadeIn delay={0.05}>
              <p className="text-xl text-muted leading-relaxed">
                Most tech vendors show up with a pitch deck and a SaaS subscription. We show up with questions.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted leading-relaxed">
                The first week is on us. We come in, learn your business, find where the problems are, and tell you where the opportunities are. You decide what happens after.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-lg text-muted leading-relaxed">
                We are engineers and operators who have built real systems for real businesses. We know what works and what gets bought but never used.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What makes us different
            </h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">
              Three things separate how we work from everyone else in the space.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col gap-3">
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{d.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Where we work
            </h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">
              We focus on specific markets where we can show up in person, not just over Zoom.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {markets.map((m, i) => (
              <FadeIn key={m.region} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{m.region}</p>
                    <p className="text-muted text-sm mt-1">{m.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The team
            </h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">
              Two founders. One focused on client relationships, one focused on building.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row gap-6">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-background relative">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between gap-4 flex-1">
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-accent text-sm font-medium mt-0.5">{member.title}</p>
                      <p className="text-muted text-sm mt-2 leading-relaxed">{member.role}</p>
                    </div>

                    <div className="flex flex-col gap-1.5 text-sm">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted hover:text-accent transition-colors"
                      >
                        {member.email}
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="text-muted hover:text-accent transition-colors"
                      >
                        {member.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PageBottomCTA
        title="Work with us"
        subtitle="One week on us. Find out where the opportunities are in your business."
        primaryLabel="Get in touch"
      />
    </div>
  )
}
