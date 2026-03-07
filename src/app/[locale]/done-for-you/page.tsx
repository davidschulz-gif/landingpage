'use client'

import { ActionButton } from '@/components/action-button'
import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { BreathingAnimationText } from '@/components/breathing-animation-text'
import BookingDemoClassForm from '@/components/demo-class-boooking-form'
import { FooterSection } from '@/components/footer-section'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, FileText, Image, MessageSquare, MonitorPlay, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const ConciergePricingSection = dynamic(
  () =>
    import('@/components/concierge-pricing-section').then(
      mod => mod.ConciergePricingSection
    ),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-gray-100 dark:bg-neutral-800 animate-pulse' />,
  }
)

export default function DoneForYouPage() {
  const t = useTranslations('BilderFlatrate')
  const tPricing = useTranslations('Pricing')
  
  const motionProps = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
    viewport: { once: true, margin: '-100px' }
  }

  return (
    <div className='relative w-full bg-[#fcfcfd] dark:bg-[#0d0e12] min-h-screen font-space-grotesk' style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
      {/* Navbar */}
      <NavbarDemo />

      <main className='flex flex-col w-full pb-20'>
        {/* Hero Section */}
        <section className='relative pt-32 pb-20 md:pt-48 md:pb-32 px-4'>
          <div className='max-w-4xl mx-auto text-center space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' as const }}
            >
              <div className='inline-flex items-center gap-3 mb-8'>
                <div className='inline-flex gap-2 items-center rounded-none border border-neutral-200 bg-neutral-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-500 font-space-grotesk'>
                <span className='font-bold text-sm'>{t('hero.badge')}</span>
                
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
                <h1 className='text-[32px] md:text-[50px] lg:text-[64px] font-normal tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6' style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                  {t('hero.title1')} <br className='hidden md:block' /> {t('hero.title2')}
                </h1>
              </BreathingAnimationText>
              
              <p className='text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal mb-10 max-w-2xl mx-auto'>
                {t('hero.subtitle1')} {t('hero.subtitle2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }}
              className='flex flex-col items-center gap-8'
            >
              <div className='text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl space-y-2'>
                <p>{t('hero.description1')}</p>
                <p>{t('hero.description2')}</p>
                <p className='font-bold text-neutral-900 dark:text-white pt-2' dangerouslySetInnerHTML={{ __html: t.raw('hero.description3') }} />
              </div>
              
              <ActionButton href='#booking-form'>
                {t('hero.cta')}
              </ActionButton>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className='py-24 lg:py-32 bg-white dark:bg-black px-4 border-y border-neutral-100 dark:border-neutral-900'>
          <div className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center'>
              <motion.div {...motionProps}>
                <BreathingAnimationText animationType='black-gray'>
                  <h2 className='text-[24px] md:text-[32px] font-normal text-neutral-900 dark:text-white mb-8 tracking-tight leading-tight'>
                    {t('problem.title1')} <br/> {t('problem.title2')}
                  </h2>
                </BreathingAnimationText>
                
                <div className='space-y-6 text-sm md:text-base text-neutral-500 dark:text-neutral-400'>
                  <p className='font-medium text-neutral-800 dark:text-neutral-200'>{t('problem.subtitle')}</p>
                  <ul className='space-y-4 mt-6'>
                    {[t('problem.point1'), t('problem.point2'), t('problem.point3')].map((point, i) => (
                      <li key={i} className='flex items-center gap-4'>
                        <div className='w-5 h-5 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0'>
                           <span className='text-[10px]'>✕</span>
                        </div>
                        <span className='font-normal text-neutral-600 dark:text-neutral-300'>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className='mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-900'>
                    {t('problem.conclusion')}
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                {...motionProps}
                transition={{ ...motionProps.transition, delay: 0.2, ease: 'easeOut' as const }}
                className='bg-[#fcfcfd] dark:bg-neutral-900/50 p-8 md:p-12 border border-neutral-100 dark:border-neutral-800 shadow-[0_10px_40px_rgba(0,0,0,0.02)]'
              >
                <h3 className='text-xs font-bold uppercase tracking-[0.2em] mb-8 text-neutral-400'>{t('problem.meaningTitle')}</h3>
                <div className='space-y-8'>
                  {[
                    { icon: Clock, title: t('problem.meaning1Title'), desc: t('problem.meaning1Desc') },
                    { icon: MessageSquare, title: t('problem.meaning2Title'), desc: t('problem.meaning2Desc') },
                    { icon: MonitorPlay, title: t('problem.meaning3Title'), desc: t('problem.meaning3Desc') }
                  ].map((item, i) => (
                    <div key={i} className='flex gap-5'>
                      <div className='mt-1 text-black dark:text-white'>
                        <item.icon className='w-5 h-5 opacity-60' />
                      </div>
                      <div>
                        <h4 className='font-bold text-sm text-neutral-900 dark:text-white uppercase tracking-wider mb-1'>{item.title}</h4>
                        <p className='text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed'>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className='mt-10 p-4 border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-black text-center text-xs font-bold uppercase tracking-[0.1em] text-neutral-800 dark:text-neutral-200'>
                  {t('problem.finalConclusion')}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className='py-24 lg:py-32 px-4 bg-white dark:bg-black border-y border-neutral-100 dark:border-neutral-900'>
          <div className='max-w-5xl mx-auto text-center'>
            <motion.div {...motionProps} className='mb-20'>
              <BreathingAnimationText animationType='black-gray'>
                <h2 className='text-[28px] md:text-[42px] font-normal text-neutral-900 dark:text-white mb-6 tracking-tight'>
                  {t('solution.title')}
                </h2>
              </BreathingAnimationText>
              <p className='text-sm md:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto'>
                {t('solution.subtitle')}
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative'>
              {[
                { step: 1, icon: FileText, badgeKey: null },
                { step: 2, icon: Clock, badgeKey: 'solution.step2Badge' },
                { step: 3, icon: Image, badgeKey: null },
              ].map(({ step, icon: Icon, badgeKey }) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
                  transition={{ duration: 0.5, delay: step * 0.12, ease: 'easeOut' }}
                  viewport={{ once: true, margin: '-80px' }}
                  className='bg-[#fcfcfd] dark:bg-neutral-900/30 p-8 md:p-10 border border-neutral-100 dark:border-neutral-800 text-left shadow-[0_10px_40px_rgba(0,0,0,0.01)] relative overflow-visible'
                >
                  {/* Icon — top right */}
                  <div className='absolute top-6 right-6 text-black dark:text-white'>
                    <Icon className='w-10 h-10' strokeWidth={1} />
                  </div>

                  {/* Step number */}
                  <div className='w-10 h-10 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm flex-shrink-0 mb-6'>
                    {step}
                  </div>

                  {/* Green badge — top-left corner */}
                  {badgeKey && (
                    <motion.div
                      initial={{ opacity: 0, rotate: -8, scale: 0.75, y: 6 }}
                      whileInView={{ opacity: 1, rotate: -2, scale: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 16, delay: step * 0.12 + 0.25 }}
                      viewport={{ once: true }}
                      className='absolute -top-3 left-6 inline-flex items-center bg-[#16a34a] text-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] shadow-[2px_2px_0px_rgba(0,0,0,0.25)] z-10'
                      style={{ transform: 'rotate(-2deg)' }}
                    >
                      {t(badgeKey as any)}
                    </motion.div>
                  )}

                  <h3 className='text-sm font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-white mb-3'>
                    {t(`solution.step${step}Title` as any)}
                  </h3>
                  <p className='text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed'>
                    {t(`solution.step${step}Desc` as any)}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className='mt-20 flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400'>
              <span>{t('solution.tag1')}</span>
              <span className='opacity-30'>/</span>
              <span>{t('solution.tag2')}</span>
              <span className='opacity-30'>/</span>
              <span>{t('solution.tag3')}</span>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-24 lg:py-32 bg-black text-white px-4 overflow-hidden'>
          <div className='max-w-4xl mx-auto'>
            <motion.div {...motionProps} className='text-center mb-20'>
              <Users className='w-12 h-12 mx-auto mb-8' />
              {/* <BreathingAnimationText animationType='black-gray'> */}
                <h2 className='text-[28px] md:text-[42px] font-normal mb-6 tracking-tight'>
                  {t('benefits.title')}
                </h2>
              {/* </BreathingAnimationText> */}
              <p className='text-sm md:text-base max-w-2xl mx-auto'>
                {t('benefits.subtitle')}
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <motion.div {...motionProps} className='bg-neutral-900/50 p-8 md:p-12 border border-neutral-800'>
                <ul className='space-y-8'>
                  {[1, 2, 3].map((i) => (
                    <li key={i} className='flex items-start gap-5'>
                      <CheckCircle2 className='w-5 h-5 text-neutral-400 shrink-0 mt-0.5' />
                      <div>
                        <h4 className='font-bold text-xs uppercase tracking-widest mb-2'>{t(`benefits.benefit${i}Title` as any)}</h4>
                        <p className='text-neutral-500 text-xs leading-relaxed'>{t(`benefits.benefit${i}Desc` as any)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                {...motionProps} 
                transition={{ ...motionProps.transition, delay: 0.2, ease: 'easeOut' as const }}
                className='flex items-center justify-center p-8 md:p-12 border border-neutral-800 text-center bg-white/5'
              >
                <p className='text-lg md:text-xl font-normal leading-relaxed text-neutral-300'>
                  {t('benefits.summary1')} <br/>
                  <span className='font-bold text-white uppercase tracking-wider text-sm mt-4 block'>{t('benefits.summary2')}</span>
                </p>
              </motion.div>
            </div>
            <div className='mt-16 flex justify-center'>
              <ActionButton className='border-2' href='#booking-form' icon={<ArrowRight className='w-4 h-4' />}>
                {t('cta.button')}
              </ActionButton>
            </div>
          </div>
        </section>

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
                  <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em]'>
                    {t('pricing.flatBadge')}
                  </div>
                  <h3 className='text-xs font-bold uppercase tracking-[0.2em] mb-8 text-neutral-900 dark:text-white border-b border-neutral-100 dark:border-neutral-900 pb-4'>{t('pricing.flatTitle')}</h3>
                  <div className='space-y-4 flex-1 flex flex-col justify-center'>
                    <div className='flex flex-col items-center gap-2'>
                      <div className='flex items-end gap-2'>
                        <span className='font-normal text-4xl text-neutral-900 dark:text-white'>{t('pricing.flatPrice1')}</span>
                        <span className='text-neutral-400 font-light text-sm pb-1 uppercase tracking-widest'>{t('pricing.flatOr')}</span>
                        <span className='font-normal text-4xl text-neutral-900 dark:text-white'>{t('pricing.flatPrice2')}</span>
                      </div>
                      <div className='text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-bold mt-2'>
                        {t('pricing.flatPerMonth')}
                      </div>
                    </div>
                  </div>
                  <div className='mt-8 p-4 bg-neutral-50 dark:bg-neutral-950 text-center'>
                    <p className='text-[10px] font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider leading-relaxed' dangerouslySetInnerHTML={{ __html: t.raw('pricing.flatNote') }}/>
                  </div>
                </motion.div>
              </div>
              {/* </div> */}
            </motion.div>
          </div>
        </section>

         {/* How It's Possible Section */}
        <section className='bg-[#fcfcfd] dark:bg-[#0d0e12] px-4'>
          <div className='max-w-4xl mx-auto'>
            <motion.div {...motionProps} className='text-center space-y-8'>
              <BreathingAnimationText animationType='black-gray'>
                <h2 className='text-[28px] md:text-[42px] font-normal text-neutral-900 dark:text-white tracking-tight'>
                  {t('howItsPossible.title')}
                </h2>
              </BreathingAnimationText>
              
              <div className='space-y-6 text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal max-w-3xl mx-auto'>
                <p>{t('howItsPossible.p1')}</p>
                <p>{t('howItsPossible.p2')}</p>
                <div className='pt-4'>
                  <span className='font-bold text-neutral-900 dark:text-white uppercase tracking-widest text-xs block mb-3'>
                    {t('howItsPossible.p3')}
                  </span>
                  <p>{t('howItsPossible.p4')}</p>
                </div>
              </div>
              <div className='mt-16 flex justify-center'>
                <ActionButton href='#booking-form' icon={<ArrowRight className='w-4 h-4' />}>
                  {t('cta.button')}
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Concierge Pricing Section */}
        <section className='py-24 lg:py-12 px-4'>
           <motion.div {...motionProps}>
            <ConciergePricingSection />
          </motion.div>
        </section>

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
                
                <div className='flex flex-col items-center lg:items-start gap-12'>
                  {/* <ActionButton href='#booking-form' icon={<ArrowRight className='w-4 h-4' />}>
                    {t('cta.button')} 
                  </ActionButton> */}

                  <ul className='space-y-4 text-left max-w-sm'>
                    {[1, 2, 3].map((i) => (
                      <li key={i} className='flex items-start gap-3'>
                        <div className='w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-1.5 shadow-[0_0_8px_rgba(239,68,68,0.4)]' />
                        <span className='text-sm font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed italic'>
                          {t(`cta.point${i}` as any)}
                        </span>
                      </li>
                    ))}
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
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
