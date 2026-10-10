'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Timer, Sparkles, Tag, Flame } from 'lucide-react'
import { useLocale } from 'next-intl'

interface FlashSaleHeaderMarqueeProps {
  couponCode?: string
  discountText?: string
  isVisible?: boolean
}

export function FlashSaleHeaderMarquee({
  couponCode: propCode = 'TYP50',
  discountText: propDiscountText = '50% RABATT',
  isVisible: propIsVisible,
}: FlashSaleHeaderMarqueeProps) {
  const locale = useLocale()
  const isDe = locale === 'de'

  const [internalVisible, setInternalVisible] = useState(false)
  const [couponCode, setCouponCode] = useState(propCode)
  const [discountText, setDiscountText] = useState(propDiscountText)
  const [timeLeft, setTimeLeft] = useState<number>(900) // 15 minutes default (900s)

  const isVisible = propIsVisible !== undefined ? propIsVisible : internalVisible

  useEffect(() => {
    if (propCode) setCouponCode(propCode)
  }, [propCode])

  useEffect(() => {
    if (propDiscountText) setDiscountText(propDiscountText)
  }, [propDiscountText])

  // Listen for window event as fallback/auto-sync across components
  useEffect(() => {
    const handleEvent = (e: any) => {
      if (e.detail) {
        setInternalVisible(Boolean(e.detail.isApplied))
        if (e.detail.code) setCouponCode(e.detail.code)
        if (e.detail.discountText) setDiscountText(e.detail.discountText)
      }
    }
    window.addEventListener('typus-coupon-applied', handleEvent)
    return () => window.removeEventListener('typus-coupon-applied', handleEvent)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Store & retrieve end timestamp in sessionStorage to persist across refreshes
    const storageKey = `typus_flash_sale_end_${(couponCode || 'TYP50').toUpperCase()}`
    let endTime = sessionStorage.getItem(storageKey)

    if (!endTime) {
      const newEndTime = Date.now() + 15 * 60 * 1000 // 15 minutes
      sessionStorage.setItem(storageKey, newEndTime.toString())
      endTime = newEndTime.toString()
    }

    const calcTimeLeft = () => {
      const diff = Math.max(0, Math.floor((parseInt(endTime!) - Date.now()) / 1000))
      setTimeLeft(diff)
    }

    calcTimeLeft()
    const interval = setInterval(calcTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [isVisible, couponCode])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  if (!isVisible) return null

  const codeUpper = (couponCode || 'TYP50').toUpperCase()
  const messageDE = `⚡ FLASH SALE: ${discountText} MIT CODE ${codeUpper} — NUR FÜR KURZE ZEIT! ⚡`
  const messageEN = `⚡ FLASH SALE: ${discountText} WITH CODE ${codeUpper} — LIMITED TIME ONLY! ⚡`
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
