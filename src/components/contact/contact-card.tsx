import Image from 'next/image'
import { Mail, MessageSquare, Phone } from 'lucide-react'
import type { TeamMember } from '@/data/team'

interface ContactCardProps {
  member: TeamMember
}

export function ContactCard({ member }: ContactCardProps) {
  const linkClass =
    'flex items-center gap-1.5 border border-white/[0.08] hover:border-white/20 rounded-lg px-3 py-2 text-sm text-[#a0a0b0] hover:text-white transition-colors'

  return (
    <div className="bg-[#1a1a2e] border border-white/[0.08] rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image
          src={member.photo}
          alt={member.name}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-[#f0f0f0]">{member.name}</p>
          <p className="text-sm text-[#a0a0b0]">{member.title}</p>
          <p className="text-xs text-[#a0a0b0] mt-0.5">{member.role}</p>
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
