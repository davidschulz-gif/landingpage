'use client'
import { BreathingAnimationText } from '@/components/breathing-animation-text'
import { memo } from 'react'
import { SlideData } from '../types'

interface ScrollIndicatorProps {
  currentTabSlides: SlideData[]
  currentSlide: number
  isInView: boolean
  onSlideChange: (slideIndex: number) => void
}

export const ScrollIndicator = memo(
  ({
    currentTabSlides,
    currentSlide,
    isInView,
    onSlideChange,
  }: ScrollIndicatorProps) => {
    if (!isInView) return null

    return (
      <div className='fixed right-[12.5%] top-1/2 transform -translate-y-1/2 z-50'>
        <div className='flex flex-col items-center space-y-3'>
          {currentTabSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-2 rounded-full transition-all duration-500 cursor-pointer hover:opacity-80 ${
                index === currentSlide
                  ? 'h-10 bg-white animate-pulse'
                  : 'h-6 bg-white animate-breathe-black-gray'
              }`}
            />
          ))}
          <BreathingAnimationText animationType='black-gray'>
            <span className='text-sm mt-6 opacity-80 text-black'>
              {currentTabSlides[currentSlide]?.progress ||
                `${currentSlide + 1}/${currentTabSlides.length}`}
            </span>
          </BreathingAnimationText>
        </div>
      </div>
    )
  }
)

ScrollIndicator.displayName = 'ScrollIndicator'
