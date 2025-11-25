'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Edit3, Sparkles, Wand2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { BreathingAnimationText } from './breathing-animation-text'

const tabs = [
  {
    id: 'create',
    title: 'Create Mode',
    icon: Wand2,
    description:
      'Transform sketches, elevations and 3D models into photorealistic architectural renderings in seconds.',
    video: '/videos/showcase/create_showcase.webm',
    videoMobile: '/videos/showcase/compressed/create_showcase.webm',
    poster: '/modern-villa-render.png',
    features: ['AI-Powered Generation', 'Instant Results', 'Multiple Styles'],
  },
  {
    id: 'edit',
    title: 'Edit Mode',
    icon: Edit3,
    description:
      'Add People, subtract furniture, and modify facades in your designs with natural language.',
    video: '/videos/showcase/edit_showcase.webm',
    videoMobile: '/videos/showcase/compressed/edit_showcase.webm',
    poster: '/modern-office-building.png',
    features: [
      'Natural Language Editing',
      'Object Manipulation',
      'Smart Modifications',
    ],
  },
  {
    id: 'enhance',
    title: 'Upscale Mode',
    icon: Sparkles,
    description:
      'Sharpen existing renderings, or add extra detail to your designs with a single click.',
    video: '/videos/showcase/upscale_showcase.webm',
    videoMobile: '/videos/showcase/compressed/upscale_showcase.webm',
    poster: '/modern-interior-design.png',
    features: [
      'Quality Enhancement',
      'Detail Addition',
      'One-Click Processing',
    ],
  },
  // {
  //   id: "animate",
  //   title: "Animate Mode",
  //   icon: Video,
  //   description: "Use Cinematic Presets to bring your visualizations to life in seconds.",
  //   video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.webm",
  //   poster: "/modern-apartment-complex.png",
  //   features: ["Cinematic Presets", "Life-like Animation", "Quick Generation"]
  // }
]

// Video cache
const videoCache = new Map<string, HTMLVideoElement>()

