'use client'

export function TestimonialsPreviewSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-muted to-background relative">
      <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full mb-4 sm:mb-6 premium-badge">
            <span className="text-accent text-xs sm:text-sm font-semibold hover-text-enhance">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6 hover-text-enhance">
            What Our <span className="gradient-text-gold">Clients Say</span>
          </h2>
        </div>
        
        {/* Quick Testimonials - Only 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="p-6 glass-premium rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-sm">★</span>
              ))}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
              &ldquo;Manor House transformed our home beyond our wildest dreams. The attention to detail is incredible!&rdquo;
            </p>
            <div className="font-semibold text-foreground text-sm">Sarah M.</div>
            <div className="text-xs text-foreground/60">Homeowner</div>
          </div>
          
          <div className="p-6 glass-premium rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-sm">★</span>
              ))}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
              &ldquo;Professional, creative, and reliable. Highly recommend their services!&rdquo;
            </p>
            <div className="font-semibold text-foreground text-sm">Ahmed K.</div>
            <div className="text-xs text-foreground/60">Business Owner</div>
          </div>
          
          <div className="p-6 glass-premium rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-sm">★</span>
              ))}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
              &ldquo;The team&apos;s creativity and expertise exceeded our expectations. Our new space is both beautiful and functional.&rdquo;
            </p>
            <div className="font-semibold text-foreground text-sm">Fatma E.</div>
            <div className="text-xs text-foreground/60">Restaurant Owner</div>
          </div>
        </div>
      </div>
    </section>
  )
}
