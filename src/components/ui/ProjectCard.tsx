'use client'

import { memo } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  name: string
  location: string
  type: string
  area: string
  imageSrc: string
  imageAlt: string
  description: string
}

export const ProjectCard = memo(function ProjectCard({
  name,
  location,
  type,
  area,
  imageSrc,
  imageAlt,
  description
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-accent/40 transition-all duration-500 hover:-translate-y-3 shadow-lg hover:shadow-2xl premium-card border-glow">
      {/* Enhanced Project Image */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 1024px) 100vw, 33vw"
          loading="lazy"
          quality={80}
        />
        
        {/* Enhanced Project Info Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">{name}</h3>
            <p className="text-white/80 text-base mb-3 group-hover:text-white/90 transition-colors duration-300">{location}</p>
            <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
              <span className="group-hover:text-accent transition-colors duration-300">{type}</span>
              <span className="text-accent">•</span>
              <span className="group-hover:text-accent transition-colors duration-300">{area}</span>
            </div>
            <p className="text-white/70 text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">{description}</p>
          </div>
        </div>
        
        {/* Premium Corner Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-75 group-hover:scale-100">
          Featured
        </div>
      </div>
      
      {/* Enhanced Quick Info Bar */}
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{name}</h3>
        <p className="text-foreground/60 group-hover:text-foreground/70 transition-colors duration-300">{type} • {area}</p>
        
        {/* Premium Hover Indicator */}
        <div className="absolute bottom-4 right-6 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
      </div>
      
      {/* Enhanced Border Glow Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
})