export function TabVideoShowcase() {
  const [activeTab, setActiveTab] = useState('create')
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set())
  const [videoLoadError, setVideoLoadError] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoSectionRef = useRef<HTMLDivElement>(null)
  // Add this hook at the top of your component (after existing useState declarations)
  const [isMobile, setIsMobile] = useState(false)

  const activeTabData = tabs.find(tab => tab.id === activeTab)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Smooth spring animations for video scaling
  const titleY = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -50]), {
    stiffness: 300,
    damping: 30,
  })

  const videoScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]),
    { stiffness: 400, damping: 40 }
  )
  const videoY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]),
    { stiffness: 400, damping: 40 }
  )

  // Preload videos when component mounts
  useEffect(() => {
    const preloadVideo = (src: string) => {
      if (videoCache.has(src) || loadedVideos.has(src)) return

      const video = document.createElement('video')
      video.preload = 'metadata'
      video.src = src
      video.muted = true // Ensure muted for autoplay
      video.load()

      video.addEventListener('loadedmetadata', () => {
        videoCache.set(src, video)
        setLoadedVideos(prev => new Set([...prev, src]))
      })

      video.addEventListener('error', e => {
        console.error('Failed to preload video:', src, e)
      })
    }

    // Load active tab video first
    if (activeTabData?.video) {
      preloadVideo(activeTabData.video)
    }

    // Then preload other videos with delay
    const timeouts = tabs.map((tab, index) =>
      setTimeout(() => preloadVideo(tab.video), index * 1000)
    )

    return () => timeouts.forEach(clearTimeout)
  }, [activeTabData])

  // Add this after your existing useEffect hooks (around line 150)
  useEffect(() => {
    const handleUserInteraction = () => {
      const videos = document.querySelectorAll('video')
      videos.forEach(video => {
        if (video.paused) {
          video.play().catch(error => {
            console.log('Failed to play video after interaction:', error)
          })
        }
      })
    }

    // Detect iOS/mobile
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    const isMobileBrowser = window.innerWidth < 768

    if (isIOS || isMobileBrowser) {
      // Add multiple event listeners for different interaction types
      const events = ['touchstart', 'touchend', 'click', 'scroll', 'keydown']

      events.forEach(eventType => {
        document.addEventListener(eventType, handleUserInteraction, {
          once: true,
          passive: true,
        })
      })

      return () => {
        events.forEach(eventType => {
          document.removeEventListener(eventType, handleUserInteraction)
        })
      }
    }
  }, [])

  // Add this useEffect after your existing useEffect hooks
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      ref={containerRef}
      className='relative overflow-hidden mx-auto flex max-w-[95%] md:max-w-[65%] w-full flex-col md:px-4 py-16 text-neutral-800 dark:text-neutral-200'
      style={{ backgroundColor: '#fcfcfd' }}
    >
      {/* Title Section */}
      <motion.div
        className='flex w-full flex-col items-center justify-center gap-2 text-center mb-16'
        style={{ y: titleY }}
      >
        <BreathingAnimationText animationType='black-gray'>
          <motion.h1
            className='mb-2 text-[30px] font-medium !leading-tight text-neutral-800 dark:text-neutral-200'
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.span
              className='text-black dark:text-white font-normal'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              FROM CONCEPT TO
            </motion.span>
            <br />
            <motion.span
              className='text-neutral-800 dark:text-white font-normal'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              ANIMATION
            </motion.span>
          </motion.h1>
        </BreathingAnimationText>
        <BreathingAnimationText animationType='black-gray'>
          <motion.p
            className='mx-auto mb-2 px-4 text-[14px] font-thin text-neutral-800 dark:text-neutral-200 md:max-w-2xl md:px-24'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            Leverage best in class AI Models to bring any design to life, in any
            style with natural language and no training required.
          </motion.p>
        </BreathingAnimationText>
      </motion.div>

      <div id='create' />
      <div id='edit' />
      <div id='enhance' />
      <div id='demo' />

      {/* Video Section - Scrollable */}
      <motion.div
        ref={videoSectionRef}
        className='flex w-full flex-col items-center justify-center mb-16'
        style={{ scale: videoScale, y: videoY }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className='relative w-full h-full mx-auto px-4'>
          {activeTabData ? (
            // Replace your existing motion.video component with this updated version:
            <div className='flex justify-center items-center w-full'>
              <motion.video
                key={`video-${activeTab}`}
                ref={el => {
                  if (el) {
                    // Force play on iOS after element is created
                    const playVideo = async () => {
                      try {
                        // Small delay to ensure video is ready
                        await new Promise(resolve => setTimeout(resolve, 100))
                        if (el.paused) {
                          await el.play()
                        }
                      } catch (error) {
                        console.log(
                          'Autoplay prevented, waiting for user interaction:',
                          error
                        )
                      }
                    }
                    playVideo()
                  }
                }}
                className='md:w-1/2  object-contain'
                src={isMobile ? activeTabData.videoMobile : activeTabData.video}
                poster={activeTabData.poster}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                preload='auto'
                controls={false}
                webkit-playsinline='true'
                x5-playsinline='true'
                onLoadStart={() => {
                  const videoSrc = isMobile
                    ? activeTabData.videoMobile
                    : activeTabData.video
                  setVideoLoadError(null)
                }}
                onLoadedData={e => {
                  const video = e.currentTarget
                  const videoSrc = isMobile
                    ? activeTabData.videoMobile
                    : activeTabData.video
                  setVideoLoadError(null)

                  // Try to play immediately when data is loaded
                  if (video.paused) {
                    video.play().catch(console.error)
                  }
                }}
                onCanPlay={e => {
                  const video = e.currentTarget
                  const videoSrc = isMobile
                    ? activeTabData.videoMobile
                    : activeTabData.video

                  // Force play when video can play
                  if (video.paused) {
                    video.play().catch(console.error)
                  }
                }}
                onCanPlayThrough={e => {
                  const video = e.currentTarget
                  const videoSrc = isMobile
                    ? activeTabData.videoMobile
                    : activeTabData.video

                  // Final attempt to force play
                  if (video && video.paused) {
                    video.play().catch(error => {
                      console.error('Autoplay failed:', error)
                      setVideoLoadError(`Autoplay blocked: ${error.message}`)
                    })
                  }
                }}
                onError={e => {
                  const videoSrc = isMobile
                    ? activeTabData.videoMobile
                    : activeTabData.video
                  console.error('Video error:', e, videoSrc)
                  setVideoLoadError(videoSrc)
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
          ) : (
            <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-gray-200 to-gray-300  overflow-hidden'>
              {videoLoadError ? (
                <div className='absolute inset-0 flex items-center justify-center bg-red-50'>
                  <div className='text-center p-8'>
                    <div className='text-red-500 text-lg mb-2'>
                      Failed to load video
                    </div>
                    <div className='text-red-400 text-sm'>{videoLoadError}</div>
                    <button
                      onClick={() => {
                        setVideoLoadError(null)
                        setActiveTab(activeTab) // Force reload
                      }}
                      className='mt-4 px-4 py-2 bg-red-500 text-white hover:bg-red-600'
                    >
                      Retry
                    </button>
                  </div>
                </div>
              ) : (
                <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-gray-200 to-gray-300  overflow-hidden'>
                  {/* Video skeleton background */}
                  <div className='absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse' />

                  {/* Skeleton play button */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-16 h-16 bg-white/20  flex items-center justify-center animate-pulse'>
                      <div
                        className='w-6 h-6 bg-white/40  animate-pulse'
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                      />
                    </div>
                  </div>

                  {/* Skeleton controls bar */}
                  <div className='absolute bottom-4 left-4 right-4'>
                    <div className='bg-black/20  p-3 backdrop-blur-sm'>
                      <div className='flex items-center gap-3'>
                        <div className='w-4 h-4 bg-white/30 animate-pulse' />
                        <div className='flex-1 h-1 bg-white/20 animate-pulse' />
                        <div className='w-8 h-3 bg-white/30 animate-pulse' />
                      </div>
                    </div>
                  </div>

                  {/* Loading text */}
                  <div className='absolute top-4 left-4'>
                    <div className='bg-black/20  px-3 py-1 backdrop-blur-sm'>
                      <div className='text-white/70 text-sm animate-pulse'>
                        {videoLoadError
                          ? 'Error loading video...'
                          : 'Loading video...'}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Tabs Section - Appears after video */}
      <motion.div
        className='w-full max-w-4xl mx-auto px-4'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-4'>
          {tabs.map((tab, index) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <div key={tab.id}>
                {isActive ? (
                  <div className='relative w-full'>
                    {/* Animated border background */}
                    {/* <div className="absolute inset-0  bg-gradient-to-r from-[#ff8c00] via-[#ff3636] to-[#ff8c00] p-[2px] animate-gradient-x">
                      <div className="h-full w-full  bg-white" />
                    </div>
                     */}
                    {/* Moving border effect */}
                    <MovingBorderButton
                      borderRadius='0rem'
                      className='relative bg-transparent border-0 text-black cursor-pointer transition-all duration-300 p-0 h-auto w-full'
                      containerClassName='w-full h-auto'
                      borderClassName='h-1 w-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-90 blur-[0.5px]'
                      duration={2000}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <Card className='bg-white dark:bg-gray-800 border-0 hover:shadow-md px-2 md:px-4 pb-6 pt-2 md:pt-4 w-full h-full shadow-sm relative z-10'>
                        <CardContent className='p-1 md:p-3 md:min-h-[200px] flex flex-col'>
                          <motion.div
                            className='flex items-start md:items-center md:flex-row flex-col gap-2 mb-3'
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className='p-1 bg-black dark:bg-gray-800'
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Icon className='w-3 h-3 text-white' />
                            </motion.div>
                            <BreathingAnimationText animationType='black-gray'>
                              <motion.h3
                                className='text-xs md:text-sm font-bold text-black dark:text-white'
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                viewport={{ once: true }}
                              >
                                {tab.title}
                              </motion.h3>
                            </BreathingAnimationText>
                          </motion.div>

                          <BreathingAnimationText animationType='black-gray'>
                            <motion.p
                              className='text-xs text-gray-600 md:text-center text-left dark:text-gray-300 mb-3 leading-relaxed line-clamp-5 md:line-clamp-3'
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                              viewport={{ once: true }}
                            >
                              {tab.description}
                            </motion.p>
                          </BreathingAnimationText>

                          <motion.div
                            className='space-y-1 flex-1 md:block hidden'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                          >
                            {tab.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                className='flex items-center gap-1.5'
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: 0.5 + idx * 0.1,
                                }}
                                viewport={{ once: true }}
                              >
                                <div className='w-1 h-1  flex-shrink-0 bg-black dark:bg-gray-300' />
                                <BreathingAnimationText animationType='black-gray'>
                                  <span className='text-xs text-gray-500 dark:text-gray-400 leading-tight truncate'>
                                    {feature}
                                  </span>
                                </BreathingAnimationText>
                              </motion.div>
                            ))}
                          </motion.div>
                        </CardContent>
                      </Card>
                    </MovingBorderButton>
                  </div>
                ) : (
                  <Card
                    className='cursor-pointer transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md px-2 md:px-4 pb-6 pt-2 md:pt-4'
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <CardContent className='p-1 md:p-3 md:min-h-[200px] flex flex-col'>
                      <motion.div
                        className='flex items-start md:items-center md:flex-row flex-col gap-2 mb-3'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className='p-1 bg-gray-100 dark:bg-gray-700'
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className='w-3 h-3 text-gray-600 dark:text-gray-300' />
                        </motion.div>
                        <BreathingAnimationText animationType='black-gray'>
                          <motion.h3
                            className='text-xs md:text-sm font-bold text-gray-900 dark:text-white'
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            {tab.title}
                          </motion.h3>
                        </BreathingAnimationText>
                      </motion.div>

                      <BreathingAnimationText animationType='black-gray'>
                        <motion.p
                          className='text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed line-clamp-5 md:line-clamp-3'
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          {tab.description}
                        </motion.p>
                      </BreathingAnimationText>

                      <motion.div
                        className='space-y-1 flex-1 md:block hidden'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {tab.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className='flex items-center gap-1.5'
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.5 + idx * 0.1,
                            }}
                            viewport={{ once: true }}
                          >
                            <div className='w-1 h-1  flex-shrink-0 bg-gray-400' />
                            <BreathingAnimationText animationType='black-gray'>
                              <span className='text-xs text-gray-500 dark:text-gray-400 leading-tight truncate'>
                                {feature}
                              </span>
                            </BreathingAnimationText>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
