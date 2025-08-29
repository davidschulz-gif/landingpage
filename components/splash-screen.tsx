"use client";

import { fontClass } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { JSX, useEffect, useState } from "react";

interface SplashScreenProps {
  className?: string;
  onComplete?: () => void;
  children?: React.ReactNode;
}

export function SplashScreen({ className, onComplete, children }: SplashScreenProps): JSX.Element {
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [slideOut, setSlideOut] = useState<boolean>(false);

  useEffect(() => {
    // Start slide out animation
    setTimeout(() => {
      setSlideOut(true);
    }, 3000);

    // Call onComplete after slide animation
    setTimeout(() => {
      onComplete?.();
    }, 3800);
  }, [onComplete]);

  return (
    <>
      {/* Background Content - Always Rendered */}
      {children && (
        <div className="fixed inset-0 z-0">
          {children}
        </div>
      )}
      
      {/* Splash Screen Overlay */}
      <motion.div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center",
          "bg-gradient-to-br from-red-900 via-red-800 to-red-950",
          "motion-reduce:transition-none",
          className
        )}
        initial={{ y: "0%" }}
        animate={{ y: slideOut ? "-100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ willChange: "transform" }}
      >
      {/* Professional Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main Content */}
      <div className="relative text-center space-y-8 px-4 sm:px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6">
            <Image
              src="/logo/typus_logo.png"
              alt="Typus AI Logo"
              fill
              className="object-contain filter brightness-0 invert"
              priority
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className={cn("text-sm sm:text-base font-light text-white/90 tracking-[0.2em]", fontClass)}>
              TYPUS AI
            </h2>
            <div className="w-12 h-px bg-white/30 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Text Animation Container */}
        <div className="relative h-32 sm:h-40 flex items-center justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: slideOut ? -100 : [100, -20, 0],
              opacity: slideOut ? 0 : [0, 1, 1]
            }}
            transition={{ 
              duration: slideOut ? 0.8 : 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              times: slideOut ? undefined : [0, 0.6, 1]
            }}
            className={cn("text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-wide flex items-center", fontClass)}
          >
            {"Imagine. Create. Amaze.".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + i * 0.05,
                  ease: "easeInOut"
                }}
                style={{ display: "inline-block" }}
                className={char === " " ? "w-4" : ""}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-4"
        >
          <p className={cn("text-base sm:text-lg text-white/80 font-light tracking-[0.15em]", fontClass)}>
            AI FOR ARCHITECTS
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
        </motion.div>

        {/* Professional Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center space-y-6 mt-16"
        >
          <div className="flex space-x-1">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-8 bg-white/40 rounded-full"
                animate={{
                  scaleY: [1, 2, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          <motion.p
            className={cn("text-xs text-white/50 font-light tracking-widest", fontClass)}
            animate={{ opacity: [0.8, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            INITIALIZING
          </motion.p>
        </motion.div>
      </div>
      </motion.div>
    </>
  );
}