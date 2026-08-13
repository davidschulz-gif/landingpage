'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import { IconArrowLeft, IconArrowRight, IconLock, IconTag } from '@tabler/icons-react'
import { useSearchParams } from 'next/navigation'
import { apiUrl } from '@/lib/constants'
import { useIsMobile } from '@/hooks/use-mobile'
import { DesktopOnlyView } from '@/components/desktop-only-view'

import type { ComparisonProject } from '@/components/compare-with-animation-upscale'

// Dynamically load upscale interactive components for Batch 1
const KernelZoomShowcaseUpscale = dynamic(
  () =>
    import('@/components/kernel-zoom-showcase-upscale').then(
      mod => mod.KernelZoomShowcaseUpscale
    ),
  {
    ssr: false,
    loading: () => <div className='h-[400px] bg-neutral-50 dark:bg-neutral-900 animate-pulse flex items-center justify-center text-neutral-400'>Loading Zoom Showcase...</div>,
  }
)

import { UpscaleThumbnailNav } from '@/components/upscale-thumbnail-nav'

const batch1Projects: ComparisonProject[] = [
  {
    id: "batch1-proj1",
    titleDe: "Moderner Apartment-Komplex",
    titleEn: "Modern Apartment Complex",
    descDe: "Mehrfamilienhaus mit detaillierten Holz-Balkonen und Zinkblech-Bedachung.",
    descEn: "Multi-family residential building showcasing intricate timber balcony details and zinc roofing.",
    input: "/upscale-images/input/ChatGPT Image 2. Juni 2026, 10_07_17.png",
    output1: "/upscale-images/ouput/replicate-prediction-e76q9cvbynrmr0cygy4afb13fr.png",
    aspectRatio: "5936/4240",
  },
  {
    id: "batch1-proj2",
    titleDe: "Nordische Villa",
    titleEn: "Nordic Villa",
    descDe: "Elegante Wohnvilla mit natürlicher Holzfassade und präzisen Fenstersprossen.",
    descEn: "Elegant residential villa highlighting natural wood cladding and precise window mullions.",
    input: "/upscale-images/input/ChatGPT Image 2. Juni 2026, 10_19_29.png",
    output1: "/upscale-images/ouput/replicate-prediction-h71ac7x22xrmw0cygxqrehwypw.png",
    aspectRatio: "6144/4096",
  },
  {
    id: "batch1-proj3",
    titleDe: "Urbane Baulücke",
    titleEn: "Urban Infill Project",
    descDe: "Zeitgenössischer Stadtblock, integriert in ein klassisches Straßenbild mit realistischen Putzfassaden.",
    descEn: "Contemporary urban block integrated into a classic streetscape with realistic plaster facades.",
    input: "/upscale-images/input/ChatGPT Image 2. Juni 2026, 10_31_22.png",
    output1: "/upscale-images/ouput/replicate-prediction-236gt5q085rmw0cygxw8f8qbgw.png",
    aspectRatio: "6144/4096",
  },
  {
    id: "batch1-proj4",
    titleDe: "Vertikales Wohnen",
    titleEn: "Vertical Living",
    descDe: "Beeindruckende vertikale Ansicht mit Betonoberflächen, Glasgeländern und begrünten Terrassen.",
    descEn: "Stunning vertical view highlighting concrete finishes, glass railings, and leafy green terraces.",
    input: "/upscale-images/input/ChatGPT Image 2. Juni 2026, 10_36_08.png",
    output1: "/upscale-images/ouput/replicate-prediction-vrz0y04cfhrmy0cygz080gmwq4.png",
    aspectRatio: "4480/5600",
  },
  {
    id: "batch1-proj5",
    titleDe: "Glasfassaden-Turm",
    titleEn: "Glass Facade Tower",
    descDe: "Architektonisches Detail einer High-Tech-Glasfassade, die das Himmelslicht reflektiert.",
    descEn: "Architectural detail of a high-tech glass facade reflecting ambient sky light.",
    input: "/upscale-images/input/ChatGPT Image 2. Juni 2026, 10_48_13.png",
    output1: "/upscale-images/ouput/replicate-prediction-vhfc3w3vjhrmt0cygyw95xmw8m.png",
    aspectRatio: "4480/5600",
  },
  {
    id: "batch1-proj6",
    titleDe: "Minimalistischer Pavillon",
    titleEn: "Minimalist Pavilion",
    descDe: "Schlichtes, minimalistisches Design mit großen Glasscheiben, Natursteinfliesen und Stützsäulen.",
    descEn: "Clean minimalist design with large glass panels, stone floor tiling, and structural columns.",
    input: "/upscale-images/input/ChatGPT Image 2. Juni 2026, 11_13_32.png",
    output1: "/upscale-images/ouput/replicate-prediction-jqyf483s9drmy0cygz6rt8p08g.png",
    aspectRatio: "5600/4480",
  },
  {
    id: "batch1-proj7",
    titleDe: "Modernes Bürogebäude",
    titleEn: "Modernist Office",
    descDe: "Großzügiges Gewerbe- und Bürogebäude mit klarer Rasterfassade und Aluminiumpaneelen.",
    descEn: "Spacious commercial office building with clear grid facade and aluminum paneling.",
    input: "/upscale-images/input/ChatGPT Image 2. Juni 2026, 11_31_00.png",
    output1: "/upscale-images/ouput/replicate-prediction-cecmtn8qq5rmy0cygyxrndemcg.png",
    aspectRatio: "5600/4480",
  },
  {
    id: "batch1-proj8",
    titleDe: "Klinker-Stadthaus",
    titleEn: "Brickwork Townhouse",
    descDe: "Klassisches Stadthaus mit Klinkerfassade, detaillierten Mauerwerksfugen und dunklen Metallrahmen.",
    descEn: "Classic brick-clad townhouse featuring detailed masonry joints and dark metal framing.",
    input: "/upscale-images/input/ChatGPT Image 2. Juni 2026, 11_35_42.png",
    output1: "/upscale-images/ouput/replicate-prediction-rr8jrjn4hxrmy0cygys9s3ykfg.png",
    aspectRatio: "4256/5904",
  },
  {
    id: "batch1-proj9",
    titleDe: "Vorstadt-Villa",
    titleEn: "Suburban Villa",
    descDe: "Modernes Einfamilienhaus in der Vorstadt mit Putzwänden, Holzverkleidung und angelegtem Garten.",
    descEn: "Modern family home in the suburbs showing stucco walls, wood siding, and landscaped garden.",
    input: "/upscale-images/input/ChatGPT Image 29. Mai 2026, 09_51_31.png",
    output1: "/upscale-images/ouput/replicate-prediction-hywt9y7ak1rmt0cygy18vd0dq8.png",
    aspectRatio: "5248/4800",
  },
  {
    id: "batch1-proj10",
    titleDe: "Modernes Architekturdetail",
    titleEn: "Modern Architectural Precision",
    descDe: "Modernes Architekturdetail",
    descEn: "Modern Architectural Precision",
    input: "/upscale-3/input/architectural-modern-architectural-precision.jpg",
    output1: "/upscale-3/output/architectural-modern-architectural-precision.jpg",
    aspectRatio: "5936/4240",
  },
  {
    id: "batch1-proj11",
    titleDe: "Kommerzielle Umnutzung",
    titleEn: "Commercial Adaptive Reuse",
    descDe: "Kommerzielle Umnutzung",
    descEn: "Commercial Adaptive Reuse",
    input: "/upscale-3/input/commercial-adaptive-reuse.jpg",
    output1: "/upscale-3/output/commercial-adaptive-reuse.jpg",
    aspectRatio: "6144/4096",
  },
  {
    id: "batch1-proj12",
    titleDe: "Industrielle Architektur",
    titleEn: "Robust Industrial Architecture",
    descDe: "Industrielle Architektur",
    descEn: "Robust Industrial Architecture",
    input: "/upscale-3/input/industrial--robust-industrial-architecture.jpg",
    output1: "/upscale-3/output/industrial--robust-industrial-architecture.jpg",
    aspectRatio: "6144/4096",
  },
  {
    id: "batch1-proj13",
    titleDe: "Familien-Wohnzimmer",
    titleEn: "Family Living Room",
    descDe: "Familien-Wohnzimmer",
    descEn: "Family Living Room",
    input: "/upscale-3/input/interior-family-living-room.jpg",
    output1: "/upscale-3/output/interior-family-living-room.jpg",
    aspectRatio: "4480/5600",
  },
  {
    id: "batch1-proj14",
    titleDe: "Maximalistische Küche",
    titleEn: "Maximalist Kitchen",
    descDe: "Maximalistische Küche",
    descEn: "Maximalist Kitchen",
    input: "/upscale-3/input/interior-maximalist-kitchen.jpg",
    output1: "/upscale-3/output/interior-maximalist-kitchen.jpg",
    aspectRatio: "4480/5600",
  },
  {
    id: "batch1-proj15",
    titleDe: "Erhöhter Gartenweg",
    titleEn: "Elevated Garden Walkway",
    descDe: "Erhöhter Gartenweg",
    descEn: "Elevated Garden Walkway",
    input: "/upscale-3/input/landscape-elevated-garden-walkway.jpg",
    output1: "/upscale-3/output/landscape-elevated-garden-walkway.jpg",
    aspectRatio: "5600/4480",
  },
  {
    id: "batch1-proj16",
    titleDe: "Küstenpavillon",
    titleEn: "Coastal Pavilion",
    descDe: "Küstenpavillon",
    descEn: "Coastal Pavilion",
    input: "/upscale-3/input/public-coastal-pavilion.jpg",
    output1: "/upscale-3/output/public-coastal-pavilion.jpg",
    aspectRatio: "5600/4480",
  },
  {
    id: "batch1-proj17",
    titleDe: "Betonpavillon",
    titleEn: "Concrete Pavilion",
    descDe: "Betonpavillon",
    descEn: "Concrete Pavilion",
    input: "/upscale-3/input/residential-concrete-pavilion.jpg",
    output1: "/upscale-3/output/residential-concrete-pavilion.jpg",
    aspectRatio: "4256/5904",
  },
  {
    id: "batch1-proj18",
    titleDe: "Stampflehm-Villa",
    titleEn: "Rammed Earth Villa",
    descDe: "Stampflehm-Villa",
    descEn: "Rammed Earth Villa",
    input: "/upscale-3/input/residential-rammed-earth-villa.jpg",
    output1: "/upscale-3/output/residential-rammed-earth-villa.jpg",
    aspectRatio: "5248/4800",
  },
  {
    id: "batch1-proj19",
    titleDe: "Kulturzentrum am Wasser",
    titleEn: "Waterfront Cultural Centre",
    descDe: "Kulturzentrum am Wasser",
    descEn: "Waterfront Cultural Centre",
    input: "/upscale-3/input/waterfront-cultural-centre.jpg",
    output1: "/upscale-3/output/waterfront-cultural-centre.jpg",
    aspectRatio: "5248/4800",
  }
]


