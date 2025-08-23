'use client'

import { Hero } from '@/components/Hero'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
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

      {/* Our Services Preview - Enhanced Premium Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-card via-muted to-background relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-highlight/3"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 premium-badge">
              <span className="text-accent text-sm font-semibold hover-text-enhance">Our Expertise</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 hover-text-enhance">
              Our <span className="gradient-text-gold">Services</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed hover-text-enhance">
              Comprehensive interior design solutions tailored to your unique vision and lifestyle
            </p>
          </div>
          
          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects - Enhanced Premium Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-background relative">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-highlight/5"></div>
        <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-3"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 premium-badge">
              <span className="text-accent text-sm font-semibold hover-text-enhance">Portfolio</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 hover-text-enhance">
              Featured <span className="gradient-text-gold">Projects</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed hover-text-enhance">
              Discover our latest interior design transformations that showcase innovation and excellence
            </p>
          </div>
          
          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                location={project.location}
                type={project.type}
                area={project.area}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                description={project.description}
              />
            ))}
          </div>
          
          {/* Enhanced View All Projects Button */}
          <div className="text-center mt-16">
            <PremiumButton
              onClick={handleProjectsClick}
              variant="outline"
              size="md"
              className="border-glow"
            >
              View All Projects
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
            </PremiumButton>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action - Premium Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-highlight/15 to-accent/8"></div>
        <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-8"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-highlight/5"></div>
        
        {/* Premium Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8 premium-badge">
            <span className="text-accent text-sm font-semibold hover-text-enhance">Get Started</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-8 hover-text-enhance">
            Ready to Transform Your <span className="gradient-text-gold">Space</span>?
          </h2>
          <p className="text-xl sm:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed hover-text-enhance">
            Let's collaborate to create an interior that reflects your personality, enhances your lifestyle, and exceeds your expectations.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <PremiumButton
              onClick={handleStartProjectClick}
              size="lg"
              className="border-glow"
            >
              Start Your Project
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-2xl">→</span>
            </PremiumButton>
            <PremiumButton
              onClick={handleScheduleConsultationClick}
              variant="outline"
              size="lg"
              className="border-glow"
            >
              Schedule Consultation
            </PremiumButton>
          </div>
          
          {/* Enhanced Additional Info */}
          <div className="mt-10 p-6 glass-premium rounded-2xl border border-accent/20">
            <div className="flex flex-wrap justify-center items-center gap-6 text-base text-foreground/70">
              <span className="flex items-center gap-2 hover-text-enhance">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Free initial consultation
              </span>
              <span className="flex items-center gap-2 hover-text-enhance">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                No commitment required
              </span>
              <span className="flex items-center gap-2 hover-text-enhance">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                24/7 support
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
