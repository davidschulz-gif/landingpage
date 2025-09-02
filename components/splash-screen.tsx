"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";

interface SplashScreenProps {
  className?: string;
  onComplete?: () => void;
  children?: React.ReactNode;
}

export function SplashScreen({ className, onComplete, children }: SplashScreenProps) {
  const [slideOut, setSlideOut] = useState(false);
  const [showDelegate, setShowDelegate] = useState(true);

  useEffect(() => {
    // Hide "Delegate" after 2 seconds
    setTimeout(() => {
      setShowDelegate(false);
    }, 2000);

    // Start slide out animation
    setTimeout(() => {
      setSlideOut(true);
    }, 4000);

    // Call onComplete after slide animation
    setTimeout(() => {
      onComplete?.();
    }, 4800);
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
        style={{ willChange: "transform" }}
      >
        <WavyBackground
          backgroundFill="rgb(250, 250, 250)"
          colors={["#dc2626", "#ef4444", "#f87171", "#fca5a5"]}
          waveWidth={80}
          blur={15}
          speed="fast"
          waveOpacity={0.6}
          className="relative flex items-center justify-center"
        >
          <div className="flex flex-col items-center space-y-12">
            {/* Logo - Top */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-center"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4">
                <Image
                  src="/logo/typus_logo.png"
                  alt="Typus AI Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-2"
              >
                <h2 className="text-sm font-bold sm:text-base tracking-[0.2em] text-black">
                  TYPUS.AI
                </h2>
                <div className="w-12 h-px bg-gray-600 mx-auto" />
              </motion.div>
            </motion.div>

            {/* Main Text - Center of Vortex */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-2xl pb-1 sm:text-4xl lg:text-6xl font-black tracking-wide flex items-center justify-center"
              style={{ color: "#FBFBFB", width: "max-content", minWidth: "600px" }}
            >
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
                transition={{ duration: 0.5 }}
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
            </motion.div>

            {/* Progress Bar - Below Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="w-32 h-0.5 bg-gray-400 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-black rounded-full"
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
              <motion.p
                className="text-sm font-bold tracking-[0.15em] text-black opacity-70"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                INITIALIZING
              </motion.p>
            </motion.div>
          </div>
        </WavyBackground>
      </motion.div>
    </>
  );
}