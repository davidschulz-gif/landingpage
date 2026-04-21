'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { useEffect, useRef, useState } from 'react'
import {
  SplashBackground,
  SplashContainer,
  SplashContent,
  SplashFloatingElements,
  SplashLoadingBar,
} from './splash'

interface SplashScreenProps {
  className?: string
  onComplete?: () => void
  children?: React.ReactNode
}

export function SplashScreen({
  className,
  onComplete,
  children,
}: SplashScreenProps) {
  const [slideOut, setSlideOut] = useState(false)
  const [showDelegate, setShowDelegate] = useState(true)
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])
  const isMobile = useIsMobile()

  useEffect(() => {
    timeoutRefs.current.forEach(clearTimeout)
    timeoutRefs.current = []

    // Mobile-optimized splash screen timing - drastically reduced to improve SI
    const baseDelay = isMobile ? 100 : 200
    const slideDelay = isMobile ? 400 : 600
    const completeDelay = isMobile ? 500 : 700

    const t1 = setTimeout(() => setShowDelegate(false), baseDelay)
    const t2 = setTimeout(() => setSlideOut(true), slideDelay)
    const t3 = setTimeout(() => onComplete?.(), completeDelay)

    timeoutRefs.current = [t1, t2, t3]

    return () => timeoutRefs.current.forEach(clearTimeout)
  }, [onComplete, isMobile])

  return (
    <>
      {children && <div className='fixed inset-0 z-0'>{children}</div>}

      <SplashContainer slideOut={slideOut} className={className}>
        <SplashBackground>
          <SplashContent />
          <SplashFloatingElements />
        </SplashBackground>
        <SplashLoadingBar />
      </SplashContainer>
    </>
  )
}
