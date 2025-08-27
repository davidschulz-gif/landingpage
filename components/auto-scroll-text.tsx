"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AutoScrollTextProps {
  items: string[]
  className?: string
  interval?: number
}

export const AutoScrollText = ({ items, className, interval = 3000 }: AutoScrollTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [items.length, interval])

  return (
    <div className={cn("relative h-8 overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center"
        >
          <span className="text-black font-semibold bg-cyan-400 px-3 py-1 rounded-full text-sm">
            {items[currentIndex]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
