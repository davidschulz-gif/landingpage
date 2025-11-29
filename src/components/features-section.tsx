'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { BreathingAnimationText } from './breathing-animation-text'

interface Feature {
  imagePath: string
  titleKey: string
  descriptionKey: string
  delay: number
}

const features: Feature[] = [
  {
    imagePath: '/features/3_health.png',
    titleKey: 'health',
    descriptionKey: 'healthDesc',
    delay: 0.1,
  },
  {
    imagePath: '/features/4_education.png',
    titleKey: 'education',
    descriptionKey: 'educationDesc',
    delay: 0.2,
  },
  {
    imagePath: '/features/5_equality.png',
    titleKey: 'equality',
    descriptionKey: 'equalityDesc',
    delay: 0.3,
  },
  {
    imagePath: '/features/7_clean_energy.png',
    titleKey: 'cleanEnergy',
    descriptionKey: 'cleanEnergyDesc',
    delay: 0.4,
  },
  {
    imagePath: '/features/8_decent_work.png',
    titleKey: 'decentWork',
    descriptionKey: 'decentWorkDesc',
    delay: 0.5,
  },
  {
    imagePath: '/features/9_industry_infrastructure.png',
    titleKey: 'industryInfrastructure',
    descriptionKey: 'industryInfrastructureDesc',
    delay: 0.6,
  },
  {
    imagePath: '/features/10_inequality.png',
    titleKey: 'inequality',
    descriptionKey: 'inequalityDesc',
    delay: 0.7,
  },
  {
    imagePath: '/features/11_cities_municipalities.png',
    titleKey: 'citiesMunicipalities',
    descriptionKey: 'citiesMunicipalitiesDesc',
    delay: 0.8,
  },
  {
    imagePath: '/features/13_climate_protection.png',
    titleKey: 'climateProtection',
    descriptionKey: 'climateProtectionDesc',
    delay: 0.9,
  },
]

export const FeaturesSection = () => {
  const t = useTranslations('Features')

  return (
    <section className='relative mx-auto flex max-w-[100%] md:max-w-[70%] w-full flex-col px-4 py-12 md:py-16 text-neutral-800 dark:text-neutral-200'>
      {/* Section Header */}
      <motion.div
        className='mb-8 md:mb-10 text-center'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <BreathingAnimationText animationType='black-gray'>
          <h2 className='mb-3 md:mb-4 text-xl md:text-2xl font-semibold !leading-tight text-neutral-800 dark:text-neutral-200'>
            <span className='text-black dark:text-white font-semibold'>
              {t('introTitle')}
            </span>
          </h2>
        </BreathingAnimationText>
        <motion.div
          className='mx-auto text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 md:max-w-4xl'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <p>{t('introText1')}</p>
          <p>{t('introText2')}</p>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4'>
        {features.map((feature, index) => {
          return (
            <motion.div
              key={index}
              className='group relative flex overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 h-full'
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
              {/* Image Section - Half Size */}
              <div className='relative w-16 md:w-20 flex-shrink-0 h-20'>
                <img
                  src={feature.imagePath}
                  alt={t(feature.titleKey)}
                  className='object-cover w-full h-full transition-all duration-300 group-hover:scale-105'
                />
              </div>

              {/* Content Section */}
              <div className='flex-1 p-3 md:p-4 flex flex-col'>
                <h3 className='mb-1.5 md:mb-2 text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-100 leading-tight line-clamp-1'>
                  {t(feature.titleKey)}
                </h3>
                <p className='text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed'>
                  {t(feature.descriptionKey)}
                </p>
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
