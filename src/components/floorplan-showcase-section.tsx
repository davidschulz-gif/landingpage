'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  IconLayoutGrid,
  IconHome,
  IconEye,
  IconSquarePlus,
  IconExternalLink,
  IconRefresh,
  IconLoader2,
  IconSparkles,
  IconArrowRight
} from '@tabler/icons-react'
import { appUrl } from '@/lib/constants'

interface FloorPlanSection {
  id: string
  titleEn: string
  titleDe: string
  descEn: string
  descDe: string
  badgeEn: string
  badgeDe: string
  path: string
  icon: typeof IconLayoutGrid
}

const SECTIONS: FloorPlanSection[] = [
  {
    id: 'main',
    titleEn: 'Main Floor Plan Generator',
    titleDe: 'Haupt-Grundriss-Generator',
    descEn: 'Instant AI floor plan creation for room layouts & floor specs.',
    descDe: 'Sofortige KI-Grundrisserstellung für Raumlayouts und Pläne.',
    badgeEn: 'All-in-One Studio',
    badgeDe: 'All-in-One Studio',
    path: '/floor-plan',
    icon: IconLayoutGrid,
  },
  {
    id: 'house',
    titleEn: 'House Floor Plan',
    titleDe: 'Haus-Grundriss',
    descEn: 'Specialized layout planning for entire house & multi-room architectures.',
    descDe: 'Spezialisierte Layoutplanung für ganze Häuser & Mehrraumarchitekturen.',
    badgeEn: 'Whole House Layout',
    badgeDe: 'Ganzes Haus Layout',
    path: '/floor-plan/house',
    icon: IconHome,
  },
  {
    id: 'visualizer',
    titleEn: 'Plan Visualizer',
    titleDe: 'Plan-Visualisierer',
    descEn: 'Visualize and inspect floor plan spatial flow with interactive details.',
    descDe: 'Visualisieren Sie den Raumfluss mit interaktiven Detailansichten.',
    badgeEn: 'Spatial Preview',
    badgeDe: 'Raumvorschau',
    path: '/floor-plan/plan-visualizer',
    icon: IconEye,
  },
  {
    id: 'create',
    titleEn: 'Create Floor Plan',
    titleDe: 'Grundriss Erstellen',
    descEn: 'Custom prompt & step-by-step room creation studio.',
    descDe: 'Individuelles Prompting & Schritt-für-Schritt Raumgestaltung.',
    badgeEn: 'Custom Creator',
    badgeDe: 'Eigenes Design',
    path: '/floor-plan/create',
    icon: IconSquarePlus,
  },
]

interface FloorplanShowcaseSectionProps {
  locale?: string
}

