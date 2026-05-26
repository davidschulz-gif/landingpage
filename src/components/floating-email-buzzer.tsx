'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Mail, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import HeroEmailForm from './hero-email-form'

export function FloatingEmailBuzzer() {
  const [isOpen, setIsOpen] = useState(true)
  const t = useTranslations('HeroEmailForm')
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className='fixed bottom-8 left-1/2 -translate-x-1/2 z-[999] flex flex-col items-center'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15, x: '-50%', originX: 0.5, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, y: 15, x: '-50%' }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className='absolute bottom-full mb-4 left-1/2 bg-white/95 dark:bg-neutral-950/95 p-8 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-neutral-200 dark:border-neutral-800 w-[420px] max-w-[calc(100vw-32px)] backdrop-blur-xl'
            ref={popupRef}
          >
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors'
              aria-label="Close"
            >
              <X className='w-4 h-4' />
            </button>
            <div className='mt-2'>
              <HeroEmailForm showFeatures={false} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        animate={{
          scale: isOpen ? 1 : [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut"
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="z-[9999] rounded-full px-6 py-3.5 border border-neutral-200 dark:border-neutral-800 hover:border-black  shadow-lg hover:shadow-2xl transition-all duration-300 ease-out flex items-center justify-center gap-2.5 bg-[#fcfcfd]/90 dark:bg-neutral-900/90 backdrop-blur-md text-neutral-800 dark:text-neutral-100 cursor-pointer hover:scale-105 active:scale-95 group font-medium"
      >
        <div className="relative">
          <Mail className="w-5 h-5 text-black dark:text-neutral-100 group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-100"></span>
          </span>
        </div>
        <span className="text-sm font-semibold tracking-wide" style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
          {t('learnMore')}
        </span>
      </motion.button>
    </div>
  )
}
