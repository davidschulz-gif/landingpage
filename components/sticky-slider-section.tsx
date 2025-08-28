"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { THEME_COLORS } from "@/lib/theme";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  video: string;
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
    video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
    textColor: "text-black",
    buttonText: "Upload CAD File",
    progress: "1/4"
  },
  {
    id: 2,
    title: "Preserve structure",
    subtitle: "enhance visuals",
    description: "Our AI maintains your exact architectural design while adding professional lighting, materials, and atmosphere.",
    video: "https://typus.ai/wp-content/uploads/2024/12/tweak-it.mp4#t=1,70",
    textColor: "text-black",
    buttonText: "See Examples",
    progress: "2/4"
  },
  {
    id: 3,
    title: "Real-time processing",
    subtitle: "instant results",
    description: "No waiting hours for renders. Get professional-quality visualizations in under 30 seconds with our AI engine.",
    video: "https://typus.ai/wp-content/uploads/2024/12/refine_1.mp4#t=1,70",
    textColor: "text-black",
    buttonText: "Try Now",
    progress: "3/4"
  },
  {
    id: 4,
    title: "Professional quality",
    subtitle: "client-ready results",
    description: "Create presentation-ready visualizations that impress clients and win projects. Export in 4K resolution.",
    video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
    textColor: "text-black",
    buttonText: "Get Started",
    progress: "4/4"
  }
];

export function StickySliderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const prevSlideRef = useRef(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const slideProgress = useTransform(scrollYProgress, [0, 1], [0, slides.length - 1]);

  useEffect(() => {
    const unsubscribe = slideProgress.onChange((latest) => {
      const newSlide = Math.max(0, Math.min(slides.length - 1, Math.round(latest)));
      if (newSlide !== currentSlide) {
        setScrollDirection(newSlide > prevSlideRef.current ? 'down' : 'up');
        prevSlideRef.current = currentSlide;
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
    <div ref={containerRef} className="relative h-[400vh]" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="sticky top-0 h-screen overflow-hidden" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 ${slide.textColor}`}
            style={{ 
              opacity: currentSlide === index ? 1 : 0
            }}
          >
            <div className="container mx-auto px-8 lg:px-16 h-full" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <div className="flex flex-col lg:flex-row h-full">
                {/* Content Side */}
                <div className="flex-1 flex flex-col justify-center py-16 lg:py-0 lg:pr-16">
                  {/* Progress Indicator */}
                  <div className="flex items-center space-x-3 mb-8">
                    {slides.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          i <= currentSlide ? "w-12" : "w-6"
                        }`}
                        style={{
                          backgroundColor: i <= currentSlide ? THEME_COLORS.primary : THEME_COLORS.primaryMuted
                        }}
                      />
                    ))}
                    <span className="text-sm font-mono ml-6 opacity-80" style={{ color: THEME_COLORS.textMuted }}>
                      {slides[currentSlide].progress}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="relative overflow-hidden">
                    {slides.map((slideContent, slideIndex) => (
                      <motion.div
                        key={slideContent.id}
                        className={slideIndex === currentSlide ? "block" : "hidden"}
                        initial={{ y: scrollDirection === 'down' ? 50 : -50 }}
                        animate={{ y: slideIndex === currentSlide ? 0 : (scrollDirection === 'down' ? 50 : -50) }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <div className="space-y-6">
                          <motion.h1 
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9]" 
                            style={{ color: THEME_COLORS.textPrimary }}
                            initial={{ y: scrollDirection === 'down' ? 30 : -30 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                          >
                            {slideContent.title}
                          </motion.h1>
                          
                          <motion.h2 
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight" 
                            style={{ color: THEME_COLORS.textSecondary }}
                            initial={{ y: scrollDirection === 'down' ? 30 : -30 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            {slideContent.subtitle}
                          </motion.h2>
                        </div>

                        <motion.p 
                          className="text-xl sm:text-2xl leading-relaxed max-w-2xl mt-8" 
                          style={{ color: THEME_COLORS.textMuted }}
                          initial={{ y: scrollDirection === 'down' ? 30 : -30 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          {slideContent.description}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-12">
                    <Button
                      size="lg"
                      className="px-16 py-8 text-2xl font-semibold rounded-full min-h-[80px] shadow-2xl hover:shadow-3xl transition-all duration-300 text-white hover:scale-105"
                      style={{ 
                        backgroundColor: THEME_COLORS.primary,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = THEME_COLORS.primaryHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = THEME_COLORS.primary;
                      }}
                    >
                      {slides[currentSlide].buttonText}
                    </Button>
                  </div>
                </div>

                {/* Video Side */}
                <div className="flex-1 flex items-center justify-center py-16 lg:py-0 relative overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {slides.map((slideContent, slideIndex) => (
                      <motion.div
                        key={slideContent.id}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ y: scrollDirection === 'down' ? '100%' : '-100%' }}
                        animate={{ 
                          y: slideIndex === currentSlide ? '0%' : (scrollDirection === 'down' ? '100%' : '-100%')
                        }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                          opacity: slideIndex === currentSlide ? 1 : 0
                        }}
                      >
                        <video
                          className="h-auto max-h-[80vh] w-[47.8%] rounded-t-[2rem] object-contain shadow-2xl"
                          playsInline
                          loop
                          autoPlay
                          muted
                        >
                          <source src={slideContent.video} type="video/mp4" />
                        </video>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      {isInView && (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className="w-2 h-8 rounded-full transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: currentSlide === index 
                  ? THEME_COLORS.primary 
                  : THEME_COLORS.primaryMuted
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}