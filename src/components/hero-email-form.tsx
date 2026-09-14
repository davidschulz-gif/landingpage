import { apiUrl } from '@/lib/constants'
import {
  IconAlertCircle,
  IconCheck,
  IconLoader2,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { Mail, MailIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
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
  const router = useRouter()

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  const validateEmail = (value: string) => EMAIL_REGEX.test(value.trim())

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    const trimmedEmail = email.trim()
    
    if (!trimmedEmail) {
      setSuccessMessage(null)
      setErrorMessage(t('errors.required') || 'Email is required.')
      return
    }
    if (!validateEmail(trimmedEmail)) {
      setSuccessMessage(null)
      setErrorMessage(t('errors.invalid'))
      return
    }

    if (isRequesting) return

    setIsRequesting(true)
    setErrorMessage(null)

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
          body: JSON.stringify({ email: trimmedEmail }),
          signal: controller.signal,
        }
      )

      if (typeof window !== 'undefined') {
        localStorage.setItem('typus_email_provided', '1');
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'subscribe',
          user_data: {
            email: trimmedEmail,
          },
        })
      }

      setEmail('')
      if (onSuccess) {
        onSuccess()
      } else {
        router.push('/pricing')
      }
    } catch (error: any) {
      if (error?.name === 'AbortError') {
        setErrorMessage(t('errors.timeout'))
      } else {
        setErrorMessage(error?.message || t('errors.unexpected'))
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
      className={`w-full max-w-5xl mx-auto ${showFeatures ? 'mt-4 px-4' : 'mt-2 px-0'}`}
    >
      <div className='w-full max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2.5'>
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
            />
          </div>

          <motion.button
            type='submit'
            animate={{
              scale: [1, 1.015, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
            disabled={isRequesting}
            className="z-[9999] rounded-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border-2 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out flex items-center justify-center gap-2 sm:gap-3.5 bg-[#FFFFFF]/95 dark:bg-neutral-950/95 backdrop-blur-md text-neutral-800 dark:text-neutral-100 cursor-pointer hover:scale-[1.03] active:scale-95 group font-medium w-full text-center"
          >
            <div className="relative flex-shrink-0">
              <Mail className="w-5.5 h-5.5 text-black dark:text-neutral-100 group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </div>
            <span className="text-[9px] sm:text-xs md:text-sm font-bold tracking-wider uppercase leading-tight sm:leading-none whitespace-nowrap" style={{ fontFamily: 'Arial' }}>
              {t('learnMore')}
            </span>
            {isRequesting && (
              <IconLoader2 className='animate-spin ms-1 size-4' />
            )}
          </motion.button>
        </form>

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
          <MailIcon size={16} strokeWidth={1.5} className='mt-0.5 shrink-0' />
          <span
            className='text-[11px] text-gray-600 dark:text-gray-300 leading-normal'
            style={{ fontFamily: 'Arial' }}
          >
            {t('description')}
          </span>
        </div>
      </div>
      
      {showFeatures && (
        <div className='mt-6 flex flex-wrap items-center justify-center gap-2 w-full max-w-4xl mx-auto'>
          {[
            t('features.caseStudies'),
            t('features.exclusiveOffers'),
            t('features.interactiveTutorial'),
            t('features.interactiveShowcase'),
            t('features.freeInitial'),
            t('features.viewLiveDemo')
          ].map((feature, idx) => (
            <div
              key={idx}
              className='flex items-center gap-1.5 min-w-0 bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 px-3 py-1.5 rounded-full shadow-sm'
            >
              <IconCheck className='size-3 md:size-4 text-emerald-700 dark:text-emerald-400 flex-shrink-0' stroke={3} />
              <span className='text-[10px] md:text-[12px] text-black dark:text-white font-medium uppercase tracking-wider break-words whitespace-normal' style={{ fontFamily: 'Arial' }}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
