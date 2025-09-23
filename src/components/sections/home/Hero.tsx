'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export function Hero() {
  const router = useRouter()

  const handlePortfolioClick = () => {
    router.push('/portfolio')
  }

  const handleConsultationClick = () => {
    router.push('/consultation')
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Images with Next.js Image Component */}
      <div className="absolute inset-0">
        {/* Main Background Image - Luxury Interior */}
        <div className="absolute inset-0">
          <Image
            src="/hero-luxury-interior.jpg"
            alt="Luxury Interior Design - Manor House"
            fill
            priority
            quality={95}
            className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-[3000ms] ease-out"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        
        {/* Fallback Premium Image - Lazy Loaded */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000">
          <Image
            src="/hero-premium-living.jpg"
            alt="Premium Living Space - Manor House"
            fill
            quality={90}
            className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-[3000ms] ease-out"
            sizes="100vw"
            loading="lazy"
          />
        </div>
        
        {/* Enhanced Premium Gradient Overlays for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-highlight/25"></div>
        
        {/* Premium Radial Overlay for Center Focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80"></div>
        
        {/* Enhanced Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-30"></div>
        
        {/* Premium Light Rays Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/12 to-transparent opacity-50"></div>
        
        {/* Additional Premium Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
      </div>
      
      {/* Hero Content with Enhanced Premium Styling */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Premium Badge */}
        <div className="mb-8 animate-fade-in-up animation-delay-100">
          <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="text-white text-sm font-semibold">Luxury Interior Design</span>
          </div>
        </div>
        
        {/* Main Heading with Enhanced Premium Typography */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 sm:mb-10 leading-[0.9] tracking-tight animate-fade-in-up animation-delay-200">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent/90 drop-shadow-2xl">
            Designing
          </span>
          <span className="block text-accent drop-shadow-2xl font-light text-shadow-gold">
            Timeless
          </span>
          <span className="block text-white drop-shadow-2xl">
            Spaces
          </span>
        </h1>
        
        {/* Enhanced Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-12 sm:mb-16 max-w-5xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-400">
          Welcome to Manor House Interior Design
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-16 sm:mb-20 animate-fade-in-up animation-delay-600">
          <button 
            onClick={handlePortfolioClick}
            className="group w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-accent hover:bg-highlight text-white font-semibold text-lg sm:text-xl rounded-xl sm:rounded-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-white shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 btn-enhanced border-glow"
            style={{ cursor: 'pointer' }}
          >
            <span className="relative z-10 flex items-center gap-3 hover-text-enhance">
              Explore Portfolio
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl sm:text-2xl">→</span>
            </span>
          </button>
          
          <button 
            onClick={handleConsultationClick}
            className="group w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 glass-premium border-2 border-white/40 text-white hover:bg-white/20 font-semibold text-lg sm:text-xl rounded-xl sm:rounded-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-white shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 btn-enhanced border-glow"
            style={{ cursor: 'pointer' }}
          >
            <span className="relative z-10 flex items-center gap-3 hover-text-enhance">
              Book Consultation
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl sm:text-2xl">→</span>
            </span>
          </button>
        </div>
        
        {/* Enhanced Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 text-white text-sm sm:text-base animate-fade-in-up animation-delay-800">
          <div className="flex items-center gap-3 glass-dark px-5 py-3 rounded-full border border-accent/40 hover:bg-accent/20 transition-all duration-300 hover-lift premium-badge">
            <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
            <span className="hover-text-enhance font-medium">500+ Projects</span>
          </div>
          <div className="flex items-center gap-3 glass-dark px-5 py-3 rounded-full border border-accent/40 hover:bg-accent/20 transition-all duration-300 hover-lift premium-badge">
            <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
            <span className="hover-text-enhance font-medium">15+ Years</span>
          </div>
          <div className="flex items-center gap-3 glass-dark px-5 py-3 rounded-full border border-accent/40 hover:bg-accent/20 transition-all duration-300 hover-lift premium-badge">
            <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
            <span className="hover-text-enhance font-medium">98% Satisfaction</span>
          </div>
        </div>
      </div>
      
      {/* Premium Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Floating Premium Accent Elements */}
      <div className="absolute top-20 left-10 w-2 h-20 bg-gradient-to-b from-accent to-transparent opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-16 w-1 h-16 bg-gradient-to-b from-highlight to-transparent opacity-40 animate-pulse animation-delay-400"></div>
      <div className="absolute bottom-40 left-20 w-1 h-12 bg-gradient-to-b from-accent to-transparent opacity-50 animate-pulse animation-delay-800"></div>
    </section>
  )
}
