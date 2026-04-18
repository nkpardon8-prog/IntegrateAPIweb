import { z } from 'zod'

export const applicationSchema = z.object({
  role_slug: z.string().min(1),
  first_name: z.string().min(1).max(80),
  last_name: z.string().min(1).max(80),
  email: z.string().email(),
  phone: z.string().min(7).max(30),
  school: z.string().min(1).max(120),
  year: z.enum(['Freshman', 'Sophomore', 'Junior', 'Senior', 'Grad Student', 'Recent Grad']),
  linkedin_url: z.string().trim().url().or(z.literal('')).optional(),
  availability_hours: z.number().int().min(1).max(60),
  why_this_role: z.string().min(20).max(300),
  experience_story: z.string().min(20).max(500),
})

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1).max(200),
})

export const updateApplicationSchema = z.object({
  status: z.enum(['new', 'reviewing', 'interviewing', 'offer', 'hired', 'rejected']).optional(),
  notes: z.string().max(5000).optional(),
})
