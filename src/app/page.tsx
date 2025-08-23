'use client'

import { Hero } from '@/components/Hero'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleProjectsClick = () => {
    router.push('/projects')
  }

  const handleStartProjectClick = () => {
    router.push('/start-project')
  }

  const handleScheduleConsultationClick = () => {
    router.push('/schedule-consultation')
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Our Services Preview */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-card via-muted to-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-3"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive interior design solutions tailored to your unique vision and lifestyle
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Interior Design",
                description: "Complete interior design solutions from concept to completion, including space planning, furniture selection, and color schemes.",
                icon: "🎨",
                features: ["Concept Development", "Space Planning", "Material Selection", "Project Management"]
              },
              {
                title: "Electrical & Plumbing",
                description: "Professional electrical and plumbing installations with attention to safety, efficiency, and modern technology integration.",
                icon: "⚡",
                features: ["Smart Home Integration", "Energy Efficiency", "Safety Compliance", "Modern Fixtures"]
              },
              {
                title: "Space Planning",
                description: "Intelligent layout design that maximizes functionality while maintaining aesthetic appeal and flow.",
                icon: "📐",
                features: ["Traffic Flow Analysis", "Furniture Layout", "Storage Solutions", "Multi-functional Spaces"]
              },
              {
                title: "Consultation",
                description: "Expert advice and guidance to help you make informed decisions about your interior design project.",
                icon: "💡",
                features: ["Design Consultation", "Budget Planning", "Vendor Selection", "Timeline Management"]
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card hover:border-accent/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/10 premium-card">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-foreground/70 text-base leading-relaxed mb-4">{service.description}</p>
                
                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-foreground/60">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-background relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/3 via-transparent to-highlight/3"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Discover our latest interior design transformations that showcase innovation and excellence
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Gana-Zayed Villa",
                location: "Cairo, Egypt",
                type: "Luxury Villa",
                area: "450 sqm",
                image: "/project-gana-zayed.jpg",
                description: "Modern luxury villa with contemporary design elements and premium finishes"
              },
              {
                name: "Dar-Masr Residence",
                location: "Alexandria, Egypt",
                type: "Penthouse",
                area: "280 sqm",
                image: "/project-dar-masr.jpg",
                description: "Elegant penthouse featuring sophisticated design and panoramic views"
              },
              {
                name: "Wahet El Rayhan",
                location: "New Cairo, Egypt",
                type: "Compound House",
                area: "380 sqm",
                image: "/project-wahet-el-rayhan.jpg",
                description: "Contemporary compound house with modern amenities and elegant interiors"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:-translate-y-3 shadow-lg hover:shadow-2xl premium-card">
                {/* Project Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 via-card to-highlight/10 relative overflow-hidden">
                  {/* Professional Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-card/80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-3 opacity-60">🏠</div>
                      <div className="text-sm text-foreground/50 uppercase tracking-wider font-medium">Project Image</div>
                    </div>
                  </div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                      <p className="text-white/80 text-base mb-3">{project.location}</p>
                      <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                        <span>{project.type}</span>
                        <span>•</span>
                        <span>{project.area}</span>
                      </div>
                      <p className="text-white/70 text-base leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Quick Info Bar */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                  <p className="text-foreground/60">{project.type} • {project.area}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center mt-16">
            <button 
              onClick={handleProjectsClick}
              className="inline-flex items-center gap-3 px-10 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl premium-button"
            >
              View All Projects
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-highlight/10 to-accent/5"></div>
        <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-5"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-8">
            Ready to Transform Your <span className="text-accent">Space</span>?
          </h2>
          <p className="text-xl sm:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's collaborate to create an interior that reflects your personality, enhances your lifestyle, and exceeds your expectations.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <button 
              onClick={handleStartProjectClick}
              className="group w-full sm:w-auto px-12 py-5 bg-accent hover:bg-highlight text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background shadow-2xl hover:shadow-3xl premium-button"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <span className="group-hover:translate-x-1 transition-transform duration-300 text-2xl">→</span>
              </span>
            </button>
            <button 
              onClick={handleScheduleConsultationClick}
              className="w-full sm:w-auto px-12 py-5 border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold text-xl rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl premium-button"
            >
              Schedule Consultation
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-10 text-base text-foreground/60">
            <p>Free initial consultation • No commitment required • 24/7 support</p>
          </div>
        </div>
      </section>
    </main>
  )
}
