import { useCallback, useEffect, useRef, useState } from 'react'

// Optimized scroll hook to reduce performance impact
export const useOptimizedScroll = (
  callback: (scrollY: number) => void,
  delay = 16
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastScrollY = useRef(0)

  const throttledCallback = useCallback(
    (scrollY: number) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        // Only call callback if scroll position changed significantly
        if (Math.abs(scrollY - lastScrollY.current) > 1) {
          callback(scrollY)
          lastScrollY.current = scrollY
        }
      }, delay)
    },
    [callback, delay]
  )

  useEffect(() => {
    const handleScroll = () => {
      throttledCallback(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [throttledCallback])

  return throttledCallback
}

// Hook to reduce animation calculations when not in viewport
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}
