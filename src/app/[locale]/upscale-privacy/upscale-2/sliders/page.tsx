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

const batch2Projects: ComparisonProject[] = [
  {
    id: "batch2-proj1",
    titleDe: "3D-Modell (Standard)",
    titleEn: "3D Model (Standard)",
    descDe: "Präzises 3D-Architekturmodell mit realistischer Lichtstimmung und klaren Strukturen.",
    descEn: "Precise 3D architectural model with realistic lighting and clear structural definitions.",
    input: "/upscale-images copy/input/image-7.png",
    output1: "/upscale-images copy/ouput/image-7.png",
    aspectRatio: "6144/4096",
  },
  {
    id: "batch2-proj2",
    titleDe: "CAD zu Foto (Mauerwerk)",
    titleEn: "CAD to Photo (Brick)",
    descDe: "Transformation einer CAD-Skizze in eine fotorealistische Außenansicht. In der kreativen Version werden feinste Mauerwerk-Details organisch hinzuerfunden.",
    descEn: "Transformation of a CAD sketch into a photorealistic exterior view. In the high creativity setting, fine brick details are organically reimagined.",
    input: "/upscale-images copy/input/image-8.png",
    output1: "/upscale-images copy/ouput/image-8.png",
    output2: "/upscale-images copy/ouput/high-creativity-8.png",
    aspectRatio: "6144/4096",
  },
  {
    id: "batch2-proj3",
    titleDe: "Farbkarten-Visualisierung",
    titleEn: "Colormap Visualization",
    descDe: "Präzise Veranschaulichung der Materialien. Die kreative Stufe reichert Holzmaserungen und Details lebendiger und haptischer an.",
    descEn: "Precise material representation. The high creativity setting enriches timber grains with more lifelike depth and texture.",
    input: "/upscale-images copy/input/image-9.png",
    output1: "/upscale-images copy/ouput/image-9.png",
    output2: "/upscale-images copy/ouput/high-creativity-9.png",
    aspectRatio: "6144/4096",
  },
  {
    id: "batch2-proj4",
    titleDe: "Urbanes Loft",
    titleEn: "Urban Loft",
    descDe: "Industrielles urbanes Loft-Interieur. Standard liefert strukturtreue Schärfe, während Hohe Kreativität edle Texturen und Lichtakzente einarbeitet.",
    descEn: "Industrial urban loft interior. Standard sharpens geometries faithfully, while High Creativity layers premium concrete textures and warm light.",
    input: "/upscale-images copy/input/image-6.png",
    output1: "/upscale-images copy/ouput/image-6.png",
    output2: "/upscale-images copy/ouput/high-creativity-6.png",
    aspectRatio: "5600/4480",
  },
  {
    id: "batch2-proj5",
    titleDe: "Betonturm",
    titleEn: "Concrete Tower",
    descDe: "Monolithischer Sichtbetonturm. Vergleichen Sie die exakte Standard-Vergrößerung mit der organisch verfeinerten, detailreichen kreativen Variante.",
    descEn: "Monolithic raw concrete tower. Compare the exact standard enlargement with the organically detailed, textured creative variant.",
    input: "/upscale-images copy/input/image-17.png",
    output1: "/upscale-images copy/ouput/image-17.png",
    aspectRatio: "4096/6144",
  },
  {
    id: "batch2-proj6",
    titleDe: "Konzept zur Realität",
    titleEn: "Concept to Reality",
    descDe: "Architektonische Konzeptvisualisierung mit feinen Materialnuancen und stimmungsvoller Lichtstimmung.",
    descEn: "Architectural conceptual visualization featuring refined material textures and soft, atmospheric lighting.",
    input: "/upscale-images copy/input/image-11.png",
    output1: "/upscale-images copy/ouput/image-11.png",
    aspectRatio: "5600/4480",
  },
  {
    id: "batch2-proj7",
    titleDe: "Uferpromenade",
    titleEn: "Waterfront",
    descDe: "Großzügiges Gebäude am Wasser mit komplexer Glasfassade und Spiegelungen auf der Wasseroberfläche.",
    descEn: "Spacious building by the water, showcasing complex glass facade detailing and lifelike reflections.",
    input: "/upscale-images copy/input/image-12.png",
    output1: "/upscale-images copy/ouput/image-12.png",
    aspectRatio: "5600/4480",
  },
  {
    id: "batch2-proj8",
    titleDe: "Waldpavillon",
    titleEn: "Forest Pavilion",
    descDe: "Moderner Pavillon im dichten Wald, der Licht und Schatten durch Geometrien des Holzdaches filtert.",
    descEn: "Modern pavilion set in a dense forest, filtering light and shadow through complex timber roof structures.",
    input: "/upscale-images copy/input/image-16.png",
    output1: "/upscale-images copy/ouput/image-16.png",
    aspectRatio: "4256/5904",
  },
  {
    id: "batch2-proj9",
    titleDe: "Umnutzung",
    titleEn: "Adaptive Reuse",
    descDe: "Erhalt historischer Bausubstanz kombiniert mit modernen Elementen und filigranen Metallkonstruktionen.",
    descEn: "Preservation of historical architecture combined with modern elements and delicate steel structures.",
    input: "/upscale-images copy/input/image-14.png",
    output1: "/upscale-images copy/ouput/image-14.png",
    aspectRatio: "5248/4800",
  },
  {
    id: "home-proj3",
    titleDe: "Farbkarten-Visualisierung",
    titleEn: "Colormap Visualization",
    descDe: "Transformieren Sie Ihre architektonischen Zeichnungen in atemberaubende fotorealistische Visualisierungen mit KI-Präzision.",
    descEn: "Transform your architectural drawings into stunning photorealistic visualizations with AI precision.",
    input: "https://typus-ai.s3.eu-central-1.amazonaws.com/landingpage/public/before-after/c_before.webp",
    output1: "https://typus-ai.s3.eu-central-1.amazonaws.com/landingpage/public/before-after/c_after.webp",
    aspectRatio: "2000/1143",
  },
  {
    id: "home-proj4",
    titleDe: "Konzept zur Realität",
    titleEn: "Concept to Reality",
    descDe: "Transformieren Sie Ihre architektonischen Zeichnungen in atemberaubende fotorealistische Visualisierungen mit KI-Präzision.",
    descEn: "Transform your architectural drawings into stunning photorealistic visualizations with AI precision.",
    input: "https://typus-ai.s3.eu-central-1.amazonaws.com/landingpage/public/before-after/d_before.webp",
    output1: "https://typus-ai.s3.eu-central-1.amazonaws.com/landingpage/public/before-after/d_after.webp",
    aspectRatio: "4864/3328",
  }
]

