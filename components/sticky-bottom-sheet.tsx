'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { TrustedBySection } from './trusted-by-section'

interface StickyBottomSheetProps {
  showOnlyInHero?: boolean
}

export const StickyBottomSheet = ({
  showOnlyInHero = false,
}: StickyBottomSheetProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroSection = document.querySelector('[data-hero-section]')
      const heroHeight = heroSection?.getBoundingClientRect().height || 0

      if (showOnlyInHero) {
        // Hide on scroll down in hero section
        if (currentScrollY < heroHeight - 200) {
          setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 100)
        } else {
          setIsVisible(false)
        }
      } else {
        // Original scroll behavior
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setIsVisible(false)
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, showOnlyInHero])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className='fixed bottom-0 left-0 right-0 z-50 bg-transparent'
        >
          <div className='relative'>
            <button
              onClick={handleClose}
              aria-label='Close'
              className='absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white/90 rounded-full shadow-sm transition-all duration-200'
            >
              <X className='w-4 h-4 text-gray-600' />
            </button>
            <TrustedBySection />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
