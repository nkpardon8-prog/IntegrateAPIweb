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
    id: "record-store",
    industry: "Record Store",
    badge: "Retail",
    problem:
      "Managing inventory across in-store, online, and network sales channels meant re-entering data three times and constantly double-selling items.",
    solution:
      "Connected inventory dashboard with QR label printing and a live online storefront. One item entry drives all channels. When something sells, it de-lists everywhere automatically.",
    outcome:
      "Zero double-sells. Staff saves hours daily on manual data entry. Owner sees real-time inventory across all channels.",
    metric: "0 double-sells",
  },
  {
    id: "property-mgmt-crm",
    industry: "Property Management Company",
    badge: "Property Mgmt",
    problem:
      "Running outreach, managing tenants, and tracking marketing campaigns across disconnected tools. Lost a previous vendor to a GoHighLevel provider.",
    solution:
      "Built a full custom CRM and marketing automation platform. Centralized tenant management, automated outreach sequences, and campaign tracking in one system.",
    outcome:
      "Won the project over an established GoHighLevel provider. All operations consolidated into one platform.",
    metric: "1 unified platform",
  },
  {
    id: "property-mgmt-leads",
    industry: "Property Management Firm",
    badge: "Property Mgmt",
    problem:
      "Spending hours manually finding leads, running outreach, and trying to book property management contracts.",
    solution:
      "Automated the entire lead generation pipeline. Data scraping, outreach sequences, follow-ups, and call booking all running on autopilot.",
    outcome:
      "Client takes the calls. Everything before that moment is automated.",
    metric: "10+ booked calls/month",
  },
  {
    id: "financial-advisory",
    industry: "Financial Advisory Firm",
    badge: "Finance",
    problem:
      "Limited capacity for client outreach meant missing opportunities to grow the advisory practice.",
    solution:
      "Built outreach automation tools that expand the client pipeline without adding headcount.",
    outcome:
      "Expanding client pipeline systematically without hiring additional staff.",
    metric: "3x pipeline growth",
  },
]
