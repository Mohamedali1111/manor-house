'use client'

import { memo, ReactNode } from 'react'

interface PremiumButtonProps {
  children: ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export const PremiumButton = memo(function PremiumButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}: PremiumButtonProps) {
  const baseClasses = "group relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed premium-button border-glow"
  
  const sizeClasses = {
    sm: "px-6 py-3 text-sm font-semibold rounded-lg",
    md: "px-8 py-4 text-base font-semibold rounded-xl",
    lg: "px-12 py-5 text-lg font-bold rounded-xl"
  }
  
  const variantClasses = {
    primary: "bg-accent hover:bg-highlight text-white shadow-2xl hover:shadow-3xl focus:ring-accent/30 focus:ring-offset-background transform hover:scale-105 hover:-translate-y-1",
    secondary: "glass-premium border-2 border-white/30 text-white hover:bg-white/20 shadow-2xl hover:shadow-3xl focus:ring-white/30 focus:ring-offset-background transform hover:scale-105 hover:-translate-y-1",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white shadow-lg hover:shadow-xl focus:ring-accent/30 focus:ring-offset-background hover:scale-105 hover:-translate-y-1"
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
      
      {/* Enhanced Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Premium Border Glow */}
      <div className="absolute inset-0 rounded-inherit border border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  )
})
