'use client'

import { PageHero } from '@/components/layout/PageHero'
import { brandPartners } from '@/data/brands'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { useRouter } from 'next/navigation'
import { ShieldCheck } from 'lucide-react'

export default function MaterialsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Materials"
        title={
          <>
            Brands That <span className="gradient-text-gold">Perform</span>
          </>
        }
        description="Specification-grade partners selected for longevity, serviceability, and calm luxury — not logos for decoration."
      />

      <section className="border-b border-accent/15 bg-gradient-to-b from-muted/40 to-background px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-accent/20 bg-card/80 p-8 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <ShieldCheck className="h-7 w-7" aria-hidden />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Procurement with accountability</h2>
              <p className="mt-2 text-foreground/70">
                Schedules are coordinated with site readiness — mock-ups and approvals happen before irreversible installation.
              </p>
            </div>
          </div>
          <PremiumButton size="lg" className="border-glow shrink-0" onClick={() => router.push('/contact')}>
            Discuss Specifications
          </PremiumButton>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brandPartners.map((brand) => (
              <article
                key={brand.id}
                className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-xl"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{brand.category}</p>
                <h3 className="mb-4 text-2xl font-semibold text-foreground">{brand.name}</h3>
                <p className="leading-relaxed text-foreground/70">{brand.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-accent/15 bg-gradient-to-r from-accent/8 via-highlight/12 to-accent/8 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Want the full specification binder?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            On active projects, we deliver coordinated schedules — finishes, plumbing, lighting, and ironmongery — so trades execute without guesswork.
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
