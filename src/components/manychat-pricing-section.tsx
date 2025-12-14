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
    id: 'starter',
    name: 'STARTER',
    sixMonthPrice: '€199', // €199 per 6 months (€33.17/month)
    monthlyPrice: '€33',
    planType: 'STARTER',
    features: [
      {
        text: '50 CREDITS /month (e.g. 30 base images and 10 Refinements)',
        hasFeature: true,
      },
      { text: '2K RESOLUTION', hasFeature: true },
      { text: 'ALL PLUGIN INTEGRATIONS', hasFeature: true },
      { text: 'NO SUPPORT', hasFeature: false },
      { text: 'NO IMAGE EDITING', hasFeature: false },
      { text: 'NO UPSCALE', hasFeature: false },
      { text: 'NO CREDIT TOP UPS', hasFeature: false },
    ],
  },
  {
    id: 'explorer',
    name: 'EXPLORER',
    sixMonthPrice: '€477', // €477 per 6 months (€79.50/month)
    monthlyPrice: '€79.5',
    planType: 'EXPLORER',
    features: [
      { text: 'EVERYTHING FROM STARTER', hasFeature: true },
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
    sixMonthPrice: '€990', // €990 per 6 months (€165/month)
    monthlyPrice: '€165',
    planType: 'PRO',
    popular: true,
    features: [
      { text: 'EVERYTHING FROM EXPLORER', hasFeature: true },
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
  // Professional plans use 6-monthly billing only, no toggle needed

  // Get translated plans
  const getTranslatedPlans = () => {
    if (isProfessional) {
      return [
        {
          ...professionalPlans[0],
          name: t('plans.starter.name'),
          features: professionalPlans[0].features.map(f => ({
            ...f,
            text:
              typeof f === 'string'
                ? f
                : t(
                    `plans.starter.features.${f.text.includes('50 CREDITS') ? 'credits50' : f.text.includes('2K') ? 'resolution2k' : f.text.includes('ALL PLUGIN') ? 'allPlugins' : f.text.includes('NO SUPPORT') ? 'noSupport' : f.text.includes('NO IMAGE EDITING') ? 'noImageEditing' : f.text.includes('NO UPSCALE') ? 'noUpscale' : 'noCreditTopUps'}`
                  ),
            hasFeature: typeof f === 'object' ? f.hasFeature : true,
          })),
        },
        {
          ...professionalPlans[1],
          name: t('plans.explorer.name'),
          features: professionalPlans[1].features.map(f => ({
            ...f,
            text:
              typeof f === 'string'
                ? f
                : t(
                    `plans.explorer.features.${f.text.includes('EVERYTHING FROM STARTER') ? 'everythingFromStarter' : f.text.includes('150 CREDITS') ? 'credits150' : f.text.includes('4K') && f.text.includes('2 CONCURRENT') ? 'resolution4k' : f.text.includes('EMAIL SUPPORT') ? 'emailSupport' : f.text.includes('IMAGE EDITING') ? 'imageEditing' : f.text.includes('LIMITED UPSCALING') ? 'limitedUpscaling' : 'creditTopUps'}`
                  ),
            hasFeature: typeof f === 'object' ? f.hasFeature : true,
          })),
        },
        {
          ...professionalPlans[2],
          name: t('plans.pro.name'),
          features: professionalPlans[2].features.map(f => ({
            ...f,
            text:
              typeof f === 'string'
                ? f
                : t(
                    `plans.pro.features.${f.text.includes('EVERYTHING FROM EXPLORER') ? 'everythingFromExplorer' : f.text.includes('1000 CREDITS') ? 'credits1000' : f.text.includes('4K') && f.text.includes('4 CONCURRENT') ? 'resolution4k' : f.text.includes('EDIT BY CHAT') ? 'editByChat' : f.text.includes('13K') ? 'upscale13k' : 'onboardingCall'}`
                  ),
            hasFeature: typeof f === 'object' ? f.hasFeature : true,
          })),
        },
      ]
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

            {/* Professional Plans: No billing toggle, only 6-monthly */}
            {isProfessional ? (
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
            ) : (
              <>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-4'>
                  <button
                    onClick={() => setIsYearly(true)}
                    className={`px-6 py-2  text-sm font-medium transition-colors ${
                      isYearly
                        ? 'bg-white text-black shadow-md'
                        : 'text-black hover:text-black'
                    }`}
                  >
                    {t('yearlyBilling')}
                  </button>
                  <button
                    onClick={() => setIsYearly(false)}
                    className={`px-6 py-2  text-sm font-medium transition-colors ${
                      !isYearly
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

          <div className='relative md:flex hidden justify-center items-center h-[80vh] w-full gap-4'>
            {/* Left Card */}
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
                plan={currentPlans[0]}
                isYearly={isYearly}
                isProfessional={isProfessional}
              />
            </motion.div>

            {/* Center Card */}
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
                plan={currentPlans[1]}
                isYearly={isYearly}
                isProfessional={isProfessional}
              />
            </motion.div>

            {/* Right Card */}
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
                plan={currentPlans[2]}
                isYearly={isYearly}
                isProfessional={isProfessional}
              />
            </motion.div>
          </div>
          <div className='relative md:hidden flex flex-col justify-center items-center w-full gap-4'>
            {/* Left Card */}
            <motion.div
              className='w-full max-w-xs z-10'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <PricingCard
                plan={currentPlans[0]}
                isYearly={isYearly}
                isProfessional={isProfessional}
              />
            </motion.div>

            {/* Center Card */}
            <motion.div
              className='w-full max-w-xs z-30'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <PricingCard
                plan={currentPlans[1]}
                isYearly={isYearly}
                isProfessional={isProfessional}
              />
            </motion.div>

            {/* Right Card */}
            <motion.div
              className='w-full max-w-xs z-10'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <PricingCard
                plan={currentPlans[2]}
                isYearly={isYearly}
                isProfessional={isProfessional}
              />
            </motion.div>
          </div>
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
  plan: PlanType
  isYearly: boolean
  isProfessional: boolean
}) {
  const t = useTranslations('Pricing')
  const isEurope = useIsEurope()

  // For professional plans, show 6-monthly pricing
  const getPriceDisplay = () => {
    if (isProfessional) {
      // Professional: Always show 6-monthly
      const sixMonthPrice =
        (plan as (typeof professionalPlans)[0]).sixMonthPrice || ''
      const monthlyPrice =
        (plan as (typeof professionalPlans)[0]).monthlyPrice || ''
      return {
        mainPrice: formatPrice(monthlyPrice, isEurope),
        period: '/month',
        billingInfo: `${formatPrice(sixMonthPrice, isEurope)} ${t('billedEvery6Months')}`,
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
        <div className='absolute -top-1 left-0 z-30 origin-top-left'>
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
      <div className='flex flex-col items-center text-center mb-4 relative'>
        <span
          className='text-[18px] sm:text-[20px] font-bold uppercase tracking-wider mb-2 block text-white'
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {plan.name}
        </span>

        {/* Pricing Section */}
        <div className='mb-3'>
          <div className='flex items-baseline justify-center mb-1'>
            <span
              className='text-2xl font-bold text-white'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {priceInfo.mainPrice}
            </span>
            <span
              className='text-xs ml-1 text-white/80'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {priceInfo.period}
            </span>
          </div>

          <div className='space-y-0.5 text-[10px] text-white/80'>
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
            {isProfessional && (
              <div className='text-green-400 font-semibold mt-2'>
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
                  className={`leading-tight text-left flex-1 ${
                    hasFeature ? 'text-white' : 'text-white/70'
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
