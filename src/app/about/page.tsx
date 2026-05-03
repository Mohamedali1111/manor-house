'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PageHero } from '@/components/layout/PageHero'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { Award, Gem, Users } from 'lucide-react'
import { site } from '@/data/site'

const heroImage =
  'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80'

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="About"
        title={
          <>
            Built For Clients Who Value <span className="gradient-text-gold">Discipline</span>
          </>
        }
        description={`${site.name} is a luxury interior practice serving discerning homeowners across Egypt — with a workflow designed for clarity, accountability, and composed delivery.`}
      />

      <section className="border-b border-accent/15 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/60 shadow-xl">
            <Image src={heroImage} alt="Manor House interior atmosphere" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our story</h2>
            <p className="mb-5 text-lg leading-relaxed text-foreground/75">
              Manor House began as a response to a recurring gap in luxury residential work: beautiful concepts that weaken under execution pressure.
              We built a studio culture where detailing, procurement discipline, and site supervision are treated as part of the design — not an afterthought.
            </p>
            <p className="text-lg leading-relaxed text-foreground/75">
              Today, our portfolio spans villas, penthouses, and compound residences across Cairo and Alexandria. What ties each project together is a calm client experience:
              predictable milestones, transparent decisions, and interiors that feel coherent long after installation is complete.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-muted/50 to-background px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What sets us apart</h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
              Luxury is not noise — it is judgment under constraints: budget, timeline, trades, and real family routines.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Gem,
                title: 'Specification discipline',
                body: 'Schedules are coordinated so selections match site readiness — fewer surprises, fewer compromises.',
              },
              {
                icon: Users,
                title: 'Collaboration without chaos',
                body: 'You always know what decision is needed next — and why it matters for cost and calendar.',
              },
              {
                icon: Award,
                title: 'Delivery accountability',
                body: 'Supervision is structured: inspections, mock-ups, and sign-offs before irreversible installation.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <item.icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="leading-relaxed text-foreground/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-accent/20 bg-card p-10 shadow-sm sm:grid-cols-3 sm:p-12">
          {[
            { label: 'Projects delivered', value: '500+' },
            { label: 'Years of practice', value: '15+' },
            { label: 'Client satisfaction', value: '98%' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-accent sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-accent/15 bg-gradient-to-r from-accent/8 via-highlight/12 to-accent/8 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">See the work behind the words</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            Portfolio proof, materials standards, and a consultation route designed for serious projects.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PremiumButton size="lg" className="border-glow" onClick={() => router.push('/portfolio')}>
              View Portfolio
            </PremiumButton>
            <PremiumButton size="lg" variant="outline" className="border-glow" onClick={() => router.push('/consultation')}>
              Book Consultation
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  )
}
