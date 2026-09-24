'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  IconSparkles,
  IconRefresh,
  IconExternalLink,
  IconLoader2,
  IconLayoutGrid,
  IconHome,
  IconBuilding,
  IconCategory
} from '@tabler/icons-react'
import { appUrl } from '@/lib/constants'

interface AppShowcaseSectionProps {
  locale?: string
}

interface ShowcaseTab {
  id: string
  titleEn: string
  titleDe: string
  subtitleEn: string
  subtitleDe: string
  path: string
  icon: typeof IconLayoutGrid
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'studio',
    titleEn: 'AI Design Studio',
    titleDe: 'KI Design Studio',
    subtitleEn: 'Full interactive generator studio',
    subtitleDe: 'Interaktives Studio-Generator',
    path: '/create',
    icon: IconLayoutGrid,
  },
  {
    id: 'exterior',
    titleEn: 'Exterior Rendering',
    titleDe: 'Außenarchitektur',
    subtitleEn: 'Facade & building visualization',
    subtitleDe: 'Fassaden- & Gebäudevisualisierung',
    path: '/create?sessionId=-999&mode=exterior',
    icon: IconBuilding,
  },
  {
    id: 'interior',
    titleEn: 'Interior Staging',
    titleDe: 'Innenarchitektur',
    subtitleEn: 'Room layout & materials rendering',
    subtitleDe: 'Raumgestaltung & Material-Render',
    path: '/create?sessionId=-998&mode=interior',
    icon: IconHome,
  },
  {
    id: 'catalog',
    titleEn: '3D Materials Catalog',
    titleDe: '3D Material-Katalog',
    subtitleEn: 'Explore textures & furniture assets',
    subtitleDe: 'Texturen & Möbel-Objekte',
    path: '/create?catalog=open',
    icon: IconCategory,
  },
]

export function AppShowcaseSection({ locale = 'en' }: AppShowcaseSectionProps) {
  const isDe = locale === 'de'
  const [activeTabId, setActiveTabId] = useState<string>('studio')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [iframeKey, setIframeKey] = useState<number>(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const activeTab = SHOWCASE_TABS.find((t) => t.id === activeTabId) || SHOWCASE_TABS[0]
  const currentIframeSrc = `${appUrl}${activeTab.path}`

  const handleTabChange = (id: string) => {
    if (id !== activeTabId) {
      setIsLoading(true)
      setActiveTabId(id)
    }
  }

  const handleRefresh = () => {
    setIsLoading(true)
    setIframeKey((prev) => prev + 1)
  }

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white relative overflow-hidden border-t border-b border-neutral-200/80 dark:border-neutral-800">
      {/* Ambient glowing background effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[350px] bg-indigo-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-widest shadow-2xs">
            <IconSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            {isDe ? 'Interaktive App-Vorschau' : 'Interactive App Showcase'}
          </div>

          <h2 className="heading-primary">
            {isDe
              ? 'Erleben Sie die Typus.AI Plattform live'
              : 'Explore the Typus AI Application Live'}
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {isDe
              ? 'Testen Sie unsere KI-gestützten Architektur- und Visualisierungswerkzeuge direkt in der interaktiven Live-App-Vorschau.'
              : 'Interact with our AI-powered architectural visualization application directly inside this live window.'}
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8">
          {SHOWCASE_TABS.map((tab) => {
            const Icon = tab.icon
            const isActive = tab.id === activeTabId
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-sm scale-[1.02]'
                    : 'bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-500 dark:text-neutral-400'}`} />
                <span>{isDe ? tab.titleDe : tab.titleEn}</span>
              </button>
            )
          })}
        </div>

        {/* Browser Frame Showcase */}
        <div className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden backdrop-blur-sm">
          {/* Top Bar / Window Controls */}
          <div className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-4 py-3 flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
            {/* Window Dots */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="hidden md:inline-block text-xs font-medium text-neutral-500 dark:text-neutral-400 ml-2">
                Typus AI Studio
              </span>
            </div>

            {/* Address Bar */}
            <div className="flex-1 min-w-[200px] max-w-xl mx-auto bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3.5 py-1.5 flex items-center gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-neutral-400 truncate">https://</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-semibold truncate">
                app.typus.ai{activeTab.path}
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleRefresh}
                title={isDe ? 'Erneuern' : 'Reload application preview'}
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white rounded-lg hover:bg-neutral-200/70 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <IconRefresh className="w-4 h-4" />
              </button>

              <a
                href={currentIframeSrc}
                target="_blank"
                rel="noopener noreferrer"
                title={isDe ? 'In neuem Tab öffnen' : 'Open app in full view'}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-white text-xs font-medium transition-colors"
              >
                <span>{isDe ? 'Vollbild' : 'Full App'}</span>
                <IconExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Subheader info banner */}
          <div className="bg-neutral-50 dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800 px-5 py-2.5 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                {isDe ? activeTab.titleDe : activeTab.titleEn}
              </span>
              <span className="hidden sm:inline text-neutral-400">•</span>
              <span className="hidden sm:inline text-neutral-600 dark:text-neutral-400">
                {isDe ? activeTab.subtitleDe : activeTab.subtitleEn}
              </span>
            </div>
            <div className="text-neutral-400 dark:text-neutral-500 text-[11px] uppercase tracking-wider font-semibold">
              Live App View
            </div>
          </div>

          {/* Iframe Viewport Container */}
          <div className="relative w-full h-[520px] sm:h-[620px] md:h-[700px] lg:h-[750px] bg-neutral-50 dark:bg-neutral-950">
            {/* Loading Spinner Overlay */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md z-20 flex flex-col items-center justify-center gap-3 text-neutral-800 dark:text-neutral-200"
                >
                  <IconLoader2 className="w-9 h-9 text-blue-600 animate-spin" />
                  <p className="text-sm font-medium">
                    {isDe ? 'Lade Typus App...' : 'Loading Typus AI Application...'}
                  </p>
                  <p className="text-xs text-neutral-500 font-mono">{currentIframeSrc}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Embedded Live Iframe */}
            <iframe
              key={iframeKey + activeTabId}
              ref={iframeRef}
              src={currentIframeSrc}
              title={isDe ? activeTab.titleDe : activeTab.titleEn}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-0 bg-white"
              allow="clipboard-write; camera; microphone; autoplay"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
