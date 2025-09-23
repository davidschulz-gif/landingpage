"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LazyImage } from "@/components/lazy-image"
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
    }, 4000)

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
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Background Image */}
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* Use LazyImage for better performance */}
            <LazyImage
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              quality={80}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} opacity-80`} />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-4"
                >
                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-cyan-200"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.h2>

                  <motion.p
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Button
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold min-h-[40px]"
                      asChild
                    >
                      <Link href={slides[currentSlide].cta.primary.href}>
                        {slides[currentSlide].cta.primary.text}
                      </Link>
                    </Button>
                    
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-900 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base bg-transparent min-h-[40px]"
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
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3">
          <button
            onClick={prevSlide}
            className="p-1.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors min-h-[40px] min-w-[40px]"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          <div className="flex space-x-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 min-h-[40px] min-w-[40px] flex items-center justify-center ${
                  index === currentSlide
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`} />
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-1.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors min-h-[40px] min-w-[40px]"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
          key={currentSlide}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-5 sm:top-6 right-3 sm:right-6 z-20">
        <div className="bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1">
          <span className="text-white font-mono text-xs">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  )
}