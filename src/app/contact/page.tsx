'use client'

import { useState } from 'react'
import { PageHero } from '@/components/layout/PageHero'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { FormStatus } from '@/components/ui/FormStatus'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { site } from '@/data/site'
import { simulateFormSuccess } from '@/lib/form-submit'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    try {
      await simulateFormSuccess(700)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' })
    } catch {
      setSubmitStatus('idle')
    }
  }

  const fieldClass =
    'w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25'

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Talk <span className="gradient-text-gold">Seriously</span>
          </>
        }
        description="Share your brief — location, scope, and timeline. We respond with structured next steps and an honest feasibility conversation."
      />

      <section className="px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="rounded-2xl border border-border/60 bg-card/95 p-6 shadow-md backdrop-blur sm:p-8">
            <h2 className="mb-1 text-lg font-bold text-foreground sm:text-xl">Send a message</h2>
            <p className="mb-6 text-sm text-foreground/65">Fastest reply: WhatsApp. For detailed briefs, use the form.</p>

            {submitStatus === 'success' ? (
              <FormStatus
                type="success"
                message="Received. Our studio replies within one business day — often sooner on WhatsApp."
              />
            ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Full name *
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className={fieldClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className={fieldClass} placeholder="you@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                  Phone / WhatsApp
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={fieldClass} placeholder="+20 …" />
              </div>

                <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-foreground">
                    Project type
                  </label>
                  <select id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange} className={fieldClass}>
                    <option value="">Select</option>
                    <option value="villa">Villa</option>
                    <option value="penthouse">Penthouse / apartment</option>
                    <option value="compound">Compound residence</option>
                    <option value="commercial">Commercial</option>
                    <option value="consultation">Consultation only</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">
                    Investment range (EGP)
                  </label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleInputChange} className={fieldClass}>
                    <option value="">Select range</option>
                    <option value="under-1m">Under 1,000,000</option>
                    <option value="1m-3m">1,000,000 – 3,000,000</option>
                    <option value="3m-8m">3,000,000 – 8,000,000</option>
                    <option value="8m-15m">8,000,000 – 15,000,000</option>
                    <option value="over-15m">15,000,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`${fieldClass} resize-none`}
                  placeholder="Location, approx. size, desired start date, and anything we should know."
                />
              </div>

                <PremiumButton type="submit" size="md" className="w-full border-glow" disabled={submitStatus === 'loading'}>
                  {submitStatus === 'loading' ? 'Sending…' : 'Submit inquiry'}
                </PremiumButton>
              </form>
            )}
            </div>

          <div>
            <div className="mb-6 rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card to-background p-5 sm:p-6">
              <h3 className="mb-1 text-base font-semibold text-foreground">Prefer WhatsApp?</h3>
              <p className="mb-4 text-sm text-foreground/70">Share photos and pins — we route you quickly.</p>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-highlight"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Chat on WhatsApp
              </a>
            </div>

            <div className="space-y-5 rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Phone className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground/55">Phone</div>
                  <a href={`tel:${site.phoneTel}`} className="text-lg font-semibold text-foreground hover:text-accent">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Mail className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground/55">Email</div>
                  <a href={`mailto:${site.email}`} className="block text-base font-semibold text-foreground hover:text-accent">
                    {site.email}
                  </a>
                  <a href={`mailto:${site.emailProjects}`} className="mt-1 block text-sm font-medium text-foreground/80 hover:text-accent">
                    {site.emailProjects}
                  </a>
                  <p className="mt-1 text-sm text-foreground/60">We reply within one business day.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:h-12 sm:w-12 sm:rounded-2xl">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground/55">Studio</div>
                  {site.addressLines.map((line) => (
                    <div key={line} className="text-lg font-semibold text-foreground">
                      {line}
                    </div>
                  ))}
                  <p className="mt-1 text-sm text-foreground/60">Visits by appointment.</p>
                </div>
              </div>

              <div className="flex gap-4 border-t border-border/50 pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Clock className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground/55">Hours</div>
                  <p className="font-semibold text-foreground">{site.hours.weekdays}</p>
                  <p className="text-sm text-foreground/65">{site.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-accent/15 bg-muted/40 px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-xl font-bold text-foreground sm:text-2xl">Common questions</h2>
          <div className="space-y-5">
            {[
              {
                q: 'Do you work outside Cairo?',
                a: 'Yes — we routinely execute projects in Alexandria and New Cairo, with structured site visits and coordinated procurement.',
              },
              {
                q: 'How soon can we start?',
                a: 'Calendar depends on scope and supplier lead times. After the initial visit, we provide a phased timeline tied to decisions and deposits.',
              },
              {
                q: 'Do you handle execution supervision?',
                a: 'Yes — execution supervision is core to our studio model. We coordinate trades around approved schedules and mock-ups.',
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-border/60 bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">{faq.q}</h3>
                <p className="leading-relaxed text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
