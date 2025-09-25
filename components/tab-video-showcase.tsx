"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Wand2, Edit3, Sparkles, Video } from "lucide-react";
import { VideoPlayer } from "@/components/video/player";
import { BreathingAnimationText } from "./breathing-animation-text";
import { THEME_COLORS } from "@/lib/theme";

const tabs = [
  {
    id: "create",
    title: "Create Mode",
    icon: Wand2,
    description:
      "Transform sketches, elevations and 3D models into photorealistic architectural renderings in seconds.",
    video: "/videos/showcase/create_showcase.mp4",
    poster: "/modern-villa-render.png",
    features: ["AI-Powered Generation", "Instant Results", "Multiple Styles"],
  },
  {
    id: "edit",
    title: "Edit Mode",
    icon: Edit3,
    description:
      "Add People, subtract furniture, and modify facades in your designs with natural language.",
    video: "/videos/showcase/edit_showcase.mp4",
    poster: "/modern-office-building.png",
    features: [
      "Natural Language Editing",
      "Object Manipulation",
      "Smart Modifications",
    ],
  },
  {
    id: "enhance",
    title: "Upscale Mode",
    icon: Sparkles,
    description:
      "Sharpen existing renderings, or add extra detail to your designs with a single click.",
    video: "/videos/showcase/upscale_showcase.mp4",
    poster: "/modern-interior-design.png",
    features: [
      "Quality Enhancement",
      "Detail Addition",
      "One-Click Processing",
    ],
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
  const [showTitle, setShowTitle] = useState(true);
  const [videoLoadError, setVideoLoadError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "100px" });
  const videoInView = useInView(videoSectionRef, {
    once: false,
    margin: "-100px",
  });

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Monitor scroll to hide title when video section is in view
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setShowTitle(latest <= 0.3);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Smooth spring animations for video scaling
  const titleY = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -50]), {
    stiffness: 300,
    damping: 30,
  });

  const videoScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]),
    { stiffness: 400, damping: 40 }
  );
  const videoY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]),
    { stiffness: 400, damping: 40 }
  );

  // Preload videos when component mounts
  useEffect(() => {
    const preloadVideo = (src: string) => {
      if (videoCache.has(src) || loadedVideos.has(src)) return;

      const video = document.createElement("video");
      video.preload = "metadata";
      video.src = src;
      video.muted = true; // Ensure muted for autoplay
      video.load();

      video.addEventListener("loadedmetadata", () => {
        videoCache.set(src, video);
        setLoadedVideos((prev) => new Set([...prev, src]));
        console.log("Preloaded video:", src);
      });

      video.addEventListener("error", (e) => {
        console.error("Failed to preload video:", src, e);
      });
    };

    // Load active tab video first
    if (activeTabData?.video) {
      preloadVideo(activeTabData.video);
    }

    // Then preload other videos with delay
    const timeouts = tabs.map((tab, index) =>
      setTimeout(() => preloadVideo(tab.video), index * 1000)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [activeTabData]);

  // Debug effect
  useEffect(() => {
    console.log("TabVideoShowcase state:", {
      activeTab,
      isInView,
      videoInView,
      activeTabData: activeTabData
        ? {
            id: activeTabData.id,
            video: activeTabData.video,
            title: activeTabData.title,
          }
        : null,
      loadedVideos: Array.from(loadedVideos),
      videoLoadError,
    });
  }, [
    activeTab,
    isInView,
    videoInView,
    activeTabData,
    loadedVideos,
    videoLoadError,
  ]);

  return (
    <section
      ref={containerRef}
      className="relative mx-auto flex max-w-[65%] w-full flex-col px-4 py-16 text-neutral-800 dark:text-neutral-200"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      {/* Title Section */}
      <motion.div
        className="flex w-full flex-col items-center justify-center gap-2 text-center mb-16"
        style={{ y: titleY }}
      >
        <BreathingAnimationText animationType="black-gray">
          <motion.h1
            className="mb-2 text-[30px] font-medium !leading-tight text-neutral-800 dark:text-neutral-200"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.span
              className="text-black dark:text-white font-normal"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              FROM CONCEPT TO
            </motion.span>
            <br />
            <motion.span
              className="text-neutral-800 dark:text-white font-normal"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              ANIMATION
            </motion.span>
          </motion.h1>
        </BreathingAnimationText>

        <BreathingAnimationText animationType="black-gray">
          <motion.p
            className="mx-auto mb-2 px-4 text-[14px] font-thin text-neutral-800 dark:text-neutral-200 md:max-w-2xl md:px-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Leverage best in class AI Models to bring any design to life, in any
            style with natural language and no training required.
          </motion.p>
        </BreathingAnimationText>
      </motion.div>

      {/* Video Section - Scrollable */}
      <motion.div
        ref={videoSectionRef}
        className="flex w-full flex-col items-center justify-center mb-16"
        style={{ scale: videoScale, y: videoY }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="relative w-full h-full mx-auto px-4">
          {activeTabData ? (
            <motion.video
              key={`video-${activeTab}`}
              className="w-full max-w-[80%] mx-auto h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl"
              src={activeTabData.video}
              poster={activeTabData.poster}
              autoPlay={true}
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              onLoadStart={() => {
                console.log("Video loading started:", activeTabData.video);
                setVideoLoadError(null);
              }}
              onLoadedData={() => {
                console.log("Video loaded:", activeTabData.video);
                setVideoLoadError(null);
              }}
              onCanPlay={() => {
                console.log("Video can play:", activeTabData.video);
              }}
              onError={(e) => {
                console.error("Video error:", e, activeTabData.video);
                setVideoLoadError(activeTabData.video);
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ) : (
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
              {videoLoadError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-red-50">
                  <div className="text-center p-8">
                    <div className="text-red-500 text-lg mb-2">
                      Failed to load video
                    </div>
                    <div className="text-red-400 text-sm">{videoLoadError}</div>
                    <button
                      onClick={() => {
                        setVideoLoadError(null);
                        setActiveTab(activeTab); // Force reload
                      }}
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Retry
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                  {/* Video skeleton background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse" />

                  {/* Skeleton play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                      <div
                        className="w-6 h-6 bg-white/40 rounded-sm animate-pulse"
                        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                      />
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
                      <div className="text-white/70 text-sm animate-pulse">
                        {videoLoadError
                          ? "Error loading video..."
                          : "Loading video..."}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Tabs Section - Appears after video */}
      <motion.div
        className="w-full max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <div key={tab.id}>
                {isActive ? (
                  <div className="relative w-full">
                    {/* Animated border background */}
                    {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ff8c00] via-[#ff3636] to-[#ff8c00] p-[2px] animate-gradient-x">
                      <div className="h-full w-full rounded-2xl bg-white" />
                    </div>
                     */}
                    {/* Moving border effect */}
                    <MovingBorderButton
                      borderRadius="1rem"
                      className="relative bg-transparent border-0 text-black cursor-pointer transition-all duration-300 p-0 h-auto w-full"
                      containerClassName="w-full h-auto"
                      borderClassName="h-1 w-24 bg-gradient-to-r from-[#ff8c00] via-[#ff3636] to-[#ff8c00] opacity-90 blur-[0.5px]"
                      duration={2000}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <Card className="bg-white dark:bg-gray-800 border-0 hover:shadow-md px-4 pb-6 pt-4 w-full h-full shadow-sm relative z-10">
                        <CardContent className="p-3 min-h-[200px] flex flex-col">
                          <motion.div
                            className="flex items-center gap-2 mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="p-1 rounded animate-breathe-primary-hover"
                              style={{
                                backgroundColor: THEME_COLORS.primary,
                              }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Icon className="w-3 h-3 text-white" />
                            </motion.div>
                            <BreathingAnimationText animationType="red-orange">
                              <motion.h3
                                className="text-sm font-bold text-gray-900 dark:text-white"
                                style={{
                                  color: THEME_COLORS.primary,
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
                                  delay: 0.5 + idx * 0.1,
                                }}
                                viewport={{ once: true }}
                              >
                                <div
                                  className="w-1 h-1 rounded-full flex-shrink-0 animate-breathe-primary-hover"
                                  style={{
                                    backgroundColor: THEME_COLORS.primary,
                                  }}
                                />
                                <BreathingAnimationText animationType="black-gray">
                                  <span className="text-xs text-gray-500 dark:text-gray-400 leading-tight truncate">
                                    {feature}
                                  </span>
                                </BreathingAnimationText>
                              </motion.div>
                            ))}
                          </motion.div>
                        </CardContent>
                      </Card>
                    </MovingBorderButton>
                  </div>
                ) : (
                  <Card
                    className="cursor-pointer transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md px-4 pb-6 pt-4"
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
                          className="p-1 rounded bg-gray-100 dark:bg-gray-700"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                        </motion.div>
                        <BreathingAnimationText animationType="black-gray">
                          <motion.h3
                            className="text-sm font-bold text-gray-900 dark:text-white"
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
                              delay: 0.5 + idx * 0.1,
                            }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1 h-1 rounded-full flex-shrink-0 bg-gray-400" />
                            <BreathingAnimationText animationType="black-gray">
                              <span className="text-xs text-gray-500 dark:text-gray-400 leading-tight truncate">
                                {feature}
                              </span>
                            </BreathingAnimationText>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
