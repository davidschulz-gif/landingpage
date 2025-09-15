"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  const { containerClassName: _, borderClassName: __, duration: ___, ...domProps } = { containerClassName, borderClassName, duration, ...otherProps };
  
  return (
    <Component
      className={cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...domProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-4 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    try {
      const element = pathRef.current;
      if (element && element.isConnected && element.getBoundingClientRect().width > 0) {
        const length = element.getTotalLength?.() || 0;
        if (length > 0) {
          const pxPerMillisecond = length / duration;
          progress.set((time * pxPerMillisecond) % length);
        }
      }
    } catch (error) {
      // Silently handle the error when element is not rendered
    }
  });

  const x = useTransform(
    progress,
    (val) => {
      try {
        const element = pathRef.current;
        if (element && element.getPointAtLength && element.getTotalLength() > 0) {
          return element.getPointAtLength(val)?.x ?? 0;
        }
        return 0;
      } catch {
        return 0;
      }
    },
  );
  const y = useTransform(
    progress,
    (val) => {
      try {
        const element = pathRef.current;
        if (element && element.getPointAtLength && element.getTotalLength() > 0) {
          return element.getPointAtLength(val)?.y ?? 0;
        }
        return 0;
      } catch {
        return 0;
      }
    },
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
          style={{ display: 'none' }}
        />
        <path
          fill="none"
          d="M10,0 L90,0 Q100,0 100,10 L100,90 Q100,100 90,100 L10,100 Q0,100 0,90 L0,10 Q0,0 10,0 Z"
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
