'use client'

export function TestimonialsPreviewSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-8"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-highlight/3"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-highlight/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-6 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 premium-badge">
            <span className="text-accent text-sm font-semibold hover-text-enhance">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 sm:mb-8 leading-tight tracking-tight hover-text-enhance">
            What Our <span className="gradient-text-gold">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light hover-text-enhance">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          <div className="group p-8 lg:p-10 glass-premium rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover-lift">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-lg group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 100}ms` }}>★</span>
              ))}
            </div>
            <p className="text-foreground/80 text-base leading-relaxed mb-6 italic font-light">
              &ldquo;Manor House transformed our home beyond our wildest dreams. The attention to detail is incredible!&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SM</span>
              </div>
              <div>
                <div className="font-semibold text-foreground text-base">Sarah M.</div>
                <div className="text-sm text-foreground/60">Homeowner</div>
              </div>
            </div>
          </div>
          
          <div className="group p-8 lg:p-10 glass-premium rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover-lift">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-lg group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 100}ms` }}>★</span>
              ))}
            </div>
            <p className="text-foreground/80 text-base leading-relaxed mb-6 italic font-light">
              &ldquo;Professional, creative, and reliable. Highly recommend their services!&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AK</span>
              </div>
              <div>
                <div className="font-semibold text-foreground text-base">Ahmed K.</div>
                <div className="text-sm text-foreground/60">Business Owner</div>
              </div>
            </div>
          </div>
          
          <div className="group p-8 lg:p-10 glass-premium rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover-lift">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-lg group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 100}ms` }}>★</span>
              ))}
            </div>
            <p className="text-foreground/80 text-base leading-relaxed mb-6 italic font-light">
              &ldquo;The team&apos;s creativity and expertise exceeded our expectations. Our new space is both beautiful and functional.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">FE</span>
              </div>
              <div>
                <div className="font-semibold text-foreground text-base">Fatma E.</div>
                <div className="text-sm text-foreground/60">Restaurant Owner</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Premium Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-foreground/60 text-sm">
            <div className="w-1 h-1 bg-accent rounded-full"></div>
            <span>Join hundreds of satisfied clients who trust Manor House</span>
            <div className="w-1 h-1 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
