"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Wand2, Edit3, Sparkles, Video } from "lucide-react";
import { VideoPlayer } from "@/components/video/player";
import { BreathingAnimationText } from "./breathing-animation-text";
import { THEME_COLORS } from "@/lib/theme";

const tabs = [
  {
    id: "create",
    title: "Create Mode",
    icon: Wand2,
    description: "Transform sketches, elevations and 3D models into photorealistic architectural renderings in seconds.",
    video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "/modern-villa-render.png",
    features: ["AI-Powered Generation", "Instant Results", "Multiple Styles"]
  },
  {
    id: "edit",
    title: "Edit Mode", 
    icon: Edit3,
    description: "Add People, subtract furniture, and modify facades in your designs with natural language.",
    video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster: "/modern-office-building.png",
    features: ["Natural Language Editing", "Object Manipulation", "Smart Modifications"]
  },
  {
    id: "enhance",
    title: "Enhance Mode",
    icon: Sparkles,
    description: "Sharpen existing renderings, or add extra detail to your designs with a single click.",
    video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "/modern-interior-design.png",
    features: ["Quality Enhancement", "Detail Addition", "One-Click Processing"]
  },
  // {
  //   id: "animate",
  //   title: "Animate Mode",
  //   icon: Video,
  //   description: "Use Cinematic Presets to bring your visualizations to life in seconds.",
  //   video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  //   poster: "/modern-apartment-complex.png",
  //   features: ["Cinematic Presets", "Life-like Animation", "Quick Generation"]
  // }
];

// Video cache
const videoCache = new Map<string, HTMLVideoElement>();

export function TabVideoShowcase() {
  const [activeTab, setActiveTab] = useState("create");
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "200px" });
  
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  // Preload videos when component comes into view
  useEffect(() => {
    if (!isInView) return;

    const preloadVideo = (src: string) => {
      if (videoCache.has(src) || loadedVideos.has(src)) return;
      
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = src;
      video.load();
      
      video.addEventListener('loadedmetadata', () => {
        videoCache.set(src, video);
        setLoadedVideos(prev => new Set([...prev, src]));
      });
    };

    // Load active tab video first
    if (activeTabData?.video) {
      preloadVideo(activeTabData.video);
    }

    // Then preload other videos with delay
    const timeouts = tabs.map((tab, index) => 
      setTimeout(() => preloadVideo(tab.video), index * 500)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [isInView, activeTabData]);

  return (
    <section ref={sectionRef} className="py-12" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="w-full max-w-[65%] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <BreathingAnimationText animationType="black-gray">
            <motion.h2 
              className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-gray-900 dark:text-white mb-4 font-normal whitespace-nowrap"
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              FROM CONCEPT TO ANIMATION
            </motion.h2>
          </BreathingAnimationText>
          <BreathingAnimationText animationType="black-gray">
            <motion.p 
              className="text-[12px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-normal"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Leverage best in class AI Models to bring any design to life, in any style with natural language and no training required.
            </motion.p>
          </BreathingAnimationText>
        </div>

        {/* Main Content */}
        <div className="w-full">
          {/* Video Display */}
          <motion.div 
            className="relative mb-3"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {isInView && activeTabData ? (
                <VideoPlayer
                  src={activeTabData.video}
                  title={activeTabData.title}
                  poster={activeTabData.poster}
                  height="h-[400px] md:h-[500px] lg:h-[600px]"
                  preload={loadedVideos.has(activeTabData.video) ? "auto" : "metadata"}
                  shouldPlay={false}
                />
              ) : (
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                  {/* Video skeleton background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
                  
                  {/* Skeleton play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-6 h-6 bg-white/40 rounded-sm animate-pulse" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                    </div>
                  </div>
                  
                  {/* Skeleton controls bar */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/20 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-white/30 rounded animate-pulse" />
                        <div className="flex-1 h-1 bg-white/20 rounded animate-pulse" />
                        <div className="w-8 h-3 bg-white/30 rounded animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Loading text */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/20 rounded-lg px-3 py-1 backdrop-blur-sm">
                      <div className="text-white/70 text-sm animate-pulse">Loading video...</div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Tabs */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <div key={tab.id}>
                  <Card
                    className={`cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-red-100 dark:bg-red-900/30 border-2 shadow-lg animate-breathe-border"
                        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md"
                    } px-4 pb-6 pt-4`}
                    style={{
                      borderColor: isActive ? THEME_COLORS.primary : undefined
                    }}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <CardContent className="p-3 min-h-[200px] flex flex-col">
                      <motion.div 
                        className="flex items-center gap-2 mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className={`p-1 rounded ${
                            isActive ? "animate-breathe-primary-hover" : "bg-gray-100 dark:bg-gray-700"
                          }`} 
                          style={{
                            backgroundColor: isActive ? THEME_COLORS.primary : undefined
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className={`w-3 h-3 ${
                            isActive ? "text-white" : "text-gray-600 dark:text-gray-300"
                          }`} />
                        </motion.div>
                        <BreathingAnimationText animationType={isActive ? "red-orange" : "black-gray"}>
                          <motion.h3 
                            className={`text-sm font-bold ${
                              isActive ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"
                            }`} 
                            style={{
                              color: isActive ? THEME_COLORS.primary : undefined
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            {tab.title}
                          </motion.h3>
                        </BreathingAnimationText>
                      </motion.div>
                      
                      <BreathingAnimationText animationType="black-gray">
                        <motion.p 
                          className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed line-clamp-3"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          {tab.description}
                        </motion.p>
                      </BreathingAnimationText>

                      <motion.div 
                        className="space-y-1 flex-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {tab.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center gap-1.5"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.5 + (idx * 0.1) 
                            }}
                            viewport={{ once: true }}
                          >
                            <div className={`w-1 h-1 rounded-full flex-shrink-0 ${
                              isActive ? "animate-breathe-primary-hover" : "bg-gray-400"
                            }`} style={{
                              backgroundColor: isActive ? THEME_COLORS.primary : undefined
                            }} />
                            <BreathingAnimationText animationType="black-gray">
                              <span className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight truncate">
                                {feature}
                              </span>
                            </BreathingAnimationText>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}