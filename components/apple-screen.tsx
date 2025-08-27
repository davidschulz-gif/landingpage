"use client"
import { motion } from "framer-motion"
import type React from "react"

import { cn } from "@/lib/utils"

interface AppleScreenProps {
  children: React.ReactNode
  className?: string
}

export const AppleScreen = ({ children, className }: AppleScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotateX: 25, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.8 },
        scale: { duration: 1.2 },
        rotateX: { duration: 1 },
        y: { duration: 1.2 },
      }}
      viewport={{ once: true }}
      className={cn("relative mx-auto", className)}
      style={{ perspective: "2000px" }}
    >
      <motion.div
        className="relative bg-gradient-to-b from-gray-800 via-gray-850 to-gray-900 rounded-t-3xl p-6 shadow-2xl"
        whileHover={{
          rotateX: -2,
          rotateY: 2,
          scale: 1.02,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <motion.div
              className="w-3 h-3 bg-red-500 rounded-full shadow-sm"
              whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(239, 68, 68, 0.6)" }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"
              whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(245, 158, 11, 0.6)" }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full shadow-sm"
              whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(34, 197, 94, 0.6)" }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="flex-1 mx-4">
            <motion.div
              className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg px-4 py-2 text-xs text-gray-200 text-center border border-gray-600"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              🔒 typus.ai - Transform Your Architectural Vision
            </motion.div>
          </div>
          <div className="w-16"></div>
        </div>

        <motion.div
          className="relative bg-black rounded-xl overflow-hidden aspect-video shadow-inner"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/30"></div>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {children}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="bg-gradient-to-b from-gray-700 via-gray-750 to-gray-800 h-8 rounded-b-3xl shadow-xl">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-gray-600/50 to-transparent blur-sm"></div>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-white/5 via-white/2 to-transparent rounded-3xl pointer-events-none"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -top-4 -right-4 w-2 h-2 bg-cyan-400/60 rounded-full blur-sm"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-3 h-3 bg-blue-400/40 rounded-full blur-sm"
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </motion.div>
  )
}
