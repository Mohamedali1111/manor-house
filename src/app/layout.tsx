import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeToggle } from '@/components/ThemeToggle'
import { PerformanceMonitor } from '@/components/PerformanceMonitor'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Manor House - Premium Interior Design',
  description: 'Creating timeless spaces that inspire and delight. Award-winning interior design services with over 15 years of experience.',
  keywords: 'interior design, luxury interiors, space planning, consultation, New York',
  authors: [{ name: 'Manor House Interior Design' }],
  creator: 'Manor House Interior Design',
  publisher: 'Manor House Interior Design',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://manorhouse.com'),
  openGraph: {
    title: 'Manor House - Premium Interior Design',
    description: 'Creating timeless spaces that inspire and delight. Award-winning interior design services.',
    url: 'https://manorhouse.com',
    siteName: 'Manor House Interior Design',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Manor House Interior Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manor House - Premium Interior Design',
    description: 'Creating timeless spaces that inspire and delight. Award-winning interior design services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <ThemeToggle />
        <PerformanceMonitor />
      </body>
    </html>
  )
}
