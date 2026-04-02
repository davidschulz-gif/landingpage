'use client'

import { IconArrowRight, IconClock, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'byg_force_final_7'
const TRIGGER_DELAY_MS = 30000

export default function BeforeYouGoPopup() {
  const t = useTranslations('BeforeYouGo')
  const tPricing = useTranslations('Pricing')

  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [mounted, setMounted] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Check only URL params for forced test mode on mount
  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined' && window.location.search.includes('test=1')) {
      console.log('Pop-up: Force test mode active.')
    }
  }, [])

  const show = (triggerType: string) => {
    console.log(`Pop-up triggered by: ${triggerType}`)
    setIsOpen(true)
    setHasShown(true)
    // Removed localStorage.setItem to allow repeated testing during development
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
    if (hasShown || !mounted) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse is in the top 20px
      if (e.clientY <= 20) {
        show('Exit Intent')
        window.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    window.addEventListener('mouseleave', handleMouseLeave)
    return () => window.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown, mounted])

  const handleClose = () => {
    setIsOpen(false)
    // Reset hasShown after a small delay so it can trigger again without refresh
    setTimeout(() => {
      setHasShown(false)
    }, 1000)
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
              className='relative w-full max-w-md pointer-events-auto overflow-hidden'
              style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Subtle gradient accent at top */}
              <div
                className='absolute top-0 left-0 right-0 h-px'
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.4) 60%, transparent)',
                }}
              />

              {/* Ambient glow */}
              <div
                className='absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none'
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
                }}
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
                    className='flex items-center gap-1.5 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase'
                    style={{
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    <IconClock size={11} strokeWidth={2} />
                    {t('badge')}
                  </div>
                </div>

                {/* Headline */}
                <h2
                  className='text-xl font-light leading-snug mb-4'
                  style={{ color: 'rgba(255,255,255,0.95)', letterSpacing: '-0.01em' }}
                >
                  {t('title')}
                </h2>

                {/* Body */}
                <p
                  className='text-sm leading-relaxed mb-8'
                  style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}
                >
                  {t('body')}
                </p>

                {/* Offer highlights */}
                <div
                  className='flex items-center justify-between mb-8 px-5 py-4 overflow-hidden relative'
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className='absolute inset-0 opacity-20 pointer-events-none'
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(255,54,54,0.1), transparent 70%)',
                    }}
                  />
                  <div className='text-center relative z-10'>
                    <div className='text-3xl font-light text-white'>3</div>
                    <div className='text-[9px] uppercase tracking-[0.2em] text-white/40 mt-1'>
                      {t('paidLabel')}
                    </div>
                  </div>
                  <div
                    className='text-white/20 text-2xl font-thin relative z-10'
                    style={{ transform: 'scaleX(1.8)' }}
                  >
                    →
                  </div>
                  <div className='text-center relative z-10'>
                    <div className='text-3xl font-light text-white'>12</div>
                    <div className='text-[9px] uppercase tracking-[0.2em] text-white/40 mt-1'>
                      {t('accessLabel')}
                    </div>
                  </div>
                  <div
                    className='text-[9px] font-bold uppercase tracking-wider px-2 py-1 relative z-10'
                    style={{
                      background: '#ff3636',
                      color: 'white',
                    }}
                  >
                    {tPricing('bestOffer')}
                  </div>
                </div>

                {/* CTA button */}
                <Link
                  href='/pricing'
                  className='group flex items-center justify-center gap-2.5 w-full py-3.5 text-sm font-medium tracking-wide transition-all duration-200 mb-3'
                  style={{ background: 'white', color: 'black' }}
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
                  className='w-full text-center text-[11px] transition-colors duration-200'
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                  onMouseEnter={e =>
                    ((e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.5)')
                  }
                  onMouseLeave={e =>
                    ((e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.25)')
                  }
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
