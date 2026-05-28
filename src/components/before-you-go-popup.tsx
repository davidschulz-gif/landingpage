'use client'

import { IconArrowRight, IconCheck, IconClock, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
import { apiUrl } from '@/lib/constants'
import { useEffect, useRef, useState } from 'react'

const TRIGGER_DELAY_MS = 30000 // Set to 30s as requested

export default function BeforeYouGoPopup() {
  const t = useTranslations('BeforeYouGo')
  const tPricing = useTranslations('Pricing')

  const [isOpen, setIsOpen] = useState(false)
  const [timerTriggered, setTimerTriggered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
  const [isConsented, setIsConsented] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; consent?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const router = useRouter()

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
    // Reset form state when closed
    setEmail('')
    setIsConsented(false)
    setErrors({})
  }

  const validate = () => {
    const newErrors: { email?: string; consent?: string } = {}
    if (!email) {
      newErrors.email = t('errorEmail')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t('errorEmail')
    }
    if (!isConsented) {
      newErrors.consent = t('errorConsent')
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    const trimmedEmail = email.trim()
    console.log('[BYG] Form submitted:', { email: trimmedEmail, isConsented })

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)

    try {
      // BigMailer Integration
      const response = await fetch(
        `${apiUrl}/api/bigmailer/request-verification-jwt`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ email: trimmedEmail }),
          signal: controller.signal,
        }
      )

      if (!response.ok) {
        console.warn('[BYG] API response not OK:', response.statusText)
      } else {
        console.log('[BYG] API success')
      }
    } catch (error: any) {
      if (error?.name === 'AbortError') {
        console.error('[BYG] API Timeout')
      } else {
        console.error('[BYG] API submission error:', error)
      }
      // Non-blocking: we still proceed to the offer
    } finally {
      clearTimeout(timeoutId)
      setIsSubmitting(false)
      setIsOpen(false)

      // Always redirect to the offer page as requested
      router.push('/pricing')
    }
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
            className='fixed inset-0 z-[999998] bg-black/85 backdrop-blur-md'
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            key='byg-modal'
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className='fixed inset-0 z-[999999] overflow-y-auto'
          >
            {/* Scrollable Center Wrapper */}
            <div className='relative min-h-screen flex items-center justify-center p-4 sm:p-6 pointer-events-none'>
              <div
                className='relative w-full max-w-md pointer-events-auto overflow-hidden bg-black rounded-3xl border border-white/10 shadow-2xl'
                onClick={e => e.stopPropagation()}
              >
                {/* Subtle gradient accent at top */}
                <div
                  className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent'
                />

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className='absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-all duration-300 hover:rotate-90 hover:scale-110 z-10'
                  aria-label='Close'
                >
                  <IconX size={18} strokeWidth={1.5} />
                </button>

                <div className='px-6 py-6 sm:px-8 sm:py-8'>
                  {/* Urgency badge */}
                  <div className='flex items-center gap-2 mb-4 sm:mb-6'>
                    <div
                      className='flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase border border-white text-white'
                    >
                      <IconClock size={11} strokeWidth={2} />
                      {t('badge')}
                    </div>
                  </div>

                  {/* Headline */}
                  <h2
                    className='text-lg sm:text-xl font-normal leading-snug mb-3 sm:mb-4 text-white tracking-tight'
                  >
                    {t('title')}
                  </h2>

                  {/* Body */}
                  <p
                    className='text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 text-white/90 font-normal'
                    style={{ fontFamily: 'sans-serif' }}
                  >
                    {t('body')}
                  </p>

                  {/* Offer highlights */}
                  <div
                    className='flex items-center justify-between mb-5 sm:mb-8 px-4 py-3 sm:px-5 sm:py-4 overflow-hidden relative bg-black border border-white/20 rounded-2xl'
                  >
                    <div
                      className='absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,54,54,0.1),transparent_70%)]'
                    />
                    <div className='text-center relative z-10'>
                      <div className='text-2xl sm:text-3xl font-light text-white'>4</div>
                      <div style={{ fontFamily: 'sans-serif' }} className='text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-white mt-1'>
                        {t('paidLabel')}
                      </div>
                    </div>
                    <div
                      className='text-white text-2xl font-thin relative z-10 scale-x-[1.8]'
                    >
                      →
                    </div>
                    <div className='text-center relative z-10'>
                      <div className='text-2xl sm:text-3xl font-light text-white'>12</div>
                      <div style={{ fontFamily: 'sans-serif' }} className='text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-white mt-1'>
                        {t('accessLabel')}
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: 'sans-serif' }}
                      className='text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-1 sm:px-3 sm:py-1.5 relative z-10 bg-[#FFD700] text-black overflow-hidden shadow-[0_0_15px_rgba(255,215,0,0.5)]'
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

                  {/* Unified Form */}
                  <form onSubmit={handleSubmit} className='mt-2'>
                    {/* Email input */}
                    <div className='mb-3 sm:mb-4'>
                      <input
                        type='email'
                        placeholder={t('emailPlaceholder')}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          if (errors.email) setErrors(prev => ({ ...prev, email: undefined }))
                        }}
                        className={`w-full px-4 py-2.5 sm:py-3 bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors text-sm rounded-xl px-4`}
                        required
                      />
                      {errors.email && (
                        <p className='text-red-500 text-[10px] mt-1.5 ml-0.5'>{errors.email}</p>
                      )}
                    </div>

                    {/* Consent checkbox */}
                    <div className='mb-4 sm:mb-6'>
                      <label className='flex items-start gap-2.5 sm:gap-3 cursor-pointer group'>
                        <div className='relative flex items-center mt-0.5 shrink-0'>
                          <input
                            type='checkbox'
                            checked={isConsented}
                            onChange={(e) => {
                              setIsConsented(e.target.checked)
                              if (errors.consent) setErrors(prev => ({ ...prev, consent: undefined }))
                            }}
                            className='peer hidden'
                          />
                          <div className={`w-4 h-4 border ${errors.consent ? 'border-red-500' : 'border-white/40'} peer-checked:bg-white peer-checked:border-white transition-all duration-200`} />
                          <IconCheck
                            size={12}
                            className='absolute inset-0 m-auto text-black opacity-0 peer-checked:opacity-100 transition-opacity duration-200'
                            strokeWidth={3}
                          />
                        </div>
                        <span className='text-[11px] text-white/60 leading-tight select-none group-hover:text-white transition-colors font-normal'>
                          {t('privacyConsent')}
                        </span>
                      </label>
                      {errors.consent && (
                        <p className='text-red-500 text-[10px] mt-1.5 ml-0.5'>{errors.consent}</p>
                      )}
                    </div>

                    {/* Submit button */}
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='flex items-center justify-center gap-2 w-full py-3 sm:py-4 text-sm font-semibold transition-all duration-300 mb-2 bg-white text-black hover:bg-white/90 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed rounded-2xl shadow-lg'
                    >
                      {isSubmitting ? (
                        <span className='flex items-center gap-2'>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          >
                            <IconCheck size={16} strokeWidth={3} />
                          </motion.div>
                          Processing...
                        </span>
                      ) : (
                        <>
                          {t('continue')}
                          <IconArrowRight size={16} strokeWidth={2.5} />
                        </>
                      )}
                    </button>

                    {/* Trust text */}
                    <div className='flex flex-col items-center gap-1 mt-3 sm:mt-4'>
                      <p className='text-[10px] text-white/30 italic'>
                        {t('trustText')}
                      </p>
                    </div>
                  </form>

                  {/* Dismiss */}
                  <button
                    onClick={handleClose}
                    className='w-full text-center text-[11px] transition-colors duration-200 text-white/60 hover:text-white underline mt-2 sm:mt-3'
                  >
                    {t('dismiss')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
