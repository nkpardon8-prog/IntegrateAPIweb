import { Client } from '@neondatabase/serverless'

async function main() {
  const url = process.env.NETLIFY_DATABASE_URL_UNPOOLED
  if (!url) { console.error('NETLIFY_DATABASE_URL_UNPOOLED not set'); process.exit(1) }
  const c = new Client(url)
  await c.connect()
  const r = await c.query('SELECT id, first_name, last_name, email, role_slug, status, created_at FROM applications ORDER BY created_at DESC LIMIT 5')
  console.log(JSON.stringify(r.rows, null, 2))
  await c.end()
}
main().catch(e => { console.error(e); process.exit(1) })
