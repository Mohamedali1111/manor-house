'use client'

import { 
  Hero,
  ServicesPreviewSection,
  ProjectsPreviewSection,
  TestimonialsPreviewSection,
  CTAPreviewSection
} from '@/components/sections/home'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Preview Section */}
      <ServicesPreviewSection />
      
      {/* Projects Preview Section */}
      <ProjectsPreviewSection />
      
      {/* Testimonials Preview Section */}
      <TestimonialsPreviewSection />
      
      {/* Call to Action Section */}
      <CTAPreviewSection />
    </div>
  )
}
