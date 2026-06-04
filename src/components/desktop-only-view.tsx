'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconDeviceDesktop, IconCopy, IconCheck, IconArrowRight } from '@tabler/icons-react'

export function DesktopOnlyView() {
  const locale = useLocale()
  const [copied, setCopied] = useState(false)
  const [pageUrl, setPageUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href)
    }
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  // Localized texts
  const t = {
    de: {
      title: 'Desktop-Ansicht erforderlich',
      subtitle: 'INTERAKTIVE PRÄSENTATION',
      description: 'Diese interaktive 8K-Upscaler-Präsentation nutzt erweitertes Detail-Zooming und Side-by-Side-Vergleiche, die exklusiv für größere Desktop-Bildschirme optimiert sind.',
      copyLabel: copied ? 'Link kopiert!' : 'Showcase-Link kopieren',
      footerHint: 'Kopieren Sie den Link und öffnen Sie ihn auf Ihrem PC, um das volle interaktive Erlebnis zu sehen.',
    },
    en: {
      title: 'Desktop View Required',
      subtitle: 'INTERACTIVE SHOWCASE',
      description: 'This interactive 8K upscaler showcase uses advanced detail-zooming and side-by-side comparisons, which are optimized exclusively for larger desktop screens.',
      copyLabel: copied ? 'Link copied!' : 'Copy showcase link',
      footerHint: 'Copy the link and open it on your computer to experience the interactive showcases.',
    }
  }

  const content = locale === 'de' ? t.de : t.en

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center max-w-md mx-auto min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-[32px] p-8 shadow-xl relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Icon Container */}
        <div className="mx-auto w-16 h-16 bg-neutral-50 dark:bg-neutral-950 rounded-2xl flex items-center justify-center border border-neutral-100 dark:border-neutral-800/80 mb-6 relative">
          <IconDeviceDesktop className="w-8 h-8 text-neutral-800 dark:text-neutral-200" stroke={1.5} />
          <span className="absolute top-2 right-2 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        </div>

        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[9px] font-bold uppercase tracking-[0.2em] mb-4">
          <span>{content.subtitle}</span>
        </div>

        {/* Title */}
        <h2 
          className="text-2xl font-normal text-black dark:text-white tracking-tight mb-4"
          style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
        >
          {content.title}
        </h2>

        {/* Description */}
        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-8">
          {content.description}
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleCopy}
            className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 w-full active:scale-95 shadow-md ${
              copied
                ? 'bg-emerald-500 text-white border border-emerald-500'
                : 'bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 border border-neutral-950 dark:border-neutral-200'
            }`}
            style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
          >
            {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            <span>{content.copyLabel}</span>
          </button>

        </div>

        {/* Footer info text */}
        <p className="text-neutral-400 dark:text-neutral-500 text-[11px] leading-relaxed mt-6 font-mono">
          {content.footerHint}
        </p>
      </motion.div>
    </div>
  )
}
