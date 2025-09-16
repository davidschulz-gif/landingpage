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
  // Original/Before images (CAD/basic architectural drawings)
  const originalImages = [
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fjtbd%2Fcase-3d-original.jpg&w=1080&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fjtbd%2Fcase-photo-original.jpg&w=1080&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FFV8miKNd3yFQsUZdiZHNqQ%2F111ce6a4-9fe3-4450-9eab-36bde1abd200%2Fpublic&w=750&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fjtbd%2Fcase-sketch-original.jpg&w=1080&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fphotostrip%2Fgallery-0-original.jpg&w=640&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fphotostrip%2Fgallery-1-original.jpg&w=640&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fphotostrip%2Fgallery-2-original.jpg&w=640&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fphotostrip%2Fgallery-3-original.jpg&w=640&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fphotostrip%2Fgallery-4-original.jpg&w=640&q=75",
  ];

  // Result/After images (photorealistic renders)
  const resultImages = [
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FFV8miKNd3yFQsUZdiZHNqQ%2Faa665545-b2d7-4d6c-3909-9d9a04a56300%2Fpublic&w=750&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fjtbd%2Fcase-3d-rendered.jpg&w=1080&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fjtbd%2Fcase-photo-rendered.jpg&w=1080&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fjtbd%2Fcase-sketch-rendered.jpg&w=1080&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fphotostrip%2Fgallery-0-rendered.jpg&w=640&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fphotostrip%2Fgallery-1-rendered.jpg&w=640&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fphotostrip%2Fgallery-2-rendered.jpg&w=640&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fphotostrip%2Fgallery-3-rendered.jpg&w=640&q=75",
    "https://rerenderai.com/_next/image?url=https%3A%2F%2Frerender.s3.amazonaws.com%2Fassets%2Flanding%2Fphotostrip%2Fgallery-4-rendered.jpg&w=640&q=75",
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

      {/* Desktop Photo Strip */}
      <div className="relative hidden w-full overflow-hidden h-64 md:block">
        {/* Center Separator Line */}
        <div className="absolute left-1/2 top-[-20px] z-20 h-[calc(100%+40px)] w-[2px] rounded-full bg-neutral-500"></div>

        {/* Original Images Strip (Left Side) */}
        <div className="absolute mt-6 left-0 top-0 z-10 w-1/2 overflow-hidden">
          <div
            className="flex flex-row items-center animate-scroll-right"
            style={{ width: "200%" }}
          >
            {originalImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square w-1/2 flex-shrink-0 md:w-1/4"
              >
                <img
                  alt={`Original ${index}`}
                  src={image}
                  className="h-full w-full rounded-md border object-cover sm:rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Result Images Strip (Right Side Only) */}
        <div className="absolute mt-6 right-0 top-0 z-10 w-1/2 overflow-hidden">
          <div
            className="flex flex-row items-center animate-scroll-right"
            style={{ width: "200%" }}
          >
            {resultImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square w-1/2 flex-shrink-0 md:w-1/4"
              >
                <img
                  alt={`Result ${index}`}
                  src={image}
                  className="h-full w-full rounded-md border object-cover sm:rounded-lg"
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
      <div className="relative block w-full overflow-hidden h-32 md:hidden">
        {/* Center Separator Line */}
        <div className="absolute left-1/2 top-[-10px] z-20 h-[calc(100%+20px)] w-[1px] rounded-full bg-neutral-500"></div>

        {/* Original Images Strip (Left Side) */}
        <div className="absolute left-0 top-0 z-10 w-1/2 overflow-hidden">
          <div
            className="flex flex-row items-center animate-scroll-right"
            style={{ width: "200%" }}
          >
            {originalImages.slice(2, 8).map((image, index) => (
              <div
                key={index}
                className="relative aspect-square w-1/2 flex-shrink-0"
              >
                <img
                  alt={`Original ${index}`}
                  src={image}
                  className="h-full w-full rounded-md border object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Result Images Strip (Right Side Only) */}
        <div className="absolute right-0 top-0 z-10 w-1/2 overflow-hidden">
          <div
            className="flex flex-row items-center animate-scroll-right"
            style={{ width: "200%" }}
          >
            {resultImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square w-1/2 flex-shrink-0"
              >
                <img
                  alt={`Result ${index}`}
                  src={image}
                  className="h-full w-full rounded-md border object-cover"
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
