'use client'

import { ServiceCard } from '@/components/ui/ServiceCard'
import { services } from '@/data/services'

export function ServicesPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-card via-muted to-background px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23000\' stroke-opacity=\'0.12\'%3E%3Cpath d=\'M0 60 L60 0 M-15 15 L15 -15 M45 75 L75 45\'/%3E%3C/g%3E%3C/svg%3E')]" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-highlight/5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-highlight/3"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-16 left-16 w-28 h-28 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-36 h-36 bg-highlight/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 premium-badge">
            <span className="text-xs font-semibold text-accent">Our expertise</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
            What we <span className="gradient-text-gold">do best</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-foreground/70 sm:text-base">
            Comprehensive interior services tailored to your brief — Cairo, Alexandria, and New Cairo.
          </p>
        </div>
        
        {/* Enhanced Services Grid */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          <div className="rounded-xl border border-accent/20 bg-card/90 p-5 text-center shadow-sm">
            <div className="mb-1 text-2xl font-bold text-accent lg:text-3xl">500+</div>
            <div className="text-xs font-medium text-foreground/70 sm:text-sm">Projects completed</div>
          </div>
          <div className="rounded-xl border border-accent/20 bg-card/90 p-5 text-center shadow-sm">
            <div className="mb-1 text-2xl font-bold text-accent lg:text-3xl">15+</div>
            <div className="text-xs font-medium text-foreground/70 sm:text-sm">Years of experience</div>
          </div>
          <div className="rounded-xl border border-accent/20 bg-card/90 p-5 text-center shadow-sm">
            <div className="mb-1 text-2xl font-bold text-accent lg:text-3xl">98%</div>
            <div className="text-xs font-medium text-foreground/70 sm:text-sm">Client satisfaction</div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-foreground/55">Concept through completion — one coordinated studio.</p>
      </div>
    </section>
  )
}
