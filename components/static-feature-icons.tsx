"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Zap, Brain, Award, Shield, Puzzle, DollarSign } from "lucide-react"

interface StaticFeatureIconsProps {
  className?: string
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Award,
    title: "Professional",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Structure Safe",
    gradient: "from-green-400 to-teal-500",
  },
  {
    icon: Puzzle,
    title: "Easy Integration",
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    gradient: "from-emerald-400 to-green-500",
  },
]

export const StaticFeatureIcons = ({ className }: StaticFeatureIconsProps) => {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-6", className)}>
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -5,
          }}
          className="group"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <motion.div
              className={cn(
                "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br flex items-center justify-center",
                feature.gradient,
              )}
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <feature.icon className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="font-semibold text-gray-900 text-sm group-hover:text-gray-700 transition-colors">
              {feature.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
