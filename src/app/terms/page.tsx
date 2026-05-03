'use client'

import { PageHero } from '@/components/layout/PageHero'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero eyebrow="Legal" title="Terms of Service" description="Studio engagement norms — replace with counsel-reviewed terms before binding client agreements." />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="space-y-6 text-foreground/80">
          <p>
            These terms outline how consultations, proposals, and professional services are approached inside Manor House workflows. They do not replace a executed contract for a specific project.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Consultations</h2>
          <p>Fees and credits — where applicable — should be confirmed in writing before sessions occur.</p>
          <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
          <p>Design concepts remain studio property until a formal engagement assigns usage rights.</p>
          <h2 className="text-xl font-semibold text-foreground">Site access</h2>
          <p>Safe site access and accurate information are required for supervision and coordination.</p>
        </div>
      </section>
    </div>
  )
}
