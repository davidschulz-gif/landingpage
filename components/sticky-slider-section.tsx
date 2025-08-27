"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  backgroundColor: string;
  textColor: string;
  buttonText: string;
  progress: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Transform CAD files",
    subtitle: "into stunning renders",
    description: "Upload your architectural drawings and watch AI transform them into photorealistic visualizations in seconds.",
    image: "/modern-villa-render.png",
    backgroundColor: "bg-white",
    textColor: "text-black",
    buttonText: "Upload CAD File",
    progress: "1/4"
  },
  {
    id: 2,
    title: "Preserve structure",
    subtitle: "enhance visuals",
    description: "Our AI maintains your exact architectural design while adding professional lighting, materials, and atmosphere.",
    image: "/structure-preservation-architecture.png",
    backgroundColor: "bg-black",
    textColor: "text-white",
    buttonText: "See Examples",
    progress: "2/4"
  },
  {
    id: 3,
    title: "Real-time processing",
    subtitle: "instant results",
    description: "No waiting hours for renders. Get professional-quality visualizations in under 30 seconds with our AI engine.",
    image: "/real-time-rendering-demo.png",
    backgroundColor: "bg-white",
    textColor: "text-black",
    buttonText: "Try Now",
    progress: "3/4"
  },
  {
    id: 4,
    title: "Professional quality",
    subtitle: "client-ready results",
    description: "Create presentation-ready visualizations that impress clients and win projects. Export in 4K resolution.",
    image: "/architectural-render.png",
    backgroundColor: "bg-black",
    textColor: "text-white",
    buttonText: "Start Creating",
    progress: "4/4"
  }
];

export function StickySliderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const slideProgress = useTransform(scrollYProgress, [0, 1], [0, slides.length - 1]);

  useEffect(() => {
    const unsubscribe = slideProgress.onChange((latest) => {
      const newSlide = Math.round(latest);
      if (newSlide !== currentSlide && newSlide >= 0 && newSlide < slides.length) {
        setCurrentSlide(newSlide);
      }
    });

    return () => unsubscribe();
  }, [slideProgress, currentSlide]);

  useEffect(() => {
    const unsubscribeProgress = scrollYProgress.onChange((latest) => {
      setIsInView(latest > 0 && latest < 1);
    });

    return () => unsubscribeProgress();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 ${slide.backgroundColor} ${slide.textColor}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : -50
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Progress Indicator */}
                  <div className="flex items-center space-x-2">
                    {slides.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          i <= currentSlide 
                            ? "w-8" 
                            : "w-4"
                        }`}
                        style={{
                          backgroundColor: i <= currentSlide 
                            ? 'rgb(255, 54, 54)' 
                            : slide.textColor === 'text-white' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'
                        }}
                      />
                    ))}
                    <span className="text-sm font-mono ml-4 opacity-70">
                      {slide.progress}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: currentSlide === index ? 1 : 0,
                        y: currentSlide === index ? 0 : 30
                      }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                    >
                      {slide.title}
                    </motion.h2>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: currentSlide === index ? 1 : 0,
                        y: currentSlide === index ? 0 : 30
                      }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-light opacity-90"
                    >
                      {slide.subtitle}
                    </motion.h3>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      y: currentSlide === index ? 0 : 20
                    }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-lg sm:text-xl leading-relaxed opacity-90 max-w-lg"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      y: currentSlide === index ? 0 : 20
                    }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <Button
                      size="lg"
                      className={`px-8 py-4 text-lg font-semibold rounded-full min-h-[44px] shadow-lg hover:shadow-xl transition-all duration-300`}
                      style={{
                        backgroundColor: 'rgb(255, 54, 54)',
                        color: 'white',
                        border: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgb(220, 38, 38)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgb(255, 54, 54)';
                      }}
                    >
                      {slide.buttonText}
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : 50,
                    scale: currentSlide === index ? 1 : 0.9
                  }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3"
                  >
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator - Only show when component is in view */}
      {isInView && (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className="w-2 h-8 rounded-full transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: currentSlide === index 
                  ? 'rgb(255, 54, 54)' 
                  : 'rgba(255, 255, 255, 0.3)'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}