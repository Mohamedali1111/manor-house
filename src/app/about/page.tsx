'use client'

import { useRouter } from 'next/navigation'
import { PremiumButton } from '@/components/ui/PremiumButton'
import Image from 'next/image'

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-card via-muted to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-xs sm:text-sm font-semibold">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Crafting <span className="gradient-text-gold">Timeless</span> Spaces
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              With over 15 years of experience, we transform houses into homes that reflect your unique personality and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 mb-6 leading-relaxed">
                Founded in 2008, Manor House Interior Design began with a simple vision: to create spaces that inspire and delight. 
                What started as a small design studio has grown into one of the most respected interior design firms in the region.
              </p>
              <p className="text-base sm:text-lg text-foreground/70 mb-8 leading-relaxed">
                Our team of talented designers, architects, and craftspeople work together to bring your vision to life, 
                combining timeless design principles with modern innovation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm sm:text-base text-foreground/70">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm sm:text-base text-foreground/70">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src="/hero-luxury-interior.jpg"
                  alt="Our Design Studio - Manor House"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-muted to-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure exceptional results for every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Creativity</h3>
              <p className="text-foreground/70 leading-relaxed">
                We push boundaries and explore new possibilities to create unique, inspiring spaces.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Excellence</h3>
              <p className="text-foreground/70 leading-relaxed">
                We maintain the highest standards in every project, from concept to completion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Collaboration</h3>
              <p className="text-foreground/70 leading-relaxed">
                We work closely with our clients to understand and realize their vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-accent/8 via-highlight/15 to-accent/8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Let&apos;s work together to create a space that truly reflects your personality and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PremiumButton
              onClick={() => router.push('/contact')}
              size="lg"
              className="border-glow"
            >
              Get In Touch
            </PremiumButton>
            <PremiumButton
              onClick={() => router.push('/portfolio')}
              variant="outline"
              size="lg"
              className="border-glow"
            >
              View Our Work
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  )
}
