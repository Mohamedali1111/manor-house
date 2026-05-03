'use client'

import { PageHero } from '@/components/layout/PageHero'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { useRouter } from 'next/navigation'

export default function BlogPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Journal"
        title={
          <>
            Insights <span className="gradient-text-gold">Coming Soon</span>
          </>
        }
        description="Long-form notes on procurement, palettes, and quiet luxury — crafted for clients who read before they build."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-lg leading-relaxed text-foreground/75">
          We are preparing editorial features across villas, penthouses, and compound residences — including supplier realities worth knowing early.
        </p>
        <div className="mt-10 flex justify-center">
          <PremiumButton size="lg" className="border-glow" onClick={() => router.push('/contact')}>
            Notify me
          </PremiumButton>
        </div>
      </section>
    </div>
  )
}
