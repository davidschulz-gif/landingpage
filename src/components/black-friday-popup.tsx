'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, Check, Sparkles } from 'lucide-react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { saveCouponActivation } from '@/lib/coupon-storage'

const PROMO_CODE = 'BF'
const STORAGE_DISMISSED_KEY = 'typus_bf_popup_dismissed_until'
const COOLDOWN_HOURS = 12

/**
 * Calculates target Friday 23:59:59.999 local time.
 */
function getFridayEOD(referenceDate: Date = new Date()): Date {
  const target = new Date(referenceDate)
  const day = target.getDay() // 0 = Sun, 1 = Mon, ..., 5 = Fri, 6 = Sat
  const diff = (5 - day + 7) % 7
  target.setDate(target.getDate() + diff)
  target.setHours(23, 59, 59, 999)
  return target
}

export default function BlackFridayPopup() {
  const locale = useLocale()
  const isDe = locale === 'de'
  const pathname = usePathname()
  const router = useRouter()

  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  // Prevent popup on checkout order page or inside iframe
  const isIframe = typeof window !== 'undefined' && window.self !== window.top
  const isOrderPage = pathname?.includes('/pricing/order')

  // Calculate remaining time until Friday EOD
  const updateCountdown = useCallback(() => {
    const now = new Date()
    const target = getFridayEOD(now)
    const diff = target.getTime() - now.getTime()

    if (diff <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true })
      return
    }

    const totalSeconds = Math.floor(diff / 1000)
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    setTimeLeft({ days, hours, minutes, seconds, isExpired: false })
  }, [])

  useEffect(() => {
    setMounted(true)
    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [updateCountdown])

  // Trigger popup after short initial delay or force query param
  useEffect(() => {
    if (!mounted || isIframe || isOrderPage) return

    const searchParams = new URLSearchParams(window.location.search)
    const forceOpen =
      searchParams.get('bf') === '1' ||
      searchParams.get('blackfriday') === '1' ||
      searchParams.get('test') === '1'

    if (forceOpen) {
      setIsOpen(true)
      return
    }

    // Check dismissal cooldown in localStorage
    const dismissedUntil = localStorage.getItem(STORAGE_DISMISSED_KEY)
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
      return
    }

    // Open smoothly after 1.5 seconds delay on initial visit
    const timeout = setTimeout(() => {
      setIsOpen(true)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [mounted, isIframe, isOrderPage])

  // Support custom event to open popup programmatically
  useEffect(() => {
    if (!mounted) return
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('open-black-friday-popup', handleOpen)
    return () => window.removeEventListener('open-black-friday-popup', handleOpen)
  }, [mounted])

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setIsOpen(false)
    try {
      const expiry = Date.now() + COOLDOWN_HOURS * 60 * 60 * 1000
      localStorage.setItem(STORAGE_DISMISSED_KEY, expiry.toString())
    } catch {
      // Ignore storage errors
    }
  }

  const handleCopyCode = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    try {
      await navigator.clipboard.writeText(PROMO_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  // Automatically applies code BF and navigates/scrolls to pricing
  const handleClaimDiscount = async () => {
    await handleCopyCode()
    try {
      saveCouponActivation(PROMO_CODE, '80% RABATT', {
        type: 'percentage',
        value: 80,
        percentOff: 80,
        name: 'BF - 80% Black Friday',
      })
      window.dispatchEvent(
        new CustomEvent('typus-coupon-applied', {
          detail: { code: PROMO_CODE, discountText: '80% RABATT', isApplied: true },
        })
      )
    } catch {
      // Ignore errors
    }

    handleClose()

    // If already on pricing page, smoothly scroll to pricing section, otherwise navigate
    if (pathname?.includes('/pricing')) {
      const pricingSection =
        document.getElementById('pricing-plans') ||
        document.getElementById('pricing') ||
        document.querySelector('section')
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push('/pricing?coupon=BF&promoCode=BF')
    }
  }

  if (!mounted || !isOpen || isIframe || isOrderPage) return null

  // Header date text
  const targetDate = getFridayEOD()
  const formattedDay = String(targetDate.getDate()).padStart(2, '0')
  const formattedMonth = String(targetDate.getMonth() + 1).padStart(2, '0')
  const headerDateText = isDe
    ? `NUR BIS FREITAG (${formattedDay}.${formattedMonth}.) UM 23:59 UHR`
    : `ONLY UNTIL FRIDAY (${formattedMonth}/${formattedDay}) AT 23:59H`

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 16 }}
          transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          className="relative w-full max-w-[690px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200/80 z-10 my-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close popup"
            className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column: Offer & Countdown */}
            <div className="p-6 sm:p-7 flex flex-col justify-between text-center bg-white order-2 md:order-1">
              <div>
                {/* Top date notice */}
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                  {headerDateText}
                </p>

                {/* Main Headline */}
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 mb-2.5">
                  BLACKFRIDAY
                </h2>

                {/* Subtitle / Offer details */}
                <div className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed space-y-1.5 mb-3">
                  <p>
                    {isDe ? (
                      <>
                        Nutze diesen Code für <span className="font-bold text-neutral-900">80% Rabatt</span> auf das Jahresabo:
                      </>
                    ) : (
                      <>
                        Use this code to get an <span className="font-bold text-neutral-900">80% discount</span> on the annual plan:
                      </>
                    )}
                  </p>

                  {/* Highlighted Price Callout - Clickable to apply discount */}
                  <div
                    onClick={handleClaimDiscount}
                    className="py-1.5 px-3 bg-amber-50 hover:bg-amber-100/90 rounded-lg border border-amber-200/90 inline-block my-1 cursor-pointer transition-all hover:scale-[1.02]"
                    title={isDe ? 'Klicken, um Code BF automatisch einzulösen' : 'Click to apply code BF automatically'}
                  >
                    <span className="text-sm sm:text-base font-extrabold text-amber-700">
                      {isDe ? '19,80 € pro Monat für das Jahresabo' : '19.80 € per month for the annual subscription'}
                    </span>
                  </div>
                </div>

                {/* Promo Code Pill with One-Click Auto-Apply */}
                <div className="flex justify-center mb-4">
                  <button
                    onClick={handleClaimDiscount}
                    className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border-2 border-dashed border-neutral-300 hover:border-amber-500 bg-neutral-50 hover:bg-amber-50 transition-all cursor-pointer shadow-sm hover:shadow"
                    title={isDe ? 'Code BF automatisch anwenden' : 'Apply code BF automatically'}
                  >
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Code:
                    </span>
                    <span className="text-sm font-black tracking-widest text-neutral-900 font-mono">
                      {PROMO_CODE}
                    </span>
                    {copied ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded">
                        <Check className="w-3 h-3" />
                        {isDe ? 'Angewendet!' : 'Applied!'}
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-600 transition-colors" />
                    )}
                  </button>
                </div>

                {/* Countdown Timer Blocks */}
                <div
                  onClick={handleClaimDiscount}
                  className="flex items-center justify-center gap-2 sm:gap-2.5 my-2 cursor-pointer group"
                  title={isDe ? 'Angebot jetzt sichern' : 'Claim offer now'}
                >
                  {timeLeft.days > 0 && (
                    <div className="bg-[#212124] group-hover:bg-neutral-800 transition-colors text-white rounded-lg px-2.5 py-2 sm:px-3 sm:py-2.5 min-w-[54px] sm:min-w-[60px] text-center shadow-md">
                      <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight leading-none text-white">
                        {String(timeLeft.days).padStart(2, '0')}
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-neutral-400 font-medium lowercase tracking-wide mt-1 block">
                        {isDe ? 'tage' : 'days'}
                      </span>
                    </div>
                  )}

                  <div className="bg-[#212124] group-hover:bg-neutral-800 transition-colors text-white rounded-lg px-2.5 py-2 sm:px-3 sm:py-2.5 min-w-[54px] sm:min-w-[60px] text-center shadow-md">
                    <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight leading-none text-white">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-neutral-400 font-medium lowercase tracking-wide mt-1 block">
                      {isDe ? 'stunden' : 'hours'}
                    </span>
                  </div>

                  <div className="bg-[#212124] group-hover:bg-neutral-800 transition-colors text-white rounded-lg px-2.5 py-2 sm:px-3 sm:py-2.5 min-w-[54px] sm:min-w-[60px] text-center shadow-md">
                    <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight leading-none text-white">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-neutral-400 font-medium lowercase tracking-wide mt-1 block">
                      {isDe ? 'minuten' : 'minutes'}
                    </span>
                  </div>

                  <div className="bg-[#212124] group-hover:bg-neutral-800 transition-colors text-white rounded-lg px-2.5 py-2 sm:px-3 sm:py-2.5 min-w-[54px] sm:min-w-[60px] text-center shadow-md">
                    <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight leading-none text-white">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-neutral-400 font-medium lowercase tracking-wide mt-1 block">
                      {isDe ? 'sekunden' : 'seconds'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-4 mt-auto">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  {isDe ? 'Schließen' : 'Close'}
                </button>

                <button
                  type="button"
                  onClick={handleClaimDiscount}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#f5b324] hover:bg-[#e2a216] active:scale-[0.98] text-neutral-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>{isDe ? '80% Rabatt sichern' : 'Get my 80% discount'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Graphic Banner - Clickable to apply discount */}
            <div
              onClick={handleClaimDiscount}
              className="relative min-h-[200px] sm:min-h-[260px] md:min-h-full bg-neutral-900 flex items-center justify-center overflow-hidden order-1 md:order-2 cursor-pointer group"
              title={isDe ? 'Code BF automatisch aktivieren' : 'Apply code BF automatically'}
            >
              <img
                src="/images/black-friday-banner.jpg"
                alt="Black Friday 80% Discount"
                className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-end justify-center p-3">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {isDe ? 'Klicken zum Einlösen' : 'Click to claim'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
