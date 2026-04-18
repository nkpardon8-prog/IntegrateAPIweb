import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface LeadEmailData {
  name: string
  email: string
  company?: string
  message: string
  source: 'contact-form' | 'chatbot'
}

export async function sendLeadEmail(data: LeadEmailData) {
  const { name, email, company, message, source } = data
  const sourceLabel = source === 'chatbot' ? 'Chatbot' : 'Contact Form'

  return resend.emails.send({
    from: 'IntegrateAPI Leads <weblead@integrateapi.ai>',
    to: ['nick@integrateapi.ai', 'omid@integrateapi.ai'],
    subject: `New ${sourceLabel} Lead: ${name}`,
    html: `
      <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e;">New Lead from ${sourceLabel}</h2>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0;">
          <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${company ? `<p style="margin: 8px 0;"><strong>Company:</strong> ${company}</p>` : ''}
          <p style="margin: 8px 0;"><strong>Message:</strong></p>
          <p style="margin: 8px 0; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px;">This lead was submitted via the IntegrateAPI website ${sourceLabel.toLowerCase()}.</p>
      </div>
    `,
  })
}

interface ApplicationEmailData {
  applicationId: string
  roleSlug: string
  first_name: string
  last_name: string
  email: string
  phone: string
  school: string
  year: string
  linkedin_url?: string | ''
  availability_hours: number
  why_this_role: string
  experience_story: string
}

export async function sendApplicationEmail(a: ApplicationEmailData) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://integrateapi-website.netlify.app'
  const portalUrl = `${base}/admin/applications/${a.applicationId}`
  return resend.emails.send({
    from: 'IntegrateAPI Applications <weblead@integrateapi.ai>',
    to: ['nick@integrateapi.ai', 'omid@integrateapi.ai'],
    subject: `New application from ${a.first_name} ${a.last_name} (${a.roleSlug})`,
    html: `
      <div style="font-family:-apple-system,sans-serif;max-width:640px;margin:0 auto;">
        <h2 style="color:#1a1a2e;">New application: ${a.first_name} ${a.last_name}</h2>
        <p><strong>Role:</strong> ${a.roleSlug}</p>
        <div style="background:#f8f9fa;padding:20px;border-radius:8px;margin:16px 0;">
          <p><strong>Email:</strong> <a href="mailto:${a.email}">${a.email}</a></p>
          <p><strong>Phone:</strong> ${a.phone}</p>
          <p><strong>School:</strong> ${a.school}, ${a.year}</p>
          <p><strong>Availability:</strong> ${a.availability_hours} hrs/week</p>
          ${a.linkedin_url ? `<p><strong>LinkedIn:</strong> <a href="${a.linkedin_url}">${a.linkedin_url}</a></p>` : ''}
          <p><strong>Why this role?</strong></p>
          <p style="white-space:pre-wrap;">${a.why_this_role}</p>
          <p><strong>Experience story:</strong></p>
          <p style="white-space:pre-wrap;">${a.experience_story}</p>
        </div>
        <p><a href="${portalUrl}" style="background:#3b82f6;color:white;padding:10px 16px;border-radius:8px;text-decoration:none;">Open in admin portal</a></p>
      </div>
    `,
  })
}
