'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const StickySliderSection = dynamic(
  () =>
    import('@/components/sticky-slider-section').then(
      mod => mod.StickySliderSection
    ),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-[#fcfcfd] animate-pulse flex items-center justify-center text-neutral-400'>Loading Features...</div>,
  }
)

export default function OverviewOfFeaturesPage() {
  const locale = useLocale()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className='relative w-full bg-[#fcfcfd] min-h-screen flex flex-col justify-between'>
      <div>
        <NavbarDemo />

        {/* Hero Title Block */}
        <div className="pt-32 pb-8 bg-[#fcfcfd] text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto space-y-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-[52px] font-normal text-black tracking-tight leading-[1.1]" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
              {locale === 'de' ? 'UNSERE FUNKTIONEN' : 'OVERVIEW OF FEATURES'}
            </h1>
            <p className="text-neutral-500 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              {locale === 'de' 
                ? 'Entdecken Sie die Werkzeuge, die Ihren architektonischen Workflow revolutionieren. Visualisieren, bearbeiten und verfeinern Sie Ihre Entwürfe in Sekundenschnelle.'
                : 'Discover the tools that revolutionize your architectural workflow. Visualize, edit, and refine your designs in seconds.'}
            </p>
          </motion.div>
        </div>

        {/* Features Slider Showcase */}
        {isClient && (
          <div className="w-full">
            <StickySliderSection />
          </div>
        )}
      </div>

      <FooterSection />
    </div>
  )
}
