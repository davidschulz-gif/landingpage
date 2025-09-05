"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Zap, Brain, Shield } from "lucide-react";
import { BreathingAnimationText } from "./breathing-animation-text";

interface Feature {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  gradient: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: Zap,
    title: "Lightning Fast Rendering",
    description: "Generate high-quality architectural visualizations in seconds, not hours.",
    image: "/fast-rendering-architectural-visualization.png",
    stats: [
      { label: "Speed", value: "10x Faster" },
      { label: "Quality", value: "4K Ready" },
      { label: "Time", value: "< 30 sec" }
    ],
    gradient: "bg-black"
  },
  {
    id: 2,
    icon: Brain,
    title: "AI-Powered Precision",
    description: "Advanced AI algorithms understand architectural principles and design intent.",
    image: "/ai-architectural-precision.png",
    stats: [
      { label: "Accuracy", value: "99.9%" },
      { label: "Models", value: "50+" },
      { label: "Learning", value: "Continuous" }
    ],
    gradient: "bg-black"
  },
  {
    id: 3,
    icon: Shield,
    title: "Structure Preservation",
    description: "Maintain exact structural integrity while enhancing visual appeal.",
    image: "/structure-preservation-architecture.png",
    stats: [
      { label: "Precision", value: "100%" },
      { label: "Integrity", value: "Preserved" },
      { label: "Details", value: "Enhanced" }
    ],
    gradient: "bg-black"
  }
];

export function FeatureShowcaseWidget() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <BreathingAnimationText animationType="black-gray">
            <h2 className="text-[30px] font-bold mb-4 sm:mb-6 text-black dark:text-white">
              Why Choose <span className="text-black">Typus.AI</span>
            </h2>
          </BreathingAnimationText>
          <BreathingAnimationText animationType="black-gray">
            <p className="text-[14px] text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI technology that transforms architectural visualization.
            </p>
          </BreathingAnimationText>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <Card
                  className={`cursor-pointer transition-all duration-500 border ${
                    activeFeature === index
                      ? `${feature.gradient} text-white shadow-2xl scale-105 border-[rgb(255,54,54)]`
                      : "bg-white dark:bg-black hover:shadow-lg border-black/10 dark:border-white/10 text-black dark:text-white"
                  }`}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-lg transition-colors ${
                          activeFeature === index
                            ? "bg-white/20"
                            : "bg-[rgb(255,54,54)]"
                        }`}
                      >
                        <feature.icon
                          className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <BreathingAnimationText animationType="black-gray">
                        <h3
                          className={`text-lg sm:text-xl font-bold mb-2 ${
                            activeFeature === index ? "text-white" : "text-black dark:text-white"
                          }`}
                        >
                          {feature.title}
                        </h3>
                      </BreathingAnimationText>
                      <BreathingAnimationText animationType="black-gray">
                        <p
                          className={`text-sm sm:text-base leading-relaxed ${
                            activeFeature === index ? "text-white/90" : "text-black/70 dark:text-white/70"
                          }`}
                        >
                          {feature.description}
                        </p>
                      </BreathingAnimationText>
                        
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
                          {feature.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="text-center">
                              <BreathingAnimationText animationType="black-gray">
                              <div
                                className={`text-xs sm:text-sm font-bold ${
                                  activeFeature === index ? "text-white" : "text-black dark:text-white"
                                }`}
                              >
                                {stat.value}
                              </div>
                            </BreathingAnimationText>
                            <BreathingAnimationText animationType="black-gray">
                              <div
                                className={`text-xs ${
                                  activeFeature === index ? "text-white/80" : "text-black/60 dark:text-white/60"
                                }`}
                              >
                                {stat.label}
                              </div>
                            </BreathingAnimationText>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <motion.div
              className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              layout
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={features[activeFeature].image}
                    alt={features[activeFeature].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-30" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4">
                  <div className="flex justify-between items-center text-white text-xs sm:text-sm font-medium">
                    <BreathingAnimationText animationType="black-gray">
                      <span>{features[activeFeature].title}</span>
                    </BreathingAnimationText>
                    <BreathingAnimationText animationType="black-gray">
                      <span>{activeFeature + 1}/{features.length}</span>
                    </BreathingAnimationText>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <Button
            size="default"
            className="text-white px-4 py-2 text-sm font-medium bg-black hover:bg-gray-800 transition-all duration-300"
          >
            <BreathingAnimationText animationType="black-gray">
              Experience All Features
            </BreathingAnimationText>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}