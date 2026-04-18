import { getApplication, updateApplication } from '@/lib/db'
import { updateApplicationSchema } from '@/lib/validation'

export const runtime = 'nodejs'

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params
  if (!/^[a-f0-9-]{36}$/.test(id)) {
    return Response.json({ error: 'Bad id' }, { status: 400 })
  }

  const body = await req.json().catch(() => null)
  const parsed = updateApplicationSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: 'Invalid payload.' }, { status: 400 })
  }

  const existing = await getApplication(id)
  if (!existing) {
    return Response.json({ error: 'Not found.' }, { status: 404 })
  }

  await updateApplication(id, parsed.data)
  return Response.json({ ok: true })
}
