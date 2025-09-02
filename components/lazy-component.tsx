"use client";

import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ReactNode } from "react";

interface LazyComponentProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export function LazyComponent({
  children,
  className,
  fallback,
  threshold = 0.1,
  rootMargin = "50px",
}: LazyComponentProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? children : fallback || <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse rounded" />}
    </div>
  );
}