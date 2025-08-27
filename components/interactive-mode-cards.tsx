"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ModeCard {
  id: string
  mode: string
  style: string
  description: string
  gradient: string
}

const modeCards: ModeCard[] = [
  {
    id: "1",
    mode: "MODE. REAL.",
    style: "NO STYLE TRANSFER. REGIONAL PROMPTING.",
    description:
      "Preserve the exact structure of your input while enhancing with AI-powered regional prompting for photorealistic results.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "2",
    mode: "MODE. REAL.",
    style: "AERIAL.",
    description:
      "Transform your designs into stunning aerial perspectives that showcase the full scope of your architectural vision.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "3",
    mode: "MODE. STYLE.",
    style: "BLACK PEN SKETCH.",
    description:
      "Convert your designs into elegant black pen sketches that capture the essence of architectural drawing traditions.",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    id: "4",
    mode: "MODE. REAL.",
    style: "BASIC.",
    description:
      "Clean, straightforward visualization that maintains structural integrity while adding realistic materials and lighting.",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: "5",
    mode: "MODE. STYLE.",
    style: "MIXED MEDIA COLLAGE.",
    description:
      "Artistic interpretation combining multiple visual techniques for unique, presentation-ready architectural visualizations.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "6",
    mode: "MODE. REAL.",
    style: "REGIONAL PROMPTING.",
    description:
      "Advanced AI technique that applies different prompts to specific regions of your design for precise control.",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "7",
    mode: "MODE. REAL.",
    style: "ELEVATION",
    description:
      "Professional elevation views that showcase your building's facade with accurate proportions and materials.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "8",
    mode: "MODE. STYLE.",
    style: "Art TECHNIQUES",
    description:
      "Back in 1800. Classical artistic techniques applied to modern architectural designs for timeless appeal.",
    gradient: "from-amber-500 to-orange-600",
  },
]

export function InteractiveModeCards() {
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="relative w-full min-h-[600px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-slate-800 mb-8 tracking-tight"
          >
            YOU DESIGNED IT.
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-8"
          >
            LET AI VISUALIZE IT.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            TYPUS.AI FULLY PRESERVES THE STRUCTURE OF THE INPUT.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
            >
              see presets in the app
            </Button>
          </motion.div>
        </div>

        {/* Interactive Cards Stack */}
        <div className="relative flex justify-center items-center min-h-[400px]">
          {modeCards.map((card, index) => {
            const isActive = activeCard === card.id
            const isHovered = hoveredCard === card.id
            const rotation = (index - 3.5) * 5 // Center around middle card
            const translateX = (index - 3.5) * 120
            const zIndex = isActive ? 50 : modeCards.length - Math.abs(index - 3.5)

            return (
              <motion.div
                key={card.id}
                className="absolute cursor-pointer"
                style={{
                  zIndex,
                  transform: isActive
                    ? "translate(-50%, -50%) scale(1.1)"
                    : `rotate(${rotation}deg) translateX(${translateX}px)`,
                  left: isActive ? "50%" : "auto",
                  top: isActive ? "50%" : "auto",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: isActive ? 1.1 : isHovered ? 1.05 : 1,
                  filter: isActive ? "none" : isHovered ? "saturate(1.2)" : "saturate(0.8)",
                }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveCard(isActive ? null : card.id)}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className={`w-80 h-96 overflow-hidden shadow-xl bg-gradient-to-br ${card.gradient}`}>
                  <CardContent className="p-8 h-full flex flex-col justify-between text-white">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{card.mode}</h3>
                      <h4 className="text-lg font-semibold mb-4 opacity-90">{card.style}</h4>
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4"
                      >
                        <p className="text-sm leading-relaxed opacity-90">{card.description}</p>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="mt-4 bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          Try This Mode
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Click to view hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredCard && !activeCard ? 1 : 0 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-60"
        >
          <div className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm">click to view</div>
        </motion.div>

        {/* Close button for active card */}
        {activeCard && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setActiveCard(null)}
            className="fixed top-8 right-8 z-60 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        )}
      </div>
    </div>
  )
}
