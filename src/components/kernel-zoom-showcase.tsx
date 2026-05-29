'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconChevronLeft, IconChevronRight, IconArrowsMaximize, IconFocus2, IconX } from '@tabler/icons-react'
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
      imageText: "IMAGE",
      interactiveBtn: "🔬 Try Interactive Upscaler",
      backToPresentation: "◀ Back to Auto-Presentation"
    },
    de: {
      title: "Tippen & Halten zum Verbessern",
      subtitle: "Bewegen Sie den Mauszeiger über das Bild oder halten Sie es gedrückt, um das Typus AI Giga-Auflösungs-Upscaling zu aktivieren. Erleben Sie, wie sich CAD-Modelle in gestochen scharfe 8K-Details verwandeln.",
      zoomText: "HOVER ODER TIPPEN & HALTEN ZUM VERBESSERN",
      detailsResolved: "DETAILS AUFGELÖST: 100%",
      tapAndHold: "DRÜCKEN & HALTEN",
      enhanced: "VERBESSERT",
      imageText: "BILD",
      interactiveBtn: "🔬 Interaktiven Upscaler testen",
      backToPresentation: "◀ Zurück zur Präsentation"
    }
  }

  const t = translations[locale]

  const images = [
    'kernal-zoom/image-22070.jpg',
    'kernal-zoom/image-22072.jpg',
    'kernal-zoom/image-22073.jpg',
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [mode, setMode] = useState<'presentation' | 'interactive'>('presentation')
  const [isZoomed, setIsZoomed] = useState(false)
  const [boxCoords, setBoxCoords] = useState({ x: 50, y: 50 })
  const [containerRect, setContainerRect] = useState({ width: 960, height: 410 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Automatic Presentation Mode: switch images every 3 seconds
  useEffect(() => {
    if (mode !== 'presentation') return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [mode, images.length])

  // Monitor container bounding rect for pixel-perfect image alignment inside Focus Box
  useEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerRect({ width: rect.width, height: rect.height })
      }
    }
    updateRect()
    window.addEventListener('resize', updateRect)
    // Quick timeout to ensure ref is fully calculated after mode changes
    const timer = setTimeout(updateRect, 100)
    return () => {
      window.removeEventListener('resize', updateRect)
      clearTimeout(timer)
    }
  }, [containerRef, mode])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed || mode === 'presentation') return // Lock/disable coordinates during presentation/active zoom
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

  const handleContainerClick = () => {
    if (mode === 'presentation') {
      setMode('interactive')
      setIsZoomed(false)
      setBoxCoords({ x: 50, y: 50 }) // Center the focus box initially
    }
  }

  // Calculate pixel-perfect alignment offsets for the high-res inner image inside Focus Box
  const boxSize = isZoomed ? 320 : 220
  const boxLeft = isZoomed 
    ? (containerRect.width * 0.5 - 160) 
    : ((boxCoords.x / 100) * containerRect.width - 110)
  const boxTop = isZoomed 
    ? (containerRect.height * 0.5 - 160) 
    : ((boxCoords.y / 100) * containerRect.height - 110)

  return (
    <section className="py-20 bg-[#fcfcfd] dark:bg-neutral-950/20 border-y border-neutral-100 dark:border-neutral-900 overflow-hidden relative" id="kernel-zoom-section">
      <div className="max-w-[1600px] mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto mb-12 px-4">
          
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-normal text-black dark:text-white tracking-tight leading-none mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-medium font-sans max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Try Interactive Button (Shown outside, above the image in Presentation Mode) */}
        {mode === 'presentation' && (
          <div className="mb-8 flex justify-center">
            <button
              onClick={() => {
                setMode('interactive')
                setIsZoomed(false)
                setBoxCoords({ x: 50, y: 50 })
              }}
              className="bg-white dark:bg-neutral-900 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-black text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md transition-all duration-300 cursor-pointer active:scale-95 flex items-center gap-2"
            >
              <IconFocus2 size={16} className="text-neutral-800 dark:text-neutral-200 animate-pulse" />
              {t.interactiveBtn}
            </button>
          </div>
        )}

        {/* Dynamic Responsive Viewport Wrapper */}
        <div className="w-full relative px-2 sm:px-6">
          <motion.div 
            ref={containerRef}
            layout
            onClick={handleContainerClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => { if (mode === 'interactive') setIsZoomed(true) }}
            onMouseLeave={() => { if (mode === 'interactive') setIsZoomed(false) }}
            onMouseDown={() => { if (mode === 'interactive') setIsZoomed(true) }}
            onMouseUp={() => { if (mode === 'interactive') setIsZoomed(false) }}
            onTouchStart={() => { if (mode === 'interactive') setIsZoomed(true) }}
            onTouchEnd={() => { if (mode === 'interactive') setIsZoomed(false) }}
            className={`relative overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-black/40 select-none transition-all duration-500 w-full aspect-[4/3] max-h-[75vh] md:max-h-[80vh] rounded-none border-x-0 ${
              mode === 'presentation'
                ? 'cursor-pointer group/pres'
                : 'cursor-zoom-in'
            }`}
          >
            {/* 1. The Background Image (Slightly blurry outside the Focus Box in Interactive mode) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeIndex}
                  src={images[activeIndex]}
                  initial={{ 
                    scale: 1.0, 
                    opacity: 0, 
                    rotate: 0.01 
                  }}
                  animate={{
                    scale: mode === 'presentation' 
                      ? 1.08 // Soft auto zoom during 3s slide
                      : isZoomed ? 2.2 : 1.0, // Manual Focus Box Zoom
                    x: mode === 'interactive' && isZoomed ? `${(50 - boxCoords.x) * 1.2}%` : '0%',
                    y: mode === 'interactive' && isZoomed ? `${(50 - boxCoords.y) * 1.2}%` : '0%',
                    opacity: 1,
                    filter: mode === 'interactive' && isZoomed 
                      ? 'blur(2.0px) contrast(0.92) brightness(0.92)' // Blurred & dimmed outside in active zoom
                      : mode === 'interactive' 
                        ? 'blur(0.5px) contrast(0.96)' 
                        : 'blur(0px) contrast(1.0)'
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    scale: { 
                      duration: mode === 'presentation' ? 3 : 0.45, 
                      ease: mode === 'presentation' ? 'linear' : 'easeOut' 
                    },
                    x: { type: 'spring', stiffness: 120, damping: 20, mass: 0.8 },
                    y: { type: 'spring', stiffness: 120, damping: 20, mass: 0.8 },
                    opacity: { duration: 0.5 }
                  }}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none origin-center"
                  alt="Typus AI Giga-Resolution Render"
                />
              </AnimatePresence>
            </div>

            {/* Immersive Soft Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

            {/* Presentation Mode: Container click switch active only */}

            {/* 2. Interactive Mode: Floating Selection Focus Box with Perfectly-Aligned Clear Foreground Image inside */}
            {mode === 'interactive' && (
              <motion.div
                animate={{
                  left: isZoomed ? '50%' : `${boxCoords.x}%`,
                  top: isZoomed ? '50%' : `${boxCoords.y}%`,
                  x: '-50%',
                  y: '-50%',
                  width: isZoomed ? `${boxSize}px` : `${boxSize}px`,
                  height: isZoomed ? `${boxSize}px` : `${boxSize}px`,
                  borderColor: isZoomed ? 'rgba(255, 255, 255, 1.0)' : 'rgba(255, 255, 255, 0.8)'
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8
                }}
                className="absolute rounded-[24px] sm:rounded-[32px] border-2 pointer-events-none shadow-[0_0_40px_rgba(0,0,0,0.25)] z-20 flex flex-col justify-between p-3.5 overflow-hidden"
              >
                {/* 3. Fully Clear/Sharp Image inside the Focus Box aligned pixel-perfectly with background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 rounded-[22px] sm:rounded-[30px] bg-neutral-900 pointer-events-none">
                  <motion.img
                    src={images[activeIndex]}
                    animate={{
                      scale: isZoomed ? 2.2 : 1.0,
                      x: isZoomed ? `${(50 - boxCoords.x) * 1.2}%` : '0%',
                      y: isZoomed ? `${(50 - boxCoords.y) * 1.2}%` : '0%',
                      left: -boxLeft,
                      top: -boxTop,
                      filter: 'blur(0px) contrast(1.04) brightness(1.01)' // Razor-sharp, enhanced details inside Focus Box!
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 120,
                      damping: 20,
                      mass: 0.8
                    }}
                    style={{
                      width: containerRect.width,
                      height: containerRect.height,
                      position: 'absolute',
                      maxWidth: 'none',
                    }}
                    className="object-cover select-none pointer-events-none origin-center"
                    alt="Upscaled Details"
                  />
                </div>

                {/* Top-Left Mode Badge - Solid White Background with Black Bold Text */}
                <div className="flex justify-start">
                  <div className="bg-white text-neutral-900 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase shadow-md border border-neutral-200/50 flex items-center gap-1.5">
                    {isZoomed && <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-black animate-ping" />}
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
            )}

            {/* Mode Controls: Return to Presentation Button */}
            {mode === 'interactive' && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setMode('presentation')
                }}
                className="absolute top-4 right-4 bg-white/95 text-neutral-950 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-lg border border-neutral-200/80 hover:bg-neutral-950 hover:text-white transition-all duration-300 z-30 cursor-pointer active:scale-95 flex items-center gap-1.5"
              >
                <IconX size={14} strokeWidth={2.5} />
                {t.backToPresentation}
              </button>
            )}

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

           
          </motion.div>
        </div>

        {/* Slide Indicators and HUD Info Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto mt-6 px-4 gap-4 text-neutral-500 dark:text-neutral-400 font-sans text-xs">
          <div className="font-mono text-[11px] uppercase tracking-wider">
            {t.detailsResolved}
          </div>
          
          {/* Exact clean indicator matches (dash active, dots inactive) */}
          <div className="flex gap-2.5 items-center">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  activeIndex === idx 
                    ? 'bg-neutral-800 dark:bg-white w-6 shadow-sm' 
                    : 'bg-neutral-300 dark:bg-neutral-800 w-1.5 hover:bg-neutral-400'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

          <div className="font-mono text-[11px] uppercase tracking-wider">
            {t.imageText} {activeIndex + 1} / {images.length}
          </div>
        </div>

      </div>
    </section>
  )
}
