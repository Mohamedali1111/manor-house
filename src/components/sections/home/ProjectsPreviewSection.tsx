'use client'

import { useRouter } from 'next/navigation'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { projects } from '@/data/projects'

export function ProjectsPreviewSection() {
  const router = useRouter()

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-highlight/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full mb-4 sm:mb-6 premium-badge">
            <span className="text-accent text-xs sm:text-sm font-semibold hover-text-enhance">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 hover-text-enhance">
            Featured <span className="gradient-text-gold">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed hover-text-enhance">
            See how we transform spaces into extraordinary experiences
          </p>
        </div>
        
        {/* Projects Grid - Only 3 featured projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.name}
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
        
        {/* View All Button */}
        <div className="text-center mt-8">
          <PremiumButton
            onClick={() => router.push('/portfolio')}
            variant="outline"
            size="md"
            className="border-glow"
          >
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform duration-300 text-base sm:text-lg">→</span>
          </PremiumButton>
        </div>
      </div>
    </section>
  )
}