function Upscale2SlidersContent() {
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
            {/* Comparison Slider Showcase 2 */}
            <div className="w-full bg-[#fcfcfd] dark:bg-neutral-950/20 py-16 border-b border-neutral-100 dark:border-neutral-900">
              <div className="w-full max-w-[90%] md:max-w-[70%] mx-auto overflow-x-hidden">
                {isClient && <CompareWithAnimationUpscale projects={batch2Projects} basePath={`/${locale}/upscale-privacy/upscale-2`} />}
              </div>
            </div>

            {/* Bottom Banner navigation */}
            <div className="py-16 px-4 max-w-5xl mx-auto text-center">
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mb-6 uppercase tracking-wider font-mono">
                {locale === 'de' ? 'Möchten Sie die erste Galerie nochmals ansehen?' : 'Want to explore the first gallery again?'}
              </p>
              <div className="max-w-xl mx-auto mb-8">
                <div className="text-left bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-[32px] p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-full aspect-[16/10] bg-neutral-100 dark:bg-neutral-950 overflow-hidden rounded-2xl border border-neutral-100 dark:border-neutral-900/60 mb-6">
                    <img
                      src="/upscale-images/input/ChatGPT Image 2. Juni 2026, 10_07_17.png"
                      alt="Batch 1 preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      href={`/${locale}/upscale-privacy/upscale-1`}
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

export default function Upscale2SlidersPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#fcfcfd] dark:bg-neutral-950 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black dark:border-white"></div>
      </div>
    }>
      <Upscale2SlidersContent />
    </Suspense>
  )
}
