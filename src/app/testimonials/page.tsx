'use client'

import { useRouter } from 'next/navigation'
import { PageHero } from '@/components/layout/PageHero'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Clients Who Expected <span className="gradient-text-gold">Excellence</span>
          </>
        }
        description="Feedback from homeowners and collaborators — focused on communication, discipline on site, and outcomes that age well."
      />

      <section className="px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl"
            >
              <div className="mb-5 flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" aria-hidden />
                ))}
              </div>
              <Quote className="mb-4 h-8 w-8 text-accent/25" aria-hidden />
              <p className="mb-8 flex-1 leading-relaxed text-foreground/80">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-border/50 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-highlight text-sm font-bold text-white">{t.initials}</div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-foreground/60">
                      {t.role}
                      {t.location ? ` · ${t.location}` : ''}
                    </div>
                    {t.project ? <div className="mt-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{t.project}</div> : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-accent/15 bg-muted/40 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Outcomes, measured honestly</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70">
              Numbers never replace taste — but they signal consistency across hundreds of delivered scopes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ['500+', 'Projects completed'],
              ['98%', 'Satisfaction'],
              ['15+', 'Years'],
              ['12', 'Avg. specialist disciplines coordinated'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-border/60 bg-card p-8 text-center">
                <div className="text-4xl font-bold text-accent">{value}</div>
                <div className="mt-2 text-sm font-medium text-foreground/65">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-card to-background p-10 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Video stories — coming soon</h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
            We&apos;re producing short walkthrough interviews with clients who opted in to share their experience on camera.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PremiumButton size="lg" className="border-glow" onClick={() => router.push('/consultation')}>
              Book Consultation
            </PremiumButton>
            <PremiumButton size="lg" variant="outline" className="border-glow" onClick={() => router.push('/portfolio')}>
              View Portfolio
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  )
}
