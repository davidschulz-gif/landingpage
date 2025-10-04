'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { motion, useReducedMotion } from 'framer-motion'

export function SplashFloatingElements() {
  const isMobile = useIsMobile()
  const shouldReduceMotion = useReducedMotion()

  // Don't render floating elements on mobile or when motion is reduced
  if (isMobile || shouldReduceMotion) {
    return null
  }

  return (
    <>
      <motion.div
        className='absolute top-20 right-20 w-4 h-4 rounded-full'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='absolute bottom-32 left-20 w-6 h-6 rounded-full'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
      <motion.div
        className='absolute top-1/3 right-1/4 w-2 h-2 rounded-full'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
      />
    </>
  )
}
