"use client";

import { BreathingAnimationText } from "./breathing-animation-text";
import { WavyBackground } from "@/components/ui/wavy-background";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

interface SplashScreenProps {
  className?: string;
  onComplete?: () => void;
  children?: React.ReactNode;
}

export function SplashScreen({
  className,
  onComplete,
  children,
}: SplashScreenProps) {
  const [slideOut, setSlideOut] = useState(false);
  const [showDelegate, setShowDelegate] = useState(true);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const containerStyle = useMemo(
    () => ({
      willChange: "transform",
      background: "#f0f0f0",
    }),
    []
  );

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
      {children && <div className="fixed inset-0 z-0">{children}</div>}

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
        <div className="absolute inset-0">
          <WavyBackground
            backgroundFill="#f0f0f0"
            colors={["#f0f0f0", "#ffffff"]}
            waveWidth={80}
            blur={5}
            speed="fast"
            waveOpacity={0.1}
            className="relative w-full h-full"
          >
            {/* Logo Section - Top of Vertex */}

            {/* Main Text - Center of Vertex */}
            <div className="absolute inset-0">
              <div className="h-full w-full relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
                >
                  <BreathingAnimationText animationType="black-gray" className="font-normal text-xl sm:text-3xl lg:text-5xl tracking-wide text-black whitespace-nowrap">
                    <motion.div
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.4,
                          ease: "easeOut",
                        }}
                      >
                        IMAGINE.&nbsp;
                      </motion.span>
                      <motion.span
                        className="relative inline-block"
                        initial={{
                          opacity: 1,
                          scaleX: 1,
                          width: "auto",
                        }}
                        animate={{
                          opacity: showDelegate ? 1 : 0,
                          scaleX: showDelegate ? 1 : 0,
                          width: showDelegate ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          overflow: "visible",
                          transformOrigin: "left",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span className={showDelegate ? "" : "line-through"}>
                          DELEGATE.&nbsp;
                        </span>
                        {!showDelegate && (
                          <motion.div
                            className="absolute inset-0 bg-gray-500 h-1 top-1/2 transform -translate-y-1/2"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.6,
                          ease: "easeOut",
                        }}
                      >
                        CREATE.
                      </motion.span>
                    </motion.div>
                  </BreathingAnimationText>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-20 right-20 w-4 h-4 rounded-full"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-32 left-20 w-6 h-6 rounded-full"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
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
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <div className="relative w-8 h-8">
                <Image
                  src="/logo/typus_logo_transparent.png"
                  alt="Typus AI Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                  quality={90}
                />
              </div>
            </motion.div>
            {/* Progress Bar */}
            <div className="w-32 h-0.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255, 54, 54, 0.3)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: "rgb(255, 54, 54)" }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>

            {/* INITIALIZING Text */}
            <motion.p
              className="text-[0.625rem] font-bold tracking-[0.15em]"
              style={{ 
                color: "rgb(255, 54, 54)"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4,
              }}
            >
              INITIALIZING
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
