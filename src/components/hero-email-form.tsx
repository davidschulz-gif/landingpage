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

export default function HeroEmailForm() {
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
        `${apiUrl}/api/bigmailer/request-verification-jwt`,
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
      setEmail('')
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
      transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
      className='mt-4 w-full max-w-sm'
    >
      <div className='flex items-stretch gap-2'>
        <input
          type='email'
          name='email'
          required
          placeholder={t('placeholder')}
          aria-label='Email address'
          className='flex-1 border border-black/10 dark:border-white/20 bg-white/70 dark:bg-white/10 px-4 py-2 text-sm text-black placeholder-gray-500 outline-none disabled:opacity-60'
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isRequesting}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? 'hero-email-error' : undefined}
        />
        <button
          type='button'
          className='!px-6 flex items-center flex-shrink-0 py-2 bg-white shadow-sm text-sm h-full transition-colors cursor-pointer hover:shadow-md font-medium gap-2 hover:opacity-90 disabled:opacity-60'
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
      <div className='mt-2 flex items-center gap-2'>
        <IconMail size={14} className='text-gray-600' />
        <span
          className='text-[11px] text-gray-600 dark:text-gray-300'
          style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
        >
          {t('description')}
        </span>
      </div>
    </motion.div>
  )
}
