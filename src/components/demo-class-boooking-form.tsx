import { cn } from '@/lib/utils'
import {
    IconAlertCircle,
    IconCheck,
    IconLoader2
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import FormPhoneInput from './form/FormPhoneInput'

interface BookingDemoClassFormProps {
  className?: string
  showTitle?: boolean
}

const apiUrl = '/api/hubspot'

export default function BookingDemoClassForm({ className, showTitle = true }: BookingDemoClassFormProps) {
  const t = useTranslations('BookingDemoClassForm')
  const tPricing = useTranslations('Pricing')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isRequesting, setIsRequesting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string | null>>({})

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    companyName: '',
    phoneNumber: '',
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

    if (!formData.name.trim()) newErrors.name = t('errors.nameRequired')
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

    try {
      const response = await fetch(
        apiUrl,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            position: formData.position,
            email: formData.email,
            ...(formData.companyName && { company: formData.companyName }),
            ...(formData.phoneNumber && { phone: formData.phoneNumber.startsWith('+') ? formData.phoneNumber : `+${formData.phoneNumber}` }),
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
      setFormData({
        name: '',
        position: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        newsletter: true,
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

  const inputClasses = 'w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none disabled:opacity-60 transition-all focus:border-gray-400 shadow-sm rounded-none'
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
      {showTitle && (
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left" style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>
          {tPricing('bookDemo')}
        </h2>
      )}
      <form onSubmit={handleSubmit} className='space-y-4' noValidate>
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'> */}
        <div className='flex flex-col'>
          <input
            type='text'
            name='name'
            placeholder={t('namePlaceholder')}
            className={cn(inputClasses, errors.name && errorClasses)}
            value={formData.name}
            onChange={handleChange}
            disabled={isRequesting}
          />
          <ErrorMessage error={errors.name} />
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
        {/* </div> */}

        {/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'> */}
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
        {/* </div> */}

        <FormPhoneInput
          name="phoneNumber"
          label={t('phoneLabel')}
          placeholder={t('phonePlaceholder')}
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          error={errors.phoneNumber}
          disabled={isRequesting}
        />

        <div className="pt-2">
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

        <button
          type='submit'
          className='w-full py-4 bg-black text-white text-sm transition-all cursor-pointer hover:bg-black/90 font-bold flex items-center justify-center gap-2 disabled:opacity-60 active:scale-[0.99] uppercase tracking-widest rounded-none mt-2'
          style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
          disabled={isRequesting}
        >
          <span>{tPricing('bookDemo')}</span>
          {isRequesting && <IconLoader2 className='animate-spin size-4' />}
        </button>
      </form>

      {errorMessage && (
        <div
          role='alert'
          className='mt-3 flex items-center gap-2 text-[11px] text-red-600 bg-red-50/50 p-2 border border-red-100'
        >
          <IconAlertCircle size={14} />
          <span>{errorMessage}</span>
        </div>
      )}
      {successMessage && (
        <div
          role='status'
          className='mt-3 flex items-center gap-2 text-[11px] text-green-600 bg-green-50/50 p-2 border border-green-100'
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
