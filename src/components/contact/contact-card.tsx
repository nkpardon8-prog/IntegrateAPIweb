import Image from 'next/image'
import { Mail, MessageSquare, Phone } from 'lucide-react'
import type { TeamMember } from '@/data/team'

interface ContactCardProps {
  member: TeamMember
}

export function ContactCard({ member }: ContactCardProps) {
  const linkClass =
    'flex items-center gap-1.5 border border-border hover:border-border-strong rounded-lg px-3 py-2 text-sm text-muted hover:text-foreground transition-colors'

  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image
          src={member.photo}
          alt={member.name}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-foreground">{member.name}</p>
          <p className="text-sm text-muted">{member.title}</p>
          <p className="text-xs text-muted mt-0.5">{member.role}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <a href={`mailto:${member.email}`} className={linkClass}>
          <Mail size={14} />
          Email
        </a>
        <a href={`sms:${member.phone}`} className={linkClass}>
          <MessageSquare size={14} />
          Text
        </a>
        <a href={`tel:${member.phone}`} className={linkClass}>
          <Phone size={14} />
          {member.phoneDisplay}
        </a>
      </div>
    </div>
  )
}
