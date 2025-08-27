"use client"
import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import type { JSX } from "react/jsx-runtime"

interface NavItem {
  name: string
  link: string
  icon?: JSX.Element
  dropdown?: {
    title: string
    description: string
    link: string
    video?: string
  }[]
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true) // Always show navbar initially
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setVisible(true)
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0, // Start at top position
        }}
        animate={{
          y: 0, // Always stay at top
          opacity: 1, // Always visible
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black/90 bg-white/90 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4", // Added backdrop-blur and transparency
          className,
        )}
      >
        {navItems.map((navItem, idx) => (
          <div
            key={`nav-${idx}`}
            className="relative"
            onMouseEnter={() => navItem.dropdown && setActiveDropdown(navItem.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
              {navItem.dropdown && <ChevronDown className="w-3 h-3 ml-1" />}
            </Link>

            {navItem.dropdown && activeDropdown === navItem.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-80 bg-white/95 dark:bg-black/95 backdrop-blur-md border border-neutral-200 dark:border-white/[0.2] rounded-xl shadow-lg p-4 grid gap-3" // Added backdrop blur to dropdown
              >
                {navItem.dropdown.map((item, dropdownIdx) => (
                  <Link
                    key={dropdownIdx}
                    href={item.link}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                  >
                    {item.video && (
                      <div className="w-16 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-md flex-shrink-0" />
                    )}
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Get Started</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
