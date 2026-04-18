import { FadeIn } from '@/components/motion/fade-in'

export function UnderservedIndustries() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-8">
            Most businesses are underserved by technology. Most vendors make it worse. One-size-fits-all software sold with a pitch deck. We show up with questions instead.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <FadeIn delay={0.05}>
            <p className="text-muted text-lg leading-relaxed">
              We are not here to sell hype. We are engineers and operators. We show up in your business, watch how it actually runs, and tell you what we see.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted text-lg leading-relaxed">
              Every business in the modern era needs an AI and tech team. Off-the-shelf tools are built for everyone and fit no one. We implement existing tools, build custom software, and deploy full AI agent systems. We adapt as the business grows.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
