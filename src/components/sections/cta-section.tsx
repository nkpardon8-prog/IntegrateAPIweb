import Link from 'next/link'
import { FadeIn } from '@/components/motion/fade-in'

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({
  title = 'One week on us.',
  subtitle = 'We come in, watch how you work, and tell you exactly where AI and tech can change things. Then you decide.',
  buttonText = 'Book Your Discovery',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="bg-card border border-border rounded-xl p-10 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-8">{subtitle}</p>
            <Link
              href={buttonHref}
              className="inline-block bg-accent hover:bg-accent-hover text-white font-medium px-8 py-4 rounded-lg transition-colors text-lg"
            >
              {buttonText}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
