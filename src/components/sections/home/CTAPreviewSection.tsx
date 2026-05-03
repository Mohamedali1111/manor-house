'use client'

import { useRouter } from 'next/navigation'
import { PremiumButton } from '@/components/ui/PremiumButton'

export function CTAPreviewSection() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-highlight/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-highlight/12 to-accent/8" />

      <div className="relative z-10 mx-auto max-w-3xl text-center lg:max-w-4xl">
        <div className="mb-2 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">Next step</span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Ready to transform your <span className="gradient-text-gold">space</span>?
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-sm text-foreground/75 sm:text-base">Let&apos;s bring your vision to life.</p>

        <div className="mx-auto mb-6 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <PremiumButton size="md" className="border-glow w-full sm:w-auto" onClick={() => router.push('/booking')}>
            Book now
          </PremiumButton>
          <PremiumButton size="md" variant="outline" className="border-glow w-full sm:w-auto" onClick={() => router.push('/contact')}>
            Contact us
          </PremiumButton>
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-[11px] text-foreground/60 sm:text-xs">
          <span className="rounded-full border border-accent/15 bg-card/90 px-3 py-1">Cairo · Alexandria · New Cairo</span>
          <span className="rounded-full border border-accent/15 bg-card/90 px-3 py-1">Consultation-first</span>
          <span className="rounded-full border border-accent/15 bg-card/90 px-3 py-1">Supervised execution</span>
        </div>
      </div>
    </section>
  )
}
