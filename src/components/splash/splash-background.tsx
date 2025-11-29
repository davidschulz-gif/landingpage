'use client'

import { WavyBackground } from '@/components/ui/wavy-background'
import { useIsMobile } from '@/hooks/use-mobile'
import { ReactNode } from 'react'

interface SplashBackgroundProps {
  children: ReactNode
}

export function SplashBackground({ children }: SplashBackgroundProps) {
  const isMobile = useIsMobile()

  return (
    <div className='absolute inset-0'>
      {isMobile ? (
        <div
          className='relative w-full h-full'
          style={{ backgroundColor: '#f0f0f0' }}
        >
          {children}
        </div>
      ) : (
        <WavyBackground
          backgroundFill='#f0f0f0'
          colors={['#f0f0f0', '#ffffff']}
          waveWidth={50}
          blur={2}
          speed='fast'
          waveOpacity={0.06}
          className='relative w-full h-full'
        >
          {children}
        </WavyBackground>
      )}
    </div>
  )
}
