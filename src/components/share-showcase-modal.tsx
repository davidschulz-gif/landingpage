'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  IconCheck,
  IconX,
  IconLoader2,
  IconAlertCircle,
  IconMail,
} from '@tabler/icons-react'
import { apiUrl } from '@/lib/constants'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
interface ShareShowcaseModalProps {
  isOpen: boolean
  onClose: () => void
  url: string
  locale: string
}

export function ShareShowcaseModal({ isOpen, onClose, url, locale }: ShareShowcaseModalProps) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const t = useTranslations('BeforeYouGo')
  const isDe = locale === 'de'

  const errorRequired = isDe ? 'Bitte geben Sie Ihre E-Mail-Adresse ein.' : 'Please enter your email address.'
  const errorInvalid = isDe ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' : 'Please enter a valid email address.'
  const errorTimeout = isDe ? 'Zeitüberschreitung. Bitte versuchen Sie es erneut.' : 'Request timed out. Please try again.'
  const errorUnexpected = isDe ? 'Ein unerwarteter Fehler ist aufgetreten.' : 'An unexpected error occurred.'

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  const validateEmail = (value: string) => EMAIL_REGEX.test(value.trim())

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    const trimmedPhone = phone.trim()

    if (!trimmed || !trimmedPhone) {
      setErrorMessage(isDe ? 'Bitte geben Sie E-Mail und Telefonnummer ein.' : 'Please enter email and phone number.')
      return
    }
    if (!validateEmail(trimmed)) {
      setErrorMessage(errorInvalid)
      return
    }

    setIsSubmitting(true)
    setErrorMessage(null)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    try {
      const response = await fetch(`${apiUrl}/api/bigmailer/add-lead?interactive=true`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: trimmed, phone: trimmedPhone }),
        signal: controller.signal,
      })

      let data: any = null
      const contentType = response.headers.get('content-type') || ''
      if (contentType.includes('application/json')) {
        try {
          data = await response.json()
        } catch {}
      }

      if (!response.ok) {
        const serverMessage = data?.message || response.statusText || 'Request failed'
        throw new Error(serverMessage)
      }

      // Push event to dataLayer
      if (typeof window !== 'undefined') {
        ;(window as any).dataLayer = (window as any).dataLayer || []
        ;(window as any).dataLayer.push({
          event: 'subscribe',
          user_data: {
            email: trimmed,
            phone: trimmedPhone,
          },
        })
      }

      setSubmitted(true)
    } catch (error: any) {
      if (error?.name === 'AbortError') {
        setErrorMessage(errorTimeout)
      } else {
        setErrorMessage(error?.message || errorUnexpected)
      }
    } finally {
      clearTimeout(timeoutId)
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed inset-0 z-[999998] bg-black/60 dark:bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Centering Wrapper */}
      <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md pointer-events-auto overflow-hidden bg-white dark:bg-[#0d0e12] border border-neutral-200 dark:border-neutral-800 rounded-[32px] shadow-[0_30px_90px_rgba(0,0,0,0.15)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 hover:rotate-90 hover:scale-105 z-10"
            aria-label="Close"
          >
            <IconX size={18} />
          </button>

          <div className="px-6 py-6 sm:px-8 sm:py-8 flex flex-col items-center text-center">
            {/* Logo / Badge */}
            <div className="mb-4 flex flex-col items-center gap-1.5 mt-2">
              <div className="bg-black dark:bg-white size-4 rounded-none"></div>
              <span
                className="text-center font-bold tracking-widest text-[25px] text-black dark:text-white"
                style={{ fontFamily: 'var(--font-soyuz-grotesk), sans-serif' }}
              >
                typus.ai
              </span>
            </div>

            {!submitted ? (
              <>
                {/* Headline */}
                <h2
                  className='text-xl sm:text-2xl font-bold leading-snug mb-3 text-black dark:text-white tracking-tight font-sans text-center'
                >
                  {t('viewFreeTitle')}
                </h2>

                {/* Subtitle */}
                <p
                  className='text-xs sm:text-sm leading-relaxed mb-6 text-neutral-500 dark:text-neutral-400 font-normal max-w-xs sm:max-w-sm font-sans text-center'
                >
                  {t('viewFreeSubtitle')}
                </p>

                {/* Bullet points container */}
                <div className='w-full bg-neutral-50/70 dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/60 rounded-2xl p-4 sm:p-5 mb-6 space-y-3.5 text-left'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0'>
                      <IconCheck size={12} strokeWidth={3} />
                    </div>
                    <span className='text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium font-sans'>
                      {t('viewFreeBullet1')}
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0'>
                      <IconCheck size={12} strokeWidth={3} />
                    </div>
                    <span className='text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium font-sans'>
                      {t('viewFreeBullet2')}
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0'>
                      <IconCheck size={12} strokeWidth={3} />
                    </div>
                    <span className='text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium font-sans'>
                      {t('viewFreeBullet3')}
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0'>
                      <IconCheck size={12} strokeWidth={3} />
                    </div>
                    <span className='text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium font-sans'>
                      {t('viewFreeBullet4')}
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0'>
                      <IconCheck size={12} strokeWidth={3} />
                    </div>
                    <span className='text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium font-sans'>
                      {t('viewFreeBullet5')}
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0'>
                      <IconCheck size={12} strokeWidth={3} />
                    </div>
                    <span className='text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium font-sans'>
                      {t('viewFreeBullet6')}
                    </span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleEmailSubmit} className='w-full text-left font-sans'>
                  {/* Email input + Submit button (side-by-side) */}
                  <div className="flex flex-col  gap-3 mb-4 w-full">
                    <div className="flex-1 min-w-0 relative">
                      <input
                        type='email'
                        placeholder={t('viewFreeEmailPlaceholder')}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          if (errorMessage) setErrorMessage(null)
                        }}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2.5 sm:py-3 bg-white dark:bg-neutral-900 border ${errorMessage ? 'border-red-500/50' : 'border-neutral-200 dark:border-neutral-800'} text-black dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors text-sm rounded-lg sm:rounded-xl`}
                        required
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0 phone-input-container">
                      <PhoneInput
                        country={'de'}
                        value={phone}
                        onChange={p => setPhone(p)}
                        enableSearch={true}
                        placeholder={isDe ? 'Telefonnummer' : 'Phone number'}
                        containerClass="w-full flex"
                        inputClass="!w-full !flex-1 !border-neutral-200 dark:!border-neutral-800 !bg-white dark:!bg-neutral-900 !text-sm !text-black dark:!text-white !placeholder-neutral-400 !outline-none disabled:!opacity-60 !pl-[48px] !h-full min-h-[44px] sm:min-h-[48px] !rounded-lg sm:!rounded-xl"
                        buttonClass="!border-neutral-200 dark:!border-neutral-800 !bg-white dark:!bg-neutral-900 !rounded-l-lg sm:!rounded-l-xl"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mb-4">
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='flex items-center justify-center w-full sm:w-auto px-8 py-2.5 sm:py-3 text-sm font-semibold transition-all duration-300 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed rounded-lg sm:rounded-xl shadow-sm gap-2'
                    >
                      {isSubmitting && <IconLoader2 className="animate-spin size-4" />}
                      <span>{t('viewFreeCta')}</span>
                    </button>
                  </div>

                  {errorMessage && (
                    <div className="mb-4 flex items-center gap-1.5 text-[11px] text-red-600">
                      <IconAlertCircle size={14} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Envelope disclaimers and notes */}
                  <div className='flex items-start gap-2.5 text-neutral-500 dark:text-neutral-400 mb-6 px-1'>
                    <IconMail size={16} strokeWidth={1.5} className='mt-0.5 shrink-0' />
                    <span className='text-[11px] leading-snug font-normal font-sans'>
                      {t('viewFreeEnvelopeText')}
                    </span>
                  </div>

                  {/* Footer spam + privacy link */}
                  <div className='w-full text-center border-t border-neutral-100 dark:border-neutral-800 pt-4'>
                    <p className='text-[11px] text-neutral-400 dark:text-neutral-500 font-normal font-sans'>
                      {t('viewFreeFooterText')}{' · '}
                      <a
                        href='https://app.typus.ai/data-privacy'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='underline text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-normal font-sans'
                      >
                        {t('viewFreePrivacyLink')}
                      </a>
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <>
                {/* Success Icon */}
                <div className="size-12 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-4 mt-2">
                  <IconCheck size={24} strokeWidth={2.5} />
                </div>

                {/* Success Title */}
                <h2
                  className="text-xl sm:text-2xl font-normal text-neutral-900 dark:text-white mb-2 leading-tight text-center"
                  style={{ fontFamily: 'var(--font-ft-calhern), sans-serif' }}
                >
                  {isDe ? 'Vielen Dank!' : 'Thank you!'}
                </h2>

                {/* Success Subtitle */}
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed text-center max-w-xs font-sans">
                  {isDe
                    ? 'Der Link wurde an Ihre E-Mail gesendet.'
                    : 'The link has been sent to your email.'}
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </>
  )
}
