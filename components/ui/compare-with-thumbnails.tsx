"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Compare } from "./compare";

interface CompareWithThumbnailsProps {
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const CompareWithThumbnails = ({
  className,
  title = "Export 4K Images",
  description = "Achieve new levels of resolution & detail in your favorite AI images.",
  buttonText = "Generate Your First Image",
  buttonHref = "#",
}: CompareWithThumbnailsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Images from neverscene.ai Export 4K section
  const beforeImages = [
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fhd1.jpeg&w=1920&q=75",
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fhd2.jpeg&w=1920&q=75",
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fhd3.png&w=1920&q=75",
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fhd4.jpeg&w=1920&q=75"
  ];
  
  const afterImages = [
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fuhd1.jpeg&w=3840&q=75",
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fuhd2.jpeg&w=3840&q=75",
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fuhd3.jpeg&w=3840&q=75",
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fuhd4.jpeg&w=3840&q=75"
  ];

  const thumbnailImages = [
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fthumb1.jpeg&w=828&q=75",
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fthumb2.jpeg&w=828&q=75",
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fthumb3.jpeg&w=828&q=75",
    "https://www.neverscene.ai/_next/image?url=%2Fimg%2Fsection-5%2Fthumb4.jpeg&w=828&q=75"
  ];



  return (
    <div className={cn("flex flex-col gap-8 lg:flex-row", className)}>
      <div className="flex w-full flex-shrink-0 flex-col justify-center px-8 lg:w-1/3">
        <div className="mb-4 text-sm font-medium tracking-tight text-muted-foreground">High-Definition Quality</div>
        <div className="mb-2 max-w-[15ch] text-3xl font-medium tracking-tight lg:text-4xl xl:text-[2.7rem]">{title}</div>
        <div className="mb-8 max-w-[35ch]">{description}</div>
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
                alt="" 
                src={thumb}
                className="h-full w-full object-cover" 
              />
            </div>
          ))}
        </div>
        <a href={buttonHref}>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-11 rounded-md flex-shrink-0 gap-2 border border-black bg-background px-10 text-black md:h-12 md:w-fit md:text-lg">
            {buttonText}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 md:h-5">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              <path d="M5 3v4"></path>
              <path d="M19 17v4"></path>
              <path d="M3 5h4"></path>
              <path d="M17 19h4"></path>
            </svg>
          </button>
        </a>
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
  );
};