"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MarqueeItem {
  id: string
  name: string
  handle: string
  content: string
  avatar: string
  gradient: string
}

interface VerticalMarqueeProps {
  items: MarqueeItem[]
  className?: string
  speed?: number
}

export const VerticalMarquee = ({ items, className, speed = 30 }: VerticalMarqueeProps) => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div className={cn("relative h-96 overflow-hidden", className)}>
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex flex-col space-y-4"
        animate={{
          y: [0, -items.length * 120],
        }}
        transition={{
          duration: speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 bg-white rounded-xl p-4 shadow-lg border border-gray-100 mx-2"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start space-x-3">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm",
                  item.gradient,
                )}
              >
                {item.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 mb-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                  <span className="text-gray-500 text-xs">{item.handle}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
