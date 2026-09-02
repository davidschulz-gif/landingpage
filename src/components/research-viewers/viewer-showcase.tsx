'use client'

import React, { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Monitor, Grid, Info, Sparkles, ExternalLink, Home, Layers } from 'lucide-react'
import { appUrl } from '@/lib/constants'

export function ViewerShowcase() {
  const locale = useLocale()
  const t = useTranslations('ResearchPage.viewers')
  const [activeTab, setActiveTab] = useState<'catalog' | 'flyout' | 'product-page' | 'texture-assignment-exterior' | 'texture-assignment-interior'>('catalog')

  // Direct iframe URL resolution
  const getIframeSrc = () => {
    switch (activeTab) {
      case 'catalog':
        return `${appUrl}/create?catalog=open`
      case 'flyout':
        return `/${locale}/viewers/flyout`
      case 'product-page':
        return `/${locale}/viewers/product-page`
      case 'texture-assignment-exterior':
        return `${appUrl}/create?textures=open&mode=exterior`
      case 'texture-assignment-interior':
        return `${appUrl}/create?textures=open&mode=interior`
      default:
        return `${appUrl}/create?catalog=open`
    }
  }

  const iframeSrc = getIframeSrc()

  return (
    <div className="w-full space-y-6">
      
      {/* Interactive Header Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl bg-neutral-950 border border-neutral-800 text-white shadow-2xl">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('catalog')}
            className={`px-3.5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'catalog'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Grid className="w-4 h-4" />
            <span>{t('tab1')}</span>
          </button>

          <button
            onClick={() => setActiveTab('flyout')}
            className={`px-3.5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'flyout'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>{t('tab2')}</span>
          </button>

          <button
            onClick={() => setActiveTab('product-page')}
            className={`px-3.5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'product-page'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>{t('tab3')}</span>
          </button>

          {/* Tab 4: Exterior Texture Assignment */}
          <button
            onClick={() => setActiveTab('texture-assignment-exterior')}
            className={`px-3.5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'texture-assignment-exterior'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{t('tab4')}</span>
          </button>

          {/* Tab 5: Interior Texture Assignment */}
          <button
            onClick={() => setActiveTab('texture-assignment-interior')}
            className={`px-3.5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'texture-assignment-interior'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>{t('tab5')}</span>
          </button>
        </div>

        {/* Fullscreen Link */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={iframeSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-blue-400 hover:underline uppercase tracking-wider font-bold"
          >
            <span>{t('fullscreen')}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Embedded App Iframe Container */}
      <div className="w-full relative rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-800 bg-white shadow-2xl">
        <iframe
          src={iframeSrc}
          key={activeTab}
          className="w-full h-[560px] sm:h-[620px] md:h-[650px] border-0 rounded-2xl bg-white shadow-inner transition-all duration-300"
          title={t('iframeTitle')}
        />
      </div>

    </div>
  )
}
