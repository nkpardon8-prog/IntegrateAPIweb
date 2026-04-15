'use client'

import { CountUp } from '@/components/motion/count-up'

export function StatsBar() {
  return (
    <section className="py-12 bg-[#1a1a2e] border-y border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          <div className="flex flex-col items-center py-6 sm:py-0 sm:px-12 text-center">
            <span className="text-4xl font-bold text-[#f0f0f0]">2 weeks</span>
            <span className="text-[#a0a0b0] mt-1 text-sm">No charge. No commitment.</span>
          </div>
          <div className="flex flex-col items-center py-6 sm:py-0 sm:px-12 text-center">
            <span className="text-4xl font-bold text-[#f0f0f0]">
              <CountUp from={0} to={10} duration={1.8} suffix="+" />
            </span>
            <span className="text-[#a0a0b0] mt-1 text-sm">Booked calls per month</span>
          </div>
          <div className="flex flex-col items-center py-6 sm:py-0 sm:px-12 text-center">
            <span className="text-4xl font-bold text-[#f0f0f0]">0</span>
            <span className="text-[#a0a0b0] mt-1 text-sm">Double-sells for clients</span>
          </div>
          <div className="flex flex-col items-center py-6 sm:py-0 sm:px-12 text-center">
            <span className="text-4xl font-bold text-[#f0f0f0]">
              <CountUp from={0} to={3} duration={1.5} suffix="x" />
            </span>
            <span className="text-[#a0a0b0] mt-1 text-sm">Pipeline growth</span>
          </div>
        </div>
      </div>
    </section>
  )
}
