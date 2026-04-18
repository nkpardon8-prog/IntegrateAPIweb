import { neon } from '@netlify/neon'

// Lazy: neon() reads NETLIFY_DATABASE_URL at call-time, not module-load.
// This keeps next build from crashing when the env var isn't populated yet.
type SqlFn = ReturnType<typeof neon>
let _sql: SqlFn | null = null
export function sql(): SqlFn {
  if (!_sql) _sql = neon()
  return _sql
}

export type ApplicationStatus =
  | 'new'
  | 'reviewing'
  | 'interviewing'
  | 'offer'
  | 'hired'
  | 'rejected'

export interface Application {
  id: string
  role_slug: string
  first_name: string
  last_name: string
  email: string
  phone: string
  school: string
  year: string
  linkedin_url: string | null
  availability_hours: number
  why_this_role: string
  experience_story: string
  resume_key: string
  status: ApplicationStatus
  notes: string
  created_at: string
  updated_at: string
}

function toApp(row: Record<string, unknown>): Application {
  const createdAt = row.created_at
  const updatedAt = row.updated_at
  return {
    ...(row as unknown as Application),
    availability_hours: Number(row.availability_hours),
    linkedin_url: (row.linkedin_url as string | null | undefined) ?? null,
    created_at: createdAt instanceof Date ? createdAt.toISOString() : String(createdAt),
    updated_at: updatedAt instanceof Date ? updatedAt.toISOString() : String(updatedAt),
  }
}

export async function insertApplication(
  a: Omit<Application, 'id' | 'status' | 'notes' | 'created_at' | 'updated_at'>
) {
  const s = sql()
  const rows = (await s`
    INSERT INTO applications (
      role_slug, first_name, last_name, email, phone, school, year,
      linkedin_url, availability_hours, why_this_role, experience_story, resume_key
    ) VALUES (
      ${a.role_slug}, ${a.first_name}, ${a.last_name}, ${a.email}, ${a.phone},
      ${a.school}, ${a.year}, ${a.linkedin_url}, ${a.availability_hours},
      ${a.why_this_role}, ${a.experience_story}, ${a.resume_key}
    )
    RETURNING id, created_at
  `) as Array<{ id: string; created_at: unknown }>
  const row = rows[0]
  return { id: String(row.id), created_at: String(row.created_at) }
}

// Simplification: load all, let client filter. Hard LIMIT as a safety cap so a flood of submissions
// can't OOM the admin page render.
export async function listApplications(): Promise<Application[]> {
  const s = sql()
  const rows = (await s`SELECT * FROM applications ORDER BY created_at DESC LIMIT 1000`) as Array<
    Record<string, unknown>
  >
  return rows.map(toApp)
}

export async function getApplication(id: string): Promise<Application | null> {
  const s = sql()
  const rows = (await s`SELECT * FROM applications WHERE id = ${id}`) as Array<
    Record<string, unknown>
  >
  return rows[0] ? toApp(rows[0]) : null
}

export async function updateApplication(
  id: string,
  patch: { status?: ApplicationStatus; notes?: string }
) {
  const s = sql()
  if (patch.status !== undefined && patch.notes !== undefined) {
    await s`UPDATE applications SET status = ${patch.status}, notes = ${patch.notes} WHERE id = ${id}`
  } else if (patch.status !== undefined) {
    await s`UPDATE applications SET status = ${patch.status} WHERE id = ${id}`
  } else if (patch.notes !== undefined) {
    await s`UPDATE applications SET notes = ${patch.notes} WHERE id = ${id}`
  }
}
