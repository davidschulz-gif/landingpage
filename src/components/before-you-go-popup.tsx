'use client'

import {
  IconArrowLeft,
  IconArrowRight,
  IconCalendar,
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
import { usePathname, useRouter } from 'next/navigation'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { BarChart3, MailIcon } from 'lucide-react'
import Image from 'next/image'
import TypusLogoBlack from './common/typus-logo-black'

const TRIGGER_DELAY_MS = 30000
const DOMINIK_CALENDAR = 'https://calendar.app.google/SE4uynXtibyYmAe36'
const ADA_CALENDAR = 'https://calendar.app.google/yU8G7Q6Lzmp6SfUEA'

type Step = 1 | 2 | 3 | 4

export default function BeforeYouGoPopup() {
  const t = useTranslations('BeforeYouGo')
  const tDemo = useTranslations('BookingDemoClassForm')

  const [isOpen, setIsOpen] = useState(false)
  const [timerTriggered, setTimerTriggered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [step, setStep] = useState<Step>(1)
  const [openCalendars, setOpenCalendars] = useState<{ dominik: boolean; ada: boolean }>({ dominik: false, ada: false })
  const [errors, setErrors] = useState<{ email?: string; phone?: string; firstName?: string; lastName?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [iframeLoading, setIframeLoading] = useState<{ dominik: boolean; ada: boolean }>({ dominik: true, ada: true })

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  const isPricingPage = pathname?.endsWith('/pricing') || pathname?.includes('/pricing')

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined' && window.location.search.includes('test=1')) {
      setTimerTriggered(false)
    }
  }, [])

  const show = (_triggerType: string) => {
    if (isOpen) return
    setIsOpen(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  // Trigger 1: 30-second timer
  useEffect(() => {
    if (timerTriggered || !mounted) return
    timeoutRef.current = setTimeout(() => {
      setTimerTriggered(true)
      show('30s Timer')
    }, TRIGGER_DELAY_MS)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [timerTriggered, mounted])

  // Trigger 2: Exit intent
  useEffect(() => {
    if (!mounted) return
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
  }, [mounted, isOpen])

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
      setEmail(''); setPhone(''); setFirstName(''); setLastName('')
      setStep(1); setErrors({}); setOpenCalendars({ dominik: false, ada: false }); setIframeLoading({ dominik: true, ada: true })
    }, 350)
  }

  const validateStep1 = () => {
    const e: typeof errors = {}
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = t('errorEmail')
    setErrors(e)
    return !e.email
  }

  const validateStep2 = () => {
    const e: typeof errors = {}
    if (!firstName) e.firstName = tDemo('errorRequired') || 'Required'
    if (!lastName) e.lastName = tDemo('errorRequired') || 'Required'
    if (!phone || phone.length < 5) e.phone = t('errorPhone') || 'Required'
    setErrors(e)
    return !e.firstName && !e.lastName && !e.phone
  }

  const handleSubmitStep1 = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validateStep1()) return
    setIsSubmitting(true)
    const ctrl = new AbortController()
    const tid = setTimeout(() => ctrl.abort(), 10000)
    try {
      await fetch(`${apiUrl}/api/bigmailer/add-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
        signal: ctrl.signal,
      })
    } catch (_) {}
    finally { clearTimeout(tid); setIsSubmitting(false); setStep(2) }
  }

  const handleSubmitStep2 = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validateStep2()) return
    setIsSubmitting(true)
    const ctrl = new AbortController()
    const tid = setTimeout(() => ctrl.abort(), 10000)
    try {
      const res = await fetch(`${apiUrl}/api/bigmailer/add-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), phone: phone.trim(), firstName: firstName.trim(), lastName: lastName.trim() }),
        signal: ctrl.signal,
      })
      if (res.ok && typeof window !== 'undefined') {
        ;(window as any).dataLayer = (window as any).dataLayer || []
        ;(window as any).dataLayer.push({ event: 'subscribe', user_data: { email: email.trim(), phone: phone.trim(), firstName: firstName.trim(), lastName: lastName.trim() } })
      }
    } catch (_) {}
    finally { clearTimeout(tid); setIsSubmitting(false); setStep(3) }
  }

  const toggleCalendar = (who: 'dominik' | 'ada') => {
    setOpenCalendars(prev => ({ ...prev, [who]: !prev[who] }))
    setIframeLoading(prev => ({ ...prev, [who]: true }))
  }

  if (!mounted) return null
  if (pathname?.includes('/book-a-demo')) return null

  // ── Step indicator ──────────────────────────────────────────────────────
  const StepDots = ({ dark }: { dark?: boolean }) => (
    <div className='flex items-center justify-center gap-1.5 mb-5'>
      {[1, 2, 3].map(s => (
        <div
          key={s}
          className={`rounded-full transition-all duration-300 ${
            s === Math.min(step, 3)
              ? dark ? 'w-5 h-1.5 bg-white' : 'w-5 h-1.5 bg-black'
              : s < step
                ? dark ? 'w-1.5 h-1.5 bg-white/60' : 'w-1.5 h-1.5 bg-neutral-400'
                : dark ? 'w-1.5 h-1.5 bg-white/20' : 'w-1.5 h-1.5 bg-neutral-200'
          }`}
        />
      ))}
    </div>
  )

  // ── Shared step 1 bullet list ───────────────────────────────────────────
  const BulletList = ({ dark }: { dark?: boolean }) => (
    <div className={`w-full border rounded-2xl p-4 mb-5 space-y-3 text-left ${dark ? 'bg-white/5 border-white/10' : 'bg-neutral-50 border-neutral-100'}`}>
      {([
        { icon: <IconCheck size={11} strokeWidth={3} />, key: 'viewFreeBullet1', color: dark ? 'bg-white/15 text-white' : 'bg-emerald-50 text-emerald-600' },
        { icon: <IconCheck size={11} strokeWidth={3} />, key: 'viewFreeBullet2', color: dark ? 'bg-white/15 text-white' : 'bg-emerald-50 text-emerald-600' },
        { icon: <IconCheck size={11} strokeWidth={3} />, key: 'viewFreeBullet3', color: dark ? 'bg-white/15 text-white' : 'bg-emerald-50 text-emerald-600' },
        { icon: <IconCheck size={11} strokeWidth={3} />, key: 'viewFreeBullet4', color: dark ? 'bg-white/15 text-white' : 'bg-emerald-50 text-emerald-600' },
        // { icon: <IconCheck size={11} strokeWidth={3} />, key: 'viewFreeBullet5', color: dark ? 'bg-white/15 text-white' : 'bg-emerald-50 text-emerald-600' },
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

  // ── Calendar iframe ─────────────────────────────────────────────
  const CalendarIframe = ({ who, dark }: { who: 'dominik' | 'ada'; dark?: boolean }) => {
    const url = who === 'dominik' ? DOMINIK_CALENDAR : ADA_CALENDAR;
    return (
      <div className={`relative w-full h-full min-h-[480px] rounded-2xl overflow-hidden border ${dark ? 'border-white/10' : 'border-neutral-200'}`}>
        {iframeLoading[who] && (
          <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 ${dark ? 'bg-white/5' : 'bg-neutral-50'}`}>
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className={`w-6 h-6 rounded-full border-2 border-t-transparent ${dark ? 'border-white/40' : 'border-neutral-300'}`} />
            <p className={`text-[11px] ${dark ? 'text-white/40' : 'text-neutral-400'}`}>Kalender wird geladen…</p>
          </div>
        )}
        <iframe src={url} title='Book a call' width='100%' height='100%' style={{ border: 'none', display: 'block', minHeight: '480px' }} onLoad={() => setIframeLoading(prev => ({ ...prev, [who]: false }))} allow='camera; microphone' />
      </div>
    );
  }

  // ── Step 3: Booking choice cards ────────────────────────────────────────
  const BookingCards = ({ dark }: { dark?: boolean }) => (
    <div className='w-full flex flex-col items-center transition-all duration-500'>
      <h3 className={`text-base font-semibold mb-2 text-center max-w-sm ${dark ? 'text-white' : 'text-neutral-900'}`}>{t('step3Title')}</h3>
      <div className={`text-[11px] text-center mb-5 font-medium leading-relaxed flex flex-col items-center gap-1 ${dark ? 'text-white/70' : 'text-neutral-600'}`}>
        <p>- {t('bookBothInstruction1')}</p>
        <p>- {t('bookBothInstruction2')}</p>
      </div>

      <div className='flex flex-col lg:flex-row gap-4 items-center justify-center w-full transition-all duration-500'>
        {/* Dominik Calendar */}
        {openCalendars.dominik && (
          <div className='flex-1 w-full min-w-[300px] lg:min-w-[400px] animate-in fade-in slide-in-from-right-8 duration-500'>
            {CalendarIframe({ who: 'dominik', dark })}
          </div>
        )}

        <div className='flex flex-col gap-3 w-full max-w-[280px] shrink-0'>
          {/* ── Dominik Card ── */}
          <button
            type='button'
            onClick={() => { setIsOpen(false); router.push(`/${pathname?.split('/')[1] || 'de'}/book-a-demo/dominik-denny`); }}
            className={`flex-1 flex flex-col items-center text-center rounded-2xl p-5 border transition-all duration-300 group cursor-pointer
              ${dark
                ? (openCalendars.dominik ? 'bg-white/10 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25')
                : (openCalendars.dominik ? 'bg-white border-black shadow-lg ring-1 ring-black' : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300 hover:bg-white hover:shadow-lg')
              }`}
          >
            {/* Photo */}
            <div className={`relative w-16 h-16 rounded-full overflow-hidden mb-3 ring-2 ring-offset-2 transition-all duration-300 group-hover:scale-105 ${openCalendars.dominik ? (dark ? 'ring-white/40 grayscale-0' : 'ring-black grayscale-0') : 'ring-neutral-200 group-hover:ring-neutral-400'}`}>
              <Image src='/DominikDenny.png' alt='Dominik Denny' fill className={`object-cover transition-all duration-500 ${openCalendars.dominik ? '' : 'grayscale group-hover:grayscale-0'}`} />
            </div>
            <p className={`text-[10px] font-bold tracking-[0.12em] mb-0.5 ${dark ? 'text-white' : 'text-neutral-900'}`}>{t('dominikName')}</p>
            <p className={`text-[9px] tracking-[0.1em] mb-3 ${dark ? 'text-white/40' : 'text-neutral-400'}`}>{t('dominikRole')}</p>
            <p className={`text-[11px] leading-snug mb-4 ${dark ? 'text-white/65' : 'text-neutral-500'}`}>{t('dominikDesc')}</p>
            <div className={`flex items-center justify-center gap-1.5 w-full py-2.5 px-3 text-[11px] font-semibold rounded-xl transition-all duration-200
              ${dark
                ? (openCalendars.dominik ? 'bg-white text-black' : 'bg-white/10 text-white border border-white/20 group-hover:bg-white group-hover:text-black')
                : (openCalendars.dominik ? 'bg-black text-white' : 'bg-white text-neutral-900 border border-neutral-200 group-hover:bg-black group-hover:text-white group-hover:border-black')
              }`}>
              <IconCalendar size={12} strokeWidth={2} />
              {t('dominikCta')}
            </div>
          </button>

          {/* ── Ada Card ── */}
          <button
            type='button'
            onClick={() => { setIsOpen(false); router.push(`/${pathname?.split('/')[1] || 'de'}/book-a-demo/ada-von-kayser`); }}
            className={`flex-1 flex flex-col items-center text-center rounded-2xl p-5 border transition-all duration-300 group cursor-pointer
              ${dark
                ? (openCalendars.ada ? 'bg-white/10 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25')
                : (openCalendars.ada ? 'bg-white border-black shadow-lg ring-1 ring-black' : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300 hover:bg-white hover:shadow-lg')
              }`}
          >
            {/* Photo */}
            <div className={`relative w-16 h-16 rounded-full overflow-hidden mb-3 ring-2 ring-offset-2 transition-all duration-300 group-hover:scale-105 ${openCalendars.ada ? (dark ? 'ring-white/40 grayscale-0' : 'ring-black grayscale-0') : 'ring-neutral-200 group-hover:ring-neutral-400'}`}>
              <Image src='/team/adavkayser.jpeg' alt='Ada Von Kayser' fill className={`object-cover transition-all duration-500 ${openCalendars.ada ? '' : 'grayscale group-hover:grayscale-0'}`} />
            </div>
            <p className={`text-[10px] font-bold tracking-[0.12em] mb-0.5 ${dark ? 'text-white' : 'text-neutral-900'}`}>{t('adaName')}</p>
            <p className={`text-[9px] tracking-[0.1em] mb-3 ${dark ? 'text-white/40' : 'text-neutral-400'}`}>{t('adaRole')}</p>
            <p className={`text-[11px] leading-snug mb-4 ${dark ? 'text-white/65' : 'text-neutral-500'}`}>{t('adaDesc')}</p>
            <div className={`flex items-center justify-center gap-1.5 w-full py-2.5 px-3 text-[11px] font-semibold rounded-xl transition-all duration-200
              ${dark
                ? (openCalendars.ada ? 'bg-white text-black' : 'bg-white/10 text-white border border-white/20 group-hover:bg-white group-hover:text-black')
                : (openCalendars.ada ? 'bg-black text-white' : 'bg-white text-neutral-900 border border-neutral-200 group-hover:bg-black group-hover:text-white group-hover:border-black')
              }`}>
              <IconVideo size={12} strokeWidth={2} />
              {t('adaCta')}
            </div>
          </button>

          {/* Case Study Button */}
          <button
            type="button"
            onClick={() => { setIsOpen(false); router.push(`/${pathname?.split('/')[1] || 'de'}/siegrist`); }}
            className={`w-full mt-2 py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border shadow-sm group
              ${dark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border-neutral-200'}
            `}
          >
            {t('caseStudyBtn')}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        </div>

        {/* Ada Calendar */}
        {openCalendars.ada && (
          <div className='flex-1 min-w-[300px] lg:min-w-[400px] animate-in fade-in slide-in-from-left-8 duration-500'>
            {CalendarIframe({ who: 'ada', dark })}
          </div>
        )}
      </div>
    </div>
  )

  // ── Shared form elements ────────────────────────────────────────────────
  const SubmitBtn = ({ label, dark }: { label: string; dark?: boolean }) => (
    <button
      type='submit'
      disabled={isSubmitting}
      className={`flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold transition-all duration-300 rounded-xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed
        ${dark ? 'bg-white text-black hover:bg-white/90 shadow-lg' : 'bg-black text-white hover:bg-neutral-800 shadow-sm'}`}
    >
      {isSubmitting ? (
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className={`w-4 h-4 rounded-full border-2 border-t-transparent ${dark ? 'border-white/40' : 'border-white/40'}`}
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
            className='fixed inset-0 z-[999998] bg-black/85 backdrop-blur-md'
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
                /* ══════ BLACK MODAL ══════ */
                <div
                  className={`relative pointer-events-auto overflow-hidden bg-black rounded-3xl border border-white/10 shadow-2xl transition-all duration-500 w-full ${step === 3 && openCalendars.dominik && openCalendars.ada ? 'max-w-6xl' : (step === 3 && (openCalendars.dominik || openCalendars.ada) ? 'max-w-4xl' : 'max-w-md')}`}
                  onClick={e => e.stopPropagation()}
                >
                  <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent' />
                  <button onClick={handleClose} className='absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-all duration-300 hover:rotate-90 hover:scale-110 z-10' aria-label='Close'>
                    <IconX size={18} strokeWidth={1.5} />
                  </button>

                  <div className='px-6 py-6 sm:px-8 sm:py-8'>
                    {/* Badge — only steps 1-2 */}
                    {step <= 2 && (
                      <>
                        <div className='flex items-center gap-2 mb-4'>
                          <div className='flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase border border-white text-white'>
                            <IconClock size={11} strokeWidth={2} />{t('badge')}
                          </div>
                        </div>
                        <h2 className='text-lg sm:text-xl font-normal leading-snug mb-2 text-white tracking-tight'>{t('title')}</h2>
                        <p className='text-xs leading-relaxed mb-4 text-white/60 font-normal'>{t('body')}</p>
                      </>
                    )}

                    {/* Feature rows — step 1 only */}
                    {step === 1 && (
                      <div className='flex flex-col gap-2 mb-5'>
                        {([
                          { icon: <BarChart3 size={12} strokeWidth={1.5} className='text-white' />, label: tDemo('cta.point4') },
                          { icon: <IconVideo size={12} strokeWidth={1.5} className='text-white' />, label: t('viewFreeBullet7') },
                          { icon: <IconDeviceDesktopShare size={12} strokeWidth={1.5} className='text-white' />, label: t('viewFreeBullet8') },
                        ] as const).map(({ icon, label }) => (
                          <div key={label as string} className='flex items-center gap-3'>
                            <div className='w-6 h-6 bg-white/5 flex items-center justify-center shrink-0 border border-white/10'>{icon}</div>
                            <span className='text-[13px] font-medium text-white/90 leading-tight'>{label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {step <= 2 && <StepDots dark />}

                    {/* Step 1 */}
                    {step === 1 && (
                      <form onSubmit={handleSubmitStep1}>
                        <div className='mb-4'>
                          <input type='email' placeholder={t('emailPlaceholder')} value={email}
                            onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: undefined })) }}
                            className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500/60' : 'border-white/10'} text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 text-sm rounded-xl transition-colors`}
                            required
                          />
                          {errors.email && <p className='text-red-400 text-[10px] mt-1.5'>{errors.email}</p>}
                        </div>
                        <SubmitBtn label={t('continue')} dark />
                        <p className='text-[10px] text-white/25 italic text-center mt-3'>{t('trustText')}</p>
                      </form>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <form onSubmit={handleSubmitStep2} className='space-y-3'>
                        <div className='flex gap-3'>
                          <div className='flex-1'>
                            <input type='text' placeholder={t('firstNamePlaceholder')} value={firstName}
                              onChange={e => { setFirstName(e.target.value); setErrors(p => ({ ...p, firstName: undefined })) }}
                              className={`w-full px-4 py-2.5 bg-white/5 border ${errors.firstName ? 'border-red-500/60' : 'border-white/10'} text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 text-sm rounded-xl transition-colors`} required />
                            {errors.firstName && <p className='text-red-400 text-[10px] mt-1'>{errors.firstName}</p>}
                          </div>
                          <div className='flex-1'>
                            <input type='text' placeholder={t('lastNamePlaceholder')} value={lastName}
                              onChange={e => { setLastName(e.target.value); setErrors(p => ({ ...p, lastName: undefined })) }}
                              className={`w-full px-4 py-2.5 bg-white/5 border ${errors.lastName ? 'border-red-500/60' : 'border-white/10'} text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 text-sm rounded-xl transition-colors`} required />
                            {errors.lastName && <p className='text-red-400 text-[10px] mt-1'>{errors.lastName}</p>}
                          </div>
                        </div>
                        <div>
                          <PhoneInput country='de' value={phone}
                            onChange={p => { setPhone(p); setErrors(prev => ({ ...prev, phone: undefined })) }}
                            enableSearch placeholder={t('phonePlaceholder')} containerClass='w-full flex'
                            inputClass={`!w-full !flex-1 !border-white/10 !bg-white/5 !text-sm !text-white !placeholder-white/30 !outline-none !pl-[48px] !h-[44px] !rounded-xl transition-colors ${errors.phone ? '!border-red-500/60' : ''}`}
                            buttonClass='!border-white/10 !bg-white/5 !rounded-l-xl !border-r-0 hover:!bg-white/10'
                          />
                          {errors.phone && <p className='text-red-400 text-[10px] mt-1.5'>{errors.phone}</p>}
                        </div>
                        <p className='text-[10px] text-white/40 leading-snug'>{t('phoneNameReason')}</p>
                        <SubmitBtn label={t('step2Cta')} dark />
                      </form>
                    )}

                    {/* Step 3 */}
                    {step === 3 && BookingCards({ dark: true })}

                    {/* Dismiss */}
                    <button onClick={handleClose} className='w-full text-center text-[11px] text-white/30 hover:text-white underline mt-4 transition-colors'>
                      {t('dismiss')}
                    </button>
                  </div>
                </div>

              ) : (
                /* ══════ WHITE MODAL ══════ */
                <div
                  className={`relative pointer-events-auto overflow-hidden bg-white rounded-[32px] border border-neutral-100 shadow-2xl transition-all duration-500 w-full ${step === 3 && openCalendars.dominik && openCalendars.ada ? 'max-w-6xl' : (step === 3 && (openCalendars.dominik || openCalendars.ada) ? 'max-w-4xl' : 'max-w-md')}`}
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
                      className='mb-0 flex flex-col items-center space-y-2'
                    >
                      {/* <div className='bg-black size-4'></div> */}
                      <TypusLogoBlack className="size-9 mx-auto" /> 
                      <span
                        // id='typus-logo'
                        className='text-center !font-logo'
                        style={{
                          fontSize: '25px',
                          fontWeight: 700,
                          letterSpacing: '2.5px',
                          lineHeight: '1.3em',
                          color: '#000',
                          textTransform: 'uppercase',
                          fontFamily: 'var(--font-soyuz-grotesk)'
                        }}
                      >
                        typus.AI
                      </span>
                    </motion.div>

                    {/* Title — steps 1-2 */}
                    {step <= 2 && (
                      <>
                        <h2 className='text-xl sm:text-2xl leading-snug mb-2 text-black tracking-tight font-sans'>{t('viewFreeTitle')}</h2>
                        <p className='text-xs sm:text-sm leading-relaxed mb-4 text-neutral-500 max-w-xs font-sans'>{t('viewFreeSubtitle')}</p>
                      </>
                    )}

                    {/* Bullets — step 1 only */}
                    {step === 1 && <BulletList />}

                    {step <= 2 && <StepDots />}

                    {/* Step 1 */}
                    {step === 1 && (
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
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <form onSubmit={handleSubmitStep2} className='w-full text-left space-y-3'>
                        <div className='flex gap-3'>
                          <div className='flex-1'>
                            <input type='text' placeholder={t('firstNamePlaceholder')} value={firstName}
                              onChange={e => { setFirstName(e.target.value); setErrors(p => ({ ...p, firstName: undefined })) }}
                              className={`w-full px-4 py-2.5 bg-white border ${errors.firstName ? 'border-red-400' : 'border-neutral-200'} text-black placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 text-sm rounded-xl transition-colors`} required />
                            {errors.firstName && <p className='text-red-500 text-[10px] mt-1'>{errors.firstName}</p>}
                          </div>
                          <div className='flex-1'>
                            <input type='text' placeholder={t('lastNamePlaceholder')} value={lastName}
                              onChange={e => { setLastName(e.target.value); setErrors(p => ({ ...p, lastName: undefined })) }}
                              className={`w-full px-4 py-2.5 bg-white border ${errors.lastName ? 'border-red-400' : 'border-neutral-200'} text-black placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 text-sm rounded-xl transition-colors`} required />
                            {errors.lastName && <p className='text-red-500 text-[10px] mt-1'>{errors.lastName}</p>}
                          </div>
                        </div>
                        <div>
                          <PhoneInput country='de' value={phone}
                            onChange={p => { setPhone(p); setErrors(prev => ({ ...prev, phone: undefined })) }}
                            enableSearch placeholder={t('phonePlaceholder')} containerClass='w-full flex'
                            inputClass={`!w-full !flex-1 !border-neutral-200 !bg-white !text-sm !text-black !placeholder-neutral-400 !outline-none !pl-[48px] !h-[44px] !rounded-xl transition-colors ${errors.phone ? '!border-red-400' : ''}`}
                            buttonClass='!border-neutral-200 !bg-white !rounded-l-xl !border-r-0 hover:!bg-neutral-50'
                          />
                          {errors.phone && <p className='text-red-500 text-[10px] mt-1.5'>{errors.phone}</p>}
                        </div>
                        <p className='text-[11px] text-neutral-400 leading-snug font-sans'>{t('phoneNameReason')}</p>
                        <SubmitBtn label={t('step2Cta')} />
                      </form>
                    )}

                    {/* Step 3 */}
                    {step === 3 && BookingCards({})}
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
