'use client'

import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  description: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-accent/15 bg-gradient-to-br from-card via-muted/80 to-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23000\' stroke-opacity=\'0.12\'%3E%3Cpath d=\'M0 60 L60 0\'/%3E%3C/g%3E%3C/svg%3E')]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-xs">{eyebrow}</span>
          </div>
          <h1 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">{title}</h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
