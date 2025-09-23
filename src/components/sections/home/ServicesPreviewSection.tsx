'use client'

import { ServiceCard } from '@/components/ui/ServiceCard'
import { services } from '@/data/services'

export function ServicesPreviewSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-card via-muted to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-highlight/3"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full mb-4 sm:mb-6 premium-badge">
            <span className="text-accent text-xs sm:text-sm font-semibold hover-text-enhance">Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 hover-text-enhance">
            What We <span className="gradient-text-gold">Do Best</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed hover-text-enhance">
            Transform your space with our comprehensive interior design solutions
          </p>
        </div>
        
        {/* Services Grid - Only 4 main services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 glass-premium rounded-xl border border-accent/20">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">500+</div>
            <div className="text-xs sm:text-sm text-foreground/70">Projects</div>
          </div>
          <div className="text-center p-4 glass-premium rounded-xl border border-accent/20">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">15+</div>
            <div className="text-xs sm:text-sm text-foreground/70">Years</div>
          </div>
          <div className="text-center p-4 glass-premium rounded-xl border border-accent/20">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">98%</div>
            <div className="text-xs sm:text-sm text-foreground/70">Satisfaction</div>
          </div>
          <div className="text-center p-4 glass-premium rounded-xl border border-accent/20">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">24/7</div>
            <div className="text-xs sm:text-sm text-foreground/70">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
