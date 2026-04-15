export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: "ai-agent-systems",
    title: "AI Agent Systems",
    description:
      "We build AI agents that handle tasks end-to-end. No human involvement needed. They make decisions, complete workflows, and get things done while your team focuses on what matters.",
    icon: "Bot",
  },
  {
    id: "custom-software-crm",
    title: "Custom Software & CRM",
    description:
      "Your business runs differently than everyone else's. Your software should too. We build tools that fit how you actually work, not the other way around.",
    icon: "Code2",
  },
  {
    id: "automated-sales-pipelines",
    title: "Automated Sales Pipelines",
    description:
      "From finding leads to booking calls, we build pipelines that run on autopilot. You take the calls. We handle everything before that moment.",
    icon: "TrendingUp",
  },
  {
    id: "back-office-automation",
    title: "Back Office Automation",
    description:
      "Data entry, reporting, scheduling, document generation. If it costs time without requiring human judgment, we automate it.",
    icon: "Cog",
  },
  {
    id: "ai-phone-systems",
    title: "AI Phone Systems",
    description:
      "Inbound screening, outbound calling, call routing, voicemail handling. AI-powered phone systems that integrate with what you already use.",
    icon: "Phone",
  },
  {
    id: "websites-digital-presence",
    title: "Websites & Digital Presence",
    description:
      "From landing pages to full web applications. We build functional, professional digital presences with AI features baked in.",
    icon: "Globe",
  },
  {
    id: "staff-training-ai-adoption",
    title: "Staff Training & AI Adoption",
    description:
      "Technology is only as good as the people using it. We train your team, build sustainable workflows, and make sure what we deploy actually sticks.",
    icon: "GraduationCap",
  },
  {
    id: "system-maintenance-evolution",
    title: "System Maintenance & Evolution",
    description:
      "We stay. After we build, we maintain, update, and evolve. As AI improves and your business grows, we keep everything running.",
    icon: "RefreshCw",
  },
]
