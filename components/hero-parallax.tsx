"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BreathingAnimationText } from "./breathing-animation-text";
import { ActionButton } from "./action-button";
import { GoogleLogo } from "./icons/google-logo";

export const HeroParallax = ({
  row123Products,
  row4Products,
}: {
  row123Products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  row4Products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = row123Products.slice(0, 6);
  const secondRow = row123Products.slice(6, 12);
  const thirdRow = row123Products.slice(12, 19);
  const fourthRow = row4Products;

  const ref = React.useRef(null);
  const [time, setTime] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 400, damping: 40, bounce: 0 };

  const baseTranslateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const baseTranslateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -400]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [25, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.1, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-400, 0]),
    springConfig
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.9, 1]),
    springConfig
  );

  return (
    <div
      ref={ref}
      data-hero-section
      className="w-full max-w-[100%] md:max-w-[80%] mx-auto h-[200vh] pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1500px] [transform-style:preserve-3d] bg-transparent dark:bg-transparent"
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
          className="mb-6 md:mb-8"
          isFirstRow={true}
        />
        <InfiniteMarqueeRow
          products={secondRow}
          baseTranslate={baseTranslateXReverse}
          time={time}
          direction={-1}
          speed={25}
          className="mb-6 md:mb-8"
        />
        <InfiniteMarqueeRow
          products={thirdRow}
          baseTranslate={baseTranslateX}
          time={time}
          direction={1}
          speed={35}
          className="mb-6 md:mb-8"
        />
        <InfiniteMarqueeRow
          products={fourthRow}
          baseTranslate={baseTranslateXReverse}
          time={time}
          direction={-1}
          speed={28}
          className="mb-4"
        />
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl z-50 relative mx-auto pt-0 pb-0 md:pt-32 md:pb-0 lg:pt-0 lg:pb-24 px-0 w-full">
      <div className="md:pb-12 relative">
        {/* Left Side - Headline and Description */}
        <div className="relative max-w-lg">
          <BreathingAnimationText animationType="black-gray">
            <motion.h1
              className="text-[30px] font-normal relative z-999 text-black dark:text-white leading-tight mb-6"
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
            className="z-999 text-[14px] leading-relaxed text-gray-700 dark:text-gray-300 mb-4"
          >
            AI fully preserves the structure of your architectural input while
            creating stunning AI-powered visualizations. Transform your CAD
            files and sketches into photorealistic renders.
          </BreathingAnimationText>

          <div className="flex items-start gap-6 flex-col md:flex-row md:items-center">
            <div className="w-auto">
              <Link href='https://www.google.com/maps/place/TYPUS.AI+formerly+YANUS.AI/@50.93654,6.9045451,662m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47bf254b60018897:0xe59bac1b8b968df2!8m2!3d50.93654!4d6.90712!16s%2Fg%2F11w9p4ttwz?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D' target="_blank" className="flex items-center">
                <GoogleLogo fontSize={24} className="me-4" />
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${
                        star <= 4
                          ? "text-yellow-400"
                          : star === 5
                          ? "text-gray-300"
                          : "text-gray-300"
                      }`}
                      fill={
                        star <= 4 || (star === 5 && star <= 4.5)
                          ? "currentColor"
                          : "none"
                      }
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {star === 5 ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          fill="url(#half-star)"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      )}
                    </svg>
                  ))}
                  {/* Half star for 4.5 rating */}
                  <svg
                    className="w-5 h-5 text-yellow-400 absolute"
                    style={{ marginLeft: "80px" }}
                  >
                    <defs>
                      <linearGradient id="half-star">
                        <stop
                          offset="50%"
                          stopColor="currentColor"
                        />
                        <stop offset="50%" stopColor="#d1d5db" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <BreathingAnimationText animationType="black-gray">
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    4.5/5
                  </span>
                </BreathingAnimationText>
              </Link>
              <BreathingAnimationText animationType="black-gray">
                <span className="text-xs text-gray-500 mt-1 block">
                  based on 90+ reviews
                </span>
              </BreathingAnimationText>
            </div>
            <Image className="block w-auto h-10" src='/eu-kofinanziert-von-der-europaeischen-union.png' alt="" width={200} height={200} />
          </div>
        </div>

        {/* Center - Logo, Title and Button */}
        <div className="flex flex-col items-center text-center pt-12 md:pt-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-0 flex flex-col items-center space-y-2"
          >
            <img
              src="/logo/typus_logo_red_transp.png"
              alt="Typus.AI logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span
              className="text-center uppercase"
              style={{
                fontFamily:
                  "var(--font-source-serif-4), 'Source Serif 4', serif",
                fontSize: "18px",
                fontWeight: 300,
                letterSpacing: "2.5px",
                lineHeight: "1.3em",
                color: "#FF1E1E",
                textTransform: "uppercase",
              }}
            >
              typus.AI
            </span>
          </motion.div>

          {/* Get Started Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mt-8"
          >
            <ActionButton href="https://app.typus.ai/register">Get Started</ActionButton>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-12 w-full"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "CREATE A FREE ACCOUNT",
                "DOWNLOAD & INSTALL PLUGINS FOR FREE",
                "TUTORIAL",
                "STEP BY STEP GUIDE",
                "GET CASE STUDIES",
                "GET A COUPON WELCOME GIFT",
              ].map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center space-x-2 sm:space-x-3"
                >
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-white dark:text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <BreathingAnimationText animationType="black-gray">
                    <span
                      className="text-[8px] sm:text-[10px] md:text-xs font-medium text-black dark:text-white whitespace-nowrap"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {feature}
                    </span>
                  </BreathingAnimationText>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-16 right-16 w-3 h-3 bg-blue-500/20 rounded-full hidden md:block"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-24 left-24 w-4 h-4 bg-purple-500/15 rounded-full hidden lg:block"
        animate={{
          y: [0, 12, 0],
          x: [0, 8, 0],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-500/25 rounded-full hidden xl:block"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.5, 0.25],
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
  const cardWidth = 280 + 20;
  const totalWidth = products.length * cardWidth;
  const infiniteX = (direction * time * speed) % totalWidth;

  return (
    <div
      className={`flex ${
        direction === 1 ? "flex-row-reverse" : "flex-row"
      } ${className}`}
    >
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
  );
};

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
  const rotateY = Math.sin(time + index * 0.5) * 8;
  const rotateX = Math.cos(time + index * 0.3) * 4;
  const floatY = Math.sin(time * 2 + index * 0.8) * 5;

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
        ease: "easeOut",
      }}
    >
      <Link
        href={product.link}
        className="block cursor-pointer absolute inset-0"
      >
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
        <motion.div className="absolute bottom-4 left-4 right-4 flex justify-start z-20 pointer-events-none">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
            <span
              className="text-white font-medium text-sm leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
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
  );
};
