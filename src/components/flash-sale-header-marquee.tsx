'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Timer, Sparkles, Tag, Flame } from 'lucide-react'
import { useLocale } from 'next-intl'
import {
  getActiveCoupon,
  saveCouponActivation,
  removeCouponActivation,
  getCouponActivation,
} from '@/lib/coupon-storage'

interface FlashSaleHeaderMarqueeProps {
  couponCode?: string
  discountText?: string
  isVisible?: boolean
}

export function FlashSaleHeaderMarquee({
  couponCode: propCode,
  discountText: propDiscountText,
  isVisible: propIsVisible,
}: FlashSaleHeaderMarqueeProps) {
  const locale = useLocale()
  const isDe = locale === 'de'

  // Avoid Next.js SSR hydration mismatches by initializing false on server
  const [internalVisible, setInternalVisible] = useState(false)
  const [couponCode, setCouponCode] = useState(propCode || 'TYP50')
  const [discountText, setDiscountText] = useState(propDiscountText || '50% RABATT')
  const [timeLeft, setTimeLeft] = useState<number>(24 * 60 * 60) // 24 hours (86400s)

  const isVisible = propIsVisible !== undefined ? propIsVisible : internalVisible
  const activeCodeRef = useRef<string>(couponCode)
  activeCodeRef.current = couponCode

  // 1. Initial client-side restoration from localStorage
  useEffect(() => {
    // Check if there is an active coupon in localStorage
    const active = getActiveCoupon()

    if (active) {
      setInternalVisible(true)
      setCouponCode(active.code)
      setDiscountText(active.discountText)
      const diff = Math.max(0, Math.floor((active.expiresAt - Date.now()) / 1000))
      setTimeLeft(diff)
    } else if (propIsVisible) {
      // If parent explicitly set isVisible=true, activate with 24h timer
      const codeToUse = propCode || 'TYP50'
      const textToUse = propDiscountText || '50% RABATT'
      const record = saveCouponActivation(codeToUse, textToUse)
      setInternalVisible(true)
      setCouponCode(record.code)
      setDiscountText(record.discountText)
      const diff = Math.max(0, Math.floor((record.expiresAt - Date.now()) / 1000))
      setTimeLeft(diff)
    }
  }, [propIsVisible, propCode, propDiscountText])

  // 2. Real-time countdown timer that strictly references the expirationTimestamp
  useEffect(() => {
    if (!isVisible) return

    const tick = () => {
      // Retrieve the current active record from localStorage or by code
      const currentCode = activeCodeRef.current
      const record = getCouponActivation(currentCode) || getActiveCoupon()

      if (!record) {
        // Expired or missing
        setInternalVisible(false)
        return
      }

      const diff = Math.max(0, Math.floor((record.expiresAt - Date.now()) / 1000))

      if (diff <= 0) {
        // 24-hour period has expired! Hide marquee and remove localStorage record
        removeCouponActivation(record.code)
        setInternalVisible(false)

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
  }, [isVisible, couponCode])

  // 3. Listen for window events and cross-tab storage changes
  useEffect(() => {
    const handleCouponAppliedEvent = (e: any) => {
      if (!e.detail) return

      if (e.detail.isApplied) {
        const code = e.detail.code || 'TYP50'
        const text = e.detail.discountText || '50% RABATT'
        // Persist coupon activation in localStorage (starts 24h timer once, or reuses valid timer)
        const record = saveCouponActivation(code, text, e.detail.discount)

        setInternalVisible(true)
        setCouponCode(record.code)
        setDiscountText(record.discountText)
        const diff = Math.max(0, Math.floor((record.expiresAt - Date.now()) / 1000))
        setTimeLeft(diff)
      } else {
        if (e.detail.code) {
          removeCouponActivation(e.detail.code)
        }
        // Check if another coupon is active
        const nextActive = getActiveCoupon()
        if (nextActive) {
          setInternalVisible(true)
          setCouponCode(nextActive.code)
          setDiscountText(nextActive.discountText)
          const diff = Math.max(0, Math.floor((nextActive.expiresAt - Date.now()) / 1000))
          setTimeLeft(diff)
        } else {
          setInternalVisible(false)
        }
      }
    }

    const handleStorageEvent = (e: StorageEvent) => {
      if (e.key === null || e.key.includes('typus_')) {
        const active = getActiveCoupon()
        if (active) {
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

  const messageDE = `Begrenzte Plätze verfügbar. Dieser Platz ist für 24 Stunden für Sie reserviert.`
  const messageEN = `Limited spaces available. This seat is reserved for you for 24 hours.`
  const message = isDe ? messageDE : messageEN

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
          {/* Continuous Marquee Ticker */}
          <div className="relative flex-1 overflow-hidden whitespace-nowrap">
            <div className="inline-flex animate-marquee gap-8 items-center text-xs sm:text-sm font-bold tracking-wider uppercase font-sans">
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 fill-white shrink-0 animate-pulse" />
                {message}
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                {message}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4 shrink-0" />
                {message}
              </span>
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 fill-white shrink-0 animate-pulse" />
                {message}
              </span>
            </div>
          </div>

          {/* Sticky Timer Badge */}
          <div className="shrink-0 flex items-center gap-2 bg-black/20 px-3.5 py-1 rounded-full text-xs sm:text-sm font-mono font-bold tracking-widest border border-white/30 backdrop-blur-xs">
            <Timer className="w-4 h-4 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
            <span>
              {isDe ? 'ENDET IN' : 'EXPIRES IN'}: {formatTime(timeLeft)}
            </span>
          </div>
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
