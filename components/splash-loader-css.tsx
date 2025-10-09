'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { useReducedMotion } from 'framer-motion'
import { memo } from 'react'

interface SplashLoaderCSSProps {
  className?: string
}

function SplashLoaderCSSComponent({ className }: SplashLoaderCSSProps) {
  const isMobile = useIsMobile()
  const shouldReduceMotion = useReducedMotion()

  // Simple CSS animation for better performance
  if (shouldReduceMotion) {
    return (
      <div className={`flex items-center justify-center ${className || ''}`}>
        <div className='w-16 h-16 bg-blue-600 rounded-full opacity-75' />
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center ${className || ''}`}>
      <div className='relative'>
        {/* Main spinner */}
        <div className='w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin md:hidden' />

        {/* Additional decorative elements for visual appeal */}
        {!isMobile && (
          <>
            <div className='absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75' />
            <div className='absolute bottom-0 right-0 w-3 h-3 bg-cyan-400 rounded-full animate-pulse' />
            <div className='absolute top-1/2 -right-2 w-2 h-2 bg-indigo-400 rounded-full animate-bounce' />
          </>
        )}
      </div>
    </div>
  )
}

export default memo(SplashLoaderCSSComponent)
