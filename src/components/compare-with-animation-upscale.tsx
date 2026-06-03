"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { ActionButton } from "./action-button";
import { Compare } from "./ui/compare";

export interface ComparisonProject {
  id: string;
  titleDe: string;
  titleEn: string;
  descDe: string;
  descEn: string;
  input: string;
  output1: string; // Standard Output
  output2?: string; // High Creativity Output (Optional)
  aspectRatio: string;
}

interface CompareWithAnimationProps {
  className?: string;
  projects?: ComparisonProject[];
}

export const CompareWithAnimationUpscale = ({
  className,
  projects,
}: CompareWithAnimationProps) => {
  const t = useTranslations('Compare');
  const [activeIndex, setActiveIndex] = useState(0);
  const locale = useLocale();

  // Unified list of 9 unique upscaled architectural projects
  const defaultProjects: ComparisonProject[] = [
    {
      id: "model3d",
      titleDe: "3D-Modell (Standard)",
      titleEn: "3D Model (Standard)",
      descDe: "Präzises 3D-Architekturmodell mit realistischer Lichtstimmung und klaren Strukturen.",
      descEn: "Precise 3D architectural model with realistic lighting and clear structural definitions.",
      input: "/upscale-images copy/input/image-7.png",
      output1: "/upscale-images copy/ouput/image-7.png",
      aspectRatio: "6144/4096",
    },
    {
      id: "cad-to-photo",
      titleDe: "CAD zu Foto (Mauerwerk)",
      titleEn: "CAD to Photo (Brick)",
      descDe: "Transformation einer CAD-Skizze in eine fotorealistische Außenansicht. In der kreativen Version werden feinste Mauerwerk-Details organisch hinzuerfunden.",
      descEn: "Transformation of a CAD sketch into a photorealistic exterior view. In the high creativity setting, fine brick details are organically reimagined.",
      input: "/upscale-images copy/input/image-8.png",
      output1: "/upscale-images copy/ouput/image-8.png",
      output2: "/upscale-images copy/ouput/high-creativity-8.png",
      aspectRatio: "6144/4096",
    },
    {
      id: "colormap",
      titleDe: "Farbkarten-Visualisierung",
      titleEn: "Colormap Visualization",
      descDe: "Präzise Veranschaulichung der Materialien. Die kreative Stufe reichert Holzmaserungen und Details lebendiger und haptischer an.",
      descEn: "Precise material representation. The high creativity setting enriches timber grains with more lifelike depth and texture.",
      input: "/upscale-images copy/input/image-9.png",
      output1: "/upscale-images copy/ouput/image-9.png",
      output2: "/upscale-images copy/ouput/high-creativity-9.png",
      aspectRatio: "6144/4096",
    },
    {
      id: "urban-loft",
      titleDe: "Urbanes Loft",
      titleEn: "Urban Loft",
      descDe: "Industrielles urbanes Loft-Interieur. Standard liefert strukturtreue Schärfe, während Hohe Kreativität edle Texturen und Lichtakzente einarbeitet.",
      descEn: "Industrial urban loft interior. Standard sharpens geometries faithfully, while High Creativity layers premium concrete textures and warm light.",
      input: "/upscale-images copy/input/image-6.png",
      output1: "/upscale-images copy/ouput/image-6.png",
      output2: "/upscale-images copy/ouput/high-creativity-6.png",
      aspectRatio: "5600/4480",
    },
    {
      id: "concrete-tower",
      titleDe: "Betonturm",
      titleEn: "Concrete Tower",
      descDe: "Monolithischer Sichtbetonturm. Vergleichen Sie die exakte Standard-Vergrößerung mit der organisch verfeinerten, detailreichen kreativen Variante.",
      descEn: "Monolithic raw concrete tower. Compare the exact standard enlargement with the organically detailed, textured creative variant.",
      input: "/upscale-images copy/input/image-17.png",
      output1: "/upscale-images copy/ouput/image-17.png",
      aspectRatio: "4096/6144",
    },
    {
      id: "conceptual",
      titleDe: "Konzept zur Realität",
      titleEn: "Concept to Reality",
      descDe: "Architektonische Konzeptvisualisierung mit feinen Materialnuancen und stimmungsvoller Lichtstimmung.",
      descEn: "Architectural conceptual visualization featuring refined material textures and soft, atmospheric lighting.",
      input: "/upscale-images copy/input/image-11.png",
      output1: "/upscale-images copy/ouput/image-11.png",
      aspectRatio: "5600/4480",
    },
    {
      id: "waterfront",
      titleDe: "Uferpromenade",
      titleEn: "Waterfront",
      descDe: "Großzügiges Gebäude am Wasser mit komplexer Glasfassade und Spiegelungen auf der Wasseroberfläche.",
      descEn: "Spacious building by the water, showcasing complex glass facade detailing and lifelike reflections.",
      input: "/upscale-images copy/input/image-12.png",
      output1: "/upscale-images copy/ouput/image-12.png",
      aspectRatio: "5600/4480",
    },
    {
      id: "forest-pavilion",
      titleDe: "Waldpavillon",
      titleEn: "Forest Pavilion",
      descDe: "Moderner Pavillon im dichten Wald, der Licht und Schatten durch Geometrien des Holzdaches filtert.",
      descEn: "Modern pavilion set in a dense forest, filtering light and shadow through complex timber roof structures.",
      input: "/upscale-images copy/input/image-16.png",
      output1: "/upscale-images copy/ouput/image-16.png",
      aspectRatio: "4256/5904",
    },
    {
      id: "adaptive-reuse",
      titleDe: "Umnutzung",
      titleEn: "Adaptive Reuse",
      descDe: "Erhalt historischer Bausubstanz kombiniert mit modernen Elementen und filigranen Metallkonstruktionen.",
      descEn: "Preservation of historical architecture combined with modern elements and delicate steel structures.",
      input: "/upscale-images copy/input/image-14.png",
      output1: "/upscale-images copy/ouput/image-14.png",
      aspectRatio: "5248/4800",
    },
  ];

  const projectsList = projects || defaultProjects;
  const activeProject = projectsList[activeIndex];
  const hasDualOutputs = !!activeProject.output2;

  const originalLabel = "ChatGPT Image 2 (2K)";
  const standardLabel = "TYPUS 8K (STANDARD)";
  const creativeLabel = locale === 'de' ? "TYPUS 8K (KREATIV)" : "TYPUS 8K (CREATIVE)";

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <h2
          className="text-[18px] md:text-[24px] lg:text-[30px] font-normal text-neutral-900 dark:text-white mb-6"
          style={{
            fontFamily:
              "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif",
          }}
        >
          {locale === 'de' ? 'UPSCALE-VERGLEICH' : 'UPSCALER COMPARISON'}
        </h2>
        <p
          className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-[12px] sm:text-sm md:text-base leading-relaxed"
          style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
        >
          {locale === 'de' 
            ? 'Erleben Sie die beeindruckende Transformation von Standard-Auflösung zu 8K-Präsentationsqualität mit ultra-realistischen Details.'
            : 'Experience the stunning transformation from standard resolution to 8K presentation quality with ultra-realistic details.'}
        </p>
      </div>

      {/* Dynamic Comparison Panel based on Outputs count */}
      {!hasDualOutputs ? (
        /* 1. SINGLE OUTPUT LAYOUT (1 Slider) */
        <div className="flex flex-col gap-8 lg:flex-row items-center lg:items-stretch">
          <div className="flex w-full flex-shrink-0 flex-col justify-center px-0 sm:px-0 lg:px-8 lg:w-1/3">
            <div className="mb-4 text-[10px] sm:text-xs md:text-sm font-medium tracking-tight text-muted-foreground">
              {t('aiTransformation')}
            </div>
            <div className="mb-2 text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px] font-medium tracking-tight text-neutral-900 dark:text-white">
              {locale === 'de' ? activeProject.titleDe : activeProject.titleEn}
            </div>
            <div className="mb-8 max-w-[35ch] text-[12px] sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 min-h-[48px]">
              {locale === 'de' ? activeProject.descDe : activeProject.descEn}
            </div>
            
            {/* 9 Project Thumbnails */}
            <div className="mb-6 flex flex-wrap gap-2 max-w-md">
              {projectsList.map((proj, index) => (
                <div
                  key={proj.id}
                  className={cn(
                    "h-12 w-16 sm:h-14 sm:w-20 md:h-16 md:w-24 cursor-pointer overflow-hidden transition-all duration-300 rounded border",
                    activeIndex === index
                      ? "opacity-100 border-black dark:border-white scale-105 shadow-md"
                      : "opacity-50 border-neutral-200 dark:border-neutral-800 hover:opacity-90"
                  )}
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    alt={locale === 'de' ? proj.titleDe : proj.titleEn}
                    src={proj.output1}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="w-full">
              <ActionButton href='/pricing' icon={
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
              }>
                {t('startCreating')}
              </ActionButton>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 flex items-center justify-center">
            <Compare
              firstImage={activeProject.input}
              secondImage={activeProject.output1}
              firstImageLabel="ChatGPT Image 2 (2K)"
              secondImageLabel="TYPUS 8K"
              className="w-full h-auto overflow-hidden border border-border shadow-lg"
              firstImageClassName="object-cover w-full h-full"
              secondImageClassname="object-cover w-full h-full"
              slideMode="drag"
              showHandlebar={true}
              style={{
                aspectRatio: activeProject.aspectRatio
              }}
            />
          </div>
        </div>
      ) : (
        /* 2. DUAL OUTPUT LAYOUT (2 Sliders Side-by-Side) */
        <div className="space-y-8">
          {/* Top Info HUD */}
          <div className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-neutral-100 dark:border-neutral-900/60 gap-6">
            <div className="space-y-1 text-center md:text-left md:w-2/3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                {t('aiTransformation')}
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">
                {locale === 'de' ? activeProject.titleDe : activeProject.titleEn}
              </div>
              <p className="text-xs md:text-sm text-neutral-500 max-w-[70ch]">
                {locale === 'de' ? activeProject.descDe : activeProject.descEn}
              </p>
            </div>

            {/* 9 Project Selector Thumbnails */}
            <div className="flex gap-2 max-w-full overflow-x-auto py-1">
              {projectsList.map((proj, index) => (
                <div
                  key={proj.id}
                  className={cn(
                    "h-12 w-16 sm:h-14 sm:w-20 md:h-16 md:w-24 cursor-pointer overflow-hidden transition-all duration-300 rounded border flex-shrink-0",
                    activeIndex === index
                      ? "opacity-100 border-black dark:border-white scale-105 shadow-md"
                      : "opacity-50 border-neutral-200 dark:border-neutral-800 hover:opacity-90"
                  )}
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    alt={locale === 'de' ? proj.titleDe : proj.titleEn}
                    src={proj.output1}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dual Sliders side-by-side both comparing to idential original input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Input vs Standard */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-full flex items-center justify-center">
                <Compare
                  firstImage={activeProject.input}
                  secondImage={activeProject.output1}
                  firstImageLabel={originalLabel}
                  secondImageLabel={standardLabel}
                  className="w-full h-auto overflow-hidden border border-border shadow-lg"
                  firstImageClassName="object-cover w-full h-full"
                  secondImageClassname="object-cover w-full h-full"
                  slideMode="drag"
                  showHandlebar={true}
                  style={{
                    aspectRatio: activeProject.aspectRatio
                  }}
                />
              </div>
              <div className="text-center px-4">
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

            {/* Right: Input vs High Creativity */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-full flex items-center justify-center">
                <Compare
                  firstImage={activeProject.input}
                  secondImage={activeProject.output2}
                  firstImageLabel={originalLabel}
                  secondImageLabel={creativeLabel}
                  className="w-full h-auto overflow-hidden border border-border shadow-lg"
                  firstImageClassName="object-cover w-full h-full"
                  secondImageClassname="object-cover w-full h-full"
                  slideMode="drag"
                  showHandlebar={true}
                  style={{
                    aspectRatio: activeProject.id === 'urban-loft' ? "4480/5600" : activeProject.aspectRatio
                  }}
                />
              </div>
              <div className="text-center px-4">
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
      )}
    </div>
  );
};
