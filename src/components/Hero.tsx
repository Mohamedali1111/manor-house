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
      {/* Optimized Background Images with Next.js Image Component */}
      <div className="absolute inset-0">
        {/* Main Background Image - Luxury Interior */}
        <div className="absolute inset-0">
          <Image
            src="/hero-luxury-interior.jpg"
            alt="Luxury Interior Design - Manor House"
            fill
            priority
            quality={90}
            className="object-cover object-center"
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
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
            loading="lazy"
          />
        </div>
        
        {/* Enhanced Premium Gradient Overlays for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-highlight/20"></div>
        
        {/* Premium Radial Overlay for Center Focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/70"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-20"></div>
        
        {/* Premium Light Rays Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/8 to-transparent opacity-40"></div>
      </div>
      
      {/* Hero Content with Enhanced Premium Styling */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
      
        
        {/* Main Heading with Enhanced Premium Typography and Readability */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight text-shadow-premium animate-fade-in-up animation-delay-200 hover-text-enhance">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent drop-shadow-none">
            Designing
          </span>
          <br />
          <span className="text-accent drop-shadow-none font-light text-shadow-gold">Timeless</span>
          <br />
          <span className="text-white drop-shadow-none">Spaces</span>
        </h1>
        
        {/* Premium Subheading with Enhanced Readability */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed font-light text-shadow-premium animate-fade-in-up animation-delay-400 hover-text-enhance">
          Welcome to Manor House Interior Design
        </p>
        
        {/* Enhanced CTA Buttons with Premium Styling */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-12 animate-fade-in-up animation-delay-600">
          <button 
            onClick={handlePortfolioClick}
            className="group w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-accent hover:bg-highlight text-white font-semibold text-base sm:text-lg rounded-lg sm:rounded-xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-white shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 btn-enhanced border-glow"
            style={{ cursor: 'pointer' }}
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3 hover-text-enhance">
              Explore Portfolio
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg sm:text-xl">→</span>
            </span>
          </button>
          
          <button 
            onClick={handleConsultationClick}
            className="group w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 glass-premium border-2 border-white/30 text-white hover:bg-white/20 font-semibold text-base sm:text-lg rounded-lg sm:rounded-xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-white shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 btn-enhanced border-glow"
            style={{ cursor: 'pointer' }}
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3 hover-text-enhance">
              Book Consultation
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg sm:text-xl">→</span>
            </span>
          </button>
        </div>
        
        {/* Premium Trust Indicators with Enhanced Styling */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-white text-xs sm:text-sm animate-fade-in-up animation-delay-800">
          <span className="flex items-center gap-2 sm:gap-3 glass-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/30 hover:bg-accent/20 transition-colors duration-300 hover-lift premium-badge">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-pulse"></span>
            <span className="hover-text-enhance">500+ Projects</span>
          </span>
          <span className="flex items-center gap-2 sm:gap-3 glass-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/30 hover:bg-accent/20 transition-colors duration-300 hover-lift premium-badge">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-pulse"></span>
            <span className="hover-text-enhance">15+ Years</span>
          </span>
          <span className="flex items-center gap-2 sm:gap-3 glass-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/30 hover:bg-accent/20 transition-colors duration-300 hover-lift premium-badge">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-pulse"></span>
            <span className="hover-text-enhance">98% Satisfaction</span>
          </span>
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
