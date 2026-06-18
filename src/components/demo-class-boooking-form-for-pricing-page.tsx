import { cn } from '@/lib/utils'
import {
  IconAlertCircle,
  IconArrowLeft,
  IconCheck,
  IconLoader2
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import FormPhoneInput from './form/FormPhoneInput'
import { apiUrl } from '@/lib/constants'
import { BreathingAnimationText } from './breathing-animation-text'
import { BarChart3, Image, PhoneCall } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from '@/i18n/navigation'

interface BookingDemoClassFormProps {
  className?: string
  showTitle?: boolean
}


export default function BookingDemoClassFormForPricingPage({ className, showTitle = true }: BookingDemoClassFormProps) {
  const t = useTranslations('BookingDemoClassForm')
  const tPricing = useTranslations('Pricing')
  const tBilder = useTranslations('BilderFlatrate')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isRequesting, setIsRequesting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string | null>>({})
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    position: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    privacy: true,
    newsletter: true,
  })

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  const validateEmail = (value: string) => EMAIL_REGEX.test(value.trim())

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    let processedValue = type === 'checkbox' ? checked : value
    if (value === '  ') {
      return;
    }

    if (type === 'text' || type === 'email') {
      let val = value as string

      if (name === 'email') {
        // Strictly prevent all spaces in email
        processedValue = val.replace(/\s/g, '')
      } else {
        // Prevent leading spaces
        val = val.trimStart()
        // Prevent multiple consecutive spaces
        processedValue = val.replace(/\s\s+/g, ' ')
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: processedValue,
    }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value,
    }))
    if (errors.phoneNumber) {
      setErrors(prev => ({ ...prev, phoneNumber: null }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string | null> = {}

    if (!formData.firstName.trim()) newErrors.firstName = t('errors.nameRequired') || 'Required'
    if (!formData.lastName.trim()) newErrors.lastName = t('errors.nameRequired') || 'Required'
    if (!formData.position.trim()) newErrors.position = t('errors.positionRequired')
    if (!formData.companyName.trim()) newErrors.companyName = t('errors.companyNameRequired')
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 5) newErrors.phoneNumber = t('errors.phoneNumberRequired')

    if (!formData.email.trim()) {
      newErrors.email = t('errors.emailRequired')
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('errors.invalid')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      setSuccessMessage(null)
      return
    }

    if (isRequesting) return

    setIsRequesting(true)
    setErrorMessage(null)
    setSuccessMessage(null)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    const formattedPhoneNumber = formData.phoneNumber.trim()
      ? (formData.phoneNumber.startsWith('+') ? formData.phoneNumber : `+${formData.phoneNumber}`)
      : ''

    try {
      const response = await fetch(
        `${apiUrl}/api/hubspot`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            position: formData.position,
            email: formData.email,
            ...(formData.companyName && { company: formData.companyName }),
            ...(formData.phoneNumber && { phone: formattedPhoneNumber }),
            marketingConsent: formData.newsletter
          }),
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
          data?.message || data?.error || response.statusText || t('errors.unexpected')
        throw new Error(serverMessage)
      }

      setSuccessMessage(t('success'))
      setIsSubmitted(true)
      router.push('/book-a-demo/dominik-denny')

      // GTM: fire generate_lead conversion event (picked up by Google Ads & Meta tags in GTM)
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'generate_lead',
          form_name: 'book_demo_call',
          lead_email: formData.email,
          lead_name: `${formData.firstName} ${formData.lastName}`.trim(),
          lead_company: formData.companyName,
          lead_phone: formattedPhoneNumber,
        })
      }
      setFormData({
        firstName: '',
        lastName: '',
        position: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        newsletter: true,
        privacy: true,
      })
      setErrors({})
    } catch (error: any) {
      console.error('HubSpot Submission Error:', error);
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

  const inputClasses = 'w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none disabled:opacity-60 transition-all focus:border-gray-400 shadow-sm rounded-xl'
  const errorClasses = 'border-red-500 dark:border-red-500'

  const ErrorMessage = ({ error }: { error: string | null }) => {
    if (!error) return null
    return (
      <div className='mt-0.5 flex items-center gap-1.5 text-[10px] text-red-600'>
        <IconAlertCircle size={10} />
        <span>{error}</span>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
      className={cn(
        'w-full max-w-lg mx-auto',
        className
      )}
    >

      {/* <h2 className="text-2xl  p-1 text-gray-900 mb-0.5 text-left" style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>
        {tPricing('bookDemo')}
      </h2> */}
      {/* <div className="mb-0.5">
        <BreathingAnimationText animationType='black-gray'>
          <h2 className='text-[18px] font-normal text-neutral-900 dark:text-white tracking-tight' style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>
            {t('cta.t')}
          </h2>
        </BreathingAnimationText>
      </div> */}

      {/* Advisor Profile Card */}
      <div className='w-full my-0.5 p-1'>
        <div className='flex items-center gap-4 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 p-1 w-full text-left backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.02)]'>
          <div className='w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-neutral-200 dark:border-neutral-700'>
            <img
              src='/DominikDenny.png'
              alt={tBilder('benefits.advisorName')}
              className='w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110'
            />
          </div>
          <div className='flex-1'>
            <p className='text-black py dark:text-white  text-base tracking-widest'>{tBilder('benefits.advisorName')}</p>
            {/* <p className='text-neutral-500 text-xs uppercase tracking-wider mt-1'>{tBilder('benefits.advisorRole')}</p> */}
          </div>
        </div>
      </div>

      <div className='flex flex-col items-start gap-8 my-3'>
        <ul className='space-y-2 text-left w-full'>
          {[
            // { icon: Image, key: 'point1' },
            { icon: BarChart3, key: 'point4',id:4 },
            // { icon: PhoneCall, key: 'point3',id:2 }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <li key={i} className='flex items-center gap-4 group'>
                <div className='w-6 h-6 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center flex-shrink-0 rounded-none border border-neutral-100 dark:border-neutral-800 shadow-sm transition-colors group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800'>
                  <Icon className='w-3 h-3 text-neutral-600 dark:text-neutral-400' strokeWidth={1.5} />
                </div>
                <span className='text-[14px] font-medium text-neutral-600 dark:text-neutral-400 leading-tight' style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
                  {t(`cta.point${item.id}` as any)}
                </span>
              </li>
            )
          })}
        </ul>


      </div>
      {/* </motion.div> */}
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full space-y-4"
        >
          <button
            onClick={() => setIsSubmitted(false)}
            className="flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-black transition-colors group mb-2"
          >
            <IconArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span>{t('backAction')}</span>
          </button>
          <div className="w-full h-[600px] overflow-hidden rounded-xl border border-neutral-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
            <iframe
              src="https://calendar.app.google/SE4uynXtibyYmAe36"
              width="100%"
              height="100%"
              className="w-full h-full border-none"
              title="Google Calendar Booking"
            />
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4' noValidate>
          {/* ... existing form fields ... */}
          <div className='flex gap-3'>
            <div className='flex-1 flex flex-col'>
              <input
                type='text'
                name='firstName'
                placeholder={t('firstNamePlaceholder') || 'First Name'}
                className={cn(inputClasses, errors.firstName && errorClasses)}
                value={formData.firstName}
                onChange={handleChange}
                disabled={isRequesting}
              />
              <ErrorMessage error={errors.firstName} />
            </div>
            <div className='flex-1 flex flex-col'>
              <input
                type='text'
                name='lastName'
                placeholder={t('lastNamePlaceholder') || 'Last Name'}
                className={cn(inputClasses, errors.lastName && errorClasses)}
                value={formData.lastName}
                onChange={handleChange}
                disabled={isRequesting}
              />
              <ErrorMessage error={errors.lastName} />
            </div>
          </div>
          <div className='flex flex-col'>
            <input
              type='text'
              name='position'
              placeholder={t('positionPlaceholder')}
              className={cn(inputClasses, errors.position && errorClasses)}
              value={formData.position}
              onChange={handleChange}
              disabled={isRequesting}
            />
            <ErrorMessage error={errors.position} />
          </div>

          <div className='flex flex-col'>
            <input
              type='email'
              name='email'
              placeholder={t('placeholder')}
              className={cn(inputClasses, errors.email && errorClasses)}
              value={formData.email}
              onChange={handleChange}
              disabled={isRequesting}
            />
            <ErrorMessage error={errors.email} />
          </div>
          <div className='flex flex-col'>
            <input
              type='text'
              name='companyName'
              placeholder={t('companyPlaceholder')}
              className={cn(inputClasses, errors.companyName && errorClasses)}
              value={formData.companyName}
              onChange={handleChange}
              disabled={isRequesting}
            />
            <ErrorMessage error={errors.companyName} />
          </div>

          <FormPhoneInput
            name="phoneNumber"
            label={t('phoneLabel')}
            placeholder={t('phonePlaceholder')}
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            error={errors.phoneNumber}
            disabled={isRequesting}
          />

          <div className="">
            <div className='flex items-start gap-3 px-1'>
              <input
                type='checkbox'
                id='newsletter'
                name='newsletter'
                className='mt-1 size-4 border-gray-300 accent-black cursor-pointer rounded-sm'
                checked={formData.newsletter}
                onChange={handleChange}
                disabled={isRequesting}
              />
              <label htmlFor='newsletter' className='text-xs text-gray-600 cursor-pointer select-none leading-tight'>
                {t('newsletterLabel')}
              </label>
            </div>
          </div>

          <div className="">
            <div className='flex items-start gap-3 px-1'>
              <input
                type='checkbox'
                id='privacy'
                name='privacy'
                className='mt-1 size-4 border-gray-300 accent-black cursor-pointer rounded-sm'
                checked={formData.privacy}
                onChange={handleChange}
                disabled={isRequesting}
              />
              <label htmlFor='privacy' onClick={() => window.open('https://app.typus.ai/data-privacy', '_blank')} className='text-xs text-gray-600 cursor-pointer select-none leading-tight'>
                {t('privacyLabel')}
              </label>
            </div>
          </div>

          {/* <button
            type='submit'
            className='w-full py-3 bg-black text-white text-sm transition-all cursor-pointer hover:bg-black/90 font-bold flex items-center justify-center gap-2 disabled:opacity-60 active:scale-[0.99] uppercase tracking-widest rounded-xl mt-2'
            disabled={isRequesting}
          >
            <span>{tPricing('bookDemo')}</span>
            {isRequesting && <IconLoader2 className='animate-spin size-4' />}
          </button> */}
          <Button
           type='submit'
             disabled={isRequesting}
            className='bg-black text-white cursor-pointer w-full px-4 py-2 text-[10px] font-medium uppercase tracking-wide border border-black hover:bg-gray-900 hover:text-white transition-all duration-200 rounded-2xl'
            style={{
              fontFamily: "'Soyuz Grotesk', sans-serif",
            }}
          >
            <span>{tPricing('bookDemo')}</span>
            {isRequesting && <IconLoader2 className='animate-spin size-4' />}
          </Button>
        </form>
      )}

      {errorMessage && (
        <div
          role='alert'
          className='mt-3 flex items-center gap-2 text-[11px] text-red-600 bg-red-50/50 p-2 border border-red-100 rounded-xl'
        >
          <IconAlertCircle size={14} />
          <span>{errorMessage}</span>
        </div>
      )}
      {successMessage && (
        <div
          role='status'
          className='mt-3 flex items-center gap-2 text-[11px] text-green-600 bg-green-50/50 p-2 border border-green-100 rounded-xl'
        >
          <IconCheck size={14} />
          <span>{successMessage}</span>
        </div>
      )}
      {/* <div className='mt-6 flex items-start gap-3 px-1'>
        <IconMail size={16} className='text-gray-400 mt-0.5' />
        <span
          className='text-xs text-gray-500 leading-relaxed'
          style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
        >
          {t('description')}
        </span>
      </div> */}
    </motion.div>
  )
}
