'use client'

import { useRouter } from 'next/navigation'
import { PremiumButton } from '@/components/ui/PremiumButton'

export function CTAPreviewSection() {
  const router = useRouter()

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-highlight/5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-highlight/15 to-accent/8"></div>
      <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-10"></div>
      
      {/* Premium Radial Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-accent/10 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-highlight/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Premium Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 premium-badge">
            <span className="text-accent text-sm font-semibold hover-text-enhance">Get Started</span>
          </div>
        </div>
        
        {/* Enhanced Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 sm:mb-8 leading-tight tracking-tight hover-text-enhance">
            Ready to Transform Your <span className="gradient-text-gold">Space</span>?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-light hover-text-enhance">
            Let&apos;s create an interior that reflects your personality and exceeds your expectations. 
            Our expert team is ready to bring your vision to life.
          </p>
        </div>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-12">
          <PremiumButton
            onClick={() => router.push('/contact')}
            size="lg"
            className="border-glow group"
          >
            <span className="flex items-center gap-3">
              Start Your Project
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-xl">→</span>
            </span>
          </PremiumButton>
          <PremiumButton
            onClick={() => router.push('/consultation')}
            variant="outline"
            size="lg"
            className="border-glow group"
          >
            <span className="flex items-center gap-3">
              Free Consultation
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-xl">→</span>
            </span>
          </PremiumButton>
        </div>
        
        {/* Enhanced Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm sm:text-base text-foreground/70">
          <div className="flex items-center gap-3 px-4 py-2 glass-premium rounded-full border border-accent/20 hover:border-accent/40 transition-all duration-300 hover-lift">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="hover-text-enhance font-medium">Free consultation</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 glass-premium rounded-full border border-accent/20 hover:border-accent/40 transition-all duration-300 hover-lift">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="hover-text-enhance font-medium">No commitment</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 glass-premium rounded-full border border-accent/20 hover:border-accent/40 transition-all duration-300 hover-lift">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="hover-text-enhance font-medium">24/7 support</span>
          </div>
        </div>
        
        {/* Additional Premium Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-foreground/60 text-sm">
            <div className="w-1 h-1 bg-accent rounded-full"></div>
            <span>Trusted by 500+ satisfied clients worldwide</span>
            <div className="w-1 h-1 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
