'use client'

import { ServiceCard } from '@/components/ui/ServiceCard'
import { services } from '@/data/services'

export function ServicesPreviewSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-card via-muted to-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-8"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-highlight/5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-highlight/3"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-16 left-16 w-28 h-28 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-36 h-36 bg-highlight/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-6 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 premium-badge">
            <span className="text-accent text-sm font-semibold hover-text-enhance">Our Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 sm:mb-8 leading-tight tracking-tight hover-text-enhance">
            What We <span className="gradient-text-gold">Do Best</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light hover-text-enhance">
            Transform your space with our comprehensive interior design solutions tailored to your unique vision
          </p>
        </div>
        
        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16">
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

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center p-6 lg:p-8 glass-premium rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover-lift group">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-sm sm:text-base text-foreground/70 font-medium">Projects</div>
          </div>
          <div className="text-center p-6 lg:p-8 glass-premium rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover-lift group">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div className="text-sm sm:text-base text-foreground/70 font-medium">Years</div>
          </div>
          <div className="text-center p-6 lg:p-8 glass-premium rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover-lift group">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
            <div className="text-sm sm:text-base text-foreground/70 font-medium">Satisfaction</div>
          </div>
          <div className="text-center p-6 lg:p-8 glass-premium rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover-lift group">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
            <div className="text-sm sm:text-base text-foreground/70 font-medium">Support</div>
          </div>
        </div>
        
        {/* Additional Premium Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-foreground/60 text-sm">
            <div className="w-1 h-1 bg-accent rounded-full"></div>
            <span>Comprehensive design solutions from concept to completion</span>
            <div className="w-1 h-1 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
