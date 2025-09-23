'use client'

import { useRouter } from 'next/navigation'
import { PremiumButton } from '@/components/ui/PremiumButton'

export function CTAPreviewSection() {
  const router = useRouter()

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-highlight/15 to-accent/8"></div>
      <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-8"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 hover-text-enhance">
          Ready to Transform Your <span className="gradient-text-gold">Space</span>?
        </h2>
        <p className="text-base sm:text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed hover-text-enhance">
          Let&apos;s create an interior that reflects your personality and exceeds your expectations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
          <PremiumButton
            onClick={() => router.push('/contact')}
            size="lg"
            className="border-glow"
          >
            Start Your Project
            <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg sm:text-xl">→</span>
          </PremiumButton>
          <PremiumButton
            onClick={() => router.push('/consultation')}
            variant="outline"
            size="lg"
            className="border-glow"
          >
            Free Consultation
          </PremiumButton>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-foreground/70">
          <span className="flex items-center gap-2 hover-text-enhance">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Free consultation
          </span>
          <span className="flex items-center gap-2 hover-text-enhance">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            No commitment
          </span>
          <span className="flex items-center gap-2 hover-text-enhance">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            24/7 support
          </span>
        </div>
      </div>
    </section>
  )
}
