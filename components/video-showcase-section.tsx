"use client"
import React, { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Users, Sparkles, FolderKanban } from "lucide-react"
import { VideoPlayer } from "@/components/video/player"
import { BreathingAnimationText } from "./breathing-animation-text";

// Video cache for performance
const videoCache = new Map<string, HTMLVideoElement>();

export const VideoShowcaseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoSectionRef = useRef<HTMLDivElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const isInView = useInView(containerRef, { once: true, margin: "200px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Preload main video when component comes into view
  useEffect(() => {
    if (!isInView) return;

    const videoSrc = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    
    if (videoCache.has(videoSrc)) {
      setVideoLoaded(true);
      return;
    }

    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = videoSrc;
    video.load();
    
    video.addEventListener('loadedmetadata', () => {
      videoCache.set(videoSrc, video);
      setVideoLoaded(true);
    });

    video.addEventListener('error', () => {
      console.warn('Video failed to load:', videoSrc);
      setVideoLoaded(true); // Still show player even if preload fails
    });
  }, [isInView]);

  // Smooth spring animations
  const titleOpacity = useSpring(useTransform(scrollYProgress, [0, 0.4], [1, 0]), { stiffness: 300, damping: 30 })
  const titleScale = useSpring(useTransform(scrollYProgress, [0, 0.4], [1, 0.7]), { stiffness: 300, damping: 30 })
  const titleY = useSpring(useTransform(scrollYProgress, [0, 0.4], [0, -100]), { stiffness: 300, damping: 30 })
  
  const videoScale = useSpring(useTransform(scrollYProgress, [0.1, 0.9], [0.8, 1.1]), { stiffness: 400, damping: 40 })
  const videoY = useSpring(useTransform(scrollYProgress, [0.1, 0.9], [50, -50]), { stiffness: 400, damping: 40 })
  const videoOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]), { stiffness: 300, damping: 30 })

  return (
    <section 
      ref={containerRef}
      className="relative mx-auto flex max-w-7xl flex-col px-4 py-0 text-neutral-800 dark:text-neutral-200 pt-14 sm:pt-16 h-[200vh]"
    >
      {/* Background Elements - Scoped to this section only */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-50/40 via-transparent to-transparent dark:from-red-950/40" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] opacity-40" />
        
        {/* Animated Dots Pattern */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(220, 38, 38, 0.3) 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Secondary Dots Pattern */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 12.5px 12.5px, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
            backgroundSize: '25px 25px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '-25px -25px', '0px 0px']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Grid Lines */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(220, 38, 38, 0.5) 1px, transparent 1px),
              linear-gradient(rgba(220, 38, 38, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px', '0px 0px']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Sticky Title Section */}
      <motion.div 
        className="sticky top-14 z-0 flex w-full flex-col items-center justify-center gap-2 text-center sm:top-28"
        style={{ opacity: titleOpacity, scale: titleScale, y: titleY }}
      >
        <BreathingAnimationText animationType="black-gray">
          <motion.h1 
            className="mb-2 text-xl sm:text-3xl lg:text-5xl font-medium !leading-tight text-neutral-800 dark:text-neutral-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              className="text-black dark:text-white font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              TRANSFORM YOUR VISION
            </motion.span>
            <br />
            <motion.span
              className="text-neutral-800 dark:text-white font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              INTO REALITY
            </motion.span>
          </motion.h1>
        </BreathingAnimationText>
        
        <BreathingAnimationText animationType="black-gray">
          <motion.p 
            className="mx-auto mb-6 px-4 text-base font-thin text-neutral-800 dark:text-neutral-200 md:max-w-2xl md:px-24 md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Experience the future of architectural visualization with AI-powered rendering that brings your concepts to life with unprecedented detail and realism.
          </motion.p>
        </BreathingAnimationText>

        {/* Stats Badges */}
        <motion.div 
          className="max-w-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {[
              { icon: Users, text: "1,000+ architects & designers", delay: 0.1 },
              { icon: Sparkles, text: "25,000+ generations", delay: 0.2 },
              { icon: FolderKanban, text: "2,000+ unique projects", delay: 0.3 }
            ].map((badge, index) => (
              <motion.span 
                key={index}
                className="inline-flex items-center rounded-full cursor-default hover:scale-105 transition-all duration-300 text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1 border shadow-sm bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800 border-neutral-600 dark:border-neutral-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + badge.delay, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <badge.icon className="mr-1.5 sm:mr-2 h-4 w-4" />
                <span className="whitespace-nowrap">{badge.text}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Video Section */}
      <div ref={videoSectionRef} className="flex min-h-screen w-full flex-col items-center justify-center gap-4 py-4 md:h-screen lg:gap-12 sticky top-0">
        <motion.div 
          className="flex w-full items-center justify-center overflow-hidden drop-shadow-xl"
          style={{ scale: videoScale, y: videoY, opacity: videoOpacity }}
          initial={{ opacity: 1, scale: 1, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-5xl">
            {isInView && videoLoaded ? (
              <VideoPlayer
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                title="Typus AI rendering software demonstration"
                poster="/video-poster.jpg"
                height="h-[500px] md:h-[600px]"
                preload="metadata"
              />
            ) : (
              <div className="h-[500px] md:h-[600px] bg-gray-200 rounded-xl animate-pulse flex items-center justify-center">
                <div className="text-gray-500">Loading video...</div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Company Logos */}
        {/* <div className="mx-auto w-full py-12 text-center md:py-0">
          <p className="max-w-xl text-base font-thin text-neutral-800 dark:text-neutral-200 md:text-base mx-auto mb-4 text-sm font-medium">
            Used by architects & interior designers at
          </p>
          <div className="flex h-12 w-full max-w-full items-center justify-center sm:h-14 lg:h-16">
            <div className="relative h-12 w-full sm:h-14 lg:h-16">
              <div className="hidden h-full items-center justify-center gap-6 sm:flex sm:gap-12 md:gap-16 lg:gap-20">
                <div className="relative flex h-8 w-20 shrink-0 items-center justify-center sm:h-10 sm:w-24 lg:h-12 lg:w-32">
                  <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 rounded flex items-center justify-center text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    LOGO 1
                  </div>
                </div>
                <div className="relative flex h-8 w-20 shrink-0 items-center justify-center sm:h-10 sm:w-24 lg:h-12 lg:w-32">
                  <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 rounded flex items-center justify-center text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    LOGO 2
                  </div>
                </div>
                <div className="relative flex h-8 w-20 shrink-0 items-center justify-center sm:h-10 sm:w-24 lg:h-12 lg:w-32">
                  <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 rounded flex items-center justify-center text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    LOGO 3
                  </div>
                </div>
                <div className="relative flex h-8 w-20 shrink-0 items-center justify-center sm:h-10 sm:w-24 lg:h-12 lg:w-32">
                  <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 rounded flex items-center justify-center text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    LOGO 4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Spacer */}
      <div className="my-24 h-1 w-full" />
    </section>
  )
}