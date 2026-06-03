'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import { IconArrowLeft } from '@tabler/icons-react'
import { KernelZoomShowcaseUpscale2 } from '@/components/kernel-zoom-showcase-upscale-2'

// Dynamically load upscale interactive comparison slider component
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

function Upscale2Content() {
  const locale = useLocale()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <div className='relative w-full bg-[#fcfcfd] dark:bg-neutral-950 min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-black selection:text-white'>
      <div>
        <NavbarDemo />

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
                <span>{locale === 'de' ? 'UPSCALE-VERGLEICH' : 'UPSCALER COMPARISON'}</span>
              </div>
              
              <div className="flex gap-2">
                <Link
                  href={`/${locale}/upscale-privacy`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full text-[11px] font-bold tracking-wider uppercase shadow-sm transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <IconArrowLeft size={14} />
                  <span>{locale === 'de' ? 'ÜBERSICHT' : 'HUB OVERVIEW'}</span>
                </Link>
                
                <Link
                  href={`/${locale}/upscale-privacy/upscale-1`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-sm transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <IconArrowLeft size={14} />
                  <span>{locale === 'de' ? 'ZURÜCK ZU BATCH 1' : 'GO TO BATCH 1'}</span>
                </Link>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-[46px] font-normal text-black dark:text-white tracking-tight leading-[1.05]" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
              {locale === 'de' 
                ? 'MATERIALDETAILS (BATCH 2)' 
                : 'MATERIAL DETAILS (BATCH 2)'}
            </h1>

            {/* Sub-text details */}
            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-normal max-w-3xl leading-relaxed">
                {locale === 'de'
                ? 'Fokussiert auf Materialeigenschaften. Untersuchen Sie Verfeinerungen an Betonfassaden, Ziegelmauerwerk, Glasscheiben und Holzwerkstoffen.'
                : 'Focused on material characteristics. Check refinements on concrete facade, brick masonry, glass panes, and wood timber.'}
            </p>
          </motion.div>
        </div>

        {/* Comparison Slider Showcase */}
        <div className="w-full bg-[#fcfcfd] dark:bg-neutral-950/20 py-4 border-t border-b border-neutral-100 dark:border-neutral-900">
          {isClient && <KernelZoomShowcaseUpscale2 />}
        </div>

        {/* Comparison Slider Showcase 2 */}
        <div className="w-full bg-[#fcfcfd] dark:bg-neutral-950/20 py-16 border-b border-neutral-100 dark:border-neutral-900">
          <div className="w-full max-w-[90%] md:max-w-[70%] mx-auto overflow-x-hidden">
            {isClient && <CompareWithAnimationUpscale />}
          </div>
        </div>

        {/* Bottom Banner navigation */}
        <div className="py-16 px-4 max-w-5xl mx-auto text-center">
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mb-6 uppercase tracking-wider font-mono">
            {locale === 'de' ? 'Möchten Sie die erste Galerie nochmals ansehen?' : 'Want to explore the first gallery again?'}
          </p>
          <Link
            href={`/${locale}/upscale-privacy/upscale-1`}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 rounded-full text-xs font-bold tracking-wider uppercase shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-95"
            style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
          >
            <span>{locale === 'de' ? 'Interaktive Galerie (Batch 1)' : 'Interactive Gallery (Batch 1)'}</span>
          </Link>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}

export default function Upscale2Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#fcfcfd] dark:bg-neutral-950 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black dark:border-white"></div>
      </div>
    }>
      <Upscale2Content />
    </Suspense>
  )
}
