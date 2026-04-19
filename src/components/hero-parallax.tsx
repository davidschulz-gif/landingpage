'use client'
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import { ActionButton } from './action-button'
import { BreathingAnimationText } from './breathing-animation-text'
import HeroEmailForm from './hero-email-form'
import { HeroVideoPlayer } from './hero-video-player'
import { GoogleLogo } from './icons/google-logo'
import { appUrl } from '@/lib/constants'

export const HeroParallax = ({
  row123Products,
  row4Products,
}: {
  row123Products: {
    title: string
    link: string
    thumbnail: string
  }[]
  row4Products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  // Optimize: Reduce image count for better performance
  const firstRow = useMemo(() => row123Products.slice(0, 4), [row123Products])
  const secondRow = useMemo(() => row123Products.slice(4, 8), [row123Products])
  const thirdRow = useMemo(() => row123Products.slice(8, 12), [row123Products])
  const fourthRow = useMemo(() => row4Products.slice(0, 8), [row4Products])

  const ref = React.useRef(null)
  const [time, setTime] = useState(0)
  const [isInView, setIsInView] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Optimize: Add intersection observer for better performance
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // Optimize: Use more performant spring config
  const springConfig = { stiffness: 300, damping: 30, bounce: 0 }

  // Move all hook calls to top level to follow Rules of Hooks
  const baseTranslateXTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 300]
  )
  const baseTranslateXReverseTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -300]
  )
  const rotateXTransform = useTransform(scrollYProgress, [0, 0.3], [15, 0])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.3], [0.2, 1])
  const rotateZTransform = useTransform(scrollYProgress, [0, 0.3], [8, 0])
  const translateYTransform = useTransform(scrollYProgress, [0, 0.3], [-200, 0])
  const scaleTransform = useTransform(scrollYProgress, [0, 0.3], [0.95, 1])

  const baseTranslateX = useSpring(baseTranslateXTransform, springConfig)
  const baseTranslateXReverse = useSpring(
    baseTranslateXReverseTransform,
    springConfig
  )
  const rotateX = useSpring(rotateXTransform, springConfig)
  const opacity = useSpring(opacityTransform, springConfig)
  const rotateZ = useSpring(rotateZTransform, springConfig)
  const translateY = useSpring(translateYTransform, springConfig)
  const scale = useSpring(scaleTransform, springConfig)

  // Optimize: Memoize transforms to prevent recalculation
  const transforms = useMemo(
    () => ({
      baseTranslateX,
      baseTranslateXReverse,
      rotateX,
      opacity,
      rotateZ,
      translateY,
      scale,
    }),
    [
      baseTranslateX,
      baseTranslateXReverse,
      rotateX,
      opacity,
      rotateZ,
      translateY,
      scale,
    ]
  )

  return (
    <div
      ref={ref}
      data-hero-section
      className='w-full max-w-[100%] md:max-w-[80%] mx-auto h-auto md:h-[220vh] pt-8 pb-16 md:pt-12 md:pb-20 overflow-clip antialiased relative flex flex-col self-auto [perspective:1500px] [transform-style:preserve-3d] bg-transparent dark:bg-transparent'
    >
      <Header />
      <motion.div
        style={{
          rotateX: transforms.rotateX,
          rotateZ: transforms.rotateZ,
          translateY: transforms.translateY,
          opacity: transforms.opacity,
          scale: transforms.scale,
        }}
        className='relative z-10'
      >
        {isInView && (
          <>
            <InfiniteMarqueeRow
              products={firstRow}
              baseTranslate={transforms.baseTranslateX}
              time={time}
              direction={1}
              speed={20} // Reduced from 30
              className='mb-6 md:mb-8'
              isFirstRow={true}
            />
            <InfiniteMarqueeRow
              products={secondRow}
              baseTranslate={transforms.baseTranslateXReverse}
              time={time}
              direction={-1}
              speed={18} // Reduced from 25
              className='mb-6 md:mb-8'
            />
            <InfiniteMarqueeRow
              products={thirdRow}
              baseTranslate={transforms.baseTranslateX}
              time={time}
              direction={1}
              speed={22} // Reduced from 35
              className='mb-6 md:mb-8'
            />
            <InfiniteMarqueeRow
              products={fourthRow}
              baseTranslate={transforms.baseTranslateXReverse}
              time={time}
              direction={-1}
              speed={20} // Reduced from 28
              className='mb-4'
            />
          </>
        )}
      </motion.div>
    </div>
  )
}

