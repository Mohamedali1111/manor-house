import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeToggle } from '@/components/ThemeToggle'
import { PerformanceMonitor } from '@/components/PerformanceMonitor'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Manor House - Premium Interior Design',
  description: 'Award-winning interior design services with premium quality and exceptional craftsmanship. Transform your space with Manor House Interior Design.',
  keywords: 'interior design, luxury interior, premium design, space planning, electrical plumbing, consultation',
  authors: [{ name: 'Manor House Interior Design' }],
  openGraph: {
    title: 'Manor House - Premium Interior Design',
    description: 'Award-winning interior design services with premium quality and exceptional craftsmanship.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <PerformanceMonitor />
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
