'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { useLocale } from 'next-intl'
import { CornerSquares } from '@/components/common/corner-squares'
import { cn } from '@/lib/utils'

export const TESTIMONIAL_MONTAGE_URL =
  'https://typus-ai.s3.eu-central-1.amazonaws.com/landingpage/public/video/testimonials/Testimonials+Montage.mp4'

export interface TestimonialVideoItem {
  id: string
  name: string
  roleDe: string
  roleEn: string
  badgeDe: string
  badgeEn: string
  url: string
  thumbnail?: string
}

export const TESTIMONIAL_PLAYLIST: TestimonialVideoItem[] = [
  {
    id: 'montage',
    name: 'Testimonials Montage',
    roleDe: 'Architektur-Experten im Überblick',
    roleEn: 'Full Architect Testimonials Montage',
    badgeDe: 'Hauptvideo',
    badgeEn: 'Main Video',
    url: TESTIMONIAL_MONTAGE_URL,
  },
  {
    id: 'gaeher',
    name: 'Gäher',
    roleDe: 'Architekturbüro & Projektpraxis',
    roleEn: 'Architecture Studio & Practice',
    badgeDe: 'Interview',
    badgeEn: 'Interview',
    url: 'https://typus-ai.s3.eu-central-1.amazonaws.com/landingpage/public/video/testimonials/g%C3%A4her.mp4',
    thumbnail: '/testimonials/gaeher.png',
  },
  {
    id: 'lohse',
    name: 'Lohse',
    roleDe: 'Visualisierung & KI-Einsatz',
    roleEn: 'Visualization & AI Workflow',
    badgeDe: 'Interview',
    badgeEn: 'Interview',
    url: 'https://typus-ai.s3.eu-central-1.amazonaws.com/landingpage/public/video/testimonials/lohse.mp4',
    thumbnail: '/testimonials/lohse.png',
  },
  {
    id: 'unnewehr',
    name: 'Unnewehr',
    roleDe: 'Entwurfsplanung & Variantenvielfalt',
    roleEn: 'Design Planning & Variations',
    badgeDe: 'Interview',
    badgeEn: 'Interview',
    url: 'https://typus-ai.s3.eu-central-1.amazonaws.com/landingpage/public/video/testimonials/unnewehr.mp4',
    thumbnail: '/testimonials/unnewehr.png',
  },
  {
    id: 'klaiber',
    name: 'Klaiber',
    roleDe: 'Bauherren-Präsentation & Schnelligkeit',
    roleEn: 'Client Presentations & Speed',
    badgeDe: 'Interview',
    badgeEn: 'Interview',
    url: 'https://typus-ai.s3.eu-central-1.amazonaws.com/landingpage/public/video/testimonials/Klaiber.mp4',
    thumbnail: '/testimonials/klaiber.png',
  },
]

export interface VideoTabOption {
  label: string
  url: string
}

interface TestimonialMontageVideoProps {
  className?: string
  badge?: string
  title?: string
  subtitle?: string
  showBadge?: boolean
  showPlaylistSlider?: boolean
  videoUrl?: string
  tabs?: VideoTabOption[]
  autoPlay?: boolean
}

