export interface TeamMember {
  name: string
  title: string
  role: string
  email: string
  phone: string
  phoneDisplay: string
  photo: string
}

export const team: TeamMember[] = [
  {
    name: "Nick Pardon",
    title: "Co-founder",
    role: "Sales, business development, and client relationships",
    email: "nick@integrateapi.ai",
    phone: "4252293497",
    phoneDisplay: "(425) 229-3497",
    photo: "/team/nicholas.png",
  },
  {
    name: "Omid Zahrai",
    title: "Co-founder",
    role: "Technical leadership and engineering",
    email: "omid@integrateapi.ai",
    phone: "4254421742",
    phoneDisplay: "(425) 442-1742",
    photo: "/team/omid.png",
  },
]
