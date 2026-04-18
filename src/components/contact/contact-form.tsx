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
      <div className="bg-card border border-border rounded-xl p-6">
        <p className="text-green-400 text-lg font-medium">
          Thanks! We'll be in touch within 24 hours.
        </p>
      </div>
    )
  }

  const inputClass =
    'bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors w-full'

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm text-muted mb-1" htmlFor="name">
            Name <span className="text-accent">*</span>
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
          <label className="block text-sm text-muted mb-1" htmlFor="email">
            Email <span className="text-accent">*</span>
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
          <label className="block text-sm text-muted mb-1" htmlFor="company">
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
          <label className="block text-sm text-muted mb-1" htmlFor="message">
            Message <span className="text-accent">*</span>
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
          className="bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
