'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { useReducedMotion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'

// Lazy load Lottie to reduce initial bundle size
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => (
    <div className='w-16 h-16 border-4 border-gray-300 border-t-blue-600  animate-spin md:hidden' />
  ),
})

interface LottieAnimationSplashScreenProps {
  className?: string
}

function LottieAnimationSplashScreenComponent({
  className,
}: LottieAnimationSplashScreenProps) {
  const isMobile = useIsMobile()
  const shouldReduceMotion = useReducedMotion()
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [animationData, setAnimationData] = useState<any>(null)

  // Lazy load animation data only when needed
  useEffect(() => {
    if (!isMobile && !shouldReduceMotion) {
      import('../../public/lottie/Loader.json')
        .then(data => {
          return setAnimationData(data.default)
        })
        .catch(() => {
          setHasError(true)
        })
    }
  }, [isMobile, shouldReduceMotion])

  // Don't render on mobile or when motion is reduced for better performance
  if (isMobile || shouldReduceMotion) {
    return (
      <div className={`flex items-center justify-center ${className || ''}`}>
        <div className='w-16 h-16 border-4 border-gray-300 border-t-blue-600  animate-spin md:hidden' />
      </div>
    )
  }

  // Optimized animation settings for performance
  const animationOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        progressiveLoad: true,
        hideOnTransparent: true,
        // Performance optimizations
        clearCanvas: false,
        context: '2d' as const,
      },
      // Performance optimizations
      renderer: 'svg' as const,
      className: 'w-full h-full',
      // Reduce animation quality on slower devices
      quality: isMobile ? 'low' : 'high',
    }),
    [isMobile]
  )

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setHasError(true)
  }, [])

  // Fallback for loading errors or when animation data is not loaded
  if (hasError || !animationData) {
    return (
      <div className={`flex items-center justify-center ${className || ''}`}>
        <div className='w-16 h-16 border-4 border-gray-300 border-t-blue-600  animate-spin md:hidden' />
      </div>
    )
  }

  return (
    <div className={`relative ${className || ''}`}>
      <Lottie
        animationData={animationData}
        {...animationOptions}
        onLoadedData={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '300px',
          maxHeight: '300px',
          margin: '0 auto',
          // GPU acceleration
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />
      {!isLoaded && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-8 h-8 border-2 border-gray-300 border-t-blue-600  animate-spin md:hidden' />
        </div>
      )}
    </div>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(LottieAnimationSplashScreenComponent)
