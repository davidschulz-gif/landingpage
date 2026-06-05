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

const CompareWithAnimationUpscale = dynamic(
  () =>
    import('@/components/compare-with-animation-upscale').then(
      mod => mod.CompareWithAnimationUpscale
    ),
  {
    ssr: false,
    loading: () => <div className='h-[400px] bg-neutral-50 dark:bg-neutral-900 animate-pulse flex items-center justify-center text-neutral-400'>Loading Comparison Slider...</div>,
  }
)

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
  }
]


function Upscale1SlidersContent() {
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
            <div className="pt-24 pb-8" />
            {/* Comparison Slider Showcase */}
            <div className="w-full bg-[#fcfcfd] dark:bg-neutral-950/20 py-16 border-b border-neutral-100 dark:border-neutral-900">
              <div className="w-full max-w-[90%] md:max-w-[70%] mx-auto overflow-x-hidden">
                {isClient && <CompareWithAnimationUpscale projects={batch1Projects} basePath={`/${locale}/upscale-privacy/upscale-1`} />}
              </div>
            </div>

            {/* Bottom Banner navigation */}
            <div className="py-16 px-4 max-w-5xl mx-auto text-center">
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mb-6 uppercase tracking-wider font-mono">
                {locale === 'de' ? 'Bereit für die nächste Galerie?' : 'Ready to explore more renderings?'}
              </p>
              <div className="max-w-xl mx-auto mb-8">
                <div className="text-left bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-[32px] p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-full aspect-[16/10] bg-neutral-100 dark:bg-neutral-950 overflow-hidden rounded-2xl border border-neutral-100 dark:border-neutral-900/60 mb-6">
                    <img
                      src="/upscale-images copy/input/image-7.png"
                      alt="Batch 2 preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
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

export default function Upscale1SlidersPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#fcfcfd] dark:bg-neutral-950 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black dark:border-white"></div>
      </div>
    }>
      <Upscale1SlidersContent />
    </Suspense>
  )
}
