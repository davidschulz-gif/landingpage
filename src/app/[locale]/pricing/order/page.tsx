'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { getOrderPageData } from '@/components/order-overview-data'
import { Check, Loader2, X, ArrowLeft } from 'lucide-react'
import { IconMail, IconX, IconAlertCircle, IconLoader2 } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useIsEurope } from '@/hooks/use-is-europe'
import { apiUrl } from '@/lib/constants'
import OnboardingWizard from '@/components/onboarding/onboarding-wizard'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ToastProvider } from '@/components/providers/toast-provider'

const apiBaseUrl = `${apiUrl}/api/subscription/public/`

export default function OrderPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const locale = useLocale()
  const isEurope = useIsEurope()
  const t = useTranslations('Pricing')
  const tModal = useTranslations('SubscriptionModal')

  const planParam = searchParams.get('plan') || 'pro'
  const billingParam = searchParams.get('billing') || 'monthly'
  const urlPromoCode = searchParams.get('promoCode') || ''

  const planId = `${planParam.toLowerCase()}-${billingParam.toLowerCase()}`
  const data = getOrderPageData(planId, locale)

  // Consents & Checkboxes
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const allChecked = checked1 && checked2 && checked3

  // Flow State
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [marketingConsent, setMarketingConsent] = useState(true)
  const [privacyConsent, setPrivacyConsent] = useState(false)
  const [termsConsent, setTermsConsent] = useState(false)
  
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false)
  const [emailError, setEmailError] = useState<string | null>(null)
  
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [onboardingData, setOnboardingData] = useState<any>(null)
  const [universityName, setUniversityName] = useState<string | null>(null)
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Plan Prices & Stripe IDs
  const [plans, setPlans] = useState<any[]>([])
  const [stripePriceId, setStripePriceId] = useState('')
  const [isVat, setIsVat] = useState(true)
  const [locationContinent, setLocationContinent] = useState<string | null>(null)
  const [locationCountryCode, setLocationCountryCode] = useState<string | null>(null)
  const [locationCurrency, setLocationCurrency] = useState<string | null>(null)
  const [planCurrency, setPlanCurrency] = useState<'eur' | 'usd'>('eur')

  // Promo code
  const [promoCode, setPromoCode] = useState(urlPromoCode)
  const [promoDiscount, setPromoDiscount] = useState<any>(null)

  useEffect(() => {
    fetchPlans()
  }, [isEurope])

  const fetchPlans = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}plans?currency=${isEurope ? 'eur' : 'usd'}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      const plansData = await response.json()
      setPlans(plansData?.regularPlans || [])
      setPlanCurrency(plansData?.currency || 'eur')
      if (plansData?.location?.isVat !== undefined) {
        setIsVat(plansData.location.isVat)
      }
      if (plansData?.location?.continent) {
        setLocationContinent(plansData.location.continent)
      }
      if (plansData?.location?.country_code) {
        setLocationCountryCode(plansData.location.country_code)
      }
      if (plansData?.location?.currency) {
        setLocationCurrency(plansData.location.currency)
      }
    } catch (error) {
      console.error('Failed to fetch plans:', error)
    }
  }

  // Resolve stripe price ID once plans are loaded
  useEffect(() => {
    if (plans.length > 0) {
      const targetPlan = plans.find((p: any) => p.planType.toLowerCase() === planParam.toLowerCase())
      if (targetPlan) {
        const stripePrices = targetPlan.stripePrices || {}
        const mappedPriceId = billingParam.toLowerCase() === 'yearly' ? stripePrices.YEARLY : stripePrices.MONTHLY
        setStripePriceId(mappedPriceId || '')
      }
    }
  }, [plans, planParam, billingParam])

  // Validate URL promo code if present
  useEffect(() => {
    if (urlPromoCode) {
      validatePromo(urlPromoCode)
    }
  }, [urlPromoCode, planParam, billingParam])

  const validatePromo = async (code: string) => {
    if (!code) return
    try {
      const response = await fetch(`${apiBaseUrl}validate-promo-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          promoCode: code.trim(),
          billingCycle: billingParam.toUpperCase(),
          planType: planParam.toUpperCase(),
          isEducational: false,
          currency: planCurrency,
        }),
      })
      const res = await response.json()
      if (response.ok && res.valid) {
        setPromoDiscount(res.discount)
      }
    } catch (e) {
      console.error('Promo validation error:', e)
    }
  }

  const handleStartOrder = () => {
    if (!allChecked) return
    setIsEmailModalOpen(true)
  }

  const handleEmailSubmit = async () => {
    if (!userEmail || !userEmail.trim()) {
      setEmailError(tModal('errorRequired'))
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(userEmail.trim())) {
      setEmailError(tModal('errorInvalidEmail'))
      return
    }

    setIsVerifyingEmail(true)
    setEmailError(null)

    try {
      const verifyResponse = await fetch(`${apiBaseUrl}verify-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail.trim(), isEducational: false }),
      })
      const verifyData = await verifyResponse.json()

      if (!verifyResponse.ok) {
        toast.error(verifyData.message || 'An unexpected error occurred')
        setEmailError(verifyData.message || 'An unexpected error occurred')
        setIsVerifyingEmail(false)
        return
      }

      if (verifyData.universityName) {
        setUniversityName(verifyData.universityName)
      }

      if (verifyData.data) {
        setOnboardingData(verifyData.data)
      }

      setIsVerifyingEmail(false)
      setIsEmailModalOpen(false)
      setShowOnboarding(true)
    } catch (error: any) {
      console.error('Email verification error:', error)
      setEmailError(error.message || 'Failed to verify email')
      setIsVerifyingEmail(false)
    }
  }

  const getTrackingCookies = () => {
    if (typeof document === 'undefined') return {}

    const getCookiesMap = () => document.cookie.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=').map(c => c.trim())
      if (key) acc[key] = value
      return acc
    }, {} as Record<string, string>)

    let cookies = getCookiesMap()
    const urlParams = new URLSearchParams(window.location.search)
    const gclid = urlParams.get('gclid') || cookies['gclid'] || null
    const gbraid = urlParams.get('gbraid') || cookies['gbraid'] || null
    const wbraid = urlParams.get('wbraid') || cookies['wbraid'] || null

    if (urlParams.get('gclid')) {
      document.cookie = `gclid=${gclid}; path=/; max-age=7776000`
    }

    return {
      _ga: cookies['_ga'] || null,
      _ga_QR6YQP6P8N: cookies['_ga_QR6YQP6P8N'] || null,
      _fbp: cookies['_fbp'] || null,
      FPID: cookies['FPID'] || null,
      gclid: cookies['gclid'] || urlParams.get('gclid') || null,
      gbraid: cookies['gbraid'] || urlParams.get('gbraid') || null,
      wbraid: cookies['wbraid'] || urlParams.get('wbraid') || null,
      utm_source: cookies['utm_source'] || urlParams.get('utm_source') || null,
      utm_medium: cookies['utm_medium'] || urlParams.get('utm_medium') || null,
      utm_campaign: cookies['utm_campaign'] || urlParams.get('utm_campaign') || null,
      utm_content: cookies['utm_content'] || urlParams.get('utm_content') || null,
      utm_term: cookies['utm_term'] || urlParams.get('utm_term') || null,
      utm_campaign_name: cookies['utm_campaign_name'] || urlParams.get('utm_campaign_name') || null,
      gad_source: cookies['gad_source'] || urlParams.get('gad_source') || null,
      gad_campaignid: cookies['gad_campaignid'] || urlParams.get('gad_campaignid') || null,
      bi: cookies['stapeUserId'] || null,
    }
  }

  const handleOnboardingComplete = async (completedOnboardingData: any) => {
    setOnboardingData(completedOnboardingData)
    setShowOnboarding(false)
    setIsSubmitting(true)

    try {
      // 1. Submit Onboarding Data
      try {
        const submitResponse = await fetch(`${apiUrl}/api/onboarding/public/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: userEmail.trim(),
            marketingConsent,
            privacyConsent,
            termsConsent,
            language: locale,
            ...(locationCountryCode && { countryCode: locationCountryCode }),
            ...(locationCurrency && { currency: locationCurrency }),
            ...(locationContinent && { continent: locationContinent }),
            ...completedOnboardingData
          }),
        })
        if (!submitResponse.ok) {
          console.error('Failed to save public onboarding data:', await submitResponse.json())
        }
      } catch (e) {
        console.error('Error submitting public onboarding data:', e)
      }

      // 2. Call Stripe Checkout
      const checkoutData = {
        email: userEmail.trim(),
        planType: planParam.toUpperCase(),
        billingCycle: billingParam.toUpperCase(),
        isEducational: false,
        promoCode: promoDiscount ? promoCode.trim() : null,
        currency: planCurrency,
        cancelUrl: window.location.href,
        marketingConsent,
        privacyConsent,
        termsConsent,
        language: locale,
        onboardingData: completedOnboardingData,
        trackingData: getTrackingCookies(),
      }

      const response = await fetch(`${apiBaseUrl}checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutData)
      })
      
      const resData = await response.json()
      if (resData.url) {
        window.location.href = resData.url
      } else {
        toast.error(resData.message || 'Failed to create checkout session')
        setIsSubmitting(false)
      }
    } catch (e) {
      console.error(e)
      toast.error('Network error. Please try again.')
      setIsSubmitting(false)
    }
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcfcfd]">
        <Loader2 className="animate-spin text-black" size={40} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fcfcfd] py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      
    </div>
  )
}
