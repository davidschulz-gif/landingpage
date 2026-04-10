'use client'

import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/price-converter'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRef, useState } from 'react'
import BookingDemoClassForm from './demo-class-boooking-form'
import BookingDemoClassFormForPricingPage from './demo-class-boooking-form-for-pricing-page'
import { useIsEurope } from '@/hooks/use-is-europe'

const conciergePlans = [
  {
    id: 'basic',
    name: 'BASIC',
    monthlyPrice: '€500',
    yearlyPrice: '€4000',
    monthlyEquivalant: '€333',
    save: '€2000',
    monthlyPaymentLink: 'https://buy.stripe.com/9B65kE5lfadm56E8OPbo408',
    yearlyPaymentLink: 'https://buy.stripe.com/dRmbJ28xr71aaqYghhbo40a',
    period: '/month',
    yearlyPeriod: '/year',
    planType: 'BASIC',
    features: [
      'plans.basic.features.visualizer',
      'plans.basic.features.videoCall',
      'plans.basic.features.emailComm',
      'plans.basic.features.requests',
      'plans.basic.features.inputImages',
      'plans.basic.features.turnaround',
      'plans.basic.features.feedback',
    ],
  },
  {
    id: 'pro',
    name: 'PRO',
    monthlyPrice: '€1000',
    yearlyPrice: '€8000',
    monthlyEquivalant: '€667',
    save: '€4000',
    monthlyPaymentLink: 'https://buy.stripe.com/5kQcN6dRLgBK0Qo1mnbo409',
    yearlyPaymentLink: 'https://buy.stripe.com/5kQ4gA8xr99i2Yw1mnbo40b',
    period: '/month',
    yearlyPeriod: '/year',
    planType: 'PRO',
    popular: true,
    features: [
      'plans.pro.features.visualizer',
      'plans.pro.features.videoCall',
      'plans.pro.features.emailComm',
      'plans.pro.features.requests',
      'plans.pro.features.inputImages',
      'plans.pro.features.turnaround',
      'plans.pro.features.feedback',
    ],
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    monthlyPrice: '€1500',
    yearlyPrice: '€12000',
    monthlyEquivalant: '€1000',
    save: '€6000',
    monthlyPaymentLink: 'https://buy.stripe.com/premium_monthly_placeholder',
    yearlyPaymentLink: 'https://buy.stripe.com/premium_yearly_placeholder',
    period: '/month',
    yearlyPeriod: '/year',
    planType: 'PREMIUM',
    features: [
      'plans.premium.features.visualizer',
      'plans.premium.features.videoCall',
      'plans.premium.features.emailComm',
      'plans.premium.features.requests',
      'plans.premium.features.inputImages',
      'plans.premium.features.turnaround',
      'plans.premium.features.feedback',
    ],
  },
]

