"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface FeatureItem {
  title: string
  description: string
  image: string
  gradient: string
}

interface VerticalScrollFeaturesProps {
  features: FeatureItem[]
  className?: string
  interval?: number
}

export const VerticalScrollFeatures = ({ features, className, interval = 4000 }: VerticalScrollFeaturesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, interval)

    return () => clearInterval(timer)
  }, [features.length, interval])

  return (
    <div className={cn("flex flex-col lg:flex-row items-center gap-12", className)}>
      {/* Left side - Text content with vertical scrolling */}
      <div className="flex-1 space-y-8">
        <div className="relative h-96 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.6 },
                scale: { duration: 0.8 },
              }}
              className="absolute inset-0"
            >
              <div className="space-y-6">
                <motion.h3
                  className="text-4xl md:text-5xl font-bold text-black leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {features[currentIndex].title}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {features[currentIndex].description}
                </motion.p>

                {/* Progress indicators */}
                <motion.div
                  className="flex space-x-2 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {features.map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "h-1 rounded-full transition-all duration-500",
                        index === currentIndex ? "w-12 bg-gradient-to-r from-cyan-500 to-blue-600" : "w-6 bg-gray-300",
                      )}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature list with highlighting */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={cn(
                "p-4 rounded-lg transition-all duration-500 cursor-pointer",
                index === currentIndex
                  ? "bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 shadow-lg"
                  : "bg-gray-50 hover:bg-gray-100 border-l-4 border-transparent",
              )}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h4
                className={cn(
                  "font-semibold transition-colors duration-300",
                  index === currentIndex ? "text-cyan-700 text-lg" : "text-gray-700 text-base",
                )}
              >
                {feature.title}
              </h4>
              {index === currentIndex && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-gray-600 mt-2"
                >
                  {feature.description.substring(0, 100)}...
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right side - Image with smooth transitions */}
      <div className="flex-1 relative">
        <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                rotateY: { duration: 0.8 },
              }}
              className="absolute inset-0"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", features[currentIndex].gradient)} />
              <Image
                src={features[currentIndex].image || "/placeholder.svg"}
                alt={features[currentIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* Floating elements for extra visual appeal */}
          <motion.div
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="w-3 h-3 bg-cyan-400 rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
