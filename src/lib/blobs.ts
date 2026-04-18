import { getStore } from '@netlify/blobs'

const RESUMES = 'resumes'

// Note: the metadata.contentType we store here is cosmetic. The download route
// always sets Content-Type: application/pdf on its own response.
export async function putResume(key: string, buf: ArrayBuffer) {
  const store = getStore(RESUMES)
  await store.set(key, buf, { metadata: { contentType: 'application/pdf' } })
}

export async function getResumeStream(key: string) {
  const store = getStore(RESUMES)
  return store.get(key, { type: 'stream' })
}
