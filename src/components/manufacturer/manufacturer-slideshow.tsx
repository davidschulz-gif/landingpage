'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { X, ChevronLeft, ChevronRight, LayoutGrid, Maximize2 } from 'lucide-react'

// Original file names
const rawImages = [
  '0c59ccec-a782-4900-b310-0c3c1d51ab07.jpg',
  '9c582008-39e9-43bd-a10c-3b5733eb4659.jpg',
  'f50b89af-9f0f-4875-bd44-2bbf278820b8.jpg',
  'typus-airefine-image-1791274833564.jpg',
  'prediction-8av22w8k9srmw0cygz9vbkkzx8.png',
  'prediction-cecmtn8qq5rmy0cygyxrndemcg.png',
  'prediction-e76q9cvbynrmr0cygy4afb13fr.png',
  'prediction-h71ac7x22xrmw0cygxqrehwypw.png',
  'prediction-h785r30bt1rmw0cygz0sdqw32r.png',
  'prediction-hywt9y7ak1rmt0cygy18vd0dq8.png',
  'prediction-jqyf483s9drmy0cygz6rt8p08g.png',
  'prediction-pht52dcp0srmr0cygz6tjtxvmg.png',
  'prediction-rr8jrjn4hxrmy0cygys9s3ykfg.png',
  'prediction-t7258ddszxrmw0cygydtgyw62c.png',
  'prediction-vhfc3w3vjhrmt0cygyw95xmw8m.png',
  'prediction-vrz0y04cfhrmy0cygz080gmwq4.png',
]

// Generate pairs of (thumbnail, original)
const images = rawImages.map(filename => {
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'))
  return {
    thumb: `/hersteller/thumbnails/${nameWithoutExt}.webp`,
    full: `/hersteller/${filename}`
  }
})

// Split into 3 rows for 3-row staggered marquee showcase
const row1 = images.slice(0, 5)
const row2 = images.slice(5, 11)
const row3 = images.slice(11, 16)

export function ManufacturerSlideshow() {
  const locale = useLocale()
  const isDe = locale === 'de'

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isGridViewOpen, setIsGridViewOpen] = useState(false)

  // Keyboard navigation for full-screen viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') setSelectedIndex(prev => (prev !== null ? (prev + 1) % images.length : null))
      if (e.key === 'ArrowLeft') setSelectedIndex(prev => (prev !== null ? (prev - 1 + images.length) % images.length : null))
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length)
    }
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }
  }

  return (
    <div className="w-full space-y-4 my-4">
      {/* Top Header with Expand Button */}
      <div className="flex items-center justify-between px-4 max-w-7xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono">
          {isDe ? 'Visualisierungen' : 'Visualizations'} ({images.length})
        </span>
        <button
          onClick={() => setIsGridViewOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-xs cursor-pointer"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>{isDe ? 'Alle anzeigen' : 'Show All'}</span>
        </button>
      </div>

      {/* 3-Row Staggered Marquee Showcase */}
      <div className="relative w-full overflow-hidden py-2 space-y-3 bg-transparent group">
        {/* Row 1 (Moves Left) */}
        <div className="flex w-max animate-infinite-scroll gap-3 px-2 group-hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1, ...row1].map((img, idx) => {
            const originalIdx = idx % row1.length
            return (
              <div
                key={`r1-${idx}`}
                onClick={() => setSelectedIndex(originalIdx)}
                className="relative w-[240px] sm:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 shadow-sm border border-neutral-200/60 dark:border-neutral-800 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <Image
                  src={img.thumb}
                  alt="TYPUS AI Visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 320px"
                  unoptimized
                />
              </div>
            )
          })}
        </div>

        {/* Row 2 (Moves Right - Opposite Direction) */}
        <div className="flex w-max animate-infinite-scroll-reverse gap-3 px-2 group-hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2, ...row2].map((img, idx) => {
            const originalIdx = 5 + (idx % row2.length)
            return (
              <div
                key={`r2-${idx}`}
                onClick={() => setSelectedIndex(originalIdx)}
                className="relative w-[240px] sm:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 shadow-sm border border-neutral-200/60 dark:border-neutral-800 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <Image
                  src={img.thumb}
                  alt="TYPUS AI Visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 320px"
                  unoptimized
                />
              </div>
            )
          })}
        </div>

        {/* Row 3 (Moves Left) */}
        <div className="flex w-max animate-infinite-scroll gap-3 px-2 group-hover:[animation-play-state:paused]">
          {[...row3, ...row3, ...row3, ...row3].map((img, idx) => {
            const originalIdx = 11 + (idx % row3.length)
            return (
              <div
                key={`r3-${idx}`}
                onClick={() => setSelectedIndex(originalIdx)}
                className="relative w-[240px] sm:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 shadow-sm border border-neutral-200/60 dark:border-neutral-800 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <Image
                  src={img.thumb}
                  alt="TYPUS AI Visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 320px"
                  unoptimized
                />
              </div>
            )
          })}
        </div>

        <style jsx>{`
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          @keyframes infinite-scroll-reverse {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 45s linear infinite;
          }
          .animate-infinite-scroll-reverse {
            animation: infinite-scroll-reverse 45s linear infinite;
          }
        `}</style>
      </div>

      {/* Expand All / Grid View Modal */}
      {isGridViewOpen && (
        <div
          className="fixed inset-0 z-[99998] bg-black/85 backdrop-blur-md p-4 sm:p-8 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setIsGridViewOpen(false)}
        >
          <div
            className="max-w-7xl mx-auto space-y-6 pt-4 pb-12"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-white text-xl font-bold">
                  {isDe ? 'Alle Referenz-Visualisierungen' : 'All Reference Visualizations'}
                </h3>
                <p className="text-white/60 text-xs mt-0.5">
                  {isDe
                    ? 'Klicken Sie auf ein Bild, um es in voller Auflösung zu öffnen.'
                    : 'Click on any image to open it in full resolution.'}
                </p>
              </div>
              <button
                onClick={() => setIsGridViewOpen(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <div
                  key={`grid-${idx}`}
                  onClick={() => setSelectedIndex(idx)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-md hover:border-white/50 transition-all hover:scale-[1.02]"
                >
                  <Image
                    src={img.thumb}
                    alt={`TYPUS AI Ref ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full-Res Lightbox Viewer Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Header Controls */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-50 pointer-events-none">
            <span className="text-white/90 text-xs font-mono bg-black/50 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm pointer-events-auto">
              {selectedIndex + 1} / {images.length}
            </span>

            <button
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer pointer-events-auto"
              onClick={e => {
                e.stopPropagation()
                setSelectedIndex(null)
              }}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Prev button */}
          <button
            className="absolute left-4 sm:left-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-50 shadow-lg"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 sm:right-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-50 shadow-lg"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-6xl max-h-full aspect-[4/3] sm:aspect-auto sm:h-[85vh] rounded-lg overflow-hidden flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex].full}
              alt={`Full Resolution View ${selectedIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}
