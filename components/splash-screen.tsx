"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

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
          backgroundFill="rgb(251, 251, 251)"
          colors={["#dc2626", "#ef4444", "#f87171", "#fca5a5"]}
          waveWidth={80}
          blur={15}
          speed="fast"
          waveOpacity={0.6}
          className="flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl pb-1 sm:text-6xl lg:text-8xl font-bold text-black tracking-wide flex items-center justify-center"
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
        </WavyBackground>
      </motion.div>
    </>
  );
}