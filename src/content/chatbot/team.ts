import { team as teamData } from '@/data/team'

const [nick, omid] = teamData

export const team = `Two co-founders. Both engineers and operators, not salespeople. They started IntegrateAPI because they saw SMBs getting left behind on AI adoption, paying for generic SaaS that did not fit their workflows while their actual problems went untouched.

${nick.name}, ${nick.title}.
Role: ${nick.role}.
Email: ${nick.email}
Phone: ${nick.phoneDisplay}
What he does: the first point of contact for most prospects. Runs discovery engagements, scopes work, and stays close to the client relationship after the build. Grew up around real businesses and understands what "this has to actually work" looks like.

${omid.name}, ${omid.title}.
Role: ${omid.role}.
Email: ${omid.email}
Phone: ${omid.phoneDisplay}
What he does: builds the systems. Owns the technical architecture, picks the tools, and writes the code that ships. When a client asks "can you do X?" the answer usually depends on what Omid says is buildable.

Who you'll actually work with:
There's no hand-off to a support team. The people who build the thing maintain the thing. When you message IntegrateAPI, you're talking to one of the two founders, not a customer-service layer.

Where they are:
Salt Lake City and Seattle. In-person when it's local, remote when the work supports it. The discovery engagement is in-person whenever possible because watching the business is the whole point.

Why the site keeps saying "we":
Because ${nick.name.split(' ')[0]} and ${omid.name.split(' ')[0]} work as a unit. ${nick.name.split(' ')[0]} shows up first, ${omid.name.split(' ')[0]} builds, both stay embedded during the engagement. Retainers and project work both involve both of them, not just one.
`
