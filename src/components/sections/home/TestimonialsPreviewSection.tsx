'use client'

import Link from 'next/link'
import { testimonials as testimonialData } from '@/data/testimonials'

export function TestimonialsPreviewSection() {
  const items = testimonialData.slice(0, 3)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background px-4 py-12 sm:px-6 sm:py-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5">
            <span className="text-xs font-semibold text-accent">Testimonials</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Trusted by <span className="gradient-text-gold">clients</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-foreground/70 sm:text-base">
            Delivery, finishes, and communication when projects get complex.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {items.map((t) => (
            <figure
              key={t.id}
              className="flex h-full flex-col rounded-2xl border border-border/60 bg-card/95 p-5 shadow-sm sm:p-6"
            >
              <div className="mb-3 flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-sm">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-foreground/80">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3 border-t border-border/50 pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-highlight text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-foreground/60">
                    {t.role}
                    {t.location ? ` · ${t.location}` : ''}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/testimonials"
            className="text-sm font-semibold text-accent underline-offset-4 transition hover:underline"
          >
            Read more stories
          </Link>
        </div>
      </div>
    </section>
  )
}
