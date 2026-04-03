'use client'

import { IconArrowRight, IconClock, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'byg_offer_v1'
const TRIGGER_DELAY_MS = 30000 // Set to 30s to allow testing exit intent

export default function BeforeYouGoPopup() {
  const t = useTranslations('BeforeYouGo')
  const tPricing = useTranslations('Pricing')

  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [mounted, setMounted] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Check localStorage and URL params on mount
  useEffect(() => {
    setMounted(true)
    const shown = localStorage.getItem(STORAGE_KEY) === 'true'
    console.log('BYG DEBUG: localStorage check result:', shown)
    if (shown) {
      setHasShown(true)
    }

    if (typeof window !== 'undefined' && window.location.search.includes('test=1')) {
      console.log('BYG DEBUG: Force test mode active (?test=1). Forcing hasShown to false.')
      setHasShown(false)
    }
  }, [])

  const show = (triggerType: string) => {
    console.log(`BYG DEBUG: show() called by ${triggerType}. Current hasShown:`, hasShown)
    if (hasShown) {
      console.log('BYG DEBUG: show() skipped because hasShown is already true')
      return
    }
    console.log(`BYG DEBUG: SHOWING POPUP NOW! (trigger: ${triggerType})`)
    setIsOpen(true)
    setHasShown(true)
    localStorage.setItem(STORAGE_KEY, 'true')
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  // Trigger 1: 30-second timer
  useEffect(() => {
    if (hasShown || !mounted) return

    timeoutRef.current = setTimeout(() => {
      show('30s Timer')
    }, TRIGGER_DELAY_MS)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [hasShown, mounted])

  // Trigger 2: Exit intent
  useEffect(() => {
    console.log('BYG DEBUG: Exit Intent effect check. hasShown:', hasShown, 'mounted:', mounted)
    if (hasShown || !mounted) {
      if (!mounted) console.log('BYG DEBUG: Exit intent skipped - not mounted yet')
      else console.log('BYG DEBUG: Exit intent skipped - already shown')
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Detecting exit from the viewport
      const fromTop = e.clientY <= 0 || e.pageY <= 0 || (e.relatedTarget === null && e.target === document)
      console.log('BYG DEBUG: mouseleave event. clientY:', e.clientY, 'pageY:', e.pageY, 'relatedTarget:', e.relatedTarget, 'fromTop:', fromTop)

      if (fromTop) {
        console.log('BYG DEBUG: Exit Intent detected from top! Triggering show().')
        show('Exit Intent')
      }
    }

    console.log('BYG DEBUG: Attaching mouseleave listener to document')
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      console.log('BYG DEBUG: Removing mouseleave listener from document')
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown, mounted])

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
            className='fixed inset-0 z-[999998] bg-black/60 backdrop-blur-sm'
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
              className='relative w-full max-w-md pointer-events-auto overflow-hidden bg-[#0a0a0a] border border-white/10'
              onClick={e => e.stopPropagation()}
            >
              {/* Subtle gradient accent at top */}
              <div
                className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent'
              />

              {/* Ambient glow */}
              <div
                className='absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)]'
              />

              {/* Close button */}
              <button
                onClick={handleClose}
                className='absolute top-4 right-4 p-1 text-white/30 hover:text-white/70 transition-colors duration-200 z-10'
                aria-label='Close'
              >
                <IconX size={18} strokeWidth={1.5} />
              </button>

              <div className='px-8 py-9'>
                {/* Urgency badge */}
                <div className='flex items-center gap-2 mb-6'>
                  <div
                    className='flex items-center gap-1.5 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase border border-white/15 text-white/70'
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
                  className='flex items-center justify-between mb-8 px-5 py-4 overflow-hidden relative bg-white/5 border border-white/5'
                >
                  <div
                    className='absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,54,54,0.1),transparent_70%)]'
                  />
                  <div className='text-center relative z-10'>
                    <div className='text-3xl font-light text-white'>3</div>
                    <div style={{ fontFamily: 'sans-serif' }} className='text-[9px] uppercase tracking-[0.2em] text-white/90 mt-1'>
                      {t('paidLabel')}
                    </div>
                  </div>
                  <div
                    className='text-white/90 text-2xl font-thin relative z-10 scale-x-[1.8]'
                  >
                    →
                  </div>
                  <div className='text-center relative z-10'>
                    <div className='text-3xl font-light text-white'>12</div>
                    <div style={{ fontFamily: 'sans-serif' }} className='text-[9px] uppercase tracking-[0.2em] text-white/90 mt-1'>
                      {t('accessLabel')}
                    </div>
                  </div>
                  <div
                    style={{ fontFamily: 'sans-serif' }} className='text-[9px] font-bold uppercase tracking-wider px-2 py-1 relative z-10 bg-[#ad8802] text-black'
                  >
                    {tPricing('bestOffer')}
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
                  className='w-full text-center text-[11px] transition-colors duration-200 text-white/70 hover:text-white/90'
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
