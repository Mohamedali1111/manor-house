'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  
  // Check if we're on the home page
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    router.push(href)
  }

  return (
    <>
      {/* Perfect Premium Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHomePage 
          ? (isScrolled 
              ? 'bg-white/95 backdrop-blur-xl border-b border-accent/20 shadow-lg' 
              : 'bg-black/20 backdrop-blur-md border-b border-white/10')
          : 'bg-white/95 backdrop-blur-xl border-b border-accent/20 shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Perfect Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group" onClick={() => handleNavClick('/')}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-highlight rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-accent/30 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg sm:text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                  isHomePage 
                    ? (isScrolled ? 'text-foreground' : 'text-white')
                    : 'text-foreground'
                } group-hover:text-accent`}>
                  Manor House
                </h1>
                <p className="text-xs text-accent font-medium tracking-wider uppercase">
                  Interior Design
                </p>
              </div>
            </div>

            {/* Perfect Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative font-medium text-sm xl:text-base transition-all duration-300 group ${
                    isHomePage 
                      ? (isScrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-accent')
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Perfect CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => handleNavClick('/consultation')}
                className="px-6 xl:px-8 py-2.5 xl:py-3 bg-accent hover:bg-highlight text-white font-semibold text-sm xl:text-base rounded-lg xl:rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl hover:shadow-accent/25"
                style={{ cursor: 'pointer' }}
              >
                Get Quote
              </button>
            </div>

            {/* Perfect Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 border ${
                isHomePage 
                  ? (isScrolled 
                      ? 'bg-accent/10 hover:bg-accent/20 border-accent/20' 
                      : 'bg-white/20 hover:bg-white/30 border-white/30')
                  : 'bg-accent/10 hover:bg-accent/20 border-accent/20'
              }`}
              style={{ cursor: 'pointer' }}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <X className={`w-5 h-5 transition-colors duration-300 ${
                  isHomePage 
                    ? (isScrolled ? 'text-accent' : 'text-white')
                    : 'text-accent'
                }`} />
              ) : (
                <Menu className={`w-5 h-5 transition-colors duration-300 ${
                  isHomePage 
                    ? (isScrolled ? 'text-accent' : 'text-white')
                    : 'text-accent'
                }`} />
              )}
            </button>
          </div>
        </div>

        {/* Perfect Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-accent/20">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-2.5 px-4 text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 font-medium text-sm border border-transparent hover:border-accent/20"
                  style={{ cursor: 'pointer' }}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 border-t border-accent/20">
                <button
                  onClick={() => handleNavClick('/consultation')}
                  className="w-full px-4 py-2.5 bg-accent hover:bg-highlight text-white font-semibold text-sm rounded-lg transition-all duration-300 transform hover:scale-105"
                  style={{ cursor: 'pointer' }}
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
