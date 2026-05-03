'use client'

import { BrandsSection } from './BrandsSection'
import { CTAPreviewSection } from './CTAPreviewSection'
import { NewsletterSection } from './NewsletterSection'
import { ProcessSection } from './ProcessSection'
import { ProjectsPreviewSection } from './ProjectsPreviewSection'
import { ServicesPreviewSection } from './ServicesPreviewSection'
import { TestimonialsPreviewSection } from './TestimonialsPreviewSection'

/** Below-the-fold sections — loaded asynchronously from the home page for faster LCP. */
export function HomeBelowFold() {
  return (
    <>
      <ServicesPreviewSection />
      <ProcessSection />
      <ProjectsPreviewSection />
      <TestimonialsPreviewSection />
      <BrandsSection />
      <CTAPreviewSection />
      <NewsletterSection />
    </>
  )
}