export function FloorplanShowcaseSection({ locale = 'en' }: FloorplanShowcaseSectionProps) {
  const isDe = locale === 'de'
  const [activeTabId, setActiveTabId] = useState<string>('main')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [iframeKey, setIframeKey] = useState<number>(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const activeSection = SECTIONS.find((s) => s.id === activeTabId) || SECTIONS[0]
  const targetUrl = `${appUrl}${activeSection.path}`
  const floorplanLandingRoute = `/${locale}/ai-floor-plan-generator`

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
    <section className="py-20 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white relative overflow-hidden border-t border-b border-neutral-200/80 dark:border-neutral-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-widest shadow-2xs">
            <IconSparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            {isDe ? 'INTERAKTIVE LIVE STUDIO VORSCHAU' : 'INTERACTIVE LIVE STUDIO PREVIEW'}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {isDe
              ? 'Erleben Sie alle KI-Grundriss-Module live'
              : 'Try Our AI Floor Plan Tools Live'}
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {isDe
              ? 'Wechseln Sie direkt unten zwischen den verschiedenen Grundriss-Bereichen und testen Sie die Benutzeroberfläche in Echtzeit.'
              : 'Switch between different floor plan tools below to experience our generator apps live on the landing page.'}
          </p>

          {/* Primary CTA Button to Floor Plan Landing Page */}
          <div className="pt-2">
            <Link
              href={floorplanLandingRoute}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>{isDe ? 'Grundriss-Generator testen' : 'Try Floorplan Generator'}</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8">
          {SECTIONS.map((sec) => {
            const Icon = sec.icon
            const isActive = sec.id === activeTabId
            return (
              <button
                key={sec.id}
                onClick={() => handleTabChange(sec.id)}
                className={`relative px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold border border-neutral-300 dark:border-neutral-700 shadow-sm scale-[1.02]'
                    : 'bg-white/80 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800'
                }`}
              >
                <Icon className={`w-4.5 h-4.5 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-500 dark:text-neutral-400'}`} />
                <span>{isDe ? sec.titleDe : sec.titleEn}</span>
                {isActive && (
                  <span className="ml-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                    Live
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Browser Window Frame */}
        <div className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden backdrop-blur-sm">
          {/* Top Bar / Toolbar */}
          <div className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-4 py-3 flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
            {/* Window Dots */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="hidden md:inline-block text-xs font-medium text-neutral-500 dark:text-neutral-400 ml-2">
                Typus.AI App
              </span>
            </div>

            {/* Address Bar */}
            <div className="flex-1 min-w-[220px] max-w-xl mx-auto bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3.5 py-1.5 flex items-center gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-neutral-400 truncate">https://</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-semibold truncate">
                app.typus.ai{activeSection.path}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={handleRefresh}
                title={isDe ? 'Erneuern' : 'Reload frame'}
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <IconRefresh className="w-4 h-4" />
              </button>

              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={isDe ? 'In neuem Tab öffnen' : 'Open in new tab'}
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1 text-xs"
              >
                <IconExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">{isDe ? 'Öffnen' : 'Open'}</span>
              </a>
            </div>
          </div>

          {/* Active Tool Sub-header info */}
          <div className="bg-neutral-50 dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800 px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                {isDe ? activeSection.badgeDe : activeSection.badgeEn}
              </span>
              <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                {isDe ? activeSection.descDe : activeSection.descEn}
              </span>
            </div>
            <div className="text-neutral-400 dark:text-neutral-500">
              {isDe ? 'Interaktive App-Umgebung' : 'Interactive App Environment'}
            </div>
          </div>

          {/* Iframe Viewport Container */}
          <div className="relative w-full h-[550px] sm:h-[650px] md:h-[720px] bg-neutral-100 dark:bg-neutral-950">
            {/* Loading Spinner Overlay */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md z-20 flex flex-col items-center justify-center gap-3 text-neutral-700 dark:text-neutral-300"
                >
                  <IconLoader2 className="w-10 h-10 text-emerald-600 animate-spin" />
                  <p className="text-sm font-medium">
                    {isDe ? 'Lade Grundriss-Modul...' : 'Loading Floor Plan Module...'}
                  </p>
                  <p className="text-xs text-neutral-400 font-mono">{targetUrl}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Live Iframe */}
            <iframe
              key={iframeKey + activeTabId}
              ref={iframeRef}
              src={targetUrl}
              title={isDe ? activeSection.titleDe : activeSection.titleEn}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-0 bg-white"
              allow="clipboard-write; camera; microphone; autoplay"
            />
          </div>
        </div>

        {/* Grid Preview Cards for Quick Navigation */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SECTIONS.map((sec) => {
            const Icon = sec.icon
            const isActive = sec.id === activeTabId
            const secUrl = `${appUrl}${sec.path}`

            return (
              <div
                key={sec.id}
                onClick={() => handleTabChange(sec.id)}
                className={`cursor-pointer group p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-white dark:bg-neutral-900 border-emerald-500/60 shadow-sm ring-1 ring-emerald-500/20'
                    : 'bg-white dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isActive
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <a
                      href={secUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors p-1"
                      title={isDe ? 'Direkt öffnen' : 'Open directly'}
                    >
                      <IconExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {isDe ? sec.titleDe : sec.titleEn}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {isDe ? sec.descDe : sec.descEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span className="truncate">{sec.path}</span>
                  <span
                    className={`font-semibold ${
                      isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white'
                    }`}
                  >
                    {isActive ? (isDe ? 'Aktiv' : 'Active') : isDe ? 'Anzeigen →' : 'View →'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              {isDe ? 'Bereit, eigene KI-Grundrisse zu generieren?' : 'Ready to create custom AI Floor Plans?'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              {isDe ? 'Entdecken Sie die vollständige KI-Grundriss-Landingpage und alle Funktionen.' : 'Explore the full AI floor plan generator page with all features and pricing.'}
            </p>
          </div>

          <Link
            href={floorplanLandingRoute}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:scale-[1.02]"
          >
            <span>{isDe ? 'Grundriss-Generator testen' : 'Try Floorplan Generator'}</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