export function TestimonialMontageVideo({
  className,
  badge,
  title,
  subtitle,
  showBadge = true,
  showPlaylistSlider = true,
  videoUrl,
  tabs,
  autoPlay = true,
}: TestimonialMontageVideoProps) {
  const locale = useLocale()
  const isDe = locale === 'de'
  const mainContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [activeVideoId, setActiveVideoId] = useState<string>('montage')
  const [selectedTab, setSelectedTab] = useState(0)

  // Determine active video URL
  const currentItem = TESTIMONIAL_PLAYLIST.find((v) => v.id === activeVideoId) || TESTIMONIAL_PLAYLIST[0]
  const activeVideoUrl = tabs && tabs.length > 0
    ? tabs[selectedTab]?.url
    : videoUrl || currentItem.url

  const defaultBadge = isDe
    ? 'KUNDENSTIMMEN & TESTIMONIALS'
    : 'CLIENT TESTIMONIALS & REVIEWS'

  const toggleMute = () => {
    if (!videoRef.current) return
    const nextMuted = !videoRef.current.muted
    videoRef.current.muted = nextMuted
    setIsMuted(nextMuted)
    if (!nextMuted && videoRef.current.paused) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleVolumeChange = () => {
    if (videoRef.current) {
      setIsMuted(videoRef.current.muted || videoRef.current.volume === 0)
    }
  }

  const handleSelectVideo = (item: TestimonialVideoItem) => {
    setActiveVideoId(item.id)
    if (videoRef.current) {
      videoRef.current.src = item.url
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
    // Scroll smoothly to video player if user browsed down
    if (mainContainerRef.current) {
      const topOffset = mainContainerRef.current.getBoundingClientRect().top + window.scrollY - 100
      if (window.scrollY > topOffset + 300) {
        window.scrollTo({ top: topOffset, behavior: 'smooth' })
      }
    }
  }

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const offset = direction === 'left' ? -320 : 320
    sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  // Reload and play when activeVideoUrl changes (via tabs or external prop)
  useEffect(() => {
    if (videoRef.current && (tabs || videoUrl)) {
      videoRef.current.load()
      if (autoPlay) {
        videoRef.current.play().catch(() => {})
      }
    }
  }, [activeVideoUrl, autoPlay, tabs, videoUrl])

  return (
    <div ref={mainContainerRef} className={cn('w-full flex flex-col items-center', className)}>
      {/* Optional Badge & Header */}
      {(showBadge || title || subtitle) && (
        <div className="text-center mb-3 sm:mb-4 max-w-2xl px-4">
          {showBadge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 shadow-xs mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span
                className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-800 dark:text-neutral-200 font-semibold"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                {badge || defaultBadge}
              </span>
            </div>
          )}
          {title && (
            <h3
              className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-900 dark:text-white leading-tight"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Optional Video Tabs Switcher (e.g. for Hersteller page) */}
      {tabs && tabs.length > 1 && (
        <div className="flex justify-center mb-4 relative z-20">
          <div className="p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-full inline-flex">
            {tabs.map((tab, idx) => (
              <button
                key={tab.url}
                onClick={() => setSelectedTab(idx)}
                type="button"
                className={cn(
                  'px-3.5 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer',
                  selectedTab === idx
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white'
                )}
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Video Container Box */}
      <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-black shadow-2xl group">
        <CornerSquares />

        <div className="relative aspect-video w-full bg-black">
          <video
            ref={videoRef}
            src={activeVideoUrl}
            poster={currentItem.thumbnail}
            autoPlay={autoPlay}
            loop
            muted={isMuted}
            playsInline
            controls
            preload="metadata"
            onVolumeChange={handleVolumeChange}
            className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
          />

          {/* Floating Sound Toggle Pill */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 pointer-events-auto">
            <button
              onClick={toggleMute}
              type="button"
              className={cn(
                'flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg text-xs font-semibold uppercase tracking-wider cursor-pointer border',
                isMuted
                  ? 'bg-black/80 hover:bg-black text-white border-white/20 animate-pulse'
                  : 'bg-white/90 hover:bg-white text-black border-black/10'
              )}
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-red-400" />
                  <span className="inline">
                    {isDe ? 'Ton an' : 'Sound On'}
                  </span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-500" />
                  <span className="inline">
                    {isDe ? 'Ton aus' : 'Mute'}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── SLIDER FOR THE OTHER VIDEOS ── */}
      {showPlaylistSlider && (
        <div className="w-full mt-6 sm:mt-8">
          {/* Slider Header with Title and Scroll Arrows */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span
                className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                {isDe ? 'Alle Kundenstimmen & Interviews' : 'All Architect Testimonials & Interviews'}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollSlider('left')}
                className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
                aria-label="Previous videos"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlider('right')}
                className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
                aria-label="Next videos"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Horizontal Slider */}
          <div
            ref={sliderRef}
            className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto pb-3 pt-1 px-1 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIAL_PLAYLIST.map((item) => {
              const isActive = activeVideoId === item.id

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectVideo(item)}
                  className={cn(
                    'group relative w-[220px] sm:w-[260px] md:w-[280px] shrink-0 snap-start flex flex-col rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer text-left select-none',
                    isActive
                      ? 'border-black dark:border-white shadow-md ring-2 ring-black/10 dark:ring-white/20 bg-neutral-50 dark:bg-neutral-900'
                      : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-700 hover:-translate-y-0.5 shadow-xs hover:shadow-md'
                  )}
                >
                  {/* Thumbnail Video Preview with Aspect Ratio */}
                  <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden">
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 280px"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                      />
                    ) : (
                      <video
                        src={`${item.url}#t=0.5`}
                        preload="metadata"
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Center Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className={cn(
                          'w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md',
                          isActive
                            ? 'bg-black text-white dark:bg-white dark:text-black scale-105'
                            : 'bg-white/80 dark:bg-black/80 text-black dark:text-white group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-white dark:group-hover:text-black'
                        )}
                      >
                        <Play className="w-4 h-4 ml-0.5 fill-current" />
                      </div>
                    </div>

                    {/* Badge: e.g. "Hauptvideo" / "Interview" */}
                    <div className="absolute top-2 left-2 z-10 pointer-events-none">
                      <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                        {isDe ? item.badgeDe : item.badgeEn}
                      </span>
                    </div>

                    {/* Playing Indicator */}
                    {isActive && (
                      <div className="absolute bottom-2 left-2 z-10 pointer-events-none flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>{isDe ? 'Aktiv' : 'Now Playing'}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Details */}
                  <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1">
                    <div>
                      <h4
                        className={cn(
                          'text-xs sm:text-sm font-semibold truncate',
                          isActive ? 'text-black dark:text-white' : 'text-neutral-800 dark:text-neutral-200'
                        )}
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      >
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                        {isDe ? item.roleDe : item.roleEn}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                      <span>{isDe ? 'Video abspielen' : 'Watch Video'}</span>
                      <Play className="w-2.5 h-2.5 fill-current" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
