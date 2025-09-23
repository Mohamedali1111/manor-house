'use client'

import { useRouter } from 'next/navigation'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { projects } from '@/data/projects'

export default function PortfolioPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-card via-muted to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-xs sm:text-sm font-semibold">Our Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Featured <span className="gradient-text-gold">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Discover our latest interior design transformations that showcase innovation, creativity, and exceptional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                location={project.location}
                type={project.type}
                area={project.area}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-muted to-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Project Categories
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              We specialize in a wide range of interior design projects, from residential to commercial spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Residential</h3>
              <p className="text-foreground/70 leading-relaxed">
                Custom home interiors, apartments, and residential spaces designed for comfort and style.
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Commercial</h3>
              <p className="text-foreground/70 leading-relaxed">
                Office spaces, retail environments, and commercial interiors that inspire productivity.
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏨</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Hospitality</h3>
              <p className="text-foreground/70 leading-relaxed">
                Hotels, restaurants, and hospitality spaces that create memorable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-2xl border border-border/50">
              <div className="flex items-center mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                &quot;Manor House transformed our home into a beautiful, functional space that perfectly reflects our style. 
                The attention to detail was incredible.&quot;
              </p>
              <div className="font-semibold text-foreground">Sarah Johnson</div>
              <div className="text-sm text-foreground/60">Homeowner</div>
            </div>
            
            <div className="p-6 bg-card rounded-2xl border border-border/50">
              <div className="flex items-center mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                &quot;Professional, creative, and reliable. They delivered our office renovation on time and within budget. 
                Highly recommended!&quot;
              </p>
              <div className="font-semibold text-foreground">Michael Chen</div>
              <div className="text-sm text-foreground/60">Business Owner</div>
            </div>
            
            <div className="p-6 bg-card rounded-2xl border border-border/50">
              <div className="flex items-center mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                &quot;The team&apos;s creativity and expertise exceeded our expectations. Our new space is both beautiful and functional.&quot;
              </p>
              <div className="font-semibold text-foreground">Emily Rodriguez</div>
              <div className="text-sm text-foreground/60">Restaurant Owner</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-accent/8 via-highlight/15 to-accent/8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Create Your Dream Space?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and bring your vision to life with our expert design services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PremiumButton
              onClick={() => router.push('/contact')}
              size="lg"
              className="border-glow"
            >
              Start Your Project
            </PremiumButton>
            <PremiumButton
              onClick={() => router.push('/services')}
              variant="outline"
              size="lg"
              className="border-glow"
            >
              View Services
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  )
}
