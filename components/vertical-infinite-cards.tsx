"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export const VerticalInfiniteCards = ({
  items,
  direction = "up",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string
    description: string
    image: string
  }[]
  direction?: "up" | "down"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 3000) // Change active item every 3 seconds

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-[30rem] overflow-hidden flex justify-center relative rounded-xl p-8",
        "bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95",
        "backdrop-blur-sm border border-slate-700/50",
        className,
      )}
    >
      <div className="relative flex items-start px-6 w-full max-w-2xl">
        <div className="w-full space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-1000 ease-in-out transform",
                "py-8 px-6 rounded-lg",
                activeIndex === index
                  ? "opacity-100 translate-y-0 scale-100 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 shadow-lg shadow-cyan-500/10"
                  : "opacity-30 translate-y-2 scale-95 hover:opacity-50",
              )}
            >
              <h2
                className={cn(
                  "text-3xl font-bold transition-all duration-700 ease-out",
                  "bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent",
                  "leading-tight tracking-tight",
                  activeIndex === index ? "animate-pulse-subtle" : "text-slate-400",
                )}
              >
                {item.title}
              </h2>
              <p
                className={cn(
                  "text-lg leading-relaxed mt-4 transition-all duration-700 ease-out",
                  activeIndex === index ? "text-slate-200 animate-fade-in-up" : "text-slate-500",
                )}
              >
                {item.description}
              </p>
              <div
                className={cn(
                  "h-0.5 mt-6 transition-all duration-700 ease-out",
                  activeIndex === index
                    ? "w-16 bg-gradient-to-r from-cyan-400 to-blue-400 animate-expand-width"
                    : "w-0 bg-slate-600",
                )}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={cn("absolute w-1 h-1 bg-cyan-400/30 rounded-full", "animate-float-particle")}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
