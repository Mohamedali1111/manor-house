'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import { FormStatus } from '@/components/ui/FormStatus'
import { simulateFormSuccess } from '@/lib/form-submit'

export function NewsletterSection() {
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
    <section className="px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-card via-muted/40 to-background shadow-md">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-accent">
              <Mail className="h-3.5 w-3.5" aria-hidden />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Newsletter</span>
            </div>
            <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">Design notes, quietly</h2>
            <p className="text-sm text-foreground/70">Occasional emails — procurement tips, palettes, and studio openings.</p>
          </div>

          {status === 'success' ? (
            <FormStatus type="success" message="You are subscribed. We will only write when it is worth your time." />
          ) : (
            <form className="flex flex-col gap-2 sm:flex-row sm:items-stretch" onSubmit={handleSubmit}>
              <label htmlFor="home-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="home-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                placeholder="you@email.com"
                autoComplete="email"
                className="min-h-[44px] flex-1 rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none ring-accent/25 transition focus:border-accent focus:ring-2 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="min-h-[44px] rounded-xl bg-accent px-6 text-sm font-semibold text-white transition hover:bg-highlight disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
