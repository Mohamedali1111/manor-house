'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PageHero } from '@/components/layout/PageHero'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { FormStatus } from '@/components/ui/FormStatus'
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react'
import { simulateFormSuccess } from '@/lib/form-submit'

export default function ConsultationPage() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [consultationType, setConsultationType] = useState('')
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const timeSlots = ['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM', '5:00 PM']

  const consultationTypes = [
    {
      id: 'initial',
      title: 'Studio consultation',
      duration: '60 minutes',
      price: 'Complimentary',
      description: 'Site context, priorities, and an honest feasibility conversation — ideal for first contact.',
    },
    {
      id: 'detailed',
      title: 'Design intensive',
      duration: '90 minutes',
      price: 'EGP 6,500',
      description: 'Deeper review with directional layouts, references, and a documented list of next decisions.',
    },
    {
      id: 'virtual',
      title: 'Virtual session',
      duration: '45 minutes',
      price: 'EGP 3,000',
      description: 'Remote walkthrough for clients outside Cairo — structured agenda and recorded summary.',
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consultationType) return
    setBookingStatus('loading')
    try {
      await simulateFormSuccess(650)
      setBookingStatus('success')
    } catch {
      setBookingStatus('idle')
    }
  }

  const fieldClass =
    'w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25'

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Consultation"
        title={
          <>
            Book A Calm, <span className="gradient-text-gold">Structured</span> Start
          </>
        }
        description="Choose the session that matches where you are — exploration, deeper design direction, or remote coordination."
      />

      <section className="border-b border-accent/15 px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Select your session</h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/70">Transparent pricing in EGP — upgraded sessions apply as a credit on signed engagements where applicable.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {consultationTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setConsultationType(type.id)}
                className={`rounded-2xl border-2 p-5 text-left text-sm transition-all duration-300 sm:p-6 ${
                  consultationType === type.id ? 'border-accent bg-accent/5 shadow-md' : 'border-border/70 bg-card hover:border-accent/35'
                }`}
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Calendar className="h-6 w-6" aria-hidden />
                  </div>
                </div>
                <h3 className="mb-1 text-base font-bold text-foreground">{type.title}</h3>
                <div className="mb-1 text-2xl font-bold text-accent">{type.price}</div>
                <div className="mb-3 text-xs text-foreground/60">{type.duration}</div>
                <p className="leading-relaxed text-foreground/75">{type.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-lg">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Schedule</h2>
            <p className="mt-2 text-sm text-foreground/65">We confirm by WhatsApp or email.</p>
          </div>

          {bookingStatus === 'success' ? (
            <FormStatus
              type="success"
              message="Request received. Our studio will confirm your slot within a few hours on business days."
            />
          ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border/60 bg-card p-6 shadow-md sm:p-8">
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Date</label>
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className={fieldClass} required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Time</label>
                <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className={fieldClass} required>
                  <option value="">Choose a slot</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-foreground">Full name</label>
              <input type="text" className={fieldClass} placeholder="Your name" required />
            </div>

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
                <input type="email" className={fieldClass} placeholder="you@email.com" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Phone / WhatsApp</label>
                <input type="tel" className={fieldClass} placeholder="+20 …" required />
              </div>
            </div>

            <div className="mb-8">
              <label className="mb-2 block text-sm font-medium text-foreground">Project notes</label>
              <textarea rows={4} className={`${fieldClass} resize-none`} placeholder="Location, scope, and anything we should prepare." required />
            </div>

            <PremiumButton type="submit" size="md" className="w-full border-glow" disabled={bookingStatus === 'loading' || !consultationType}>
              {bookingStatus === 'loading' ? 'Sending…' : 'Request booking'}
            </PremiumButton>
          </form>
          )}
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Inside the session</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-foreground/70">Structured discovery so we can quote responsibly.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: 'Alignment', body: 'We translate lifestyle cues into priorities you can defend under budget pressure.' },
              { icon: Clock, title: 'Site realities', body: 'Measurements, constraints, and coordination risks — surfaced early.' },
              { icon: CheckCircle, title: 'Direction', body: 'Conceptual anchors you can feel — not vague Pinterest fog.' },
              { icon: Calendar, title: 'Next steps', body: 'A proposal pathway: scope options, timeline bands, and decision milestones.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border/60 bg-card p-5 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs leading-relaxed text-foreground/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-accent/15 bg-gradient-to-r from-accent/8 via-highlight/12 to-accent/8 px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-xl text-center lg:max-w-2xl">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Prefer logistics first?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-foreground/70">We route serious inquiries quickly — especially with drawings or references.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PremiumButton size="md" className="border-glow" onClick={() => router.push('/contact')}>
              Contact
            </PremiumButton>
            <PremiumButton size="md" variant="outline" className="border-glow" onClick={() => router.push('/booking')}>
              Start a project
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  )
}
