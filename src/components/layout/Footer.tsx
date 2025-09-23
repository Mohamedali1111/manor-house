'use client'

import { useRouter } from 'next/navigation'
import { Phone, Mail, MapPin, Clock, Sparkles, ArrowRight, Heart, Star, Home, Settings, FolderOpen, Users, MessageCircle, FileText } from 'lucide-react'

export function Footer() {
  const router = useRouter()

  const handleNavClick = (href: string) => {
    router.push(href)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-[#D4af37]/20 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-[#D4af37]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-[#D4af37]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4af37] to-[#e6c866] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-[#D4af37]/30 transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4af37] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#D4af37] transition-colors duration-300">Manor House</h3>
                <p className="text-xs text-[#D4af37] font-medium tracking-wider uppercase">
                  Interior Design
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Creating timeless spaces that inspire and delight. Our award-winning team brings over 15 years of experience in luxury interior design.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 text-[#D4af37] fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-2">5.0 Rating</span>
            </div>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#D4af37]/10 to-[#e6c866]/10 hover:from-[#D4af37]/20 hover:to-[#e6c866]/20 text-[#D4af37] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#D4af37]/20 hover:border-[#D4af37]/40 cursor-pointer group">
                <Star className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-[#D4af37]/10 to-[#e6c866]/10 hover:from-[#D4af37]/20 hover:to-[#e6c866]/20 text-[#D4af37] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#D4af37]/20 hover:border-[#D4af37]/40 cursor-pointer group">
                <Sparkles className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-[#D4af37]/10 to-[#e6c866]/10 hover:from-[#D4af37]/20 hover:to-[#e6c866]/20 text-[#D4af37] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#D4af37]/20 hover:border-[#D4af37]/40 cursor-pointer group">
                <Heart className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2 group">
              <div className="w-6 h-6 bg-gradient-to-br from-[#D4af37] to-[#e6c866] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/', icon: Home },
                { name: 'Services', href: '/services', icon: Settings },
                { name: 'Portfolio', href: '/portfolio', icon: FolderOpen },
                { name: 'About Us', href: '/about', icon: Users },
                { name: 'Contact', href: '/contact', icon: MessageCircle },
                { name: 'Blog', href: '/blog', icon: FileText }
              ].map((item) => {
                const IconComponent = item.icon
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="group text-gray-600 hover:text-[#D4af37] transition-all duration-300 hover:translate-x-1 transform inline-flex items-center gap-2 text-sm hover:bg-[#D4af37]/5 px-2 py-1 rounded-lg"
                      style={{ cursor: 'pointer' }}
                    >
                      <IconComponent className="w-3 h-3 text-[#D4af37] group-hover:scale-110 transition-transform duration-300" />
                      <span>{item.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Enhanced Services */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2 group">
              <div className="w-6 h-6 bg-gradient-to-br from-[#D4af37] to-[#e6c866] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-3 h-3 text-white" />
              </div>
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Interior Design', icon: Home },
                { name: 'Space Planning', icon: Settings },
                { name: 'Electrical & Plumbing', icon: Sparkles },
                { name: 'Consultation', icon: MessageCircle },
                { name: 'Project Management', icon: FolderOpen },
                { name: 'Custom Furniture', icon: Star }
              ].map((service) => {
                const IconComponent = service.icon
                return (
                  <li key={service.name}>
                    <span className="text-gray-600 hover:text-[#D4af37] transition-colors duration-300 cursor-pointer text-sm flex items-center gap-2 hover:bg-[#D4af37]/5 px-2 py-1 rounded-lg group">
                      <IconComponent className="w-3 h-3 text-[#D4af37] group-hover:scale-110 transition-transform duration-300" />
                      {service.name}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2 group">
              <div className="w-6 h-6 bg-gradient-to-br from-[#D4af37] to-[#e6c866] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-3 h-3 text-white" />
              </div>
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <div className="w-4 h-4 bg-gradient-to-br from-[#D4af37]/10 to-[#e6c866]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-2 h-2 text-[#D4af37]" />
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <p className="text-gray-500 text-xs">Phone</p>
                  <p className="text-gray-900 font-medium text-sm group-hover:text-[#D4af37] transition-colors duration-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-4 h-4 bg-gradient-to-br from-[#D4af37]/10 to-[#e6c866]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-2 h-2 text-[#D4af37]" />
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <p className="text-gray-500 text-xs">Email</p>
                  <p className="text-gray-900 font-medium text-sm group-hover:text-[#D4af37] transition-colors duration-300">hello@manorhouse.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-4 h-4 bg-gradient-to-br from-[#D4af37]/10 to-[#e6c866]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-2 h-2 text-[#D4af37]" />
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <p className="text-gray-500 text-xs">Address</p>
                  <p className="text-gray-900 font-medium text-sm group-hover:text-[#D4af37] transition-colors duration-300">123 Design Ave, New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-4 h-4 bg-gradient-to-br from-[#D4af37]/10 to-[#e6c866]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-2 h-2 text-[#D4af37]" />
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <p className="text-gray-500 text-xs">Hours</p>
                  <p className="text-gray-900 font-medium text-sm group-hover:text-[#D4af37] transition-colors duration-300">Mon-Fri: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="mt-10 pt-8 border-t border-[#D4af37]/20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#D4af37] to-[#e6c866] rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Stay Updated</h4>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Subscribe to our newsletter for design tips, project updates, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4af37]/50 focus:border-[#D4af37] bg-white text-gray-900 placeholder:text-gray-500 text-sm transition-all duration-300 hover:border-[#D4af37]/30"
              />
              <button
                className="px-6 py-2.5 bg-gradient-to-r from-[#D4af37] to-[#e6c866] hover:from-[#e6c866] hover:to-[#D4af37] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl hover:shadow-[#D4af37]/25"
                style={{ cursor: 'pointer' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bar */}
      <div className="border-t border-[#D4af37]/20 bg-gradient-to-r from-gray-50/80 via-white to-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <div className="text-gray-500 text-sm flex items-center gap-2">
              <span>© {currentYear} Manor House Interior Design.</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-[#D4af37] animate-pulse hidden sm:inline" />
              <span className="hidden sm:inline">for exceptional spaces.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <button
                onClick={() => handleNavClick('/privacy')}
                className="hover:text-[#D4af37] transition-colors duration-300 hover:scale-105 transform hover:bg-[#D4af37]/5 px-2 py-1 rounded"
                style={{ cursor: 'pointer' }}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavClick('/terms')}
                className="hover:text-[#D4af37] transition-colors duration-300 hover:scale-105 transform hover:bg-[#D4af37]/5 px-2 py-1 rounded"
                style={{ cursor: 'pointer' }}
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleNavClick('/sitemap')}
                className="hover:text-[#D4af37] transition-colors duration-300 hover:scale-105 transform hover:bg-[#D4af37]/5 px-2 py-1 rounded"
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
