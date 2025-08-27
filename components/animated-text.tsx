"use client"
import { motion } from "framer-motion"
import type React from "react"

import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => {
  const words = text.split(" ")

  return (
    <motion.div className={cn("", className)}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export const GlowText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn("relative", className)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-lg opacity-30 animate-pulse"></div>
      <div className="relative">{children}</div>
    </motion.div>
  )
}
