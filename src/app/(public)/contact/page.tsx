import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactCard } from '@/components/contact/contact-card'
import { CalEmbed } from '@/components/contact/cal-embed'
import { team } from '@/data/team'

export const metadata: Metadata = {
  title: 'Contact IntegrateAPI | Book Your Discovery',
}

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Ready to stop drowning in admin work?
        </h1>
        <p className="text-muted text-lg max-w-2xl">
          One week on us. We come in, watch how you work, and tell you exactly where AI and tech can change things. Then you decide.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="md:w-[60%]">
          <ContactForm />
        </div>
        <div className="md:w-[40%]">
          <p className="text-center text-muted text-sm mb-4">or book directly</p>
          <CalEmbed />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-foreground/[0.08]" />
        <span className="text-muted text-sm whitespace-nowrap">Or reach us directly</span>
        <div className="flex-1 h-px bg-foreground/[0.08]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {team.map(member => (
          <ContactCard key={member.email} member={member} />
        ))}
      </div>
    </div>
  )
}
