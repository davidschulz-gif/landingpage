'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { ActionButton } from './action-button'
import { BreathingAnimationText } from './breathing-animation-text'

export function ReviewsSection() {
  const t = useTranslations('Reviews')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      className='w-full max-w-[100%] md:max-w-[80%] mx-auto px-4 py-16 overflow-hidden relative'
      style={{ backgroundColor: '#fcfcfd' }}
      id='reviews'
    >
      {/* Featured Testimonial - Using dedicated component */}
      {/* <div className="max-w-2xl mx-auto">
          <FeaturedTestimonialSection />
        </div> */}
      {/* Header */}
      {/* <div className='my-12'>
        <motion.div
          className='text-center max-w-3xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BreathingAnimationText animationType='black-gray'>
            <h2
              className='text-[30px] font-normal text-black mb-6 font-soyuz-grotes'
            // style={{
            //   fontFamily: "'Soyuz Grotesk', sans-serif",
            // }}
            >
            
            </h2>
          </BreathingAnimationText>
        </motion.div>
      </div> */}

      <div className="mb-12 relative z-10 max-w-7xl mx-auto text-left px-4">
          <div className="">
            <h2 className="text-2xl text-center sm:text-3xl md:text-[32px] font-normal text-black dark:text-white tracking-tight leading-none mb-4">
              {t('title')}
            </h2>
          
          </div>
        </div>

      {/* Vertical Layout */}
      <div className='space-y-8'>
        {/* Animated Reviews - Full Width with 3 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <style jsx>{`
            #testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b {
              position: relative;
              border-radius: 16px;
              overflow: hidden;
            }
            #testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b::after {
              content: '';
              position: absolute;
              bottom: 0;
              right: 0;
              width: 100px;
              height: 50px;
              background: #fcfcfd;
              z-index: 10;
            }
          `}</style>
          <div className='w-full mx-auto bg-white/80 backdrop-blur-sm  shadow-xl border border-white/20 overflow-hidden'>
            <script
              type='text/javascript'
              src='https://testimonial.to/js/iframeResizer.min.js'
              async
            />
            <iframe
              id='testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b'
              src='https://embed-v2.testimonial.to/w/yanus?id=b6f883ac-9b79-48ea-b5f2-20cadc234b2b&columns=3'
              aria-label='Reviews'
              width='100%'
              height='600px'
              className=' overflow-hidden'
            ></iframe>
            <script
              type='text/javascript'
              dangerouslySetInnerHTML={{
                __html: `iFrameResize({log: false, checkOrigin: false}, '#testimonialto-b6f883ac-9b79-48ea-b5f2-20cadc234b2b');`,
              }}
            />
          </div>
        </motion.div>

        {/* View All Reviews Button */}
        <motion.div
          className='flex justify-center mt-8'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ActionButton href='https://testimonial.to/typus-ai/all'>
            {t('viewAllReviews')}
          </ActionButton>
        </motion.div>
      </div>
    </section>
  )
}
