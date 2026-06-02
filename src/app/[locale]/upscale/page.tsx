'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

// Dynamically load upscale interactive components
const KernelZoomShowcaseUpscale = dynamic(
  () =>
    import('@/components/kernel-zoom-showcase-upscale').then(
      mod => mod.KernelZoomShowcaseUpscale
    ),
  {
    ssr: false,
    loading: () => <div className='h-[400px] bg-neutral-50 dark:bg-neutral-900 animate-pulse flex items-center justify-center text-neutral-400'>Loading Upscaler Demo...</div>,
  }
)

const CompareDemoUpscale = dynamic(
  () =>
    import('@/components/compare-demo-upscale').then(
      mod => mod.default
    ),
  {
    ssr: false,
    loading: () => <div className='h-[400px] bg-neutral-50 dark:bg-neutral-900 animate-pulse flex items-center justify-center text-neutral-400'>Loading Comparison Slider...</div>,
  }
)

export default function UpscalePage() {
  const locale = useLocale()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className='relative w-full bg-[#fcfcfd] dark:bg-neutral-950 min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-black selection:text-white'>
      <div>
        <NavbarDemo />

        {/* 1. Hero Block & Intro Paragraphs */}
        <div className="pt-32 pb-16 px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 text-left"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase tracking-[0.2em]">
              <span>{locale === 'de' ? 'PRO-FEATURES' : 'PRO FEATURES'}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-[46px] font-normal text-black dark:text-white tracking-tight leading-[1.05]" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
              {locale === 'de' 
                ? 'HOCHSKALIERUNG BIS ZU 8K AUFLÖSUNG' 
                : 'IMAGE UPSCALING UP TO 8K RESOLUTION'}
            </h1>

            {/* Introduction Text Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-neutral-100 dark:border-neutral-900">
              <div className="space-y-6">
                <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal leading-relaxed">
                  {locale === 'de' 
                    ? 'Viele Architekt:innen nutzen heute KI-Bildgeneratoren wie Google Nano Banana 2, ChatGPT Image2 etc. für erste Entwürfe, Stimmungsbilder und schnelle Iterationen. Dafür sind die meisten Modelle hervorragend geeignet.'
                    : 'Many architects today use AI image generators like Google Nano Banana 2, ChatGPT Image2 etc. for initial designs, mood boards, and quick iterations. Most models are excellent for this.'}
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal leading-relaxed">
                  {locale === 'de'
                    ? 'Sobald es jedoch darum geht, finale Präsentationsbilder in hoher Qualität zu erstellen, stoßen viele dieser Lösungen an ihre Grenzen. Diese generischen KI-Modelle liefern Auflösungen von nur 4.000 Pixeln.'
                    : 'However, when it comes to creating high-quality final presentation images, many of these solutions reach their limits. These generic AI models deliver resolutions of only 4,000 pixels.'}
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal leading-relaxed">
                  {locale === 'de'
                    ? 'Für großformatige Drucke, Wettbewerbspräsentationen, Ausstellungen oder detaillierte Materialdarstellungen reicht das oft nicht aus.'
                    : 'For large-format prints, competition presentations, exhibitions, or detailed material representations, this is often not enough.'}
                </p>
              </div>

              <div className="space-y-6 bg-neutral-50 dark:bg-neutral-900/40 p-6 md:p-8 border border-neutral-100 dark:border-neutral-900/60 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                    {locale === 'de' ? 'UNSERE STÄRKE' : 'OUR SPECIALTY'}
                  </h3>
                  <p className="text-neutral-900 dark:text-white text-lg md:text-xl font-normal leading-snug style-font" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                    {locale === 'de'
                      ? 'Genau hier liegt eine besondere Stärke von Typus.ai:'
                      : 'This is precisely where one of the greatest strengths of Typus.ai lies:'}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-normal leading-relaxed mt-4">
                    {locale === 'de'
                      ? 'Mit unserem spezialisierten Upscaler können Bilder auf Auflösungen von bis zu 8.000 Pixeln hochskaliert werden – deutlich über dem, was die meisten Standardlösungen ermöglichen.'
                      : 'With our specialized upscaler, images can be upscaled to resolutions of up to 8,000 pixels – significantly beyond what most standard solutions allow.'}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                  <span>{locale === 'de' ? 'MAX. AUFLÖSUNG' : 'MAX RESOLUTION'}</span>
                  <span className="text-lg font-mono tracking-normal text-black dark:text-white font-bold">8,000 PX</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Interactive Zoom Component */}
        <div className="w-full bg-[#fcfcfd] dark:bg-neutral-950 py-4">
          <div className="max-w-5xl mx-auto px-4 mb-4">
            <h2 className="text-xl sm:text-2xl font-normal text-black dark:text-white tracking-tight" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
              {locale === 'de' 
                ? 'INTERAKTIVE DETAIL-ANALYSE (ZOOM-DEMO)' 
                : 'INTERACTIVE DETAIL ANALYSIS (ZOOM DEMO)'}
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">
              {locale === 'de'
                ? 'Bewegen Sie die Maus über das Bild, um die Detailauflösung und Oberflächenqualität des Typus.ai-Upscalers live zu erleben.'
                : 'Hover over the image to experience the detail resolution and surface quality of the Typus.ai upscaler live.'}
            </p>
          </div>
          {isClient && <KernelZoomShowcaseUpscale />}
        </div>

        {/* 3. Deep Detail & Workflow Section */}
        <div className="py-20 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-normal text-black dark:text-white tracking-tight leading-snug" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                {locale === 'de'
                  ? 'Materialverfeinerung statt nur stumpfes Vergrößern'
                  : 'Material Refinement Rather Than Plain Enlargement'}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
                {locale === 'de'
                  ? 'Dabei wird das Bild nicht nur vergrößert. Durch unsere Architektur-optimierten Modelle werden zusätzliche Details ergänzt und Oberflächen gezielt verfeinert.'
                  : 'In doing so, the image is not merely enlarged. Through our architecture-optimized models, additional details are added and surfaces are specifically refined.'}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed font-medium">
                {locale === 'de'
                  ? 'Insbesondere bei Materialien wie Beton, Holz, Naturstein, Metall oder Putz entstehen deutlich realistischere Texturen und eine überzeugendere Materialhaptik.'
                  : 'Particularly with materials such as concrete, wood, natural stone, metal, or plaster, significantly more realistic textures and a more convincing material feel are created.'}
              </p>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-900/40 p-6 md:p-8 border border-neutral-100 dark:border-neutral-900/60 space-y-6">
              <h2 className="text-xl font-normal text-black dark:text-white tracking-tight" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                {locale === 'de'
                  ? 'Unserer Erfahrung nach ist deshalb die ideale Arbeitsweise:'
                  : 'Based on our experience, the ideal workflow is:'}
              </h2>
              <ol className="space-y-4 text-sm md:text-base text-neutral-800 dark:text-neutral-200">
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold">1</span>
                  <span>
                    {locale === 'de'
                      ? 'Erste Ideen und Varianten im Bereich "Erstellen" mit generativen KI-Modellen erstellen.'
                      : 'Create initial ideas and variations in the "Create" section using generative AI models.'}
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold">2</span>
                  <span>
                    {locale === 'de'
                      ? 'Die beste Variante auswählen.'
                      : 'Select the best variation.'}
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold">3</span>
                  <span>
                    {locale === 'de'
                      ? 'Das Bild mit dem Typus.ai Hochskalierer auf finale Präsentationsqualität bringen.'
                      : 'Bring the image to final presentation quality using the Typus.ai upscaler.'}
                  </span>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-neutral-100 dark:border-neutral-900 max-w-3xl">
            <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg leading-relaxed">
              {locale === 'de'
                ? 'Gerade für Architekt:innen, die hochwertige Renderings für Kunden, Wettbewerbe oder Publikationen erstellen, ist ein leistungsfähiger Hochskalierer daher kein Luxus, sondern ein essenzieller Bestandteil des Workflows.'
                : 'Especially for architects who create high-quality renderings for clients, competitions, or publications, a powerful upscaler is therefore not a luxury, but an essential part of the workflow.'}
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg leading-relaxed mt-4 font-semibold">
              {locale === 'de'
                ? 'Probieren Sie es selbst aus und erleben Sie den Unterschied bei Detailtiefe, Materialwirkung und Druckqualität.'
                : 'Try it yourself and experience the difference in level of detail, material effect, and print quality.'}
            </p>
          </div>
        </div>

        {/* 4. Comparison Slider Showcase */}
        <div className="w-full bg-neutral-50 dark:bg-neutral-900/20 py-16 border-t border-neutral-100 dark:border-neutral-900">
          <div className="max-w-5xl mx-auto px-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-normal text-black dark:text-white tracking-tight" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
              {locale === 'de' 
                ? '4K STANDARD VS. 8K TYPUS HOCHSKALIERUNG' 
                : '4K STANDARD VS. 8K TYPUS UPSCALING'}
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1 leading-relaxed">
              {locale === 'de'
                ? 'Hier haben wir veranschaulicht, welchen spürbaren Unterschied hochskalierte Bilder ausmachen. Wir stellen generische KI-Bilder mit einer Auflösung von lediglich 4K den mit TYPUS hochskalierten Bildern gegenüber und zeigen die deutlich höhere Detailtiefe und Bildqualität.'
                : 'Here we have illustrated what a noticeable difference upscaled images make. We compare generic AI images with a resolution of only 4K against images upscaled with TYPUS, showing the significantly higher level of detail and image quality.'}
            </p>
          </div>
          {isClient && <CompareDemoUpscale />}
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
