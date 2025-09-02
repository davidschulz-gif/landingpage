"use client";

import { motion, MotionProps } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ReactNode } from "react";

interface LazyMotionProps extends MotionProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
}

export function LazyMotion({
  children,
  threshold = 0.1,
  rootMargin = "50px",
  fallback,
  ...motionProps
}: LazyMotionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {isIntersecting ? (
        <motion.div {...motionProps}>
          {children}
        </motion.div>
      ) : (
        fallback || <div className="w-full h-20 bg-gray-100 animate-pulse rounded" />
      )}
    </div>
  );
}