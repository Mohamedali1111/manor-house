'use client'

import { useRouter } from 'next/navigation'

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
      {/* Full-screen Background Image with Multiple Premium Images */}
      <div className="absolute inset-0">
        {/* Main Background Image - Luxury Interior */}
        <div className="absolute inset-0 bg-[url('/hero-luxury-interior.jpg')] bg-cover bg-center bg-no-repeat"></div>
        
        {/* Fallback Premium Image */}
        <div className="absolute inset-0 bg-[url('/hero-premium-living.jpg')] bg-cover bg-center bg-no-repeat opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
        
        {/* Sophisticated Light Overlay for Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40"></div>
        
        {/* Premium accent overlay with light degrees */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-highlight/5"></div>
        
        {/* Subtle light pattern overlay */}
        <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-5 bg-repeat"></div>
      </div>
      
      {/* Hero Content with Enhanced Professional Styling */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Premium Pre-title Badge */}
        <div className="inline-flex items-center px-8 py-4 bg-white/95 backdrop-blur-md border border-accent/30 rounded-full mb-10 shadow-2xl animate-fade-in-up">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Est. 2010 • Award-Winning Design</span>
        </div>
        
        {/* Main Heading with Premium Typography */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl animate-fade-in-up animation-delay-200">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent drop-shadow-none">
            Designing
          </span>
          <br />
          <span className="text-accent drop-shadow-none font-light">Timeless</span>
          <br />
          <span className="text-white drop-shadow-none">Spaces</span>
        </h1>
        
        {/* Premium Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg animate-fade-in-up animation-delay-400">
          Welcome to Manor House Interior Design
        </p>
        
        {/* Enhanced CTA Buttons with Premium Styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up animation-delay-600">
          <button 
            onClick={handlePortfolioClick}
            className="group w-full sm:w-auto px-10 py-5 bg-accent hover:bg-highlight text-white font-bold text-lg rounded-xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-white shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Portfolio
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
            </span>
          </button>
          
          <button 
            onClick={handleConsultationClick}
            className="group w-full sm:w-auto px-10 py-5 bg-white/95 backdrop-blur-md border-2 border-white text-foreground hover:bg-white font-bold text-lg rounded-xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-white shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-3">
              Book Consultation
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
            </span>
          </button>
        </div>
        
        {/* Premium Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm animate-fade-in-up animation-delay-800">
          <span className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300">
            <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
            500+ Projects Completed
          </span>
          <span className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300">
            <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
            15+ Years Experience
          </span>
          <span className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300">
            <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
            98% Client Satisfaction
          </span>
        </div>
      </div>
    </section>
  )
}
