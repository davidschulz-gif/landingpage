'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { appUrl } from '@/lib/constants'

export function FloatingEmailBuzzer() {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations('HeroEmailForm')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('show-email-gate', { detail: { redirectUrl: appUrl } }))
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className='fixed bottom-8 left-0 right-0 mx-auto z-[999] flex flex-col items-center w-full max-w-xl px-4'
        >
          <motion.button
            animate={{
              scale: [1, 1.015, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
            onClick={handleClick}
            className="z-[9999] rounded-full px-5 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5.5 border-2 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out flex items-center justify-center gap-2 sm:gap-3.5 bg-[#fcfcfd]/95 dark:bg-neutral-950/95 backdrop-blur-md text-neutral-800 dark:text-neutral-100 cursor-pointer hover:scale-[1.03] active:scale-95 group font-medium w-full text-center"
          >
            <div className="relative flex-shrink-0">
              <Mail className="w-5.5 h-5.5 text-black dark:text-neutral-100 group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </div>
            <span className="text-[10px] sm:text-sm md:text-base font-bold tracking-wider uppercase leading-tight sm:leading-none" style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
              {t('learnMore')} & {t('features.viewApp')}
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
