'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function AnimatedStatNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isInView) return

    let numericTarget = 0
    let suffix = ''

    if (value.includes('50k')) {
      numericTarget = 50
      suffix = 'k+'
    } else if (value.includes('2.500') || value.includes('2,500')) {
      numericTarget = 2500
      suffix = '+'
    } else if (value.includes('30k')) {
      numericTarget = 30
      suffix = 'k+'
    } else {
      const match = value.match(/\d+/)
      numericTarget = match ? parseInt(match[0], 10) : 0
    }

    const duration = 1800
    const steps = 50
    const stepTime = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const currentVal = Math.floor(easeProgress * numericTarget)

      if (suffix === '+' && numericTarget > 999) {
        const formatted =
          currentVal >= 1000
            ? `${Math.floor(currentVal / 1000)}.${(currentVal % 1000).toString().padStart(3, '0')}`
            : currentVal.toString()
        setDisplayValue(formatted + suffix)
      } else {
        setDisplayValue(currentVal + suffix)
      }

      if (currentStep >= steps) {
        clearInterval(timer)
        setDisplayValue(value)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{displayValue}</span>
}
