'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { faq } from '@/data/faq'
import { FadeIn } from '@/components/motion/fade-in'

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Common questions
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
              {faq.map((item) => (
                <Accordion.Item
                  key={item.question}
                  value={item.question}
                  className="bg-background border border-border rounded-xl overflow-hidden"
                >
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left text-foreground font-medium hover:text-foreground group transition-colors">
                    <span>{item.question}</span>
                    <ChevronDown className="w-5 h-5 text-muted shrink-0 ml-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <p className="px-6 pb-5 text-muted leading-relaxed">{item.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
