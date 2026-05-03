'use client'

import { PageHero } from '@/components/layout/PageHero'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero eyebrow="Legal" title="Privacy Policy" description="How Manor House handles information you share through forms, consultations, and project correspondence." />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="prose prose-neutral max-w-none space-y-6 text-foreground/80">
          <p>
            This policy explains what we collect, why we collect it, and how long we keep it. Final legal text should be reviewed by your counsel before publication —
            this page is a structured placeholder aligned with a luxury studio workflow.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Information we receive</h2>
          <p>Contact details, project addresses, budgets, preferences, and files you voluntarily send (drawings, references, photos).</p>
          <h2 className="text-xl font-semibold text-foreground">How we use it</h2>
          <p>To respond to inquiries, prepare proposals, coordinate consultations, and execute signed engagements.</p>
          <h2 className="text-xl font-semibold text-foreground">Retention</h2>
          <p>Project records are retained for operational and warranty context — exact retention windows should be defined with legal advisors.</p>
        </div>
      </section>
    </div>
  )
}
