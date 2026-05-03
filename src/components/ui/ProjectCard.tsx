'use client'

import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  name: string
  location: string
  type: string
  area: string
  imageSrc: string
  imageAlt: string
  description: string
  /** Navigates to `/portfolio/[projectId]` when set */
  projectId?: string
}

export const ProjectCard = memo(function ProjectCard({
  name,
  location,
  type,
  area,
  imageSrc,
  imageAlt,
  description,
  projectId,
}: ProjectCardProps) {
  const shellClass =
    'group relative block overflow-hidden rounded-xl border border-border/50 bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lg card-hover-safe border-glow sm:rounded-2xl'

  const body = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-700 motion-reduce:transition-none group-hover:scale-110 motion-reduce:group-hover:scale-100"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          loading="lazy"
          quality={68}
        />

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/98 via-black/85 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-6 lg:p-8">
          <div className="translate-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
            <h3 className="mb-2 text-lg font-bold text-white drop-shadow-sm sm:text-xl lg:text-2xl">{name}</h3>
            <p className="mb-2 text-sm text-white/95 sm:text-base">{location}</p>
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-white/80 sm:gap-4 sm:text-sm">
              <span className="text-white/90">{type}</span>
              <span className="text-accent">•</span>
              <span className="text-white/90">{area}</span>
            </div>
            <p className="text-sm leading-relaxed text-white/90 sm:text-base">{description}</p>
          </div>
        </div>

        <div className="absolute right-3 top-3 rounded-full bg-accent/95 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 sm:right-4 sm:top-4">
          Featured
        </div>
      </div>

      <div className="relative bg-card/95 p-4 transition-colors duration-300 group-hover:bg-card sm:p-5">
        <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">{location}</p>
        <h3 className="mb-1 text-base font-bold text-foreground sm:text-lg">{name}</h3>
        <p className="mb-3 text-xs text-foreground/75 sm:text-sm">
          {type} • {area}
        </p>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-foreground/70">{description}</p>

        {projectId ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent sm:text-sm">
            View project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        ) : null}

        <div className="absolute bottom-4 right-5 h-2 w-2 animate-pulse rounded-full bg-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:bottom-5 sm:right-6" />
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-accent/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-3xl" />
    </>
  )

  if (projectId) {
    return (
      <Link href={`/portfolio/${projectId}`} className={shellClass}>
        {body}
      </Link>
    )
  }

  return <div className={shellClass}>{body}</div>
})
