'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Mail, X } from 'lucide-react'
import HeroEmailForm from './hero-email-form'

export function FloatingEmailBuzzer() {
  const [isOpen, setIsOpen] = useState(false)
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
    <div className='fixed bottom-15 left-15 z-[999]'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, originX: 0, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.1 }}
            className='absolute bottom-20 left-0 bg-white dark:bg-black p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-neutral-200 dark:border-neutral-800 w-[400px] max-w-[calc(100vw-40px)]'
            ref={popupRef}
          >
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-4 right-4 text-neutral-400 hover:text-black dark:hover:text-white transition-colors'
            >
              <X className='w-5 h-5' />
            </button>
            <div className='mt-2'>
              <HeroEmailForm showFeatures={false} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        animate={{
          scale: isOpen ? 1 : [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut"
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="z-[9999] rounded-3xl p-4 border border-neutral-200 dark:border-neutral-800 hover:shadow-2xl transition-all duration-300 ease-out flex items-center justify-center bg-[#f2f2f2] dark:bg-neutral-900 shadow-lg backdrop-blur-md text-black dark:text-white cursor-pointer animate-pulse-glow"
      >
        <Mail className="w-8 h-8 text-black dark:text-white" strokeWidth={1.5} />
      </motion.button>
    </div>
  )
}
