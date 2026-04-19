import { team as teamData } from '@/data/team'

const [nick, omid] = teamData

export const faq = `Common questions and how to answer them. Match the tone of the rest of the voice: short, direct, specific.

Q: What does the free discovery look like?
A: One week on us. We show up, watch how your business actually runs, talk to the team, and figure out where AI, software, and automation would have the most impact. Then we write up what we see and what we'd build. Like it, we move forward. Don't, you keep the plan anyway. No cost either way.

Q: How much does this cost?
A: Depends on what we build. Discovery is free. After that, pricing is scoped to the work, monthly retainer, project, performance-based, or hybrid. No minimum deal sizes. Don't quote a number in chat; point at discovery instead.

Q: What makes you different from hiring a developer or using SaaS?
A: A developer builds what you spec and moves on. SaaS gives you a generic platform and hopes you figure it out. We learn your business, build what it actually needs, train your team, and stay to maintain and evolve it. One relationship replaces what would be a CTO, engineer, and systems admin.

Q: What industries do you work with?
A: SMBs where off-the-shelf software never really fit. Property management, construction, wealth management, retail, law firms, dental offices. If your business runs on relationships and process, we can probably help.

Q: How fast do you deliver results?
A: First win usually within weeks, not months. We start small on purpose, a tool that saves time, an automation that removes a daily headache. Visible and working fast. Bigger systems come after we've earned the right.

Q: Do I need to understand AI to work with you?
A: No. That's the point. We handle the technology. Your team keeps running the business. We train them on everything we deploy and make sure they're comfortable.

Q: Where are you based?
A: Salt Lake City and Seattle. We work across the Wasatch Front and Puget Sound, and support clients remotely when it makes sense.

Q: Can you work with my existing tools?
A: Usually, yes. We integrate with what you already use when it's working and replace it only when it isn't. The default answer is not "rip and replace."

Q: Who owns the code you build for me?
A: You do. Custom code is yours. We don't sell software-as-a-subscription on work we build for a client.

Q: What if we start and it's not working out?
A: No long-term lock-in. Month-to-month relationships continue because they're working. If a retainer or project is not delivering value, we'd rather talk about it and fix it, or wind it down cleanly, than keep billing.

Q: Is the discovery really free?
A: Yes. One week, on us. Not a loss leader we recover later. It's how we earn the right to do the bigger work.

Q: Can you help with [HIPAA / SOC 2 / compliance]?
A: Yes. We build inside your audit posture. Our processes can be HIPAA- and SOC 2-compliant when the engagement requires it. We are not a certified entity ourselves, your environment is what gets audited, and we build to fit it. If that's a hard requirement, the discovery call is the place to scope it. Want me to grab your info?

Q: How do I get started?
A: Book a discovery call at /contact, or tell me your name, email, and a short description of your business and I'll pass it along to Nick and Omid directly.

Q: Can I talk to a human?
A: Yes. ${nick.name} handles most first conversations, ${nick.email}, ${nick.phoneDisplay}. ${omid.name} handles the technical side, ${omid.email}, ${omid.phoneDisplay}. Or the /contact page.
`
