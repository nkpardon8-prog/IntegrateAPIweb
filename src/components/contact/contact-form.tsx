'use client'

import { useState } from 'react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message }),
      })

      if (!res.ok) {
        throw new Error('Failed to send message')
      }

      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again or reach out directly.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-[#1a1a2e] border border-white/[0.08] rounded-xl p-6">
        <p className="text-[#4ade80] text-lg font-medium">
          Thanks! We'll be in touch within 24 hours.
        </p>
      </div>
    )
  }

  const inputClass =
    'bg-[#0d0d1a] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f0f0f0] placeholder-[#a0a0b0] focus:outline-none focus:border-[#3b82f6] transition-colors w-full'

  return (
    <div className="bg-[#1a1a2e] border border-white/[0.08] rounded-xl p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm text-[#a0a0b0] mb-1" htmlFor="name">
            Name <span className="text-[#3b82f6]">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-[#a0a0b0] mb-1" htmlFor="email">
            Email <span className="text-[#3b82f6]">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-[#a0a0b0] mb-1" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={e => setCompany(e.target.value)}
            placeholder="Your company (optional)"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-[#a0a0b0] mb-1" htmlFor="message">
            Message <span className="text-[#3b82f6]">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Tell us what's slowing you down..."
            className={inputClass}
          />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
