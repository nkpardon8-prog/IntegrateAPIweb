import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ChatWidgetLoader } from '@/components/chat/chat-widget-loader'
import { PostHogProvider } from '@/lib/posthog'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'IntegrateAPI | Your Outsourced AI & Tech Department',
  description:
    'We show up, learn how your business runs, and build the tools that remove the parts slowing you down. No jargon. No fluff. Just things that work.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#121220] text-[#f0f0f0] font-sans">
        <PostHogProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatWidgetLoader />
        </PostHogProvider>
      </body>
    </html>
  )
}
