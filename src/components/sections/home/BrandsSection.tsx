'use client'

import { useRouter } from 'next/navigation'
import { brandPartners } from '@/data/brands'
import { PremiumButton } from '@/components/ui/PremiumButton'

export function BrandsSection() {
  const router = useRouter()
  return (
    <section className="relative border-y border-accent/15 bg-gradient-to-b from-muted/60 via-background to-muted/40 px-4 py-12 sm:px-6 sm:py-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5">
            <span className="text-xs font-semibold text-accent">Materials</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Trusted <span className="gradient-text-gold">partners</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-foreground/70 sm:text-base">
            Brands specified for performance and longevity — not decoration.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brandPartners.map((brand) => (
            <div
              key={brand.id}
              className="rounded-xl border border-border/60 bg-card/90 p-5 shadow-sm transition hover:border-accent/25 sm:p-6"
            >
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-accent">{brand.category}</p>
              <h3 className="mb-2 text-base font-semibold text-foreground">{brand.name}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">{brand.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <PremiumButton size="md" variant="outline" className="border-glow" onClick={() => router.push('/materials')}>
            Materials overview
          </PremiumButton>
        </div>
      </div>
    </section>
  )
}
