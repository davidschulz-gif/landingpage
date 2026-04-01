'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export function FloatingBuzzer() {
  const t = useTranslations('FloatingBuzzer')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show buzzer after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToBooking = () => {
    const element = document.getElementById('booking-form')
    if (element) {
      const offset = 80 // Offset for navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className='fixed bottom-10 left-1/2 -translate-x-1/2 z-[999] w-full max-w-fit px-4 flex justify-center'
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -3, 3, -3, 3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 10,
              ease: "easeInOut"
            }}
            className="z-[999] rounded-xl"
          >
            <button
              onClick={scrollToBooking}
              className='z-[9999] rounded-xl px-12 py-6 border-0 hover:shadow-2xl transition-all duration-300 ease-out font-black text-xl uppercase tracking-widest flex items-center gap-4 group bg-white/60 shadow-lg backdrop-blur-md text-black cursor-pointer animate-pulse-glow'
            >
              <span style={{ fontFamily: 'sans-serif' }} className='relative'>
                {t('text')}
              </span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
