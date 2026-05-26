'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import HeroEmailForm from './hero-email-form'

const STORAGE_KEY = 'typus_email_provided'

export function EmailGate({ children }: { children: React.ReactNode }) {
  const t = useTranslations('HeroEmailForm')
  const pathname = usePathname()
  const [showGate, setShowGate] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hasProvided = localStorage.getItem(STORAGE_KEY)
    
    // Exempt pages like thank-you, terms, privacy, imprint, etc.
    const isExempt = 
      pathname.includes('/thank-you') || 
      pathname.includes('/terms') || 
      pathname.includes('/privacy') || 
      pathname.includes('/imprint')

    if (!hasProvided && !isExempt) {
      setShowGate(true)
      // prevent scroll while gate is open
      document.body.style.overflow = 'hidden'
    } else {
      setShowGate(false)
      document.body.style.overflow = ''
    }
  }, [pathname])

  const handleSuccess = () => {
    localStorage.setItem(STORAGE_KEY, '1')
    setIsExiting(true)
    document.body.style.overflow = ''
    setTimeout(() => setShowGate(false), 700)
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

              {/* feature pills */}
              <div className='flex flex-wrap justify-center gap-2 mb-8'>
                {[
                  t('features.info'),
                  t('features.caseStudies'),
                  t('features.exclusiveOffers'),
                  t('features.viewApp'),
                ].map((feature, idx) => (
                  <span
                    key={idx}
                    className='border border-black dark:border-white/30 px-3 py-1.5 text-[11px] font-medium text-black dark:text-white uppercase tracking-wide'
                  >
                    {feature}
                  </span>
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
