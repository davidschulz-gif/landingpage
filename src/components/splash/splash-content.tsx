'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { motion, useReducedMotion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Lazy load the Lottie animation for better performance
const LottieAnimationSplashScreen = dynamic(
  () => import('../Lottie-animation-splash-screen-optimized'),
  {
    ssr: false,
    loading: () => (
      <div className='w-16 h-16 border-4 border-gray-300 border-t-blue-600  animate-spin md:hidden' />
    ),
  }
)

// CSS-based fallback for better performance
const SplashLoaderCSS = dynamic(() => import('../splash-loader-css'), {
  ssr: false,
  loading: () => (
    <div className='w-16 h-16 border-4 border-gray-300 border-t-blue-600  animate-spin md:hidden' />
  ),
})

export function SplashContent() {
  const isMobile = useIsMobile()
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className='absolute inset-0'>
      <div className='h-full w-full relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: isMobile ? 0.2 : 0.3,
            ease: 'easeOut',
          }}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'
        >
          {isMobile || shouldReduceMotion ? (
            <SplashLoaderCSS />
          ) : (
            <LottieAnimationSplashScreen />
          )}
        </motion.div>
      </div>
    </div>
  )
}
