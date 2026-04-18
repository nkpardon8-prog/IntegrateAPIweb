// Netlify-trusted client IP. x-forwarded-for is spoofable; x-nf-client-connection-ip is set by Netlify.
export function clientIp(req: Request): string {
  return (
    req.headers.get('x-nf-client-connection-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    'unknown'
  )
}
