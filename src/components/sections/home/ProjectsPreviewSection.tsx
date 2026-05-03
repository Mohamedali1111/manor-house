'use client'

import { useRouter } from 'next/navigation'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { projects } from '@/data/projects'

export function ProjectsPreviewSection() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden bg-background px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-highlight/3" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-highlight/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-highlight/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 premium-badge">
            <span className="text-xs font-semibold text-accent">Portfolio</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Featured <span className="gradient-text-gold">projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-foreground/70 sm:text-base">
            Delivered residences across Egypt — open a project for full scope, specs, and gallery.
          </p>
        </div>
        
        {/* Enhanced Projects Grid */}
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <div 
              key={project.id}
              className="group hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard
                projectId={project.id}
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
          <PremiumButton onClick={() => router.push('/portfolio')} variant="outline" size="md" className="border-glow">
            View all projects
          </PremiumButton>
        </div>
      </div>
    </section>
  )
}
