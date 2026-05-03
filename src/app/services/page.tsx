'use client'

import { useRouter } from 'next/navigation'
import { PageHero } from '@/components/layout/PageHero'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { services } from '@/data/services'
import { processSteps } from '@/data/process'

export default function ServicesPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Services"
        title={
          <>
            Precision Services For <span className="gradient-text-gold">Luxury Homes</span>
          </>
        }
        description="Interior architecture, disciplined procurement, and supervised execution — structured so decisions stay clear and outcomes stay composed."
      />

      <section className="border-b border-accent/15 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What we deliver</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70">
              Each service can stand alone — most premium residences combine several under one coordinated schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-muted/60 to-background px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Execution process</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70">
              Six milestones — built to remove fear from construction reality through predictable governance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.id}
                  className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-7 w-7" aria-hidden />
                    </div>
                    <span className="text-4xl font-light tabular-nums text-accent/25">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="leading-relaxed text-foreground/70">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-accent/20 bg-gradient-to-br from-card via-muted/40 to-background p-10 text-center shadow-sm sm:p-14">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Ready for a scope conversation?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            Start with a consultation — we&apos;ll translate your brief into a roadmap you can trust.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PremiumButton size="lg" className="border-glow" onClick={() => router.push('/consultation')}>
              Book Consultation
            </PremiumButton>
            <PremiumButton size="lg" variant="outline" className="border-glow" onClick={() => router.push('/materials')}>
              Explore Materials
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  )
}
