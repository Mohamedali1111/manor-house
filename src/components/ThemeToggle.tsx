'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false) // Default to light mode
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage for saved preference, default to light mode
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      setIsDark(true)
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2.5 rounded-full bg-card hover:bg-accent/20 transition-all duration-300 text-foreground shadow-lg border border-border/50 hover:border-accent/30 z-50 hover:scale-110 transform"
      aria-label="Toggle theme"
      style={{ cursor: 'pointer' }}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-accent" />
      ) : (
        <Moon className="w-4 h-4 text-accent" />
      )}
    </button>
  )
}
