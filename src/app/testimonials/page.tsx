'use client'

import { useRouter } from 'next/navigation'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    location: 'New York, NY',
    rating: 5,
    text: 'Manor House transformed our outdated living room into a stunning, modern space that perfectly reflects our style. The attention to detail was incredible, and the team was professional throughout the entire process.',
    project: 'Living Room Renovation',
    image: '👩‍💼'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    location: 'Brooklyn, NY',
    rating: 5,
    text: 'We needed a complete office redesign and Manor House delivered beyond our expectations. The new space has improved our team\'s productivity and created a professional atmosphere that impresses our clients.',
    project: 'Office Redesign',
    image: '👨‍💼'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Restaurant Owner',
    location: 'Manhattan, NY',
    rating: 5,
    text: 'The restaurant renovation was a huge success! The design perfectly captures our brand identity while creating a warm, inviting atmosphere. Our customers love the new space and we\'ve seen a significant increase in business.',
    project: 'Restaurant Renovation',
    image: '👩‍🍳'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Real Estate Developer',
    location: 'Queens, NY',
    rating: 5,
    text: 'We\'ve worked with Manor House on multiple projects and they consistently deliver exceptional results. Their ability to understand our vision and bring it to life is unmatched. Highly recommended for any design project.',
    project: 'Multiple Properties',
    image: '👨‍🏗️'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Interior Designer',
    location: 'Long Island, NY',
    rating: 5,
    text: 'As a fellow designer, I can appreciate the quality and creativity that Manor House brings to every project. Their work is inspiring and they truly understand the art of interior design.',
    project: 'Design Consultation',
    image: '👩‍🎨'
  },
  {
    id: 6,
    name: 'Robert Martinez',
    role: 'Hotel Manager',
    location: 'Bronx, NY',
    rating: 5,
    text: 'The hotel lobby renovation was a complete transformation. The new design creates a luxurious first impression for our guests and has received countless compliments. Manor House understood our brand perfectly.',
    project: 'Hotel Lobby Renovation',
    image: '👨‍💼'
  }
]

export default function TestimonialsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-card via-muted to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-xs sm:text-sm font-semibold">Client Stories</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What Our <span className="gradient-text-gold">Clients</span> Say
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Hear from our satisfied clients about their 
            transformative design experiences with Manor House Interior Design.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card p-6 rounded-2xl border border-border/50 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-accent/30 absolute -top-2 -left-2" />
                  <p className="text-foreground/70 leading-relaxed pl-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    <p className="text-xs text-foreground/50">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border/30">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-muted to-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Success by Numbers
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              The results speak for themselves. Here&apos;s what we&apos;ve achieved for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm sm:text-base text-foreground/70">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm sm:text-base text-foreground/70">Client Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm sm:text-base text-foreground/70">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm sm:text-base text-foreground/70">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Video Testimonials
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Watch our clients share their experiences in their own words.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video bg-gradient-to-br from-muted to-card rounded-2xl border border-border/50 flex items-center justify-center hover:border-accent/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <p className="text-foreground/60 text-sm">Video Testimonial {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-accent/8 via-highlight/15 to-accent/8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let us transform your space and create your own success story. 
            Contact us today to get started.
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
              onClick={() => router.push('/consultation')}
              variant="outline"
              size="lg"
              className="border-glow"
            >
              Book Consultation
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  )
}
