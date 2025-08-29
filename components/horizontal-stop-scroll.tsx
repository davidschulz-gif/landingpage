"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Users } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
  const [showContent, setShowContent] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform values for translate3d and scale like ManyChat
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  
  // Stop scroll and show content at specific point
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest >= 0.5 && !showContent) {
        setShowContent(true);
      } else if (latest < 0.5 && showContent) {
        setShowContent(false);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, showContent]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image with translate3d and scale transforms */}
        <motion.div 
          style={{ 
            y: translateY,
            scale: scale
          }}
          className="relative h-screen w-full will-change-transform"
        >
          <Image
            src="/modern-villa-render.png"
            alt="Architecture Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          
          {/* TYPUS.AI Text Overlay - Always Visible */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <motion.h1 
                style={{ 
                  y: translateY,
                  scale: scale
                }}
                className="text-[12rem] sm:text-[18rem] md:text-[24rem] lg:text-[30rem] xl:text-[36rem] 2xl:text-[42rem] font-black text-red-400 tracking-tight leading-none drop-shadow-2xl will-change-transform"
              >
                TYPUS.AI
              </motion.h1>
            </div>
          </div>
        </motion.div>

        {/* Content Section - Shows when scroll stops */}
        {showContent && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            {/* Red Background with Grid Pattern */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800" />
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
            </div>
            
            <div className="w-full max-w-6xl px-8 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
                  Transform Your
                </h2>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
                  Architecture Vision
                </h2>
              </div>

              {/* Horizontal Swiper for Features */}
              <Swiper
                modules={[Pagination, Navigation]}
                direction="horizontal"
                spaceBetween={20}
                slidesPerView={1.2}
                centeredSlides={false}
                loop={true}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                grabCursor={true}
                touchRatio={1}
                simulateTouch={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="swiper swiper-initialized swiper-horizontal swiper-watch-progress mb-8 !overflow-visible"
              >
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <SwiperSlide key={feature.title}>
                      <Card className="h-full bg-white/95 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-black">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-black">
                              {feature.title}
                            </h3>
                          </div>
                          <p className="text-gray-700 text-sm mb-4">
                            {feature.description}
                          </p>
                          <div className="space-y-2 mb-4">
                            {feature.features.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                                <span className="text-xs text-gray-600">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                          <Button
                            className="w-full bg-black text-white hover:bg-gray-800 text-sm"
                            size="sm"
                          >
                            LEARN MORE
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
