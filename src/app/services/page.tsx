'use client'

import { useRouter } from 'next/navigation'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { services } from '@/data/services'

export default function ServicesPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-card via-muted to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-xs sm:text-sm font-semibold">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Complete <span className="gradient-text-gold">Design</span> Solutions
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we provide comprehensive interior design services tailored to your unique vision and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-muted to-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Design Process
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Consultation</h3>
              <p className="text-foreground/70 leading-relaxed">
                We meet with you to understand your vision, lifestyle, and requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Design</h3>
              <p className="text-foreground/70 leading-relaxed">
                Our team creates detailed design concepts and 3D visualizations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Implementation</h3>
              <p className="text-foreground/70 leading-relaxed">
                We manage every aspect of the project from procurement to installation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Completion</h3>
              <p className="text-foreground/70 leading-relaxed">
                We ensure everything is perfect and provide ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-accent/8 via-highlight/15 to-accent/8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your free consultation and start your design journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PremiumButton
              onClick={() => router.push('/contact')}
              size="lg"
              className="border-glow"
            >
              Schedule Consultation
            </PremiumButton>
            <PremiumButton
              onClick={() => router.push('/portfolio')}
              variant="outline"
              size="lg"
              className="border-glow"
            >
              View Portfolio
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  )
}
