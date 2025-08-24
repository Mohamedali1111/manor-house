'use client'

import { useRouter } from 'next/navigation'
import { Phone, Mail, MapPin, Clock, Sparkles, ArrowRight } from 'lucide-react'

export function Footer() {
  const router = useRouter()

  const handleNavClick = (href: string) => {
    router.push(href)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-[#D4af37]/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-[#D4af37] to-[#e6c866] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Manor House</h3>
                <p className="text-xs text-[#D4af37] font-medium tracking-wider uppercase">
                  Interior Design
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm">
              Creating timeless spaces that inspire and delight. Our award-winning team brings over 15 years of experience in luxury interior design.
            </p>
            <div className="flex space-x-3">
              <div className="w-9 h-9 bg-[#D4af37]/10 hover:bg-[#D4af37]/20 text-[#D4af37] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#D4af37]/20 hover:border-[#D4af37]/40 cursor-pointer">
                <span className="text-base">✨</span>
              </div>
              <div className="w-9 h-9 bg-[#D4af37]/10 hover:bg-[#D4af37]/20 text-[#D4af37] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#D4af37]/20 hover:border-[#D4af37]/40 cursor-pointer">
                <span className="text-base">🎨</span>
              </div>
              <div className="w-9 h-9 bg-[#D4af37]/10 hover:bg-[#D4af37]/20 text-[#D4af37] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#D4af37]/20 hover:border-[#D4af37]/40 cursor-pointer">
                <span className="text-base">🏆</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4af37]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Blog', href: '/blog' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="group text-gray-600 hover:text-[#D4af37] transition-all duration-300 hover:translate-x-1 transform inline-flex items-center gap-2"
                    style={{ cursor: 'pointer' }}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                'Interior Design',
                'Space Planning',
                'Electrical & Plumbing',
                'Consultation',
                'Project Management',
                'Custom Furniture'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-600 hover:text-[#D4af37] transition-colors duration-300 cursor-pointer text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-5">Contact Info</h4>
            <div className="space-y-3.5">
              <div className="flex items-start space-x-3 group">
                <div className="w-5 h-5 bg-[#D4af37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-2.5 h-2.5 text-[#D4af37]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Phone</p>
                  <p className="text-gray-900 font-medium text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-5 h-5 bg-[#D4af37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-2.5 h-2.5 text-[#D4af37]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Email</p>
                  <p className="text-gray-900 font-medium text-sm">hello@manorhouse.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-5 h-5 bg-[#D4af37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-2.5 h-2.5 text-[#D4af37]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Address</p>
                  <p className="text-gray-900 font-medium text-sm">123 Design Ave, New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-5 h-5 bg-[#D4af37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-2.5 h-2.5 text-[#D4af37]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Hours</p>
                  <p className="text-gray-900 font-medium text-sm">Mon-Fri: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-10 border-t border-[#D4af37]/20">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Stay Updated</h4>
            <p className="text-gray-600 mb-5 text-sm">
              Subscribe to our newsletter for design tips, project updates, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4af37]/50 focus:border-[#D4af37] bg-white text-gray-900 placeholder:text-gray-500 text-sm"
              />
              <button
                className="px-6 py-2.5 bg-[#D4af37] hover:bg-[#e6c866] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl hover:shadow-[#D4af37]/25"
                style={{ cursor: 'pointer' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4af37]/20 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {currentYear} Manor House Interior Design. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <button
                onClick={() => handleNavClick('/privacy')}
                className="hover:text-[#D4af37] transition-colors duration-300 hover:scale-105 transform"
                style={{ cursor: 'pointer' }}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavClick('/terms')}
                className="hover:text-[#D4af37] transition-colors duration-300 hover:scale-105 transform"
                style={{ cursor: 'pointer' }}
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleNavClick('/sitemap')}
                className="hover:text-[#D4af37] transition-colors duration-300 hover:scale-105 transform"
                style={{ cursor: 'pointer' }}
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
