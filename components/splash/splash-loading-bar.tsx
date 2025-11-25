'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function SplashLoadingBar() {
  const isMobile = useIsMobile()

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 z-20 ${
        isMobile ? 'pb-4' : 'pb-8'
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: isMobile ? 0.05 : 0.1,
          delay: isMobile ? 0.05 : 0.1,
        }}
        className={`flex flex-col items-center ${
          isMobile ? 'space-y-2' : 'space-y-4'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: isMobile ? 0.05 : 0.1,
            ease: 'easeOut',
          }}
        >
          <div className={`relative ${isMobile ? 'w-6 h-6' : 'w-8 h-8'}`}>
            <Image
              src='/logo/typus_logo_black.png'
              alt='Typus AI Logo'
              width={isMobile ? 24 : 32}
              height={isMobile ? 24 : 32}
              className='object-contain filter saturate-0'
              priority
              quality={isMobile ? 75 : 90}
            />
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div
          className={` overflow-hidden ${
            isMobile ? 'w-24 h-0.5' : 'w-32 h-0.5'
          }`}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        >
          <motion.div
            className='h-full '
            style={{ backgroundColor: 'rgb(0,0,0)' }}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{
              duration: isMobile ? 0.8 : 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </div>

        {/* INITIALIZING Text */}
        <motion.p
          className={`font-bold tracking-[0.15em] ${
            isMobile ? 'text-[0.5rem]' : 'text-[0.625rem]'
          }`}
          style={{
            color: 'rgb(0, 0, 0)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: isMobile ? 0.3 : 0.5,
          }}
        >
          INITIALIZING
        </motion.p>
      </motion.div>
    </div>
  )
}
