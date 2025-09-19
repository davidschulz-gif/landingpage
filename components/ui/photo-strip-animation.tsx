"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Redo, Undo } from "lucide-react";

interface PhotoStripAnimationProps {
  className?: string;
}

export const PhotoStripAnimation = ({
  className,
}: PhotoStripAnimationProps) => {
  const originalImages = [
    "/before-after/slider_original/3d_screenshot.png",
    "/before-after/slider_original/cad.png",
    "/before-after/slider_original/colormap7.png",
    "/before-after/slider_original/freepik.png",
    "/before-after/slider_original/sitemodel.png",
    "/before-after/slider_original/sketch1.png",
  ];

  // Result/After images (photorealistic renders)
  const resultImages = [
    "/before-after/slider_output/1337-6f74b340-522b-11ef-ad2d-f624cd86d646.png",
    "/before-after/slider_output/1337-d5698ca8-5225-11ef-a345-3686f2249b31.png",
    "/before-after/slider_output/1337-ebba22d4-522e-11ef-a176-7671bf278d58.png",
    "/before-after/slider_output/5656565656565656_generated_images_123455-62277081.png",
    "/before-after/slider_output/yanus.ai_hello_1758106602834_6600.png",
    "/before-after/slider_output/yanus.ai_team_1747855586574_1700_compressed.png",
  ];

  return (
    <div
      className={cn("mt-20 max-w-7xl px-8 sm:px-0 overflow-hidden", className)}
    >
      {/* Desktop Labels */}
      <div className="hidden flex-row justify-between font-medium text-lg md:flex mb-4">
        <div className="flex flex-1 flex-row items-end justify-start space-x-2 text-black">
          <span className="pb-[2px] animate-breathe-black-gray">Original</span>
          <Redo className="h-5 w-5" style={{ transform: "rotate(60deg)" }} />
        </div>
        <div className="flex flex-1 flex-row items-end justify-end space-x-2 text-black">
          <Undo className="h-5 w-5" style={{ transform: "rotate(-60deg)" }} />
          <span className="pb-[2px] animate-breathe-black-gray">Result</span>
        </div>
      </div>

      {/* Desktop Photo Strip - Match HTML structure */}
      <div className="relative hidden w-full overflow-x-hidden py-3 md:block">
        {/* Magic separator */}
        <div className="magic-separator absolute left-1/2 top-0 z-20 h-full w-[2px] rounded-full bg-neutral-500"></div>
        
        {/* Left side - Original images with overflow hidden */}
        <div className="absolute left-0 top-3 z-10 w-1/2 overflow-x-hidden">
          <div className="photo_strip flex flex-row items-center animate-scroll-right" style={{ width: "200%" }}>
            {/* Render original images twice for seamless loop */}
            {[...originalImages, ...originalImages].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square w-1/2 flex-shrink-0 md:w-1/4"
              >
                <img
                  alt={`photo frame ${index % originalImages.length}`}
                  loading="lazy"
                  width="512"
                  height="512"
                  decoding="async"
                  data-nimg="1"
                  className="checkered h-full w-full rounded-md border object-cover sm:rounded-lg"
                  style={{ color: "transparent" }}
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Right side - Synchronized result images */}
        <div className="z-0 w-full">
          <div className="photo_strip flex w-full flex-row items-center animate-scroll-right">
            {/* Render result images twice for seamless loop, synchronized with originals */}
            {[...resultImages, ...resultImages].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square w-1/2 flex-shrink-0 md:w-1/4"
              >
                <img
                  alt={`photo frame ${index % resultImages.length}`}
                  loading="lazy"
                  width="512"
                  height="512"
                  decoding="async"
                  data-nimg="1"
                  className="checkered h-full w-full rounded-md border object-cover sm:rounded-lg"
                  style={{ color: "transparent" }}
                  src={image}
                />
                <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-center p-2">
                  <div className="mx-auto rounded bg-black bg-opacity-50 px-2 text-xs text-white md:text-sm">
                    AI GENERATED
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Photo Strip */}
      <div className="relative block w-full overflow-hidden py-3 md:hidden">
        {/* Magic separator */}
        <div className="magic-separator absolute left-1/2 top-0 z-20 h-full w-[1px] rounded-full bg-neutral-500"></div>
        
        {/* Left side - Original images */}
        <div className="absolute left-0 top-3 z-10 w-1/2 overflow-x-hidden">
          <div className="photo_strip flex flex-row items-center animate-scroll-right" style={{ width: "200%" }}>
            {[...originalImages, ...originalImages].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square w-1/2 flex-shrink-0"
              >
                <img
                  alt={`photo frame ${index % originalImages.length}`}
                  loading="lazy"
                  width="512"
                  height="512"
                  decoding="async"
                  data-nimg="1"
                  className="checkered h-full w-full rounded-md border object-cover"
                  style={{ color: "transparent" }}
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Right side - Synchronized result images */}
        <div className="z-0 w-full">
          <div className="photo_strip flex w-full flex-row items-center animate-scroll-right">
            {[...resultImages, ...resultImages].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square w-1/2 flex-shrink-0"
              >
                <img
                  alt={`photo frame ${index % resultImages.length}`}
                  loading="lazy"
                  width="512"
                  height="512"
                  decoding="async"
                  data-nimg="1"
                  className="checkered h-full w-full rounded-md border object-cover"
                  style={{ color: "transparent" }}
                  src={image}
                />
                <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-center p-2">
                  <div className="mx-auto rounded bg-black bg-opacity-50 px-2 text-xs text-white">
                    AI GENERATED
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
