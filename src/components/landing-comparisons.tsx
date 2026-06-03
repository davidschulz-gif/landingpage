'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { MediaBucketUrl } from '@/lib/constants'
import { IconRefresh } from '@tabler/icons-react'

interface ComparisonItem {
  id: number
  titleDe: string
  titleEn: string
  descDe: string
  descEn: string
  beforeSrc: string
  afterSrc: string
  aspectRatio: string
}

export function LandingComparisons() {
  const locale = useLocale()
  const t = useTranslations('Compare')

  const items: ComparisonItem[] = [
    {
      id: 1,
      titleDe: "3D-Modell (Standard)",
      titleEn: "3D Model (Standard)",
      descDe: "Präzises 3D-Architekturmodell mit realistischer Lichtstimmung und klaren Strukturen.",
      descEn: "Precise 3D architectural model with realistic lighting and clear structural definitions.",
      beforeSrc: MediaBucketUrl + "before-after/a_before.webp",
      afterSrc: MediaBucketUrl + "before-after/a_after.webp",
      aspectRatio: "1/1"
    },
    {
      id: 2,
      titleDe: "CAD zu Foto",
      titleEn: "CAD to Photo",
      descDe: "Transformation einer CAD-Skizze in eine fotorealistische Außenansicht mit fein aufbereiteten Fassadendetails.",
      descEn: "Transformation of a CAD sketch into a photorealistic exterior view with finely resolved facade details.",
      beforeSrc: MediaBucketUrl + "before-after/b_before.webp",
      afterSrc: MediaBucketUrl + "before-after/b_after.webp",
      aspectRatio: "2688/1536"
    },
    {
      id: 3,
      titleDe: "Farbkarten-Visualisierung",
      titleEn: "Colormap Visualization",
      descDe: "Präzise Veranschaulichung der Materialien. Bereichert Holzmaserungen und Umgebungsdetails mit lebendiger Haptik.",
      descEn: "Precise material representation. Enriches timber grains and surrounding details with lifelike texture.",
      beforeSrc: MediaBucketUrl + "before-after/c_before.webp",
      afterSrc: MediaBucketUrl + "before-after/c_after.webp",
      aspectRatio: "2000/1143"
    },
    {
      id: 4,
      titleDe: "Konzept zur Realität",
      titleEn: "Concept to Reality",
      descDe: "Architektonische Konzeptvisualisierung mit feinen Materialnuancen und stimmungsvoller Lichtwirkung.",
      descEn: "Architectural conceptual visualization featuring refined material textures and soft, atmospheric lighting.",
      beforeSrc: MediaBucketUrl + "before-after/d_before.webp",
      afterSrc: MediaBucketUrl + "before-after/d_after.webp",
      aspectRatio: "4864/3328"
    }
  ]

  // Track manual toggle state for mobile taps, hover will trigger automatically on hover
  const [activeToggles, setActiveToggles] = useState<Record<number, boolean>>({})
  const [hoveredStates, setHoveredStates] = useState<Record<number, boolean>>({})

  const handleToggle = (id: number) => {
    setActiveToggles(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="py-16 md:py-24 bg-[#fcfcfd] dark:bg-neutral-950/10 border-t border-neutral-100 dark:border-neutral-900" id="landing-comparisons-section">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header Block */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            {locale === 'de' ? 'DETAILS IM FOKUS' : 'DETAILS IN FOCUS'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-normal text-black dark:text-white tracking-tight leading-tight mt-3 mb-4" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
            {locale === 'de' 
              ? '4K STANDARD VS. 8K TYPUS HOCHSKALIERUNG' 
              : '4K STANDARD VS. 8K TYPUS UPSCALING'}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
            {locale === 'de'
              ? 'Erleben Sie, wie Typus.ai-Skalierungen feinste Details und Materialien organisch verfeinern. Hovern Sie über die Bilder oder tippen Sie darauf, um die hochaufgelöste Detail-Ebene zu enthüllen.'
              : 'Experience how Typus.ai upscaling organically refines the finest details and materials. Hover your cursor or tap to reveal the high-resolution layers.'}
          </p>
        </div>

        {/* Distributed Comparison Feed */}
        <div className="space-y-24">

          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-4 text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Project 01</span>
              <h3 className="text-xl sm:text-2xl font-normal text-black dark:text-white tracking-tight" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                {locale === 'de' ? items[0].titleDe : items[0].titleEn}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {locale === 'de' ? items[0].descDe : items[0].descEn}
              </p>
            </div>
            
            <div 
              className="w-full md:w-[420px] aspect-square bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl overflow-hidden shadow-md relative cursor-pointer select-none active:scale-[0.99] transition-transform duration-200"
              onClick={() => handleToggle(1)}
              onMouseEnter={() => setHoveredStates(prev => ({ ...prev, [1]: true }))}
              onMouseLeave={() => setHoveredStates(prev => ({ ...prev, [1]: false }))}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={(hoveredStates[1] || activeToggles[1]) ? 'enhanced' : 'original'}
                  src={(hoveredStates[1] || activeToggles[1]) ? items[0].afterSrc : items[0].beforeSrc}
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.1 }}
                  transition={{ duration: 0.25 }}
                  alt="3D Model Comparison"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-[8px] font-bold uppercase tracking-wider flex items-center gap-1 pointer-events-none">
                <IconRefresh size={10} />
                <span>{(hoveredStates[1] || activeToggles[1]) ? (locale === 'de' ? '8K Verbessert' : '8K Enhanced') : (locale === 'de' ? 'Original 2K' : 'Original 2K')}</span>
              </div>
            </div>
          </div>

          {/* Distributed Content Block A */}
          <div className="py-8 border-y border-neutral-100 dark:border-neutral-900 text-center max-w-3xl mx-auto space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">
              {locale === 'de' ? 'STRUKTUR- UND GEOMETRIETREUE' : 'STRUCTURAL & GEOMETRIC FIDELITY'}
            </h4>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
              {locale === 'de'
                ? 'Im Gegensatz zu Standard-Modellen bewahrt Typus.ai die exakte geometrische Struktur Ihrer CAD-Modelle und Skizzen. Kanten, Fensterlinien und Winkel bleiben vollkommen erhalten.'
                : 'Unlike generic models, Typus.ai preserves the exact geometric coordinates of your CAD layouts and sketches. Edges, mullions, and design constraints stay perfectly sharp.'}
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="flex-1 space-y-4 text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Project 02</span>
              <h3 className="text-xl sm:text-2xl font-normal text-black dark:text-white tracking-tight" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                {locale === 'de' ? items[1].titleDe : items[1].titleEn}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {locale === 'de' ? items[1].descDe : items[1].descEn}
              </p>
            </div>
            
            <div 
              className="w-full md:w-[420px] aspect-[2688/1536] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl overflow-hidden shadow-md relative cursor-pointer select-none active:scale-[0.99] transition-transform duration-200"
              onClick={() => handleToggle(2)}
              onMouseEnter={() => setHoveredStates(prev => ({ ...prev, [2]: true }))}
              onMouseLeave={() => setHoveredStates(prev => ({ ...prev, [2]: false }))}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={(hoveredStates[2] || activeToggles[2]) ? 'enhanced' : 'original'}
                  src={(hoveredStates[2] || activeToggles[2]) ? items[1].afterSrc : items[1].beforeSrc}
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.1 }}
                  transition={{ duration: 0.25 }}
                  alt="CAD to Photo Comparison"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-[8px] font-bold uppercase tracking-wider flex items-center gap-1 pointer-events-none">
                <IconRefresh size={10} />
                <span>{(hoveredStates[2] || activeToggles[2]) ? (locale === 'de' ? '8K Verbessert' : '8K Enhanced') : (locale === 'de' ? 'Original 2K' : 'Original 2K')}</span>
              </div>
            </div>
          </div>

          {/* Distributed Content Block B */}
          <div className="py-8 border-y border-neutral-100 dark:border-neutral-900 text-center max-w-3xl mx-auto space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">
              {locale === 'de' ? 'MATERIALVERFEINERUNG STATT VERZERRUNG' : 'MATERIAL REFINEMENT INSTEAD OF BLUR'}
            </h4>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
              {locale === 'de'
                ? 'Naturstein, Ziegelwerk und Sichtbeton erhalten durch unsere Modelle eine zusätzliche Materialwirkung, statt nur stumpf vergrößert zu werden.'
                : 'Natural stone, bricks, and concrete facades receive customized texture enrichment rather than plain blurry pixel scaling.'}
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-4 text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Project 03</span>
              <h3 className="text-xl sm:text-2xl font-normal text-black dark:text-white tracking-tight" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                {locale === 'de' ? items[2].titleDe : items[2].titleEn}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {locale === 'de' ? items[2].descDe : items[2].descEn}
              </p>
            </div>
            
            <div 
              className="w-full md:w-[420px] aspect-[2000/1143] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl overflow-hidden shadow-md relative cursor-pointer select-none active:scale-[0.99] transition-transform duration-200"
              onClick={() => handleToggle(3)}
              onMouseEnter={() => setHoveredStates(prev => ({ ...prev, [3]: true }))}
              onMouseLeave={() => setHoveredStates(prev => ({ ...prev, [3]: false }))}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={(hoveredStates[3] || activeToggles[3]) ? 'enhanced' : 'original'}
                  src={(hoveredStates[3] || activeToggles[3]) ? items[2].afterSrc : items[2].beforeSrc}
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.1 }}
                  transition={{ duration: 0.25 }}
                  alt="Colormap Comparison"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-[8px] font-bold uppercase tracking-wider flex items-center gap-1 pointer-events-none">
                <IconRefresh size={10} />
                <span>{(hoveredStates[3] || activeToggles[3]) ? (locale === 'de' ? '8K Verbessert' : '8K Enhanced') : (locale === 'de' ? 'Original 2K' : 'Original 2K')}</span>
              </div>
            </div>
          </div>

          {/* Distributed Content Block C */}
          <div className="py-8 border-y border-neutral-100 dark:border-neutral-900 text-center max-w-3xl mx-auto space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">
              {locale === 'de' ? 'BEREIT FÜR DEN GROSSFORMATDRUCK' : 'READY FOR LARGE FORMAT PRINTS'}
            </h4>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
              {locale === 'de'
                ? 'Mit echten 8.000 Pixeln Auflösung eignen sich die Visualisierungen hervorragend für großformatige Wettbewerbsplakate, Kataloge und Ausstellungen.'
                : 'With true 8,000 pixels in resolution, your generated renderings become pristine assets ready for print, exhibitions, and client presentations.'}
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="flex-1 space-y-4 text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Project 04</span>
              <h3 className="text-xl sm:text-2xl font-normal text-black dark:text-white tracking-tight" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                {locale === 'de' ? items[3].titleDe : items[3].titleEn}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {locale === 'de' ? items[3].descDe : items[3].descEn}
              </p>
            </div>
            
            <div 
              className="w-full md:w-[420px] aspect-[4864/3328] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl overflow-hidden shadow-md relative cursor-pointer select-none active:scale-[0.99] transition-transform duration-200"
              onClick={() => handleToggle(4)}
              onMouseEnter={() => setHoveredStates(prev => ({ ...prev, [4]: true }))}
              onMouseLeave={() => setHoveredStates(prev => ({ ...prev, [4]: false }))}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={(hoveredStates[4] || activeToggles[4]) ? 'enhanced' : 'original'}
                  src={(hoveredStates[4] || activeToggles[4]) ? items[3].afterSrc : items[3].beforeSrc}
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.1 }}
                  transition={{ duration: 0.25 }}
                  alt="Concept to Reality Comparison"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-[8px] font-bold uppercase tracking-wider flex items-center gap-1 pointer-events-none">
                <IconRefresh size={10} />
                <span>{(hoveredStates[4] || activeToggles[4]) ? (locale === 'de' ? '8K Verbessert' : '8K Enhanced') : (locale === 'de' ? 'Original 2K' : 'Original 2K')}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
