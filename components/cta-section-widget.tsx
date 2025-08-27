"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Shield, Clock } from "lucide-react"
import { useRef } from "react"

const features = [
  {
    icon: Zap,
    title: "10x Faster",
    description: "Rendering Speed"
  },
  {
    icon: Shield,
    title: "100% Accurate",
    description: "Structure Preservation"
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Professional Quality"
  },
  {
    icon: Clock,
    title: "Real-time",
    description: "Instant Results"
  }
]

export function CTASectionWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <section 
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20 dark:opacity-30"
          style={{ y }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[rgb(255,54,54)]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgb(255,54,54)]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[rgb(255,54,54)]/15 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[rgb(255,54,54)]/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Badge 
              variant="outline" 
              className="border-[rgb(255,54,54)] text-[rgb(255,54,54)] bg-[rgb(255,54,54)]/10 px-4 py-2 text-sm sm:text-base"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Transform Your Workflow?
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8"
          >
            <span className="text-black dark:text-white">Start Creating</span>
            <br />
            <span style={{ color: 'rgb(255, 54, 54)' }}>
              Stunning Renders Today
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-black/70 dark:text-white/70 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Join thousands of architects and designers who have revolutionized their visualization workflow with Typus.AI. 
            Experience the future of architectural rendering.
          </motion.p>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:border-[rgb(255,54,54)] dark:hover:border-[rgb(255,54,54)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[rgb(255,54,54)] mx-auto mb-3" />
                    <h4 className="font-bold text-black dark:text-white text-sm sm:text-base mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-black/70 dark:text-white/70">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
          >
            <Button
              size="lg"
              className="text-white px-8 py-4 text-lg font-semibold min-h-[44px] group transition-all duration-300"
              style={{ backgroundColor: 'rgb(255, 54, 54)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(220, 38, 38)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(255, 54, 54)';
              }}
              asChild
            >
              <Link href="https://app.typus.ai/auth?m=authorization">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-black dark:border-white text-black dark:text-white hover:bg-[rgb(255,54,54)] hover:text-white hover:border-[rgb(255,54,54)] px-8 py-4 text-lg min-h-[44px] transition-all duration-300"
              asChild
            >
              <Link href="#demo">
                Watch Demo
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-black/60 dark:text-white/60"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-[rgb(255,54,54)]" />
              <span className="text-sm">No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-[rgb(255,54,54)]" />
              <span className="text-sm">Instant Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[rgb(255,54,54)]" />
              <span className="text-sm">Cancel Anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>


    </section>
  )
}