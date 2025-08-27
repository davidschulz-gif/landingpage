"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Zap, Target, Users } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "AI Architecture",
    icon: Zap,
    description:
      "Transform architectural concepts into stunning visualizations with AI precision",
    features: ["3D Rendering", "Real-time Design", "Smart Materials"],
  },
  {
    title: "Interior Design",
    icon: Target,
    description:
      "Create immersive interior spaces that blend functionality with aesthetics",
    features: ["Space Planning", "Lighting Design", "Furniture Layout"],
  },
  {
    title: "Urban Planning",
    icon: Users,
    description: "Design sustainable cities and communities for the future",
    features: ["City Modeling", "Traffic Flow", "Green Spaces"],
  },
];

export function HorizontalStopScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background and text animations
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.5]);
  const textScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    [0.6, 1.5, 2.5]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.7],
    [1, 1, 1, 0]
  );
  const textX = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0, -800]);

  // Cards animations
  const cardsOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const cardsX = useTransform(scrollYProgress, [0.6, 0.8], [300, 0]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ scale: bgScale }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/modern-villa-render.png"
            alt="Architecture Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white-400/90 to-blue-500/50 dark:from-black/90 dark:via-gray-900/80 dark:to-black/90" />
        </motion.div>

        {/* Large Text Section */}
        <motion.div
          style={{ scale: textScale, opacity: textOpacity, x: textX }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="text-center">
            <motion.h1 className="text-[20rem] sm:text-[24rem] md:text-[24rem] lg:text-[28rem] xl:text-[32rem] 2xl:text-[32rem] font-black text-white tracking-tight leading-none">
              TYPUS.AI
            </motion.h1>
            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-4">
              AI for Architects.
            </motion.h2>
            {/* <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              architecture is
            </motion.h2> */}
          </div>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          style={{ opacity: cardsOpacity, x: cardsX }}
          className="absolute inset-0 flex items-center justify-center z-20 bg-white dark:bg-black transition-colors duration-300"
        >
          <div className="w-full max-w-6xl px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black dark:text-white mb-4">
                Everywhere your
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black dark:text-white">
                audience is
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Card className="h-full bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-[rgb(255,54,54)] dark:hover:border-[rgb(255,54,54)] transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-[rgb(255,54,54)]">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-black dark:text-white">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                          {feature.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {feature.features.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[rgb(255,54,54)] rounded-full" />
                              <span className="text-xs text-gray-600 dark:text-gray-400">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Button
                          className="w-full bg-[rgb(255,54,54)] text-white hover:bg-[rgb(255,54,54)]/90 text-sm"
                          size="sm"
                        >
                          LEARN MORE
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="rounded-full w-10 h-10 p-0 border-black/20 dark:border-white/20 hover:bg-[rgb(255,54,54)] hover:text-white hover:border-[rgb(255,54,54)]"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="rounded-full w-10 h-10 p-0 border-black/20 dark:border-white/20 hover:bg-[rgb(255,54,54)] hover:text-white hover:border-[rgb(255,54,54)]"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
