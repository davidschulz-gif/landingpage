'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import BookingDemoClassForm from './demo-class-boooking-form'

export function DemoBookingSection() {
  const t = useTranslations('ConciergePricing')

  return (
    <section
      className='py-24 relative flex flex-col justify-center overflow-hidden px-4'
      style={{ backgroundColor: '#fcfcfd' }}
      id='demo-booking'
    >
      <div className='w-full max-w-7xl mx-auto px-4 relative z-10'>
        <motion.div
          className='text-center mb-12 relative z-40'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2
            className='text-[30px] sm:text-4xl font-normal text-black mb-6'
            style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
          >
            {t('title')}
          </h2>

          <div className='flex flex-col items-center mb-8'>
            <div className='bg-site-white border border-black rounded-none p-4 max-w-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
              <p className='text-gray-900 text-center font-medium font-space-grotesk'>
                <span className='font-bold text-black text-lg'>
                  {t('subtitle')}
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
           className='w-full max-w-md mx-auto z-10'
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
           viewport={{ once: true, margin: '-50px' }}
        >
          <div className='bg-white p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100'>
             <BookingDemoClassForm />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
