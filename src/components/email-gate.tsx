'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import HeroEmailForm from './hero-email-form'
import { Check, X } from 'lucide-react'

const STORAGE_KEY = 'typus_email_provided'

export function EmailGate({ children }: { children: React.ReactNode }) {
  const t = useTranslations('HeroEmailForm')
  const pathname = usePathname()
  const [showGate, setShowGate] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [mounted, setMounted] = useState(false)

  const [redirectUrl, setRedirectUrl] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleShowGate = (e: Event) => {
      const customEvent = e as CustomEvent<{ redirectUrl?: string }>
      const targetUrl = customEvent.detail?.redirectUrl || null
      setRedirectUrl(targetUrl)
      setShowGate(true)
      document.body.style.overflow = 'hidden'
    }

    window.addEventListener('show-email-gate', handleShowGate)
    return () => {
      window.removeEventListener('show-email-gate', handleShowGate)
    }
  }, [])

  const handleSuccess = () => {
    localStorage.setItem(STORAGE_KEY, '1')
    setIsExiting(true)
    document.body.style.overflow = ''
    setTimeout(() => {
      setShowGate(false)
      setIsExiting(false)
      if (redirectUrl) {
        window.location.href = redirectUrl
      }
    }, 700)
  }

  // SSR: render children immediately; gate appears only client-side
  if (!mounted) return <>{children}</>

  return (
    <>
      {children}

      <AnimatePresence>
        {showGate && (
          <motion.div
            key='email-gate'
            initial={{ opacity: 1 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className='fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden'
          >
            {/* blurred backdrop of page content */}
            <div className='absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-xl' />

            {/* subtle animated gradient orbs */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
              <motion.div
                animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className='absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20'
                style={{ background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)' }}
              />
              <motion.div
                animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                className='absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10'
                style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
              />
            </div>

            {/* card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className='relative z-10 bg-white dark:bg-[#0d0e12] border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.15)] p-10 md:p-14 max-w-lg w-full mx-4 flex flex-col items-center text-center'
            >
              {/* close button */}
              <button
                onClick={() => {
                  setIsExiting(true)
                  document.body.style.overflow = ''
                  setTimeout(() => {
                    setShowGate(false)
                    setIsExiting(false)
                  }, 700)
                }}
                className='absolute top-6 right-6 p-1.5 rounded-full text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors'
                aria-label="Close"
              >
                <X className='w-5 h-5' />
              </button>
              {/* logo mark */}
              <div className='mb-6 flex flex-col items-center gap-2'>
                <div className='bg-black dark:bg-white w-4 h-4 rounded-sm' />
                <span
                  className='text-xs uppercase tracking-[3px] font-light text-black dark:text-white'
                  style={{ fontFamily: 'var(--font-ft-calhern), sans-serif' }}
                >
                  typus.AI
                </span>
              </div>

              <h2
                className='text-[26px] md:text-[32px] font-normal text-neutral-900 dark:text-white mb-3 leading-tight'
                style={{ fontFamily: 'var(--font-ft-calhern), sans-serif' }}
              >
                {t('gate.title')}
              </h2>
              <p
                className='text-sm text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed max-w-sm'
                style={{ fontFamily: 'sans-serif' }}
              >
                {t('gate.subtitle')}
              </p>

              {/* checkmark features list */}
              <div className='flex flex-col gap-4 text-left w-full max-w-sm mx-auto mb-8 bg-neutral-50 dark:bg-neutral-900/40 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-900'>
                {[
                  t('features.info'),
                  t('features.caseStudies'),
                  t('features.exclusiveOffers'),
                  t('features.viewApp'),
                ].map((feature, idx) => (
                  <div key={idx} className='flex items-start gap-3'>
                    <div className='w-5 h-5 rounded-full bg-[#E6F7F2] dark:bg-[#003d2b] flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <Check className='text-[#00A878] w-3.5 h-3.5' strokeWidth={3} />
                    </div>
                    <span className='text-sm font-medium text-neutral-800 dark:text-neutral-200'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* email form – full width, no feature list */}
              <div className='w-full'>
                <HeroEmailForm showFeatures={false} onSuccess={handleSuccess} />
              </div>

              <p className='mt-6 text-[10px] text-neutral-400 dark:text-neutral-600'>
                {t('gate.privacy')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
