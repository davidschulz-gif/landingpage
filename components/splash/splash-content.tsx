'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { motion, useReducedMotion } from 'framer-motion'
import LottieAnimationSplashScreen from '../Lottie-animation-splash-screen'

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
          {!shouldReduceMotion && <LottieAnimationSplashScreen />}
        </motion.div>
      </div>
    </div>
  )
}
