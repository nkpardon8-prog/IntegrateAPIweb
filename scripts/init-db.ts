import { Client } from '@neondatabase/serverless'

const url = process.env.NETLIFY_DATABASE_URL_UNPOOLED
if (!url) {
  console.error('NETLIFY_DATABASE_URL_UNPOOLED not set. Copy from `netlify env:list` into .env.local.')
  process.exit(1)
}

const statements: string[] = [
  `CREATE EXTENSION IF NOT EXISTS pgcrypto`,
  `CREATE TABLE IF NOT EXISTS applications (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     role_slug TEXT NOT NULL,
     first_name TEXT NOT NULL,
     last_name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT NOT NULL,
     school TEXT NOT NULL,
     year TEXT NOT NULL,
     linkedin_url TEXT NULL,
     availability_hours INTEGER NOT NULL,
     why_this_role TEXT NOT NULL,
     experience_story TEXT NOT NULL,
     resume_key TEXT NOT NULL,
     status TEXT NOT NULL DEFAULT 'new'
       CHECK (status IN ('new','reviewing','interviewing','offer','hired','rejected')),
     notes TEXT NOT NULL DEFAULT '',
     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
     updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
   )`,
  `CREATE INDEX IF NOT EXISTS applications_status_idx ON applications (status)`,
  `CREATE INDEX IF NOT EXISTS applications_created_at_idx ON applications (created_at DESC)`,
  `CREATE OR REPLACE FUNCTION set_updated_at() RETURNS TRIGGER AS $$
     BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
   $$ LANGUAGE plpgsql`,
  `DROP TRIGGER IF EXISTS applications_set_updated_at ON applications`,
  `CREATE TRIGGER applications_set_updated_at
     BEFORE UPDATE ON applications
     FOR EACH ROW EXECUTE FUNCTION set_updated_at()`,
]

async function main() {
  const client = new Client(url)
  await client.connect()
  try {
    await client.query('BEGIN')
    for (const s of statements) {
      await client.query(s)
    }
    await client.query('COMMIT')
    console.log('init-db: ok')
  } catch (err) {
    await client.query('ROLLBACK').catch(() => {})
    console.error('init-db failed:', err)
    process.exitCode = 1
  } finally {
    await client.end()
  }
}

main()
