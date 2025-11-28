// Performance utilities for the sticky slider

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Intersection Observer for better performance
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  if (typeof window === 'undefined') return null

  return new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  })
}

// Video preloading with priority
export const preloadVideoWithPriority = (
  src: string,
  priority: 'high' | 'medium' | 'low' = 'medium'
): Promise<HTMLVideoElement> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video')
    video.preload = priority === 'high' ? 'auto' : 'metadata'
    video.src = src
    video.load()

    video.addEventListener('loadedmetadata', () => {
      resolve(video)
    })

    video.addEventListener('error', () => {
      reject(new Error(`Failed to load video: ${src}`))
    })
  })
}

// Memory management for video cache
export const cleanupVideoCache = (maxSize: number = 10) => {
  const videoCache = (window as any).videoCache as Map<string, HTMLVideoElement>
  if (!videoCache) return

  if (videoCache.size > maxSize) {
    const entries = Array.from(videoCache.entries())
    const toDelete = entries.slice(0, videoCache.size - maxSize)

    toDelete.forEach(([key, video]) => {
      video.pause()
      video.src = ''
      video.load()
      videoCache.delete(key)
    })
  }
}
