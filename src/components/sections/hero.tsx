import Link from 'next/link'
import { FadeIn } from '@/components/motion/fade-in'

export function Hero() {
  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.15) 0%, #121220 60%)',
        backgroundColor: '#121220',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center md:mx-0 md:text-left">
          <FadeIn delay={0}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f0f0f0] leading-tight tracking-tight mb-6">
              Your outsourced AI and tech department.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg sm:text-xl text-[#a0a0b0] leading-relaxed mb-10 max-w-2xl">
              We come in free, learn your business, and tell you where the opportunities are. You decide if you want to build.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium px-6 py-3 rounded-lg transition-colors text-center"
              >
                Book Your Discovery
              </Link>
              <Link
                href="/how-it-works"
                className="border border-white/[0.08] hover:border-white/20 text-white px-6 py-3 rounded-lg transition-colors text-center"
              >
                See How It Works
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
