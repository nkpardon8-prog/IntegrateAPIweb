export interface CaseStudy {
  id: string
  industry: string
  badge: string
  problem: string
  solution: string
  outcome: string
  metric: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: "property-management",
    industry: "Property Management",
    badge: "Property Mgmt",
    problem:
      "Tenant communications, maintenance requests, lease tracking, and lead outreach were scattered across email, texts, spreadsheets, and three disconnected tools. Nothing talked to anything else.",
    solution:
      "Built a custom property management and CRM platform. Tenant communications, maintenance workflows, lease tracking, and automated outreach sequences all live in one system built around the way the team actually works.",
    outcome:
      "Operations run from one dashboard. Outreach runs 24/7. Time that used to go into managing software now goes into managing properties.",
    metric: "1 unified platform",
  },
  {
    id: "construction",
    industry: "Construction",
    badge: "Construction",
    problem:
      "Job costing, crew scheduling, and change orders lived on paper, whiteboards, and spreadsheets. The office spent more time chasing information than running projects.",
    solution:
      "Built project management and job costing software tailored to the company's workflow. Materials, labor, schedules, and change orders tracked together, tied to live budget and margin.",
    outcome:
      "Margins visible in real time. Billing cycles shortened. Admin hours spent on tracking dropped meaningfully.",
    metric: "Live job visibility",
  },
  {
    id: "wealth-management",
    industry: "Wealth Management",
    badge: "Financial Advisory",
    problem:
      "Limited capacity for client outreach meant missed opportunities to grow the book. Advisors were stretched thin and couldn't both serve clients and prospect.",
    solution:
      "Built outreach automation tooling that expands the pipeline without adding headcount. Targeted sequences, follow-ups, and meeting booking running on autopilot.",
    outcome:
      "Pipeline grew systematically without new hires. Advisors spend their time in meetings, not chasing outreach.",
    metric: "3x pipeline growth",
  },
  {
    id: "retail-vinyl",
    industry: "Retail (Vinyl Records)",
    badge: "Retail",
    problem:
      "Inventory lived in a spreadsheet, an online storefront, and in the store itself, none of them in sync. Staff re-entered every record three times and still got it wrong.",
    solution:
      "Connected inventory dashboard with QR label printing and a live online storefront. One entry drives every channel. When something sells, it de-lists everywhere automatically.",
    outcome:
      "Hours of manual data entry removed from every week. Owner sees real-time stock across channels. Staff focus on customers, not spreadsheets.",
    metric: "Hours saved weekly",
  },
  {
    id: "law-firm",
    industry: "Law Firms",
    badge: "Legal",
    problem:
      "Client intake, matter tracking, document generation, and billing were split across disconnected tools and email. Every new matter meant significant manual setup.",
    solution:
      "Built a client intake and matter management system with automated document generation, deadline tracking, and billing summaries, scoped to how the firm actually practices.",
    outcome:
      "New matter setup time cut dramatically. Attorneys spend more time on cases, less on admin. Missed deadlines become harder to hit.",
    metric: "Faster intake",
  },
  {
    id: "dental",
    industry: "Dental Offices",
    badge: "Healthcare",
    problem:
      "Appointment reminders, recall campaigns, and post-treatment follow-ups were manual. Work fell through the cracks between visits, and the front desk was stuck on the phone.",
    solution:
      "Built automated patient communication workflows: reminders, recall notices, post-treatment follow-ups. All personalized per patient, running without staff input.",
    outcome:
      "No-shows dropped. Recall runs on autopilot. Front desk focuses on patients in the office, not chasing ones who aren't.",
    metric: "Fewer no-shows",
  },
]
