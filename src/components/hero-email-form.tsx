import { apiUrl } from '@/lib/constants'
import {
  IconAlertCircle,
  IconCheck,
  IconLoader2,
  IconMail,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

interface HeroEmailFormProps {
  showFeatures?: boolean;
  onSuccess?: () => void;
}

export default function HeroEmailForm({ showFeatures = true, onSuccess }: HeroEmailFormProps) {
  const t = useTranslations('HeroEmailForm')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isRequesting, setIsRequesting] = useState(false)
  const [email, setEmail] = useState('')

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  const validateEmail = (value: string) => EMAIL_REGEX.test(value.trim())

  const handleSubmit = async () => {
    const trimmed = email.trim()
    if (!trimmed) {
      setSuccessMessage(null)
      setErrorMessage(t('errors.required'))
      return
    }
    if (!validateEmail(trimmed)) {
      setSuccessMessage(null)
      setErrorMessage(t('errors.invalid'))
      return
    }

    if (isRequesting) return

    setIsRequesting(true)
    setErrorMessage(null)
    setSuccessMessage(null)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    try {
      const response = await fetch(
        `${apiUrl}/api/bigmailer/add-lead`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ email: trimmed }),
          signal: controller.signal,
        }
      )

      let data: any = null
      const contentType = response.headers.get('content-type') || ''
      if (contentType.includes('application/json')) {
        try {
          data = await response.json()
        } catch { }
      }

      if (!response.ok) {
        const serverMessage =
          data?.message || response.statusText || 'Request failed'
        throw new Error(serverMessage)
      }

      setSuccessMessage(
        data?.message || t('success')
      )
      
      // Push event to dataLayer
      if (typeof window !== 'undefined') {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'subscribe',
          user_data: {
            email: trimmed,
          },
        })
        console.log('Pushed subscribe event to dataLayer with email:', {
          event: 'subscribe',
          user_data: {
            email: trimmed,
          },
        })
      }

      setEmail('')
      if (onSuccess) {
        setTimeout(() => onSuccess(), 1200)
      }
    } catch (error: any) {
      if (error?.name === 'AbortError') {
        setErrorMessage(t('errors.timeout'))
      } else {
        setErrorMessage(
          error?.message || t('errors.unexpected')
        )
      }
    } finally {
      clearTimeout(timeoutId)
      setIsRequesting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.1, delay: 1.1, ease: 'easeOut' }}
      className={`w-full max-w-5xl mx-auto ${showFeatures ? 'mt-4 px-4' : 'mt-2 px-0'}`}
    >
      <div className='w-full max-w-md mx-auto'>
        <div className='flex flex-col sm:flex-row items-stretch gap-2.5'>
          <input
            type='email'
            name='email'
            required
            placeholder={t('placeholder')}
            aria-label='Email address'
            className='flex-1 border border-black/10 dark:border-white/20 bg-white/70 dark:bg-white/10 px-4 py-2.5 text-sm text-black placeholder-gray-500 outline-none disabled:opacity-60 w-full'
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={isRequesting}
            aria-invalid={!!errorMessage}
            aria-describedby={errorMessage ? 'hero-email-error' : undefined}
          />
          <button
            type='button'
            className='w-full sm:w-auto !px-6 py-2.5 flex items-center justify-center flex-shrink-0 bg-white shadow-sm text-sm transition-colors cursor-pointer hover:shadow-md font-medium gap-2 hover:opacity-90 disabled:opacity-60 text-black border border-black/10'
            onClick={handleSubmit}
            disabled={isRequesting}
          >
            <span>{t('learnMore')}</span>
            {isRequesting ? (
              <IconLoader2 className='animate-spin ms-1 size-4' />
            ) : (
              ''
            )}
          </button>
        </div>
        {errorMessage && (
          <div
            id='hero-email-error'
            role='alert'
            aria-live='assertive'
            className='mt-2 flex items-center gap-2 text-[11px] text-red-600'
          >
            <IconAlertCircle size={14} />
            <span>{errorMessage}</span>
          </div>
        )}
        {successMessage && (
          <div
            role='status'
            aria-live='polite'
            className='mt-2 flex items-center gap-2 text-[11px] text-green-600'
          >
            <IconCheck size={14} />
            <span>{successMessage}</span>
          </div>
        )}
        <div className='mt-2.5 flex items-start gap-2 text-left'>
          <IconMail size={18} className='text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0' />
          <span
            className='text-[11px] text-gray-600 dark:text-gray-300 leading-normal'
            style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
          >
            {t('description')}
          </span>
        </div>
      </div>
      
      {showFeatures && (
        <div className='mt-6 flex flex-wrap items-center justify-center gap-2 w-full max-w-4xl mx-auto'>
          {[
            // t('features.info'),
            t('features.viewApp'),
            t('features.caseStudies'),
            t('features.exclusiveOffers'),
            t('features.interactiveShowcase'),
          ].map((feature, idx) => (
            <div
              key={idx}
              className='flex items-center gap-1.5 min-w-0 bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 px-3 py-1.5 rounded-full shadow-sm'
            >
              <IconCheck className='size-3 md:size-4 text-emerald-700 dark:text-emerald-400 flex-shrink-0' stroke={3} />
              <span className='text-[10px] md:text-[12px] text-black dark:text-white font-medium uppercase tracking-wider break-words whitespace-normal' style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
