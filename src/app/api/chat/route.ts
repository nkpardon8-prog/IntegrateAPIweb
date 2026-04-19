import { streamText, tool, stepCountIs } from 'ai'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { voice, knowledgeBase, getPageContext } from '@/content/chatbot'
import { sendLeadEmail } from '@/lib/resend'
import { rateLimit } from '@/lib/rate-limit'
import { clientIp } from '@/lib/ip'
import { z } from 'zod'

export const runtime = 'nodejs'

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY!,
})

export async function POST(req: Request) {
  const ip = clientIp(req)
  if (!rateLimit(`chat:${ip}`, 20, 60000)) {
    return new Response('Too many requests', { status: 429 })
  }

  try {
    const { messages, currentPath } = await req.json()

    const pageBlock =
      typeof currentPath === 'string' ? getPageContext(currentPath) : null

    // Order: voice (tone anchoring) → page-specific block (priority context) → general knowledge.
    // The model is instructed in voice.ts to prefer PAGE CONTEXT over GENERAL KNOWLEDGE when they
    // overlap, and to still reach into GENERAL KNOWLEDGE when the page context doesn't cover a topic.
    const system = [
      voice,
      pageBlock ? `PAGE CONTEXT (user is currently on ${currentPath}):\n${pageBlock}` : null,
      `GENERAL KNOWLEDGE BASE:\n${knowledgeBase}`,
    ]
      .filter(Boolean)
      .join('\n\n')

    const result = streamText({
      model: openrouter('openai/gpt-4o-mini'),
      system,
      messages,
      tools: {
        submit_lead: tool({
          description:
            'Submit a lead when the user wants to be contacted, learn more, or book a discovery call. You must collect their name, email, and a description of their business or what they need help with before calling this tool.',
          inputSchema: z.object({
            name: z.string().describe('The user name'),
            email: z.string().email().describe('The user email'),
            company: z.string().optional().describe('The user company name'),
            message: z
              .string()
              .describe('What the user needs help with or their business description'),
          }),
          execute: async ({ name, email, company, message }) => {
            await sendLeadEmail({ name, email, company, message, source: 'chatbot' })
            return { success: true, message: 'Lead submitted successfully' }
          },
        }),
      },
      stopWhen: stepCountIs(3),
    })
    return result.toTextStreamResponse()
  } catch (error) {
    console.error('Chat error:', error)
    return new Response('Internal server error', { status: 500 })
  }
}
