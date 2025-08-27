"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface InfiniteCard {
  mode: string
  style: string
  gradient: string
}

const infiniteCards: InfiniteCard[] = [
  { mode: "MODE. REAL.", style: "BASIC", gradient: "from-green-500 to-teal-600" },
  { mode: "MODE. STYLE.", style: "BLACK PEN SKETCH", gradient: "from-gray-600 to-gray-800" },
  { mode: "MODE. REAL.", style: "AERIAL", gradient: "from-purple-500 to-pink-600" },
  { mode: "MODE. STYLE.", style: "MIXED MEDIA COLLAGE", gradient: "from-orange-500 to-red-600" },
  { mode: "MODE. REAL.", style: "REGIONAL PROMPTING", gradient: "from-indigo-500 to-purple-600" },
  { mode: "MODE. REAL.", style: "ELEVATION", gradient: "from-blue-500 to-cyan-600" },
  { mode: "MODE. STYLE.", style: "Art TECHNIQUES", gradient: "from-amber-500 to-orange-600" },
  { mode: "MODE. REAL.", style: "NO STYLE TRANSFER", gradient: "from-cyan-500 to-blue-600" },
]

export function InfiniteModeCards() {
  // Duplicate cards for seamless loop
  const duplicatedCards = [...infiniteCards, ...infiniteCards]

  return (
    <div className="w-full overflow-hidden py-12">
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -100 * infiniteCards.length * 16], // 16rem = w-64
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{ width: `${duplicatedCards.length * 16}rem` }}
      >
        {duplicatedCards.map((card, index) => (
          <Card
            key={`${card.style}-${index}`}
            className={`w-64 h-40 flex-shrink-0 overflow-hidden shadow-lg bg-gradient-to-br ${card.gradient} hover:shadow-xl transition-shadow`}
          >
            <CardContent className="p-6 h-full flex flex-col justify-center text-white">
              <h3 className="text-lg font-bold mb-2">{card.mode}</h3>
              <p className="text-sm font-semibold opacity-90">{card.style}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  )
}
