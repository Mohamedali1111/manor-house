'use client'

import { memo, ReactNode } from 'react'

interface PremiumButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export const PremiumButton = memo(function PremiumButton({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}: PremiumButtonProps) {
  const baseClasses = "group relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed btn-enhanced border-glow"
  
  const sizeClasses = {
    sm: "px-4 py-2.5 text-sm font-semibold rounded-lg",
    md: "px-6 py-3 text-sm font-semibold rounded-xl sm:px-7 sm:py-3.5 sm:text-base",
    lg: "px-7 py-3.5 text-base font-bold rounded-xl sm:px-9 sm:py-4 sm:text-lg",
  }
  
  const variantClasses = {
    primary: "bg-accent hover:bg-highlight text-white shadow-lg hover:shadow-xl focus:ring-accent/30 focus:ring-offset-background sm:hover:-translate-y-0.5 sm:transform sm:hover:scale-[1.02]",
    secondary: "glass-premium border-2 border-white/30 text-white hover:bg-white/20 shadow-2xl hover:shadow-3xl focus:ring-white/30 focus:ring-offset-background transform hover:scale-105 hover:-translate-y-1",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white shadow-md hover:shadow-lg focus:ring-accent/30 focus:ring-offset-background sm:hover:-translate-y-0.5 sm:transform sm:hover:scale-[1.02]",
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      <span className="relative z-10 flex items-center gap-3 hover-text-enhance">
        {children}
      </span>
      
      {/* Enhanced Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Premium Border Glow */}
      <div className="absolute inset-0 rounded-inherit border border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Enhanced Hover State */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit"></div>
    </button>
  )
})
