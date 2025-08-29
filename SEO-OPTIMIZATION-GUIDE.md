# SEO Optimization Guide for Typus AI NextJS Application

## 🎯 SEO Overview

This guide provides comprehensive SEO optimization strategies for the Typus AI landing page to achieve maximum search engine visibility and performance.

## 📊 Core Web Vitals Requirements

### Performance Targets
- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **First Input Delay (FID)**: < 100 milliseconds
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Contentful Paint (FCP)**: < 1.8 seconds
- **Time to Interactive (TTI)**: < 3.8 seconds

## 🖼️ Image Optimization Requirements

### Image Size Guidelines

#### Hero Images
```typescript
// Hero background images
- Format: WebP (primary), JPEG (fallback)
- Dimensions: 1920x1080px (16:9 ratio)
- File size: < 200KB (WebP), < 300KB (JPEG)
- Quality: 85-90%

// Hero product images
- Format: WebP (primary), PNG (fallback)
- Dimensions: 800x600px to 1200x900px
- File size: < 150KB (WebP), < 250KB (PNG)
- Quality: 90-95%
```

#### Feature Section Images
```typescript
// Feature icons/illustrations
- Format: SVG (preferred), WebP (alternative)
- Dimensions: 64x64px to 128x128px (icons)
- Dimensions: 400x300px to 600x450px (illustrations)
- File size: < 50KB (SVG), < 100KB (WebP)

// Feature showcase images
- Format: WebP (primary), JPEG (fallback)
- Dimensions: 600x400px to 900x600px
- File size: < 120KB (WebP), < 180KB (JPEG)
- Quality: 85%
```

#### Logo and Branding
```typescript
// Company logo
- Format: SVG (primary), PNG (fallback)
- Dimensions: 200x60px (standard), 400x120px (retina)
- File size: < 20KB (SVG), < 50KB (PNG)

// Favicon
- Format: ICO, PNG
- Dimensions: 16x16, 32x32, 48x48, 64x64px
- File size: < 10KB each
```

#### Testimonial/Team Images
```typescript
// Profile pictures
- Format: WebP (primary), JPEG (fallback)
- Dimensions: 200x200px to 400x400px (square)
- File size: < 80KB (WebP), < 120KB (JPEG)
- Quality: 90%
```

#### Open Graph Images
```typescript
// Social media sharing
- Format: JPEG, PNG
- Dimensions: 1200x630px (Facebook/LinkedIn)
- Dimensions: 1200x600px (Twitter)
- File size: < 300KB
- Quality: 90%
```

## 🎥 Video Optimization Requirements

### Video Size Guidelines

#### Hero Video
```typescript
// Main hero video
- Format: MP4 (H.264), WebM (VP9)
- Resolution: 1920x1080px (Full HD)
- Duration: 15-30 seconds (hero), 60-120 seconds (demo)
- File size: < 5MB (hero), < 15MB (demo)
- Bitrate: 2-4 Mbps
- Frame rate: 30fps
- Audio: AAC, 128kbps (if needed)
```

#### Feature Demo Videos
```typescript
// Product demonstration videos
- Format: MP4 (H.264), WebM (VP9)
- Resolution: 1280x720px (HD) or 1920x1080px (Full HD)
- Duration: 30-90 seconds
- File size: < 10MB
- Bitrate: 1.5-3 Mbps
- Frame rate: 30fps
```

#### Background Videos
```typescript
// Ambient/background videos
- Format: MP4 (H.264)
- Resolution: 1920x1080px
- Duration: 10-20 seconds (looped)
- File size: < 3MB
- Bitrate: 1-2 Mbps
- Frame rate: 24-30fps
- No audio required
```

#### Mobile Video Optimization
```typescript
// Mobile-specific videos
- Format: MP4 (H.264)
- Resolution: 720x1280px (portrait) or 1280x720px (landscape)
- Duration: 15-30 seconds
- File size: < 2MB
- Bitrate: 1-1.5 Mbps
- Frame rate: 30fps
```

## 🔧 NextJS SEO Implementation

### 1. Metadata Configuration

```typescript
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Typus AI - Advanced AI-Powered Design Platform',
    template: '%s | Typus AI'
  },
  description: 'Transform your creative workflow with Typus AI\'s cutting-edge artificial intelligence platform. Create stunning designs, automate workflows, and boost productivity with our advanced AI tools.',
  keywords: [
    'AI design platform',
    'artificial intelligence',
    'design automation',
    'creative AI tools',
    'AI-powered design',
    'machine learning design',
    'automated design workflow',
    'AI graphics generator',
    'intelligent design assistant',
    'creative automation'
  ],
  authors: [{ name: 'Typus AI Team' }],
  creator: 'Typus AI',
  publisher: 'Typus AI',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typus.ai',
    siteName: 'Typus AI',
    title: 'Typus AI - Advanced AI-Powered Design Platform',
    description: 'Transform your creative workflow with cutting-edge AI technology. Create, automate, and innovate with Typus AI.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Typus AI - AI-Powered Design Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Typus AI - Advanced AI-Powered Design Platform',
    description: 'Transform your creative workflow with cutting-edge AI technology.',
    images: ['/images/twitter-image.jpg'],
    creator: '@typusai',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://typus.ai',
  },
}
```

### 2. Structured Data (JSON-LD)

```typescript
// components/structured-data.tsx
export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Typus AI",
    "url": "https://typus.ai",
    "logo": "https://typus.ai/images/logo.svg",
    "description": "Advanced AI-powered design platform for creative professionals",
    "foundingDate": "2023",
    "sameAs": [
      "https://twitter.com/typusai",
      "https://linkedin.com/company/typusai",
      "https://github.com/typusai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Typus AI Platform",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  )
}
```

