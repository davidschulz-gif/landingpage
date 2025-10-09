'use client'
import { motion } from 'framer-motion'
import { memo } from 'react'
import { SlideData } from '../types'

interface VideoPanelProps {
  currentTabSlides: SlideData[]
  currentSlide: number
  sectionInView: boolean
  loadedVideos: Set<string>
}

const VideoSlide = memo(
  ({
    slide,
    isActive,
    sectionInView,
    loadedVideos,
  }: {
    slide: SlideData
    isActive: boolean
    sectionInView: boolean
    loadedVideos: Set<string>
  }) => (
    <motion.div
      className='absolute inset-0 flex items-center justify-center'
      initial={{ y: '-100%' }}
      animate={{
        y: isActive ? '0%' : '-100%',
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        opacity: isActive ? 1 : 0,
      }}
    >
      {sectionInView && loadedVideos.has(slide.video) ? (
        <video
          className='w-96 h-96 rounded-2xl object-cover'
          playsInline
          loop
          autoPlay
          muted
          preload='metadata'
          onError={e => {
            console.warn('Video failed to load:', slide.video)
            e.currentTarget.style.display = 'none'
          }}
        >
          <source src={slide.video} type='video/webm' />
          <source src={slide.video.replace('.webm', '.mp4')} type='video/mp4' />
        </video>
      ) : (
        <div className='w-96 h-96 rounded-2xl bg-gray-200 animate-pulse flex items-center justify-center'>
          <div className='text-gray-500 text-sm'>Loading...</div>
        </div>
      )}
    </motion.div>
  )
)

VideoSlide.displayName = 'VideoSlide'

export const VideoPanel = memo(
  ({
    currentTabSlides,
    currentSlide,
    sectionInView,
    loadedVideos,
  }: VideoPanelProps) => {
    return (
      <div className='flex items-center justify-center py-16 xl:py-0 relative overflow-hidden'>
        <div className='relative w-96 h-96 flex items-center justify-center'>
          {currentTabSlides.map((slideContent, slideIndex) => (
            <VideoSlide
              key={slideContent.id}
              slide={slideContent}
              isActive={slideIndex === currentSlide}
              sectionInView={sectionInView}
              loadedVideos={loadedVideos}
            />
          ))}
        </div>
      </div>
    )
  }
)

VideoPanel.displayName = 'VideoPanel'
