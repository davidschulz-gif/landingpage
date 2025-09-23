"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Instagram, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SlideContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const slideData: SlideContent[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    subtitle: "Everywhere your business needs it",
    description: "Effortlessly automate workflows and boost productivity with intelligent AI solutions",
    icon: <MessageCircle className="w-8 h-8" />,
    features: [
      "Smart workflow automation",
      "Intelligent task management", 
      "Real-time analytics"
    ]
  },
  {
    id: "customer-engagement",
    title: "Customer Engagement",
    subtitle: "Turn interactions into meaningful conversations",
    description: "Transform customer relationships with AI-powered engagement tools",
    icon: <Instagram className="w-8 h-8" />,
    features: [
      "Personalized interactions",
      "Multi-channel support",
      "Behavioral insights"
    ]
  },
  {
    id: "business-growth",
    title: "Business Growth",
    subtitle: "Transform leads into loyal customers",
    description: "Scale your business with intelligent growth strategies and automation",
    icon: <Phone className="w-8 h-8" />,
    features: [
      "Lead qualification",
      "Sales automation",
      "Performance tracking"
    ]
  }
];

export function ProfessionalSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides - faster interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 3000); // Reduced from 5000ms

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-100 py-16"> {/* Reduced from py-20 */}
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ef4444_1px,transparent_1px),linear-gradient(-45deg,#6b7280_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} // Reduced from 0.8s
          className="text-center mb-12" // Reduced from mb-16
        >
          <h2 className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-black mb-4", // Reduced font sizes and margin
            "bg-gradient-to-r from-red-600 via-gray-800 to-red-500",
            "bg-clip-text text-transparent"
          )}>
            Everywhere your audience is
          </h2>
        </motion.div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} // Reduced from 0.5s
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10" // Reduced gap and margin
            >
              {slideData.map((slide, index) => (
                <Card
                  key={slide.id}
                  className={cn(
                    "p-6 border-0 transition-all duration-300", // Reduced padding and duration
                    index === currentSlide
                      ? "bg-white shadow-2xl scale-105 ring-2 ring-red-500/20"
                      : "bg-white/80 shadow-lg hover:shadow-xl",
                    "backdrop-blur-sm"
                  )}
                >
                  <div className="space-y-4"> {/* Reduced from space-y-6 */}
                    {/* Icon */}
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center", // Reduced from w-16 h-16
                      index === currentSlide
                        ? "bg-gradient-to-br from-red-500 to-red-600 text-white"
                        : "bg-gray-100 text-gray-600"
                    )}>
                      {slide.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2"> {/* Reduced from text-2xl */}
                        {slide.title}
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed text-sm"> {/* Reduced font size and margin */}
                        {slide.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1"> {/* Reduced from space-y-2 */}
                      {slide.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-600"> {/* Reduced font size */}
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" /> {/* Reduced margin */}
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      variant={index === currentSlide ? "default" : "outline"}
                      className={cn(
                        "w-full mt-4 font-semibold text-sm", // Reduced margin and font size
                        index === currentSlide
                          ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      LEARN MORE →
                    </Button>
                  </div>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-3"> {/* Reduced from space-x-4 */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-red-500 hover:bg-red-50" // Reduced from w-12 h-12
            >
              <ChevronLeft className="w-4 h-4" /> {/* Reduced from w-5 h-5 */}
            </Button>

            {/* Slide Indicators */}
            <div className="flex space-x-1.5"> {/* Reduced from space-x-2 */}
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-200", // Reduced from w-3 h-3
                    index === currentSlide
                      ? "bg-red-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-red-500 hover:bg-red-50" // Reduced from w-12 h-12
            >
              <ChevronRight className="w-4 h-4" /> {/* Reduced from w-5 h-5 */}
            </Button>
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="mt-6 text-center"> {/* Reduced from mt-8 */}
          <div className="inline-flex items-center space-x-2 text-xs text-gray-500"> {/* Reduced font size */}
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span>Auto-advancing every 3 seconds</span> {/* Updated text */}
          </div>
        </div>
      </div>
    </section>
  );
}