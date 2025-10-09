'use client'
import { useInView, useScroll, useTransform } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { StickySliderState, TabData } from '../types'

interface UseStickySliderProps {
  containerRef: React.RefObject<HTMLDivElement | null>
  tabsData: TabData[]
}

export function useStickySlider({
  containerRef,
  tabsData,
}: UseStickySliderProps) {
  const [state, setState] = useState<StickySliderState>({
    activeTab: 0,
    currentSlide: 0,
    isInView: false,
    scrollDirection: 'down',
    manualTabSwitch: false,
    loadedVideos: new Set(),
  })

  const prevSlideRef = useRef(0)
  const sectionInView = useInView(containerRef, {
    once: true,
    margin: '300px',
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const totalSlides = tabsData.reduce((acc, tab) => acc + tab.slides.length, 0)
  const slideProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalSlides - 1]
  )

  // Handle scroll-based navigation
  useEffect(() => {
    const unsubscribe = slideProgress.onChange(latest => {
      if (state.manualTabSwitch) return

      const globalSlideIndex = Math.round(latest)
      let targetTab = 0
      let targetSlide = 0
      let slideCount = 0

      for (let i = 0; i < tabsData.length; i++) {
        if (globalSlideIndex < slideCount + tabsData[i].slides.length) {
          targetTab = i
          targetSlide = globalSlideIndex - slideCount
          break
        }
        slideCount += tabsData[i].slides.length
      }

      setState(prev => {
        const newState = { ...prev }

        if (targetTab !== prev.activeTab) {
          newState.activeTab = targetTab
        }

        if (targetSlide !== prev.currentSlide) {
          newState.scrollDirection =
            targetSlide > prevSlideRef.current ? 'down' : 'up'
          prevSlideRef.current = prev.currentSlide
          newState.currentSlide = targetSlide
        }

        return newState
      })
    })

    return () => unsubscribe()
  }, [slideProgress, state.manualTabSwitch, tabsData])

  // Handle scroll visibility
  useEffect(() => {
    const unsubscribeProgress = scrollYProgress.onChange(latest => {
      setState(prev => ({
        ...prev,
        isInView: latest > 0 && latest < 1,
      }))
    })

    return () => unsubscribeProgress()
  }, [scrollYProgress])

  // Reset slide when tab changes
  useEffect(() => {
    setState(prev => ({
      ...prev,
      currentSlide: 0,
      manualTabSwitch: false,
    }))
  }, [state.activeTab])

  const handleTabClick = useCallback((tabIndex: number) => {
    setState(prev => ({
      ...prev,
      manualTabSwitch: true,
      activeTab: tabIndex,
    }))
    setTimeout(() => {
      setState(prev => ({ ...prev, manualTabSwitch: false }))
    }, 100)
  }, [])

  const handleSubCategoryClick = useCallback(
    (tabIndex: number, slideIndex: number) => {
      setState(prev => ({
        ...prev,
        manualTabSwitch: true,
        activeTab: tabIndex,
        currentSlide: slideIndex,
      }))
      setTimeout(() => {
        setState(prev => ({ ...prev, manualTabSwitch: false }))
      }, 100)
    },
    []
  )

  const setCurrentSlide = useCallback((slideIndex: number) => {
    setState(prev => ({ ...prev, currentSlide: slideIndex }))
  }, [])

  const addLoadedVideo = useCallback((videoSrc: string) => {
    setState(prev => ({
      ...prev,
      loadedVideos: new Set([...prev.loadedVideos, videoSrc]),
    }))
  }, [])

  return {
    state,
    sectionInView,
    slideProgress,
    handleTabClick,
    handleSubCategoryClick,
    setCurrentSlide,
    addLoadedVideo,
  }
}
