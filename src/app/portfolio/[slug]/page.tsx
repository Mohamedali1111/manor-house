import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Layers, MapPin, Package, Ruler, Sparkles, Tag } from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'

const primaryBtn =
  'inline-flex min-h-[44px] items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-highlight focus:outline-none focus:ring-2 focus:ring-accent/40 sm:px-6'
const outlineBtn =
  'inline-flex min-h-[44px] items-center justify-center rounded-lg border border-accent bg-transparent px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-accent/40 sm:px-6'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project | Manor House' }
  return {
    title: project.metaTitle,
    description: project.description,
    openGraph: {
      title: project.metaTitle,
      description: project.description,
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-accent/15">
        <div className="relative h-[min(48vh,380px)] w-full overflow-hidden sm:h-[min(52vh,480px)] lg:h-[min(58vh,560px)]">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={72}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-black/35" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 pb-8 pt-6 sm:max-w-5xl sm:px-6 sm:pb-10 sm:pt-8 lg:max-w-6xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">{project.neighborhood}</p>
          <div className="mb-4 flex flex-wrap gap-2 text-xs text-foreground/85 sm:text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-card/90 px-3 py-1 backdrop-blur">
              <Tag className="h-3.5 w-3.5 text-accent" aria-hidden />
              {project.type}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/90 px-3 py-1 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />
              {project.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/90 px-3 py-1 backdrop-blur">
              <Ruler className="h-3.5 w-3.5 text-accent" aria-hidden />
              {project.area}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/90 px-3 py-1 backdrop-blur">
              <Calendar className="h-3.5 w-3.5 text-accent" aria-hidden />
              Completed {project.completedYear}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/90 px-3 py-1 backdrop-blur">
              <Layers className="h-3.5 w-3.5 text-accent" aria-hidden />
              {project.durationLabel}
            </span>
          </div>
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">{project.name}</h1>
          <p className="max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-base">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/consultation" className={primaryBtn}>
              Book consultation
            </Link>
            <Link href="/portfolio" className={outlineBtn}>
              All projects
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-accent/10 bg-muted/30 px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {project.facts.map((f) => (
            <div key={f.label} className="rounded-xl border border-border/60 bg-card px-4 py-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-foreground/50">{f.label}</div>
              <div className="mt-1 text-sm font-medium text-foreground">{f.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="mb-4 text-lg font-semibold text-foreground sm:text-xl">Project narrative</h2>
        <p className="mb-10 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-base">{project.story}</p>

        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
              <Sparkles className="h-4 w-4 text-accent" aria-hidden />
              Challenge
            </h3>
            <p className="text-sm leading-relaxed text-foreground/70">{project.briefChallenge}</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
              <Package className="h-4 w-4 text-accent" aria-hidden />
              Our approach
            </h3>
            <p className="text-sm leading-relaxed text-foreground/70">{project.ourApproach}</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h3 className="mb-3 text-base font-semibold text-foreground">Scope</h3>
            <ul className="space-y-2">
              {project.scope.map((line) => (
                <li key={line} className="flex gap-2 text-sm text-foreground/75">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-base font-semibold text-foreground">Design outcomes</h3>
            <ul className="space-y-2">
              {project.highlights.map((line) => (
                <li key={line} className="flex gap-2 text-sm text-foreground/75">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-highlight" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-accent/10 bg-card/40 px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground sm:text-xl">Specifications</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {project.specifications.map((group) => (
              <div key={group.category} className="rounded-xl border border-border/60 bg-background p-5">
                <h3 className="mb-3 text-sm font-semibold text-accent">{group.category}</h3>
                <ul className="space-y-2">
                  {group.details.map((d) => (
                    <li key={d} className="text-sm leading-snug text-foreground/75">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="mb-3 text-sm font-semibold text-foreground">Materials & brands</h3>
            <div className="flex flex-wrap gap-2">
              {project.materialsPalette.map((m) => (
                <span key={m} className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-foreground/85">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="mb-6 text-lg font-semibold text-foreground sm:text-xl">How we phased it</h2>
        <ol className="grid gap-4 sm:grid-cols-2">
          {project.phases.map((phase, i) => (
            <li key={phase.name} className="relative rounded-xl border border-border/60 bg-card p-4 pl-11">
              <span className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">{i + 1}</span>
              <h3 className="text-sm font-semibold text-foreground">{phase.name}</h3>
              <p className="mt-1 text-sm text-foreground/70">{phase.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-accent/15 bg-muted/25 px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">Gallery</h2>
          <p className="mb-6 text-sm text-foreground/60">Curated views — atmosphere, detail, and circulation.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((item, idx) => (
              <figure key={`${project.id}-g-${idx}`} className="overflow-hidden rounded-xl border border-border/50 bg-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={68}
                    loading="lazy"
                  />
                </div>
                <figcaption className="border-t border-border/40 px-3 py-2 text-xs text-foreground/65">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-10 text-center sm:px-6 sm:py-12">
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">Plan a project like this</h2>
        <p className="mt-2 text-sm text-foreground/65">Tell us about your site — we reply with next steps and realistic timing.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/booking" className={primaryBtn}>
            Start a project
          </Link>
          <Link href="/contact" className={outlineBtn}>
            Contact
          </Link>
        </div>
      </section>
    </div>
  )
}
