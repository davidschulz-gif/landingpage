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
  {
    id: "animate",
    title: "Animate Mode",
    icon: Video,
    description: "Use Cinematic Presets to bring your visualizations to life in seconds.",
    video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    poster: "/modern-apartment-complex.png",
    features: ["Cinematic Presets", "Life-like Animation", "Quick Generation"]
  }
];

// Video cache
const videoCache = new Map<string, HTMLVideoElement>();

export function TabVideoShowcase() {
  const [activeTab, setActiveTab] = useState("animate");
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <BreathingAnimationText animationType="black-gray">
            <h2 className="text-xl sm:text-3xl lg:text-5xl text-gray-900 dark:text-white mb-6 font-normal">
              FROM CONCEPT TO ANIMATION
            </h2>
          </BreathingAnimationText>
          <BreathingAnimationText animationType="black-gray">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal">
              Leverage best in class AI Models to bring any design to life, in any style with natural language and no training required.
            </p>
          </BreathingAnimationText>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Video Display */}
          <div className="relative mb-12">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {isInView && activeTabData ? (
                <VideoPlayer
                  src={activeTabData.video}
                  title={activeTabData.title}
                  poster={activeTabData.poster}
                  height="h-[650px]"
                  preload={loadedVideos.has(activeTabData.video) ? "auto" : "metadata"}
                />
              ) : (
                <div className="h-[650px] bg-gray-200 rounded-xl animate-pulse flex items-center justify-center">
                  <div className="text-gray-500">Loading video...</div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <motion.div
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-red-100 dark:bg-red-900/30 border-2 shadow-lg animate-breathe-border"
                        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md"
                    }`}
                    style={{
                      borderColor: isActive ? THEME_COLORS.primary : undefined
                    }}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${
                          isActive ? "animate-breathe-primary-hover" : "bg-gray-100 dark:bg-gray-700"
                        }`} style={{
                          backgroundColor: isActive ? THEME_COLORS.primary : undefined
                        }}>
                          <Icon className={`w-5 h-5 ${
                            isActive ? "text-white" : "text-gray-600 dark:text-gray-300"
                          }`} />
                        </div>
                        <BreathingAnimationText animationType={isActive ? "red-orange" : "black-gray"}>
                          <h3 className={`font-bold ${
                            isActive ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"
                          }`} style={{
                            color: isActive ? THEME_COLORS.primary : undefined
                          }}>
                            {tab.title}
                          </h3>
                        </BreathingAnimationText>
                      </div>
                      
                      <BreathingAnimationText animationType="black-gray">
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                          {tab.description}
                        </p>
                      </BreathingAnimationText>

                      <div className="space-y-2">
                        {tab.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              isActive ? "animate-breathe-primary-hover" : "bg-gray-400"
                            }`} style={{
                              backgroundColor: isActive ? THEME_COLORS.primary : undefined
                            }} />
                            <BreathingAnimationText animationType="black-gray">
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {feature}
                              </span>
                            </BreathingAnimationText>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Active Tab Details */}
          {/* <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 text-center"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {activeTabData?.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {activeTabData?.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence> */}
        </div>
      </div>
    </section>
  );
}