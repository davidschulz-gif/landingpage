"use client"
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { BreathingAnimationText } from "./breathing-animation-text"

export const HeroParallax = ({
  row123Products,
  row4Products,
}: {
  row123Products: {
    title: string
    link: string
    thumbnail: string
  }[]
  row4Products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = row123Products;
  const secondRow = row123Products;
  const thirdRow = row123Products;
  const fourthRow = row4Products;

  const ref = React.useRef(null)
  const [time, setTime] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 400, damping: 40, bounce: 0 }

  const baseTranslateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 500]), springConfig)
  const baseTranslateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -400]), springConfig)
  
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.3], [25, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.1, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.3], [15, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.3], [-800, 0]), springConfig)
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.9, 1]), springConfig)
  
  return (
    <div
      ref={ref}
      data-hero-section
      className="h-[215vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1500px] [transform-style:preserve-3d] bg-transparent dark:bg-transparent"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
          scale,
        }}
        className="relative z-10"
      >
        <InfiniteMarqueeRow
          products={firstRow}
          baseTranslate={baseTranslateX}
          time={time}
          direction={1}
          speed={30}
          className="mb-8"
          isFirstRow={true}
        />
        <InfiniteMarqueeRow
          products={secondRow}
          baseTranslate={baseTranslateXReverse}
          time={time}
          direction={-1}
          speed={25}
          className="mb-8"
        />
        <InfiniteMarqueeRow
          products={thirdRow}
          baseTranslate={baseTranslateX}
          time={time}
          direction={1}
          speed={35}
          className="mb-8"
        />
        <InfiniteMarqueeRow
          products={fourthRow}
          baseTranslate={baseTranslateXReverse}
          time={time}
          direction={-1}
          speed={28}
          className=""
        />
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-4 md:py-40 px-4 w-full left-0 top-0">
      <BreathingAnimationText animationType="black-gray">
        <motion.h1 
          className="text-xl sm:text-3xl lg:text-5xl font-normal relative z-20 text-black dark:text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-black dark:text-white">AI FOR </span>
          <span className="text-black dark:text-white font-normal">
            ARCHITECTS.
          </span>
        </motion.h1>
      </BreathingAnimationText>
      <BreathingAnimationText
        animationType="black-gray"
        className="max-w-2xl text-base md:text-xl mt-8"
      >
        AI fully preserves the structure of your architectural input while creating stunning AI-powered visualizations. Transform your CAD files and sketches into photorealistic renders.
      </BreathingAnimationText>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10 w-4 h-4 bg-blue-500/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-6 h-6 bg-purple-500/20 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-500/40 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );
};

const InfiniteMarqueeRow = ({
  products,
  baseTranslate,
  time,
  direction,
  speed,
  className,
  isFirstRow = false,
}: {
  products: any[];
  baseTranslate: MotionValue<number>;
  time: number;
  direction: number;
  speed: number;
  className: string;
  isFirstRow?: boolean;
}) => {
  const cardWidth = 280 + 20
  const totalWidth = products.length * cardWidth
  const infiniteX = ((direction * time * speed) % totalWidth)
  
  return (
    <div className={`flex ${direction === 1 ? 'flex-row-reverse' : 'flex-row'} ${className}`}>
      <motion.div 
        className="flex gap-5 will-change-transform"
        style={{
          x: useTransform(baseTranslate, (value) => value + infiniteX),
        }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={`${product.title}-${index}`}
            product={product}
            index={index}
            time={time}
            isFirstRow={isFirstRow}
          />
        ))}
      </motion.div>
    </div>
  )
}

export const ProductCard = ({
  product,
  index,
  time,
  isFirstRow,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  index: number;
  time: number;
  isFirstRow?: boolean;
}) => {
  const rotateY = Math.sin(time + index * 0.5) * 8
  const rotateX = Math.cos(time + index * 0.3) * 4
  const floatY = Math.sin(time * 2 + index * 0.8) * 5
  
  return (
    <motion.div
      style={{
        rotateY,
        rotateX,
        y: floatY,
      }}
      className="group/product cursor-pointer h-56 w-72 relative flex-shrink-0 overflow-hidden rounded-2xl shadow-xl ease-out"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
    >
      <Link href={product.link} className="block cursor-pointer absolute inset-0">
        <Image
          src={product.thumbnail || "/placeholder.svg"}
          fill
          className="object-cover cursor-pointer ease-out"
          alt={product.title}
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 400px"
          quality={75}
          priority={isFirstRow && index < 4}
          loading={isFirstRow && index < 4 ? "eager" : "lazy"}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA"
        />
      </Link>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 pointer-events-none"></div>
      {product.title && (
        <motion.div 
          className="absolute bottom-4 left-4 right-4 flex justify-start z-20 pointer-events-none"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
            <span className="text-white font-medium text-sm leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {product.title}
            </span>
          </div>
        </motion.div>
      )}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.2,
        }}
      />
    </motion.div>
  )
}