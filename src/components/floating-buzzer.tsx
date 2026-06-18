'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { BarChart3, PhoneCall } from 'lucide-react'

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

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-before-you-go'))
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className='fixed bottom-[100px] md:bottom-10 right-0 z-[999] w-full max-w-fit px-4 flex justify-center'
        >
          <motion.button
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, -2, 2, -2, 2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 10,
              ease: "easeInOut"
            }}
            onClick={handleClick}
            className="z-[9999] rounded-2xl p-4 border border-neutral-800 hover:shadow-2xl transition-all duration-300 ease-out flex items-center group bg-white/90 shadow-lg backdrop-blur-md text-black cursor-pointer overflow-hidden origin-right animate-pulse-glow"
            style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
            aria-label={t('text')}
          >
            <PhoneCall className="w-8 h-8 shrink-0 text-black transition-transform duration-300 group-hover:scale-110" />
            <span className="relative font-bold text-sm md:text-base uppercase tracking-widest whitespace-nowrap overflow-hidden max-w-0 opacity-0 group-hover:max-w-[1200px] group-hover:opacity-100 transition-all duration-500 ease-in-out pl-0 group-hover:pl-4">
              {t('text')}
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
