"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Compare } from "./ui/compare";
import { BreathingAnimationText } from "./breathing-animation-text";
import { PhotoStripAnimation } from "./ui/photo-strip-animation";

interface CompareWithAnimationProps {
  className?: string;
}

export const CompareWithAnimation = ({ className }: CompareWithAnimationProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Before images (CAD/basic architectural drawings)
  const beforeImages = [
    "/easy-integration-cad.png",
    "/structure-preservation-architecture.png",
    "/ai-architectural-precision.png",
    "/design-gallery-showcase.png"
  ];
  
  // After images (photorealistic renders)
  const afterImages = [
    "/modern-office-building.png",
    "/modern-villa-render.png",
    "/cultural-center-render.png",
    "/sustainable-green-building.png"
  ];

  // Thumbnail images for navigation
  const thumbnailImages = [
    "/modern-office-building.png",
    "/modern-villa-render.png",
    "/cultural-center-render.png",
    "/sustainable-green-building.png"
  ];

  const projectTitles = [
    "Modern Office Complex",
    "Residential Villa",
    "Cultural Center",
    "Sustainable Building"
  ];

  return (
    <div className={cn("w-full", className)}>
      {/* Header with Animation */}
      <div className="text-center mb-16">
        <BreathingAnimationText
          animationType="black-gray"
          className="font-space-grotesk"
        >
          <h2
            className="text-[30px] font-normal text-black mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            }}
          >
            BEFORE & AFTER
          </h2>
        </BreathingAnimationText>
        <BreathingAnimationText animationType="black-gray">
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            See the dramatic transformation from basic CAD files to photorealistic architectural visualizations
          </p>
        </BreathingAnimationText>
      </div>

      {/* Compare Section */}
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex w-full flex-shrink-0 flex-col justify-center px-8 lg:w-1/3">
          <div className="mb-4 text-sm font-medium tracking-tight text-muted-foreground animate-breathe-black-gray">AI-Powered Transformation</div>
          <div className="mb-2 max-w-[15ch] text-3xl font-medium tracking-tight lg:text-4xl xl:text-[2.7rem] animate-breathe-black-gray">CAD to Photorealistic</div>
          <div className="mb-8 max-w-[35ch] animate-breathe-black-gray">Transform your architectural drawings into stunning photorealistic visualizations with AI precision.</div>
          <div className="mb-6 flex gap-4">
            {thumbnailImages.map((thumb, index) => (
              <div 
                key={index}
                className={cn(
                  "h-16 w-24 cursor-pointer overflow-hidden rounded-lg transition-opacity lg:rounded-2xl",
                  activeIndex === index ? "opacity-100" : "opacity-50 hover:opacity-100"
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
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md flex-shrink-0 gap-2 border border-[#ff3636] bg-[#ff3636] hover:bg-[#ff5656] px-10 text-white md:h-12 md:w-fit md:text-lg">
            Start Creating Now
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 md:h-5">
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