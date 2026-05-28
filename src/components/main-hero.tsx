'use client'

import { ActionButton } from '@/components/action-button'
import { BreathingAnimationText } from '@/components/breathing-animation-text'
import { FloatingCollage } from '@/components/done-for-you-hero-images'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GoogleLogo } from '@/components/icons/google-logo'
import HeroEmailForm from '@/components/hero-email-form'

export function MainHero() {
  const t = useTranslations('BilderFlatrate')
  const tHero = useTranslations('Hero')
  const locale = useLocale()
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
    <section className='relative pt-32 pb-32 md:pt-48 md:pb-48 md:pt-20 lg:pt-0 px-4 flex flex-col items-center justify-center min-h-[70vh]'>
      {/* Floating Images Background */}
      <FloatingCollage />

      <div className='max-w-4xl mx-auto text-center space-y-8 lg:pt-12 relative z-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' as const }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='mb-0 flex flex-col items-center space-y-2'
          >
            <div className='bg-black size-4'></div>
            <span
              // id='typus-logo'
              className='text-center !font-logo'
              style={{
                fontSize: '25px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                lineHeight: '1.3em',
                color: '#000',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-soyuz-grotesk)'
              }}
            >
              typus.AI
            </span>
          </motion.div>
          <div className='flex justify-center w-full mt-12 mb-8'>
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

          <BreathingAnimationText animationType='black-gray'>
            <div className='relative overflow-visible flex items-center justify-center w-full min-h-[90px] sm:min-h-[70px] md:min-h-[120px] lg:min-h-[60px]'>
              <AnimatePresence mode='wait'>
                <motion.h1
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className='text-[26px] md:text-[38px] lg:text-[35px] font-normal tracking-tight text-neutral-900 dark:text-white leading-[1.1] w-full px-4'
                  style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
                >
                  {titles[currentIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </BreathingAnimationText>

          <div className='relative overflow-visible flex items-center justify-center w-full min-h-[80px] md:min-h-[100px] mb-10 mt-6 md:mb-0 md:mt-0 lg:min-h-[80px]'>
            <AnimatePresence mode='wait'>
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='text-xl  text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal max-w-2xl w-full px-4'
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
          className='flex flex-col items-center gap-8 w-full'
        >
          <div className="relative z-10 w-full flex flex-col items-center justify-center">
            {/* Google Rating and EU Logo */}
            <div className='flex items-center justify-center gap-6 flex-col md:flex-row w-full mb-6'>
              <div className='w-auto'>
                <Link
                  href='https://www.google.com/maps/place/TYPUS.AI+formerly+YANUS.AI/@50.93654,6.9045451,662m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47bf254b60018897:0xe59bac1b8b968df2!8m2!3d50.93654!4d6.90712!16s%2Fg%2F11w9p4ttwz?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D'
                  target='_blank'
                  className='flex items-center justify-center'
                >
                  <GoogleLogo fontSize={24} className='me-4 text-black dark:text-white' />
                  <div className='flex items-center relative'>
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg
                        key={star}
                        className={`w-5 h-5 ${star <= 4
                          ? 'text-yellow-400'
                          : star === 5
                            ? 'text-gray-300'
                            : 'text-gray-300'
                          }`}
                        fill={
                          star <= 4 || (star === 5 && star <= 4.5)
                            ? 'currentColor'
                            : 'none'
                        }
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        {star === 5 ? (
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                            fill='url(#half-star-hero)'
                          />
                        ) : (
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                          />
                        )}
                      </svg>
                    ))}
                    {/* Half star for 4.5 rating */}
                    <svg
                      className='w-5 h-5 text-yellow-400 absolute pointer-events-none'
                      style={{ marginLeft: '80px' }}
                    >
                      <defs>
                        <linearGradient id='half-star-hero'>
                          <stop offset='50%' stopColor='currentColor' />
                          <stop offset='50%' stopColor='#d1d5db' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <BreathingAnimationText animationType='black-gray'>
                    <span className='ml-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                      {tHero('rating')}
                    </span>
                  </BreathingAnimationText>
                </Link>
                <BreathingAnimationText animationType='black-gray'>
                  <span className='text-xs text-gray-500 dark:text-gray-400 mt-1 block text-center'>
                    {tHero('reviewsCount')}
                  </span>
                </BreathingAnimationText>
              </div>
              <Image
                className='block w-auto h-10'
                src={
                  locale === 'de'
                    ? '/eu-kofinanziert-von-der-europaeischen-union.png'
                    : '/eu-kofinanziert-von-der-europaeischen-union-en.png'
                }
                alt=''
                style={{
                  transform: `scale(${locale === 'en' ? '2.5' : '1'})`,
                  padding: locale === 'en' ? '0 38px' : '0',
                }}
                width={200}
                height={200}
              />
            </div>

            {/* Email form with checklist */}
            <HeroEmailForm />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
