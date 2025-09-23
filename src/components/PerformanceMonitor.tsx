'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime)
        }
        if (entry.entryType === 'first-input-delay') {
          const fidEntry = entry as PerformanceEventTiming
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
        }
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { value: number }
          console.log('CLS:', clsEntry.value)
        }
      }
    })

    // Observe performance entries
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay', 'layout-shift'] })

    // Monitor navigation timing
    if ('navigation' in performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart)
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)
      }
    }

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming
          if (resource.duration > 1000) { // Log slow resources (>1s)
            console.warn('Slow Resource:', resource.name, resource.duration)
          }
        }
      }
    })

    resourceObserver.observe({ entryTypes: ['resource'] })

    // Cleanup
    return () => {
      observer.disconnect()
      resourceObserver.disconnect()
    }
  }, [])

  return null // This component doesn't render anything
}
