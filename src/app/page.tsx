'use client'

import {
  Hero,
  ServicesPreviewSection,
  ProcessSection,
  ProjectsPreviewSection,
  TestimonialsPreviewSection,
  BrandsSection,
  CTAPreviewSection,
  NewsletterSection,
} from '@/components/sections/home'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesPreviewSection />
      <ProcessSection />
      <ProjectsPreviewSection />
      <TestimonialsPreviewSection />
      <BrandsSection />
      <CTAPreviewSection />
      <NewsletterSection />
    </div>
  )
}
