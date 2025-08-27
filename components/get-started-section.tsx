"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

import { motion, useInView, useAnimation, useMotionValue } from "framer-motion"
import { Check, Sparkles, Zap, Star } from "lucide-react"

const features = [
  { text: "CREATE A FREE ACCOUNT & VIEW THE APP", icon: Sparkles },
  { text: "NO CREDIT CARD NEEDED", icon: Zap },
  { text: "DOWNLOAD & INSTALL PLUGINS FOR FREE", icon: Star },
  { text: "TUTORIAL", icon: Sparkles },
  { text: "STEP BY STEP GUIDE", icon: Zap },
  { text: "GET CASE STUDIES", icon: Star },
  { text: "GET A COUPON WELCOME GIFT", icon: Sparkles },
]

const integrations = [
  { name: "Revit", logo: "R", color: "from-blue-500 to-blue-700" },
  { name: "Rhinoceros", logo: "🦏", color: "from-gray-600 to-gray-800" },
  { name: "ArchiCAD", logo: "A", color: "from-red-500 to-red-700" },
  { name: "SketchUp", logo: "S", color: "from-green-500 to-green-700" },
]

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export function GetStartedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const controls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (ref.current as HTMLElement)?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      features.forEach((_, index) => {
        setTimeout(() => {
          setVisibleFeatures((prev) => [...prev, index]);
        }, index * 150);
      });
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-32 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      <FloatingParticles />

      <motion.div
        className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]"
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="text-center mb-12"
        >
          <motion.button
            className="relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full overflow-hidden group shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6,182,212,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              GET STARTED
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Star className="w-4 h-4" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-20"
        >
          <motion.p
            className="text-lg font-medium tracking-wide bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            YES, YOU CAN CREATE IMAGES FOR FREE WITHOUT HAVING A SUBSCRIPTION.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">
          {features.slice(0, 6).map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={
                  visibleFeatures.includes(index)
                    ? {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="relative p-4 sm:p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-400/10 dark:to-blue-400/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex items-center space-x-4">
                  <motion.div className="flex-shrink-0" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Check className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <motion.span
                      className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 flex items-center gap-2"
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500 dark:text-cyan-400" />
                      {feature.text}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            )
          })}

          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={
              visibleFeatures.includes(6)
                ? {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-orange-200/50 dark:border-orange-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden md:col-span-2 lg:col-span-1"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 dark:from-yellow-300/10 dark:to-orange-300/10 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10 flex items-center space-x-4">
              <motion.div
                className="flex-shrink-0"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
              </motion.div>

              <motion.span
                className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.9 }}
              >
                {features[6].text}
              </motion.span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mb-16"
        >
          <motion.h3
            className="text-base sm:text-lg font-bold tracking-wider bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent mb-8 sm:mb-12"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            INTEGRATIONS.
          </motion.h3>

          <div className="flex justify-center items-center space-x-8 sm:space-x-12 lg:space-x-16 flex-wrap gap-y-6 sm:gap-y-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 1.2 + index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.2,
                  rotateY: 15,
                  z: 50,
                }}
                className="flex flex-col items-center space-y-3 cursor-pointer group"
              >
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${integration.color} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500`}
                  whileHover={{
                    boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                    rotateX: -10,
                  }}
                >
                  <span className="text-white font-bold text-lg sm:text-xl">{integration.logo}</span>
                </motion.div>
                <motion.span
                  className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {integration.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
