"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
  project: string
  projectImage: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Principal Architect",
    company: "Chen Architecture Studio",
    avatar: "/placeholder-user.jpg",
    content: "Typus.AI has revolutionized our design process. What used to take days of rendering now happens in minutes, and the quality is absolutely stunning. Our clients are amazed by the photorealistic visualizations.",
    rating: 5,
    project: "Modern Villa Complex",
    projectImage: "/modern-villa-render.png"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Design Director",
    company: "Urban Planning Associates",
    avatar: "/placeholder-user.jpg",
    content: "The AI understands architectural principles better than any tool I've used. It preserves our design intent while adding incredible visual appeal. It's like having a rendering expert on our team 24/7.",
    rating: 5,
    project: "Commercial District",
    projectImage: "/modern-office-building.png"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Senior Designer",
    company: "Thompson & Associates",
    avatar: "/placeholder-user.jpg",
    content: "The speed and quality combination is unmatched. We can iterate designs rapidly and show clients multiple options in real-time. It's transformed how we present our work and win projects.",
    rating: 5,
    project: "Residential Complex",
    projectImage: "/modern-apartment-complex.png"
  },
  {
    id: 4,
    name: "David Park",
    role: "Visualization Specialist",
    company: "Park Design Group",
    avatar: "/placeholder-user.jpg",
    content: "As someone who's spent years in traditional rendering, Typus.AI is a game-changer. The AI produces results that rival our best manual work, but in a fraction of the time. Absolutely incredible technology.",
    rating: 5,
    project: "Cultural Center",
    projectImage: "/cultural-center-render.png"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Creative Director",
    company: "Wang Architecture",
    avatar: "/placeholder-user.jpg",
    content: "Our productivity has increased by 300% since adopting Typus.AI. The quality is consistently professional-grade, and our clients love seeing their projects come to life so quickly and beautifully.",
    rating: 5,
    project: "Healthcare Facility",
    projectImage: "/modern-healthcare-facility.png"
  }
]

export function TestimonialCarouselWidget() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,54,54,0.3),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Trusted by Architects Worldwide
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See what industry professionals are saying about Typus.AI and how it's transforming their design workflow.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Testimonial Content */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 mr-4" style={{ color: 'rgb(255, 54, 54)' }} />
                    <div className="flex space-x-1">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>

                  <blockquote className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 text-gray-100">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12 sm:w-16 sm:h-16">
                      <AvatarImage src={testimonials[currentIndex].avatar} />
                      <AvatarFallback className="text-white font-bold" style={{ backgroundColor: 'rgb(255, 54, 54)' }}>
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm sm:text-base" style={{ color: 'rgb(255, 54, 54)' }}>
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-xs sm:text-sm text-white/60">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm text-white/80">
                      <span className="font-semibold" style={{ color: 'rgb(255, 54, 54)' }}>Featured Project:</span> {testimonials[currentIndex].project}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Project Image */}
              <motion.div
                className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src={testimonials[currentIndex].projectImage}
                  alt={testimonials[currentIndex].project}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Project Label */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <h5 className="font-bold text-white text-sm sm:text-base">
                      {testimonials[currentIndex].project}
                    </h5>
                    <p className="text-xs sm:text-sm text-white/80">
                      Created with <span style={{ color: 'rgb(255, 54, 54)' }}>Typus.AI</span>
                    </p>
                  </div>
                </div>

                {/* Floating Animation */}
                <motion.div
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'rgb(255, 54, 54)' }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8 sm:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-3 h-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center scale-125"
                style={{
                  backgroundColor: index === currentIndex ? 'rgb(255, 54, 54)' : 'rgba(255,255,255,0.3)'
                }}
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: index === currentIndex ? 'rgb(255, 54, 54)' : 'rgba(255,255,255,0.3)'
                  }}
                />
              </button>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16"
          >
            {[
              { label: "Happy Clients", value: "10,000+" },
              { label: "Projects Created", value: "500K+" },
              { label: "Time Saved", value: "2M+ Hours" },
              { label: "Satisfaction", value: "99.9%" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: 'rgb(255, 54, 54)' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm sm:text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}