'use client'

import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/price-converter'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRef, useState } from 'react'




const conciergePlans = [
  {
    id: 'basic',
    name: 'BASIC',
    monthlyPrice: '€500',
    yearlyPrice: '€4000',
    monthlyEquivalant: '€333',
    save: '€2000',
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
      name: t(plan.id === 'basic' ? 'plans.basic.name' : 'plans.pro.name'),
      features: dynamicFeatures.map(f => t(f)),
    }
  })

  return (
    <section
      ref={containerRef}
      className='md:h-[200vh] py-10 relative'
      style={{ backgroundColor: '#fcfcfd' }}
      id='concierge-pricing'
    >
      <div className='md:sticky top-0 flex flex-col justify-center overflow-hidden px-4'>
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
              className='text-[30px] font-normal text-black mb-12'
              style={{
                fontFamily:
                  "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
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
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {t('yearlyBilling')}
              </button>
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 text-sm font-medium transition-colors ${!isYearly
                  ? 'bg-white text-black shadow-md'
                  : 'text-black hover:text-black bg-white/50 hover:bg-white/70'
                  }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
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
            {/* <p
              className='text-black pb-0 mb-8'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t('subtitle')}
            </p> */}
          </motion.div>

          <div className='relative md:flex hidden justify-center items-center h-[80vh] w-full gap-6 px-4'>
            <motion.div
              className='w-full max-w-xs z-10'
              style={{
                x: leftCardX,
                opacity: leftCardOpacity,
                y: cardParallaxY,
              }}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <PricingCard plan={currentPlans[0]} isYearly={isYearly} />
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
              transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <PricingCard plan={currentPlans[1]} isYearly={isYearly} />
            </motion.div>
          </div>
          <div>
            <div className='relative md:hidden flex flex-col justify-center items-center w-full gap-8'>
              {currentPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className='w-full max-w-xs z-30'
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <PricingCard plan={plan} isYearly={isYearly} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingCard({ plan, isYearly }: { plan: any; isYearly: boolean }) {
  const t = useTranslations('ConciergePricing')
  const tPricing = useTranslations('Pricing')
  const isEurope = true
  // const isEurope = useIsEurope()

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
      className='flex h-[580px] mb-4 flex-col p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 relative'
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
      }}
    >
      {/* Ribbon Tag */}
      {plan.popular && (
        <div className='absolute -top-2 left-0 z-30 origin-top-left'>
          <div className='relative transform -rotate-12'>
            <div className='bg-gradient-to-b from-yellow-400 to-yellow-500 px-5 py-1.5 shadow-lg relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
              <div className='absolute -left-2 top-0 w-0 h-0 border-t-[14px] border-t-yellow-600 border-r-[10px] border-r-transparent'></div>
              <div className='absolute -left-2 bottom-0 w-0 h-0 border-b-[14px] border-b-yellow-600 border-r-[10px] border-r-transparent'></div>
              <div className='absolute -right-2 top-0 w-0 h-0 border-t-[14px] border-t-yellow-600 border-l-[10px] border-l-transparent'></div>
              <div className='absolute -right-2 bottom-0 w-0 h-0 border-b-[14px] border-b-yellow-600 border-l-[10px] border-l-transparent'></div>
              <span
                className='text-[10px] font-bold uppercase tracking-wider text-gray-900 relative z-10 whitespace-nowrap'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {tPricing('bestResults')}
              </span>
            </div>
            <div className='absolute top-full left-0 right-0 h-1 bg-black/10 blur-sm'></div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className='flex flex-col items-center text-center justify-center mb-4 relative pt-3'>
        <span
          className='text-[18px] sm:text-[20px] font-bold uppercase tracking-wider mb-2 block text-white'
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {plan.name}
        </span>

        {/* Pricing Section */}
        <div className='mb-3'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-baseline justify-center gap-1'>
              <span
                className='text-2xl sm:text-3xl font-bold text-white tracking-tight'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {priceInfo.mainPrice}
              </span>
              <span
                className='text-xs sm:text-sm text-white/70'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {priceInfo.period}
              </span>
            </div>
          </div>

          <div className='space-y-1 text-[11px] text-white/75 mt-3 text-center'>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {priceInfo.billingInfo}
            </div>
            {priceInfo.saveInfo && (
              <div
                className='text-emerald-400 font-semibold'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {priceInfo.saveInfo}
              </div>
            )}
            <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {tPricing('plusVat')}
            </div>
            {/* <div
              className='text-emerald-400 font-semibold mt-1.5'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {tPricing('freeTrial')}
            </div> */}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='flex-1 mb-3 overflow-y-auto px-2 custom-scrollbar'>
        <ul className='space-y-1.5'>
          {plan.features.map((feature: string, index: number) => (
            <li
              key={index}
              className='flex items-start text-xs font-medium py-1.5 border-b border-gray-800 last:border-b-0'
            >
              <Check className='w-2.5 h-2.5 flex-shrink-0 mt-0.5 mr-2 text-white' />
              <span
                className='leading-tight text-left flex-1 text-white'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <div className='mt-auto pt-4'>
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
