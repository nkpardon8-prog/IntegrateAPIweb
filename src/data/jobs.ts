export interface Job {
  slug: string
  title: string
  type: string
  location: string
  summary: string
  body: string[]
  qualifications: string[]
  niceToHave: string[]
  published: boolean
}

export const jobs: Job[] = [
  {
    slug: 'sales-part-time',
    title: 'Part-Time Sales Rep',
    type: 'Part-Time',
    location: 'Remote (SLC / Seattle preferred)',
    summary:
      'Entry-level sales role for college students who are curious about AI and tech and want to grow with an early-stage company.',
    body: [
      'We are hiring part-time sales reps, built for college students. You won\u2019t need deep sales experience to start. You will need to be sharp, curious, and willing to learn fast.',
      'Your day-to-day: outbound outreach, booking calls for our founders, following up with warm leads, and representing IntegrateAPI to small business owners. We will train you on everything: the tooling, the pitch, the objection handling.',
      'Why this role is interesting: if you want to learn how AI is actually being deployed inside real businesses, you get a front-row seat. If you want to move horizontally into product or engineering later, we support that path.',
    ],
    qualifications: [
      'Current college student (any year) or recent grad',
      'Comfortable on the phone and on email. Clear communicator.',
      'Curious about AI, software, and how businesses actually work',
      'Organized and reliable with a flexible schedule (10 to 20 hrs/week)',
    ],
    niceToHave: [
      'Prior sales, BD, or customer-facing work (any industry)',
      'Basic familiarity with CRMs, LinkedIn Sales Navigator, or Apollo',
      'Interest in building product. We support lateral moves into engineering for reps who want it.',
    ],
    published: true,
  },
]
