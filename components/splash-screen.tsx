"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { WavyBackground } from "@/components/ui/wavy-background";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showFinalText, setShowFinalText] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const { theme } = useTheme();

  const textSequence = ["IMAGINE", "VISUAL", "CREATE"];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Staggered text animations
    textSequence.forEach((_, index) => {
      timers.push(setTimeout(() => setCurrentStep(index), index * 1000));
    });

    // Show final combined text after CREATE
    timers.push(
      setTimeout(() => setShowFinalText(true), textSequence.length * 1000 + 500)
    );

    // Show loader
    timers.push(
      setTimeout(() => setShowLoader(true), textSequence.length * 1000 + 1000)
    );

    // Complete splash screen
    timers.push(
      setTimeout(() => onComplete(), textSequence.length * 1000 + 4000)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <WavyBackground
        className="w-full h-full"
        colors={
          theme === "dark"
            ? ["#1a1a1a", "#2d2d2d", "#404040", "#525252", "#666666"]
            : ["#f0f0f0", "#e0e0e0", "#d0d0d0", "#c0c0c0", "#b0b0b0"]
        }
        waveWidth={50}
        backgroundFill={theme === "dark" ? "#000000" : "#ffffff"}
        blur={10}
        speed="slow"
        waveOpacity={0.5}
      >
        <div className="relative z-10 text-center space-y-12 min-h-screen flex flex-col justify-center px-4">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
              <Image
                src="/logo/typus_logo.png"
                alt="Typus AI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Typus AI Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                TYPUS AI
              </h2>
            </motion.div>
          </motion.div>

          {/* Animated Text Sequence */}
          <div className="relative h-24 sm:h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!showFinalText ? (
                <motion.h1
                  key={currentStep}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 1.2 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                  style={{ color: "rgb(255, 54, 54)" }}
                >
                  {textSequence[currentStep]}
                </motion.h1>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex items-center justify-center space-x-2 sm:space-x-4 relative"
                >
                  {/* Sparkles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{ backgroundColor: "rgb(255, 54, 54)" }}
                        initial={{
                          x: Math.random() * 400 - 200,
                          y: Math.random() * 200 - 100,
                          opacity: 0,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>

                  <motion.span
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    IMAGINE.
                  </motion.span>
                  <motion.span
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    VISUAL.
                  </motion.span>
                  <motion.span
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    CREATE.
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Loading Animation */}
          <AnimatePresence>
            {showLoader && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center space-y-6"
              >
                {/* Professional Loading Bar */}
                <div className="w-64 sm:w-80 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: "rgb(255, 54, 54)" }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Loading Text */}
                <motion.p
                  className="text-sm sm:text-base text-black dark:text-white font-medium tracking-wider"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Initializing Experience...
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </WavyBackground>
    </div>
  );
}