export const Header = () => {
  const t = useTranslations('Hero')
  const locale = useLocale()
  const [currentIndex, setCurrentIndex] = useState(0)

  const titles = t.raw('titles') as string[]
  const descriptions = t.raw('descriptions') as string[]

  const videoSource =
    locale === 'de' ? '/hero-videos/german.webm' : '/hero-videos/english.webm'

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [titles.length])

  return (
    <div className='max-w-7xl z-50 relative mx-auto pt-0 pb-0 md:pt-32 md:pb-0 lg:pt-0 lg:pb-24 px-6 md:px-0 w-full'>
      <div className='md:pb-12 relative'>
        {/* Top Section - Left and Right */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center mb-12 lg:mb-0'>
          {/* Left Side - Headline and Description */}
          <div className='relative max-w-lg flex-1'>
            <BreathingAnimationText animationType='black-gray'>
              <motion.h1
                className='text-[36px] font-normal relative z-999 text-black dark:text-white leading-tight mb-1 uppercase h-[135px] sm:h-[90px] md:h-[85px]'
                style={{ fontFamily: "var(--font-soyuz-grotesk),'Soyuz Grotesk', sans-serif" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <AnimatePresence mode='wait'>
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className='text-black dark:text-white absolute left-0'
                  >
                    {titles[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>
            </BreathingAnimationText>

            <div className='h-[110px] sm:h-[80px] md:h-[72px] relative overflow-hidden mb-6'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className='absolute inset-0'
                >
                  <BreathingAnimationText
                    animationType='black-gray'
                    className='z-999 text-[14px] leading-relaxed text-gray-700 dark:text-gray-300'
                  >
                    {descriptions[currentIndex]}
                  </BreathingAnimationText>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className='flex items-start gap-6 flex-col md:flex-row md:items-center'>
              <div className='w-auto'>
                <Link
                  href='https://www.google.com/maps/place/TYPUS.AI+formerly+YANUS.AI/@50.93654,6.9045451,662m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47bf254b60018897:0xe59bac1b8b968df2!8m2!3d50.93654!4d6.90712!16s%2Fg%2F11w9p4ttwz?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D'
                  target='_blank'
                  className='flex items-center'
                >
                  <GoogleLogo fontSize={24} className='me-4' />
                  <div className='flex items-center'>
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg
                        key={star}
                        className={`w-5 h-5 ${star <= 4
                          ? 'text-yellow-400'
                          : star === 5
                            ? 'text-gray-300'
                            : 'text-gray-300'
                          }`}
                        fill={
                          star <= 4 || (star === 5 && star <= 4.5)
                            ? 'currentColor'
                            : 'none'
                        }
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        {star === 5 ? (
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                            fill='url(#half-star)'
                          />
                        ) : (
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                          />
                        )}
                      </svg>
                    ))}
                    {/* Half star for 4.5 rating */}
                    <svg
                      className='w-5 h-5 text-yellow-400 absolute'
                      style={{ marginLeft: '80px' }}
                    >
                      <defs>
                        <linearGradient id='half-star'>
                          <stop offset='50%' stopColor='currentColor' />
                          <stop offset='50%' stopColor='#d1d5db' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <BreathingAnimationText animationType='black-gray'>
                    <span className='ml-2 text-sm font-medium text-gray-700'>
                      {t('rating')}
                    </span>
                  </BreathingAnimationText>
                </Link>
                <BreathingAnimationText animationType='black-gray'>
                  <span className='text-xs text-gray-500 mt-1 block'>
                    {t('reviewsCount')}
                  </span>
                </BreathingAnimationText>
              </div>
              <Image
                className='block w-auto h-10'
                src={
                  locale === 'de'
                    ? '/eu-kofinanziert-von-der-europaeischen-union.png'
                    : '/eu-kofinanziert-von-der-europaeischen-union-en.png'
                }
                alt=''
                style={{
                  transform: `scale(${locale === 'en' ? '2.5' : '1'})`,
                  padding: locale === 'en' ? '0 38px' : '0',
                }}
                width={200}
                height={200}
              />
            </div>

            {/* Small email form */}
            <HeroEmailForm />
          </div>

          {/* Right Side - Video */}
          <div className='relative w-full lg:w-auto lg:flex-1 flex justify-center lg:justify-end'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className='relative w-full max-w-md lg:max-w-lg xl:max-w-xl'
            >
              <HeroVideoPlayer
                src={videoSource}
                ariaLabel={
                  locale === 'de' ? 'Hero Video Deutsch' : 'Hero Video English'
                }
              />
            </motion.div>
          </div>
        </div>

        {/* Center - Logo, Title and Button */}
        <div className='flex flex-col items-center text-center pt-12 md:pt-20'>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='mb-0 flex flex-col items-center space-y-2'
          >
            <div className='bg-black size-4 m-3'></div>
            <span
              className='text-center uppercase'
              style={{
                fontFamily:
                  "var(--font-soyuz-grotesk), 'Soyuz Grotesk', serif",
                fontSize: '25px',
                fontWeight: 300,
                letterSpacing: '2.5px',
                lineHeight: '1.3em',
                color: '#000',
                textTransform: 'uppercase',
              }}
            >
              typus.AI
            </span>
          </motion.div>

          {/* Offers Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className='mt-10 w-full max-w-3xl mx-auto'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

              {([
                {
                  title: t('appOfferTitle') || 'APP OFFER',
                  features: [
                    t('features.createAccount'),
                    t('features.downloadPlugins'),
                    t('features.tutorial'),
                    t('features.stepByStep'),
                    t('features.caseStudies'),
                    t('features.welcomeGift'),
                  ],
                  href: `${appUrl}`,
                  label: t('goToApp'),
                  cardKey: 'app',
                },
                {
                  title: t('serviceOfferTitle') || 'SERVICE OFFER',
                  features: [
                    t('features.servicePersonalVisualizer'),
                    t('features.serviceVideoCall'),
                    t('features.serviceEmailComm'),
                    t('features.serviceDetailedFeedback'),
                    t('features.serviceImageRequest'),
                    t('features.serviceBookDemo'),
                  ],
                  href: '/done-for-you',
                  label: t('doneForYouService'),
                  cardKey: 'service',
                },
              ] as const).map((card, cardIdx) => (
                <motion.div
                  key={card.cardKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + cardIdx * 0.15, ease: 'easeOut' }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className='border border-black dark:border-white p-4 flex flex-col gap-3'
                >
                  {/* Title */}
                  <h3
                    className='text-center uppercase font-bold text-[11px] tracking-[0.18em] text-black dark:text-white pb-2.5 border-b border-black/10 dark:border-white/10'
                    style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                  >
                    {card.title}
                  </h3>

                  {/* Features */}
                  <div className='flex flex-col gap-1.5'>
                    {card.features.map((feature, i) => (
                      <motion.div
                        key={`${card.cardKey}-feat-${i}`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1.0 + cardIdx * 0.12 + i * 0.055, ease: 'easeOut' }}
                        className='flex items-start gap-2'
                      >
                        <div className='w-3.5 h-3.5 bg-black dark:bg-white flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <svg className='w-2 h-2 text-white dark:text-black' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                          </svg>
                        </div>
                        <span
                          className='text-[10px] font-medium text-black dark:text-white uppercase leading-tight'
                          style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className='mt-1'>
                    <ActionButton href={card.href} className='w-full'>
                      {card.label}
                    </ActionButton>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </div>
      </div>


      {/* Comparison Section
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <ComparisonSection />
      </motion.div> */}

      {/* Floating elements */}
      <motion.div
        className='absolute top-16 right-16 w-3 h-3 bg-blue-500/20  hidden md:block'
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='absolute bottom-24 left-24 w-4 h-4 bg-purple-500/15  hidden lg:block'
        animate={{
          y: [0, 12, 0],
          x: [0, 8, 0],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className='absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-500/25  hidden xl:block'
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </div>
  )
}

const InfiniteMarqueeRow = React.memo(
  ({
    products,
    baseTranslate,
    time,
    direction,
    speed,
    className,
    isFirstRow = false,
  }: {
    products: any[]
    baseTranslate: MotionValue<number>
    time: number
    direction: number
    speed: number
    className: string
    isFirstRow?: boolean
  }) => {
    // Optimize: Memoize calculations
    const cardWidth = useMemo(() => 280 + 20, [])
    const totalWidth = useMemo(
      () => products.length * cardWidth,
      [products.length, cardWidth]
    )
    const infiniteX = useMemo(
      () => (direction * time * speed) % totalWidth,
      [direction, time, speed, totalWidth]
    )

    // Move useTransform to top level to follow Rules of Hooks
    const transformX = useTransform(baseTranslate, value => value + infiniteX)

    return (
      <div
        className={`flex ${direction === 1 ? 'flex-row-reverse' : 'flex-row'
          } ${className}`}
      >
        <motion.div
          className='flex gap-5 will-change-transform'
          style={{
            x: transformX,
          }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={`${product.title}-${index}`}
              product={product}
              index={index}
              time={time}
              isFirstRow={isFirstRow}
            />
          ))}
        </motion.div>
      </div>
    )
  }
)

export const ProductCard = React.memo(
  ({
    product,
    index,
    time,
    isFirstRow,
  }: {
    product: {
      title: string
      link: string
      thumbnail: string
    }
    index: number
    time: number
    isFirstRow?: boolean
  }) => {
    // Optimize: Reduce animation complexity
    const rotateY = useMemo(
      () => Math.sin(time + index * 0.3) * 4,
      [time, index]
    ) // Reduced from 8
    const rotateX = useMemo(
      () => Math.cos(time + index * 0.2) * 2,
      [time, index]
    ) // Reduced from 4
    const floatY = useMemo(
      () => Math.sin(time * 1.5 + index * 0.5) * 3,
      [time, index]
    ) // Reduced from 5

    // Optimize: Memoize animation values
    const animationStyle = useMemo(
      () => ({
        rotateY,
        rotateX,
        y: floatY,
      }),
      [rotateY, rotateX, floatY]
    )

    return (
      <motion.div
        style={animationStyle}
        className='group/product cursor-pointer h-56 w-72 relative flex-shrink-0 overflow-hidden shadow-xl ease-out will-change-transform'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4, // Reduced from 0.6
          delay: index * 0.03, // Reduced from 0.05
          ease: 'easeOut',
        }}
      >
        <Link
          href={product.link}
          aria-label={product.title}
          className='block cursor-pointer absolute inset-0'
        >
          <Image
            src={product.thumbnail || '/placeholder.svg'}
            fill
            className='object-cover cursor-pointer ease-out'
            alt={product.title}
            sizes='(max-width: 768px) 280px, (max-width: 1024px) 320px, 400px'
            quality={60} // Reduced from 75
            priority={isFirstRow && index < 2} // Only first 2 images in first row
            loading={isFirstRow && index < 2 ? 'eager' : 'lazy'}
            placeholder='blur'
            blurDataURL='data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA'
          />
        </Link>
        <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 pointer-events-none'></div>
        {product.title && (
          <motion.div className='absolute bottom-4 left-4 right-4 flex justify-start z-20 pointer-events-none'>
            <div className='bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5'>
              <span
                className='text-white font-medium text-sm leading-tight'
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                {product.title}
              </span>
            </div>
          </motion.div>
        )}
        {/* Optimize: Remove floating animation for better performance */}
        {isFirstRow && index < 2 && (
          <motion.div
            className='absolute top-4 right-4 w-2 h-2 bg-white/60'
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 3, // Increased from 2
              repeat: Infinity,
              delay: index * 0.5, // Increased delay
            }}
          />
        )}
      </motion.div>
    )
  }
)
