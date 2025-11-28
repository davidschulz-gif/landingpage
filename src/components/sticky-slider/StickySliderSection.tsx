'use client'
import { useTranslations } from 'next-intl'
import { memo, useMemo, useRef } from 'react'
import { ContentPanel } from './components/ContentPanel'
import { NavigationPanel } from './components/NavigationPanel'
import { ScrollIndicator } from './components/ScrollIndicator'
import { VideoPanel } from './components/VideoPanel'
import { tabsData } from './data'
import { useStickySlider } from './hooks/useStickySlider'
import { useVideoManager } from './hooks/useVideoManager'
import { TabData } from './types'

export const StickySliderSection = memo(() => {
  const t = useTranslations('StickySlider')
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Translate tabs data
  const translatedTabsData = useMemo<TabData[]>(() => {
    return tabsData.map((tab, tabIndex) => {
      const tabKey =
        tabIndex === 0 ? 'creator' : tabIndex === 1 ? 'editor' : 'upscaler'

      return {
        ...tab,
        name: t(`tabs.${tabKey}`),
        subCategories: tab.subCategories?.map((subCat, subIndex) => {
          let subKey = ''
          let translationPath = ''
          if (tabIndex === 0) {
            // Creator subcategories
            const keys = [
              'sketch',
              'model3d',
              'cad',
              'sitephoto',
              'modelPhoto',
              'colorMap',
              'artPresets',
            ]
            subKey = keys[subIndex] || ''
            translationPath = `creator.${subKey}`
          } else if (tabIndex === 1) {
            // Editor subcategories
            const keys = ['inpaint', 'outpaint', 'addStyle']
            subKey = keys[subIndex] || ''
            translationPath = `editor.${subKey}`
          } else {
            // Upscaler subcategories
            subKey = 'enhanceDetails'
            translationPath = `upscaler.${subKey}`
          }
          return {
            ...subCat,
            name: translationPath
              ? t(translationPath) || subCat.name
              : subCat.name,
          }
        }),
        slides: tab.slides.map((slide, slideIndex) => {
          let slideKey = ''
          if (tabIndex === 0) {
            // Creator slides
            const keys = [
              'sketch',
              'model3d',
              'cad',
              'sitephoto',
              'modelPhoto',
              'colorMap',
              'artPresets',
            ]
            slideKey = keys[slideIndex] || ''
            return {
              ...slide,
              title: t(`creator.slides.${slideKey}.title`) || slide.title,
              subtitle:
                t(`creator.slides.${slideKey}.subtitle`) || slide.subtitle,
              description:
                t(`creator.slides.${slideKey}.description`) ||
                slide.description,
              buttonText:
                t(`creator.slides.${slideKey}.button`) || slide.buttonText,
            }
          } else if (tabIndex === 1) {
            // Editor slides
            const keys = ['inpaint', 'outpaint', 'addStyle']
            slideKey = keys[slideIndex] || ''
            return {
              ...slide,
              title: t(`editor.slides.${slideKey}.title`) || slide.title,
              subtitle:
                t(`editor.slides.${slideKey}.subtitle`) || slide.subtitle,
              description:
                t(`editor.slides.${slideKey}.description`) || slide.description,
              buttonText:
                t(`editor.slides.${slideKey}.button`) || slide.buttonText,
            }
          } else {
            // Upscaler slides
            return {
              ...slide,
              title: t('upscaler.slides.enhance.title') || slide.title,
              subtitle: t('upscaler.slides.enhance.subtitle') || slide.subtitle,
              description:
                t('upscaler.slides.enhance.description') || slide.description,
              buttonText:
                t('upscaler.slides.enhance.button') || slide.buttonText,
            }
          }
        }),
      }
    })
  }, [t])

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
    tabsData: translatedTabsData,
  })

  const { preloadVideo } = useVideoManager({
    tabsData: translatedTabsData,
    sectionInView,
    activeTab: state.activeTab,
    currentSlide: state.currentSlide,
    loadedVideos: state.loadedVideos,
    onVideoLoaded: addLoadedVideo,
  })

  const currentTabSlides = translatedTabsData[state.activeTab].slides

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
                  tabsData={translatedTabsData}
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
