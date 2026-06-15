'use client'

import { Button } from '@/components/ui/button'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { useIsEurope } from '@/hooks/use-is-europe'
import { apiUrl } from '@/lib/constants'
import { formatPrice } from '@/lib/price-converter'
import {
  IconAlertCircle,
  IconLoader2,
  IconMail,
  IconX,
} from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, X, ArrowLeft, Gift } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import OnboardingWizard from './onboarding/onboarding-wizard'
import { OrderOverviewModal } from './order-overview-modal'
import { TestimonialsSection } from './testimonials-section'
import Lottie from 'lottie-react'
import HandDrawnArrow from '../../public/lottie/Hand-drawn arrow.json'
import BookingDemoClassFormForPricingPage from './demo-class-boooking-form-for-pricing-page'
import { FloatingBuzzer } from '@/components/floating-buzzer'

const professionalPlans = [
  {
    id: 'pro',
    name: 'PRO',
    monthlyPrice: { eur: '€249', usd: '$57' },
    yearlyPrice: { eur: '€2490', usd: '$684' },
    yearlyMonthlyPrice: { eur: '€207.50', usd: '$57' },
    planType: 'PRO',
    discount: {
      monthly: {
        discountedMonthly: { eur: '€249', usd: '$57' },
        introPeriodKey: 'billedMonthly',
      },
      sixMonthly: {
        discountedMonthly: { eur: '€249', usd: '$57' },
        periodDiscountPercent: 0,
        periodSaveAmount: { eur: '€0', usd: '$0' },
        originalCycle: { eur: '€1494', usd: '$342' },
        discountPercent: 0,
        saveAmountCycle: { eur: '€0', usd: '$0' },
        introFirstPeriod: { eur: '€1494', usd: '$342' },
        introPeriodKey: 'billedEvery6Months',
      },
      yearly: {
        discountedMonthly: { eur: '€207.50', usd: '$57' },
        periodDiscountPercent:20,
        periodSaveAmount: { eur: '€636', usd: '$0' },
        originalCycle: { eur: '€2988', usd: '$684' },
        discountPercent: 20,
        saveAmountCycle: { eur: '€636', usd: '$0' },
        introFirstPeriod: { eur: '€2490', usd: '$684' },
        introPeriodKey: 'billedYearly',
        bestDeal: false,
      },
    },
    features: [
      { text: '1000 CREDITS /month', hasFeature: true },
      { text: '4K RESOLUTION', hasFeature: true },
      // { text: '4 CONCURRENT JOBS', hasFeature: true },
      { text: 'EDIT BY CHAT', hasFeature: true },
      { text: 'HIGH-END RESULTS', hasFeature: true },
      { text: 'UPSCALE UP TO 8K', hasFeature: true },
      { text: 'EMAIL SUPPORT', hasFeature: true },
      { text: 'ONBOARDING VIDEO CALL', hasFeature: true },
      { text: 'LIVE WEBINARS 2X/MONTH', hasFeature: true },
      // { text: 'SATISFACTION GUARANTEE', hasFeature: true },
    ],
  },
  {
    id: 'business',
    name: 'BUSINESS',
    monthlyPrice: { eur: '€499', usd: '$117' },
    sixMonthPrice: { eur: '€294', usd: '$337' },
    yearlyPrice: { eur: '€4990', usd: '$668' },
    sixMonthMonthlyPrice: { eur: '€49', usd: '$56' },
    yearlyMonthlyPrice: { eur: '€415.83', usd: '$46' },
    planType: 'BUSINESS',
    // Discount display: original (crossed out), discounted (green), badges, intro price
    discount: {
      monthly: {
        discountedMonthly: { eur: '€499', usd: '$117' },
        introPeriodKey: 'billedMonthly',
      },
      sixMonthly: {
        discountedMonthly: { eur: '€49', usd: '$56' },
        periodDiscountPercent: 50,
        periodSaveAmount: { eur: '€300', usd: '$365' },
        originalCycle: { eur: '€594', usd: '$702' },
        discountPercent: 50,
        saveAmountCycle: { eur: '€300', usd: '$365' },
        introFirstPeriod: { eur: '€294', usd: '$337' },
        introPeriodKey: 'billedEvery6Months',
      },
      yearly: {
        discountedMonthly: { eur: '€415.83', usd: '$55.67' },
        periodDiscountPercent: 20,
        periodSaveAmount: { eur: '€957', usd: '$736' },
        originalCycle: { eur: '€5988', usd: '$1404' },
        discountPercent: 20,
        saveAmountCycle: { eur: '€957', usd: '$736' },
        introFirstPeriod: { eur: '€4990', usd: '$668' },
        introPeriodKey: 'billedYearly',
        bestDeal: true,
      },
    },
    features: [
      { text: '5000 CREDITS /month', hasFeature: true },
      { text: '4K RESOLUTION', hasFeature: true },
      // { text: '4 CONCURRENT JOBS', hasFeature: true },
      { text: 'EDIT BY CHAT', hasFeature: true },
      { text: 'HIGH-END RESULTS', hasFeature: true },
      { text: 'UPSCALE UP TO 8K', hasFeature: true },
      { text: 'EMAIL SUPPORT', hasFeature: true },
      { text: 'ONBOARDING VIDEO CALL', hasFeature: true },
      { text: 'TEAM ACCESS', hasFeature: true },
      { text: 'LIVE WEBINARS 2X/MONTH', hasFeature: true },
      { text: '1:1 LIVE VIDEO CALL 1X/MONTH', hasFeature: true },
      // { text: 'SATISFACTION GUARANTEE', hasFeature: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    monthlyPrice: { eur: 'Custom', usd: 'Custom' },
    planType: 'ENTERPRISE',
    features: [
      { text: 'CUSTOM CREDITS', hasFeature: true },
      // { text: 'UNLIMITED CONCURRENT JOBS', hasFeature: true },
      { text: 'DEDICATED SUPPORT', hasFeature: true },
      { text: 'CUSTOM INTEGRATIONS', hasFeature: true },
    ],
  },
]

const educationPlans = [
  {
    id: 'student',
    name: 'STARTER',
    monthlyPrice: '€6',
    yearlyPrice: '€18',
    monthlyEquivalant: '€2',
    save: '€54',
    period: '/month',
    yearlyPeriod: '/year',
    planType: 'STARTER',
    features: [
      {
        text: '50 CREDITS /month (e.g. 30 base images and 10 Refinements)',
        hasFeature: true,
      },
      { text: 'OPT. CREDITS TOP UPS', hasFeature: true },
      { text: 'UNLIMITED CONCURRENT JOBS', hasFeature: true },
      { text: 'INTEGRATED REFINER', hasFeature: true },
      { text: 'CANCEL ANYTIME', hasFeature: true },
      { text: 'SECURE PAYMENT ON STRIPE', hasFeature: true },
      { text: 'ALL PLUGIN INTEGRATIONS', hasFeature: true },
    ],
  },
  {
    id: 'educator',
    name: 'EXPLORER',
    monthlyPrice: '€12',
    yearlyPrice: '€36',
    monthlyEquivalant: '€3',
    save: '€108',
    period: '/month',
    yearlyPeriod: '/year',
    planType: 'EXPLORER',
    features: [
      { text: 'EVERYTHING FROM STARTER', hasFeature: true },
      {
        text: '150 CREDITS /month (e.g. 100 base images and 10 Refinements)',
        hasFeature: true,
      },
      { text: '2 CONCURRENT JOBS', hasFeature: true },
      { text: 'RESOLUTION UP TO 4K', hasFeature: true },
      { text: 'NO QUEUE', hasFeature: true },
    ],
  },
  {
    id: 'institution',
    name: 'PRO',
    monthlyPrice: '€18',
    yearlyPrice: '€54',
    monthlyEquivalant: '€5',
    save: '€162',
    period: '/month',
    yearlyPeriod: '/year',
    planType: 'PRO',
    popular: true,
    badgeTextKey: 'highEndResults',
    features: [
      { text: 'EVERYTHING FROM EXPLORER', hasFeature: true },
      {
        text: '1000 CREDITS /month (e.g. 800 base images and 40 Refinements)',
        hasFeature: true,
      },
      { text: '4 CONCURRENT JOBS', hasFeature: true },
      { text: 'PREMIUM LIVE VIDEO CALL SUPPORT', hasFeature: true },
      { text: 'INCREASED SPEED OF GENERATION', hasFeature: true },
      { text: 'RESOLUTION UP TO 8K', hasFeature: true },
    ],
  },
]

const apiBaseUrl = `${apiUrl}/api/subscription/public/`
// const apiBaseUrl = 'https://app.typus.ai/api/subscription/public/'

export function ManyChatPricingSection({ 
  isStandalone = false,
  showOnly = 'all'
}: { 
  isStandalone?: boolean
  showOnly?: 'regular' | 'educational' | 'all'
}) {
  const t = useTranslations('Pricing')
  const containerRef = useRef<HTMLDivElement>(null)
  const [isYearly, setIsYearly] = useState(true)
  const locale = useLocale();
  const [plans, setPlans] = useState<any>();
  const [educationalPlans, setEducationalPlans] = useState<any>();
  const [planCurrency, setPlanCurrency] = useState<'eur' | 'usd'>('eur');
  const [isVat, setIsVat] = useState<boolean>(true);
  const [locationContinent, setLocationContinent] = useState<string | null>(null);
  const [locationCountryCode, setLocationCountryCode] = useState<string | null>(null);
  const [locationCurrency, setLocationCurrency] = useState<string | null>(null);
  const [universityName, setUniversityName] = useState<string | null>(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<any>(null)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [modalError, setModalError] = useState<string | null>(null)
  // Professional Promo state
  const [profPromoCode, setProfPromoCode] = useState('')
  const [profPromoDiscount, setProfPromoDiscount] = useState<any>(null)
  const [profPromoError, setProfPromoError] = useState<string | null>(null)
  const [profPromoSuccess, setProfPromoSuccess] = useState<string | null>(null)

  // Educational Promo state
  const [eduPromoCode, setEduPromoCode] = useState('')
  const [eduPromoDiscount, setEduPromoDiscount] = useState<any>(null)
  const [eduPromoError, setEduPromoError] = useState<string | null>(null)
  const [eduPromoSuccess, setEduPromoSuccess] = useState<string | null>(null)

  const [isVerifyingPromo, setIsVerifyingPromo] = useState(false)
  const [subscribeError, setSubscribeError] = useState<string | null>(null)

  const [showTrialWarning, setShowTrialWarning] = useState(false)
  const [showKickOffModal, setShowKickOffModal] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [pendingOrderData, setPendingOrderData] = useState<any>(null)
  const [onboardingData, setOnboardingData] = useState<any>(null)
  const [marketingConsent, setMarketingConsent] = useState(true)
  const [privacyConsent, setPrivacyConsent] = useState(false)
  const [termsConsent, setTermsConsent] = useState(false)

  const router = useRouter()
  const tModal = useTranslations('SubscriptionModal')
  const isEurope = useIsEurope();
  console.log("isEurope", isEurope);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.get('canceled') === 'true') {
      toast.error(tModal('canceled'))
      // Clear the canceled param from URL
      const newUrl = window.location.pathname
      window.history.replaceState({}, '', newUrl)
    }

    const urlPromoCode = searchParams.get('promoCode')
    if (urlPromoCode) {
      setProfPromoCode(urlPromoCode)
      setEduPromoCode(urlPromoCode)
    }

    // Scroll to student plan if hash is present
    if (window.location.hash === '#student-plan') {
      const element = document.getElementById('student-plan')
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [tModal])

  const handleVerifyPromoCode = useCallback(async (type: 'prof' | 'edu') => {
    const isEdu = type === 'edu'
    const code = isEdu ? eduPromoCode : profPromoCode
    const setDiscount = isEdu ? setEduPromoDiscount : setProfPromoDiscount
    const setError = isEdu ? setEduPromoError : setProfPromoError
    const setSuccess = isEdu ? setEduPromoSuccess : setProfPromoSuccess

    if (isEdu && code.trim().toUpperCase() === 'KICK') {
      setError(tModal('promoCodeNotForEdu'))
      return
    }

    if (!code.trim()) return

    setIsVerifyingPromo(true)
    setError(null)
    setSuccess(null)
    setDiscount(null)
    setSubscribeError(null)

    try {
      const billingCycleMap: Record<string, string> = {
        monthly: 'MONTHLY',
        sixMonthly: 'SIX_MONTHLY',
        yearly: 'YEARLY',
      }
      // If we're verifying from the card-specific modal, we use that plan logic.
      // If verifying from the page input, we use a general default (yearly for edu, monthly for prof)
      // or try to find a selected plan.
      const mappedBillingCycle = selectedPlanForModal
        ? (billingCycleMap[selectedPlanForModal.billingCycle] || selectedPlanForModal.billingCycle.toUpperCase())
        : (isEdu ? 'YEARLY' : 'MONTHLY')

      const response = await fetch(`${apiBaseUrl}validate-promo-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          promoCode: code.trim(),
          billingCycle: mappedBillingCycle,
          planType: selectedPlanForModal?.planType || (isEdu ? 'STARTER' : 'PRO'),
          isEducational: isEdu,
          currency: planCurrency,
        }),
      })

      const data = await response.json()

      if (response.ok && data.valid) {
        setDiscount(data.discount)
        setSuccess(tModal('promoCodeSuccess'))
      } else {
        setError(data.message || tModal('promoCodeError'))
      }
    } catch (error) {
      setError(tModal('promoCodeError'))
    } finally {
      setIsVerifyingPromo(false)
    }
  }, [eduPromoCode, profPromoCode, selectedPlanForModal, tModal])


  useEffect(() => {
    // Check if we should auto-verify (code exists but no result/error yet)
    if (profPromoCode && profPromoCode.trim().length >= 3 && !profPromoDiscount && !profPromoError && !isVerifyingPromo) {
      const timer = setTimeout(() => {
        handleVerifyPromoCode('prof')
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [profPromoCode, handleVerifyPromoCode, profPromoDiscount, profPromoError, isVerifyingPromo])

  useEffect(() => {
    // Check if we should auto-verify (code exists but no result/error yet)
    if (eduPromoCode && eduPromoCode.trim().length >= 3 && !eduPromoDiscount && !eduPromoError && !isVerifyingPromo) {
      const timer = setTimeout(() => {
        handleVerifyPromoCode('edu')
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [eduPromoCode, handleVerifyPromoCode, eduPromoDiscount, eduPromoError, isVerifyingPromo])


  const handleSubscribe = async (plan: any, priceInfo: any, isEdu: boolean) => {
    const code = isEdu ? eduPromoCode : profPromoCode
    const discount = isEdu ? eduPromoDiscount : profPromoDiscount
    const setError = isEdu ? setEduPromoError : setProfPromoError

    if (discount && discount.couponId) {
      setSubscribeError(null)
      // const loadingToastId = toast.loading(tModal('verifying') || 'Verifying...')
      try {
        const response = await fetch(`${apiBaseUrl}validate-promo-code-step-2`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code: code,
            discount: discount,
            billingCycle: plan.billingCycle || (isEdu ? (isYearly ? 'YEARLY' : 'MONTHLY') : 'MONTHLY'),
            planType: plan.planType,
            isEducational: isEdu
          }),
        })
        const data = await response.json()

        if (!response.ok || !data.valid) {
          console.log(response, "RESPOMSE")
          const errorMessage = data.message || tModal('promoCodeError')
          setSubscribeError(errorMessage)
          toast.error(errorMessage)
          return // do not open modal
        }

        // toast.dismiss(loadingToastId)
      } catch (error) {
        console.log(error, "ERROR")
        console.error('Error validating promo code with plan:', error)
        const errorMessage = tModal('promoCodeError')
        setSubscribeError(errorMessage)
        // toast.error(tModal('promoCodeError'), { id: loadingToastId })
        return // do not open modal
      }
    }
    setSubscribeError(null)

    setSelectedPlanForModal({
      planType: plan.planType,
      billingCycle: plan.billingCycle || (isEdu ? (isYearly ? 'YEARLY' : 'MONTHLY') : 'MONTHLY'),
      priceId: priceInfo.stripePriceId,
      isEducational: isEdu
    })
    setIsModalOpen(true)
    setModalError(null)
    const searchParams = new URL(window.location.href).searchParams
    const urlPromoCode = searchParams.get('promoCode')
    if (urlPromoCode && !code) {
      if (isEdu) setEduPromoCode(urlPromoCode)
      else setProfPromoCode(urlPromoCode)
    }
    setShowTrialWarning(false)
  }

  const handleContinue = async (ignoreTrialWarning = false) => {
    if (!userEmail || !userEmail.trim()) {
      setModalError(tModal('errorRequired'))
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(userEmail.trim())) {
      setModalError(tModal('errorInvalidEmail'))
      return
    }

    console.log('--- Handle Continue ---')
    console.log('Email:', userEmail.trim())
    console.log('Selected Plan:', selectedPlanForModal)

    setIsRedirecting(true)
    setModalError(null)

    try {
      // 1. Verify Email Type
      const verifyResponse = await fetch(`${apiBaseUrl}verify-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail.trim(), isEducational: selectedPlanForModal.isEducational ? true : false }),
      })
      const verifyData = await verifyResponse.json()
      console.log('Verify Data:', verifyData)

      if (verifyData.universityName) {
        setUniversityName(verifyData.universityName)
      }

      if (!verifyResponse.ok) {
        toast.error(verifyData.message || 'An unexpected error occurred')
        setSubscribeError(verifyData.message || 'An unexpected error occurred')
        setIsModalOpen(false)
        setIsRedirecting(false)
        return
      }

      if (selectedPlanForModal.isEducational && !verifyData.isUniversity) {
        setModalError(tModal('errorNotStudentEmail'))
        setIsRedirecting(false)
        return
      }

      // if (!selectedPlanForModal.isEducational && !verifyData.isProfessional && !ignoreTrialWarning && !(selectedPlanForModal.isEducational ? eduPromoDiscount : profPromoDiscount)) {
      //   console.log('Showing Trial Warning Modal')
      //   setShowTrialWarning(true)
      //   setIsModalOpen(false) // Close the main modal to show warning
      //   setIsRedirecting(false)
      //   return
      // }

      const billingCycleMap: Record<string, string> = {
        monthly: 'MONTHLY',
        sixMonthly: 'SIX_MONTHLY',
        yearly: 'YEARLY',
      }
      const mappedBillingCycle = billingCycleMap[selectedPlanForModal.billingCycle] || selectedPlanForModal.billingCycle.toUpperCase()

      // 2. Show Onboarding Wizard instead of proceeding to checkout immediately
      setIsRedirecting(false)
      setIsModalOpen(false)
      setShowTrialWarning(false)

      if (verifyData.existsUser || verifyData.existsPublicOnBoarding) {
        await handleOnboardingComplete(verifyData.data || null)
      } else {
        setShowOnboarding(true)
      }
    } catch (error: any) {
      console.error('Checkout error:', error)
      const errorMessage = error.message || 'An unexpected error occurred'

      // Check for specific student email error to show translated message
      if (errorMessage.toLowerCase().includes('student email')) {
        setModalError(tModal('errorNotStudentEmail'))
      } else {
        setModalError(errorMessage)
      }

      toast.error(errorMessage)
      setIsRedirecting(false)
    }
  }

  const handleOnboardingComplete = async (onboardingData: any) => {
    setOnboardingData(onboardingData)
    setIsRedirecting(true)

    try {
      if (onboardingData && !onboardingData.id) {
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
              ...(selectedPlanForModal.isEducational && { isStudent: true }),
              ...(selectedPlanForModal.isEducational && { universityName: universityName }),
              ...onboardingData
            }),
          })
          if (!submitResponse.ok) {
            console.error('Failed to save public onboarding data:', await submitResponse.json())
          }
        } catch (e) {
          console.error('Error submitting public onboarding data:', e)
        }
      }

      const billingCycleMap: Record<string, string> = {
        monthly: 'MONTHLY',
        sixMonthly: 'SIX_MONTHLY',
        yearly: 'YEARLY',
      }
      const mappedBillingCycle = billingCycleMap[selectedPlanForModal.billingCycle] || selectedPlanForModal.billingCycle.toUpperCase()

      const getTrackingCookies = () => {
        if (typeof document === 'undefined') return {};

        const getCookiesMap = () => document.cookie.split(';').reduce((acc, cookie) => {
          const [key, value] = cookie.split('=').map(c => c.trim());
          if (key) acc[key] = value;
          return acc;
        }, {} as Record<string, string>);

        let cookies = getCookiesMap();

        // Extract from URL (Priority)
        const urlParams = new URLSearchParams(window.location.search);
        const gclid = urlParams.get('gclid') || cookies['gclid'] || null;
        const gbraid = urlParams.get('gbraid') || cookies['gbraid'] || null;
        const wbraid = urlParams.get('wbraid') || cookies['wbraid'] || null;

        // Persist GCLID in cookies if found in URL
        if (urlParams.get('gclid')) {
          document.cookie = `gclid=${gclid}; path=/; max-age=7776000`; // 90 days
        }

        // 🛠️ TESTING FALLBACK: If on localhost and cookies are missing, generate fake ones
        if (window.location.hostname === 'localhost' && !cookies['_ga']) {
          console.log('🧪 Localhost detected: Generating fake tracking cookies for testing...');
          const fakeGa = `GA1.1.${Math.floor(Math.random() * 1000000000)}.${Math.floor(Date.now() / 1000)}`;
          const fakeSid = `GS2.1.${Math.floor(Date.now() / 1000)}.1.1.1.1`;
          const fakeFpid = `FPID2.2.${Math.floor(Math.random() * 1000000000)}.${Math.floor(Date.now() / 1000)}`;
          const fakeGclid = `CLID_${Math.floor(Math.random() * 1000000000)}`;

          document.cookie = `_ga=${fakeGa}; path=/; max-age=31536000`;
          document.cookie = `_ga_QR6YQP6P8N=${fakeSid}; path=/; max-age=31536000`;
          document.cookie = `FPID=${fakeFpid}; path=/; max-age=31536000`;
          document.cookie = `gclid=${fakeGclid}; path=/; max-age=7776000`;

          cookies = getCookiesMap(); // Refresh map
        }

        const trackingCookies = {
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
        };
        console.log('🎯 Final Tracking Cookies (including GCLID):', trackingCookies);
        return trackingCookies;
      };

      if (selectedPlanForModal.planType === 'PRO' || selectedPlanForModal.planType === 'BUSINESS') {
        const planId = `${selectedPlanForModal.planType.toLowerCase()}-${selectedPlanForModal.billingCycle.toLowerCase()}`
        
        const checkoutData = {
          priceId: selectedPlanForModal.priceId,
          email: userEmail,
          isEducational: selectedPlanForModal.isEducational,
          discountId: selectedPlanForModal.isEducational ? eduPromoDiscount?.couponId : profPromoDiscount?.couponId,
          code: selectedPlanForModal.isEducational ? eduPromoCode : profPromoCode,
          billingCycle: mappedBillingCycle,
          planType: selectedPlanForModal.planType,
          trackingCookies: getTrackingCookies()
        }
        
        setPendingOrderData({ planId, checkoutData })
        setShowOrderModal(true)
        // Hide onboarding if it was open
        setShowOnboarding(false)
        return
      }

      const response = await fetch(`${apiBaseUrl}checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail.trim(),
          planType: selectedPlanForModal.planType,
          billingCycle: mappedBillingCycle,
          isEducational: selectedPlanForModal.isEducational,
          promoCode: selectedPlanForModal.isEducational ? (eduPromoDiscount ? eduPromoCode.trim() : null) : (profPromoDiscount ? profPromoCode.trim() : null),
          currency: planCurrency,
          cancelUrl: window.location.href,
          marketingConsent,
          privacyConsent,
          termsConsent,
          language: locale,
          onboardingData: onboardingData,
          trackingData: getTrackingCookies(), // Explicitly send cookies here
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create checkout session')
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (error: any) {
      console.error('Checkout error:', error)
      toast.error(error.message || 'Failed to create checkout session')
      setIsRedirecting(false)
    }
  }

  // Helper to find fetched plan data
  const findFetchedPlan = (planType: string, isEdu: boolean) => {
    const source = isEdu ? educationalPlans : plans
    return source?.find((p: any) => p.planType === planType)
  }

  // Get translated Professional plans
  const getProfessionalPlans = () => {
    // We display all 3 plans: PRO, BUSINESS, and ENTERPRISE.
    const proFetchedData = findFetchedPlan('PRO', false)
    const businessFetchedData = findFetchedPlan('BUSINESS', false)
    
    const mapFeatureText = (f: any) => {
      if (typeof f === 'string') return f;
      if (f.text.includes('1000 CREDITS')) return t('plans.pro.features.credits1000');
      if (f.text.includes('5000 CREDITS')) return t('plans.pro.features.credits5000');
      if (f.text.includes('TEAM ACCESS')) return t('plans.pro.features.teamAccess');
      
      const key = f.text.includes('4K') ? 'resolution4k' : 
                  f.text.includes('4 CONCURRENT') ? 'concurrentJobs4' : 
                  f.text.includes('EDIT BY CHAT') ? 'editByChat' : 
                  f.text.includes('HIGH-END') ? 'highEndResults' : 
                  f.text.includes('EMAIL SUPPORT') ? 'emailSupport' : 
                  f.text.includes('ONBOARDING VIDEO CALL') ? 'onboardingCall' : 
                  f.text.includes('LIVE WEBINARS') ? 'liveWebinars' : 
                  f.text.includes('1:1 LIVE VIDEO') ? 'oneOnOneCall' : 
                  f.text.includes('SATISFACTION GUARANTEE') ? 'satisfactionGuarantee' : 'upscale13k';
      return t(`plans.pro.features.${key}`);
    };

    // Pro
    const proPlan = {
      ...professionalPlans[0], 
      name: 'PRO',
      fetchedData: proFetchedData,
      features: professionalPlans[0].features.map(f => ({
        ...f,
        text: mapFeatureText(f),
        hasFeature: typeof f === 'object' ? f.hasFeature : true,
      })),
      targetAudience: t('plans.pro.targetAudience'),
      billingCycle: isYearly ? ('yearly' as const) : ('monthly' as const) // Set cycle based on toggle
    }

    // Business
    const baseBusinessPlan = professionalPlans[1]
    const businessPlan = {
      ...baseBusinessPlan,
      name: 'BUSINESS',
      popular: true,
      badgeTextKey: isYearly ? 'bestOffer' : 'mostPopular',
      fetchedData: businessFetchedData,
      billingCycle: isYearly ? ('yearly' as const) : ('monthly' as const),
      features: baseBusinessPlan.features.map(f => ({
        ...f,
        text: mapFeatureText(f),
        hasFeature: typeof f === 'object' ? f.hasFeature : true,
      })),
      targetAudience: t('plans.business.targetAudience'),
    }

    // Enterprise
    const baseEnterprisePlan = professionalPlans[2]
    const enterprisePlan = {
      ...baseEnterprisePlan,
      name: t('plans.enterprise.name'),
      fetchedData: null,
      billingCycle: isYearly ? ('yearly' as const) : ('monthly' as const),
      features: baseEnterprisePlan.features.map(f => ({
        ...f,
        // using simple text or placeholder translation
        text: typeof f === 'string' ? f : t(`plans.enterprise.features.${f.text.includes('CUSTOM CREDITS') ? 'customCredits' : f.text.includes('UNLIMITED') ? 'unlimitedJobs' : f.text.includes('DEDICATED') ? 'dedicatedSupport' : 'customIntegrations'}`),
        hasFeature: typeof f === 'object' ? f.hasFeature : true,
      })),
    }

    return [proPlan, businessPlan, enterprisePlan]
  }

  // Get translated Education plans
  const getEducationPlans = () => {
    return [
      {
        ...educationPlans[0],
        name: t('plans.student.name'),
        fetchedData: findFetchedPlan('STARTER', true),
        features: educationPlans[0].features.map(f => ({
          ...f,
          text:
            typeof f === 'string'
              ? f
              : t(
                `plans.student.features.${f.text.includes('50 CREDITS') ? 'credits50' : f.text.includes('OPT. CREDITS') ? 'optCreditsTopUps' : f.text.includes('UNLIMITED CONCURRENT') ? 'unlimitedJobs' : f.text.includes('INTEGRATED REFINER') ? 'integratedRefiner' : f.text.includes('CANCEL ANYTIME') ? 'cancelAnytime' : f.text.includes('SECURE PAYMENT') ? 'securePayment' : 'allPlugins'}`
              ),
          hasFeature: typeof f === 'object' ? f.hasFeature : true,
        })),
      },
      {
        ...educationPlans[1],
        name: t('plans.educator.name'),
        fetchedData: findFetchedPlan('EXPLORER', true),
        features: educationPlans[1].features.map(f => ({
          ...f,
          text:
            typeof f === 'string'
              ? f
              : t(
                `plans.educator.features.${f.text.includes('EVERYTHING FROM STARTER') ? 'everythingFromStarter' : f.text.includes('150 CREDITS') ? 'credits150' : f.text.includes('2 CONCURRENT') ? 'concurrentJobs2' : f.text.includes('4K') ? 'resolution4k' : 'noQueue'}`
              ),
          hasFeature: typeof f === 'object' ? f.hasFeature : true,
        })),
      },
      {
        ...educationPlans[2],
        name: t('plans.institution.name'),
        fetchedData: findFetchedPlan('PRO', true),
        features: educationPlans[2].features.map(f => ({
          ...f,
          text:
            typeof f === 'string'
              ? f
              : t(
                `plans.institution.features.${f.text.includes('EVERYTHING FROM EXPLORER') ? 'everythingFromExplorer' : f.text.includes('1000 CREDITS') ? 'credits1000' : f.text.includes('4 CONCURRENT') ? 'concurrentJobs4' : f.text.includes('PREMIUM LIVE') ? 'premiumSupport' : f.text.includes('INCREASED SPEED') ? 'increasedSpeed' : 'resolution13k'}`
              ),
          hasFeature: typeof f === 'object' ? f.hasFeature : true,
        })),
      },
    ]
  }

  const currentProfPlans = getProfessionalPlans()
  const currentEduPlans = getEducationPlans()

  useEffect(() => {
    fetchPlans();
  }, [isEurope]);

  const fetchPlans = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}plans?currency=${isEurope ? 'eur' : 'usd'}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },

        });
      const plansData = await response.json();

      setPlans(plansData?.regularPlans);
      setEducationalPlans(plansData?.educationalPlans);
      setPlanCurrency(plansData?.currency);
      if (plansData?.location?.isVat !== undefined) {
        setIsVat(plansData.location.isVat);
      }
      if (plansData?.location?.continent) {
        setLocationContinent(plansData.location.continent);
      }
      if (plansData?.location?.country_code) {
        setLocationCountryCode(plansData.location.country_code);
      }
      if (plansData?.location?.currency) {
        setLocationCurrency(plansData.location.currency);
      }
      // Use currency from backend
      // const detectedCurrency = ;
      // setCurrency(detectedCurrency);
      // console.log(`💰 Setting currency: ${detectedCurrency} (from backend: ${plansData.currency})`);
      // setIsProfessional(plansData.isProfessional);
      // setIsEligibleForTrial(plansData.isEligibleForTrial);
    } catch (error) {
      console.error('Failed to fetch plans:', error);
      // toast.error(t.failedToLoadPlans);
    } finally {
      // setLoading(false);
    }
  };


  const renderEducationSection = () => {
    return (
      <>
        {/* Education Section */}
        <div id='student-plan' className='text-center mb-2 relative z-40 scroll-mt-28'>
          <h2
            className='text-[30px] font-normal text-black mt-10 mb-2'
            style={{
              fontFamily:
                "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif",
            }}
          >
            {t('educationPlans')}
          </h2>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-4'>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2  text-sm font-medium transition-colors ${isYearly
                ? 'bg-white text-black shadow-md'
                : 'text-black hover:text-black'
                }`}
            >
              {t('yearlyBilling')}
            </button>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2  text-sm font-medium transition-colors ${!isYearly
                ? 'bg-white text-black shadow-md'
                : 'text-black hover:text-black'
                }`}
            >
              {t('monthlyBilling')}
            </button>
          </div>
          {/* Promo Code Input on Page (Education) */}
          <div className='w-full max-w-md mx-auto mt-8 mb-6'>
            <div className='flex flex-col sm:flex-row gap-2 min-h-[50px]'>
              <input
                type='text'
                className='block flex-1 px-4 py-3 border border-black bg-white text-black text-sm focus:outline-none focus:ring-1 focus:ring-black/20 transition-all uppercase placeholder:normal-case h-[50px] sm:h-full'
                placeholder={tModal('promoCodePlaceholder')}
                value={eduPromoCode}
                onChange={(e) => {
                  setEduPromoCode(e.target.value)
                  setEduPromoError(null)
                  setEduPromoSuccess(null)
                  setEduPromoDiscount(null)
                }}
                disabled={isRedirecting || isVerifyingPromo}
              />
              <Button
                onClick={() => handleVerifyPromoCode('edu')}
                disabled={!eduPromoCode.trim() || isRedirecting || isVerifyingPromo}
                className='bg-black text-white hover:bg-black/90 px-8 py-3 h-[50px] sm:h-full text-sm uppercase font-bold tracking-wider transition-all w-full sm:w-auto shrink-0'
                style={{ fontFamily: 'var(--font-soyuz-grotesk), sans-serif' }}
              >
                {isVerifyingPromo ? <IconLoader2 className='animate-spin' size={14} /> : tModal('apply')}
              </Button>
            </div>
            {eduPromoError && (
              <div className='flex items-center gap-2 text-red-600 text-xs mt-2'>
                <IconAlertCircle size={14} />
                <span>{eduPromoError}</span>
              </div>
            )}
            {eduPromoSuccess && (
              <div className='flex items-center gap-2 text-emerald-600 text-xs mt-2'>
                <Check size={14} />
                <span>{eduPromoSuccess}</span>
              </div>
            )}
            {eduPromoDiscount && (
              <div className='mt-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm'>
                <span className='font-bold uppercase'>{eduPromoDiscount.name}:</span> {eduPromoDiscount.type === 'percentage' ? `${eduPromoDiscount.value}% OFF` : `-${eduPromoDiscount.value / 100} ${eduPromoDiscount.currency?.toUpperCase()}`}
              </div>
            )}
          </div>

          {subscribeError && (
            <div className='w-full max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-top-2 duration-300'>
              <div className='bg-red-50 border border-red-200 p-4 flex items-center gap-3'>
                <IconAlertCircle className='text-red-600 shrink-0' size={20} />
                <p className='text-red-700 text-sm font-medium font-space-grotesk'>
                  {subscribeError}
                </p>
                <button
                  onClick={() => setSubscribeError(null)}
                  className='ml-auto text-red-400 hover:text-red-600 transition-colors'
                >
                  <IconX size={16} />
                </button>
              </div>
            </div>
          )}

          {isYearly && (
            <div className='flex flex-col gap-1 mb-8 text-center'>
            </div>
          )}
        </div>

        {/* Education Plans Cards */}
        <div className='flex flex-wrap justify-center items-stretch w-full gap-8 mb-10'>
          {currentEduPlans.map((plan, index) => (
            <div key={index} className='w-full max-w-xs z-30'>
              <PricingCard
                plan={plan as PlanType & { billingCycle?: 'monthly' | 'sixMonthly' | 'yearly' }}
                isYearly={isYearly}
                isProfessional={false}
                isEurope={planCurrency === 'eur'}
                currencySymbol={planCurrency === 'eur' ? '€' : '$'}
                onSubscribe={(plan, priceInfo) => handleSubscribe(plan, priceInfo, true)}
                promoDiscount={eduPromoDiscount}
                isVat={isVat}
              />
            </div>
          ))}
        </div>
      </>
    )
  }

  return (
    <section
      ref={containerRef}
      className='min-h-screen relative pt-0 pb-20'
      style={{ backgroundColor: '#fcfcfd' }}
      id='pricing'
    >


      <div className='w-full max-w-7xl mx-auto px-4 relative z-10 pt-0'>
        {/* Educational Plans at the top if requested */}
        {showOnly === 'educational' && renderEducationSection()}

        {/* Professional Section */}
        {showOnly !== 'educational' && (
          <>
            <div className='text-center mb-2 relative z-40'>
          <h2
            className='text-[30px] font-black mt-10 mb-8 text-black'
          >
            {t('selfServiceTitle')}
          </h2>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 mt-6'>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2  text-sm font-medium transition-colors ${isYearly
                ? 'bg-white text-black shadow-md'
                : 'text-black hover:text-black'
                }`}
              style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
            >
              {t('yearlyBilling')}
            </button>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2  text-sm font-medium transition-colors ${!isYearly
                ? 'bg-white text-black shadow-md'
                : 'text-black hover:text-black'
                }`}
              style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
            >
              {t('monthlyBilling')}
            </button>
          </div>
          {/* Promo Code Input on Page */}
          <div className='w-full max-w-md mx-auto mt-8 mb-10'>
            <div className='flex flex-col sm:flex-row gap-2 min-h-[50px]'>
              <input
                type='text'
                className='block flex-1 px-4 py-3 border border-black bg-white text-black text-sm focus:outline-none focus:ring-1 focus:ring-black/20 transition-all uppercase placeholder:normal-case h-[50px] sm:h-full'
                placeholder={tModal('promoCodePlaceholder')}
                value={profPromoCode}
                onChange={(e) => {
                  setProfPromoCode(e.target.value)
                  setProfPromoError(null)
                  setProfPromoSuccess(null)
                  setProfPromoDiscount(null)
                  setSubscribeError(null)
                }}
                disabled={isRedirecting || isVerifyingPromo}
              />
              <Button
                onClick={() => handleVerifyPromoCode('prof')}
                disabled={!profPromoCode.trim() || isRedirecting || isVerifyingPromo}
                className='bg-black text-white hover:bg-black/90 px-8 py-3 h-[50px] sm:h-full text-sm uppercase font-bold tracking-wider transition-all w-full sm:w-auto shrink-0'
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                {isVerifyingPromo ? <IconLoader2 className='animate-spin' size={14} /> : tModal('apply')}
              </Button>
            </div>
            {profPromoError && (
              <div className='flex items-center gap-2 text-red-600 text-xs mt-2'>
                <IconAlertCircle size={14} />
                <span>{profPromoError}</span>
              </div>
            )}
            {profPromoSuccess && (
              <div className='flex items-center gap-2 text-emerald-600 text-xs mt-2'>
                <Check size={14} />
                <span>{profPromoSuccess}</span>
              </div>
            )}
            {profPromoDiscount && (
              // <div className='mt-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px]'>
              //   <span className='font-normal uppercase'>{profPromoDiscount.name}:</span> {profPromoDiscount.type === 'percentage' ? `${profPromoDiscount.value}% OFF` : `-${profPromoDiscount.value / 100} ${profPromoDiscount.currency?.toUpperCase()}`}
              // </div>
              <div className='mt-2 px-3 py-2 bg-emerald-50/60 border border-emerald-100 text-emerald-600 text-xs rounded-md'>
                <span className='font-medium normal-case'>
                  {profPromoDiscount.name}:
                </span>{' '}
                <span className='font-normal'>
                  {profPromoDiscount.type === 'percentage'
                    ? `${profPromoDiscount.value}% off`
                    : `-${profPromoDiscount.value / 100} ${profPromoDiscount.currency?.toUpperCase()}`}
                </span>
              </div>
            )}
          </div>

          {subscribeError && (
            <div className='w-full max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-top-2 duration-300'>
              <div className='bg-red-50 border border-red-200 p-4 flex items-center gap-3'>
                <IconAlertCircle className='text-red-600 shrink-0' size={20} />
                <p className='text-red-700 text-sm font-medium font-space-grotesk'>
                  {subscribeError}
                </p>
                <button
                  onClick={() => setSubscribeError(null)}
                  className='ml-auto text-red-400 hover:text-red-600 transition-colors'
                >
                  <IconX size={16} />
                </button>
              </div>
            </div>
          )}

          {/* <div className='flex flex-col items-center mb-12 w-full'>
            <div className={`rounded-none p-3 mb-4 max-w-2xl w-full border transition-all duration-300 ${profPromoDiscount ? 'bg-red-50 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : 'bg-site-white border-black'}`}>
              <p className={`text-center font-medium text-sm font-space-grotesk ${profPromoDiscount ? 'text-red-700' : 'text-gray-900'}`}>
                {profPromoDiscount ? (
                  <span className='font-bold uppercase tracking-tight'>
                    {locale === 'de'
                      ? 'Die Testversion ist nicht gültig, wenn der Gutscheincode angewendet wird'
                      : 'The trial is not valid when the promo code is applied'}
                  </span>
                ) : (
                  <>
                    <span className='font-bold text-black'>
                      {t('freeTrial')}
                    </span>{' '}
                    {t('freeTrialDescription')}
                  </>
                )}
              </p>
            </div>
          </div> */}

            {/* <div className='flex justify-center mb-8 w-full '>
              <div className={`${profPromoDiscount ? 'border-red-500' : 'border-black'} max-w-2xl w-full text-xs text-gray-500 text-center border  py-3`}>
                {profPromoDiscount ? (
                  <span className='text-red-600'>
                    {locale === 'de'
                      ? 'Die Testversion ist nicht gültig, wenn der Gutscheincode angewendet wird'
                      : 'The trial is not valid when a promo code is applied'}
                  </span>
                ) : (
                  <span>
                    <span className='font-medium text-gray-700'>
                      {t('freeTrial')}
                    </span>{' '}
                    {t('freeTrialDescription')}
                  </span>
                )}
              </div>
            </div> */}
        </div>
        <div className='flex flex-col gap-1 mb-8 text-center'>
        </div>

        {/* Professional Plans Cards */}
          <div className='flex flex-col xl:flex-row justify-center items-start w-full gap-8 mb-4 px-4 xl:px-0 max-w-[1400px] mx-auto'>
            <div id='booking-form' className='w-full xl:w-[300px] shrink-0 sticky top-24 z-30 bg-[#fcfcfd]'>
              <BookingDemoClassFormForPricingPage />
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-stretch flex-1 gap-4 xl:gap-8'>
              {currentProfPlans.map((plan, index) => (
                <div key={index} className='w-full lg:flex-1 lg:max-w-[320px] z-10 relative'>
                  {index === 1 && (
                    <div className='absolute -top-20 -right-6 hidden lg:block animate-bounce-slow pointer-events-none'>
                      <div className='flex flex-col items-center gap-1'>
                        {/* Empty to preserve structure if Lottie was here */}
                      </div>
                    </div>
                  )}
                  <PricingCard
                    plan={plan as PlanType & { billingCycle?: 'monthly' | 'sixMonthly' | 'yearly' }}
                    isYearly={isYearly}
                    isProfessional={true}
                    isEurope={planCurrency === 'eur'}
                    currencySymbol={planCurrency === 'eur' ? '€' : '$'}
                    onSubscribe={(plan, priceInfo) => handleSubscribe(plan, priceInfo, false)}
                    promoDiscount={profPromoDiscount}
                    isVat={isVat}
                  />
                </div>
              ))}
            </div>
          </div>
          </>
        )}

        {/* Credit Deduction Overview & Status */}
        <div className='w-full max-w-3xl mx-auto mt-4 mb-8 z-20 relative'>
          <div className='border border-black/10 bg-white'>
            <div className='border-b border-black/10 px-3 py-2'>
              <h3
                className='text-[11px] font-bold text-black lowercase tracking-wider text-center'
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('creditDeduction.title')}
              </h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10'>
              {/* Image Credits */}
              <div className='px-4 py-3'>
                <div className='flex items-center gap-1.5 mb-2'>
                  <svg className='w-3.5 h-3.5 text-black flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
                    <rect x='3' y='3' width='18' height='18' rx='2' strokeLinecap='round' strokeLinejoin='round' />
                    <circle cx='8.5' cy='8.5' r='1.5' />
                    <polyline points='21 15 16 10 5 21' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                  <h4
                    className='text-[10px] font-bold tracking-wide text-black'
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('creditDeduction.imageGeneration')}
                  </h4>
                </div>
                <div className='space-y-0.5'>
                  {[
                    { label: t('creditDeduction.resolution1K'), credits: t('creditDeduction.credit1') },
                    { label: t('creditDeduction.resolution2K'), credits: t('creditDeduction.credits3') },
                    { label: t('creditDeduction.resolution4K'), credits: t('creditDeduction.credits5') },
                  ].map(({ label, credits }) => (
                    <div key={label} className='flex items-center justify-between py-1 border-b border-black/5 last:border-0'>
                      <span
                        className='text-[9px] font-medium text-gray-500'
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {label}
                      </span>
                      <span
                        className='text-[9px] font-bold text-black bg-gray-100 px-1.5 py-0.5 rounded-[2px]'
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {credits}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Credits */}
              <div className='px-4 py-3'>
                <div className='flex items-center gap-1.5 mb-2'>
                  <svg className='w-3.5 h-3.5 text-black flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
                    <polygon points='23 7 16 12 23 17 23 7' strokeLinecap='round' strokeLinejoin='round' />
                    <rect x='1' y='5' width='15' height='14' rx='2' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                  <h4
                    className='text-[10px] font-bold tracking-wide text-black'
                    style={{ fontFamily: 'var(--font-soyuz-grotesk), sans-serif' }}
                  >
                    {t('creditDeduction.videoGeneration')}
                  </h4>
                </div>
                <div className='space-y-0.5'>
                  {[
                    { label: '4s / 5s', credits: t('creditDeduction.credits25') },
                    { label: '8s / 10s', credits: t('creditDeduction.credits50') },
                    { label: '12s', credits: t('creditDeduction.credits75') },
                  ].map(({ label, credits }) => (
                    <div key={label} className='flex items-center justify-between py-1 border-b border-black/5 last:border-0'>
                      <span
                        className='text-[9px] font-medium text-gray-500'
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {label}
                      </span>
                      <span
                        className='text-[9px] font-bold text-black bg-gray-100 px-1.5 py-0.5 rounded-[2px]'
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {credits}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upscaling Credits */}
              <div className='px-4 py-3'>
                <div className='flex items-center gap-1.5 mb-2'>
                  <svg className='w-3.5 h-3.5 text-black flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
                    <polyline points='17 11 12 6 7 11' strokeLinecap='round' strokeLinejoin='round' />
                    <polyline points='17 18 12 13 7 18' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                  <h4
                    className='text-[10px] font-bold tracking-wide text-black'
                    style={{ fontFamily: 'var(--font-soyuz-grotesk), sans-serif' }}
                  >
                    {t('creditDeduction.imageUpscaling')}
                  </h4>
                </div>
                <div className='space-y-0.5'>
                  {[
                    { label: t('creditDeduction.upscaleFactor2'), credits: t('creditDeduction.upscaleCredits20') },
                    { label: t('creditDeduction.upscaleFactor4'), credits: t('creditDeduction.upscaleCredits40') },
                    { label: t('creditDeduction.upscaleFactor8'), credits: t('creditDeduction.upscaleCredits50') },
                    { label: t('creditDeduction.upscaleFactor16'), credits: t('creditDeduction.upscaleCredits80') },
                  ].map(({ label, credits }) => (
                    <div key={label} className='flex items-center justify-between py-1 border-b border-black/5 last:border-0'>
                      <span
                        className='text-[9px] font-medium text-gray-500'
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {label}
                      </span>
                      <span
                        className='text-[9px] font-bold text-black bg-gray-100 px-1.5 py-0.5 rounded-[2px]'
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {credits}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap justify-center items-center gap-4 mt-2.5 text-gray-400'>
            <div className='flex items-center gap-1.5'>
              <Check className='w-3 h-3 text-emerald-500' />
              <span className='text-[8px] uppercase tracking-wider font-semibold text-gray-400' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Safe & Secure Checkout</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Check className='w-3 h-3 text-emerald-500' />
              <span className='text-[8px] uppercase tracking-wider font-semibold text-gray-400' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Cancel Anytime</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Check className='w-3 h-3 text-emerald-500' />
              <span className='text-[8px] uppercase tracking-wider font-semibold text-gray-400' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>No Setup Fee</span>
            </div>
          </div>
        </div>

        <TestimonialsSection />

        {/* Education Section */}
        {showOnly === 'all' && renderEducationSection()}

      </div>

      {/* Subscription Modal */}
      <AnimatePresence>
        {isModalOpen && (
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
              className='bg-black p-8 shadow-2xl flex flex-col gap-6 max-w-md w-full relative'
            >
              <button
                className='absolute top-4 right-4 text-white hover:text-white transition-colors'
                onClick={() => setIsModalOpen(false)}
              >
                <IconX size={20} />
              </button>

              <div className='flex flex-col gap-2'>
                <h3
                  className='text-xl font-bold text-white uppercase tracking-wider'
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
                    onKeyDown={(e) => e.key === 'Enter' && handleContinue()}
                    disabled={isRedirecting}
                  />
                </div>

                {modalError && (
                  <div className='flex items-center gap-2 text-red-500 text-xs mt-1'>
                    <IconAlertCircle size={14} />
                    <span>{modalError}</span>
                  </div>
                )}

                <div className='flex flex-col gap-3 pt-2'>
                  <label className='flex items-start gap-3 cursor-pointer group'>
                    <input
                      type='checkbox'
                      className='mt-1 size-4 border-white bg-black accent-white cursor-pointer rounded-sm transition-all group-hover:border-white'
                      checked={marketingConsent}
                      onChange={(e) => setMarketingConsent(e.target.checked)}
                      disabled={isRedirecting}
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
                      disabled={isRedirecting}
                    />
                    <span className='text-[11px] text-white select-none leading-tight group-hover:text-white transition-colors'>
                      {tModal.rich('agbPrivacyConsent', {
                        termsLink: (chunks) => (
                          <Link href='https://app.typus.ai/terms' target='_blank' className='text-white underline hover:text-gray-200'>
                            {chunks}
                          </Link>
                        ),
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
                    onClick={() => handleContinue()}
                    disabled={isRedirecting || !privacyConsent || !termsConsent}
                    className='bg-white text-black hover:bg-white w-full py-6 text-xs font-bold uppercase tracking-widest transition-all disabled:bg-black disabled:text-white disabled:border disabled:border-white'
                    style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                  >
                    {isRedirecting ? (
                      <IconLoader2 className='animate-spin mr-2' size={16} />
                    ) : null}
                    {tModal('continue')}
                  </Button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className='text-white hover:text-white text-[10px] uppercase tracking-widest font-medium transition-colors'
                    style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                  >
                    {tModal('cancel')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trial Warning Modal */}
      <AnimatePresence>
        {showTrialWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className='bg-white p-8 shadow-2xl flex flex-col gap-6 max-w-sm w-full relative'
            >
              <button
                className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors'
                onClick={() => setShowTrialWarning(false)}
              >
                <IconX size={20} />
              </button>

              <div className='flex flex-col gap-2'>
                <h3
                  className='text-xl font-bold text-black uppercase tracking-wider'
                  style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                >
                  {tModal('TrialWarningModal.title')}
                </h3>
                <p className='text-sm text-gray-600'>
                  {tModal('TrialWarningModal.description')}
                </p>
              </div>

              <div className='flex gap-3 mt-4'>
                <Button
                  onClick={() => {
                    setShowTrialWarning(false)
                    setIsModalOpen(true)
                  }}
                  className='flex-1 bg-white border border-black text-black hover:bg-gray-50 uppercase text-[10px] font-bold tracking-wider py-3'
                  style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                >
                  {tModal('TrialWarningModal.cancel')}
                </Button>
                <Button
                  onClick={() => handleContinue(true)}
                  className='flex-1 bg-black text-white hover:bg-neutral-800 uppercase text-[10px] font-bold tracking-wider py-3'
                  style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                >
                  {tModal('TrialWarningModal.proceed')}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <FloatingBuzzer triggerPopup={false} />

      {showOrderModal && pendingOrderData && (
        <OrderOverviewModal
          locale={locale}
          planId={pendingOrderData.planId}
          checkoutData={pendingOrderData.checkoutData}
          onClose={() => setShowOrderModal(false)}
        />
      )}

      {showOnboarding && !showOrderModal && (
        <OnboardingWizard
          email={userEmail}
          locale={locale}
          onComplete={handleOnboardingComplete}
          onCancel={() => setShowOnboarding(false)}
        />
      )}
    </section>
  )
}

type PlanType = ((typeof professionalPlans)[0] | (typeof educationPlans)[0]) & {
  fetchedData?: any
  popular?: boolean
  badgeTextKey?: string
}

interface PricingCardProps {
  plan: PlanType & { billingCycle?: 'monthly' | 'sixMonthly' | 'yearly' }
  isYearly: boolean
  isProfessional: boolean
  isEurope: boolean
  currencySymbol: string
  onSubscribe: (plan: PlanType & { billingCycle?: 'monthly' | 'sixMonthly' | 'yearly' }, priceInfo: any) => void
  promoDiscount?: any
  isVat?: boolean
}

function PricingCard({
  plan,
  isYearly,
  isProfessional,
  isEurope,
  currencySymbol,
  onSubscribe,
  promoDiscount,
  isVat = true,
}: PricingCardProps) {
  const t = useTranslations('Pricing')

  // For professional plans, show pricing based on plan and billing cycle
  const getPriceDisplay = () => {
    const fetchedData = plan.fetchedData
    // const isUsd = (fetchedData?.currency || (isEurope ? 'eur' : 'usd')) === 'usd'
    // const currencySymbol = isUsd ? '$' : '€' // Now passed as prop

    if (isProfessional) {
      const profPlan = plan as (typeof professionalPlans)[0] & {
        billingCycle?: 'monthly' | 'sixMonthly' | 'yearly'
        fetchedData?: any
      }

      // ENTERPRISE
      if (profPlan.planType === 'ENTERPRISE') {
        return {
          mainPrice: t('enterpriseCustom'),
          period: '',
          billingInfo: t('enterpriseBillingInfo'),
          stripePriceId: '',
        }
      }

      // PRO
      if (profPlan.planType === 'PRO') {
        let mainPrice = isEurope
          ? profPlan.monthlyPrice?.eur || ''
          : profPlan.monthlyPrice?.usd || ''
        
        let billingInfo = t('billedMonthly')
        let discount = undefined

        // If yearly, multiply by 12 or use yearly equivalent if available
        if (profPlan.billingCycle === 'yearly') {
          if (fetchedData && fetchedData.prices?.yearly) {
             const yPrice = fetchedData.prices.yearly
             mainPrice = `${currencySymbol}${Math.round(yPrice / 12) / 100}`
             billingInfo = `${t('billedYearly')} (${currencySymbol}${yPrice / 100}/year)`
          } else {
             mainPrice = isEurope ? profPlan.yearlyMonthlyPrice?.eur || '' : profPlan.yearlyMonthlyPrice?.usd || ''
             const yPriceTotal = isEurope ? profPlan.yearlyPrice?.eur || '' : profPlan.yearlyPrice?.usd || ''
             billingInfo = `${t('billedYearly')} (${yPriceTotal}/year)`
          }
          
          const d = profPlan.discount?.yearly
          if (d && d.periodDiscountPercent != null) {
            discount = {
              periodDiscountPercent: d.periodDiscountPercent,
              periodSaveAmount: isEurope ? d.periodSaveAmount.eur : d.periodSaveAmount.usd,
            }
          }
        } else {
          if (fetchedData && fetchedData.prices?.monthly) {
            mainPrice = `${currencySymbol}${fetchedData.prices.monthly / 100}`
          }
        }

        let stripePriceId = ''
        if (fetchedData) {
          stripePriceId = profPlan.billingCycle === 'yearly' ? (fetchedData.stripePrices?.YEARLY || '') : (fetchedData.stripePrices?.MONTHLY || '')
        }

        return {
          mainPrice: mainPrice,
          period: '/month',
          billingInfo: billingInfo,
          discount: discount,
          stripePriceId,
        }
      }

      // BUSINESS
      if (profPlan.planType === 'BUSINESS') {
        const billingCycle = profPlan.billingCycle || (isYearly ? 'yearly' : 'monthly')
        const proWithDiscount = profPlan as (typeof professionalPlans)[1] & {
          fetchedData?: any
        }
        const discountData = proWithDiscount.discount?.[billingCycle]

        let mainPrice = ''
        let billingInfo = ''
        let stripePriceId = ''
        let discount = undefined

        if (billingCycle === 'monthly') {
          mainPrice = isEurope
            ? profPlan.monthlyPrice?.eur || ''
            : profPlan.monthlyPrice?.usd || ''
          billingInfo = t('billedMonthly')

          if (fetchedData) {
            const price = fetchedData.prices?.monthly
            if (price) mainPrice = `${currencySymbol}${price / 100}`
            stripePriceId = fetchedData.stripePrices?.MONTHLY || ''
          }

          const d = discountData
          if (d) {
            if (!fetchedData) {
              mainPrice = isEurope ? d.discountedMonthly.eur : d.discountedMonthly.usd
            }
          }
        } else if (billingCycle === 'sixMonthly') {
          mainPrice = isEurope
            ? profPlan.sixMonthMonthlyPrice?.eur || ''
            : profPlan.sixMonthMonthlyPrice?.usd || ''
          const cyclePrice = isEurope
            ? profPlan.sixMonthPrice?.eur || ''
            : profPlan.sixMonthPrice?.usd || ''
          billingInfo = `${cyclePrice} ${t('billedEvery6Months')}`

          if (fetchedData) {
            const mPrice = fetchedData.prices?.sixMonthly ? Math.round(fetchedData.prices.sixMonthly / 6) / 100 : null
            const cPrice = fetchedData.prices?.sixMonthly ? fetchedData.prices.sixMonthly / 100 : null
            if (mPrice) mainPrice = `${currencySymbol}${mPrice}`
            if (cPrice) billingInfo = `${currencySymbol}${cPrice} ${t('billedEvery6Months')}`
            stripePriceId = fetchedData.stripePrices?.SIX_MONTHLY || ''
          }

          const d = discountData
          if (d && 'originalCycle' in d) {
            if (!fetchedData) {
              mainPrice = isEurope ? d.discountedMonthly.eur : d.discountedMonthly.usd
              billingInfo = `${isEurope ? d.introFirstPeriod.eur : d.introFirstPeriod.usd} ${t('billedEvery6Months')}`
            }
            discount = {
              originalCycle: isEurope ? d.originalCycle.eur : d.originalCycle.usd,
              discountPercent: d.discountPercent,
              saveAmount: isEurope ? d.saveAmountCycle.eur : d.saveAmountCycle.usd,
              periodDiscountPercent: d.periodDiscountPercent,
              periodSaveAmount: isEurope ? d.periodSaveAmount.eur : d.periodSaveAmount.usd,
            }
          }
        } else {
          mainPrice = isEurope
            ? profPlan.yearlyMonthlyPrice?.eur || ''
            : profPlan.yearlyMonthlyPrice?.usd || ''
          const cyclePrice = isEurope
            ? profPlan.yearlyPrice?.eur || ''
            : profPlan.yearlyPrice?.usd || ''
          billingInfo = `${t('billedYearly')} (${cyclePrice}/year)`

          if (fetchedData) {
            const mPrice = fetchedData.prices?.yearly ? Math.round(fetchedData.prices.yearly / 12) / 100 : null
            const cPrice = fetchedData.prices?.yearly ? fetchedData.prices.yearly / 100 : null
            if (mPrice) mainPrice = `${currencySymbol}${mPrice}`
            if (cPrice) billingInfo = `${t('billedYearly')} (${currencySymbol}${cPrice}/year)`
            stripePriceId = fetchedData.stripePrices?.YEARLY || ''
          }

          const d = discountData
          if (d && 'bestDeal' in d) {
            if (!fetchedData) {
              mainPrice = isEurope ? d.discountedMonthly.eur : d.discountedMonthly.usd
              billingInfo = `${isEurope ? d.introFirstPeriod.eur : d.introFirstPeriod.usd} ${t('billedYearly')}`
            }
            discount = {
              originalCycle: isEurope ? d.originalCycle.eur : d.originalCycle.usd,
              discountPercent: d.discountPercent,
              saveAmount: isEurope ? d.saveAmountCycle.eur : d.saveAmountCycle.usd,
              periodDiscountPercent: d.periodDiscountPercent,
              periodSaveAmount: isEurope ? d.periodSaveAmount.eur : d.periodSaveAmount.usd,
              bestDeal: d.bestDeal,
            }
          }
        }

        return { mainPrice, period: '/month', billingInfo, discount, stripePriceId }
      }

      // Fallback (should not happen)
      return {
        mainPrice: '',
        period: '/month',
        billingInfo: '',
      }
    } else {
      // Educational: Show yearly or monthly based on toggle
      const eduPlan = plan as (typeof educationPlans)[0] & { fetchedData?: any }
      let mainPrice = ''
      let billingInfo = ''
      let saveInfo = ''
      let stripePriceId = ''

      if (isYearly) {
        mainPrice = formatPrice(eduPlan.monthlyEquivalant, isEurope)
        billingInfo = `${t('billedYearly')} (${formatPrice(eduPlan.yearlyPrice, isEurope)}/year)`
        saveInfo = t('saveWithAnnual', {
          amount: formatPrice(eduPlan.save, isEurope),
        })

        if (fetchedData) {
          const yPrice = fetchedData.prices?.yearly
          if (yPrice) {
            mainPrice = `${currencySymbol}${Math.round(yPrice / 12) / 100}`
            billingInfo = `${t('billedYearly')} (${currencySymbol}${yPrice / 100}/year)`
          }
          stripePriceId = fetchedData.stripePrices?.YEARLY || ''
        }

        // Add discount object for yearly plans so we get green colors and badge
        const discount = {
          periodDiscountPercent: 75,
          periodSaveAmount: formatPrice(eduPlan.save, isEurope),
        }

        return { mainPrice, period: '/month', billingInfo, saveInfo, stripePriceId, discount }
      } else {
        mainPrice = formatPrice(eduPlan.monthlyPrice, isEurope)
        billingInfo = t('billedMonthly')

        if (fetchedData) {
          const mPrice = fetchedData.prices?.monthly
          if (mPrice) mainPrice = `${currencySymbol}${mPrice / 100}`
          stripePriceId = fetchedData.stripePrices?.MONTHLY || ''
        }
      }

      return { mainPrice, period: '/month', billingInfo, saveInfo, stripePriceId }
    }
  }

  const priceInfo = getPriceDisplay()

  if (promoDiscount && priceInfo.mainPrice) {
    const numericMatch = priceInfo.mainPrice.match(/[\d,.]+/);
    if (numericMatch) {
      let numericStr = numericMatch[0].replace(',', '.');
      let val = parseFloat(numericStr);
      if (!isNaN(val)) {
        let newVal = val;
        if (promoDiscount.type === 'percentage') {
          newVal = val * (1 - promoDiscount.value / 100);
        } else {
          let months = 1;
          if (plan.billingCycle === 'sixMonthly') {
            months = 6;
          } else if (plan.billingCycle === 'yearly' || (!plan.billingCycle && isYearly)) {
            months = 12;
          }
          let discountPerMonth = (promoDiscount.value / 100) / months;
          newVal = Math.max(0, val - discountPerMonth); // fixed amount is calculated per month equivalent
        }

        if (!priceInfo.discount) {
          (priceInfo as any).discount = { originalPrice: priceInfo.mainPrice };
        } else if (!('originalPrice' in (priceInfo.discount as any))) {
          (priceInfo.discount as any).originalPrice = priceInfo.mainPrice;
        }

        priceInfo.mainPrice = `${currencySymbol}${newVal % 1 === 0 ? newVal : newVal.toFixed(2)}`;

        // Also update billingInfo text like "418 billed every 6 months" -> "348 billed every 6 months"
        if (priceInfo.billingInfo) {
          const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const numRegex = new RegExp(`(${escapeRegExp(currencySymbol)}\\s?)([\\d,]+(?:\\.\\d+)?)`);
          const match = priceInfo.billingInfo.match(numRegex);
          if (match) {
            let bNumericStr = match[2].replace(',', '.');
            let bVal = parseFloat(bNumericStr);
            if (!isNaN(bVal)) {
              let newBVal = bVal;
              if (promoDiscount.type === 'percentage') {
                newBVal = bVal * (1 - promoDiscount.value / 100);
              } else {
                newBVal = Math.max(0, bVal - (promoDiscount.value / 100)); // fixed amount applies entirely to the cycle
              }
              priceInfo.billingInfo = priceInfo.billingInfo.replace(match[0], `${match[1]}${newBVal % 1 === 0 ? newBVal : newBVal.toFixed(2)}`);
            }
          } else {
            // Check if currency symbol is at the end or not present, but the number is 418, 594, etc.
            // Simplified fallback for strings like "418€ alle 6 Monate" or plain un-prefixed values
            const fallbackMatch = priceInfo.billingInfo.match(/^([\d,.]+) ?(?:€|\$|EUR|USD|£)?\b/);
            if (fallbackMatch && parseFloat(fallbackMatch[1].replace(',', '.')) > 12) {
              let bNumericStr = fallbackMatch[1].replace(',', '.');
              let bVal = parseFloat(bNumericStr);
              if (!isNaN(bVal)) {
                let newBVal = bVal;
                if (promoDiscount.type === 'percentage') {
                  newBVal = bVal * (1 - promoDiscount.value / 100);
                } else {
                  newBVal = Math.max(0, bVal - (promoDiscount.value / 100));
                }
                priceInfo.billingInfo = priceInfo.billingInfo.replace(fallbackMatch[1], `${newBVal % 1 === 0 ? newBVal : newBVal.toFixed(2)}`);
              }
            }
          }
        }
      }
    }
  }

  return (
    <div
      className={`flex ${plan.planType === 'ENTERPRISE'?'[480px]':'h-[720px]'} mb-4 flex-col sm:md: p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative group`}
      style={{
        backgroundColor: '#ffffff',
        color: '#000000',
      }}
    >
      {/* Ribbon Tag */}
      {plan.popular && (
        <div className='absolute -top-2 left-0 z-30 origin-top-left'>
          <div className='relative transform -rotate-12'>
            {/* Ribbon body */}
            <div className='bg-gradient-to-b from-yellow-400 to-yellow-500 px-5 py-1.5 shadow-lg relative overflow-hidden'>
              {/* Shine effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
              {/* Left fold */}
              <div className='absolute -left-2 top-0 w-0 h-0 border-t-[14px] border-t-yellow-600 border-r-[10px] border-r-transparent'></div>
              <div className='absolute -left-2 bottom-0 w-0 h-0 border-b-[14px] border-b-yellow-600 border-r-[10px] border-r-transparent'></div>
              {/* Right fold */}
              <div className='absolute -right-2 top-0 w-0 h-0 border-t-[14px] border-t-yellow-600 border-l-[10px] border-l-transparent'></div>
              <div className='absolute -right-2 bottom-0 w-0 h-0 border-b-[14px] border-b-yellow-600 border-l-[10px] border-l-transparent'></div>
              {/* Text */}
              <span
                className='text-[10px] font-bold tracking-wider text-gray-900 relative z-10 whitespace-nowrap'
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                {plan.badgeTextKey ? t(plan.badgeTextKey) : t('highestRated')}
              </span>
            </div>
            {/* Shadow under ribbon */}
            <div className='absolute top-full left-0 right-0 h-1 bg-black/10 blur-sm'></div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className={`flex flex-col items-center text-center justify-center mb-4 relative pt-3`}>
        <span
          className='text-[18px] sm:text-[20px] font-bold uppercase tracking-wider mb-1 block text-black'
          style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
        >
          {plan.name}
        </span>
        
        {(plan as any).targetAudience && (
          <span className='text-[13px] font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full mb-3 inline-block'>
            {(plan as any).targetAudience}
          </span>
        )}

        {/* Discount badge above price - period discount for 6-mo/yearly */}
        {priceInfo.discount?.periodDiscountPercent != null && (
          <div className='bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-2.5 shadow-sm' style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
            {t('periodDiscountBadge', { percent: priceInfo.discount.periodDiscountPercent, amount: priceInfo.discount.periodSaveAmount })}
          </div>
        )}

        {/* Pricing Section */}
        <div className='mb-3'>
          <div className='flex flex-col items-center justify-center'>
            {priceInfo.discount ? (
              <>
                {'originalPrice' in priceInfo.discount && (
                  <div className='text-[12px] text-gray-400 line-through mb-1' style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                    {(priceInfo.discount as { originalPrice: string }).originalPrice} {priceInfo.period}
                  </div>
                )}
                <div className='flex items-baseline justify-center gap-1'>
                  <span className='text-3xl sm:text-4xl font-bold text-emerald-600 tracking-tight' style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                    {priceInfo.mainPrice}
                  </span>
                  <span className='text-xs sm:text-sm text-gray-500' style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                    {priceInfo.period}
                  </span>
                </div>
              </>
            ) : (
              <div className='flex items-baseline justify-center gap-1'>
                {priceInfo.mainPrice === t('enterpriseCustom') ? (
                  <span className='text-[13px] font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block mt-2 mb-2'>
                    {priceInfo.mainPrice}
                  </span>
                ) : (
                  <>
                    <span className='text-3xl sm:text-4xl font-bold text-black tracking-tight' style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                      {priceInfo.mainPrice}
                    </span>
                    <span className='text-xs sm:text-sm text-gray-500' style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                      {priceInfo.period}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>

          <div className='space-y-1 text-[11px] text-gray-500 mt-3 text-center'>
            <div style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
              {priceInfo.billingInfo}
            </div>
            {priceInfo.saveInfo && (
              <div style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                {priceInfo.saveInfo}
              </div>
            )}
            {isVat && (
              <div style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                {t('plusVat')}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Section - Flex Grow */}
      <div className='flex-1 mb-3'>
        <ul className='space-y-1.5'>
          {plan.features.map((feature, index) => {
            const featureText =
              typeof feature === 'string' ? feature : feature.text
            const hasFeature =
              typeof feature === 'object' ? feature.hasFeature : true

            return (
              <li
                key={index}
                className='flex items-start text-xs font-medium py-1.5 border-b border-gray-100 last:border-b-0'
              >
                {hasFeature ? (
                  <Check className='w-2.5 h-2.5 flex-shrink-0 mt-0.5 mr-2 text-black' />
                ) : (
                  <X className='w-2.5 h-2.5 flex-shrink-0 mt-0.5 mr-2 text-black/30' />
                )}
                <span
                  className={`leading-tight text-left flex-1 ${hasFeature ? 'text-black' : 'text-black/40'
                    }`}
                  style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                >
                  {featureText}
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Button Section - Fixed at Bottom */}
      <div className='mt-auto'>
        {plan.id === 'enterprise' ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('open-before-you-go'));
            }}
            className='bg-black text-white cursor-pointer w-full flex justify-center items-center px-4 py-2 text-[10px] font-medium uppercase tracking-wide border border-black hover:bg-gray-900 hover:text-white transition-all duration-200'
            style={{
              fontFamily: "'Soyuz Grotesk', sans-serif",
            }}
          >
            {/* Provide simple translation fallback */}
            {t('enterpriseBookCall')}
          </button>
        ) : (
          <Button
            onClick={() => onSubscribe(plan, priceInfo)}
            className='bg-black text-white cursor-pointer w-full px-4 py-2 text-[10px] font-medium uppercase tracking-wide border border-black hover:bg-gray-900 hover:text-white transition-all duration-200'
            style={{
              fontFamily: "'Soyuz Grotesk', sans-serif",
            }}
          >
            {t('subscribe')}
          </Button>
        )}
      </div>
    </div>
  )
}
