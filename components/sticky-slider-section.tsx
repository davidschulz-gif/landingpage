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

interface SubCategory {
  id: number;
  name: string;
  slideId: number;
}

interface TabData {
  id: number;
  name: string;
  slides: SlideData[];
  subCategories: SubCategory[];
}

const tabsData: TabData[] = [
  {
    id: 1,
    name: "CREATOR",
    subCategories: [
      { id: 1, name: "sketch", slideId: 1 },
      { id: 2, name: "3d model to render (plugins)", slideId: 2 },
      { id: 3, name: "cad", slideId: 3 },
      { id: 4, name: "sitephoto", slideId: 4 },
      { id: 5, name: "model photo", slideId: 5 },
      { id: 6, name: "color map (upload custom textures)", slideId: 6 }
    ],
    slides: [
      {
        id: 1,
        title: "Sketch to render",
        subtitle: "hand drawings come alive",
        description: "Transform your hand-drawn sketches into photorealistic architectural visualizations with AI precision.",
        video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
        textColor: "text-black",
        buttonText: "Upload Sketch",
        progress: "1/6"
      },
      {
        id: 2,
        title: "3D model to render",
        subtitle: "plugins integration",
        description: "Seamlessly integrate with your favorite 3D modeling software and enhance renders with AI.",
        video: "https://typus.ai/wp-content/uploads/2024/12/tweak-it.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "Get Plugins",
        progress: "2/6"
      },
      {
        id: 3,
        title: "CAD transformation",
        subtitle: "technical to visual",
        description: "Convert CAD files into stunning photorealistic renders while preserving structural accuracy.",
        video: "https://typus.ai/wp-content/uploads/2024/12/refine_1.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "Try CAD",
        progress: "3/6"
      },
      {
        id: 4,
        title: "Site photo enhancement",
        subtitle: "context visualization",
        description: "Place your designs in real environments using site photos for contextual visualization.",
        video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
        textColor: "text-black",
        buttonText: "Upload Photo",
        progress: "4/6"
      },
      {
        id: 5,
        title: "Model photography",
        subtitle: "physical to digital",
        description: "Capture physical architectural models and transform them into digital renders.",
        video: "https://typus.ai/wp-content/uploads/2024/12/tweak-it.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "Capture Model",
        progress: "5/6"
      },
      {
        id: 6,
        title: "Custom textures",
        subtitle: "color map upload",
        description: "Upload your own textures and materials to create unique, personalized architectural visualizations.",
        video: "https://typus.ai/wp-content/uploads/2024/12/refine_1.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "Upload Textures",
        progress: "6/6"
      }
    ]
  },
  {
    id: 2,
    name: "EDITOR",
    subCategories: [
      { id: 1, name: "inpaint", slideId: 1 },
      { id: 2, name: "outpaint", slideId: 2 },
      { id: 3, name: "add style", slideId: 3 },
      { id: 4, name: "remove objects & background", slideId: 4 },
      { id: 5, name: "edit by text", slideId: 5 }
    ],
    slides: [
      {
        id: 1,
        title: "Inpaint details",
        subtitle: "precise modifications",
        description: "Edit specific areas of your renders with AI-powered inpainting for precise modifications.",
        video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
        textColor: "text-black",
        buttonText: "Start Inpainting",
        progress: "1/5"
      },
      {
        id: 2,
        title: "Outpaint expansion",
        subtitle: "extend your vision",
        description: "Expand your renders beyond original boundaries with seamless AI-generated extensions.",
        video: "https://typus.ai/wp-content/uploads/2024/12/tweak-it.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "Expand View",
        progress: "2/5"
      },
      {
        id: 3,
        title: "Style application",
        subtitle: "aesthetic transformation",
        description: "Apply different architectural styles and artistic approaches to transform your designs.",
        video: "https://typus.ai/wp-content/uploads/2024/12/refine_1.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "Browse Styles",
        progress: "3/5"
      },
      {
        id: 4,
        title: "Object removal",
        subtitle: "clean backgrounds",
        description: "Remove unwanted objects and backgrounds with intelligent AI-powered content removal.",
        video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
        textColor: "text-black",
        buttonText: "Remove Objects",
        progress: "4/5"
      },
      {
        id: 5,
        title: "Text-based editing",
        subtitle: "describe changes",
        description: "Make complex edits by simply describing what you want to change in natural language.",
        video: "https://typus.ai/wp-content/uploads/2024/12/tweak-it.mp4#t=1,70",
        textColor: "text-black",
        buttonText: "Edit by Text",
        progress: "5/5"
      }
    ]
  },
  {
    id: 3,
    name: "UPSCALER",
    subCategories: [
      { id: 1, name: "enhance details & upscale", slideId: 1 }
    ],
    slides: [
      {
        id: 1,
        title: "Detail enhancement",
        subtitle: "AI-powered upscaling",
        description: "Enhance image details and upscale your renders to higher resolutions with advanced AI algorithms.",
        video: "https://typus.ai/wp-content/uploads/2024/12/create_1-1.mp4#t=1",
        textColor: "text-black",
        buttonText: "Enhance Details",
        progress: "1/1"
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
  const [manualTabSwitch, setManualTabSwitch] = useState(false);
  const prevSlideRef = useRef(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const currentTabSlides = tabsData[activeTab].slides;
  const totalSlides = tabsData.reduce((acc, tab) => acc + tab.slides.length, 0);
  const slideProgress = useTransform(scrollYProgress, [0, 1], [0, totalSlides - 1]);

  useEffect(() => {
    const unsubscribe = slideProgress.onChange((latest) => {
      if (manualTabSwitch) return;
      
      const globalSlideIndex = Math.round(latest);
      let targetTab = 0;
      let targetSlide = 0;
      let slideCount = 0;
      
      for (let i = 0; i < tabsData.length; i++) {
        if (globalSlideIndex < slideCount + tabsData[i].slides.length) {
          targetTab = i;
          targetSlide = globalSlideIndex - slideCount;
          break;
        }
        slideCount += tabsData[i].slides.length;
      }
      
      if (targetTab !== activeTab) {
        setActiveTab(targetTab);
      }
      
      if (targetSlide !== currentSlide) {
        setScrollDirection(targetSlide > prevSlideRef.current ? 'down' : 'up');
        prevSlideRef.current = currentSlide;
        setCurrentSlide(targetSlide);
      }
    });

    return () => unsubscribe();
  }, [slideProgress, currentSlide, activeTab, manualTabSwitch]);

  useEffect(() => {
    const unsubscribeProgress = scrollYProgress.onChange((latest) => {
      setIsInView(latest > 0 && latest < 1);
    });

    return () => unsubscribeProgress();
  }, [scrollYProgress]);

  useEffect(() => {
    setCurrentSlide(0);
    setManualTabSwitch(false);
  }, [activeTab]);

  const handleTabClick = (tabIndex: number) => {
    setManualTabSwitch(true);
    setActiveTab(tabIndex);
    setTimeout(() => setManualTabSwitch(false), 100);
  };

  const handleSubCategoryClick = (tabIndex: number, slideIndex: number) => {
    setManualTabSwitch(true);
    setActiveTab(tabIndex);
    setCurrentSlide(slideIndex);
    setTimeout(() => setManualTabSwitch(false), 100);
  };

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
                {/* Professional Navigation */}
                <div className="hidden lg:flex flex-col justify-center py-16 w-80 pr-8">
                  <div className="relative">
                    <div className="mb-6">
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                        Features
                      </h3>
                      <div className="h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
                    </div>

                    <div className="space-y-2">
                      {tabsData.map((tab, tabIndex) => {
                        const isActiveTab = activeTab === tabIndex;
                        return (
                          <div key={tab.id} className="relative">
                            <button
                              onClick={() => handleTabClick(tabIndex)}
                              className={`group relative w-full text-left transition-all duration-300 ease-out rounded-xl overflow-hidden ${
                                isActiveTab 
                                  ? 'text-white shadow-lg' 
                                  : 'hover:bg-white/60 text-gray-700 hover:text-black'
                              }`}
                              style={{
                                background: isActiveTab ? THEME_COLORS.primary : 'transparent'
                              }}
                            >
                              <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                                isActiveTab ? 'opacity-100' : 'opacity-0'
                              }`} style={{ backgroundColor: THEME_COLORS.primary }}></div>
                              
                              <div className="flex items-center justify-between p-4 pl-6">
                                <div className="flex items-center space-x-3">
                                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                    isActiveTab ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'
                                  }`}>
                                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                      isActiveTab ? 'bg-white' : 'bg-gray-400 group-hover:bg-gray-600'
                                    }`}></div>
                                  </div>
                                  
                                  <div>
                                    <div className={`font-bold text-sm tracking-wide transition-colors duration-300 ${
                                      isActiveTab ? 'text-white' : 'text-gray-800 group-hover:text-black'
                                    }`}>
                                      {tab.name}
                                    </div>
                                    <div className={`text-xs transition-colors duration-300 ${
                                      isActiveTab ? 'text-white/70' : 'text-gray-500'
                                    }`}>
                                      {tab.subCategories?.length || 0} tools
                                    </div>
                                  </div>
                                </div>
                                
                                <div className={`w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
                                  isActiveTab ? 'rotate-90' : 'rotate-0'
                                }`}>
                                  <div className={`w-1.5 h-1.5 border-r-2 border-b-2 rotate-45 transition-colors duration-300 ${
                                    isActiveTab ? 'border-white/70' : 'border-gray-400'
                                  }`}></div>
                                </div>
                              </div>
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-500 ease-out ${
                              isActiveTab ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                              <div className="pt-2 pb-4 ml-6">
                                <div className="space-y-1 relative">
                                  {tab.subCategories?.map((subCat) => {
                                    const slideIndex = subCat.slideId - 1;
                                    const isActiveSubCat = currentSlide === slideIndex && isActiveTab;
                                    return (
                                      <button
                                        key={subCat.id}
                                        onClick={() => handleSubCategoryClick(tabIndex, slideIndex)}
                                        className={`group/sub relative w-full text-left transition-all duration-200 ease-out rounded-lg overflow-hidden ${
                                          isActiveSubCat
                                            ? 'text-black shadow-sm border'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                                        }`}
                                        style={{
                                          background: isActiveSubCat ? THEME_COLORS.primaryLight : 'transparent',
                                          borderColor: isActiveSubCat ? THEME_COLORS.primaryMuted : 'transparent'
                                        }}
                                      >
                                        <div className="flex items-center p-3 pl-4">
                                          <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-200 ${
                                            isActiveSubCat 
                                              ? 'shadow-sm' 
                                              : 'bg-gray-300 group-hover/sub:bg-gray-400'
                                          }`} style={{
                                            backgroundColor: isActiveSubCat ? THEME_COLORS.primary : undefined
                                          }}></div>
                                          
                                          <div className="flex-1">
                                            <div className={`text-xs font-medium transition-colors duration-200 ${
                                              isActiveSubCat ? 'text-gray-800' : 'text-gray-600 group-hover/sub:text-gray-800'
                                            }`}>
                                              {subCat.name}
                                            </div>
                                          </div>
                                          
                                          {isActiveSubCat && (
                                            <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: THEME_COLORS.primary }}></div>
                                          )}
                                        </div>
                                        
                                        {isActiveSubCat && (
                                          <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: THEME_COLORS.primaryLight }}></div>
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="mt-6 pt-4">
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-200"></div>
                      <div className="mt-3 px-2">
                        <div className="text-xs text-gray-400 font-medium">
                          {currentTabSlides[currentSlide]?.progress || `${currentSlide + 1}/${currentTabSlides.length}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 flex flex-col justify-center py-16 lg:py-0 lg:pr-16">
                  {/* Progress Indicator */}
                  <div className="flex items-center space-x-3 mb-8">
                    {currentTabSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1 rounded-full transition-all duration-500 cursor-pointer hover:opacity-80 ${
                          i <= currentSlide ? "w-12" : "w-6"
                        }`}
                        style={{
                          backgroundColor: i <= currentSlide ? THEME_COLORS.primary : THEME_COLORS.primaryMuted
                        }}
                      />
                    ))}
                    <span className="text-sm font-mono ml-6 opacity-80 text-black">
                      {currentTabSlides[currentSlide]?.progress || `${currentSlide + 1}/${currentTabSlides.length}`}
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
                        <div className="space-y-4">
                          <motion.h1 
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] text-black" 
                            initial={{ y: scrollDirection === 'down' ? 30 : -30 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                          >
                            {slideContent.title}
                          </motion.h1>
                          
                          <motion.h2 
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-black" 
                            initial={{ y: scrollDirection === 'down' ? 30 : -30 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            {slideContent.subtitle}
                          </motion.h2>
                        </div>

                        <motion.p 
                          className="text-base sm:text-lg leading-relaxed max-w-2xl mt-6 text-black" 
                          initial={{ y: scrollDirection === 'down' ? 30 : -30 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          {slideContent.description}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Button Section */}
                  <div className="mt-8 space-y-6">
                    <Button
                      size="default"
                      className="px-8 py-3 text-sm font-medium rounded-lg text-white transition-all duration-300 shadow-md hover:shadow-lg"
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
                      {currentTabSlides[currentSlide]?.buttonText || 'Get Started'}
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
                        initial={{ y: '-100%' }}
                        animate={{ 
                          y: slideIndex === currentSlide ? '0%' : '-100%'
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