'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { ComparisonProject } from './compare-with-animation-upscale'

interface UpscaleThumbnailNavProps {
  basePath: string; // e.g., '/upscale-privacy/upscale-1'
  projects: ComparisonProject[];
  activeIndex?: number; // if undefined, it means we are on the Zoom page
  onSelect?: (index: number) => void;
  zoomThumbnailImage: string; // The image to show for the Zoom component thumbnail
  className?: string;
  isDualOutputLayout?: boolean; // Changes the flex wrap style if needed
}

export function UpscaleThumbnailNav({
  basePath,
  projects,
  activeIndex,
  onSelect,
  zoomThumbnailImage,
  className,
  isDualOutputLayout = false,
}: UpscaleThumbnailNavProps) {
  const locale = useLocale()
  const router = useRouter()

  const handleSliderClick = (index: number) => {
    if (onSelect) {
      onSelect(index)
    } else {
      router.push(`/${locale}${basePath}/sliders?slide=${index}`)
    }
  }

  return (
    <div className={cn(
      isDualOutputLayout 
        ? "flex gap-2 max-w-full overflow-x-auto py-1" 
        : "flex flex-wrap gap-2 max-w-md", 
      className
    )}>
      {/* Zoom Component Thumbnail */}
      <Link href={`/${locale}${basePath}`} className="block flex-shrink-0">
        <div
          className={cn(
            "h-12 w-16 sm:h-14 sm:w-20 md:h-16 md:w-24 cursor-pointer overflow-hidden transition-all duration-300 rounded border relative group",
            activeIndex === undefined
              ? "opacity-100 border-black dark:border-white scale-105 shadow-md"
              : "opacity-50 border-neutral-200 dark:border-neutral-800 hover:opacity-90"
          )}
        >
          <img
            alt="Zoom Showcase"
            src={zoomThumbnailImage}
            className="h-full w-full object-cover"
          />
          {/* Overlay icon to indicate Zoom */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6"/><path d="M11 8v6"/></svg>
          </div>
        </div>
      </Link>

      {/* Slider Project Thumbnails */}
      {projects.map((proj, index) => (
        <div
          key={proj.id}
          className={cn(
            "h-12 w-16 sm:h-14 sm:w-20 md:h-16 md:w-24 cursor-pointer overflow-hidden transition-all duration-300 rounded border flex-shrink-0",
            activeIndex === index
              ? "opacity-100 border-black dark:border-white scale-105 shadow-md"
              : "opacity-50 border-neutral-200 dark:border-neutral-800 hover:opacity-90"
          )}
          onClick={() => handleSliderClick(index)}
        >
          <img
            alt={locale === 'de' ? proj.titleDe : proj.titleEn}
            src={proj.output1}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}
