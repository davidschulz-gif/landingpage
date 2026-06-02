"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { Compare } from "./ui/compare";
import { BreathingAnimationText } from "./breathing-animation-text";

interface CompareDualOutputUpscaleProps {
  className?: string;
}

export function CompareDualOutputUpscale({ className }: CompareDualOutputUpscaleProps) {
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);

  // Mapped inputs (Originals)
  const inputImages = [
    "/upscale-images/input/ChatGPT Image 2. Juni 2026, 10_56_22.png", // CAD to Photo
    "/upscale-images/input/ChatGPT Image 2. Juni 2026, 10_57_32.png", // Colormap
    "/upscale-images/input/ChatGPT Image 29. Mai 2026, 15_33_54.png", // Concrete Tower
  ];

  // Mapped standard outputs (Left Slider Output)
  const standardOutputs = [
    "/upscale-images/ouput/replicate-prediction-5g2c6x2dy5rmr0cygycrq6tx98.png", // CAD to Photo Standard
    "/upscale-images/ouput/replicate-prediction-t7258ddszxrmw0cygydtgyw62c.png", // Colormap Standard
    "/upscale-images/ouput/replicate-prediction-2g92ay13t1rmt0cygy6rdy50sr.png", // Concrete Tower Standard
  ];

  // Mapped high-creativity outputs (Right Slider Output)
  const highCreativityOutputs = [
    "/upscale-images/ouput/high creativity brick.png", // CAD to Photo High Creativity
    "/upscale-images/ouput/high creativity wood.png",  // Colormap High Creativity
    "/upscale-images/ouput/replicate-prediction-8av22w8k9srmw0cygz9vbkkzx8.png", // Concrete Tower Second Version
  ];

  const projectTitles = locale === 'de' ? [
    "CAD zu Foto (Mauerwerk)",
    "Farbkarte (Holz- & Texturverfeinerung)",
    "Monolithischer Betonturm (Oberflächenästhetik)"
  ] : [
    "CAD to Photo (Brick Details)",
    "Colormap (Wood & Texture Refinement)",
    "Monolithic Concrete Tower (Surface Aesthetics)"
  ];

  const projectDescriptions = locale === 'de' ? [
    "Beobachten Sie im linken Slider die strukturgetreue Standard-Skalierung und im rechten Slider die kreative Modellstufe. Beide vergleichen das Ergebnis direkt mit dem identischen Originalbild.",
    "Vergleichen Sie Holzmaserungen und Details. Standard vergrößert getreu die Originalstrukturen, während Hohe Kreativität feinste Faser- und Reliefeffekte neu hinzuerfindet.",
    "Erleben Sie die Rekonstruktion von Sichtbeton. Vergleichen Sie links die exakte Auflösungsvergrößerung und rechts die detailreiche, organische Kanten- und Flächenverfeinerung."
  ] : [
    "Observe the structurally faithful standard upscaling on the left slider and the creative model setting on the right slider. Both compare the results directly against the identical original image.",
    "Compare wood grain and textures. Standard faithfully sharpens the original geometries, while High Creativity reimagines and layers lifelike organic fibers and grains.",
    "Experience raw concrete reconstruction. Compare the precise resolution enhancement on the left with the organically detailed edge and surface refinement on the right."
  ];

  const aspectRatios = [
    "6144/4096", // CAD to Photo
    "6144/4096", // Colormap
    "4096/6144", // Concrete Tower
  ];

  const originalLabel = "ChatGPT Image 2 (2K)";
  const leftLabel = "TYPUS 8K (STANDARD)";
  const rightLabel = locale === 'de' ? "TYPUS 8K (KREATIV)" : "TYPUS 8K (CREATIVE)";

  return (
    <div className={cn("w-full overflow-hidden py-16 bg-[#fcfcfd] dark:bg-neutral-950/20 border-t border-neutral-100 dark:border-neutral-900", className)}>
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <BreathingAnimationText animationType="black-gray" className="font-space-grotesk">
            <h2
              className="text-[18px] md:text-[24px] lg:text-[30px] font-normal text-black mb-4 animate-breathe-black-gray"
              style={{
                fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif",
              }}
            >
              {locale === 'de' ? 'DUAL-UPSCALER VERGLEICH' : 'DUAL-UPSCALER COMPARISON'}
            </h2>
          </BreathingAnimationText>
          <BreathingAnimationText animationType="black-gray">
            <p
              className="text-gray-600 max-w-2xl mx-auto text-[12px] sm:text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
            >
              {locale === 'de'
                ? 'Vergleichen Sie Standard- und kreatives Upscaling direkt nebeneinander – beide jeweils im direkten Kontrast zum identischen Originalbild.'
                : 'Compare Standard and Creative upscaling side-by-side – each in direct contrast with the identical original image.'}
            </p>
          </BreathingAnimationText>
        </div>

        {/* Project Selector HUD */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-6 border-b border-neutral-100 dark:border-neutral-900/60 gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {locale === 'de' ? 'AKTIVES ARCHITEKTURPROJEKT' : 'ACTIVE ARCHITECTURAL PROJECT'}
            </div>
            <div className="text-lg md:text-xl font-medium tracking-tight text-neutral-900 dark:text-white">
              {projectTitles[activeIndex]}
            </div>
            <p className="text-xs md:text-sm text-neutral-500 max-w-[65ch]">
              {projectDescriptions[activeIndex]}
            </p>
          </div>

          {/* Thumbnail Selectors */}
          <div className="flex gap-2.5">
            {highCreativityOutputs.map((thumb, index) => (
              <div
                key={index}
                className={cn(
                  "h-12 w-16 sm:h-14 sm:w-20 md:h-16 md:w-24 cursor-pointer overflow-hidden transition-all duration-300 rounded border",
                  activeIndex === index
                    ? "opacity-100 border-black dark:border-white scale-105 shadow-md"
                    : "opacity-50 border-neutral-200 dark:border-neutral-800 hover:opacity-90"
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
        </div>

        {/* Dual Slider Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Slider: Original vs Standard Output */}
          <div className="space-y-3 flex flex-col items-center">
            <div className="w-full flex items-center justify-center">
              <Compare
                firstImage={inputImages[activeIndex]}
                secondImage={standardOutputs[activeIndex]}
                firstImageLabel={originalLabel}
                secondImageLabel={leftLabel}
                className="w-full h-auto overflow-hidden border border-border shadow-lg"
                firstImageClassName="object-cover w-full h-full"
                secondImageClassname="object-cover w-full h-full"
                slideMode="drag"
                showHandlebar={true}
                style={{
                  aspectRatio: aspectRatios[activeIndex]
                }}
              />
            </div>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                {locale === 'de' ? '1. Standard-Skalierung (Strukturtreu)' : '1. Standard Scaling (Structurally Faithful)'}
              </span>
              <p className="text-[11px] text-neutral-400 max-w-[40ch] mt-1 mx-auto leading-relaxed">
                {locale === 'de'
                  ? 'Vergrößert exakt die Geometrie und Details der Eingabequelle ohne strukturelle Abweichungen.'
                  : 'Faithfully amplifies the exact geometry and detail parameters of the input without distortion.'}
              </p>
            </div>
          </div>

          {/* Right Slider: Original vs High Creativity Output */}
          <div className="space-y-3 flex flex-col items-center">
            <div className="w-full flex items-center justify-center">
              <Compare
                firstImage={inputImages[activeIndex]}
                secondImage={highCreativityOutputs[activeIndex]}
                firstImageLabel={originalLabel}
                secondImageLabel={rightLabel}
                className="w-full h-auto overflow-hidden border border-border shadow-lg"
                firstImageClassName="object-cover w-full h-full"
                secondImageClassname="object-cover w-full h-full"
                slideMode="drag"
                showHandlebar={true}
                style={{
                  aspectRatio: aspectRatios[activeIndex]
                }}
              />
            </div>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                {locale === 'de' ? '2. Hohe Kreativität (Materialverfeinert)' : '2. High Creativity (Material Refined)'}
              </span>
              <p className="text-[11px] text-neutral-400 max-w-[40ch] mt-1 mx-auto leading-relaxed">
                {locale === 'de'
                  ? 'Ergänzt feinste Details und reichert Texturen wie Stein, Holz und Putz organisch an.'
                  : 'Adds organic details, enhancing and texturing brick, timber, and plaster surfaces.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
