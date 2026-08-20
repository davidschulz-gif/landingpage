'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useRef } from 'react'
import { useAnimate } from 'framer-motion'
import { renderLogo } from './three-d-integrations'

export const IntegrationsMarquee = () => {
  const t = useTranslations('Integrations')
  const [scope, animate] = useAnimate()
  const controlsRef = useRef<any>(null)

  const platforms = [
    { key: 'acc', hasLogo: 'acc' },
    { key: 'ifc', hasLogo: 'ifc' },
    { key: 'revit', hasLogo: 'revit' },
    { key: 'powerbi', hasLogo: 'powerbi' },
    { key: 'rhino', hasLogo: 'rhino' },
    { key: 'sketchup', hasLogo: 'sketchup' },
    { key: 'navisworks', hasLogo: 'navisworks' },
    { key: 'grasshopper', hasLogo: 'grasshopper' },
    { key: 'blender', hasLogo: 'blender' },
    { key: 'archicad', hasLogo: 'archicad' },
    { key: 'civil3d', hasLogo: 'civil3d' },
    { key: 'autocad', hasLogo: 'autocad' },
    { key: 'etabs', hasLogo: 'etabs' },
    { key: 'tekla', hasLogo: 'tekla' },
    { key: 'vectorworks', hasLogo: 'vectorworks' },
    { key: 'databricks', hasLogo: 'databricks' },
    { key: 'snowflake', hasLogo: 'snowflake' },
  ]

  const doubledPlatforms = [...platforms, ...platforms]

  useEffect(() => {
    if (scope.current) {
      const controls = animate(
        scope.current,
        { x: [0, "-50%"] },
        {
          duration: 180, // Extremely slow, precise 180 seconds for a full loop
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }
      )
      controlsRef.current = controls
      return () => controls.stop()
    }
  }, [animate, scope])

  const handleMouseEnter = () => {
    if (controlsRef.current) {
      controlsRef.current.pause()
    }
  }

  const handleMouseLeave = () => {
    if (controlsRef.current) {
      controlsRef.current.play()
    }
  }

  return (
    <div className="w-full py-8 overflow-hidden relative select-none">
      {/* Premium Masking Fade Effect */}
      <div 
        className="w-full flex flex-row flex-nowrap overflow-hidden mask-fade"
        style={{
          maskImage: 'linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)'
        }}
      >
        <div 
          ref={scope}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex flex-row flex-nowrap min-w-max"
        >
          {doubledPlatforms.map((platform, idx) => (
            <div 
              key={`${platform.key}-${idx}`} 
              className="flex items-center gap-3 px-5 py-2.5 mx-3 bg-white dark:bg-neutral-900/60 border border-neutral-200/50 dark:border-neutral-800/80 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.02)] whitespace-nowrap flex-shrink-0"
            >
              {/* Logo Wrapper forcing child SVG scaling */}
              <div className="h-6 min-w-6 flex items-center justify-center flex-shrink-0 [&>svg]:w-full [&>svg]:h-full [&>img]:h-full [&>img]:w-auto [&>img]:max-w-none [&>img]:object-contain">
                {renderLogo(platform.hasLogo)}
              </div>
              <span className="text-[13px] font-bold text-neutral-800 dark:text-neutral-200 tracking-tight font-sans">
                {t(`${platform.key}.title`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
