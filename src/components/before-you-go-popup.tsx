'use client'

import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconDeviceDesktopShare,
  IconVideo,
  IconHeadset,
  IconX,
} from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { apiUrl } from '@/lib/constants'
import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { MailIcon } from 'lucide-react'

const TRIGGER_DELAY_MS = 30000

export default function BeforeYouGoPopup() {
  const t = useTranslations('BeforeYouGo')

  const [isOpen, setIsOpen] = useState(false)
  const [timerTriggered, setTimerTriggered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<{ email?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  const isPricingPage = pathname?.endsWith('/pricing') || pathname?.includes('/pricing')
  const isExcludedRoute = pathname?.includes('upscale-privacy') || pathname?.includes('/research') || pathname?.includes('research')
  const isResearchPage = pathname?.includes('/research') || pathname?.includes('research')

  const isIframe = typeof window !== 'undefined' && window.self !== window.top

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined' && window.location.search.includes('test=1')) {
      setTimerTriggered(false)
    }
  }, [])

  const show = (_triggerType: string) => {
    if (isOpen || isIframe || isResearchPage) return

    // Suppress if checkout process is initiated/active or on the checkout order page
    if (typeof window !== 'undefined' && (window as any).isCheckoutActive) {
      console.log('Suppressing BeforeYouGoPopup because checkout is active')
      return
    }
    if (pathname?.includes('/pricing/order') || isResearchPage) {
      console.log('Suppressing BeforeYouGoPopup on order or research page')
      return
    }

    setIsOpen(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  // Trigger 1: 30-second timer (disabled on excluded routes)
  useEffect(() => {
    if (timerTriggered || !mounted || isExcludedRoute) return
    timeoutRef.current = setTimeout(() => {
      setTimerTriggered(true)
      show('30s Timer')
    }, TRIGGER_DELAY_MS)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [timerTriggered, mounted, isExcludedRoute])

  // Trigger 2: Exit intent (disabled on excluded routes)
  useEffect(() => {
    if (!mounted || isExcludedRoute) return
    const handleMouseLeave = (e: MouseEvent) => {
      const fromTop = e.clientY <= 0 || e.pageY <= 0 || (e.relatedTarget === null && e.target === document)
      if (fromTop) show('Exit Intent')
    }
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isOpen) show('Exit Intent Move')
    }
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mounted, isOpen, isExcludedRoute])

  // Trigger 3: Custom event
  useEffect(() => {
    if (!mounted) return
    const handler = () => show('Custom Event')
    window.addEventListener('open-before-you-go', handler)
    return () => window.removeEventListener('open-before-you-go', handler)
  }, [mounted, isOpen])

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => {
      setEmail('')
      setErrors({})
    }, 350)
  }

  const validateStep1 = () => {
    const e: typeof errors = {}
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = t('errorEmail')
    setErrors(e)
    return !e.email
  }

  const handleSubmitStep1 = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validateStep1()) return
    setIsSubmitting(true)
    const ctrl = new AbortController()
    const tid = setTimeout(() => ctrl.abort(), 10000)
    const trimmedEmail = email.trim()
    try {
      await fetch(`${apiUrl}/api/bigmailer/add-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail }),
        signal: ctrl.signal,
      })
      if (typeof window !== 'undefined') {
        localStorage.setItem('typus_email_provided', '1');
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({ event: 'subscribe', user_data: { email: trimmedEmail } })
      }
    } catch (_) {
    } finally {
      clearTimeout(tid)
      setIsSubmitting(false)
      handleClose()
      router.push('/pricing')
    }
  }

  if (!mounted) return null
  if (isIframe || isResearchPage) return null
  if (pathname?.includes('/book-a-demo')) return null
  if (pathname?.includes('/pricing/order')) return null

  // ── Shared step 1 bullet list ───────────────────────────────────────────
  const BulletList = ({ dark }: { dark?: boolean }) => (
    <div className={`w-full border rounded-2xl p-4 mb-5 space-y-3 text-left ${dark ? 'bg-white/5 border-white/10' : 'bg-neutral-50 border-neutral-100'}`}>
      {([
        { icon: <IconCheck size={11} strokeWidth={3} />, key: 'viewFreeBullet2', color: dark ? 'bg-white/15 text-white' : 'bg-emerald-50 text-emerald-600' },
        { icon: <IconCheck size={11} strokeWidth={3} />, key: 'viewFreeBullet3', color: dark ? 'bg-white/15 text-white' : 'bg-emerald-50 text-emerald-600' },
        { icon: <IconCheck size={11} strokeWidth={3} />, key: 'viewFreeBullet4', color: dark ? 'bg-white/15 text-white' : 'bg-emerald-50 text-emerald-600' },
        { icon: <IconCheck size={11} strokeWidth={3} />, key: 'viewFreeBullet6', color: dark ? 'bg-white/15 text-white' : 'bg-emerald-50 text-emerald-600' },
        { icon: <IconVideo size={12} strokeWidth={2.5} />, key: 'viewFreeBullet7', color: dark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600' },
        { icon: <IconHeadset size={12} strokeWidth={2.5} />, key: 'viewFreeBullet8', color: dark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-50 text-purple-600' },
      ] as const).map(({ icon, key, color }) => (
        <div key={key} className='flex items-center gap-3'>
          <div className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${color}`}>{icon}</div>
          <span className={`text-xs font-medium font-sans ${dark ? 'text-white/80' : 'text-neutral-700'}`}>{t(key as any)}</span>
        </div>
      ))}
    </div>
  )

  // ── Shared form elements ────────────────────────────────────────────────
  const SubmitBtn = ({ label }: { label: string }) => (
    <button
      type='submit'
      disabled={isSubmitting}
      className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold transition-all duration-300 rounded-xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
      style={{ fontFamily: 'Arial' }}
    >
      {isSubmitting ? (
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-4 h-4 rounded-full border-2 border-t-transparent border-white"
        />
      ) : (
        <>{label}<IconArrowRight size={15} strokeWidth={2.5} /></>
      )}
    </button>
  )

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
            className='fixed inset-0 z-[999998] bg-black/50 backdrop-blur-sm'
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key='byg-modal'
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className='fixed inset-0 z-[999999] overflow-y-auto'
          >
            <div className='relative min-h-screen flex items-center justify-center p-4 sm:p-6 pointer-events-none'>

              {isPricingPage ? (
                /* ══════ PRICING MODAL (WHITE THEME) ══════ */
                <div
                  className='relative pointer-events-auto overflow-hidden bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl transition-all duration-500 w-full max-w-md'
                  onClick={e => e.stopPropagation()}
                >
                  <button onClick={handleClose} className='absolute top-4 right-4 p-2 text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-300 hover:rotate-90 hover:scale-110 z-10' aria-label='Close'>
                    <IconX size={18} strokeWidth={1.5} />
                  </button>

                  <div className='px-6 py-6 sm:px-8 sm:py-8'>
                    <div className='flex items-center gap-2 mb-4'>
                      <div className='flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-sm' style={{ fontFamily: 'Arial' }}>
                        <IconClock size={11} strokeWidth={2} />{t('badge')}
                      </div>
                    </div>
                    <h2 className='text-lg sm:text-xl font-bold leading-snug mb-2 text-neutral-900 dark:text-white tracking-tight' style={{ fontFamily: 'Arial' }}>{t('title')}</h2>
                    <p className='text-xs leading-relaxed mb-4 text-neutral-600 dark:text-neutral-400 font-normal'>{t('body')}</p>

                    <div className='flex flex-col gap-2 mb-5'>
                      {([
                        { icon: <IconVideo size={12} strokeWidth={1.5} className='text-neutral-800 dark:text-neutral-200' />, label: t('viewFreeBullet7') },
                        { icon: <IconDeviceDesktopShare size={12} strokeWidth={1.5} className='text-neutral-800 dark:text-neutral-200' />, label: t('viewFreeBullet8') },
                      ] as const).map(({ icon, label }) => (
                        <div key={label as string} className='flex items-center gap-3'>
                          <div className='w-6 h-6 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-200 dark:border-neutral-700 rounded-md'>{icon}</div>
                          <span className='text-[13px] font-medium text-neutral-800 dark:text-neutral-200 leading-tight'>{label}</span>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSubmitStep1}>
                      <div className='mb-4'>
                        <input type='email' placeholder={t('emailPlaceholder')} value={email}
                          onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: undefined })) }}
                          className={`w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border ${errors.email ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700'} text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 text-sm rounded-xl transition-colors`}
                          required
                        />
                        {errors.email && <p className='text-red-500 text-[10px] mt-1.5'>{errors.email}</p>}
                      </div>
                      <SubmitBtn label={t('continue')} />
                      <p className='text-[10px] text-neutral-400 dark:text-neutral-500 italic text-center mt-3'>{t('trustText')}</p>
                    </form>

                    {/* Dismiss */}
                    <button onClick={handleClose} className='w-full text-center text-[11px] text-neutral-400 hover:text-neutral-800 dark:hover:text-white underline mt-4 transition-colors'>
                      {t('dismiss')}
                    </button>
                  </div>
                </div>

              ) : (
                /* ══════ WHITE MODAL ══════ */
                <div
                  className='relative pointer-events-auto overflow-hidden bg-white rounded-[32px] border border-neutral-100 shadow-2xl transition-all duration-500 w-full max-w-md'
                  onClick={e => e.stopPropagation()}
                >
                  <button onClick={handleClose} className='absolute top-5 right-5 p-2 text-neutral-400 hover:text-black transition-all duration-300 hover:rotate-90 hover:scale-110 z-10' aria-label='Close'>
                    <IconX size={18} strokeWidth={1.5} />
                  </button>

                  <div className='px-6 py-6 sm:px-8 sm:py-8 flex flex-col items-center text-center'>
                    {/* Logo */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                      className="mb-4"
                    >
                      <div className='flex items-center justify-center gap-2.5 select-none'>
                        <div className="bg-black w-4 h-4 rounded-none shrink-0" />
                        <span
                          className='text-center text-black uppercase leading-none font-normal'
                          style={{
                            fontSize: '20px',
                            fontWeight: 400,
                            letterSpacing: '2.5px',
                            fontFamily: "Arial, Helvetica, sans-serif",
                          }}
                        >
                          TYPUS
                        </span>
                      </div>
                    </motion.div>

                    <h2 className='text-xl sm:text-2xl leading-snug mb-2 text-black tracking-tight font-sans'>{t('viewFreeTitle')}</h2>
                    <p className='text-xs sm:text-sm leading-relaxed mb-4 text-neutral-500 max-w-xs font-sans'>{t('viewFreeSubtitle')}</p>

                    {/* Bullets */}
                    <BulletList />

                    {/* Form */}
                    <form onSubmit={handleSubmitStep1} className='w-full text-left'>
                      <div className='mb-3'>
                        <input type='email' placeholder={t('viewFreeEmailPlaceholder')} value={email}
                          onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: undefined })) }}
                          className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-red-400' : 'border-neutral-200'} text-black placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 text-sm rounded-xl transition-colors`}
                          required
                        />
                        {errors.email && <p className='text-red-500 text-[10px] mt-1.5'>{errors.email}</p>}
                      </div>
                      <SubmitBtn label={t('viewFreeCta')} />
                      <div className='flex items-start gap-2.5 text-neutral-400 mt-3 mb-4 px-1'>
                        <MailIcon size={14} strokeWidth={1.5} className='mt-0.5 shrink-0' />
                        <span className='text-[11px] leading-snug font-sans'>{t('viewFreeEnvelopeText')}</span>
                      </div>
                      <div className='w-full text-center border-t border-neutral-100 pt-3'>
                        <p className='text-[11px] text-neutral-400 font-sans'>
                          {t('viewFreeFooterText')}{' · '}
                          <a href='https://app.typus.ai/data-privacy' target='_blank' rel='noopener noreferrer' className='underline hover:text-black transition-colors'>
                            {t('viewFreePrivacyLink')}
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

