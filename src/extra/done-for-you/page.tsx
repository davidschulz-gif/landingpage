'use client'

import { ActionButton } from '@/components/action-button'
import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { BreathingAnimationText } from '@/components/breathing-animation-text'
import BookingDemoClassForm from '@/components/demo-class-boooking-form'
import { FloatingCollage } from '@/components/done-for-you-hero-images'
import { FloatingBuzzer } from '@/components/floating-buzzer'
import { FooterSection } from '@/components/footer-section'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight, BanknoteIcon, BarChart3, CheckCircle2, Clock, FileText, Image, MessageSquare, PhoneCall, Send, Sparkles } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import aiPulseAnimation from '../../../public/lottie/ai-pulse.json'
import designerAnimation from '../../../public/lottie/Designer.json'

// Carousel imports

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import { SolutionSection } from '@/components/solution-section'

const RightsSection = dynamic(
  () => import('@/components/rights-section').then(mod => mod.RightsSection),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
  }
)

const HowItWorks = dynamic(
  () => import('@/components/how-it-works-done-for-you').then(mod => mod.HowItWorks),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
  }
)

const IndustrySection = dynamic(
  () => import('@/components/industry-section').then(mod => mod.IndustrySection),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
  }
)

const FeaturesSection = dynamic(
  () =>
    import('@/components/features-section').then(mod => mod.FeaturesSection),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
  }
)

const UseCasesSection = dynamic(
  () => import('@/components/use-cases-section').then(mod => mod.UseCasesSection),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
  }
)

const FeatureShowcase = dynamic(
  () => import('@/components/feature').then(mod => mod.FeatureShowcase),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
  }
)


const ComparisonSection = dynamic(
  () => import('@/components/comparison-section').then(mod => mod.ComparisonSection),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
  }
)

const DetailedFeaturesSection = dynamic(
  () => import('@/components/detailed-features-section').then(mod => mod.DetailedFeaturesSection),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
  }
)

const ReviewsSection = dynamic(
  () => import('@/components/reviews-section').then(mod => mod.ReviewsSection),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
  }
)


