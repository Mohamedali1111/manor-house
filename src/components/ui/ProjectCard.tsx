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
    <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-accent/40 transition-all duration-500 hover:-translate-y-3 shadow-lg hover:shadow-2xl card-hover-safe border-glow">
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
        
        {/* Enhanced Project Info Overlay - Safe for Text with Better Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 hover:text-white hover:text-shadow-gold">{name}</h3>
            <p className="text-white/95 text-base mb-3 group-hover:text-white transition-colors duration-300 hover:text-white">{location}</p>
            <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
              <span className="group-hover:text-accent transition-colors duration-300 hover:text-accent">{type}</span>
              <span className="text-accent">•</span>
              <span className="group-hover:text-accent transition-colors duration-300 hover:text-accent">{area}</span>
            </div>
            <p className="text-white/90 text-base leading-relaxed group-hover:text-white transition-colors duration-300 hover:text-white">{description}</p>
          </div>
        </div>
        
        {/* Premium Corner Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-accent/95 backdrop-blur-sm text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-75 group-hover:scale-100">
          Featured
        </div>
      </div>
      
      {/* Enhanced Quick Info Bar - Safe on Hover with Better Visibility */}
      <div className="p-6 relative bg-card/95 group-hover:bg-card transition-colors duration-300">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 hover:text-accent">{name}</h3>
        <p className="text-foreground/80 group-hover:text-foreground/90 transition-colors duration-300 hover:text-foreground/90">{type} • {area}</p>
        
        {/* Premium Hover Indicator */}
        <div className="absolute bottom-4 right-6 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
      </div>
      
      {/* Enhanced Border Glow Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
})
