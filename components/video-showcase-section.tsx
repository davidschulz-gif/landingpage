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
  const [showTitle, setShowTitle] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Monitor scroll to hide title
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setShowTitle(latest <= 0.15);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Smooth spring animations
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
      className="relative mx-auto flex max-w-[65%] w-full flex-col px-4 py-0 text-neutral-800 dark:text-neutral-200 pt-32 sm:pt-40 h-[150vh]"
    >


      {/* Sticky Title Section */}
      {showTitle && (
        <motion.div
          className="sticky top-14 z-0 flex w-full flex-col items-center justify-center gap-2 text-center sm:top-28"
          style={{ y: titleY }}
        >
          <BreathingAnimationText animationType="black-gray">
            <motion.h1
              className="mb-2 text-[30px] font-medium !leading-tight text-neutral-800 dark:text-neutral-200"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.span
                className="text-black dark:text-white font-normal"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                TRANSFORM YOUR VISION
              </motion.span>
              <br />
              <motion.span
                className="text-neutral-800 dark:text-white font-normal"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                INTO REALITY
              </motion.span>
            </motion.h1>
          </BreathingAnimationText>

          <BreathingAnimationText animationType="black-gray">
            <motion.p
              className="mx-auto mb-2 px-4 text-[14px] font-thin text-neutral-800 dark:text-neutral-200 md:max-w-2xl md:px-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Experience the future of architectural visualization with AI-powered
              rendering that brings your concepts to life with unprecedented
              detail and realism.
            </motion.p>
          </BreathingAnimationText>

          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
              {[
                {
                  icon: Users,
                  text: "80,000+ signed up architects",
                  delay: 0.1,
                },
                { icon: Sparkles, text: "150,000+ generated images", delay: 0.2 },
              ].map((badge, index) => (
                <motion.span
                  key={index}
                  className="inline-flex items-center rounded-full cursor-default hover:scale-105 transition-all duration-300 text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1 bg-white text-black shadow-md border-0"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + badge.delay,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <badge.icon className="mr-1.5 sm:mr-2 h-4 w-4" />
                  <span className="whitespace-nowrap">{badge.text}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

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
          <div className="relative w-full h-full mx-auto px-4">
            <video
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
              src="videos/INTRO_typus_newlogo.mp4"
              poster="/video-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};