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

  const tPreview = {
    title: locale === 'de' ? 'Vertrags- und Bestelldaten bestätigen' : 'Confirm Contract & Order Details',
    providerTitle: locale === 'de' ? 'Anbieter (Provider)' : 'Provider',
    customerTitle: locale === 'de' ? 'Kunde (Customer)' : 'Customer',
    contractTitle: locale === 'de' ? 'Vertragsdetails (Contract Details)' : 'Contract Details',
    product: locale === 'de' ? 'Produkt' : 'Product',
    price: locale === 'de' ? 'Preis' : 'Price',
    term: locale === 'de' ? 'Mindestlaufzeit' : 'Minimum Term',
    credits: locale === 'de' ? 'Enthaltene Credits' : 'Included Credits',
    paymentMethod: locale === 'de' ? 'Zahlungsart' : 'Payment Method',
    stripePayment: locale === 'de' ? 'Kreditkarte / SEPA (über Stripe)' : 'Credit Card / SEPA (via Stripe)',
    editAddress: locale === 'de' ? 'Adresse bearbeiten' : 'Edit Address',
    confirmAndPay: locale === 'de' ? 'Zahlungspflichtig bestellen' : 'Confirm & Proceed to Payment',
  }

  const planParam = searchParams.get('plan') || 'pro'
  const billingParam = searchParams.get('billing') || 'monthly'
  const urlPromoCode = searchParams.get('promoCode') || ''
  const isEducationalParam = searchParams.get('isEducational') === 'true'

  const planId = `${planParam.toLowerCase()}-${billingParam.toLowerCase()}`
  const data = getOrderPageData(planId, locale, isEducationalParam)

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
  const [emailSent, setEmailSent] = useState(false)
  const [isTokenVerifying, setIsTokenVerifying] = useState(false)
  const [tokenError, setTokenError] = useState<string | null>(null)
  
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [onboardingData, setOnboardingData] = useState<any>(null)
  const [showPreview, setShowPreview] = useState(false)
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

  useEffect(() => {
    const verifyToken = async () => {
      const tokenParam = searchParams.get('token')
      if (!tokenParam) return

      setIsTokenVerifying(true)
      try {
        const response = await fetch(`${apiUrl}/api/subscription/public/verify-token`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: tokenParam })
        })
        const resData = await response.json()
        if (response.ok) {
          setUserEmail(resData.email)
          if (resData.universityName) {
            setUniversityName(resData.universityName)
          }
          if (resData.data) {
            setOnboardingData(resData.data)
          }
          
          const tokenPlan = resData.plan?.toLowerCase() || planParam
          const tokenBilling = resData.billing?.toLowerCase() || billingParam
          const tokenIsEdu = resData.isEducational ?? isEducationalParam
          
          if (tokenPlan !== planParam || tokenBilling !== billingParam || tokenIsEdu !== isEducationalParam) {
            router.replace(`/${locale}/pricing/order?plan=${tokenPlan}&billing=${tokenBilling}&isEducational=${tokenIsEdu}&token=${tokenParam}`)
          }
          
          setShowOnboarding(true)
        } else {
          toast.error(resData.message || 'Verification link is invalid or has expired.')
          setTokenError(resData.message || 'Verification link is invalid or has expired.')
        }
      } catch (err) {
        console.error('Failed to verify token:', err)
        setTokenError('Verification failed due to a network error.')
      } finally {
        setIsTokenVerifying(false)
      }
    }

    verifyToken()
  }, [searchParams])

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
      setPlans(isEducationalParam ? (plansData?.educationalPlans || []) : (plansData?.regularPlans || []))
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
          isEducational: isEducationalParam,
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
        body: JSON.stringify({
          email: userEmail.trim(),
          isEducational: isEducationalParam,
          plan: planParam,
          billing: billingParam,
          language: locale
        }),
      })
      const verifyData = await verifyResponse.json()

      if (!verifyResponse.ok) {
        toast.error(verifyData.message || 'An unexpected error occurred')
        setEmailError(verifyData.message || 'An unexpected error occurred')
        setIsVerifyingEmail(false)
        return
      }

      if (verifyData.emailVerified) {
        if (verifyData.universityName) {
          setUniversityName(verifyData.universityName)
        }

        if (verifyData.data) {
          setOnboardingData(verifyData.data)
        }

        setIsVerifyingEmail(false)
        setIsEmailModalOpen(false)
        setShowOnboarding(true)
      } else if (verifyData.emailSent) {
        setEmailSent(true)
        setIsVerifyingEmail(false)
      } else {
        toast.error('Verification failed. Please try again.')
        setIsVerifyingEmail(false)
      }
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
    setShowPreview(true)
  }

  const handleConfirmOrder = async () => {
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
            ...onboardingData
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
        isEducational: isEducationalParam,
        promoCode: promoDiscount ? promoCode.trim() : null,
        currency: planCurrency,
        cancelUrl: window.location.href,
        marketingConsent,
        privacyConsent,
        termsConsent,
        language: locale,
        onboardingData: onboardingData,
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

  if (isTokenVerifying) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfcfd] gap-4">
        <Loader2 className="animate-spin text-black" size={40} />
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest animate-pulse" style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
          {locale === 'de' ? 'E-Mail-Verifizierung wird geprüft...' : 'Checking email verification...'}
        </p>
      </div>
    )
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
      <div className="max-w-4xl mx-auto">
        <Link
          href={`/${locale}/pricing`}
          className="mb-8 inline-flex items-center text-sm  uppercase tracking-tight text-gray-500 hover:text-black transition-colors group"
        >
          <ArrowLeft className="w-4.5 h-4.5 mr-2 group-hover:-translate-x-1 transition-transform" />
          {locale === 'de' ? 'Zurück zur Preisseite' : 'Back to Pricing'}
        </Link>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
          <div className="p-8 sm:p-12">
            {/* Header */}
            <h1 className="heading-primary mb-8 leading-tight" style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
              {showPreview ? tPreview.title : data.title}
            </h1>

            {showPreview ? (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                  {/* Column 1: Parties */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4" style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                        {tPreview.providerTitle}
                      </h3>
                      <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        <strong>TYPUS Lab UG (haftungsbeschränkt)</strong>
                        {"\n"}Im Mediapark 5
                        {"\n"}50670 Köln, Germany
                        {"\n"}USt-IdNr. DE454629357
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm relative">
                      <button 
                        onClick={() => {
                          setShowPreview(false);
                          setShowOnboarding(true);
                        }}
                        className="absolute top-4 right-4 text-xs font-bold text-gray-500 hover:text-black transition-colors underline cursor-pointer"
                      >
                        {tPreview.editAddress}
                      </button>
                      <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4" style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                        {tPreview.customerTitle}
                      </h3>
                      <div className="text-sm text-gray-700 leading-relaxed">
                        <p className="mb-1"><strong>Name:</strong> {onboardingData?.firstName} {onboardingData?.lastName}</p>
                        {onboardingData?.companyName && <p className="mb-1"><strong>{locale === 'de' ? 'Firma:' : 'Company:'}</strong> {onboardingData.companyName}</p>}
                        <p className="mb-1"><strong>E-Mail:</strong> {userEmail}</p>
                        <p className="mb-1"><strong>Tel:</strong> {onboardingData?.phoneNumber || onboardingData?.phone}</p>
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="font-semibold mb-1">{locale === 'de' ? 'Adresse:' : 'Address:'}</p>
                          <p className="whitespace-pre-line">
                            {onboardingData?.streetAndNumber}
                            {"\n"}{onboardingData?.postcode || onboardingData?.zip || onboardingData?.postalCode} {onboardingData?.city}
                            {onboardingData?.state && `\n${onboardingData.state}`}
                            {"\n"}{onboardingData?.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Contract details */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4" style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                      {tPreview.contractTitle}
                    </h3>
                    <div className="space-y-4 text-sm text-gray-700">
                      <div>
                        <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">{tPreview.product}</span>
                        <span className="font-bold text-base">{data.offer}</span>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">{tPreview.price}</span>
                        <span className="font-bold text-lg text-black">{data.pricingMain}</span>
                        <ul className="text-xs text-gray-600 mt-1 space-y-1 list-disc pl-4">
                          {data.pricingList.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                      </div>
                      {data.includedCreditsMain && (
                        <div>
                          <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">{tPreview.credits}</span>
                          <span className="font-semibold">{data.includedCreditsMain}</span>
                        </div>
                      )}
                      <div>
                        <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">{tPreview.term}</span>
                        <span className="font-semibold">
                          {data.termsList && data.termsList[0] ? data.termsList[0] : (locale === 'de' ? '1 Monat' : '1 Month')}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">{tPreview.paymentMethod}</span>
                        <span className="font-semibold">{tPreview.stripePayment}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <button
                    onClick={() => setShowPreview(false)}
                    className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
                    style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                  >
                    {locale === 'de' ? 'Zurück' : 'Back'}
                  </button>

                  <button
                    onClick={handleConfirmOrder}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-12 py-5 text-sm bg-black text-white uppercase tracking-widest rounded hover:bg-gray-900 transition-all flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                    style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : tPreview.confirmAndPay}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="subheading-primary mb-2">{data.offer}</h2>
                  <p className="text-gray-600">{data.audience}</p>
                </div>

                <hr className="my-10 border-gray-100" />

                {/* Pricing */}
                <div className="mb-10">
                  <h2 className="subheading-primary mb-5">{data.pricingTitle}</h2>
                  <div className="font-black text-xl mb-3">{data.pricingMain}</div>
                  <ul className="space-y-2 mb-4">
                    {data.pricingList.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-black mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {data.pricingDesc && <p className="text-sm text-gray-500 italic mt-4">{data.pricingDesc}</p>}
                </div>

                <hr className="my-10 border-gray-100" />

                {/* Scope */}
                <div className="mb-10">
                  <h2 className="subheading-primary mb-5">{data.scopeTitle}</h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {data.scopeDesc.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>

                <hr className="my-10 border-gray-100" />

                {/* Credit System */}
                <div className="mb-10">
                  <h2 className="subheading-primary mb-5">{data.creditSystemTitle}</h2>
                  {data.creditSystemDesc && <p className="mb-8 text-gray-700">{data.creditSystemDesc}</p>}

                  <h3 className="text-lg  mb-3">{data.includedCreditsTitle}</h3>
                  <div className=" mb-1">{data.includedCreditsMain}</div>
                  <div className="text-sm text-gray-600 mb-8">{data.includedCreditsSub}</div>

                  <h3 className="text-lg  mb-3">{data.creditNoticeTitle}</h3>
                  <p className="mb-3">{data.creditNoticeDesc}</p>
                  <p className="mb-2 font-medium">{data.creditNoticeListTitle}</p>
                  <ul className="space-y-2 mb-4">
                    {data.creditNoticeList.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-black mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm italic mb-8">{data.creditNoticeFooter}</p>

                  <h3 className="text-lg  mb-3">{data.extraCreditsTitle}</h3>
                  <p className="mb-3">{data.extraCreditsDesc}</p>
                  <p className="mb-2 font-medium">{data.extraCreditsListTitle}</p>
                  <ul className="space-y-2 mb-4">
                    {data.extraCreditsList.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-black mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {data.extraCreditsFooter && <p className="text-sm italic mb-10">{data.extraCreditsFooter}</p>}

                  {/* Tables */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {data.tables.map((table, i) => (
                      <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className=" mb-4 border-b border-gray-200 pb-2">{table.title}</h4>
                        <ul className="space-y-3 text-sm">
                          {table.items.map((item, j) => (
                            <li key={j} className="flex items-start">
                              <span className="mr-2 text-gray-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="my-10 border-gray-100" />

                {/* Usage Category */}
                <div className="mb-10">
                  <h2 className="text-2xl  mb-5">{data.usageCategoryTitle}</h2>
                  <div className="space-y-4 text-gray-700">
                    {data.usageCategoryDesc.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>

                <hr className="my-10 border-gray-100" />

                {/* Support */}
                <div className="mb-10">
                  <h2 className="text-2xl  mb-5">{data.supportTitle}</h2>
                  <div className="space-y-4 text-gray-700 mb-8">
                    {data.supportDesc.map((p, i) => <p key={i}>{p}</p>)}
                  </div>

                  {data.satisfactionTitle && <h3 className="text-xl  mb-4 mt-8">{data.satisfactionTitle}</h3>}
                  {data.satisfactionDesc && <div className="space-y-4 text-gray-700 mb-8">
                    {data.satisfactionDesc.map((p, i) => <p key={i}>{p}</p>)}
                  </div>}

                  {data.satisfactionNoticeTitle && <h3 className="text-xl  mb-4 mt-8">{data.satisfactionNoticeTitle}</h3>}
                  {data.satisfactionNoticeDesc && <div className="space-y-4 text-gray-700 mb-8">
                    {data.satisfactionNoticeDesc.map((p, i) => <p key={i}>{p}</p>)}
                  </div>}
                </div>

                <hr className="my-10 border-gray-100" />

                {/* Included Features */}
                <div className="mb-10">
                  <h2 className="text-2xl  mb-5">{data.includedFeaturesTitle}</h2>
                  <ul className="space-y-3">
                    {data.includedFeaturesList.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 text-black mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="my-10 border-gray-100" />

                {/* Funding */}
                <div className="mb-10">
                  <h2 className="text-2xl  mb-5">{data.fundingTitle}</h2>
                  <div className="space-y-4 text-gray-700">
                    {data.fundingDesc.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>

                <hr className="my-10 border-gray-100" />

                {/* Terms */}
                <div className="mb-10">
                  <h2 className="text-2xl  mb-5">{data.termsTitle}</h2>
                  {data.termsDesc && <p className="mb-5">{data.termsDesc}</p>}
                  <ul className="space-y-3">
                    {data.termsList.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 text-black mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="my-10 border-gray-100" />

                {/* AGB & Consent (Checkboxes) */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-10 mb-10 shadow-sm">
                  <h2 className="text-2xl  mb-4">{data.agbTitle}</h2>
                  <p className="mb-6 font-medium text-gray-800">{data.agbDesc}</p>
                  
                  {data.agbList && (
                    <ul className="space-y-3 mb-8">
                      {data.agbList.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 text-gray-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="space-y-5 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-all ${checked1 ? 'bg-black border-black text-white shadow-md' : 'border-gray-300 bg-white group-hover:border-black'}`}>
                        {checked1 && <Check size={16} strokeWidth={3} />}
                      </div>
                      <input type="checkbox" className="hidden" checked={checked1} onChange={() => setChecked1(!checked1)} />
                      <span className="text-gray-800 leading-snug font-medium pt-0.5">{data.checkboxes[0]}</span>
                    </label>

                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-all ${checked2 ? 'bg-black border-black text-white shadow-md' : 'border-gray-300 bg-white group-hover:border-black'}`}>
                        {checked2 && <Check size={16} strokeWidth={3} />}
                      </div>
                      <input type="checkbox" className="hidden" checked={checked2} onChange={() => setChecked2(!checked2)} />
                      <span className="text-gray-800 leading-snug font-medium pt-0.5">{data.checkboxes[1]}</span>
                    </label>

                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-all ${checked3 ? 'bg-black border-black text-white shadow-md' : 'border-gray-300 bg-white group-hover:border-black'}`}>
                        {checked3 && <Check size={16} strokeWidth={3} />}
                      </div>
                      <input type="checkbox" className="hidden" checked={checked3} onChange={() => setChecked3(!checked3)} />
                      <span className="text-gray-800 leading-snug font-medium pt-0.5">
                        {data.checkboxes[2]} (<Link href={data.agbLink} target="_blank" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">AGB</Link>)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-10 text-center">
                  <button
                    onClick={handleStartOrder}
                    disabled={!allChecked || isSubmitting}
                    className={`w-full sm:w-auto px-12 py-5 text-sm  uppercase tracking-widest rounded transition-all flex items-center justify-center mx-auto ${allChecked && !isSubmitting ? 'bg-black text-white hover:bg-gray-900 hover:-translate-y-1 shadow-xl hover:shadow-2xl' : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'}`}
                    style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : data.finishOrderTitle}
                  </button>

                  <div className="mt-8 text-xs text-gray-500 max-w-lg mx-auto bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <span className=" uppercase tracking-wider block mb-2 text-gray-700">{data.noteTitle}</span>
                    {data.noteDesc}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Email Verification Modal */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <motion.div
            className='fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className='bg-black p-8 shadow-2xl rounded-2xl flex flex-col gap-6 max-w-md w-full relative'
            >
              <button
                className='absolute top-4 right-4 text-white hover:text-white transition-colors'
                onClick={() => { setIsEmailModalOpen(false); setEmailSent(false); }}
              >
                <IconX size={20} />
              </button>

              {emailSent ? (
                <div className='flex flex-col gap-6 items-center text-center py-6 animate-in fade-in duration-300'>
                  <div className='size-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-2'>
                    <IconMail size={32} />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-xl text-white uppercase tracking-wider' style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                      {locale === 'de' ? 'Posteingang prüfen' : 'Check your inbox'}
                    </h3>
                    <p className='text-sm text-gray-300 max-w-sm leading-relaxed'>
                      {locale === 'de' 
                        ? `Wir haben einen Bestätigungslink an ${userEmail} gesendet. Bitte klicken Sie auf den Link in der E-Mail, um fortzufahren.`
                        : `We sent a verification link to ${userEmail}. Please click the link in the email to continue.`
                      }
                    </p>
                  </div>
                  <Button
                    onClick={() => { setIsEmailModalOpen(false); setEmailSent(false); }}
                    className='bg-white text-black hover:bg-white/90 w-full py-6 text-xs uppercase tracking-widest transition-all'
                    style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                  >
                    {locale === 'de' ? 'Schließen' : 'Close'}
                  </Button>
                </div>
              ) : (
                <>
                  <div className='flex flex-col gap-2'>
                    <h3
                      className='text-xl  text-white uppercase tracking-wider'
                      style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                    >
                      {tModal('title')}
                    </h3>
                    <p className='text-sm text-white'>
                      {tModal('description')}
                    </p>
                  </div>

                  <div className='space-y-4'>
                    <div className='relative'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <IconMail className='h-5 w-5 text-white' />
                      </div>
                      <input
                        type='email'
                        className='block w-full pl-10 pr-3 py-3 border border-white bg-black text-white text-sm focus:outline-none focus:ring-1 focus:ring-white transition-all'
                        placeholder={tModal('placeholder')}
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleEmailSubmit()}
                        disabled={isVerifyingEmail}
                      />
                    </div>

                    {emailError && (
                      <div className='flex items-center gap-2 text-red-500 text-xs mt-1'>
                        <IconAlertCircle size={14} />
                        <span>{emailError}</span>
                      </div>
                    )}

                    <div className='flex flex-col gap-3 pt-2'>
                      <label className='flex items-start gap-3 cursor-pointer group'>
                        <input
                          type='checkbox'
                          className='mt-1 size-4 border-white bg-black accent-white cursor-pointer rounded-sm transition-all group-hover:border-white'
                          checked={marketingConsent}
                          onChange={(e) => setMarketingConsent(e.target.checked)}
                          disabled={isVerifyingEmail}
                        />
                        <span className='text-[11px] text-white select-none leading-tight group-hover:text-white transition-colors'>
                          {tModal('marketingConsent')}
                        </span>
                      </label>

                      <label className='flex items-start gap-3 cursor-pointer group'>
                        <input
                          type='checkbox'
                          className='mt-1 size-4 border-white bg-black accent-white cursor-pointer rounded-sm transition-all group-hover:border-white'
                          checked={termsConsent && privacyConsent}
                          onChange={(e) => {
                            setTermsConsent(e.target.checked)
                            setPrivacyConsent(e.target.checked)
                          }}
                          disabled={isVerifyingEmail}
                        />
                        <span className='text-[11px] text-white select-none leading-tight group-hover:text-white transition-colors'>
                          {tModal.rich('agbPrivacyConsent', {
                            privacyPolicy: (chunks) => (
                              <Link href='https://app.typus.ai/data-privacy' target='_blank' className='text-white underline hover:text-gray-200'>
                                {chunks}
                              </Link>
                            )
                          })}
                        </span>
                      </label>
                    </div>

                    <div className='flex flex-col gap-3 mt-4'>
                      <Button
                        onClick={handleEmailSubmit}
                        disabled={isVerifyingEmail || !privacyConsent || !termsConsent}
                        className='bg-white text-black hover:bg-white w-full py-6 text-xs  uppercase tracking-widest transition-all disabled:bg-black disabled:text-white disabled:border disabled:border-white'
                        style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                      >
                        {isVerifyingEmail ? (
                          <IconLoader2 className='animate-spin mr-2' size={16} />
                        ) : null}
                        {tModal('continue')}
                      </Button>
                      <button
                        onClick={() => { setIsEmailModalOpen(false); setEmailSent(false); }}
                        className='text-white hover:text-white text-[10px] uppercase tracking-widest font-medium transition-colors'
                        style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                      >
                        {tModal('cancel')}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Onboarding Wizard */}
      {showOnboarding && (
        <OnboardingWizard
          email={userEmail}
          locale={locale}
          initialData={onboardingData}
          onComplete={handleOnboardingComplete}
          onCancel={() => setShowOnboarding(false)}
        />
      )}

      <ToastProvider />
    </div>
  )
}
