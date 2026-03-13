'use client'
import { ActionButton } from '@/components/action-button'
import { BreathingAnimationText } from '@/components/breathing-animation-text'
import { motion } from 'framer-motion'
import { memo } from 'react'
import { SlideData } from '../types'

interface ContentPanelProps {
  currentTabSlides: SlideData[]
  currentSlide: number
  scrollDirection: 'up' | 'down'
  onSlideChange: (slideIndex: number) => void
}

const SlideContent = memo(
  ({
    slide,
    isActive,
    scrollDirection,
  }: {
    slide: SlideData
    isActive: boolean
    scrollDirection: 'up' | 'down'
  }) => (
    <motion.div
      className={isActive ? 'block' : 'hidden'}
      initial={{ y: scrollDirection === 'down' ? 50 : -50 }}
      animate={{
        y: isActive ? 0 : scrollDirection === 'down' ? 50 : -50,
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <BreathingAnimationText animationType='black-gray'>
        <div className='space-y-4'>
          <motion.h1
            className='text-[30px] font-normal leading-[0.9] text-black uppercase tracking-[0.2em]'
            style={{
              fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif",
            }}
            initial={{
              y: scrollDirection === 'down' ? 30 : -30,
            }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {slide.title}
          </motion.h1>

          <motion.h2
            className='text-[18px] font-light leading-tight text-black'
            initial={{
              y: scrollDirection === 'down' ? 30 : -30,
            }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {slide.subtitle}
          </motion.h2>
        </div>

        <motion.p
          className='text-[14px] leading-relaxed max-w-2xl mt-6 text-black'
          initial={{
            y: scrollDirection === 'down' ? 30 : -30,
          }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {slide.description}
        </motion.p>
      </BreathingAnimationText>
    </motion.div>
  )
)

SlideContent.displayName = 'SlideContent'

const ProgressIndicator = memo(
  ({
    slides,
    currentSlide,
    onSlideChange,
  }: {
    slides: SlideData[]
    currentSlide: number
    onSlideChange: (slideIndex: number) => void
  }) => (
    <div className='flex items-center space-x-3 mb-8'>
      {slides.map((item, i) => (
        <button
          key={i}
          onClick={() => onSlideChange(i)}
          aria-label={item.title}
          className={`h-2  transition-all duration-500 cursor-pointer hover:opacity-80 ${
            i === currentSlide
              ? 'w-10 bg-white animate-pulse'
              : 'w-6 bg-white animate-breathe-black-gray'
          }`}
        />
      ))}
      <BreathingAnimationText animationType='black-gray'>
        <span className='text-sm ml-6 opacity-80 text-black'>
          {slides[currentSlide]?.progress ||
            `${currentSlide + 1}/${slides.length}`}
        </span>
      </BreathingAnimationText>
    </div>
  )
)

ProgressIndicator.displayName = 'ProgressIndicator'

export const ContentPanel = memo(
  ({
    currentTabSlides,
    currentSlide,
    scrollDirection,
    onSlideChange,
  }: ContentPanelProps) => {
    return (
      <div className='flex-1 flex flex-col justify-center py-16 xl:py-0 xl:pr-16'>
        <ProgressIndicator
          slides={currentTabSlides}
          currentSlide={currentSlide}
          onSlideChange={onSlideChange}
        />

        <div className='relative overflow-hidden'>
          {currentTabSlides.map((slideContent, slideIndex) => (
            <SlideContent
              key={slideContent.id}
              slide={slideContent}
              isActive={slideIndex === currentSlide}
              scrollDirection={scrollDirection}
            />
          ))}
        </div>

        <div className='mt-8 space-y-6'>
          <ActionButton href={'https://app.typus.ai/register'}>
            {currentTabSlides[currentSlide]?.buttonText || 'Get Started'}
          </ActionButton>
        </div>
      </div>
    )
  }
)

ContentPanel.displayName = 'ContentPanel'
