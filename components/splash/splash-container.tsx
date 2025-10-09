'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface SplashContainerProps {
  slideOut: boolean
  className?: string
  children: React.ReactNode
}

export function SplashContainer({
  slideOut,
  className,
  children,
}: SplashContainerProps) {
  const isMobile = useIsMobile()

  const containerStyle = useMemo(
    () => ({
      willChange: isMobile ? 'auto' : 'transform',
      background: '#f0f0f0',
      ...(isMobile && {
        // Mobile-specific optimizations
        transform: 'translateZ(0)', // Force hardware acceleration
        backfaceVisibility: 'hidden' as const,
      }),
    }),
    [isMobile]
  )

  return (
    <motion.div
      className={cn(
        'fixed inset-0 z-[1001]',
        'motion-reduce:transition-none',
        className
      )}
      initial={{ y: '0%' }}
      animate={{ y: slideOut ? '-100%' : '0%' }}
      transition={{
        duration: isMobile ? 0.2 : 0.3,
        ease: 'easeInOut',
      }}
      style={containerStyle}
    >
      {children}
    </motion.div>
  )
}
