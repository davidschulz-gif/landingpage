'use client'
import { memo, useRef } from 'react'
import { ContentPanel } from './components/ContentPanel'
import { NavigationPanel } from './components/NavigationPanel'
import { ScrollIndicator } from './components/ScrollIndicator'
import { VideoPanel } from './components/VideoPanel'
import { tabsData } from './data'
import { useStickySlider } from './hooks/useStickySlider'
import { useVideoManager } from './hooks/useVideoManager'

export const StickySliderSection = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const {
    state,
    sectionInView,
    slideProgress,
    handleTabClick,
    handleSubCategoryClick,
    setCurrentSlide,
    addLoadedVideo,
  } = useStickySlider({
    containerRef,
    tabsData,
  })

  const { preloadVideo } = useVideoManager({
    tabsData,
    sectionInView,
    activeTab: state.activeTab,
    currentSlide: state.currentSlide,
    loadedVideos: state.loadedVideos,
    onVideoLoaded: addLoadedVideo,
  })

  const currentTabSlides = tabsData[state.activeTab].slides

  return (
    <div
      ref={containerRef}
      className='relative w-full max-w-[90%] md:max-w-[65%] mx-auto h-[400vh]'
    >
      <div className='sticky top-0 h-screen overflow-hidden'>
        {currentTabSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 ${slide.textColor}`}
            style={{
              opacity: state.currentSlide === index ? 1 : 0,
            }}
          >
            <div className='h-full'>
              <div className='flex flex-col xl:flex-row h-full'>
                <NavigationPanel
                  tabsData={tabsData}
                  activeTab={state.activeTab}
                  currentSlide={state.currentSlide}
                  onTabClick={handleTabClick}
                  onSubCategoryClick={handleSubCategoryClick}
                />

                <ContentPanel
                  currentTabSlides={currentTabSlides}
                  currentSlide={state.currentSlide}
                  scrollDirection={state.scrollDirection}
                  onSlideChange={setCurrentSlide}
                />

                <VideoPanel
                  currentTabSlides={currentTabSlides}
                  currentSlide={state.currentSlide}
                  sectionInView={sectionInView}
                  loadedVideos={state.loadedVideos}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ScrollIndicator
        currentTabSlides={currentTabSlides}
        currentSlide={state.currentSlide}
        isInView={state.isInView}
        onSlideChange={setCurrentSlide}
      />
    </div>
  )
})

StickySliderSection.displayName = 'StickySliderSection'
