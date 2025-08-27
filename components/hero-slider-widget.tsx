"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

interface SlideData {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  cta: {
    primary: { text: string; href: string }
    secondary: { text: string; href: string }
  }
  gradient: string
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Transform Architecture",
    subtitle: "with AI Precision",
    description: "Generate photorealistic renders from your CAD files in seconds. Preserve structural integrity while creating stunning visualizations.",
    image: "/modern-villa-render.png",
    cta: {
      primary: { text: "Start Creating", href: "https://app.typus.ai/auth?m=authorization" },
      secondary: { text: "Watch Demo", href: "#demo" }
    },
    gradient: "from-cyan-600 via-blue-600 to-purple-700"
  },
  {
    id: 2,
    title: "Professional Quality",
    subtitle: "Every Time",
    description: "AI-powered rendering that understands architectural principles. Create presentation-ready visualizations that impress clients.",
    image: "/modern-office-building.png",
    cta: {
      primary: { text: "Try Free", href: "https://app.typus.ai/auth?m=authorization" },
      secondary: { text: "View Gallery", href: "#gallery" }
    },
    gradient: "from-orange-500 via-red-500 to-pink-600"
  },
  {
    id: 3,
    title: "Lightning Fast",
    subtitle: "Rendering",
    description: "What used to take hours now takes seconds. Revolutionary AI technology that accelerates your design workflow.",
    image: "/modern-apartment-complex.png",
    cta: {
      primary: { text: "Get Started", href: "https://app.typus.ai/auth?m=authorization" },
      secondary: { text: "Learn More", href: "#features" }
    },
    gradient: "from-green-500 via-teal-500 to-blue-600"
  }
]

export function HeroSliderWidget() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} opacity-80`} />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-cyan-200"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.h2>

                  <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <Button
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold min-h-[44px]"
                      asChild
                    >
                      <Link href={slides[currentSlide].cta.primary.href}>
                        {slides[currentSlide].cta.primary.text}
                      </Link>
                    </Button>
                    
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg bg-transparent min-h-[44px]"
                      asChild
                    >
                      <Link href={slides[currentSlide].cta.secondary.href}>
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        {slides[currentSlide].cta.secondary.text}
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors min-h-[44px] min-w-[44px]"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`} />
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors min-h-[44px] min-w-[44px]"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={currentSlide}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 sm:top-8 right-4 sm:right-8 z-20">
        <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2">
          <span className="text-white font-mono text-xs sm:text-sm">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  )
}