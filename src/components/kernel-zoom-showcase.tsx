'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconChevronLeft, IconChevronRight, IconArrowsMaximize, IconFocus2 } from '@tabler/icons-react'
import { useParams } from 'next/navigation'

export function KernelZoomShowcase() {
  const params = useParams()
  const locale = params?.locale === 'de' ? 'de' : 'en'

  const translations = {
    en: {
      title: "Tap & Hold to Enhance",
      subtitle: "Hover or press-and-hold the viewport to trigger the Typus AI Giga-resolution upscaling. Witness original CAD models transform into razor-sharp 8K architectural details.",
      zoomText: "HOVER OR TAP & HOLD TO ENHANCE",
      detailsResolved: "DETAILS RESOLVED: 100%",
      tapAndHold: "TAP AND HOLD",
      enhanced: "ENHANCED",
      imageText: "IMAGE"
    },
    de: {
      title: "Tippen & Halten zum Verbessern",
      subtitle: "Bewegen Sie den Mauszeiger über das Bild oder halten Sie es gedrückt, um das Typus AI Giga-Auflösungs-Upscaling zu aktivieren. Erleben Sie, wie sich CAD-Modelle in gestochen scharfe 8K-Details verwandeln.",
      zoomText: "HOVER ODER TIPPEN & HALTEN ZUM VERBESSERN",
      detailsResolved: "DETAILS AUFGELÖST: 100%",
      tapAndHold: "DRÜCKEN & HALTEN",
      enhanced: "VERBESSERT",
      imageText: "BILD"
    }
  }

  const t = translations[locale]

  const images = [
    'kernal-zoom/image-22070.jpg',
    'kernal-zoom/image-22072.jpg',
    'kernal-zoom/image-22073.jpg',
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [boxCoords, setBoxCoords] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed) return // Lock coordinates during zoom
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    // Clamp coordinates so the Focus Box stays completely inside the boundaries
    const clampedX = Math.max(15, Math.min(85, x))
    const clampedY = Math.max(25, Math.min(75, y))
    
    setBoxCoords({ x: clampedX, y: clampedY })
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <section className="py-20 bg-[#fcfcfd] dark:bg-neutral-950/20 border-y border-neutral-100 dark:border-neutral-900 overflow-hidden relative" id="kernel-zoom-section">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Header Block with Premium Typography */}
        <div className="max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-normal text-black dark:text-white tracking-tight leading-none mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-medium font-sans max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Dynamic Zoom Viewport - 4:3 on Medium & Large Screens */}
        <div className="max-w-4xl mx-auto px-2 sm:px-6 relative">
          <div 
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseDown={() => setIsZoomed(true)}
            onMouseUp={() => setIsZoomed(false)}
            onTouchStart={() => setIsZoomed(true)}
            onTouchEnd={() => setIsZoomed(false)}
            className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-[#fcfcfd] dark:bg-neutral-900 shadow-xl dark:shadow-black/40 cursor-zoom-in select-none"
          >
            {/* LAYER 1: The Low-Resolution/Blurry Base Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
              <motion.img
                src={images[activeIndex]}
                animate={{
                  scale: isZoomed ? 2.2 : 1.0,
                  x: isZoomed ? `${(50 - boxCoords.x) * 1.2}%` : '0%',
                  y: isZoomed ? `${(50 - boxCoords.y) * 1.2}%` : '0%',
                  filter: isZoomed 
                    ? 'blur(5px) brightness(0.92) contrast(0.94) saturate(0.85)' 
                    : 'blur(1.5px) brightness(0.96) contrast(0.95)'
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8
                }}
                className="w-full h-full object-cover select-none pointer-events-none origin-center"
                alt="Typus AI Low-Resolution Base"
              />
            </div>

            {/* LAYER 2: The Ultra-Sharp/Clipped High-Resolution Image (Aligned exactly over base) */}
            <motion.div
              animate={{
                clipPath: isZoomed
                  ? 'inset(calc(50% - 160px) calc(50% - 160px) calc(50% - 160px) calc(50% - 160px) round 32px)'
                  : `inset(calc(${boxCoords.y}% - 110px) calc(${100 - boxCoords.x}% - 110px) calc(${100 - boxCoords.y}% - 110px) calc(${boxCoords.x}% - 110px) round 24px)`
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 20,
                mass: 0.8
              }}
              className="absolute inset-0 w-full h-full z-10 overflow-hidden pointer-events-none"
            >
              <motion.img
                src={images[activeIndex]}
                animate={{
                  scale: isZoomed ? 2.2 : 1.0,
                  x: isZoomed ? `${(50 - boxCoords.x) * 1.2}%` : '0%',
                  y: isZoomed ? `${(50 - boxCoords.y) * 1.2}%` : '0%'
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8
                }}
                className="w-full h-full object-cover select-none pointer-events-none origin-center"
                style={{ filter: 'blur(0px) contrast(1.04) brightness(1.01)' }}
                alt="Typus AI Ultra-Sharp Enhanced Render"
              />
            </motion.div>

            {/* Immersive Soft Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none z-15" />

            {/* Floating Selection Focus Box Frame */}
            <motion.div
              animate={{
                left: isZoomed ? '50%' : `${boxCoords.x}%`,
                top: isZoomed ? '50%' : `${boxCoords.y}%`,
                x: '-50%',
                y: '-50%',
                width: isZoomed ? '320px' : '220px',
                height: isZoomed ? '320px' : '220px'
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 20,
                mass: 0.8
              }}
              className="absolute rounded-[24px] sm:rounded-[32px] border border-white/70 pointer-events-none shadow-[0_0_40px_rgba(0,0,0,0.25)] z-20 flex flex-col justify-between p-3.5"
            >
              {/* Top-Left Mode Badge - Solid White Background with Black Bold Text */}
              <div className="flex justify-start">
                <div className="bg-white text-neutral-900 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase shadow-md border border-neutral-200/50">
                  {isZoomed ? t.enhanced : t.tapAndHold}
                </div>
              </div>

              {/* Bottom-Right Navigation Icon - Solid White Background with Black Icon */}
              <div className="flex justify-end">
                <div className="bg-white text-neutral-900 p-1.5 rounded-full shadow-md border border-neutral-200/50">
                  <IconArrowsMaximize size={14} strokeWidth={2.5} />
                </div>
              </div>
            </motion.div>

            {/* Left Chevron Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/80 dark:bg-black/60 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black text-neutral-800 dark:text-white rounded-full border border-neutral-200 dark:border-neutral-800 shadow-md transition-all duration-300 z-30 cursor-pointer active:scale-95 group/btn"
              aria-label="Previous image"
            >
              <IconChevronLeft size={20} className="group-hover/btn:-translate-x-0.5 transition-transform animate-none" />
            </button>

            {/* Right Chevron Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/80 dark:bg-black/60 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black text-neutral-800 dark:text-white rounded-full border border-neutral-200 dark:border-neutral-800 shadow-md transition-all duration-300 z-30 cursor-pointer active:scale-95 group/btn"
              aria-label="Next image"
            >
              <IconChevronRight size={20} className="group-hover/btn:translate-x-0.5 transition-transform animate-none" />
            </button>
          </div>
        </div>

        {/* Slide indicators and HUD info */}
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto mt-6 px-4 gap-4 text-neutral-500 dark:text-neutral-400 font-sans text-xs">
          <div className="font-mono text-[11px]">
            {t.detailsResolved}
          </div>
          
          <div className="flex gap-2.5 items-center">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  activeIndex === idx 
                    ? 'bg-neutral-950 dark:bg-white w-8 shadow-sm' 
                    : 'bg-neutral-200 dark:bg-neutral-800 w-2 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

          <div className="font-mono text-[11px] uppercase">
            {t.imageText} {activeIndex + 1} / {images.length}
          </div>
        </div>

      </div>
    </section>
  )
}
