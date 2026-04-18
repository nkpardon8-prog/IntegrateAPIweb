'use client'

import { useState } from 'react'

interface LoginFormProps {
  serverError?: string
}

export function LoginForm({ serverError }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(
    serverError === 'server' ? 'Server misconfigured. Contact the admin.' : ''
  )

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        window.location.assign('/admin/applications')
        return
      }

      if (res.status === 401) {
        setError('Invalid email or password.')
      } else if (res.status === 429) {
        setError('Too many attempts. Try again in 10 minutes.')
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'bg-[#0d0d1a] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f0f0f0] placeholder-[#a0a0b0] focus:outline-none focus:border-[#3b82f6] transition-colors w-full'

  return (
    <div className="bg-[#1a1a2e] border border-white/[0.08] rounded-xl p-6">
      <h1 className="text-xl font-semibold text-[#f0f0f0] mb-6">Admin login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm text-[#a0a0b0] mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="username"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@integrateapi.ai"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-[#a0a0b0] mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className={inputClass}
          />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg transition-colors w-full"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}
