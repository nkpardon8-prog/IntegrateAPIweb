import Link from 'next/link'
import { FadeIn } from '@/components/motion/fade-in'

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({
  title = 'Two weeks. No charge. No commitment.',
  subtitle = "We learn your business and build a custom plan. If you like it, we move forward. If you don't, we part ways.",
  buttonText = 'Book Your Free Discovery',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#121220' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="bg-[#1a1a2e] border border-white/[0.08] rounded-xl p-10 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0f0] mb-4">{title}</h2>
            <p className="text-[#a0a0b0] text-lg max-w-2xl mx-auto mb-8">{subtitle}</p>
            <Link
              href={buttonHref}
              className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium px-8 py-4 rounded-lg transition-colors text-lg"
            >
              {buttonText}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
