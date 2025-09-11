"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Users, Sparkles, FolderKanban } from "lucide-react";
import { VideoPlayer } from "@/components/video/player";
import { BreathingAnimationText } from "./breathing-animation-text";

export const VideoShowcaseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring animations
  const titleOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0]),
    { stiffness: 300, damping: 30 }
  );
  const titleScale = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0.7]),
    { stiffness: 300, damping: 30 }
  );
  const titleY = useSpring(useTransform(scrollYProgress, [0, 0], [0, -100]), {
    stiffness: 300,
    damping: 30,
  });

  const videoScale = useSpring(
    useTransform(scrollYProgress, [0.1, 0.9], [0.8, 1.1]),
    { stiffness: 400, damping: 40 }
  );
  const videoY = useSpring(
    useTransform(scrollYProgress, [0.1, 0.9], [50, -50]),
    { stiffness: 400, damping: 40 }
  );

  return (
    <section
      ref={containerRef}
      className="relative mx-auto flex max-w-7xl flex-col px-4 py-0 text-neutral-800 dark:text-neutral-200 pt-32 sm:pt-40 h-[150vh]"
    >
      {/* Background Elements - Scoped to this section only */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-white/10" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-black/[0.02] opacity-40" />

        {/* Animated Dots Pattern */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.4) 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Floating Grid Lines */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 0, 0, 0.6) 1px, transparent 1px),
              linear-gradient(rgba(0, 0, 0, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px", "0px 0px"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Sticky Title Section */}
      <motion.div
        className="sticky top-14 z-0 flex w-full flex-col items-center justify-center gap-2 text-center sm:top-28"
        style={{
          opacity: titleOpacity,
          scale: titleScale,
          y: titleY,
          display: titleOpacity.get() === 0 ? "none" : "flex",
        }}
      >
        <BreathingAnimationText animationType="black-gray">
          <motion.h1
            className="mb-2 text-[30px] font-medium !leading-tight text-neutral-800 dark:text-neutral-200"
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
            className="mx-auto mb-2 px-4 text-[14px] font-thin text-neutral-800 dark:text-neutral-200 md:max-w-2xl md:px-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Experience the future of architectural visualization with AI-powered
            rendering that brings your concepts to life with unprecedented
            detail and realism.
          </motion.p>
        </BreathingAnimationText>

        {/* Stats Badges */}
        <motion.div
          className="max-w-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
            {[
              {
                icon: Users,
                text: "80,000+ architects signed up ",
                delay: 0.1,
              },
              { icon: Sparkles, text: "150,000+ generated images", delay: 0.2 },
            ].map((badge, index) => (
              <motion.span
                key={index}
                className="inline-flex items-center rounded-full cursor-default hover:scale-105 transition-all duration-300 text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1 border shadow-sm bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800 border-neutral-600 dark:border-neutral-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + badge.delay,
                  ease: "easeOut",
                }}
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
      <div
        ref={videoSectionRef}
        className="flex min-h-screen w-full flex-col items-center justify-center md:h-screen lg:gap-12 sticky top-0 z-10"
      >
        <motion.div
          className="flex w-full items-center justify-center overflow-hidden drop-shadow-xl"
          style={{ scale: videoScale, y: videoY }}
          initial={{ scale: 1, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-5xl mx-auto px-4">
            <VideoPlayer
              src="videos/INTRO_typus.mp4"
              title="Typus AI rendering software demonstration"
              poster="/video-poster.jpg"
              height="h-[400px] md:h-[500px] lg:h-[600px]"
              preload="auto"
              shouldPlay={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
