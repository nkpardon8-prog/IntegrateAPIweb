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
