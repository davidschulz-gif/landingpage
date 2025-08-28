"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="relative z-10 text-center space-y-12 min-h-screen flex flex-col justify-center px-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {/* Logo */}
        <div className="mb-8">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
            <Image
              src="/logo/typus_logo.png"
              alt="Typus AI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-4">
            <h2 className="text-lg sm:text-xl font-semibold text-black">
              TYPUS AI
            </h2>
          </div>
        </div>

        {/* Main Text */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black">
            IMAGINE. CREATE. AMAZE.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium" style={{ color: "rgb(255, 54, 54)" }}>
            A.I. FOR ARCHITECTS
          </p>
        </div>

        {/* Loading Animation */}
        {showLoader && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center space-y-6"
          >
            {/* Professional Loading Bar */}
            <div className="w-64 sm:w-80 h-1 bg-gray-200 rounded-full overflow-hidden">
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
              className="text-sm sm:text-base text-black font-medium tracking-wider"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Initializing Experience...
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
