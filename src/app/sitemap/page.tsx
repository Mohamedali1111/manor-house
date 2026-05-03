'use client'

import Link from 'next/link'
import { PageHero } from '@/components/layout/PageHero'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/materials', label: 'Materials' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/consultation', label: 'Consultation' },
  { href: '/booking', label: 'Booking' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero eyebrow="Navigation" title="Sitemap" description="Quick access to every public destination on the Manor House showroom." />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <ul className="grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="flex items-center justify-between rounded-2xl border border-border/60 bg-card px-5 py-4 font-medium text-foreground transition hover:border-accent/40 hover:text-accent">
                {l.label}
                <span aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
