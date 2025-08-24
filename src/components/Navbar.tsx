'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

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
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#D4af37]/20 shadow-lg' 
          : 'bg-black/20 backdrop-blur-md border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Perfect Logo */}
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavClick('/')}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4af37] to-[#e6c866] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-[#D4af37]/30 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                } group-hover:text-[#D4af37]`}>
                  Manor House
                </h1>
                <p className="text-xs text-[#D4af37] font-medium tracking-wider uppercase">
                  Interior Design
                </p>
              </div>
            </div>

            {/* Perfect Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative font-medium transition-all duration-300 group ${
                    isScrolled ? 'text-gray-700 hover:text-[#D4af37]' : 'text-white hover:text-[#D4af37]'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4af37] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Perfect CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => handleNavClick('/consultation')}
                className="px-8 py-3 bg-[#D4af37] hover:bg-[#e6c866] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl hover:shadow-[#D4af37]/25"
                style={{ cursor: 'pointer' }}
              >
                Get Quote
              </button>
            </div>

            {/* Perfect Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 border ${
                isScrolled 
                  ? 'bg-[#D4af37]/10 hover:bg-[#D4af37]/20 border-[#D4af37]/20' 
                  : 'bg-white/20 hover:bg-white/30 border-white/30'
              }`}
              style={{ cursor: 'pointer' }}
            >
              {isOpen ? (
                <X className={`w-6 h-6 transition-colors duration-300 ${
                  isScrolled ? 'text-[#D4af37]' : 'text-white'
                }`} />
              ) : (
                <Menu className={`w-6 h-6 transition-colors duration-300 ${
                  isScrolled ? 'text-[#D4af37]' : 'text-white'
                }`} />
              )}
            </button>
          </div>
        </div>

        {/* Perfect Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-[#D4af37]/20">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-[#D4af37] hover:bg-[#D4af37]/5 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-[#D4af37]/20"
                  style={{ cursor: 'pointer' }}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-[#D4af37]/20">
                <button
                  onClick={() => handleNavClick('/consultation')}
                  className="w-full px-6 py-3 bg-[#D4af37] hover:bg-[#e6c866] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
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
