'use client'

import { memo } from 'react'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  features: string[]
  imageSrc: string
  imageAlt: string
}

export const ServiceCard = memo(function ServiceCard({
  title,
  description,
  icon,
  features,
  imageSrc,
  imageAlt
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/95 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-card hover:shadow-lg card-hover-safe border-glow sm:rounded-2xl sm:p-6">
      {/* Enhanced Background Image with Safe Opacity */}
      <div className="absolute inset-0 opacity-5 transition-opacity duration-500 group-hover:opacity-[0.08]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          loading="lazy"
          quality={65}
        />
      </div>
      
      {/* Premium Gradient Overlay - Safe for Text */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/90 via-card/80 to-card/90 group-hover:from-card/85 group-hover:via-card/75 group-hover:to-card/85 transition-all duration-500"></div>
      
      {/* Content with Enhanced Text Visibility */}
      <div className="relative z-10">
        {/* Enhanced Icon */}
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-accent/20 bg-gradient-to-br from-accent/15 to-highlight/15 transition-transform duration-300 group-hover:scale-[1.02] group-hover:border-accent/35 sm:h-16 sm:w-16">
          <span className="text-2xl sm:text-3xl">{icon}</span>
        </div>
        
        <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-accent sm:text-xl">{title}</h3>
        <p className="mb-3 text-sm leading-relaxed text-foreground/70 group-hover:text-foreground/80 sm:text-base">{description}</p>
        
        {/* Enhanced Features List - Better Hover Visibility */}
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-foreground/60 group-hover:text-foreground/70 transition-colors duration-300 hover:text-foreground/70">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Enhanced Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Premium Corner Accent */}
      <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-2xl sm:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
})
