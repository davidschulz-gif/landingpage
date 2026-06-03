'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from 'next-intl'
import { useState, useEffect } from 'react'
import { IconDeviceMobile, IconShare, IconCopy, IconCheck, IconTag } from '@tabler/icons-react'
import { ShareShowcaseModal } from '@/components/share-showcase-modal'
import { Link } from '@/i18n/navigation'

interface MobileImageItem {
  id: number
  titleDe: string
  titleEn: string
  src: string
}

export default function UpscaleMobilePage() {
  const locale = useLocale()
  const [isClient, setIsClient] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  // 17 mobile preview images from /public/upscaler-moblie
  const previews: MobileImageItem[] = [
    { id: 1, titleDe: "Moderne Villa", titleEn: "Modern Villa", src: "/upscaler-moblie/image-1.png" },
    { id: 2, titleDe: "Urbanes Loft", titleEn: "Urban Loft", src: "/upscaler-moblie/image-2.png" },
    { id: 3, titleDe: "Penthouse-Terrasse", titleEn: "Penthouse Terrace", src: "/upscaler-moblie/image-3.png" },
    { id: 4, titleDe: "Monolithischer Betonturm", titleEn: "Monolithic Concrete Tower", src: "/upscaler-moblie/image-4.png" },
    { id: 5, titleDe: "Glasfassade", titleEn: "Glass Facade", src: "/upscaler-moblie/image-5.png" },
    { id: 6, titleDe: "Ziegel-Wohnhaus", titleEn: "Brick Residence", src: "/upscaler-moblie/image-6.png" },
    { id: 7, titleDe: "Konzept-Pavillon", titleEn: "Conceptual Pavilion", src: "/upscaler-moblie/image-7.png" },
    { id: 8, titleDe: "Büro am Ufer", titleEn: "Waterfront Office", src: "/upscaler-moblie/image-8.png" },
    { id: 9, titleDe: "Innenhof-Eingang", titleEn: "Courtyard Entrance", src: "/upscaler-moblie/image-9.png" },
    { id: 10, titleDe: "Minimalistische Küche", titleEn: "Minimalist Kitchen", src: "/upscaler-moblie/image-10.png" },
    { id: 11, titleDe: "Historische Sanierung", titleEn: "Historic Renovation", src: "/upscaler-moblie/image-11.png" },
    { id: 12, titleDe: "Zeitgenössisches Museum", titleEn: "Contemporary Museum", src: "/upscaler-moblie/image-12.png" },
    { id: 13, titleDe: "Holzdach-Konstruktion", titleEn: "Timber Roof Structure", src: "/upscaler-moblie/image-13.png" },
    { id: 14, titleDe: "Brutalistische Bibliothek", titleEn: "Brutalist Library", src: "/upscaler-moblie/image-14.png" },
    { id: 15, titleDe: "Vorstadt-Reihenhaus", titleEn: "Suburban Townhouse", src: "/upscaler-moblie/image-15.png" },
    { id: 16, titleDe: "Industrielle Werkstatt", titleEn: "Industrial Workshop", src: "/upscaler-moblie/image-16.png" },
    { id: 17, titleDe: "Architektur-Studio", titleEn: "Architectural Studio", src: "/upscaler-moblie/image-17.png" }
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Trigger custom share link popup
  const handleShareLink = () => {
    setIsShareModalOpen(true)
  }

  // Reusable button component to avoid code duplication
  const ShareButton = () => (
    <button
      onClick={handleShareLink}
      className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900/60 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full max-w-sm"
      style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
    >
      <IconShare size={14} />
      <span>{locale === 'de' ? 'Alle 18 Beispiele in der interaktiven Bildschau sehen' : 'View all 18 examples in the interactive showcase'}</span>
    </button>
  )

  const PricingButton = () => (
    <Link
      href="/pricing"
      className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full max-w-sm border border-neutral-800 dark:border-neutral-200 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
      style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
    >
      <IconTag size={14} />
      <span>{locale === 'de' ? 'Preise & Lizenzen ansehen' : 'View Pricing & Licenses'}</span>
    </Link>
  )

  return (
    <div className='relative w-full bg-[#fcfcfd] dark:bg-neutral-950 min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-black selection:text-white'>
      <div>
        <NavbarDemo />

        {/* 1. Hero Block & Intro Paragraphs */}
        <div className="pt-32 pb-10 px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 text-left"
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
              <div className="space-y-4 text-sm md:text-base text-neutral-800 dark:text-neutral-200">
                <p className="leading-relaxed">
                  {locale === 'de' 
                    ? 'Viele Architekt:innen nutzen heute KI-Bildgeneratoren wie Google Nano Banana 2, ChatGPT Image2 etc. für erste Entwürfe, Stimmungsbilder und schnelle Iterationen. Dafür sind die meisten Modelle hervorragend geeignet.'
                    : 'Many architects today use AI image generators like Google Nano Banana 2, ChatGPT Image2 etc. for initial designs, mood boards, and quick iterations. Most models are excellent for this.'}
                </p>
                <p className="leading-relaxed">
                  {locale === 'de'
                    ? 'Sobald es jedoch darum geht, finale Präsentationsbilder in hoher Qualität zu erstellen, stoßen viele dieser Lösungen an ihre Grenzen. Diese generischen KI-Modelle liefern Auflösungen von nur 4.000 Pixeln.'
                    : 'However, when it comes to creating high-quality final presentation images, many of these solutions reach their limits. These generic AI models deliver resolutions of only 4,000 pixels.'}
                </p>
                <p className="leading-relaxed">
                  {locale === 'de'
                    ? 'Für großformatige Drucke, Wettbewerbspräsentationen, Ausstellungen oder detaillierte Materialdarstellungen reicht das oft nicht aus.'
                    : 'For large-format prints, competition presentations, exhibitions, or detailed material representations, this is often not enough.'}
                </p>
              </div>

              <div className="space-y-6 bg-neutral-50 dark:bg-neutral-900/40 p-6 border border-neutral-100 dark:border-neutral-900/60 flex flex-col justify-between rounded-xl">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                    {locale === 'de' ? 'UNSERE STÄRKE' : 'OUR SPECIALTY'}
                  </h3>
                  <p className="text-neutral-900 dark:text-white text-base md:text-lg font-normal leading-snug" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                    {locale === 'de'
                      ? 'Genau hier liegt eine besondere Stärke von Typus.ai:'
                      : 'This is precisely where one of the greatest strengths of Typus.ai lies:'}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm font-normal leading-relaxed mt-3">
                    {locale === 'de'
                      ? 'Mit unserem spezialisierten Upscaler können Bilder auf Auflösungen von bis zu 8.000 Pixeln hochskaliert werden – deutlich über dem, was die meisten Standardlösungen ermöglichen.'
                      : 'With our specialized upscaler, images can be upscaled to resolutions of up to 8,000 pixels – significantly beyond what most standard solutions allow.'}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-black dark:text-white">
                  <span>{locale === 'de' ? 'MAX. AUFLÖSUNG' : 'MAX RESOLUTION'}</span>
                  <span className="text-sm font-mono tracking-normal text-black dark:text-white font-bold">8,000 PX</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons - Placement 1 (Top Hero) */}
         <div className="max-w-5xl mx-auto px-4 pb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <ShareButton />
         {/* <PricingButton /> */}
        </div> 

        {/* 17 Preview Images feed with responsive grid */}
        <div className="max-w-5xl mx-auto px-4 pt-12 pb-12 border-t border-neutral-100 dark:border-neutral-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previews.flatMap((item, index) => {
              const card = (
                <div 
                  key={item.id} 
                  className="bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300"
                >
                  {/* Header of Card */}
                  <div className="p-3.5 border-b border-neutral-100 dark:border-neutral-800 flex justify-between items-center bg-neutral-50/50 dark:bg-neutral-900/50 flex-shrink-0">
                    <span className="text-[11px] font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wide">
                      {locale === 'de' ? item.titleDe : item.titleEn}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-400">
                      REF #{item.id.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full bg-neutral-100 dark:bg-neutral-950 overflow-hidden flex-1 flex items-center justify-center">
                    <img
                      src={item.src}
                      alt={locale === 'de' ? item.titleDe : item.titleEn}
                      className="w-full h-auto object-cover select-none"
                      loading="lazy"
                    />
                  </div>
                </div>
              );

              if (index === 5 || index === 11) {
                return [
                  card,
                  <div key={`inline-btn-${index}`} className="col-span-full py-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                    <ShareButton />
                    {/* <PricingButton /> */}
                  </div>
                ];
              }

              return [card];
            })}
          </div>
        </div>

        {/* 3. Deep Detail & Workflow Section */}
        <div className="py-12 border-t border-neutral-100 dark:border-neutral-900 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-normal text-black dark:text-white tracking-tight leading-snug" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                {locale === 'de'
                  ? 'Materialverfeinerung statt nur stumpfes Vergrößern'
                  : 'Material Refinement Rather Than Plain Enlargement'}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {locale === 'de'
                  ? 'Dabei wird das Bild nicht nur vergrößert. Durch unsere Architektur-optimierten Modelle werden zusätzliche Details ergänzt und Oberflächen gezielt verfeinert.'
                  : 'In doing so, the image is not merely enlarged. Through our architecture-optimized models, additional details are added and surfaces are specifically refined.'}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-semibold">
                {locale === 'de'
                  ? 'Insbesondere bei Materialien wie Beton, Holz, Naturstein, Metall oder Putz entstehen deutlich realistischere Texturen und eine überzeugendere Materialhaptik.'
                  : 'Particularly with materials such as concrete, wood, natural stone, metal, or plaster, significantly more realistic textures and a more convincing material feel are created.'}
              </p>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-900/40 p-6 border border-neutral-100 dark:border-neutral-900/60 space-y-4 rounded-xl">
              <h2 className="text-lg font-normal text-black dark:text-white tracking-tight" style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
                {locale === 'de'
                  ? 'Unserer Erfahrung nach ist deshalb die ideale Arbeitsweise:'
                  : 'Based on our experience, the ideal workflow is:'}
              </h2>
              <ol className="space-y-3.5 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200">
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-bold">1</span>
                  <span>
                    {locale === 'de'
                      ? 'Erste Ideen und Varianten im Bereich "Erstellen" mit generativen KI-Modellen erstellen.'
                      : 'Create initial ideas and variations in the "Create" section using generative AI models.'}
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-bold">2</span>
                  <span>
                    {locale === 'de'
                      ? 'Die beste Variante auswählen.'
                      : 'Select the best variation.'}
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-bold">3</span>
                  <span>
                    {locale === 'de'
                      ? 'Das Bild mit dem Typus.ai Hochskalierer auf finale Präsentationsqualität bringen.'
                      : 'Bring the image to final presentation quality using the Typus.ai upscaler.'}
                  </span>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-neutral-100 dark:border-neutral-900">
            <p className="text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed">
              {locale === 'de'
                ? 'Gerade für Architekt:innen, die hochwertige Renderings für Kunden, Wettbewerbe oder Publikationen erstellen, ist ein leistungsfähiger Hochskalierer daher kein Luxus, sondern ein essenzieller Bestandteil des Workflows.'
                : 'Especially for architects who create high-quality renderings for clients, competitions, or publications, a powerful upscaler is therefore not a luxury, but an essential part of the workflow.'}
            </p>
          </div>
        </div>

        {/* CTA Buttons - Placement 4 (Above Footer) */}
        <div className="max-w-5xl mx-auto px-4 pb-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <ShareButton />
          {/* <PricingButton /> */}
        </div>
      </div>

      <FooterSection />

      <AnimatePresence>
        {isShareModalOpen && (
          <ShareShowcaseModal
            isOpen={isShareModalOpen}
            onClose={() => setIsShareModalOpen(false)}
            url={isClient ? `${window.location.origin}/${locale}/upscale` : ''}
            locale={locale}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
