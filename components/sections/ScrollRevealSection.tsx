"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Smartphone,
  MessageCircle,
  Users,
  BarChart3,
  Zap,
  Globe,
} from "lucide-react";
import Image from "next/image";

const platforms = [
  {
    id: 1,
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS and Android applications",
    image: "/modern-villa-render.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "Messaging",
    description: "WhatsApp, Telegram, and SMS integration",
    image: "/modern-office-building.png",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    icon: Globe,
    title: "Web Platforms",
    description: "Websites and web applications",
    image: "/modern-apartment-complex.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    icon: Users,
    title: "Social Media",
    description: "Facebook, Instagram, and Twitter",
    image: "/modern-interior-design.png",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Analytics",
    description: "Real-time data and insights",
    image: "/sustainable-green-building.png",
    color: "from-indigo-500 to-blue-500",
  },
];

export function ScrollRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // ManyChat-style horizontal scroll for TYPUS.AI
  const typusX = useTransform(scrollYProgress, [0, 0.7], ["-100%", "100%"]);
  const typusOpacity = useTransform(scrollYProgress, [0, 0.1, 0.6, 0.7], [0, 1, 1, 0]);
  const typusScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.5, 1.5, 2]);
  
  // Background during text scroll
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.7, 0.8], [1, 1, 0]);
  
  // Slider cards after text scroll completes
  const cardsOpacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);
  const cardsX = useTransform(scrollYProgress, [0.8, 1], ["100%", "-200%"]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* Background with Image */}
        <motion.div className="absolute inset-0" style={{ opacity: backgroundOpacity }}>
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[url('/modern-office-building.png')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-red-900/40 to-black/60" />
        </motion.div>
        
        {/* Black background for cards */}
        <motion.div 
          className="absolute inset-0 bg-black" 
          style={{ opacity: useTransform(scrollYProgress, [0.7, 0.8], [0, 1]) }}
        />

        {/* ManyChat-style Horizontal Scrolling TYPUS.AI */}
        <motion.div
          className="absolute inset-0 flex items-center justify-start z-10 overflow-hidden"
          style={{
            x: typusX,
            opacity: typusOpacity,
            scale: typusScale,
          }}
        >
          <h1 
            className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-black text-white whitespace-nowrap leading-none tracking-tighter"
            style={{ fontFamily: 'ManyChatGravity, Inter, system-ui, sans-serif' }}
          >
            TYPUS.AI
          </h1>
        </motion.div>

        {/* Slider Cards - Appear after text scroll completes */}
        <motion.div
          className="absolute inset-0 flex items-center z-30 overflow-hidden"
          style={{
            opacity: cardsOpacity,
          }}
        >
          <motion.div 
            className="flex space-x-8 px-8"
            style={{ x: cardsX }}
          >
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.id}
                  className="min-w-[350px] bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={platform.image}
                      alt={platform.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'ManyChatGravity, Inter, system-ui, sans-serif' }}
                  >
                    {platform.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {platform.description}
                  </p>

                  <Button className="w-full bg-white/20 text-white hover:bg-white/30 border-0">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
