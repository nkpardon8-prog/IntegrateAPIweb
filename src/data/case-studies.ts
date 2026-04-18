export interface CaseStudy {
  id: string
  industry: string
  badge: string
  problem: string
  solution: string
  outcome: string
  metric: string
  image?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: "property-management",
    industry: "B2B Outreach Platform",
    badge: "3x pipeline growth",
    problem:
      "Limited capacity for client outreach meant missed opportunities to grow the book. The team was stretched thin and couldn't both serve clients and prospect.",
    solution:
      "A custom CRM that surfaces the hottest leads automatically, runs outreach sequences on autopilot, and gives the team a single pipeline view. Built from the ground up around the actual workflow.",
    outcome:
      "Pipeline grew systematically without new hires. Outreach runs on autopilot. The team spends their time in meetings, not chasing leads.",
    metric: "3x pipeline growth",
    image: "/images/products/connect-crm-dashboard.png",
  },
  {
    id: "construction",
    industry: "Service Business Ops",
    badge: "1 unified platform",
    problem:
      "Client communications, enrollment tracking, scheduling, and lead outreach were scattered across email, texts, spreadsheets, and three disconnected tools.",
    solution:
      "One dashboard that handles client management, recurring-enrollment tracking, follow-up scheduling, and outreach — all tied into a single source of truth. Custom-fit to the business's actual workflow.",
    outcome:
      "Operations run from one dashboard. Outreach runs 24/7. Time that used to go into managing software now goes into running the business.",
    metric: "1 unified platform",
    image: "/images/products/service-business-dashboard.png",
  },
  {
    id: "wealth-management",
    industry: "Dental Practice Management",
    badge: "Unified admin",
    problem:
      "Practice management tools were generic, expensive, and cloud-only — concerns about data location and billing fit for a small local practice.",
    solution:
      "A custom dashboard that runs locally, tracks production + employee activity + claims, and fits the practice's real workflow. Data stays on-prem.",
    outcome:
      "A single place to track production, employee activity, and claims — built to the practice's exact workflow. Data stays on the office network.",
    metric: "Unified admin",
    image: "/images/products/dental-admin-login.png",
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
