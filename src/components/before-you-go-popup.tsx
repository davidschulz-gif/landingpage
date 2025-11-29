'use client'

import { IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import HeroEmailForm from './hero-email-form'

export default function BeforeYouGoPopup() {
  const t = useTranslations('BeforeYouGo')
  const tFooter = useTranslations('Footer')
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const scrollThreshold = 0.8

  // Check if popup has been shown before (localStorage)
  useEffect(() => {
    const hasShownBefore = localStorage.getItem('beforeYouGoShown')
    if (hasShownBefore === 'true') {
      setHasShown(true)
    }
  }, [])

  // Trigger after 10 seconds
  useEffect(() => {
    if (hasShown) return

    timeoutRef.current = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true)
        setHasShown(true)
        localStorage.setItem('beforeYouGoShown', 'true')
      }
    }, 10000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [hasShown])

  // Trigger after scrolling 80% of the page
  useEffect(() => {
    if (hasShown) return

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const scrollTop = window.scrollY
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight

      if (scrollPercentage >= scrollThreshold && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
        localStorage.setItem('beforeYouGoShown', 'true')
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasShown, scrollThreshold])

  // Trigger when mouse leaves viewport (intending to leave)
  useEffect(() => {
    if (hasShown) return

    const handleMouseMove = (e: MouseEvent) => {
      // Check if mouse is at the very top of the viewport (intending to leave)
      if (e.clientY <= 5 && e.clientY >= 0) {
        setIsOpen(true)
        setHasShown(true)
        localStorage.setItem('beforeYouGoShown', 'true')
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [hasShown])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blurred White Background */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className='fixed inset-0 z-[9999] bg-white/80'
            onClick={handleClose}
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className='fixed inset-0 z-[10000] flex items-center justify-center p-4'
            onClick={e => e.stopPropagation()}
          >
            <div className='relative bg-black p-6 md:p-8 w-[400px] h-[400px] md:w-[500px] md:h-[500px] shadow-2xl flex flex-col justify-center'>
              {/* Close Button */}
              <button
                onClick={handleClose}
                className='absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200'
                aria-label='Close popup'
              >
                <IconX size={24} />
              </button>

              {/* Content */}
              <div className='text-center'>
                <h2 className='text-2xl md:text-3xl font-light text-white mb-4 leading-relaxed'>
                  {t('title')}
                </h2>
                <div className='mb-6 flex flex-row items-center justify-center w-full'>
                  <HeroEmailForm />
                </div>
                <Link
                  href='https://app.typus.ai/data-privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xs text-white/70 hover:text-white/90 underline transition-colors duration-200'
                >
                  {tFooter('links.dataPrivacy')}
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
