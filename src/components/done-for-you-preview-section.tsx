'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { BreathingAnimationText } from './breathing-animation-text'

export const DoneForYouPreviewSection = () => {
  const t = useTranslations('BilderFlatrate.preview')
  return (
    <section className='relative w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900 py-16 md:py-24 border-y border-neutral-200 dark:border-neutral-800 my-10'>
      <div className='relative mx-auto max-w-7xl px-4 md:px-6 z-10'>
        <div className='flex flex-collg:flex-row items-center justify-between gap-10 lg:gap-20'>
          
          <motion.div 
            className='flex-1 text-center md:text-left space-y-6 max-w-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 p-8 md:p-12 shadow-sm mx-auto'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className='inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400'>
              {t('badge')}
            </div>
            
            <BreathingAnimationText animationType='black-gray'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight'>
                {t('title')}
              </h2>
            </BreathingAnimationText>
            
            <p className='text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium mt-4'>
              {t('subtitle')}
            </p>
            
            <div className='pt-6'>
              <Link href='/done-for-you'>
                <button className='group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-black px-8 py-4 font-medium text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>
                  <span className='relative z-10'>{t('button')}</span>
                  <ArrowRight className='relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1' />
                </button>
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Background decoration */}
      <div className='absolute left-0 top-0 -z-10 h-full w-full overflow-hidden'>
        <div className='absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-gradient-to-br from-gray-200/50 to-transparent blur-3xl opacity-50 dark:from-neutral-800/50' />
        <div className='absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-gradient-to-tl from-gray-200/50 to-transparent blur-3xl opacity-50 dark:from-neutral-800/50' />
      </div>
    </section>
  )
}
