"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AnimatedSeparator() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent">
          <motion.div
            style={{ x, opacity }}
            className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-[rgb(255,54,54)] to-transparent"
          />
          <motion.div
            style={{ x: useTransform(x, (value) => `calc(${value} + 50px)`) }}
            className="absolute top-1/2 left-0 w-2 h-2 bg-[rgb(255,54,54)] rounded-full transform -translate-y-1/2 shadow-lg shadow-[rgb(255,54,54)]/50"
          />
        </div>
      </div>
    </section>
  );
}