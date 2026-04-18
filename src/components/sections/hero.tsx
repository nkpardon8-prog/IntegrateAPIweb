import Link from 'next/link'
import Image from 'next/image'
import { FadeIn } from '@/components/motion/fade-in'
import { BrowserFrame } from '@/components/graphics/browser-frame'
import heroImage from '../../../public/images/products/connect-crm-dashboard.png'

export function Hero() {
  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: 'var(--hero-gradient)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
            <FadeIn delay={0}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
                Your outsourced AI and tech department.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
                We come in free, learn your business, and tell you where the opportunities are. You decide if you want to build.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors text-center"
                >
                  Book Your Discovery
                </Link>
                <Link
                  href="/how-it-works"
                  className="border border-border hover:border-border-strong text-foreground px-6 py-3 rounded-lg transition-colors text-center"
                >
                  See How It Works
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="hidden md:block">
            <BrowserFrame className="max-w-lg ml-auto">
              <Image
                src={heroImage}
                alt="CRM dashboard showing lead funnel, weekly activity, and hottest leads"
                priority
                placeholder="blur"
                sizes="(min-width: 768px) 512px, 100vw"
                className="w-full h-auto"
              />
            </BrowserFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
