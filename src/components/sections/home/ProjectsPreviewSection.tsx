'use client'

import { useRouter } from 'next/navigation'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { projects } from '@/data/projects'

export function ProjectsPreviewSection() {
  const router = useRouter()

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-highlight/3"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-highlight/5"></div>
      <div className="absolute inset-0 bg-[url('/subtle-light-pattern.png')] opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-highlight/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-6 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 premium-badge">
            <span className="text-accent text-sm font-semibold hover-text-enhance">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 sm:mb-8 leading-tight tracking-tight hover-text-enhance">
            Featured <span className="gradient-text-gold">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light hover-text-enhance">
            See how we transform spaces into extraordinary experiences that inspire and delight
          </p>
        </div>
        
        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 mb-16">
          {projects.slice(0, 3).map((project, index) => (
            <div 
              key={project.name}
              className="group hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard
                name={project.name}
                location={project.location}
                type={project.type}
                area={project.area}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                description={project.description}
              />
            </div>
          ))}
        </div>
        
        {/* Enhanced View All Button */}
        <div className="text-center">
          <PremiumButton
            onClick={() => router.push('/portfolio')}
            variant="outline"
            size="lg"
            className="border-glow group"
          >
            <span className="flex items-center gap-3">
              View All Projects
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg sm:text-xl">→</span>
            </span>
          </PremiumButton>
        </div>
        
        {/* Additional Premium Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-foreground/60 text-sm">
            <div className="w-1 h-1 bg-accent rounded-full"></div>
            <span>Discover more stunning transformations in our full portfolio</span>
            <div className="w-1 h-1 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
