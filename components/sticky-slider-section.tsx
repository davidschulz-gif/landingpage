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

interface TabData {
  id: number;
  name: string;
  slides: SlideData[];
}

const tabsData: TabData[] = [
  {
    id: 1,
    name: "CAD Transform",
    slides: [
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
    ]
  },
  {
    id: 2,
    name: "AI Design",
    slides: [
      {
        id: 1,
        title: "Generate concepts",
        subtitle: "from simple prompts",
        description: "Describe your vision and let AI create multiple design variations instantly.",
        video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
        textColor: "text-black",
        buttonText: "Try Generator",
        progress: "1/4"
      },
      {
        id: 2,
        title: "Refine details",
        subtitle: "perfect your vision",
        description: "Fine-tune materials, lighting, and atmosphere with intelligent suggestions.",
        video: "https://typus.ai/wp-content/uploads/2024/12/tweak-it.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "Explore Tools",
        progress: "2/4"
      },
      {
        id: 3,
        title: "Style transfer",
        subtitle: "apply any aesthetic",
        description: "Transform your designs with different architectural styles and artistic approaches.",
        video: "https://typus.ai/wp-content/uploads/2024/12/refine_1.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "See Styles",
        progress: "3/4"
      },
      {
        id: 4,
        title: "Export ready",
        subtitle: "high-res outputs",
        description: "Download your creations in multiple formats ready for presentation or production.",
        video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
        textColor: "text-black",
        buttonText: "Download",
        progress: "4/4"
      }
    ]
  },
  {
    id: 3,
    name: "3D Modeling",
    slides: [
      {
        id: 1,
        title: "Build 3D models",
        subtitle: "from 2D sketches",
        description: "Convert your drawings into detailed 3D models with AI-powered reconstruction.",
        video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
        textColor: "text-black",
        buttonText: "Start Modeling",
        progress: "1/4"
      },
      {
        id: 2,
        title: "Add textures",
        subtitle: "realistic materials",
        description: "Apply photorealistic textures and materials with our extensive library.",
        video: "https://typus.ai/wp-content/uploads/2024/12/tweak-it.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "Browse Materials",
        progress: "2/4"
      },
      {
        id: 3,
        title: "Dynamic lighting",
        subtitle: "perfect ambiance",
        description: "Set up professional lighting scenarios that enhance your 3D models.",
        video: "https://typus.ai/wp-content/uploads/2024/12/refine_1.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "Light Setup",
        progress: "3/4"
      },
      {
        id: 4,
        title: "Render engine",
        subtitle: "studio quality",
        description: "Generate stunning renders with our advanced ray-tracing engine.",
        video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
        textColor: "text-black",
        buttonText: "Render Now",
        progress: "4/4"
      }
    ]
  },
  {
    id: 4,
    name: "Collaboration",
    slides: [
      {
        id: 1,
        title: "Team workspace",
        subtitle: "shared projects",
        description: "Collaborate with your team in real-time on design projects and iterations.",
        video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
        textColor: "text-black",
        buttonText: "Create Team",
        progress: "1/4"
      },
      {
        id: 2,
        title: "Version control",
        subtitle: "track changes",
        description: "Keep track of all design iterations with automatic version management.",
        video: "https://typus.ai/wp-content/uploads/2024/12/tweak-it.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "View History",
        progress: "2/4"
      },
      {
        id: 3,
        title: "Client feedback",
        subtitle: "streamlined reviews",
        description: "Share designs with clients and collect feedback directly on the platform.",
        video: "https://typus.ai/wp-content/uploads/2024/12/refine_1.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "Share Project",
        progress: "3/4"
      },
      {
        id: 4,
        title: "Export & deliver",
        subtitle: "final handoff",
        description: "Package and deliver final assets with comprehensive documentation.",
        video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
        textColor: "text-black",
        buttonText: "Deliver",
        progress: "4/4"
      }
    ]
  }
];

export function StickySliderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const prevSlideRef = useRef(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const currentTabSlides = tabsData[activeTab].slides;
  const slideProgress = useTransform(scrollYProgress, [0, 1], [0, currentTabSlides.length - 1]);

  useEffect(() => {
    const unsubscribe = slideProgress.onChange((latest) => {
      const newSlide = Math.max(0, Math.min(currentTabSlides.length - 1, Math.round(latest)));
      if (newSlide !== currentSlide) {
        setScrollDirection(newSlide > prevSlideRef.current ? 'down' : 'up');
        prevSlideRef.current = currentSlide;
        setCurrentSlide(newSlide);
      }
    });

    return () => unsubscribe();
  }, [slideProgress, currentSlide, currentTabSlides.length]);

  useEffect(() => {
    const unsubscribeProgress = scrollYProgress.onChange((latest) => {
      setIsInView(latest > 0 && latest < 1);
    });

    return () => unsubscribeProgress();
  }, [scrollYProgress]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  return (
    <div ref={containerRef} className="relative h-[400vh]" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="sticky top-0 h-screen overflow-hidden" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
        {currentTabSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 ${slide.textColor}`}
            style={{ 
              opacity: currentSlide === index ? 1 : 0
            }}
          >
            <div className="container mx-auto px-8 lg:px-16 h-full" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <div className="flex flex-col lg:flex-row h-full">
                {/* Vertical Tabs */}
                <div className="hidden lg:flex flex-col justify-center py-16 w-80 pr-8">
                  <div className="space-y-3">
                    {tabsData.map((tab, index) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(index)}
                        className={`group relative w-full text-left p-4 rounded-xl transition-all duration-300 ${
                          activeTab === index 
                            ? 'bg-white shadow-lg scale-105' 
                            : 'bg-white/30 hover:bg-white/60 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div 
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              activeTab === index ? 'scale-125' : 'scale-100'
                            }`}
                            style={{
                              backgroundColor: activeTab === index 
                                ? THEME_COLORS.primary 
                                : THEME_COLORS.primaryMuted
                            }}
                          />
                          <div className="flex-1">
                            <div className={`font-semibold text-base transition-colors duration-300 ${
                              activeTab === index ? 'text-black' : 'text-gray-600'
                            }`}>
                              {tab.name}
                            </div>
                          </div>
                        </div>
                        
                        <div 
                          className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-300 ${
                            activeTab === index ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ backgroundColor: THEME_COLORS.primary }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 flex flex-col justify-center py-16 lg:py-0 lg:pr-16">
                  {/* Progress Indicator */}
                  <div className="flex items-center space-x-3 mb-8">
                    {currentTabSlides.map((_, i) => (
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
                      {currentTabSlides[currentSlide].progress}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="relative overflow-hidden">
                    {currentTabSlides.map((slideContent, slideIndex) => (
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
                      {currentTabSlides[currentSlide].buttonText}
                    </Button>
                  </div>
                </div>

                {/* Video Side */}
                <div className="flex-1 flex items-center justify-center py-16 lg:py-0 relative overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {currentTabSlides.map((slideContent, slideIndex) => (
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
          {currentTabSlides.map((_, index) => (
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