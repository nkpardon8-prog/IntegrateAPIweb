'use client'

import { useState } from 'react'

const MAX_PDF_BYTES = 3 * 1024 * 1024
const YEARS = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Grad Student', 'Recent Grad'] as const

interface ApplicationFormProps {
  roleSlug: string
}

export function ApplicationForm({ roleSlug }: ApplicationFormProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [school, setSchool] = useState('')
  const [year, setYear] = useState<string>('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [availabilityHours, setAvailabilityHours] = useState('')
  const [whyThisRole, setWhyThisRole] = useState('')
  const [experienceStory, setExperienceStory] = useState('')
  const [resume, setResume] = useState<File | null>(null)

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!resume) {
      setError('Please attach your resume as a PDF.')
      return
    }
    if (resume.type !== 'application/pdf') {
      setError('Resume must be a PDF.')
      return
    }
    if (resume.size > MAX_PDF_BYTES) {
      setError('Resume must be under 3MB.')
      return
    }

    setLoading(true)

    try {
      const form = new FormData()
      form.append('role_slug', roleSlug)
      form.append('first_name', firstName)
      form.append('last_name', lastName)
      form.append('email', email)
      form.append('phone', phone)
      form.append('school', school)
      form.append('year', year)
      form.append('linkedin_url', linkedinUrl)
      form.append('availability_hours', availabilityHours)
      form.append('why_this_role', whyThisRole)
      form.append('experience_story', experienceStory)
      form.append('resume', resume)

      const res = await fetch('/api/applications', {
        method: 'POST',
        body: form,
      })

      if (res.status === 429) {
        setError('Too many submissions. Try again in a minute.')
        return
      }

      if (!res.ok) {
        let message = 'Something went wrong. Please try again.'
        try {
          const data = (await res.json()) as { error?: string }
          if (data?.error) message = data.error
        } catch {
          // ignore JSON parse failures; fall through with default message
        }
        setError(message)
        return
      }

      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-card border border-border rounded-xl p-6">
        <p className="text-green-400 text-lg font-medium">
          Thanks! Your application is in. We&apos;ll be in touch if there&apos;s a fit.
        </p>
      </div>
    )
  }

  const inputClass =
    'bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors w-full'

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted mb-1" htmlFor="first_name">
              First name <span className="text-accent">*</span>
            </label>
            <input
              id="first_name"
              type="text"
              required
              maxLength={80}
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="Your first name"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1" htmlFor="last_name">
              Last name <span className="text-accent">*</span>
            </label>
            <input
              id="last_name"
              type="text"
              required
              maxLength={80}
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="Your last name"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              placeholder="you@school.edu"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1" htmlFor="phone">
              Phone <span className="text-accent">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              minLength={7}
              maxLength={30}
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="(555) 555-5555"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted mb-1" htmlFor="school">
              School <span className="text-accent">*</span>
            </label>
            <input
              id="school"
              type="text"
              required
              maxLength={120}
              value={school}
              onChange={e => setSchool(e.target.value)}
              placeholder="University of Utah"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1" htmlFor="year">
              Year <span className="text-accent">*</span>
            </label>
            <select
              id="year"
              required
              value={year}
              onChange={e => setYear(e.target.value)}
              className={inputClass}
            >
              <option value="" disabled>
                Select your year
              </option>
              {YEARS.map(y => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted mb-1" htmlFor="linkedin_url">
              LinkedIn URL
            </label>
            <input
              id="linkedin_url"
              type="url"
              value={linkedinUrl}
              onChange={e => setLinkedinUrl(e.target.value)}
              placeholder="https://linkedin.com/in/you (optional)"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1" htmlFor="availability_hours">
              Availability (hours / week) <span className="text-accent">*</span>
            </label>
            <input
              id="availability_hours"
              type="number"
              required
              min={1}
              max={60}
              step={1}
              value={availabilityHours}
              onChange={e => setAvailabilityHours(e.target.value)}
              placeholder="15"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-muted mb-1" htmlFor="why_this_role">
            Why this role? <span className="text-accent">*</span>
          </label>
          <textarea
            id="why_this_role"
            required
            rows={4}
            minLength={20}
            maxLength={300}
            value={whyThisRole}
            onChange={e => setWhyThisRole(e.target.value)}
            placeholder="A few sentences on what drew you to this role."
            className={inputClass}
          />
          <p className="text-xs text-muted mt-1 text-right">{whyThisRole.length} / 300</p>
        </div>

        <div>
          <label className="block text-sm text-muted mb-1" htmlFor="experience_story">
            Tell us about a time you learned something fast or handled a hard conversation. <span className="text-accent">*</span>
          </label>
          <textarea
            id="experience_story"
            required
            rows={5}
            minLength={20}
            maxLength={500}
            value={experienceStory}
            onChange={e => setExperienceStory(e.target.value)}
            placeholder="Briefly: the situation, what you did, what happened."
            className={inputClass}
          />
          <p className="text-xs text-muted mt-1 text-right">{experienceStory.length} / 500</p>
        </div>

        <div>
          <label className="block text-sm text-muted mb-1" htmlFor="resume">
            Resume (PDF, under 3MB) <span className="text-accent">*</span>
          </label>
          <input
            id="resume"
            type="file"
            required
            accept="application/pdf"
            onChange={e => setResume(e.target.files?.[0] ?? null)}
            className="block w-full text-sm text-muted file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-accent file:text-white hover:file:bg-accent-hover file:cursor-pointer"
          />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          {loading ? 'Sending...' : 'Submit application'}
        </button>
      </form>
    </div>
  )
}
