"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { THEME_COLORS } from "@/lib/theme";
import { BreathingAnimationText } from "./breathing-animation-text";
import { Button as MovingBorderButton } from "./ui/moving-border";

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
      { id: 1, name: "Sketch", slideId: 1 },
      { id: 2, name: "3D Model To Render (plugins)", slideId: 2 },
      { id: 3, name: "CAD", slideId: 3 },
      { id: 4, name: "Sitephoto", slideId: 4 },
      { id: 5, name: "Model Photo", slideId: 5 },
      { id: 6, name: "Color Map (Upload Custom Textures)", slideId: 6 },
    ],
    slides: [
      {
        id: 1,
        title: "SKETCH TO RENDER",
        subtitle: "Hand Drawings Come Alive",
        description:
          "Transform your hand-drawn sketches into photorealistic architectural visualizations with AI precision.",
        video: "/videos/sketch.mp4",
        textColor: "text-black",
        buttonText: "Upload Sketch",
        progress: "1/6",
      },
      {
        id: 2,
        title: "3D MODEL TO RENDER",
        subtitle: "Plugins Integration",
        description:
          "Seamlessly integrate with your favorite 3D modeling software and enhance renders with AI.",
        video: "/videos/3d.mp4",
        textColor: "text-black",
        buttonText: "Get Plugins",
        progress: "2/6",
      },
      {
        id: 3,
        title: "CAD TRANSFORMATION",
        subtitle: "Technical To Visual",
        description:
          "Convert CAD files into stunning photorealistic renders while preserving structural accuracy.",
        video: "/videos/cad.mp4",
        textColor: "text-black",
        buttonText: "Try CAD",
        progress: "3/6",
      },
      {
        id: 4,
        title: "Site photo enhancement",
        subtitle: "Context Visualization",
        description:
          "Place your designs in real environments using site photos for contextual visualization.",
        video: "/videos/photo.mp4",
        textColor: "text-black",
        buttonText: "Upload Photo",
        progress: "4/6",
      },
      {
        id: 5,
        title: "MODEL PHOTOGRAPHY",
        subtitle: "Physical To Digital",
        description:
          "Capture physical architectural models and transform them into digital renders.",
        video: "/videos/modelphoto.mp4",
        textColor: "text-black",
        buttonText: "Capture Model",
        progress: "5/6",
      },
      {
        id: 6,
        title: "CUSTOM TEXTURES",
        subtitle: "Color Map Upload",
        description:
          "Upload your own textures and materials to create unique, personalized architectural visualizations.",
        video: "/videos/colormap.mp4",
        textColor: "text-black",
        buttonText: "Upload Textures",
        progress: "6/6",
      },
    ],
  },
  {
    id: 2,
    name: "EDITOR",
    subCategories: [
      { id: 1, name: "Inpaint Details", slideId: 1 },
      { id: 2, name: "Outpaint Expansion", slideId: 2 },
      { id: 3, name: "Add Style", slideId: 3 },
      { id: 4, name: "Remove Objects & Background", slideId: 4 },
      { id: 5, name: "Edit by Text", slideId: 5 },
    ],
    slides: [
      {
        id: 1,
        title: "INPAINT DETAILS",
        subtitle: "Precise Modifications",
        description:
          "Edit specific areas of your renders with AI-powered inpainting for precise modifications.",
        video: "/videos/artpresets.mp4",
        textColor: "text-black",
        buttonText: "Start Inpainting",
        progress: "1/5",
      },
      {
        id: 2,
        title: "OUTPAINT EXPANSION",
        subtitle: "Extend Your Vision",
        description:
          "Expand your renders beyond original boundaries with seamless AI-generated extensions.",
        video: "/videos/artpresets.mp4",
        textColor: "text-black",
        buttonText: "Expand View",
        progress: "2/5",
      },
      {
        id: 3,
        title: "STYLE APPLICATION",
        subtitle: "Aesthetic Transformation",
        description:
          "Apply different architectural styles and artistic approaches to transform your designs.",
        video: "/videos/styletransfer.mp4",
        textColor: "text-black",
        buttonText: "Browse Styles",
        progress: "3/5",
      },
      {
        id: 4,
        title: "OBJECT REMOVAL",
        subtitle: "Clean Backgrounds",
        description:
          "Remove unwanted objects and backgrounds with intelligent AI-powered content removal.",
        video: "/videos/artpresets.mp4",
        textColor: "text-black",
        buttonText: "Remove Objects",
        progress: "4/5",
      },
      {
        id: 5,
        title: "TEXT-BASED EDITING",
        subtitle: "Describe Changes",
        description:
          "Make complex edits by simply describing what you want to change in natural language.",
        video: "/videos/artpresets.mp4",
        textColor: "text-black",
        buttonText: "Edit by Text",
        progress: "5/5",
      },
    ],
  },
  {
    id: 3,
    name: "UPSCALER",
    subCategories: [{ id: 1, name: "Enhance Details & Upscale", slideId: 1 }],
    slides: [
      {
        id: 1,
        title: "DETAIL ENHANCEMENT",
        subtitle: "AI-powered upscaling",
        description:
          "Enhance image details and upscale your renders to higher resolutions with advanced AI algorithms.",
        video: "/videos/upscale.mp4",
        textColor: "text-black",
        buttonText: "Enhance Details",
        progress: "1/1",
      },
    ],
  },
];

