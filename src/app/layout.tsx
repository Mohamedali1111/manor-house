import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SkipLink } from '@/components/layout/SkipLink'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fafafa',
}

export const metadata: Metadata = {
  title: 'Manor House - Premium Interior Design',
  description:
    'Luxury interior design in Egypt — Cairo, Alexandria, and New Cairo. Timeless spaces, supervised execution, and specification-grade materials.',
  keywords:
    'interior design Egypt, luxury interiors Cairo, Sheikh Zayed interior design, New Cairo, Alexandria, space planning, consultation, Manor House',
  authors: [{ name: 'Manor House Interior Design' }],
  creator: 'Manor House Interior Design',
  publisher: 'Manor House Interior Design',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://manorhouse.co.eg'),
  openGraph: {
    title: 'Manor House - Premium Interior Design',
    description:
      'Luxury interior design in Egypt — Cairo, Alexandria, and New Cairo. Timeless spaces, supervised execution, and specification-grade materials.',
    url: 'https://manorhouse.co.eg',
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
    description:
      'Luxury interior design in Egypt — Cairo, Alexandria, and New Cairo. Timeless spaces and disciplined execution.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${poppins.className} antialiased bg-background text-foreground`}>
        <SkipLink />
        <Navbar />
        <main id="main-content" className="min-h-screen pt-14 sm:pt-16" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
