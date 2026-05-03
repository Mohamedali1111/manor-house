'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden sm:min-h-[90vh]">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=82"
            alt="Luxury interior — Manor House"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-highlight/15" />
        <div className="absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23fff\' stroke-opacity=\'0.3\'%3E%3Cpath d=\'M0 60 L60 0\'/%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:max-w-4xl sm:px-6">
        <div className="mb-5 animate-fade-in-up animation-delay-100">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-semibold text-white sm:text-sm">Manor House · Luxury Interior Design</span>
          </div>
        </div>

        <h1 className="mb-4 animate-fade-in-up animation-delay-200 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block bg-gradient-to-r from-white via-white to-accent/90 bg-clip-text text-transparent">Designing</span>
          <span className="block font-light text-accent text-shadow-gold">Timeless</span>
          <span className="block text-white drop-shadow-md">Spaces</span>
        </h1>

        <p className="mx-auto mb-8 max-w-xl animate-fade-in-up animation-delay-400 text-base font-light leading-relaxed text-white/90 sm:mb-10 sm:text-lg md:text-xl">
          Elegant interiors. Engineered precision.
        </p>

        <div className="mb-10 flex animate-fade-in-up animation-delay-600 flex-col items-center justify-center gap-3 sm:mb-12 sm:flex-row sm:gap-4">
          <button
            type="button"
            onClick={() => router.push('/portfolio')}
            className="btn-enhanced premium-button w-full rounded-xl border border-transparent bg-accent px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-highlight focus:outline-none focus:ring-2 focus:ring-accent/40 sm:w-auto sm:py-3.5 sm:text-base"
          >
            View Portfolio
          </button>
          <button
            type="button"
            onClick={() => router.push('/consultation')}
            className="glass-premium btn-enhanced premium-button w-full rounded-xl border-2 border-white/35 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30 sm:w-auto sm:py-3.5 sm:text-base"
          >
            Book Consultation
          </button>
        </div>

        <div className="flex animate-fade-in-up animation-delay-800 flex-wrap justify-center gap-2 text-[11px] text-white sm:gap-3 sm:text-xs">
          <span className="glass-dark rounded-full border border-accent/35 px-3 py-1.5 font-medium backdrop-blur-sm">500+ projects</span>
          <span className="glass-dark rounded-full border border-accent/35 px-3 py-1.5 font-medium backdrop-blur-sm">15+ years</span>
          <span className="glass-dark rounded-full border border-accent/35 px-3 py-1.5 font-medium backdrop-blur-sm">98% satisfaction</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent sm:h-28" />
    </section>
  )
}
