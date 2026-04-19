'use client'

import { useState, useRef, useEffect, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import { MessageSquare, X, Send, Minimize2 } from 'lucide-react'
import { chatStore, getServerSnapshot } from './chat-store'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export function ChatWidget() {
  const isOpen = useSyncExternalStore(chatStore.subscribe, chatStore.getIsOpen, getServerSnapshot)
  const pathname = usePathname()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hey! I'm the IntegrateAPI bot. Ask me anything about what we do, or I can connect you with Nick or Omid directly.",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage() {
    const text = input.trim()
    if (!text || isLoading) return

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: text }
    const allMessages = [...messages, userMessage]
    setMessages(allMessages)
    setInput('')
    setIsLoading(true)

    const assistantId = (Date.now() + 1).toString()
    setMessages(prev => [...prev, { id: assistantId, role: 'assistant', content: '' }])

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: allMessages.map(m => ({ role: m.role, content: m.content })),
          currentPath: pathname,
        }),
      })

      if (!response.ok) throw new Error('Request failed')
      if (!response.body) throw new Error('No response body')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        accumulated += chunk
        setMessages(prev =>
          prev.map(m => (m.id === assistantId ? { ...m, content: accumulated } : m))
        )
      }
    } catch {
      setMessages(prev =>
        prev.map(m =>
          m.id === assistantId
            ? {
                ...m,
                content:
                  'Sorry, something went wrong. Try reaching out directly via the contact page.',
              }
            : m
        )
      )
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const lastMessage = messages[messages.length - 1]
  const showTypingIndicator =
    isLoading && lastMessage?.role === 'assistant' && lastMessage.content === ''

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => chatStore.open()}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-4 py-3 rounded-full shadow-lg transition-colors"
        >
          <MessageSquare size={18} />
          <span className="text-sm">Chat with us</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-4 md:right-6 z-50 w-[calc(100vw-32px)] md:w-[380px] h-[70vh] md:h-[520px] flex flex-col rounded-xl overflow-hidden shadow-2xl border border-border transition-all">
          <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-border">
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-accent" />
              <span className="text-sm font-medium text-foreground">IntegrateAPI Bot</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => chatStore.close()}
                className="p-1.5 text-muted hover:text-foreground transition-colors rounded"
                aria-label="Minimize"
              >
                <Minimize2 size={15} />
              </button>
              <button
                onClick={() => chatStore.close()}
                className="p-1.5 text-muted hover:text-foreground transition-colors rounded"
                aria-label="Close"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-background px-4 py-4 flex flex-col gap-3">
            {messages.map(m => (
              <div
                key={m.id}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && m.content === '' && showTypingIndicator ? (
                  <div className="bg-card text-foreground rounded-xl rounded-bl-sm px-3 py-2 max-w-[80%]">
                    <span className="flex gap-1 items-center h-5">
                      <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:300ms]" />
                    </span>
                  </div>
                ) : (
                  <div
                    className={`text-sm px-3 py-2 max-w-[80%] ${
                      m.role === 'user'
                        ? 'bg-accent text-white rounded-xl rounded-br-sm'
                        : 'bg-card text-foreground rounded-xl rounded-bl-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-3 py-3 bg-card border-t border-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask us anything..."
              className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