export default function DoneForYouPage() {
  const t = useTranslations('BilderFlatrate')
  const tPricing = useTranslations('Pricing')
  const locale = useLocale()
  const [currentIndex, setCurrentIndex] = useState(0)

  const titles = t.raw('hero.titles') as string[]
  const subtitles = t.raw('hero.subtitles') as string[]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [titles.length])

  const motionProps = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
    viewport: { once: true, margin: '-100px' }
  }

  return (
    <div className='relative w-full bg-[#fcfcfd] dark:bg-[#0d0e12] min-h-screen font-space-grotesk' style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}>
      {/* Navbar */}
      <NavbarDemo />

      <main className='flex flex-col w-full pb-20'>
        {/* Hero Section */}
        {/* <section className='relative pt-32 pb-32 md:pt-48 md:pb-48 px-4 flex flex-col items-center justify-center min-h-[70vh]'>
         
          <FloatingCollage />

          <div className='max-w-4xl mx-auto text-center space-y-8 relative z-20'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' as const }}
            >
              <div className='inline-flex items-center gap-3 mb-8'>
                <div className='inline-flex gap-2 items-center rounded-none border border-black bg-neutral-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-500 font-space-grotesk'>
                  <span className='font-bold text-black text-sm'>{t('hero.badge')}</span>

                  <div className='relative inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden font-space-grotesk rounded-none'
                    style={{
                      background: 'linear-gradient(135deg, #b8860b 0%, #ffd700 35%, #fffacd 55%, #ffd700 75%, #b8860b 100%)',
                      color: '#5a3a00',
                      boxShadow: '0 0 12px rgba(255,215,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)',
                    }}
                  >
                    <span className='relative z-10'>{t('hero.innovativeBadge')}</span>
                    <span className='absolute inset-0 animate-shine' style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)', backgroundSize: '200% 100%' }} />
                  </div>
                </div>
              </div>

              <BreathingAnimationText animationType='black-gray'>
                <div className='h-[120px] md:h-[180px] lg:h-[275px] relative overflow-visible flex items-center justify-center'>
                  <AnimatePresence mode='wait'>
                    <motion.h1
                      key={currentIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className='text-[32px] md:text-[50px] lg:text-[64px] font-normal tracking-tight text-neutral-900 dark:text-white leading-[1.1] absolute w-full'
                      style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
                    >
                      {titles[currentIndex]}
                    </motion.h1>
                  </AnimatePresence>
                </div>
              </BreathingAnimationText>

              <div className='h-[80px] md:h-[100px] relative overflow-visible flex items-center justify-center mb-10'>
                <AnimatePresence mode='wait'>
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal max-w-2xl absolute w-full'
                  >
                    {subtitles[currentIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }}
              className='flex flex-col items-center gap-8'
            >
              <div className="relative z-10">

                <div className=''> <ActionButton href='#booking-form'>
                  {t('hero.cta')}
                </ActionButton>
                </div>
              </div>
            </motion.div>
          </div>
        </section> */}

        {/* Solution Section */}
        <SolutionSection />

        {/* Pricing Comparison */}
        <section className='py-24 lg:py-32 bg-[#fcfcfd] dark:bg-[#0d0e12] px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div {...motionProps}>
              <BreathingAnimationText animationType='black-gray'>
                <h2 className='text-[28px] md:text-[42px] font-normal text-neutral-900 dark:text-white mb-6 tracking-tight'>
                  {t('pricing.subtitle')}
                </h2>
              </BreathingAnimationText>

              {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-stretch'> */}
              <div className='flex items-center justify-center mt-20'>
                <motion.div
                  {...motionProps}
                  transition={{ ...motionProps.transition, delay: 0.2, ease: 'easeOut' as const }}
                  className='p-8 md:p-10 border-2 border-black dark:border-white bg-white dark:bg-black shadow-[0_15px_50px_rgba(0,0,0,0.08)] relative flex flex-col'
                >
                  <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-base font-bold uppercase tracking-[0.2em]'>
                    {t('pricing.flatBadge')}
                  </div>
                  <h3 className='text-lg font-bold uppercase tracking-[0.2em] mb-8 text-neutral-900 dark:text-white border-b border-neutral-100 dark:border-neutral-900 pb-4'>{t('pricing.flatTitle')}</h3>
                  <div className='space-y-4 flex-1 flex flex-col justify-center'>
                    <div className='flex flex-col items-center gap-2'>
                      <div className='flex items-end gap-2'>
                        <span className='text-neutral-400 font-light text-lg pb-1 pr-2 uppercase tracking-widest'>{t('pricing.flatFrom')}</span>
                        <span className='font-normal text-5xl text-neutral-900 dark:text-white'>{t('pricing.flatPrice')}</span>
                      </div>
                      <div className='flex flex-col items-center text-center mt-2'>
                        <div className='text-base text-neutral-400 uppercase tracking-[0.2em] font-bold'>
                          {t('pricing.flatPerMonth')}
                        </div>
                        <div className='text-base text-neutral-500 font-normal mt-1'>
                          {t('pricing.flatBillingNote')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-8 p-4 bg-neutral-50 dark:bg-neutral-950 text-center'>
                    <p className='text-[15px] font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider leading-relaxed' dangerouslySetInnerHTML={{ __html: t.raw('pricing.flatNote') }} />
                  </div>
                </motion.div>
              </div>
              {/* </div> */}
            </motion.div>
          </div>
        </section>

        {/* How It's Possible Section */}
        <section className='bg-[#fcfcfd] dark:bg-[#0d0e12] px-4'>
          <div className='max-w-7xl mx-auto'>
            <motion.div {...motionProps} className='text-center space-y-8'>
              <BreathingAnimationText animationType='black-gray'>
                <h2 className='text-[28px] md:text-[42px] font-normal text-neutral-900 dark:text-white tracking-tight'>
                  {t('howItsPossible.title')}
                </h2>
              </BreathingAnimationText>

              <div className='space-y-6 text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal max-w-7xl mx-auto'>
                <p style={{ fontFamily: 'sans-serif' }} >{t('howItsPossible.p1')}</p>

                <div className='flex justify-center py-6'>
                  <div className='w-24 h-24 sm:w-32 sm:h-32 -my-4 relative flex items-center justify-center rounded-[40px]  shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:bg-transparent dark:shadow-none'>
                    <Lottie
                      animationData={aiPulseAnimation}
                      loop={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                </div>

                <p style={{ fontFamily: 'sans-serif' }} >{t('howItsPossible.p2')}</p>
                <div className='pt-4'>
                  <span className='font-bold text-neutral-900 dark:text-white uppercase tracking-widest text-xs block mb-3'>
                    {t('howItsPossible.p3')}
                  </span>
                  <p>{t('howItsPossible.p4')}</p>
                </div>
              </div>
              <div className='mt-16 flex justify-center'>
                <div>
                  <ActionButton href='#booking-form' icon={<ArrowRight className='w-4 h-4' />}>
                    {t('cta.button')}
                  </ActionButton>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Concierge Pricing Section moved to pricing/page.tsx */}

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <UseCasesSection />
        </motion.div>

        {/* Rights Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <RightsSection />
        </motion.div>

        {/* How It Works Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <HowItWorks />
        </motion.div> */}


        {/* Industry Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <IndustrySection />
        </motion.div>


        {/* Feature Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <FeatureShowcase />
        </motion.div> */}


        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }} // Reduced from 0.8s
          viewport={{ once: true, margin: '-100px' }}
        >
          <FeaturesSection />
        </motion.div>




        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <ComparisonSection />
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <DetailedFeaturesSection />
        </motion.div>


        {/* Final CTA */}
        <section id='booking-form' className='py-24 lg:py-32 px-4 bg-white dark:bg-black border-t border-neutral-100 dark:border-neutral-900'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start'>
              <motion.div {...motionProps} className='text-center lg:text-left space-y-10 lg:sticky lg:top-32'>
                <BreathingAnimationText animationType='black-gray'>
                  <h2 className='text-[28px] md:text-[42px] font-normal text-neutral-900 dark:text-white leading-[1.2] tracking-tight'>
                    {t('cta.title')}
                  </h2>
                </BreathingAnimationText>

                {/* Advisor Profile Card */}
                <div className='w-full mt-8'>
                  <div className='flex items-center gap-4 bg-[#fcfcfd] dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 p-4 w-full text-left backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.02)]'>
                    <div className='w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border border-neutral-200 dark:border-neutral-700'>
                      <img
                        src='/DominikDenny.png'
                        alt={t('benefits.advisorName')}
                        className='w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110'
                      />
                    </div>
                    <div className='flex-1'>
                      <p className='text-black dark:text-white font-bold text-xl uppercase tracking-widest leading-tight mb-1'>{t('benefits.advisorName')}</p>
                      <p className='text-neutral-500 text-sm uppercase tracking-wider'>{t('benefits.advisorRole')}</p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col items-center lg:items-start gap-12'>
                  {/* <ActionButton href='#booking-form' icon={<ArrowRight className='w-4 h-4' />}>
                    {t('cta.button')} 
                  </ActionButton> */}

                  <ul className='space-y-6 text-left max-w-sm'>
                    {[
                      { icon: Image, key: 'point1' },
                      { icon: BarChart3, key: 'point2' },
                      { icon: PhoneCall, key: 'point3' }
                    ].map((item, i) => {
                      const Icon = item.icon
                      return (
                        <li key={i} className='flex items-center gap-4'>
                          <div className='w-10 h-10 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0 rounded-none border border-neutral-200 dark:border-neutral-700 shadow-sm'>
                            <Icon className='w-5 h-5 text-black dark:text-white' strokeWidth={1.5} />
                          </div>
                          <span style={{ fontFamily: 'sans-serif' }} className='text-[15px] font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed italic'>
                            {t(`cta.point${i + 1}` as any)}
                          </span>
                        </li>
                      )
                    })}
                  </ul>


                </div>
              </motion.div>

              <motion.div
                {...motionProps}
                transition={{ ...motionProps.transition, delay: 0.2, ease: 'easeOut' as const }}
                className='w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 flex flex-col space-y-8'
              >
                <h4 className='text-sm font-bold uppercase tracking-[0.3em] text-neutral-400 text-center lg:text-left'>
                  {tPricing('bookDemo')}
                </h4>
                <div className='bg-white dark:bg-black w-full p-8 md:p-12 shadow-[0_10px_60px_rgba(0,0,0,0.03)] border border-neutral-100 dark:border-neutral-900'>
                  <BookingDemoClassForm showTitle={false} />
                </div>
              </motion.div>
            </div>
            <div className="mt-12 flex justify-center">
              <Link
                href={`/${locale}`}
                className="inline-flex bg-black dark:bg-white items-center text-lg font-bold uppercase tracking-tight text-neutral-100 dark:text-neutral-900 hover:text-neutral-200 dark:hover:text-neutral-200 p-2 px-6 transition-colors group lg:justify-start justify-center"
              >
                {/* <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> */}
                {locale === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} // Reduced from 0.8s
        viewport={{ once: true, margin: '-100px' }}
      >
        <ReviewsSection />
      </motion.div>

      {/* Footer */}
      <FooterSection />

      {/* Floating Buzzer */}
      <FloatingBuzzer />
    </div>
  )
}