export function ConciergePricingSection() {
  const t = useTranslations('ConciergePricing')
  const tPricing = useTranslations('Pricing')
  const containerRef = useRef<HTMLDivElement>(null)
  const [isYearly, setIsYearly] = useState(true)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end start'],
  })

  // Multi-layer parallax effects
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -20])
  const cardParallaxY = useTransform(scrollYProgress, [0, 1], [0, -20])

  // Cards sliding from behind center card
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

  const currentPlans = conciergePlans.map(plan => {
    // Filter out requests and add conditional features
    const baseFeatures = plan.features.filter(f => !f.includes('.requests'))
    const dynamicFeatures = isYearly
      ? [...baseFeatures.slice(0, 3), `plans.${plan.id}.features.pauseYearly`, ...baseFeatures.slice(3)]
      : [...baseFeatures.slice(0, 3), `plans.${plan.id}.features.cancelMonthly`, ...baseFeatures.slice(3)]

    return {
      ...plan,
      name: t(`plans.${plan.id}.name` as any),
      contractTerm: t(`plans.${plan.id}.contractTerm` as any),
      features: dynamicFeatures.map(f => t(f as any)),
      ...(plan.popular || plan.id === 'premium' ? { topBadges: [tPricing('bestResultsForDFY')] } : {}),
    }
  })

  return (
    <section
      ref={containerRef}
      className='py-2 relative'
      style={{ backgroundColor: '#fcfcfd' }}
      id='concierge-pricing'
    >
      <div className='flex flex-col justify-center overflow-hidden px-4'>
        <div className='w-full mx-auto px-4 relative z-10 pt-2'>
          <div className='text-center mb-0 relative z-40'>
            <h2
              className='text-[50px] font-normal text-black mb-12'
              style={{
                fontFamily:
                  "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif",
              }}
            >
              {t('title')}
            </h2>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-4'>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 text-sm font-medium transition-colors ${isYearly
                  ? 'bg-white text-black shadow-md'
                  : 'text-black hover:text-black bg-white/50 hover:bg-white/70'
                  }`}
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                {t('yearlyBilling')}
              </button>
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 text-sm font-medium transition-colors ${!isYearly
                  ? 'bg-white text-black shadow-md'
                  : 'text-black hover:text-black bg-white/50 hover:bg-white/70'
                  }`}
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                {t('monthlyBilling')}
              </button>
            </div>
            <div className='flex flex-col items-center mb-8'>
              <div className='bg-site-white border border-black rounded-none p-3 mb-4 max-w-2xl'>
                <p className='text-gray-900 text-center font-medium text-sm font-space-grotesk'>
                  <span className='font-bold text-black'>
                    {t('subtitle')}
                  </span>{' '}
                  {/* {!isYearly ? t('switchToYearly') : ''} */}
                </p>
              </div>
            </div>
          </div>

          <div className='relative flex flex-col lg:flex-row justify-center items-stretch h-auto w-full max-w-[1440px] mx-auto gap-12 px-4 mb-8'>
            <div className='lg:w-[300px] flex-shrink-0'>
              <BookingDemoClassFormForPricingPage />
            </div>

            <div className='flex-grow md:grid hidden grid-cols-3 gap-8 items-stretch'>
              <PricingCard plan={currentPlans[0]} isYearly={isYearly} />
              <PricingCard plan={currentPlans[1]} isYearly={isYearly} />
              <PricingCard plan={currentPlans[2]} isYearly={isYearly} />
            </div>

            {/* Mobile View for Cards */}
            <div className='md:hidden flex flex-col items-center gap-8'>
              {currentPlans.map((plan, index) => (
                <div key={index} className='w-full max-w-xs'>
                  <PricingCard plan={plan} isYearly={isYearly} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className='relative md:hidden flex flex-col justify-center items-center w-full gap-8'>
              {currentPlans.map((plan, index) => (
                <div
                  key={index}
                  className='w-full max-w-xs z-30'
                >
                  <PricingCard plan={plan} isYearly={isYearly} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingCard({ plan, isYearly }: { plan: any & { topBadges?: string[] }; isYearly: boolean }) {
  const isEurope = useIsEurope()
  const t = useTranslations('ConciergePricing')
  const tPricing = useTranslations('Pricing')

  const getPriceDisplay = () => {
    if (isYearly) {
      return {
        mainPrice: formatPrice(plan.monthlyEquivalant, isEurope),
        period: '/month',
        billingInfo: `${t('billedYearly')} (${formatPrice(plan.yearlyPrice, isEurope)}/year)`,
        saveInfo: t('saveWithAnnual', {
          amount: formatPrice(plan.save, isEurope),
        }),
      }
    } else {
      return {
        mainPrice: formatPrice(plan.monthlyPrice, isEurope),
        period: '/month',
        billingInfo: t('billedMonthly'),
      }
    }
  }

  const priceInfo = getPriceDisplay()

  return (
    <div
      className={`flex  flex-col p-6 sm:p-8 transition-shadow duration-300 relative border ${plan.popular
        ? 'bg-white dark:bg-black shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.05)] border-neutral-200 dark:border-neutral-800 z-10'
        : 'bg-white dark:bg-black shadow-sm hover:shadow-md border-neutral-100 dark:border-neutral-900'
        }`}
    >
      {/* Ribbon Tag / Badges */}
      {plan.topBadges && plan.topBadges.length > 0 && (
        <div className='absolute -top-4 right-4 z-30 flex flex-col items-end gap-1.5'>
          {plan.topBadges.map((badge: string, i: number) => (
            <div key={i} className='bg-green-800 dark:bg-white text-white dark:text-black px-3 py-1 rounded-full shadow-md'>
              <span className='text-[12px] font-bold tracking-wide whitespace-nowrap' style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                {badge}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Header Section */}
      <div className='flex flex-col mb-6 relative pt-2'>
        <div className='flex items-center justify-between mb-4 gap-2'>
          <span
            className='text-[18px] sm:text-[20px] font-bold uppercase tracking-wider text-neutral-900 dark:text-white'
            style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
          >
            {plan.name}
          </span>
          {plan.contractTerm && (
            <span
              className='text-[10px] font-extrabold uppercase tracking-wider bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-full shadow-sm whitespace-nowrap'
              style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
            >
              {plan.contractTerm}
            </span>
          )}
        </div>

        {/* Pricing Section */}
        <div className='mb-4'>
          <div className='flex flex-col items-start justify-start'>
            <div className='flex items-end gap-1 mb-1'>
              <span
                className='text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight'
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                {priceInfo.mainPrice}
              </span>
              <span
                className='text-sm text-neutral-500 dark:text-neutral-400 pb-1'
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                {priceInfo.period}
              </span>
            </div>
          </div>

          <div className='space-y-1 text-sm text-neutral-500 dark:text-neutral-400 mt-2 text-left'>
            <div style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
              {priceInfo.billingInfo}
            </div>
            {priceInfo.saveInfo && (
              <div
                className='text-emerald-600 dark:text-emerald-400 font-bold'
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                {priceInfo.saveInfo}
              </div>
            )}
            <div style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
              {tPricing('plusVat')}
            </div>
          </div>
        </div>

        {/* Unlimited Requests Marker */}
        <div className='mb-0.5'>

          <div
            className='text-[16px] font-bold text-black dark:text-white'
            style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
          >
            {t('unlimitedRequests')}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='flex-grow mb-3 overflow-y-auto px-1 custom-scrollbar'>
        <ul className='space-y-1.5'>
          {plan.features.map((feature: string, index: number) => (
            <li
              key={index}
              className={`flex items-start py-2.5 ${index !== plan.features.length - 1 ? 'border-b border-neutral-100 dark:border-neutral-900' : ''}`}
            >
              <div className="flex-shrink-0 flex items-center h-[24px] mr-3">
                <Check className='w-4 h-4 text-orange-500' strokeWidth={3} />
              </div>
              <span
                className='text-[15px] leading-[24px] font-medium text-left flex-1 text-neutral-700 dark:text-neutral-300'
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <div className='mt-auto pt-6'>
        <Link
          href={(isYearly ? plan.yearlyPaymentLink : plan.monthlyPaymentLink) || 'https://app.typus.ai/register'}
        >
          <Button
            className='bg-black text-white dark:bg-white dark:text-black cursor-pointer w-full px-4 py-6 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200'
            style={{
              fontFamily: "'Soyuz Grotesk', sans-serif",
            }}
          >
            {t('subscribe')}
          </Button>
        </Link>
      </div>
    </div>
  )
}
