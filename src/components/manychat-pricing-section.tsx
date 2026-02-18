'use client'

import { Button } from '@/components/ui/button'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { useIsEurope } from '@/hooks/use-is-europe'
import { formatPrice } from '@/lib/price-converter'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const professionalPlans = [
  {
    id: 'explorer',
    name: 'EXPLORER',
    monthlyPrice: { eur: '€49', usd: '$57' },
    planType: 'EXPLORER',
    features: [
      {
        text: '150 CREDITS /month (e.g. 100 base images and 10 Refinements)',
        hasFeature: true,
      },
      { text: '2K RESOLUTION (2 CONCURRENT JOB)', hasFeature: true },
      { text: 'EMAIL SUPPORT', hasFeature: true },
      { text: 'IMAGE EDITING', hasFeature: true },
      { text: 'LIMITED UPSCALING', hasFeature: true },
      { text: 'CREDIT TOP UPS', hasFeature: true },
    ],
  },
  {
    id: 'pro',
    name: 'PRO',
    monthlyPrice: { eur: '€99', usd: '$172' },
    sixMonthPrice: { eur: '€354', usd: '$636' },
    yearlyPrice: { eur: '€468', usd: '$807' },
    sixMonthMonthlyPrice: { eur: '€59', usd: '$106' },
    yearlyMonthlyPrice: { eur: '€39', usd: '$67.25' },
    planType: 'PRO',
    popular: true,
    // Discount display: original (crossed out), discounted (green), badges, intro price
    discount: {
      monthly: {
        originalMonthly: { eur: '€449', usd: '$499' },
        discountedMonthly: { eur: '€74.5', usd: '$86' },
        discountPercent: 50,
        saveAmount: { eur: '€74.5', usd: '$86' },
        introFirstPeriod: { eur: '€74.5', usd: '$86' },
        introPeriodKey: 'firstMonthCharged',
      },
      sixMonthly: {
        originalMonthly: { eur: '€94.5', usd: '$110' },
        discountedMonthly: { eur: '€46', usd: '$53' },
        periodDiscountPercent: 39,
        periodSaveAmount: { eur: '€345', usd: '$400' },
        originalCycle: { eur: '€549', usd: '$636' },
        discountPercent: 50,
        saveAmountCycle: { eur: '€274.5', usd: '$318' },
        introFirstPeriod: { eur: '€274.5', usd: '$318' },
        introPeriodKey: 'first6MonthsCharged',
      },
      yearly: {
        originalMonthly: { eur: '€58', usd: '$67' },
        discountedMonthly: { eur: '€29', usd: '$34' },
        periodDiscountPercent: 61,
        periodSaveAmount: { eur: '€1092', usd: '$1267' },
        originalCycle: { eur: '€696', usd: '$807' },
        discountPercent: 50,
        saveAmountCycle: { eur: '€348', usd: '$404' },
        introFirstPeriod: { eur: '€348', usd: '$404' },
        introPeriodKey: 'firstYearCharged',
        bestDeal: true,
      },
    },
    features: [
      {
        text: '1000 CREDITS /month (e.g. 800 base images and 40 Refinements)',
        hasFeature: true,
      },
      { text: '4K RESOLUTION (4 CONCURRENT JOB)', hasFeature: true },
      { text: 'EDIT BY CHAT', hasFeature: true },
      { text: 'UPSCALE UP TO 13K', hasFeature: true },
      { text: 'ONBOARDING VIDEO CALL', hasFeature: true },
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
    features: [
      { text: 'EVERYTHING FROM EXPLORER', hasFeature: true },
      {
        text: '1000 CREDITS /month (e.g. 800 base images and 40 Refinements)',
        hasFeature: true,
      },
      { text: '4 CONCURRENT JOBS', hasFeature: true },
      { text: 'PREMIUM LIVE VIDEO CALL SUPPORT', hasFeature: true },
      { text: 'INCREASED SPEED OF GENERATION', hasFeature: true },
      { text: 'RESOLUTION UP TO 13K', hasFeature: true },
    ],
  },
]

export function ManyChatPricingSection() {
  const t = useTranslations('Pricing')
  const containerRef = useRef<HTMLDivElement>(null)
  const [isYearly, setIsYearly] = useState(true)
  const [isProfessional, setIsProfessional] = useState(true)
  // Selected plan tier: 'explorer' | 'pro' | 'enterprise'
  const [selectedPlanTier, setSelectedPlanTier] = useState<'explorer' | 'pro' | 'enterprise'>('pro')

  // Get translated plans - returns only the selected plan
  const getTranslatedPlans = () => {
    if (isProfessional) {
      if (selectedPlanTier === 'explorer') {
        return [
          {
            ...professionalPlans[0], // EXPLORER
            name: t('plans.explorer.name'),
            features: professionalPlans[0].features.map(f => ({
              ...f,
              text:
                typeof f === 'string'
                  ? f
                  : t(
                    `plans.explorer.features.${f.text.includes('150 CREDITS') ? 'credits150' : f.text.includes('4K') && f.text.includes('2 CONCURRENT') ? 'resolution4k' : f.text.includes('EMAIL SUPPORT') ? 'emailSupport' : f.text.includes('IMAGE EDITING') ? 'imageEditing' : f.text.includes('LIMITED UPSCALING') ? 'limitedUpscaling' : 'creditTopUps'}`
                  ),
              hasFeature: typeof f === 'object' ? f.hasFeature : true,
            })),
          },
        ]
      } else if (selectedPlanTier === 'pro') {
        // Return 3 PRO plans: monthly, 6-monthly, yearly
        const baseProPlan = professionalPlans[1]
        return [
          {
            ...baseProPlan,
            name: t('plans.pro.name'), // PRO
            billingCycle: 'monthly' as const,
            features: baseProPlan.features.map(f => ({
              ...f,
              text:
                typeof f === 'string'
                  ? f
                  : t(
                    `plans.pro.features.${f.text.includes('1000 CREDITS') ? 'credits1000' : f.text.includes('4K') && f.text.includes('4 CONCURRENT') ? 'resolution4k' : f.text.includes('EDIT BY CHAT') ? 'editByChat' : f.text.includes('13K') ? 'upscale13k' : 'onboardingCall'}`
                  ),
              hasFeature: typeof f === 'object' ? f.hasFeature : true,
            })),
          },
          {
            ...baseProPlan,
            name: t('plans.proSemi.name'), // PRO SEMI
            billingCycle: 'sixMonthly' as const,
            popular: true,
            features: baseProPlan.features.map(f => ({
              ...f,
              text:
                typeof f === 'string'
                  ? f
                  : t(
                    `plans.pro.features.${f.text.includes('1000 CREDITS') ? 'credits1000' : f.text.includes('4K') && f.text.includes('4 CONCURRENT') ? 'resolution4k' : f.text.includes('EDIT BY CHAT') ? 'editByChat' : f.text.includes('13K') ? 'upscale13k' : 'onboardingCall'}`
                  ),
              hasFeature: typeof f === 'object' ? f.hasFeature : true,
            })),
          },
          {
            ...baseProPlan,
            name: t('plans.proComplete.name'), // PRO COMPLETE
            billingCycle: 'yearly' as const,
            popular: true,
            features: baseProPlan.features.map(f => ({
              ...f,
              text:
                typeof f === 'string'
                  ? f
                  : t(
                    `plans.pro.features.${f.text.includes('1000 CREDITS') ? 'credits1000' : f.text.includes('4K') && f.text.includes('4 CONCURRENT') ? 'resolution4k' : f.text.includes('EDIT BY CHAT') ? 'editByChat' : f.text.includes('13K') ? 'upscale13k' : 'onboardingCall'}`
                  ),
              hasFeature: typeof f === 'object' ? f.hasFeature : true,
            })),
          },
        ]
      } else {
        // ENTERPRISE - disabled
        return []
      }
    } else {
      return [
        {
          ...educationPlans[0],
          name: t('plans.student.name'),
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
  }

  const currentPlans = getTranslatedPlans()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end start'],
  })

  // Multi-layer parallax effects
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -20])

  const cardParallaxY = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    const checkUrlHash = () => {
      if (window.location.hash === '#student-access') {
        setIsProfessional(false)
      }
    }

    // Check on mount
    checkUrlHash()

    // Listen for hash changes
    const handleHashChange = () => {
      checkUrlHash()
    }

    window.addEventListener('hashchange', handleHashChange)

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // Set yearly as default when viewing educational plans (students)
  useEffect(() => {
    if (!isProfessional) {
      setIsYearly(true)
    }
  }, [isProfessional])

  // Cards sliding from behind center card - sticky until all cards visible
  const leftCardX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 1],
    ['100%', '100%', '0%', '0%']
  )
  const rightCardX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 1],
    ['-100%', '-100%', '0%', '0%']
  )
  const leftCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 1],
    [0, 0, 1, 1]
  )
  const rightCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 1],
    [0, 0, 1, 1]
  )
  const centerCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 1],
    [0, 1, 1]
  )

  return (
    <section
      ref={containerRef}
      className='md:h-[200vh] py-10 relative'
      style={{ backgroundColor: '#fcfcfd' }}
      id='pricing'
    >
      <div
        className='md:sticky top-0 flex flex-col justify-center overflow-hidden px-4'
        id='student-access'
      >
        <div className='w-full max-w-7xl mx-auto px-4 relative z-10 pt-20'>
          <motion.div
            className='text-center mb-0 relative z-40'
            style={{ y: headerY }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '100px' }}
          >
            <h2
              className='text-[30px] font-normal text-black mb-2'
              style={{
                fontFamily:
                  "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              }}
            >
              {isProfessional ? t('professionalPlans') : t('educationPlans')}
            </h2>

            {/* Plan Type Toggle Switch */}
            <div className='flex items-center justify-center mb-6'>
              <div className='flex items-center bg-transparent  p-1'>
                {isProfessional ? (
                  <MovingBorderButton
                    duration={3000}
                    className='bg-white border-0 text-black  text-sm font-medium transition-all duration-300 shadow-sm'
                    containerClassName=' !h-10 w-30 mr-2'
                    borderClassName='bg-[radial-gradient(#1a1a1a_40%,#000000_60%)] opacity-80'
                    borderRadius='0rem'
                    onClick={() => setIsProfessional(true)}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t('professional')}
                  </MovingBorderButton>
                ) : (
                  <button
                    onClick={() => setIsProfessional(true)}
                    className='px-4 py-2  text-sm font-medium transition-all duration-300 text-gray-600 hover:text-gray-800 bg-white/50 hover:bg-white/70'
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t('professional')}
                  </button>
                )}
                {!isProfessional ? (
                  <MovingBorderButton
                    duration={3000}
                    className='bg-white border-0 text-black  text-sm font-medium transition-all duration-300 shadow-sm'
                    containerClassName=' !h-10 w-30 ml-2'
                    borderClassName='bg-[radial-gradient(#1a1a1a_100%,#000000_100%)] opacity-80'
                    borderRadius='0rem'
                    onClick={() => setIsProfessional(false)}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t('education')}
                  </MovingBorderButton>
                ) : (
                  <button
                    onClick={() => setIsProfessional(false)}
                    className='px-4 py-2  text-sm font-medium transition-all duration-300 text-gray-600 hover:text-gray-800 bg-white/50 hover:bg-white/70'
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t('education')}
                  </button>
                )}
              </div>
            </div>

            {/* Professional Plans: Plan tier tabs */}
            {isProfessional ? (
              <>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-2 mb-6'>
                  <button
                    onClick={() => setSelectedPlanTier('explorer')}
                    className={`px-6 py-2 text-sm font-medium transition-colors ${selectedPlanTier === 'explorer'
                      ? 'bg-white text-black shadow-md'
                      : 'text-black hover:text-black bg-white/50 hover:bg-white/70'
                      }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t('plans.explorer.name')}
                  </button>
                  <button
                    onClick={() => setSelectedPlanTier('pro')}
                    className={`px-6 py-2 text-sm font-medium transition-colors ${selectedPlanTier === 'pro'
                      ? 'bg-white text-black shadow-md'
                      : 'text-black hover:text-black bg-white/50 hover:bg-white/70'
                      }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    PRO
                  </button>
                  <button
                    onClick={() => setSelectedPlanTier('enterprise')}
                    disabled
                    className='px-6 py-2 text-sm font-medium transition-colors text-gray-400 bg-white/30 cursor-not-allowed opacity-50'
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t('plans.enterprise.name')}
                  </button>
                </div>


                <div className='flex flex-col items-center mb-8'>
                  <div className='bg-site-white border border-black rounded-none p-3 mb-4 max-w-2xl'>
                    <p className='text-gray-900 text-center font-medium text-sm font-space-grotesk'>
                      <span className='font-bold text-black'>
                        {t('freeTrial')}
                      </span>{' '}
                      {t('freeTrialDescription')}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
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
                <p
                  className='text-black pb-0 mb-8'
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t('switchToYearly')}
                </p>
              </>
            )}
          </motion.div>

          {/* Show selected plan cards */}
          {currentPlans.length > 0 && (
            <>
              <div className='relative md:flex hidden justify-center items-center h-[80vh] w-full gap-4'>
                {currentPlans.length === 1 ? (
                  // Single card (EXPLORER)
                  <motion.div
                    className='w-full max-w-xs z-30'
                    style={{
                      opacity: centerCardOpacity,
                      y: cardParallaxY,
                    }}
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-50px' }}
                  >
                    <PricingCard
                      plan={currentPlans[0] as PlanType & { billingCycle?: 'monthly' | 'sixMonthly' | 'yearly' }}
                      isYearly={isYearly}
                      isProfessional={isProfessional}
                    />
                  </motion.div>
                ) : (
                  // Multiple cards (PRO plans)
                  <>
                    <motion.div
                      className='w-full max-w-xs z-10'
                      style={{
                        x: leftCardX,
                        opacity: leftCardOpacity,
                        y: cardParallaxY,
                      }}
                      initial={{ opacity: 0, y: 100, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0, ease: 'easeOut' }}
                      viewport={{ once: true, margin: '-50px' }}
                    >
                      <PricingCard
                        plan={currentPlans[0] as PlanType & { billingCycle?: 'monthly' | 'sixMonthly' | 'yearly' }}
                        isYearly={isYearly}
                        isProfessional={isProfessional}
                      />
                    </motion.div>
                    <motion.div
                      className='w-full max-w-xs z-30'
                      style={{
                        opacity: centerCardOpacity,
                        y: cardParallaxY,
                      }}
                      initial={{ opacity: 0, y: 100, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
                      viewport={{ once: true, margin: '-50px' }}
                    >
                      <PricingCard
                        plan={currentPlans[1] as PlanType & { billingCycle?: 'monthly' | 'sixMonthly' | 'yearly' }}
                        isYearly={isYearly}
                        isProfessional={isProfessional}
                      />
                    </motion.div>
                    <motion.div
                      className='w-full max-w-xs z-10'
                      style={{
                        x: rightCardX,
                        opacity: rightCardOpacity,
                        y: cardParallaxY,
                      }}
                      initial={{ opacity: 0, y: 100, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
                      viewport={{ once: true, margin: '-50px' }}
                    >
                      <PricingCard
                        plan={currentPlans[2] as PlanType & { billingCycle?: 'monthly' | 'sixMonthly' | 'yearly' }}
                        isYearly={isYearly}
                        isProfessional={isProfessional}
                      />
                    </motion.div>
                  </>
                )}
              </div>
              <div className='relative md:hidden flex flex-col justify-center items-center w-full gap-4'>
                {currentPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    className='w-full max-w-xs z-30'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-50px' }}
                  >
                    <PricingCard
                      plan={plan as PlanType & { billingCycle?: 'monthly' | 'sixMonthly' | 'yearly' }}
                      isYearly={isYearly}
                      isProfessional={isProfessional}
                    />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

type PlanType = (typeof professionalPlans)[0] | (typeof educationPlans)[0]

function PricingCard({
  plan,
  isYearly,
  isProfessional,
}: {
  plan: PlanType & { billingCycle?: 'monthly' | 'sixMonthly' | 'yearly' }
  isYearly: boolean
  isProfessional: boolean
}) {
  const t = useTranslations('Pricing')
  const isEurope = useIsEurope()

  // For professional plans, show pricing based on plan and billing cycle
  const getPriceDisplay = () => {
    if (isProfessional) {
      const profPlan = plan as (typeof professionalPlans)[0] & { billingCycle?: 'monthly' | 'sixMonthly' | 'yearly' }

      // EXPLORER only has MONTHLY
      if (profPlan.planType === 'EXPLORER') {
        const monthlyPrice = isEurope
          ? profPlan.monthlyPrice?.eur || ''
          : profPlan.monthlyPrice?.usd || ''
        return {
          mainPrice: monthlyPrice,
          period: '/month',
          billingInfo: t('billedMonthly'),
        }
      }

      // PRO has MONTHLY, SIX_MONTHLY, YEARLY - use billingCycle from plan
      if (profPlan.planType === 'PRO') {
        const billingCycle = profPlan.billingCycle || 'yearly'
        const proWithDiscount = profPlan as (typeof professionalPlans)[1]
        const discountData = proWithDiscount.discount?.[billingCycle]
        if (billingCycle === 'monthly') {
          const monthlyPrice = isEurope
            ? profPlan.monthlyPrice?.eur || ''
            : profPlan.monthlyPrice?.usd || ''
          const d = discountData
          if (d && 'saveAmount' in d) {
            return {
              mainPrice: isEurope ? d.discountedMonthly.eur : d.discountedMonthly.usd,
              period: '/month',
              billingInfo: t(d.introPeriodKey, { amount: isEurope ? d.introFirstPeriod.eur : d.introFirstPeriod.usd }),
              discount: { originalPrice: isEurope ? d.originalMonthly.eur : d.originalMonthly.usd, discountPercent: d.discountPercent, saveAmount: isEurope ? d.saveAmount.eur : d.saveAmount.usd },
            }
          }
          return {
            mainPrice: monthlyPrice,
            period: '/month',
            billingInfo: t('billedMonthly'),
          }
        } else if (billingCycle === 'sixMonthly') {
          const monthlyPrice = isEurope
            ? profPlan.sixMonthMonthlyPrice?.eur || ''
            : profPlan.sixMonthMonthlyPrice?.usd || ''
          const cyclePrice = isEurope
            ? profPlan.sixMonthPrice?.eur || ''
            : profPlan.sixMonthPrice?.usd || ''
          const d = discountData
          if (d && 'originalCycle' in d) {
            return {
              mainPrice: isEurope ? d.discountedMonthly.eur : d.discountedMonthly.usd,
              period: '/month',
              billingInfo: t(d.introPeriodKey, { amount: isEurope ? d.introFirstPeriod.eur : d.introFirstPeriod.usd }),
              discount: { originalPrice: isEurope ? d.originalMonthly.eur : d.originalMonthly.usd, originalCycle: isEurope ? d.originalCycle.eur : d.originalCycle.usd, discountPercent: d.discountPercent, saveAmount: isEurope ? d.saveAmountCycle.eur : d.saveAmountCycle.usd, periodDiscountPercent: d.periodDiscountPercent, periodSaveAmount: isEurope ? d.periodSaveAmount.eur : d.periodSaveAmount.usd },
            }
          }
          return {
            mainPrice: monthlyPrice,
            period: '/month',
            billingInfo: `${cyclePrice} ${t('billedEvery6Months')}`,
          }
        } else {
          const monthlyPrice = isEurope
            ? profPlan.yearlyMonthlyPrice?.eur || ''
            : profPlan.yearlyMonthlyPrice?.usd || ''
          const cyclePrice = isEurope
            ? profPlan.yearlyPrice?.eur || ''
            : profPlan.yearlyPrice?.usd || ''
          const d = discountData
          if (d && 'bestDeal' in d) {
            return {
              mainPrice: isEurope ? d.discountedMonthly.eur : d.discountedMonthly.usd,
              period: '/month',
              billingInfo: t(d.introPeriodKey, { amount: isEurope ? d.introFirstPeriod.eur : d.introFirstPeriod.usd }),
              discount: { originalPrice: isEurope ? d.originalMonthly.eur : d.originalMonthly.usd, originalCycle: isEurope ? d.originalCycle.eur : d.originalCycle.usd, discountPercent: d.discountPercent, saveAmount: isEurope ? d.saveAmountCycle.eur : d.saveAmountCycle.usd, periodDiscountPercent: d.periodDiscountPercent, periodSaveAmount: isEurope ? d.periodSaveAmount.eur : d.periodSaveAmount.usd, bestDeal: d.bestDeal },
            }
          }
          return {
            mainPrice: monthlyPrice,
            period: '/month',
            billingInfo: `${t('billedYearly')} (${cyclePrice}/year)`,
          }
        }
      }

      // Fallback (should not happen)
      return {
        mainPrice: '',
        period: '/month',
        billingInfo: '',
      }
    } else {
      // Educational: Show yearly or monthly based on toggle
      const eduPlan = plan as (typeof educationPlans)[0]
      if (isYearly) {
        return {
          mainPrice: formatPrice(eduPlan.monthlyEquivalant, isEurope),
          period: '/month',
          billingInfo: `${t('billedYearly')} (${formatPrice(eduPlan.yearlyPrice, isEurope)}/year)`,
          saveInfo: t('saveWithAnnual', {
            amount: formatPrice(eduPlan.save, isEurope),
          }),
        }
      } else {
        return {
          mainPrice: formatPrice(eduPlan.monthlyPrice, isEurope),
          period: '/month',
          billingInfo: t('billedMonthly'),
        }
      }
    }
  }

  const priceInfo = getPriceDisplay()

  return (
    <div
      className='flex h-[580px] mb-4 flex-col  sm: md: p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 relative'
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
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
                className='text-[10px] font-bold uppercase tracking-wider text-gray-900 relative z-10 whitespace-nowrap'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {t('bestResults')}
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
          className='text-[18px] sm:text-[20px] font-bold uppercase tracking-wider mb-2 block text-white'
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {plan.name}
        </span>

        {/* Discount badge above price - period discount for 6-mo/yearly */}
        {priceInfo.discount?.periodDiscountPercent != null && (
          <div className='bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-2.5 shadow-sm' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t('periodDiscountBadge', { percent: priceInfo.discount.periodDiscountPercent, amount: priceInfo.discount.periodSaveAmount })}
          </div>
        )}

        {/* Pricing Section */}
        <div className='mb-3'>
          <div className='flex flex-col items-center justify-center'>
            {priceInfo.discount ? (
              <>
                <div className='text-[12px] text-white/50 line-through mb-1' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {priceInfo.discount.originalPrice} {priceInfo.period}
                </div>
                <div className='flex items-baseline justify-center gap-1'>
                  <span className='text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {priceInfo.mainPrice}
                  </span>
                  <span className='text-xs sm:text-sm text-white/70' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {priceInfo.period}
                  </span>
                </div>
                <div className='bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mt-2 shadow-sm' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {t('discountBadge', { percent: priceInfo.discount.discountPercent, amount: priceInfo.discount.saveAmount })}
                </div>
              </>
            ) : (
              <div className='flex items-baseline justify-center gap-1'>
                <span className='text-2xl sm:text-3xl font-bold text-white tracking-tight' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {priceInfo.mainPrice}
                </span>
                <span className='text-xs sm:text-sm text-white/70' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {priceInfo.period}
                </span>
              </div>
            )}
          </div>

          <div className='space-y-1 text-[11px] text-white/75 mt-3 text-center'>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {priceInfo.billingInfo}
            </div>
            {priceInfo.saveInfo && (
              <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {priceInfo.saveInfo}
              </div>
            )}
            <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {t('plusVat')}
            </div>
            {isProfessional && !priceInfo.discount && (
              <div className='text-emerald-400 font-semibold mt-1.5' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {t('freeTrial')}
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
                className='flex items-start text-xs font-medium py-1.5 border-b border-gray-800 last:border-b-0'
              >
                {hasFeature ? (
                  <Check className='w-2.5 h-2.5 flex-shrink-0 mt-0.5 mr-2 text-white' />
                ) : (
                  <X className='w-2.5 h-2.5 flex-shrink-0 mt-0.5 mr-2 text-white/50' />
                )}
                <span
                  className={`leading-tight text-left flex-1 ${hasFeature ? 'text-white' : 'text-white/70'
                    }`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
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
        <Link href={'https://app.typus.ai/register'}>
          <Button
            className='bg-white text-black cursor-pointer w-full px-4 py-2 text-[10px] font-medium uppercase tracking-wide border border-white hover:bg-transparent hover:text-white transition-all duration-200'
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {t('subscribe')}
          </Button>
        </Link>
      </div>
    </div>
  )
}
