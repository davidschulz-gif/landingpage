'use client'

import { ActionButton } from '@/components/action-button'
import { BreathingAnimationText } from '@/components/breathing-animation-text'
import { FloatingCollage } from '@/components/done-for-you-hero-images'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export function MainHero() {
  const t = useTranslations('BilderFlatrate')
  const [currentIndex, setCurrentIndex] = useState(0)

  const titles = t.raw('hero.titles') as string[]
  const subtitles = t.raw('hero.subtitles') as string[]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [titles.length])

  return (
    <section className='relative pt-32 pb-32 md:pt-48 md:pb-48 px-4 flex flex-col items-center justify-center min-h-[70vh]'>
      {/* Floating Images Background */}
      <FloatingCollage />

      <div className='max-w-4xl mx-auto text-center space-y-8 relative z-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' as const }}
        >
          <div className='inline-flex items-center gap-3 mb-8'>
            <div className='inline-flex gap-2 items-center rounded-none border border-black bg-neutral-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-500 font-space-grotesk'>
              <span className='font-bold text-black text-sm'>{t('hero.badge')}</span>

              <div className='relative inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden font-space-grotesk rounded-none'
                style={{
                  background: 'linear-gradient(135deg, #b8860b 0%, #ffd700 35%, #fffacd 55%, #ffd700 75%, #b8860b 100%)',
                  color: '#5a3a00',
                  boxShadow: '0 0 12px rgba(255,215,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)',
                }}
              >
                <span className='relative z-10'>{t('hero.innovativeBadge')}</span>
                <span className='absolute inset-0 animate-shine' style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)', backgroundSize: '200% 100%' }} />
              </div>
            </div>
          </div>

          <BreathingAnimationText animationType='black-gray'>
            <div className='h-[120px] md:h-[180px] lg:h-[275px] relative overflow-visible flex items-center justify-center'>
              <AnimatePresence mode='wait'>
                <motion.h1
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className='text-[32px] md:text-[50px] lg:text-[64px] font-normal tracking-tight text-neutral-900 dark:text-white leading-[1.1] absolute w-full'
                  style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
                >
                  {titles[currentIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </BreathingAnimationText>

          <div className='h-[80px] md:h-[100px] relative overflow-visible flex items-center justify-center mb-10'>
            <AnimatePresence mode='wait'>
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal max-w-2xl absolute w-full'
              >
                {subtitles[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }}
          className='flex flex-col items-center gap-8'
        >
          <div className="relative z-10">
            <div className=''>
              <ActionButton href='#booking-form'>
                {t('hero.cta')}
              </ActionButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
