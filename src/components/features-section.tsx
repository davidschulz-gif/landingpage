'use client'

import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'
import { BreathingAnimationText } from './breathing-animation-text'

interface Feature {
  imagePath: string
  titleKey: string
  descriptionKey: string
  delay: number
}

export const FeaturesSection = () => {
  const t = useTranslations('Features')
  const locale = useLocale()
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const getFirstSentence = (text: string): string => {
    const match = text.match(/^[^.!?]+[.!?]/)
    return match ? match[0] : text.split('.')[0] + '.'
  }

  const getRemainingText = (text: string, firstSentence: string): string => {
    return text.substring(firstSentence.length).trim()
  }

  const features = useMemo(() => {
    return [
      {
        imagePath:
          locale === 'de' ? '/features/3_health.png' : '/features/en/sdg3.png',
        titleKey: 'health',
        descriptionKey: 'healthDesc',
        delay: 0.1,
      },
      {
        imagePath:
          locale === 'de'
            ? '/features/4_education.png'
            : '/features/en/sdg4.png',
        titleKey: 'education',
        descriptionKey: 'educationDesc',
        delay: 0.2,
      },
      {
        imagePath:
          locale === 'de'
            ? '/features/5_equality.png'
            : '/features/en/sdg5.png',
        titleKey: 'equality',
        descriptionKey: 'equalityDesc',
        delay: 0.3,
      },
      {
        imagePath:
          locale === 'de'
            ? '/features/7_clean_energy.png'
            : '/features/en/sdg7.png',
        titleKey: 'cleanEnergy',
        descriptionKey: 'cleanEnergyDesc',
        delay: 0.4,
      },
      {
        imagePath:
          locale === 'de'
            ? '/features/8_decent_work.png'
            : '/features/en/sdg8.png',
        titleKey: 'decentWork',
        descriptionKey: 'decentWorkDesc',
        delay: 0.5,
      },
      {
        imagePath:
          locale === 'de'
            ? '/features/9_industry_infrastructure.png'
            : '/features/en/sdg9.png',
        titleKey: 'industryInfrastructure',
        descriptionKey: 'industryInfrastructureDesc',
        delay: 0.6,
      },
      {
        imagePath:
          locale === 'de'
            ? '/features/10_inequality.png'
            : '/features/en/sdg10.png',
        titleKey: 'inequality',
        descriptionKey: 'inequalityDesc',
        delay: 0.7,
      },
      {
        imagePath:
          locale === 'de'
            ? '/features/11_cities_municipalities.png'
            : '/features/en/sdg11.png',
        titleKey: 'citiesMunicipalities',
        descriptionKey: 'citiesMunicipalitiesDesc',
        delay: 0.8,
      },
      {
        imagePath:
          locale === 'de'
            ? '/features/13_climate_protection.png'
            : '/features/en/sdg13.png',
        titleKey: 'climateProtection',
        descriptionKey: 'climateProtectionDesc',
        delay: 0.9,
      },
    ]
  }, [locale])

  return (
    <section className='relative mx-auto flex max-w-[100%] md:max-w-[70%] w-full flex-col px-4 py-12 md:py-16 text-neutral-800 dark:text-neutral-200'>
      {/* Section Header */}
      

       <div className="mb-12 relative z-10 max-w-7xl mx-auto text-left px-4">
          {/* <div className=""> */}
            <h2 className="text-2xl text-center sm:text-3xl md:text-[32px] font-normal text-black dark:text-white tracking-tight leading-none mb-4">
               {t('introTitle')}
            </h2>
            <p className="text-gray-500 text-center dark:text-neutral-400 text-sm md:text-base font-medium font-sans">
          {t('introText1')}
            </p>
            <p className="text-gray-500 text-center dark:text-neutral-400 text-sm md:text-base font-medium font-sans">
          {t('introText2')}
            </p>
          </div>


      {/* Features Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4'>
        {features.map((feature, index) => {
          const fullText = t(feature.descriptionKey)
          const firstSentence = getFirstSentence(fullText)
          const remainingText = getRemainingText(fullText, firstSentence)
          const isExpanded = expandedItems.has(index)
          const hasMoreText = remainingText.length > 0

          return (
            <motion.div
              key={index}
              className='group relative flex flex-col sm:flex-row overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 min-h-[120px] sm:min-h-[100px] w-full'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: feature.delay,
                ease: 'easeOut',
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -4 }}
            >
              {/* Image Section */}
              <div className='relative w-18 md:w-22 h-18 md:h-22 overflow-hidden'>
                <img
                  src={feature.imagePath}
                  alt={t(feature.titleKey)}
                  className='object-cover w-full h-full transition-all duration-300 group-hover:scale-105'
                />
              </div>

              {/* Content Section */}
              <div className='flex-1 p-3 md:p-4 flex flex-col min-w-0'>
                <h3 className='mb-1.5 md:mb-2 text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-100 leading-tight line-clamp-1'>
                  {t(feature.titleKey)}
                </h3>
                <div style={{ fontFamily: 'sans-serif' }} className='flex-1'>
                  <p className='text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed'>
                    {firstSentence}
                    {isExpanded && hasMoreText && <span>{remainingText}</span>}
                  </p>
                  {hasMoreText && (
                    <button
                      onClick={() => toggleExpanded(index)}
                      className='mt-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors duration-200 underline'
                    >
                      {isExpanded ? t('readLess') : t('readMore')}
                    </button>
                  )}
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
