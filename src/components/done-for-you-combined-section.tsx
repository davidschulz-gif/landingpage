'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ActionButton } from './action-button'
import { BreathingAnimationText } from './breathing-animation-text'
import BookingDemoClassForm from './demo-class-boooking-form'

export const DoneForYouCombinedSection = () => {
  const tPreview = useTranslations('BilderFlatrate.preview')
  const tBooking = useTranslations('ConciergePricing')
  const tPricing = useTranslations('Pricing')
  
  return (
    <section className='relative w-full overflow-hidden py-24 lg:py-32 my-10 border-y border-neutral-100 dark:border-neutral-800' style={{ backgroundColor: '#fcfcfd' }}>
      <div className='relative mx-auto max-w-5xl px-4 md:px-6 z-10'>
        
        {/* Section Header */}
        <div className='text-center mb-16 lg:mb-24 space-y-4'>
          <BreathingAnimationText animationType='black-gray' className='font-space-grotesk'>
            <h2 
              className='text-[20px] md:text-[26px] lg:text-[30px] font-normal text-black dark:text-white uppercase tracking-[0.2em]'
              style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}
            >
              {tBooking('title')}
            </h2>
          </BreathingAnimationText>
          <BreathingAnimationText animationType='black-gray'>
            <p 
              className='text-neutral-500 max-w-2xl mx-auto text-sm md:text-base font-space-grotesk'
              style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}
            >
              {tBooking('subtitle')}
            </p>
          </BreathingAnimationText>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start'>
          
          {/* Left Side - Preview Info */}
          <motion.div 
            className='w-full text-center lg:text-left space-y-6 lg:sticky lg:top-32'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div 
              className='inline-flex items-center rounded-none border border-neutral-200 bg-neutral-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-500 font-space-grotesk'
            >
              {tPreview('badge')}
            </div>
            
            <h3 
              className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black dark:text-white leading-[1.3] font-space-grotesk'
            >
              {tPreview('title')}
            </h3>
            
            <p className='text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg mx-auto lg:mx-0 font-space-grotesk'>
              {tPreview('subtitle')}
            </p>
            
            <div className='pt-6 flex justify-center lg:justify-start'>
              <ActionButton 
                href='/done-for-you'
                icon={<ArrowRight className='w-4 h-4' />}
              >
                {tPreview('button')}
              </ActionButton>
            </div>
          </motion.div>

          {/* Right Side - Booking Form */}
          <motion.div
             className='w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 flex flex-col items-center lg:items-start space-y-8'
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true, margin: '-50px' }}
          >
            <div className='w-full space-y-6'>
              <h4 
                className='text-lg md:text-xl font-bold text-black dark:text-white font-space-grotesk text-center lg:text-left'
              >
                {tPricing('bookDemo')}
              </h4>
              
              <div className='bg-white dark:bg-black w-full p-6 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-neutral-100 dark:border-neutral-900 rounded-none'>
                 <BookingDemoClassForm showTitle={false} />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
