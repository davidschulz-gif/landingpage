'use client'
import { BreathingAnimationText } from '@/components/breathing-animation-text'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { motion } from 'framer-motion'
import { memo } from 'react'
import { SubCategory, TabData } from '../types'

interface NavigationPanelProps {
  tabsData: TabData[]
  activeTab: number
  currentSlide: number
  onTabClick: (tabIndex: number) => void
  onSubCategoryClick: (tabIndex: number, slideIndex: number) => void
}

const TabButton = memo(
  ({
    tab,
    tabIndex,
    isActive,
    onTabClick,
  }: {
    tab: TabData
    tabIndex: number
    isActive: boolean
    onTabClick: (tabIndex: number) => void
  }) => {
    if (isActive) {
      return (
        <motion.div
          initial={{ scale: 0.98, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='relative w-full'
        >
          <MovingBorderButton
            duration={3000}
            className='bg-white border-0 text-black flex items-center justify-between w-full p-2 shadow-lg'
            containerClassName='w-full h-auto'
            borderClassName='bg-[radial-gradient(#ff6b35_40%,#ff3636_60%)] opacity-80'
            borderRadius='0rem'
            onClick={() => onTabClick(tabIndex)}
            style={{
              background: 'white',
              boxShadow:
                '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className='flex items-center space-x-4'>
              <div className='w-10 h-10  flex items-center justify-center bg-gray-50'>
                <div className='w-3 h-3  bg-black animate-pulse'></div>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <BreathingAnimationText animationType='black-gray'>
                  <div className='font-semibold text-sm tracking-wide text-gray-900'>
                    {tab.name}
                  </div>
                </BreathingAnimationText>
                <div className='text-xs text-gray-500'>
                  {tab.subCategories?.length || 0} tools
                </div>
              </div>
            </div>
            <div className='w-6 h-6 flex items-center justify-center'>
              <div className='w-2 h-2 bg-gray-400  transition-transform duration-200'></div>
            </div>
          </MovingBorderButton>
        </motion.div>
      )
    }

    return (
      <motion.button
        onClick={() => onTabClick(tabIndex)}
        className='group relative w-full text-left transition-all duration-300 ease-out  overflow-hidden bg-gray-50/50 hover:bg-white hover:shadow-md'
        whileHover={{ scale: 1.01, y: -1 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className='flex items-center justify-between p-2'>
          <div className='flex items-center space-x-4'>
            <div className='w-10 h-10  flex items-center justify-center bg-white transition-colors duration-200'>
              <div className='w-3 h-3  bg-gray-300 group-hover:bg-gray-400 transition-colors duration-200'></div>
            </div>
            <div>
              <div className='font-semibold text-sm tracking-wide text-gray-700 group-hover:text-gray-900 transition-colors duration-200'>
                {tab.name}
              </div>
              <div className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200 mt-0.5'>
                {tab.subCategories?.length || 0} tools
              </div>
            </div>
          </div>
          <div className='w-6 h-6 flex items-center justify-center'>
            <div className='w-2 h-2 bg-gray-400 group-hover:bg-gray-600  transition-all duration-200'></div>
          </div>
        </div>
      </motion.button>
    )
  }
)

TabButton.displayName = 'TabButton'

const SubCategoryButton = memo(
  ({
    subCat,
    tabIndex,
    slideIndex,
    isActive,
    onSubCategoryClick,
  }: {
    subCat: SubCategory
    tabIndex: number
    slideIndex: number
    isActive: boolean
    onSubCategoryClick: (tabIndex: number, slideIndex: number) => void
  }) => (
    <motion.button
      onClick={() => onSubCategoryClick(tabIndex, slideIndex)}
      className={`group/sub relative w-full text-left transition-all duration-200 ease-out  overflow-hidden ${
        isActive
          ? 'text-black shadow-sm bg-white'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
      }`}
      whileHover={{
        scale: isActive ? 1 : 1.01,
        x: isActive ? 0 : 2,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.15,
        ease: 'easeOut',
      }}
    >
      <div className='flex items-center p-3 pl-4'>
        <div className='w-4 h-4  flex items-center justify-center bg-gray-100 group-hover/sub:bg-gray-200 transition-colors duration-200 mr-3'>
          <div
            className={`w-1.5 h-1.5  transition-all duration-200 ${
              isActive
                ? 'bg-black shadow-sm animate-pulse'
                : 'bg-gray-300 group-hover/sub:bg-gray-400'
            }`}
          ></div>
        </div>
        <div className='flex-1'>
          <div
            className={`text-xs font-medium transition-colors duration-200 ${
              isActive
                ? 'text-gray-900'
                : 'text-gray-600 group-hover/sub:text-gray-800'
            }`}
          >
            {subCat.name}
          </div>
        </div>
        {isActive && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className='w-1.5 h-1.5  bg-black animate-pulse'
          />
        )}
      </div>
    </motion.button>
  )
)

SubCategoryButton.displayName = 'SubCategoryButton'

export const NavigationPanel = memo(
  ({
    tabsData,
    activeTab,
    currentSlide,
    onTabClick,
    onSubCategoryClick,
  }: NavigationPanelProps) => {
    const currentTabSlides = tabsData[activeTab].slides

    return (
      <div className='hidden xl:flex flex-col justify-center py-16 w-80 pr-8'>
        <div className='relative'>
          <div className='mb-6'>
            <BreathingAnimationText animationType='black-gray'>
              <motion.h3
                className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
              >
                Features
              </motion.h3>
            </BreathingAnimationText>
            <div className='h-px bg-gradient-to-r from-gray-200 to-transparent'></div>
          </div>

          <div className='space-y-2'>
            {tabsData.map((tab, tabIndex) => {
              const isActiveTab = activeTab === tabIndex
              return (
                <div key={tab.id} className='relative'>
                  <TabButton
                    tab={tab}
                    tabIndex={tabIndex}
                    isActive={isActiveTab}
                    onTabClick={onTabClick}
                  />

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isActiveTab ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className='pt-2 pb-4 ml-6'>
                      <div className='space-y-1 relative'>
                        {tab.subCategories?.map(subCat => {
                          const slideIndex = subCat.slideId - 1
                          const isActiveSubCat =
                            currentSlide === slideIndex && isActiveTab
                          return (
                            <SubCategoryButton
                              key={subCat.id}
                              subCat={subCat}
                              tabIndex={tabIndex}
                              slideIndex={slideIndex}
                              isActive={isActiveSubCat}
                              onSubCategoryClick={onSubCategoryClick}
                            />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='mt-6 pt-4'>
            <div className='h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-200'></div>
            <div className='mt-3 px-2'>
              <BreathingAnimationText animationType='black-gray'>
                <div className='text-xs text-gray-400 font-medium'>
                  {currentTabSlides[currentSlide]?.progress ||
                    `${currentSlide + 1}/${currentTabSlides.length}`}
                </div>
              </BreathingAnimationText>
            </div>
          </div>
        </div>
      </div>
    )
  }
)

NavigationPanel.displayName = 'NavigationPanel'
