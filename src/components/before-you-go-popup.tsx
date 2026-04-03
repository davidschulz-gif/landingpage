'use client'

import { IconArrowRight, IconClock, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const TRIGGER_DELAY_MS = 30000 // Set to 30s as requested

export default function BeforeYouGoPopup() {
  const t = useTranslations('BeforeYouGo')
  const tPricing = useTranslations('Pricing')

  const [isOpen, setIsOpen] = useState(false)
  const [timerTriggered, setTimerTriggered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Initialization on mount
  useEffect(() => {
    setMounted(true)
    console.log('--- BeforeYouGoPopup Component Mounted ---')

    // Testing parameter to reset timer state if needed
    if (typeof window !== 'undefined' && window.location.search.includes('test=1')) {
      console.log('Test mode active: resetting timer state')
      setTimerTriggered(false)
    }
  }, [])

  const show = (triggerType: string) => {
    console.warn(`[BYG] Attempting to show popup - Trigger: ${triggerType}`)
    if (isOpen) {
      console.warn('[BYG] Popup already open - ignoring trigger')
      return
    }
    setIsOpen(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  // Trigger 1: 30-second timer (Only once per session/page load)
  useEffect(() => {
    if (timerTriggered || !mounted) return

    console.log(`Setting 30s timer (Delay: ${TRIGGER_DELAY_MS}ms)`)
    timeoutRef.current = setTimeout(() => {
      setTimerTriggered(true)
      show('30s Timer')
    }, TRIGGER_DELAY_MS)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [timerTriggered, mounted])

  // Trigger 2: Exit intent (Triggers every time user tries to exit viewport)
  useEffect(() => {
    if (!mounted) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Detecting exit from the viewport
      const fromTop = e.clientY <= 0 || e.pageY <= 0 || (e.relatedTarget === null && e.target === document)

      // Use console.warn for better visibility in some consoles
      console.warn('BYG Event- clientY:', e.clientY, 'fromTop:', fromTop, 'isOpen:', isOpen)

      if (fromTop) {
        show('Exit Intent (mouseleave)')
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      // If mouse is at the very top (y=0), trigger exit intent immediately
      if (e.clientY <= 0 && !isOpen) {
        console.warn('BYG Event- mousemove AT top (y=0)')
        show('Exit Intent (mousemove)')
      } else if (e.clientY < 5 && !isOpen) {
        console.warn('BYG Event- mousemove near top:', e.clientY)
      }
    }

    // Backup trigger: user switching tabs or clicking address bar
    const handleBlur = () => {
      console.warn('BYG Event- window blur (tabs/address bar)')
      // show('Window Blur') // We can enable this if mouseleave fails
    }

    // Using window instead of document for broader compatibility
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('blur', handleBlur, { passive: true })

    return () => {
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('blur', handleBlur)
    }
  }, [mounted, isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key='byg-backdrop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className='fixed inset-0 z-[999998] bg-black/90 backdrop-blur-sm'
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            key='byg-modal'
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className='fixed inset-0 z-[999999] flex items-center justify-center p-4 pointer-events-none'
          >
            <div
              className='relative w-full max-w-md pointer-events-auto overflow-hidden bg-black '
              onClick={e => e.stopPropagation()}
            >
              {/* Subtle gradient accent at top */}
              <div
                className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent'
              />

              {/* Ambient glow */}
              {/* Ambient glow removed to avoid gray */}

              {/* Close button */}
              <button
                onClick={handleClose}
                className='absolute top-4 right-4 p-1 text-white hover:text-white transition-colors duration-200 z-10'
                aria-label='Close'
              >
                <IconX size={18} strokeWidth={1.5} />
              </button>

              <div className='px-8 py-9'>
                {/* Urgency badge */}
                <div className='flex items-center gap-2 mb-6'>
                  <div
                    className='flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase border border-white text-white'
                  >
                    <IconClock size={11} strokeWidth={2} />
                    {t('badge')}
                  </div>
                </div>

                {/* Headline */}
                <h2
                  className='text-xl font-normal leading-snug mb-4 text-white tracking-tight'
                >
                  {t('title')}
                </h2>

                {/* Body */}
                <p
                  className='text-sm leading-relaxed mb-8 text-white font-normal'
                  style={{ fontFamily: 'sans-serif' }}
                >
                  {t('body')}
                </p>

                {/* Offer highlights */}
                <div
                  className='flex items-center justify-between mb-8 px-5 py-4 overflow-hidden relative bg-black border border-white'
                >
                  <div
                    className='absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,54,54,0.1),transparent_70%)]'
                  />
                  <div className='text-center relative z-10'>
                    <div className='text-3xl font-light text-white'>3</div>
                    <div style={{ fontFamily: 'sans-serif' }} className='text-[9px] uppercase tracking-[0.2em] text-white mt-1'>
                      {t('paidLabel')}
                    </div>
                  </div>
                  <div
                    className='text-white text-2xl font-thin relative z-10 scale-x-[1.8]'
                  >
                    →
                  </div>
                  <div className='text-center relative z-10'>
                    <div className='text-3xl font-light text-white'>12</div>
                    <div style={{ fontFamily: 'sans-serif' }} className='text-[9px] uppercase tracking-[0.2em] text-white mt-1'>
                      {t('accessLabel')}
                    </div>
                  </div>
                  <div
                    style={{ fontFamily: 'sans-serif' }}
                    className='text-[10px] font-black uppercase tracking-wider px-3 py-1.5 relative z-10 bg-[#FFD700] text-black overflow-hidden shadow-[0_0_15px_rgba(255,215,0,0.5)]'
                  >
                    <span className='relative z-10'>{tPricing('bestOffer')}</span>
                    <motion.div
                      initial={{ x: '-150%' }}
                      animate={{ x: '150%' }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                        repeatDelay: 2
                      }}
                      className='absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-20deg]'
                    />
                  </div>
                </div>

                {/* CTA button */}
                <Link
                  href='/pricing'
                  className='group flex items-center justify-center gap-2.5 w-full py-3.5 text-sm font-medium tracking-wide transition-all duration-200 mb-3 bg-white text-black'
                  onClick={handleClose}
                >
                  {t('cta')}
                  <IconArrowRight
                    size={16}
                    strokeWidth={2}
                    className='transition-transform duration-200 group-hover:translate-x-1'
                  />
                </Link>

                {/* Dismiss */}
                <button
                  onClick={handleClose}
                  className='w-full text-center text-[11px] transition-colors duration-200 text-white hover:text-white underline'
                >
                  {t('dismiss')}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
