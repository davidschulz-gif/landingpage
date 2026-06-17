'use client'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { BanknoteIcon, CheckCircle2, Clock, MessageSquare, ArrowRight } from 'lucide-react'

import { ActionButton } from '@/components/action-button'
import aiPulseAnimation from '../../public/lottie/ai-pulse.json'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const FeatureShowcase = dynamic(
  () => import('@/components/feature').then(mod => mod.FeatureShowcase),
  { ssr: false }
)

const HowItWorks = dynamic(
  () => import('@/components/how-it-works-done-for-you').then(mod => mod.HowItWorks),
  { ssr: false }
)

export function SolutionSection() {
  const t = useTranslations('BilderFlatrate')

  return (
    <div className="relative">
      {/* Problem Section Wrapper */}
      <div className="relative">
        <div className="flex items-center justify-center overflow-hidden z-10">
          <section className='w-full py-12 lg:py-20 bg-white dark:bg-black px-4'>
            <div className='max-w-5xl mx-auto'>
              {/* <div className='mb-12 md:mb-16 text-center'> */}
                {/* <h2
                  className='text-xl md:text-2xl font-bold text-neutral-900 dark:text-white leading-[1.3] mb-6'
                  style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
                >
                  {t('problem.statusQuoHeader')}
                </h2> */}
              {/* </div> */}

               <div className="">
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-center font-normal text-black dark:text-white  leading-none mb-4">
              {t('problem.dasProblem')}
            </h2>
          
          {/* </div> */}
        </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center'>
                <div>
                  <h2 className='text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight'>
                    {t('problem.title1')} <br /> {t('problem.title2')}
                  </h2>

                  <div className='space-y-6 text-sm md:text-base text-neutral-500 dark:text-neutral-400'>
                    <p className='font-medium text-neutral-800 dark:text-neutral-200'>{t('problem.subtitle')}</p>
                    <ul className='space-y-4 mt-6'>
                      {[t('problem.point1'), t('problem.point2'), t('problem.point3')].map((point, i) => (
                        <li key={i} className='flex items-center gap-4'>
                          <div className='w-5 h-5 bg-neutral-100  dark:bg-neutral-800 flex items-center justify-center flex-shrink-0'>
                            <span className='text-[12px] text-red-600'>✕</span>
                          </div>
                          <span style={{ fontFamily: 'sans-serif' }} className='font-normal text-neutral-600 dark:text-neutral-300'>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className='mt-8 pt-6 border-t text-xl border-neutral-100 dark:border-neutral-900'>
                      {t('problem.conclusion')}
                    </p>
                  </div>
                </div>

                <div className='bg-[#fcfcfd] dark:bg-neutral-900/50 p-8 md:p-12 border border-neutral-100 dark:border-neutral-800 shadow-[0_10px_40px_rgba(0,0,0,0.02)]'>
                  <h3 className='text-xs font-bold uppercase tracking-[0.2em] mb-8 text-neutral-400'>{t('problem.meaningTitle')}</h3>
                  <div className='space-y-8'>
                    {[
                      { icon: Clock, title: t('problem.meaning1Title'), desc: t('problem.meaning1Desc') },
                      { icon: MessageSquare, title: t('problem.meaning2Title'), desc: t('problem.meaning2Desc') },
                      { icon: BanknoteIcon, title: t('problem.meaning3Title'), desc: t('problem.meaning3Desc') }
                    ].map((item, i) => (
                      <div key={i} className='flex gap-5'>
                        <div className='mt-1 text-red-600 dark:text-red-500'>
                          <item.icon className='w-5 h-5' />
                        </div>
                        <div>
                          <h4 className='font-bold text-md text-neutral-900 dark:text-white uppercase tracking-wider mb-1'>{item.title}</h4>
                          <p style={{ fontFamily: 'sans-serif' }} className='text-neutral-500 dark:text-neutral-400 text-md font-normal leading-relaxed'>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='mt-10 p-4 border border-neutral-100 text-lg dark:border-neutral-800 bg-white dark:bg-black text-center  font-bold uppercase tracking-[0.1em] text-neutral-800 dark:text-neutral-200'>
                    {t('problem.finalConclusion')}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Benefits Section */}
      <section className='relative z-20 pt-12 lg:pt-20 bg-black text-white px-4 overflow-hidden '>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-20'>
            <h3 className='text-lg md:text-xl uppercase text-white mb-0'>
              {t('benefits.solutionHeader')}
            </h3>
            <div className='flex justify-center py-6'>
              <div className='w-24 h-24 sm:w-32 sm:h-32 relative flex items-center justify-center rounded-[40px]  shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:bg-transparent dark:shadow-none'>
                <Lottie
                  animationData={aiPulseAnimation}
                  loop={true}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <h2 className='text-3xl md:text-4xl  mb-4 '>
              {t('benefits.title')}
            </h2>
            <p className='text-sm md:text-base max-w-2xl mx-auto'>
              {t('benefits.subtitle')}
            </p>
          </div>
            
            <div className='overflow-hidden rounded-[50px] mb-12'>
            <div>
              <FeatureShowcase disableHeading={true} />
            </div>
          </div>


        </div>
      </section>

    </div>
  )
}
