'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import { FormStatus } from '@/components/ui/FormStatus'
import { simulateFormSuccess } from '@/lib/form-submit'

export function FooterSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await simulateFormSuccess()
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('idle')
    }
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-3 flex items-center justify-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#D4af37] to-[#e6c866]">
          <Mail className="h-4 w-4 text-white" aria-hidden />
        </div>
        <h4 className="text-base font-bold text-gray-900">Stay updated</h4>
      </div>
      <p className="mb-4 text-sm text-gray-600">Design notes and project openings — no spam.</p>
      {status === 'success' ? (
        <FormStatus
          type="success"
          message="Thank you. You are on the list — watch your inbox for design notes from the studio."
          className="text-left"
        />
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
          <label htmlFor="footer-email" className="sr-only">
            Email
          </label>
          <input
            id="footer-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
            placeholder="your@email.com"
            autoComplete="email"
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 transition hover:border-[#D4af37]/40 focus:border-[#D4af37] focus:outline-none focus:ring-2 focus:ring-[#D4af37]/30 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-xl bg-gradient-to-r from-[#D4af37] to-[#e6c866] px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:opacity-95 disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending…' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  )
}
