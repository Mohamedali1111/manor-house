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
    <div className="group relative bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card hover:border-accent/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/20 premium-card overflow-hidden border-glow">
      {/* Enhanced Background Image */}
      <div className="absolute inset-0 opacity-8 group-hover:opacity-15 transition-opacity duration-500">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          loading="lazy"
          quality={75}
        />
      </div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card/60 to-card/80 group-hover:from-card/70 group-hover:via-card/50 group-hover:to-card/70 transition-all duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Enhanced Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-accent/20 group-hover:border-accent/40">
          <span className="text-4xl">{icon}</span>
        </div>
        
        {/* Enhanced Title & Description */}
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">{title}</h3>
        <p className="text-foreground/70 text-base leading-relaxed mb-4 group-hover:text-foreground/80 transition-colors duration-300">{description}</p>
        
        {/* Enhanced Features List */}
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-foreground/60 group-hover:text-foreground/70 transition-colors duration-300">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Enhanced Hover Effect Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Premium Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
})
