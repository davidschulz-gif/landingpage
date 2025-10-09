'use client'
import { useCallback, useEffect, useRef } from 'react'
import { TabData } from '../types'

// Video cache for performance - moved outside component to persist across renders
const videoCache = new Map<string, HTMLVideoElement>()

interface UseVideoManagerProps {
  tabsData: TabData[]
  sectionInView: boolean
  activeTab: number
  currentSlide: number
  loadedVideos: Set<string>
  onVideoLoaded: (videoSrc: string) => void
}

export function useVideoManager({
  tabsData,
  sectionInView,
  activeTab,
  currentSlide,
  loadedVideos,
  onVideoLoaded,
}: UseVideoManagerProps) {
  const preloadTimeoutRef = useRef<NodeJS.Timeout[]>([])

  const preloadVideo = useCallback(
    (src: string) => {
      if (videoCache.has(src) || loadedVideos.has(src)) return

      const video = document.createElement('video')
      video.preload = 'metadata'
      video.src = src
      video.load()

      video.addEventListener('loadedmetadata', () => {
        videoCache.set(src, video)
        onVideoLoaded(src)
      })

      video.addEventListener('error', () => {
        console.warn(`Failed to load video: ${src}`)
      })
    },
    [loadedVideos, onVideoLoaded]
  )

  // Preload videos when section comes into view
  useEffect(() => {
    if (!sectionInView) return

    // Load current slide video first
    const currentVideo = tabsData[activeTab]?.slides[currentSlide]?.video
    if (currentVideo) {
      preloadVideo(currentVideo)
    }

    // Preload other videos with delay to avoid blocking
    const allVideos = tabsData.flatMap(tab =>
      tab.slides.map(slide => slide.video)
    )

    // Clear previous timeouts
    preloadTimeoutRef.current.forEach(clearTimeout)
    preloadTimeoutRef.current = []

    const timeouts = allVideos.map((video, index) =>
      setTimeout(() => preloadVideo(video), index * 300)
    )

    preloadTimeoutRef.current = timeouts

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [sectionInView, activeTab, currentSlide, preloadVideo, tabsData])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      preloadTimeoutRef.current.forEach(clearTimeout)
    }
  }, [])

  const getVideoElement = useCallback((src: string) => {
    return videoCache.get(src)
  }, [])

  return {
    preloadVideo,
    getVideoElement,
  }
}
