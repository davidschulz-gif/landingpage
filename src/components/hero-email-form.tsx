import { apiUrl, appUrl } from '@/lib/constants'
import {
  IconAlertCircle,
  IconCheck,
  IconLoader2,
  IconMail,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { Mail, MailIcon, PhoneCall } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
  const [phone, setPhone] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [step, setStep] = useState<1 | 2>(1)
  const router = useRouter();

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  const validateEmail = (value: string) => EMAIL_REGEX.test(value.trim())

  const handleSubmitStep1 = async () => {
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

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStep(2)
    } catch (error: any) {
      setErrorMessage(error?.message || t('errors.unexpected'))
    } finally {
      clearTimeout(timeoutId)
      setIsRequesting(false)
    }
  }

  const handleSubmitStep2 = async () => {
    const trimmedEmail = email.trim()
    const trimmedPhone = phone.trim()
    const trimmedFirstName = firstName.trim()
    const trimmedLastName = lastName.trim()
    
    if (!trimmedPhone || !trimmedFirstName || !trimmedLastName) {
      setSuccessMessage(null)
      setErrorMessage(t('errors.required') || 'All fields are required.')
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
          body: JSON.stringify({ email: trimmedEmail, phone: trimmedPhone, firstName: trimmedFirstName, lastName: trimmedLastName }),
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
            email: trimmedEmail,
            phone: trimmedPhone,
            firstName: trimmedFirstName,
            lastName: trimmedLastName,
          },
        })
      }

      setEmail('')
      setPhone('')
      setFirstName('')
      setLastName('')
      setStep(1)
      if (onSuccess) {
        onSuccess()
      } else {
        router.push('/book-a-demo/ada-von-kayser')
        // window.dispatchEvent(new CustomEvent('open-before-you-go'))
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
        <div className='flex flex-col gap-2.5'>
          <div className={`flex flex-col sm:flex-row items-stretch gap-2.5 ${step === 2 ? 'sm:flex-wrap' : ''}`}>
            {step === 1 ? (
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
            ) : (
              <>
                <input
                  type='text'
                  required
                  placeholder={t('firstNamePlaceholder')}
                  aria-label='First Name'
                  className='flex-1 border border-black/10 dark:border-white/20 bg-white/70 dark:bg-white/10 px-4 py-2.5 text-sm text-black placeholder-gray-500 outline-none disabled:opacity-60 min-w-[140px]'
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  disabled={isRequesting}
                />
                <input
                  type='text'
                  required
                  placeholder={t('lastNamePlaceholder')}
                  aria-label='Last Name'
                  className='flex-1 border border-black/10 dark:border-white/20 bg-white/70 dark:bg-white/10 px-4 py-2.5 text-sm text-black placeholder-gray-500 outline-none disabled:opacity-60 min-w-[140px]'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  disabled={isRequesting}
                />
                <div className="flex-1 min-w-[200px] phone-input-container w-full sm:w-auto">
                  <PhoneInput
                    country={'de'}
                    value={phone}
                    onChange={p => setPhone(p)}
                    enableSearch={true}
                    placeholder='Phone number'
                    containerClass="w-full flex"
                    inputClass="!w-full !flex-1 !border-black/10 dark:!border-white/20 !bg-white/70 dark:!bg-white/10 !text-sm !text-black !placeholder-gray-500 !outline-none disabled:!opacity-60 !pl-[48px] !h-[42px] !rounded-none"
                    buttonClass="!border-black/10 dark:!border-white/20 !bg-white/70 dark:!bg-white/10 !rounded-none !border-r-0"
                    disabled={isRequesting}
                  />
                </div>
              </>
            )}
          </div>

        
          <motion.button
            animate={{
              scale: [1, 1.015, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
            onClick={step === 1 ? handleSubmitStep1 : handleSubmitStep2}
            disabled={isRequesting}
            className="z-[9999] rounded-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border-2 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out flex items-center justify-center gap-2 sm:gap-3.5 bg-[#fcfcfd]/95 dark:bg-neutral-950/95 backdrop-blur-md text-neutral-800 dark:text-neutral-100 cursor-pointer hover:scale-[1.03] active:scale-95 group font-medium w-full text-center"
          >
            <div className="relative flex-shrink-0">
              <Mail className="w-5.5 h-5.5 text-black dark:text-neutral-100 group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </div>
            <span className="text-[9px] sm:text-xs md:text-sm font-bold tracking-wider uppercase leading-tight sm:leading-none whitespace-nowrap" style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
              {step === 1 ? t('learnMore') : t('submitDetails')}
            </span>
            {isRequesting ? (
              <IconLoader2 className='animate-spin ms-1 size-4' />
            ) : (
              ''
            )}
          </motion.button>
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
         {step === 1 ? <MailIcon size={16} strokeWidth={1.5} className='mt-0.5 shrink-0' /> :  <PhoneCall size={16} strokeWidth={1.5} className='mt-0.5 shrink-0' />}
                                 <span
            className='text-[11px] text-gray-600 dark:text-gray-300 leading-normal'
            style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
          >
            {step === 1 ? t('description') : t('phoneNameReason')}
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
