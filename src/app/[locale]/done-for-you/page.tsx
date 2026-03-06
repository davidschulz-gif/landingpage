'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, MessageSquare, MonitorPlay, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ConciergePricingSection = dynamic(
  () =>
    import('@/components/concierge-pricing-section').then(
      mod => mod.ConciergePricingSection
    ),
  {
    ssr: false,
    loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
  }
)

export default function DoneForYouPage() {
  const t = useTranslations('BilderFlatrate')
  return (
    <div className='relative w-full bg-white dark:bg-neutral-950 min-h-screen font-sans'>
      {/* Navbar */}
      <NavbarDemo />

      <main className='flex flex-col w-full pb-20'>
        {/* Hero Section */}
        <section className='relative pt-32 pb-20 md:pt-48 md:pb-32 px-4'>
          <div className='max-w-4xl mx-auto text-center space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className='inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1.5 mb-8 text-sm font-semibold uppercase tracking-widest text-neutral-900 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100'>
                {t('hero.badge')}
              </div>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6'>
                {t('hero.title1')} <br className='hidden md:block' /> {t('hero.title2')}
              </h1>
              <p className='text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium mb-10'>
                {t('hero.subtitle1')} <br className='hidden md:block' />
                {t('hero.subtitle2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='flex flex-col items-center gap-6'
            >
              <p className='text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl'>
                {t('hero.description1')}<br />
                {t('hero.description2')}<br />
                <strong dangerouslySetInnerHTML={{ __html: t.raw('hero.description3') }} />
              </p>
              
              <Link href='mailto:hello@typus.ai'>
                <button className='group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-black px-8 py-4 text-lg font-medium text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-xl'>
                  <span className='relative z-10'>{t('hero.cta')}</span>
                  <ArrowRight className='relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1' />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className='py-20 bg-neutral-50 dark:bg-neutral-900 px-4 border-y border-neutral-200 dark:border-neutral-800'>
          <div className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight'>
                  {t('problem.title1')} <br/> {t('problem.title2')}
                </h2>
                <div className='space-y-4 text-lg text-neutral-600 dark:text-neutral-400'>
                  <p>{t('problem.subtitle')}</p>
                  <ul className='space-y-4 mt-6'>
                    <li className='flex items-center gap-3'>
                      <div className='bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded-full'>
                        <span className='font-bold block'>❌</span>
                      </div>
                      <span className='font-medium text-neutral-800 dark:text-neutral-200'>{t('problem.point1')}</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <div className='bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded-full'>
                        <span className='font-bold block'>❌</span>
                      </div>
                      <span className='font-medium text-neutral-800 dark:text-neutral-200'>{t('problem.point2')}</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <div className='bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded-full'>
                        <span className='font-bold block'>❌</span>
                      </div>
                      <span className='font-medium text-neutral-800 dark:text-neutral-200'>{t('problem.point3')}</span>
                    </li>
                  </ul>
                  <p className='mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800'>
                    {t('problem.conclusion')}
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='bg-white dark:bg-neutral-950 p-8 md:p-10 shadow-sm border border-neutral-200 dark:border-neutral-800'
              >
                <h3 className='text-xl font-bold mb-6 text-neutral-900 dark:text-white'>{t('problem.meaningTitle')}</h3>
                <div className='space-y-6'>
                  <div className='flex gap-4'>
                    <div className='mt-1 text-red-500'>
                      <Clock className='w-6 h-6' />
                    </div>
                    <div>
                      <h4 className='font-bold text-neutral-900 dark:text-white'>{t('problem.meaning1Title')}</h4>
                      <p className='text-neutral-500 dark:text-neutral-400 text-sm mt-1'>{t('problem.meaning1Desc')}</p>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='mt-1 text-red-500'>
                      <MessageSquare className='w-6 h-6' />
                    </div>
                    <div>
                      <h4 className='font-bold text-neutral-900 dark:text-white'>{t('problem.meaning2Title')}</h4>
                      <p className='text-neutral-500 dark:text-neutral-400 text-sm mt-1'>{t('problem.meaning2Desc')}</p>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='mt-1 text-red-500'>
                      <MonitorPlay className='w-6 h-6' />
                    </div>
                    <div>
                      <h4 className='font-bold text-neutral-900 dark:text-white'>{t('problem.meaning3Title')}</h4>
                      <p className='text-neutral-500 dark:text-neutral-400 text-sm mt-1'>{t('problem.meaning3Desc')}</p>
                    </div>
                  </div>
                </div>
                
                <div className='mt-8 p-4 bg-neutral-100 dark:bg-neutral-900 text-center font-medium text-neutral-800 dark:text-neutral-200'>
                  {t('problem.finalConclusion')}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className='py-24 px-4'>
          <div className='max-w-5xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='mb-16'
            >
              <h2 className='text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6'>
                {t('solution.title')}
              </h2>
              <p className='text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto'>
                {t('solution.subtitle')}
              </p>
            </motion.div>

            <motion.div 
              className='grid text-left grid-cols-1 md:grid-cols-3 gap-8 relative'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Connecting line for desktop */}
              <div className='hidden md:block absolute top-[45px] left-[15%] right-[15%] h-0.5 bg-neutral-200 dark:bg-neutral-800 -z-10' />

              <div className='bg-white dark:bg-neutral-950 p-8 border border-neutral-200 dark:border-neutral-800 relative shadow-sm'>
                <div className='w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl mb-6'>
                  1
                </div>
                <h3 className='text-xl font-bold mb-3 text-neutral-900 dark:text-white'>{t('solution.step1Title')}</h3>
                <p className='text-neutral-600 dark:text-neutral-400'>{t('solution.step1Desc')}</p>
              </div>

              <div className='bg-white dark:bg-neutral-950 p-8 border border-neutral-200 dark:border-neutral-800 relative shadow-sm'>
                <div className='w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl mb-6'>
                  2
                </div>
                <h3 className='text-xl font-bold mb-3 text-neutral-900 dark:text-white'>{t('solution.step2Title')}</h3>
                <p className='text-neutral-600 dark:text-neutral-400'>{t('solution.step2Desc')}</p>
              </div>

              <div className='bg-white dark:bg-neutral-950 p-8 border border-neutral-200 dark:border-neutral-800 relative shadow-sm'>
                <div className='w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl mb-6'>
                  3
                </div>
                <h3 className='text-xl font-bold mb-3 text-neutral-900 dark:text-white'>{t('solution.step3Title')}</h3>
                <p className='text-neutral-600 dark:text-neutral-400'>{t('solution.step3Desc')}</p>
              </div>
            </motion.div>
            
            <div className='mt-16 flex flex-wrap justify-center gap-4 text-sm md:text-base font-bold uppercase tracking-widest text-neutral-500'>
              <span>{t('solution.tag1')}</span>
              <span className='text-center'>•</span>
              <span>{t('solution.tag2')}</span>
              <span className='text-center'>•</span>
              <span>{t('solution.tag3')}</span>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 bg-neutral-900 text-white px-4'>
          <div className='max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <Users className='w-16 h-16 mx-auto mb-6 text-neutral-400' />
              <h2 className='text-3xl md:text-5xl font-bold mb-6'>
                {t('benefits.title')}
              </h2>
              <p className='text-xl text-neutral-400 max-w-2xl mx-auto'>
                {t('benefits.subtitle')}
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='bg-neutral-800 p-8 border border-neutral-700'>
                <ul className='space-y-6'>
                  <li className='flex items-start gap-4'>
                    <CheckCircle2 className='w-6 h-6 text-neutral-300 shrink-0 mt-0.5' />
                    <div>
                      <h4 className='font-bold text-lg mb-1'>{t('benefits.benefit1Title')}</h4>
                      <p className='text-neutral-400'>{t('benefits.benefit1Desc')}</p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <CheckCircle2 className='w-6 h-6 text-neutral-300 shrink-0 mt-0.5' />
                    <div>
                      <h4 className='font-bold text-lg mb-1'>{t('benefits.benefit2Title')}</h4>
                      <p className='text-neutral-400'>{t('benefits.benefit2Desc')}</p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <CheckCircle2 className='w-6 h-6 text-neutral-300 shrink-0 mt-0.5' />
                    <div>
                      <h4 className='font-bold text-lg mb-1'>{t('benefits.benefit3Title')}</h4>
                      <p className='text-neutral-400'>{t('benefits.benefit3Desc')}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='flex items-center justify-center p-8 bg-neutral-800/50 border border-neutral-700 text-center'>
                <p className='text-xl md:text-2xl font-medium leading-relaxed'>
                  {t('benefits.summary1')} <br/>
                  <span className='font-bold text-white'>{t('benefits.summary2')}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className='py-24 px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6'>
                {t('pricing.title1')} <br className='hidden md:block'/> {t('pricing.title2')}
              </h2>
              <p className='text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-16'>
                {t('pricing.subtitle')}
              </p>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left'>
                <div className='p-8 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900'>
                  <h3 className='text-xl font-bold mb-6 text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-4'>{t('pricing.marketTitle')}</h3>
                  <ul className='space-y-4'>
                    <li className='flex justify-between items-center'>
                      <span className='text-neutral-600 dark:text-neutral-400 font-medium'>{t('pricing.marketMin')}</span>
                      <span className='font-bold text-neutral-900 dark:text-white text-lg'>{t('pricing.marketMinPrice')}</span>
                    </li>
                    <li className='flex justify-between items-center'>
                      <span className='text-neutral-600 dark:text-neutral-400 font-medium'>{t('pricing.marketAvg')}</span>
                      <span className='font-bold text-neutral-900 dark:text-white text-lg'>{t('pricing.marketAvgPrice')}</span>
                    </li>
                    <li className='flex justify-between items-center'>
                      <span className='text-neutral-600 dark:text-neutral-400 font-medium'>{t('pricing.marketHigh')}</span>
                      <span className='font-bold text-neutral-900 dark:text-white text-lg'>{t('pricing.marketHighPrice')}</span>
                    </li>
                  </ul>
                  <div className='mt-6 pt-4 text-center text-sm text-neutral-500 font-medium'>
                    {t('pricing.marketNote')}
                  </div>
                </div>

                <div className='p-8 border-2 border-black dark:border-white bg-white dark:bg-black shadow-xl relative mt-4 md:mt-0 md:-mt-4'>
                  <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-1 text-xs font-bold uppercase tracking-widest'>
                    {t('pricing.flatBadge')}
                  </div>
                  <h3 className='text-xl font-bold mb-6 text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-4'>{t('pricing.flatTitle')}</h3>
                  <div className='space-y-4'>
                    <div className='flex justify-center items-end gap-2'>
                      <span className='font-bold text-4xl text-neutral-900 dark:text-white'>{t('pricing.flatPrice1')}</span>
                      <span className='text-neutral-500 font-medium pb-1'>{t('pricing.flatOr')}</span>
                      <span className='font-bold text-4xl text-neutral-900 dark:text-white'>{t('pricing.flatPrice2')}</span>
                    </div>
                    <div className='text-center text-neutral-600 dark:text-neutral-400 font-medium mt-2'>
                       {t('pricing.flatPerMonth')}
                    </div>
                  </div>
                  <div className='mt-8 p-4 bg-neutral-100 dark:bg-neutral-900 text-center flex flex-col items-center justify-center'>
                    <p className='font-bold text-neutral-900 dark:text-white text-center' dangerouslySetInnerHTML={{ __html: t.raw('pricing.flatNote') }}/>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Concierge Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <ConciergePricingSection />
        </motion.div>

        {/* Final CTA */}
        <section className='py-24 px-4 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-8'>
              {t('cta.title')}
            </h2>
            <Link href='mailto:hello@typus.ai'>
              <button className='group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-black px-10 py-5 text-lg font-medium text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-xl'>
                <span className='relative z-10'>{t('cta.button')}</span>
                <ArrowRight className='relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1' />
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
