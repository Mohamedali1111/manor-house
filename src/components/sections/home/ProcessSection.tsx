'use client'

import { processSteps } from '@/data/process'

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-12 sm:px-6 sm:py-16">
      <div className="pointer-events-none absolute left-1/2 top-16 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5">
            <span className="text-xs font-semibold text-accent">Execution process</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            From first visit to <span className="gradient-text-gold">final handover</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-foreground/70 sm:text-base">
            Clear milestones — you always know what happens next.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.id}
                className="group rounded-xl border border-border/60 bg-card p-5 shadow-sm transition hover:border-accent/30 hover:shadow-md sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="text-3xl font-light tabular-nums text-accent/25">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
