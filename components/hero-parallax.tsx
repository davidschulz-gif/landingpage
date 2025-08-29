"use client"
import React, { useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useAnimationFrame, type MotionValue } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Highlight } from "@/components/ui/hero-highlight"

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  // Simple product duplication for infinite scroll
  const duplicatedProducts = [...products, ...products]
  const firstRow = duplicatedProducts
  const secondRow = duplicatedProducts
  const thirdRow = duplicatedProducts
  
  const ref = React.useRef(null)
  const [time, setTime] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 400, damping: 40, bounce: 0 }

  // Infinite scroll animation
  useAnimationFrame((t) => {
    setTime(t * 0.0005)
  })

  const baseTranslateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 800]), springConfig)
  const baseTranslateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -800]), springConfig)
  
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.3], [25, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.1, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.3], [15, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.3], [-600, 100]), springConfig)
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.9, 1]), springConfig)
  return (
    <div
      ref={ref}
      className="h-[200vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1500px] [transform-style:preserve-3d] bg-white dark:bg-black"
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
          className=""
        />
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <motion.h1 
        className="text-2xl md:text-7xl font-bold relative z-20"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span 
          className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          TYPUS.AI
        </motion.span>
        <br /> 
        <span className="text-neutral-800 dark:text-neutral-200">AI FOR </span>
        <motion.span
          className="text-neutral-800 dark:text-white font-black relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {"ARCHITECTS".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.2,
                color: "#dc2626",
                transition: { duration: 0.2 }
              }}
            >
              {letter}
            </motion.span>
          ))}.
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-red-500 to-red-700"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          />
        </motion.span>
      </motion.h1>
      <motion.p 
        className="max-w-2xl text-base md:text-xl mt-8 text-gray-600 dark:text-gray-300" 
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.span
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Typus.AI fully preserves the structure of your architectural input while creating stunning AI-powered
          visualizations. Transform your CAD files and sketches into photorealistic renders.
        </motion.span>
      </motion.p>
      
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
}: {
  products: any[]
  baseTranslate: MotionValue<number>
  time: number
  direction: number
  speed: number
  className: string
}) => {
  const cardWidth = 320 + 24 // card width + gap
  const totalWidth = products.length * cardWidth
  const infiniteX = ((direction * time * speed) % totalWidth)
  
  return (
    <div className={`flex ${direction === 1 ? 'flex-row-reverse' : 'flex-row'} ${className}`}>
      <motion.div 
        className="flex gap-6 will-change-transform"
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
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  index: number
  time: number
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
      className="group/product cursor-pointer h-72 w-80 relative flex-shrink-0 overflow-hidden rounded-2xl shadow-xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.02,
      }}
    >
      <Link href={product.link} className="block cursor-pointer absolute inset-0">
        <motion.img
          src={product.thumbnail || "/placeholder.svg"}
          className="object-cover absolute h-full w-full cursor-pointer inset-0 transition-transform duration-300 ease-out group-hover/product:scale-110"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 pointer-events-none"></div>
      <motion.h2 
        className="absolute bottom-4 left-4 right-4 text-white font-bold text-base leading-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {product.title}
      </motion.h2>
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
