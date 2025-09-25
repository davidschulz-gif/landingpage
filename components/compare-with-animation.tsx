"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Compare } from "./ui/compare";
import { BreathingAnimationText } from "./breathing-animation-text";
import { PhotoStripAnimation } from "./ui/photo-strip-animation";

interface CompareWithAnimationProps {
  className?: string;
}

export const CompareWithAnimation = ({
  className,
}: CompareWithAnimationProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Before images (original/CAD files)
  const beforeImages = [
    "before-after/a_before.png",
    "before-after/b_before.png",
    "before-after/c_before.png",
    "before-after/d_before.png",
  ];

  // After images (result/output renders)
  const afterImages = [
    "/before-after/a_after.png",
    "/before-after/b_after.png",
    "/before-after/c_after.png",
    "/before-after/d_after.png",
  ];

  // Thumbnail images for navigation (using output images as thumbnails)
  const thumbnailImages = [
    "before-after/a_after.png",
    "before-after/b_after.png",
    "before-after/c_after.png",
    "before-after/d_after.png",
  ];

  const projectTitles = [
    "3D Architecture Model",
    "CAD to Photorealistic",
    "Colormap Visualization",
    "Concept to Reality",
  ];

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      {/* Header with Animation */}
      <div className="text-center mb-16">
        <BreathingAnimationText
          animationType="black-gray"
          className="font-space-grotesk"
        >
          <h2
            className="text-[18px] md:text-[24px] lg:text-[30px] font-normal text-black mb-6"
            style={{
              fontFamily:
                "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            }}
          >
            UPSCALE UP TO 13K RESOLUTION
          </h2>
        </BreathingAnimationText>
        <BreathingAnimationText animationType="black-gray">
          <p
            className="text-gray-600 max-w-2xl mx-auto text-[12px] sm:text-sm md:text-base"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            See the dramatic transformation from basic CAD files to
            photorealistic architectural visualizations
          </p>
        </BreathingAnimationText>
      </div>

      {/* Compare Section */}
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex w-full flex-shrink-0 flex-col justify-center px-0 sm:px-0 lg:px-8 lg:w-1/3">
          <div className="mb-4 text-[10px] sm:text-xs md:text-sm font-medium tracking-tight text-muted-foreground animate-breathe-black-gray">
            AI-Powered Transformation
          </div>
          <div className="mb-2 text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px] font-medium tracking-tight animate-breathe-black-gray">
            {projectTitles[activeIndex]}
          </div>
          <div className="mb-8 max-w-[35ch] text-[12px] sm:text-sm md:text-base animate-breathe-black-gray">
            Transform your architectural drawings into stunning photorealistic
            visualizations with AI precision.
          </div>
          <div className="mb-6 flex gap-4">
            {thumbnailImages.map((thumb, index) => (
              <div
                key={index}
                className={cn(
                  "h-16 w-24 cursor-pointer overflow-hidden rounded-lg transition-opacity lg:rounded-2xl",
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-100"
                )}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  alt={projectTitles[index]}
                  src={thumb}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full flex-shrink-0 gap-1 sm:gap-2 animate-breathe-primary-hover text-[10px] sm:text-xs md:text-sm h-8 sm:h-9 md:h-10 px-3 sm:px-4 md:px-6 text-white">
            <span className="text-[10px] sm:text-xs md:text-sm">
              Start Creating Now
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles h-3 w-3 sm:h-4 sm:w-4"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1-1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              <path d="M5 3v4"></path>
              <path d="M19 17v4"></path>
              <path d="M3 5h4"></path>
              <path d="M17 19h4"></path>
            </svg>
          </button>
        </div>
        <div className="lg:w-2/3">
          <Compare
            firstImage={beforeImages[activeIndex]}
            secondImage={afterImages[activeIndex]}
            className="w-full overflow-hidden rounded-3xl border border-border lg:rounded-[calc(var(--radius)*3)] aspect-[1.3]"
            firstImageClassName="object-cover w-full h-full"
            secondImageClassname="object-cover w-full h-full"
            slideMode="drag"
            showHandlebar={true}
          />
        </div>
      </div>

      {/* Photo Strip Animation */}
      <PhotoStripAnimation className="mx-auto" />
    </div>
  );
};