### 3. Optimized Image Component

```typescript
// components/optimized-image.tsx
import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  sizes?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoad={() => setIsLoading(false)}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </div>
  )
}
```

### 4. Video SEO Component

```typescript
// components/seo-video.tsx
interface SEOVideoProps {
  src: string
  poster: string
  title: string
  description: string
  duration?: string
  uploadDate?: string
}

export function SEOVideo({
  src,
  poster,
  title,
  description,
  duration,
  uploadDate
}: SEOVideoProps) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": poster,
    "contentUrl": src,
    "duration": duration,
    "uploadDate": uploadDate,
    "embedUrl": src
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <video
        className="w-full h-auto"
        poster={poster}
        preload="metadata"
        aria-label={title}
        title={title}
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" src="/captions.vtt" srcLang="en" label="English" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}
```

## 🚀 Performance Optimization

### 1. Next.js Configuration

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['typus.ai', 'cdn.typus.ai'],
    minimumCacheTTL: 31536000, // 1 year
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/videos/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### 2. Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://typus.ai',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://typus.ai/features',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://typus.ai/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://typus.ai/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://typus.ai/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
```

### 3. Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: 'https://typus.ai/sitemap.xml',
  }
}
```

## 📱 Mobile SEO Optimization

### Responsive Images
```typescript
// Use responsive images with proper sizes
<Image
  src="/hero-image.jpg"
  alt="Typus AI Platform Interface"
  width={1920}
  height={1080}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  priority
/>
```

### Viewport Configuration
```typescript
// app/layout.tsx
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}
```

## 🔍 Content SEO Guidelines

### Heading Structure
```typescript
// Proper heading hierarchy
<h1>Typus AI - Advanced AI-Powered Design Platform</h1>
<h2>Transform Your Creative Workflow</h2>
<h3>Key Features</h3>
<h4>AI-Powered Design Tools</h4>
```

### Alt Text Best Practices
```typescript
// Descriptive alt text
<Image
  src="/ai-design-interface.jpg"
  alt="Typus AI design interface showing AI-generated artwork with editing tools and color palette"
  width={800}
  height={600}
/>

// Decorative images
<Image
  src="/background-pattern.svg"
  alt=""
  width={100}
  height={100}
  role="presentation"
/>
```

### Internal Linking
```typescript
// Strategic internal linking
<Link href="/features" className="text-blue-600 hover:underline">
  Explore our AI-powered design features
</Link>

<Link href="/pricing" className="btn-primary">
  View pricing plans
</Link>
```

## 📊 Analytics & Monitoring

### Google Analytics 4
```typescript
// lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
```

### Core Web Vitals Monitoring
```typescript
// lib/web-vitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

function sendToAnalytics(metric: any) {
  window.gtag('event', metric.name, {
    event_category: 'Web Vitals',
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    non_interaction: true,
  })
}

getCLS(sendToAnalytics)
getFID(sendToAnalytics)
getFCP(sendToAnalytics)
getLCP(sendToAnalytics)
getTTFB(sendToAnalytics)
```

## 🎯 SEO Checklist

### Technical SEO
- ✅ **SSL Certificate** (HTTPS)
- ✅ **Mobile-responsive** design
- ✅ **Fast loading** times (< 3 seconds)
- ✅ **Clean URL** structure
- ✅ **XML sitemap** generated
- ✅ **Robots.txt** configured
- ✅ **Structured data** implemented
- ✅ **Meta tags** optimized
- ✅ **Image optimization** (WebP, proper sizes)
- ✅ **Video optimization** (compressed, multiple formats)

### Content SEO
- ✅ **Unique title** tags (50-60 characters)
- ✅ **Meta descriptions** (150-160 characters)
- ✅ **H1-H6 hierarchy** properly structured
- ✅ **Alt text** for all images
- ✅ **Internal linking** strategy
- ✅ **Keyword optimization** (natural placement)
- ✅ **Content quality** (original, valuable)
- ✅ **Page loading** speed optimized

### Local SEO (if applicable)
- ✅ **Google My Business** profile
- ✅ **Local schema** markup
- ✅ **NAP consistency** (Name, Address, Phone)
- ✅ **Local keywords** targeting

## 🛠️ SEO Tools & Testing

### Essential Tools
- **Google Search Console** - Monitor search performance
- **Google PageSpeed Insights** - Test page speed
- **GTmetrix** - Performance analysis
- **Screaming Frog** - Technical SEO audit
- **Ahrefs/SEMrush** - Keyword research
- **Google Analytics 4** - Traffic analysis

### Testing Commands
```bash
# Lighthouse audit
bun run lighthouse

# Bundle analyzer
bun run analyze

# Performance testing
bun run test:performance
```

## 📈 Monitoring & Maintenance

### Monthly SEO Tasks
1. **Monitor Core Web Vitals** in Google Search Console
2. **Check for crawl errors** and fix them
3. **Update content** with fresh information
4. **Optimize images** and videos for better performance
5. **Review and update** meta descriptions
6. **Monitor keyword rankings** and adjust strategy
7. **Check internal/external links** for broken links
8. **Update structured data** as needed

### Performance Monitoring
```typescript
// Set up performance monitoring
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'largest-contentful-paint') {
      console.log('LCP:', entry.startTime)
    }
  }
})

observer.observe({ entryTypes: ['largest-contentful-paint'] })
```

---

**Remember**: SEO is an ongoing process. Regularly monitor your site's performance, update content, and adapt to search engine algorithm changes for optimal results.