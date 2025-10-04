import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Source_Serif_4, Space_Grotesk } from 'next/font/google'
import type React from 'react'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif-4',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://typus.ai'),
  title: {
    default:
      'Typus AI - AI-Powered Architectural Visualization & Design Platform',
    template: '%s | Typus AI',
  },
  description:
    'Transform your architectural designs with AI. Typus AI preserves structure while creating photorealistic visualizations from CAD files, sketches, and 3D models. Professional AI rendering for architects.',
  keywords: [
    'AI architecture',
    'architectural visualization',
    'CAD to render',
    'AI design',
    'building visualization',
    'architectural rendering',
    'AI powered design',
    'photorealistic rendering',
    '3D visualization',
    'architectural AI',
    'design automation',
    'building design AI',
  ],
  authors: [{ name: 'Typus AI', url: 'https://typus.ai' }],
  creator: 'Typus AI',
  publisher: 'Typus AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/logo/typus_logo_red_transp.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/logo/typus_logo_red_transp.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/logo/typus_logo_red_transp.png',
    apple: [
      {
        url: '/logo/typus_logo_red_transp.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typus.ai',
    siteName: 'Typus AI',
    title:
      'Typus AI - AI-Powered Architectural Visualization & Design Platform',
    description:
      'Transform your architectural designs with AI. Create photorealistic visualizations from CAD files, sketches, and 3D models while preserving structural integrity.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Typus AI - AI-Powered Architectural Visualization',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TypusAI',
    creator: '@TypusAI',
    title: 'Typus AI - AI-Powered Architectural Visualization',
    description:
      'Transform your architectural designs with AI. Create photorealistic visualizations from CAD files and sketches.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://typus.ai',
  },
  category: 'Technology',
  classification: 'AI Software',
  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${spaceGrotesk.variable} ${sourceSerif4.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='dns-prefetch' href='https://app.typus.ai' />
        <link
          rel='preload'
          href='/hero-parallax-images/row-1-2-3/commercial building.png'
          as='image'
        />
        <link rel='preload' href='/logo/typus_logo_red_transp.png' as='image' />
        <meta name='theme-color' content='#ff3636' />
        <meta name='msapplication-TileColor' content='#ff3636' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
      </head>
      <body className='bg-[#f0f0f0] text-gray-900 transition-colors duration-300'>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
