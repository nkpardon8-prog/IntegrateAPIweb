import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ChatWidgetLoader } from '@/components/chat/chat-widget-loader'
import { PostHogProvider } from '@/lib/posthog'

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <PostHogProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatWidgetLoader />
    </PostHogProvider>
  )
}