function Upscale1Content() {
  const locale = useLocale()
  const [isClient, setIsClient] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className='relative w-full bg-[#fcfcfd] dark:bg-neutral-950 min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-black selection:text-white'>
      <div>
        <NavbarDemo />

        {isClient && isMobile ? (
          <DesktopOnlyView />
        ) : (
          <>
            {/* Hero Section */}
            <div className="pt-32 pb-8 px-4 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-6 text-left"
              >
                {/* Header Navigation */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span>{locale === 'de' ? 'KAPITEL 1 • INTERAKTIV' : 'CHAPTER 1 • INTERACTIVE'}</span>
                  </div>
                  
                  <div className="flex gap-2">
                  
                    <Link
                      href={`/${locale}/pricing`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full text-[11px] font-bold tracking-wider uppercase shadow-sm transition-all duration-300 cursor-pointer active:scale-95"
                    >
                      <IconTag size={14} />
                      <span>{locale === 'de' ? 'Preise' : 'Pricing'}</span>
                    </Link>
                    
                    <Link
                      href={`/${locale}/upscale-privacy/upscale-2`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-sm transition-all duration-300 cursor-pointer active:scale-95"
                    >
                      
                      <span>{locale === 'de' ?  "mehr ansehen" : "see more"}</span>
                   
                      <IconArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-[46px] font-normal text-black dark:text-white tracking-tight leading-[1.05]" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                  {locale === 'de' 
                    ? 'Interaktive Bildschau' 
                    : 'INTERACTIVE DETAIL ZOOM'}
                </h1>
                {/* Second Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-black dark:text-white tracking-tight leading-relaxed" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                  {locale === 'de' 
                    ? 'Das Zoomfenster zeigt das mit dem Hochskalierer mit nur einem Klick auf TYPUS aufpolierte 8000 Pixel Ergebnis mit hoher, druckfertiger Detailtiefe.  Als Ausgangsbild (hier ausserhalb des Zoomfensters zu sehen) wurde ein mit Chat GPT Image2 generiertes 2.000 Pixel Bild verwendet.' 
                    : 'The zoom window shows the 8000-pixel result, enhanced with a single click on TYPUS using the upscaler, resulting in high, print-ready detail. The original image (visible here outside the zoom window) was a 2000-pixel image generated with Chat GPT Image2.'}
                </h1>

                {/* Sub-text details */}
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-normal max-w-3xl leading-relaxed">
                  {locale === 'de'
                    ? 'Bewegen Sie Ihren Mauszeiger über die Bilder (oder tippen und halten Sie auf Touch-Geräten), um die 8K Texturverfeinerung live zu untersuchen.'
                    : 'Hover your cursor over the images (or tap and hold on touch devices) to analyze the photorealistic 8K texture refinements live.'}
                </p>
              </motion.div>
            </div>

            {/* Zoom Showcase Container */}
            <div className="w-full bg-[#fcfcfd] dark:bg-neutral-950/20 py-4 border-t border-b border-neutral-100 dark:border-neutral-900">
              {isClient && <KernelZoomShowcaseUpscale />}
            </div>

            {/* Thumbnails to access sliders */}
            <div className="w-full bg-[#fcfcfd] dark:bg-neutral-950/20 py-8 border-b border-neutral-100 dark:border-neutral-900">
              <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                  {locale === 'de' ? 'WEITERE BEISPIELE ANSEHEN' : 'EXPLORE MORE EXAMPLES'}
                </p>
                <UpscaleThumbnailNav
                  basePath="/upscale-privacy/upscale-1"
                  projects={batch1Projects}
                  zoomThumbnailImage={batch1Projects[0].output1}
                />
              </div>
            </div>

            {/* Bottom Banner navigation */}
            <div className="py-16 px-4 max-w-5xl mx-auto text-center">
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mb-6 uppercase tracking-wider font-mono">
                {locale === 'de' ? 'Bereit für die nächste Galerie?' : 'Ready to explore more renderings?'}
              </p>
              <div className="max-w-xl mx-auto mb-8">
                <div className="text-left bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-[32px] p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  
                 

                  {/* Image Container */}
                  <div className="relative w-full aspect-[16/10] bg-neutral-100 dark:bg-neutral-950 overflow-hidden rounded-2xl border border-neutral-100 dark:border-neutral-900/60 mb-6">
                    <img
                      src="/upscale-images copy/input/image-7.png"
                      alt="Batch 2 preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Buttons Row */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      href={`/${locale}/upscale-privacy/upscale-2`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto flex-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
                      style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                    >
                      <span>{locale === 'de' ? 'Mehr Beispiele sehen' : 'See more examples'}</span>
                      <IconArrowRight size={14} />
                    </Link>

                    <Link
                      href={`/${locale}/pricing`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900/60 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto flex-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
                      style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                    >
                      <IconTag size={14} />
                      <span>{locale === 'de' ? 'Preise ansehen' : 'View Pricing'}</span>
                    </Link>
                  </div>
                </div>
              </div>

              
            </div>
          </>
        )}
      </div>

      <FooterSection />
    </div>
  )
}

export default function Upscale1Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#fcfcfd] dark:bg-neutral-950 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black dark:border-white"></div>
      </div>
    }>
      <Upscale1Content />
    </Suspense>
  )
}
