'use client'

import { Button } from '@/components/ui/button'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const professionalPlans = [
  {
    id: 'starter',
    name: 'STARTER',
    threeMonthPrice: '€297', // €99/month * 3
    monthlyPrice: '€99',
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
    threeMonthPrice: '€495', // €165/month * 3
    monthlyPrice: '€165',
    planType: 'EXPLORER',
    popular: true,
    features: [
      {
        text: '150 CREDITS /month (e.g. 100 base images and 10 Refinements)',
        hasFeature: true,
      },
      { text: '4K RESOLUTION (2 CONCURRENT JOB)', hasFeature: true },
      { text: 'ALL PLUGIN INTEGRATIONS', hasFeature: true },
      { text: 'EMAIL SUPPORT', hasFeature: true },
      { text: 'IMAGE EDITING', hasFeature: true },
      { text: 'LIMITED UPSCALING', hasFeature: true },
      { text: 'CREDIT TOP UPS', hasFeature: true },
    ],
  },
  {
    id: 'pro',
    name: 'PRO',
    threeMonthPrice: '€990', // €330/month * 3
    monthlyPrice: '€330',
    planType: 'PRO',
    features: [
      {
        text: '1000 CREDITS /month (e.g. 800 base images and 40 Refinements)',
        hasFeature: true,
      },
      { text: '4K RESOLUTION (4 CONCURRENT JOB)', hasFeature: true },
      { text: 'ALL PLUGIN INTEGRATIONS', hasFeature: true },
      { text: 'EMAIL SUPPORT', hasFeature: true },
      { text: 'IMAGE EDITING', hasFeature: true },
      { text: 'EDIT BY CHAT', hasFeature: true },
      { text: 'UPSCALE UP TO 13K', hasFeature: true },
      { text: 'CREDIT TOP UPS', hasFeature: true },
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
    popular: true,
    features: [
      {
        text: '150 CREDITS /month (e.g. 100 base images and 10 Refinements)',
        hasFeature: true,
      },
      { text: 'OPT. CREDITS TOP UPS', hasFeature: true },
      { text: '2 CONCURRENT JOBS', hasFeature: true },
      { text: 'INTEGRATED REFINER', hasFeature: true },
      { text: 'CANCEL ANYTIME', hasFeature: true },
      { text: 'SECURE PAYMENT ON STRIPE', hasFeature: true },
      { text: 'ALL PLUGIN INTEGRATIONS', hasFeature: true },
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
    features: [
      {
        text: '1000 CREDITS /month (e.g. 800 base images and 40 Refinements)',
        hasFeature: true,
      },
      { text: 'ALL FEATURES FROM EXPLORER', hasFeature: true },
      { text: '4 CONCURRENT JOBS', hasFeature: true },
      { text: 'PREMIUM LIVE VIDEO CALL SUPPORT', hasFeature: true },
      { text: 'INCREASED SPEED OF GENERATION', hasFeature: true },
      { text: 'RESOLUTION UP TO 13K', hasFeature: true },
    ],
  },
]

export function ManyChatPricingSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isYearly, setIsYearly] = useState(true)
  const [isProfessional, setIsProfessional] = useState(true)
  // Professional plans use 3-monthly billing only, no toggle needed

  const currentPlans = isProfessional ? professionalPlans : educationPlans

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
    [0, 0.25, 0.5, 1],
    ['100%', '100%', '0%', '0%']
  )
  const rightCardX = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    ['-100%', '-100%', '0%', '0%']
  )
  const leftCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [0, 0, 1, 1]
  )
  const rightCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [0, 0, 1, 1]
  )
  const centerCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 1, 1]
  )

  return (
    <section
      ref={containerRef}
      className='md:h-[420vh] py-10 relative'
      style={{ backgroundColor: '#fcfcfd' }}
      id='pricing'
    >
      <div
        className='md:sticky top-0 md:h-[110vh] flex flex-col justify-center overflow-hidden px-4'
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
              {isProfessional ? 'PROFESSIONAL PLANS' : 'EDUCATION PLANS'}
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
                    Professional
                  </MovingBorderButton>
                ) : (
                  <button
                    onClick={() => setIsProfessional(true)}
                    className='px-4 py-2  text-sm font-medium transition-all duration-300 text-gray-600 hover:text-gray-800 bg-white/50 hover:bg-white/70'
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Professional
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
                    Education
                  </MovingBorderButton>
                ) : (
                  <button
                    onClick={() => setIsProfessional(false)}
                    className='px-4 py-2  text-sm font-medium transition-all duration-300 text-gray-600 hover:text-gray-800 bg-white/50 hover:bg-white/70'
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Education
                  </button>
                )}
              </div>
            </div>

            {/* Professional Plans: No billing toggle, only 3-monthly */}
            {isProfessional ? (
              <div className='flex flex-col items-center mb-8'>
                <div className='bg-site-white border border-black rounded-none p-3 mb-4 max-w-2xl'>
                  <p className='text-gray-900 text-center font-medium text-sm font-space-grotesk'>
                    <span className='font-bold text-black'>
                      1-day free trial
                    </span>{' '}
                    for professional Architects | Sign up with company email
                    account to get started.
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
                    Yearly Billing
                  </button>
                  <button
                    onClick={() => setIsYearly(false)}
                    className={`px-6 py-2  text-sm font-medium transition-colors ${
                      !isYearly
                        ? 'bg-white text-black shadow-md'
                        : 'text-black hover:text-black'
                    }`}
                  >
                    Monthly Billing
                  </button>
                </div>
                <p
                  className='text-black pb-0 mb-8'
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Switch to Yearly to save 75%
                </p>
              </>
            )}
          </motion.div>

          <div className='relative md:flex hidden justify-center items-center h-[70vh] min-h-[600px] w-full gap-4'>
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
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
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
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
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
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
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
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
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
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
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
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
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
  // For professional plans, show 3-monthly pricing
  const getPriceDisplay = () => {
    if (isProfessional) {
      // Professional: Always show 3-monthly
      const threeMonthPrice =
        (plan as (typeof professionalPlans)[0]).threeMonthPrice || ''
      const monthlyPrice =
        (plan as (typeof professionalPlans)[0]).monthlyPrice || ''
      return {
        mainPrice: monthlyPrice,
        period: '/month',
        billingInfo: `${threeMonthPrice} billed every 3 months`,
      }
    } else {
      // Educational: Show yearly or monthly based on toggle
      const eduPlan = plan as (typeof educationPlans)[0]
      if (isYearly) {
        return {
          mainPrice: eduPlan.monthlyEquivalant,
          period: '/month',
          billingInfo: `Billed yearly (${eduPlan.yearlyPrice}/year)`,
          saveInfo: `Save ${eduPlan.save} with annual billing`,
        }
      } else {
        return {
          mainPrice: eduPlan.monthlyPrice,
          period: '/month',
          billingInfo: 'Billed monthly',
        }
      }
    }
  }

  const priceInfo = getPriceDisplay()

  return (
    <div
      className='flex h-[580px] mb-4 flex-col  sm: md: p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800'
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
      }}
    >
      {/* Header Section */}
      <div className='flex flex-col items-center text-center mb-4'>
        {plan.popular && (
          <div className='mb-2'>
            <MovingBorderButton
              duration={2000}
              className='bg-transparent border-0 text-white  text-[10px] font-bold uppercase tracking-wide'
              containerClassName=' !h-10 w-30'
              borderClassName='bg-[radial-gradient(#1a1a1a_100%,#000000_100%)]'
              borderRadius='0rem'
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Most Popular
            </MovingBorderButton>
          </div>
        )}

        <span
          className='text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mb-2 block text-white'
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
              Plus 19% VAT
            </div>
            {isProfessional && (
              <div className='text-green-400 font-semibold mt-2'>
                1-day free trial
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
            Subscribe
          </Button>
        </Link>
      </div>
    </div>
  )
}
