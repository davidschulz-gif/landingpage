"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollZoomTextProps {
  text: string;
  className?: string;
  backgroundImage?: string;
}

export function ScrollZoomText({ 
  text, 
  className,
  backgroundImage = "/api/placeholder/1920/1080"
}: ScrollZoomTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={containerRef}
      className={cn(
        "relative h-screen flex items-center justify-center overflow-hidden",
        "bg-gradient-to-br from-red-50 via-white to-gray-100",
        className
      )}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-gray-900/20" />
      
      {/* Main Text */}
      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 text-center"
      >
        <motion.h1 
          className={cn(
            "text-8xl md:text-9xl lg:text-[12rem] xl:text-[15rem]",
            "font-black tracking-tighter leading-none",
            "bg-gradient-to-r from-red-600 via-gray-800 to-red-500",
            "bg-clip-text text-transparent",
            "drop-shadow-2xl"
          )}
        >
          {text}
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={cn(
            "mt-8 text-xl md:text-2xl lg:text-3xl",
            "text-gray-700 font-medium tracking-wide",
            "max-w-4xl mx-auto px-4"
          )}
        >
          Revolutionary AI Platform for Modern Businesses
        </motion.p>
      </motion.div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gray-500/10 rounded-full blur-2xl" />
    </section>
  );
}