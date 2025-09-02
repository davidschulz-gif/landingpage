"use client";

import { WavyBackground } from "@/components/ui/wavy-background";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";

interface SplashScreenProps {
  className?: string;
  onComplete?: () => void;
  children?: React.ReactNode;
}

export function SplashScreen({ className, onComplete, children }: SplashScreenProps) {
  const [slideOut, setSlideOut] = useState(false);
  const [showDelegate, setShowDelegate] = useState(true);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const containerStyle = useMemo(() => ({
    willChange: "transform",
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)"
  }), []);

  useEffect(() => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];

    const t1 = setTimeout(() => setShowDelegate(false), 2000);
    const t2 = setTimeout(() => setSlideOut(true), 4000);
    const t3 = setTimeout(() => onComplete?.(), 4800);
    
    timeoutRefs.current = [t1, t2, t3];

    return () => timeoutRefs.current.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <>
      {children && (
        <div className="fixed inset-0 z-0">
          {children}
        </div>
      )}
      
      <motion.div
        className={cn(
          "fixed inset-0 z-50",
          "motion-reduce:transition-none",
          className
        )}
        initial={{ y: "0%" }}
        animate={{ y: slideOut ? "-100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={containerStyle}
      >
        {/* Wavy Background Section */}
        <div className="absolute left-0 right-0 top-16 bottom-24">
            {/* Logo Section - Outside Wavy Background */}
        <div className="absolute top-56 left-0 right-0 h-28 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <Image
                src="/logo/typus_logo_transparent.png"
                alt="Typus AI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
          <WavyBackground
            backgroundFill="transparent"
            colors={["#dc2626", "#ef4444", "#f87171", "#fca5a5"]}
            waveWidth={80}
            blur={5}
            speed="fast"
            waveOpacity={0.9}
            className="relative w-full h-full"
          >
            {/* TYPUS.AI Text - Top of Vertex */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="relative top-82 left-1/2 transform -translate-x-1/2 text-center"
            >
              <h2 className="text-sm font-bold sm:text-base tracking-[0.2em] text-white">
                TYPUS.AI
              </h2>
              <div className="w-12 h-px bg-white/60 mx-auto mt-2" />
            </motion.div>

            {/* Main Text - Center of Vertex */}
            <div className="absolute inset-0">
              <div className="h-full w-full relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
                >
                  <div className="text-xl sm:text-3xl lg:text-5xl font-black tracking-wide text-white whitespace-nowrap">
                    <span>Imagine.&nbsp;</span>
                    <motion.span
                      className="relative inline-block"
                      initial={{
                        opacity: 1,
                        scaleX: 1,
                        width: "auto"
                      }}
                      animate={{
                        opacity: showDelegate ? 1 : 0,
                        scaleX: showDelegate ? 1 : 0,
                        width: showDelegate ? "auto" : 0
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "visible", transformOrigin: "left", whiteSpace: "nowrap" }}
                    >
                      <span className={showDelegate ? "" : "line-through"}>Delegate.&nbsp;</span>
                      {!showDelegate && (
                        <motion.div
                          className="absolute inset-0 bg-red-500 h-1 top-1/2 transform -translate-y-1/2"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.span>
                    <span>Create.</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </WavyBackground>
        </div>

        {/* Loading Bar and INITIALIZING - Bottom of Screen */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex flex-col items-center space-y-4"
          >
            {/* Progress Bar */}
            <div className="w-32 h-0.5 bg-gray-400 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-red-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
            
            {/* INITIALIZING Text */}
            <motion.p
              className="text-xs font-bold tracking-[0.15em] text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
            >
              INITIALIZING
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}