// Video cache for performance
const videoCache = new Map<string, HTMLVideoElement>();

export function StickySliderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [manualTabSwitch, setManualTabSwitch] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const prevSlideRef = useRef(0);
  const sectionInView = useInView(containerRef, {
    once: true,
    margin: "300px",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentTabSlides = tabsData[activeTab].slides;
  const totalSlides = tabsData.reduce((acc, tab) => acc + tab.slides.length, 0);
  const slideProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalSlides - 1]
  );

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
        setScrollDirection(targetSlide > prevSlideRef.current ? "down" : "up");
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

  // Preload videos when section comes into view
  useEffect(() => {
    if (!sectionInView) return;

    const preloadVideo = (src: string) => {
      if (videoCache.has(src) || loadedVideos.has(src)) return;

      const video = document.createElement("video");
      video.preload = "metadata";
      video.src = src;
      video.load();

      video.addEventListener("loadedmetadata", () => {
        videoCache.set(src, video);
        setLoadedVideos((prev) => new Set([...prev, src]));
      });
    };

    // Load current slide video first
    const currentVideo = tabsData[activeTab]?.slides[currentSlide]?.video;
    if (currentVideo) {
      preloadVideo(currentVideo);
    }

    // Preload other videos with delay
    const allVideos = tabsData.flatMap((tab) =>
      tab.slides.map((slide) => slide.video)
    );
    const timeouts = allVideos.map((video, index) =>
      setTimeout(() => preloadVideo(video), index * 300)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [sectionInView, activeTab, currentSlide]);

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
    <div ref={containerRef} className="relative w-full max-w-[75%] mx-auto h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {currentTabSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 ${slide.textColor}`}
            style={{
              opacity: currentSlide === index ? 1 : 0,
            }}
          >
            <div className="h-full">
              <div className="flex flex-col lg:flex-row h-full">
                {/* Professional Navigation */}
                <div className="hidden lg:flex flex-col justify-center py-16 w-80 pr-8">
                  <div className="relative">
                    <div className="mb-6">
                      <BreathingAnimationText animationType="black-gray">
                        <motion.h3 
                          className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-50px" }}
                        >
                          Features
                        </motion.h3>
                      </BreathingAnimationText>
                      <div className="h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
                    </div>

                    <div className="space-y-2">
                      {tabsData.map((tab, tabIndex) => {
                        const isActiveTab = activeTab === tabIndex;
                        return (
                          <div key={tab.id} className="relative">
                            {isActiveTab ? (
                              <motion.div
                                initial={{ scale: 0.98, opacity: 0.9 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="relative w-full"
                              >
                                <MovingBorderButton
                                  duration={3000}
                                  className="bg-white border-0 text-black flex items-center justify-between w-full p-2 shadow-lg"
                                  containerClassName="w-full h-auto"
                                  borderClassName="bg-[radial-gradient(#ff6b35_40%,#ff3636_60%)] opacity-80"
                                  borderRadius="0.75rem"
                                  onClick={() => handleTabClick(tabIndex)}
                                  style={{
                                    borderRadius: "0.75rem",
                                    background: "white",
                                    boxShadow:
                                      "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)",
                                  }}
                                >
                                  <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-50">
                                      <div className="w-4 h-4 rounded-full bg-black animate-pulse"></div>
                                    </div>

                                    <div className="flex flex-col justify-center items-start">
                                      <BreathingAnimationText animationType="black-gray">
                                        <div className="font-semibold text-sm tracking-wide text-gray-900">
                                          {tab.name}
                                        </div>
                                      </BreathingAnimationText>
                                      <div className="text-xs text-gray-500">
                                        {tab.subCategories?.length || 0} tools
                                      </div>
                                    </div>
                                  </div>

                                  <div className="w-6 h-6 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full transition-transform duration-200"></div>
                                  </div>
                                </MovingBorderButton>
                              </motion.div>
                            ) : (
                              <motion.button
                                onClick={() => handleTabClick(tabIndex)}
                                className="group relative w-full text-left transition-all duration-300 ease-out rounded-xl overflow-hidden bg-gray-50/50 hover:bg-white hover:shadow-md"
                                whileHover={{ scale: 1.01, y: -1 }}
                                whileTap={{ scale: 0.99 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                              >
                                <div className="flex items-center justify-between p-2">
                                  <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white transition-colors duration-200">
                                      <div className="w-4 h-4 rounded-full bg-gray-300 group-hover:bg-gray-400 transition-colors duration-200"></div>
                                    </div>

                                    <div>
                                      <div className="font-semibold text-sm tracking-wide text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                        {tab.name}
                                      </div>
                                      <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200 mt-0.5">
                                        {tab.subCategories?.length || 0} tools
                                      </div>
                                    </div>
                                  </div>

                                  <div className="w-6 h-6 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-gray-400 group-hover:bg-gray-600 rounded-full transition-all duration-200"></div>
                                  </div>
                                </div>
                              </motion.button>
                            )}

                            <div
                              className={`overflow-hidden transition-all duration-500 ease-out ${
                                isActiveTab
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="pt-2 pb-4 ml-6">
                                <div className="space-y-1 relative">
                                  {tab.subCategories?.map((subCat) => {
                                    const slideIndex = subCat.slideId - 1;
                                    const isActiveSubCat =
                                      currentSlide === slideIndex &&
                                      isActiveTab;
                                    return (
                                      <motion.button
                                        key={subCat.id}
                                        onClick={() =>
                                          handleSubCategoryClick(
                                            tabIndex,
                                            slideIndex
                                          )
                                        }
                                        className={`group/sub relative w-full text-left transition-all duration-200 ease-out rounded-lg overflow-hidden ${
                                          isActiveSubCat
                                            ? "text-black shadow-sm bg-white"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                                        }`}
                                        whileHover={{
                                          scale: isActiveSubCat ? 1 : 1.01,
                                          x: isActiveSubCat ? 0 : 2,
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{
                                          duration: 0.15,
                                          ease: "easeOut",
                                        }}
                                      >
                                        <div className="flex items-center p-3 pl-4">
                                          <div
                                            className={`w-2 h-2 rounded-full mr-4 transition-all duration-200 ${
                                              isActiveSubCat
                                                ? "bg-black shadow-sm animate-pulse"
                                                : "bg-gray-300 group-hover/sub:bg-gray-400"
                                            }`}
                                          ></div>

                                          <div className="flex-1">
                                            <div
                                              className={`text-xs font-medium transition-colors duration-200 ${
                                                isActiveSubCat
                                                  ? "text-gray-900"
                                                  : "text-gray-600 group-hover/sub:text-gray-800"
                                              }`}
                                            >
                                              {subCat.name}
                                            </div>
                                          </div>

                                          {isActiveSubCat && (
                                            <motion.div
                                              initial={{ scale: 0, opacity: 0 }}
                                              animate={{ scale: 1, opacity: 1 }}
                                              className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"
                                            />
                                          )}
                                        </div>
                                      </motion.button>
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
                        <BreathingAnimationText animationType="black-gray">
                          <div className="text-xs text-gray-400 font-medium">
                            {currentTabSlides[currentSlide]?.progress ||
                              `${currentSlide + 1}/${currentTabSlides.length}`}
                          </div>
                        </BreathingAnimationText>
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
                        className={`h-2 rounded-full transition-all duration-500 cursor-pointer hover:opacity-80 ${
                          i === currentSlide
                            ? "w-10 bg-white animate-pulse"
                            : "w-6 bg-white animate-breathe-black-gray"
                        }`}
                      />
                    ))}
                    <BreathingAnimationText animationType="black-gray">
                      <span className="text-sm ml-6 opacity-80 text-black">
                        {currentTabSlides[currentSlide]?.progress ||
                          `${currentSlide + 1}/${currentTabSlides.length}`}
                      </span>
                    </BreathingAnimationText>
                  </div>

                  {/* Text Content */}
                  <div className="relative overflow-hidden">
                    {currentTabSlides.map((slideContent, slideIndex) => (
                      <motion.div
                        key={slideContent.id}
                        className={
                          slideIndex === currentSlide ? "block" : "hidden"
                        }
                        initial={{ y: scrollDirection === "down" ? 50 : -50 }}
                        animate={{
                          y:
                            slideIndex === currentSlide
                              ? 0
                              : scrollDirection === "down"
                              ? 50
                              : -50,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <BreathingAnimationText animationType="black-gray">
                          <div className="space-y-4">
                            <motion.h1
                              className="text-[30px] font-normal leading-[0.9] text-black"
                              style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                              }}
                              initial={{
                                y: scrollDirection === "down" ? 30 : -30,
                              }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.6, delay: 0.1 }}
                            >
                              {slideContent.title}
                            </motion.h1>

                            <motion.h2
                              className="text-[18px] font-light leading-tight text-black"
                              initial={{
                                y: scrollDirection === "down" ? 30 : -30,
                              }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                            >
                              {slideContent.subtitle}
                            </motion.h2>
                          </div>

                          <motion.p
                            className="text-[14px] leading-relaxed max-w-2xl mt-6 text-black"
                            initial={{
                              y: scrollDirection === "down" ? 30 : -30,
                            }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            {slideContent.description}
                          </motion.p>
                        </BreathingAnimationText>
                      </motion.div>
                    ))}
                  </div>

                  {/* Button Section */}
                  <div className="mt-8 space-y-6">
                    <Button
                      size="default"
                      className="px-8 py-3 text-sm font-medium rounded-lg text-white shadow-md hover:shadow-lg animate-breathe-primary-hover"
                    >
                      {currentTabSlides[currentSlide]?.buttonText ||
                        "Get Started"}
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
                        initial={{ y: "-100%" }}
                        animate={{
                          y: slideIndex === currentSlide ? "0%" : "-100%",
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        style={{
                          opacity: slideIndex === currentSlide ? 1 : 0,
                        }}
                      >
                        {sectionInView &&
                        loadedVideos.has(slideContent.video) ? (
                          <video
                            className="w-full max-w-xs h-[50vh] rounded-2xl object-cover shadow-2xl"
                            playsInline
                            loop
                            autoPlay
                            muted
                            preload="metadata"
                          >
                            <source src={slideContent.video} type="video/mp4" />
                          </video>
                        ) : (
                          <div className="w-full max-w-xs h-[50vh] rounded-2xl bg-gray-200 animate-pulse shadow-2xl flex items-center justify-center">
                            <div className="text-gray-500 text-sm">
                              Loading...
                            </div>
                          </div>
                        )}
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
        <div className="fixed right-[12.5%] top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col items-center space-y-3">
            {currentTabSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 rounded-full transition-all duration-500 cursor-pointer hover:opacity-80 ${
                  index === currentSlide
                    ? "h-10 bg-white animate-pulse"
                    : "h-6 bg-white animate-breathe-black-gray"
                }`}
              />
            ))}
            <BreathingAnimationText animationType="black-gray">
              <span className="text-sm mt-6 opacity-80 text-black">
                {currentTabSlides[currentSlide]?.progress ||
                  `${currentSlide + 1}/${currentTabSlides.length}`}
              </span>
            </BreathingAnimationText>
          </div>
        </div>
      )}
    </div>
  );
}
