'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Timer, Tag, Flame, AlertCircle } from 'lucide-react'
import { useLocale } from 'next-intl'
import {
  getActiveCoupon,
  saveCouponActivation,
  markCouponAsExpired,
  getCouponActivation,
  isCouponExpired,
  EXPIRED_COUPON_MESSAGE_DE,
  EXPIRED_COUPON_MESSAGE_EN,
} from '@/lib/coupon-storage'

interface FlashSaleHeaderMarqueeProps {
  couponCode?: string
  discountText?: string
  isVisible?: boolean
  forceExpired?: boolean
}

export function FlashSaleHeaderMarquee({
  couponCode: propCode,
  discountText: propDiscountText,
  isVisible: propIsVisible,
  forceExpired,
}: FlashSaleHeaderMarqueeProps) {
  const locale = useLocale()
  const isDe = locale === 'de'

  // Avoid Next.js SSR hydration mismatches by initializing false on server
  const [internalVisible, setInternalVisible] = useState(false)
  const [marqueeMode, setMarqueeMode] = useState<'countdown' | 'expired'>('countdown')
  const [couponCode, setCouponCode] = useState(propCode || 'TYP50')
  const [discountText, setDiscountText] = useState(propDiscountText || '50% RABATT')
  const [timeLeft, setTimeLeft] = useState<number>(24 * 60 * 60) // 24 hours (86400s)

  const isVisible = propIsVisible !== undefined ? propIsVisible : internalVisible
  const activeCodeRef = useRef<string>(couponCode)
  activeCodeRef.current = couponCode

  // 1. Initial client-side restoration from localStorage
  useEffect(() => {
    const codeToCheck = propCode || 'TYP50'

    if (forceExpired || isCouponExpired(codeToCheck)) {
      if (propIsVisible) {
        setInternalVisible(true)
        setMarqueeMode('expired')
        setCouponCode(codeToCheck)
      }
      return
    }

    // Check if there is an active unexpired coupon in localStorage
    const active = getActiveCoupon()

    if (active && !isCouponExpired(active.code)) {
      setInternalVisible(true)
      setMarqueeMode('countdown')
      setCouponCode(active.code)
      setDiscountText(active.discountText)
      const diff = Math.max(0, Math.floor((active.expiresAt - Date.now()) / 1000))
      setTimeLeft(diff)
    } else if (propIsVisible) {
      // If parent explicitly set isVisible=true and not expired, activate with 24h timer
      const textToUse = propDiscountText || '50% RABATT'
      const record = saveCouponActivation(codeToCheck, textToUse)

      if (record.isExpired) {
        setInternalVisible(true)
        setMarqueeMode('expired')
        setCouponCode(record.code)
      } else {
        setInternalVisible(true)
        setMarqueeMode('countdown')
        setCouponCode(record.code)
        setDiscountText(record.discountText)
        const diff = Math.max(0, Math.floor((record.expiresAt - Date.now()) / 1000))
        setTimeLeft(diff)
      }
    }
  }, [propIsVisible, propCode, propDiscountText, forceExpired])

  // 2. Real-time countdown timer that strictly references the expirationTimestamp
  useEffect(() => {
    if (!isVisible || marqueeMode !== 'countdown') return

    const tick = () => {
      const currentCode = activeCodeRef.current

      if (isCouponExpired(currentCode)) {
        markCouponAsExpired(currentCode)
        setMarqueeMode('expired')
        setTimeLeft(0)

        if (typeof window !== 'undefined') {
          window.dispatchEvent(
            new CustomEvent('typus-coupon-applied', {
              detail: {
                isApplied: false,
                code: currentCode,
                discountText: '',
                expired: true,
              },
            })
          )
        }
        return
      }

      const record = getCouponActivation(currentCode) || getActiveCoupon()

      if (!record) {
        // Expired or missing
        markCouponAsExpired(currentCode)
        setMarqueeMode('expired')
        setTimeLeft(0)

        if (typeof window !== 'undefined') {
          window.dispatchEvent(
            new CustomEvent('typus-coupon-applied', {
              detail: {
                isApplied: false,
                code: currentCode,
                discountText: '',
                expired: true,
              },
            })
          )
        }
        return
      }

      const diff = Math.max(0, Math.floor((record.expiresAt - Date.now()) / 1000))

      if (diff <= 0) {
        // 24-hour period has expired! Switch to expired banner & dispatch event
        markCouponAsExpired(record.code)
        setMarqueeMode('expired')
        setTimeLeft(0)

        if (typeof window !== 'undefined') {
          window.dispatchEvent(
            new CustomEvent('typus-coupon-applied', {
              detail: {
                isApplied: false,
                code: record.code,
                discountText: '',
                expired: true,
              },
            })
          )
        }
      } else {
        setTimeLeft(diff)
      }
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [isVisible, marqueeMode, couponCode])

  // 3. Listen for window events and cross-tab storage changes
  useEffect(() => {
    const handleCouponAppliedEvent = (e: any) => {
      if (!e.detail) return

      if (e.detail.expired) {
        setMarqueeMode('expired')
        setInternalVisible(true)
        if (e.detail.code) setCouponCode(e.detail.code)
        return
      }

      if (e.detail.isApplied) {
        const code = e.detail.code || 'TYP50'
        const text = e.detail.discountText || '50% RABATT'

        if (isCouponExpired(code)) {
          setMarqueeMode('expired')
          setInternalVisible(true)
          setCouponCode(code)
          return
        }

        // Persist coupon activation in localStorage (starts 24h timer once, or reuses valid timer)
        const record = saveCouponActivation(code, text, e.detail.discount)

        if (record.isExpired) {
          setMarqueeMode('expired')
          setInternalVisible(true)
          setCouponCode(record.code)
        } else {
          setMarqueeMode('countdown')
          setInternalVisible(true)
          setCouponCode(record.code)
          setDiscountText(record.discountText)
          const diff = Math.max(0, Math.floor((record.expiresAt - Date.now()) / 1000))
          setTimeLeft(diff)
        }
      } else {
        // Not applied and not expired
        setInternalVisible(false)
      }
    }

    const handleStorageEvent = (e: StorageEvent) => {
      if (e.key === null || e.key.includes('typus_')) {
        const currentCode = activeCodeRef.current
        if (isCouponExpired(currentCode)) {
          setMarqueeMode('expired')
          setInternalVisible(true)
          return
        }

        const active = getActiveCoupon()
        if (active) {
          setMarqueeMode('countdown')
          setInternalVisible(true)
          setCouponCode(active.code)
          setDiscountText(active.discountText)
          const diff = Math.max(0, Math.floor((active.expiresAt - Date.now()) / 1000))
          setTimeLeft(diff)
        } else {
          setInternalVisible(false)
        }
      }
    }

    window.addEventListener('typus-coupon-applied', handleCouponAppliedEvent)
    window.addEventListener('storage', handleStorageEvent)

    return () => {
      window.removeEventListener('typus-coupon-applied', handleCouponAppliedEvent)
      window.removeEventListener('storage', handleStorageEvent)
    }
  }, [])

  // Format seconds as HH:MM:SS or MM:SS
  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600)
    const m = Math.floor((totalSeconds % 3600) / 60)
    const s = totalSeconds % 60

    if (h > 0) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  if (!isVisible) return null

  // Active reservation messages
  const messageActiveDE = 'Begrenzte Plätze verfügbar. Dieser Platz ist für 24 Stunden für Sie reserviert.'
  const messageActiveEN = 'Limited spaces available. This seat is reserved for you for 24 hours.'

  // Expired messages
  const messageExpiredDE = EXPIRED_COUPON_MESSAGE_DE
  const messageExpiredEN = EXPIRED_COUPON_MESSAGE_EN

  const isExpired = marqueeMode === 'expired'
  const messagePrimary = isDe
    ? isExpired
      ? messageExpiredDE
      : messageActiveDE
    : isExpired
      ? messageExpiredEN
      : messageActiveEN
  const messageSecondary = isDe
    ? isExpired
      ? messageExpiredEN
      : messageActiveEN
    : isExpired
      ? messageExpiredDE
      : messageActiveDE

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full text-white relative z-[99999] overflow-hidden shadow-md"
        style={{ backgroundColor: '#FF3F34' }}
      >
        <div className="py-2.5 px-4 flex items-center justify-between max-w-7xl mx-auto gap-4">
          {/* Continuous Bilingual Marquee Ticker */}
          <div className="relative flex-1 overflow-hidden whitespace-nowrap">
            <div className="inline-flex animate-marquee gap-8 items-center text-xs sm:text-sm font-bold tracking-wider uppercase font-sans">
              <span className="flex items-center gap-2">
                {isExpired ? (
                  <AlertCircle className="w-4 h-4 fill-white text-[#FF3F34] shrink-0" />
                ) : (
                  <Flame className="w-4 h-4 fill-white shrink-0 animate-pulse" />
                )}
                <span>{messagePrimary}</span>
              </span>
              <span className="flex items-center gap-2">
                <span>{messageSecondary}</span>
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4 shrink-0" />
                <span>{messagePrimary}</span>
              </span>
              <span className="flex items-center gap-2">
                {isExpired ? (
                  <AlertCircle className="w-4 h-4 fill-white text-[#FF3F34] shrink-0" />
                ) : (
                  <Flame className="w-4 h-4 fill-white shrink-0 animate-pulse" />
                )}
                <span>{messageSecondary}</span>
              </span>
            </div>
          </div>

          {/* Right Badge: Countdown timer OR Expired badge */}
          {marqueeMode === 'countdown' ? (
            <div className="shrink-0 flex items-center gap-2 bg-white text-[#FF3F34] px-3.5 py-1 rounded-full text-xs sm:text-sm font-mono font-bold tracking-widest shadow-xs">
              <Timer className="w-4 h-4 shrink-0 animate-spin text-[#FF3F34]" style={{ animationDuration: '6s' }} />
              <span className="text-[#FF3F34]">
                {isDe ? 'ENDET IN' : 'EXPIRES IN'}: {formatTime(timeLeft)}
              </span>
            </div>
          ) : (
            <div className="shrink-0 flex items-center gap-2 bg-white text-[#FF3F34] px-3.5 py-1 rounded-full text-xs sm:text-sm font-sans font-bold tracking-wider uppercase shadow-xs">
              <AlertCircle className="w-4 h-4 text-[#FF3F34] shrink-0" />
              <span className="text-[#FF3F34]">{isDe ? 'KEINE PLÄTZE FREI' : 'ALL SPOTS TAKEN'}</span>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: inline-flex;
            white-space: nowrap;
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  )
}
