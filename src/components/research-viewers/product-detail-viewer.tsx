'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import {
  Download,
  Bookmark,
  Scale,
  Share2,
  ExternalLink,
  Mail,
  FileText,
  ChevronRight,
  Maximize2,
  Box,
  Check,
  Layers,
  Sparkles
} from 'lucide-react'

export function ProductDetailViewer() {
  const t = useTranslations('ResearchPage.viewers')
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [saved, setSaved] = useState(false)

  const variants = [
    { id: '9001', name: 'Weiß 9001', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', bg: '#e8e6e1' },
    { id: '9010', name: 'Weiß 9010', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', bg: '#f4f3ee' },
    { id: '9002', name: 'Hellgrau 9002', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', bg: '#d6d5cf' },
    { id: '9011', name: 'Beige 9011', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', bg: '#ded8c8' },
    { id: '9012', name: 'Sandbeige 9012', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', bg: '#c9bd9f' },
    { id: '9004', name: 'Dunkelgrau 9004', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', bg: '#7d8085' },
  ]

  const metadata = [
    { label: 'PRODUKTGRUPPE', value: 'Putz / Fassade' },
    { label: 'ANWENDUNG', value: 'Außen' },
    { label: 'MATERIALTYP', value: 'Mineralischer Oberputz' },
    { label: 'KÖRNUMG', value: '1,5 mm' },
    { label: 'STRUKTUR', value: 'Reibeputz' },
    { label: 'OBERFLÄCHE', value: 'Matt, fein strukturiert' },
    { label: 'FARBTON', value: 'Weiß' },
    { label: 'FARBTON-CODE', value: '9001' },
    { label: 'FARBVARIANTEN', value: 'Über 150 Farbtöne' },
    { label: 'VERARBEITUNG', value: 'Hand- und maschinell' },
    { label: 'BRANDVERHALTEN', value: 'A1 (nicht brennbar)' },
    { label: 'WASSERDAMPFDURCHLÄSSIGKEIT', value: 'V1 hoch' },
    { label: 'WASSERAUFNAHME', value: 'W2 mittel' },
  ]

  const documents = [
    { name: 'Technisches Merkblatt', size: 'PDF · 512 KB' },
    { name: 'Leistungserklärung', size: 'PDF · 245 KB' },
    { name: 'EPD', size: 'PDF · 410 KB' },
    { name: 'Verarbeitungshinweise', size: 'PDF · 1.2 MB' },
  ]

  return (
    <div className="w-full bg-white text-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 shadow-xl font-sans">
      
      {/* Top Header Navbar */}
      <header className="border-b border-neutral-200 px-6 py-4 flex items-center justify-between bg-white text-xs">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-bold tracking-wider text-base uppercase">
            <div className="w-3.5 h-3.5 bg-black" />
            <span>typus.ai</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-neutral-600 font-medium tracking-wide">
            <span className="text-black font-bold border-b-2 border-black pb-1">MATERIALS</span>
            <span>BRANDS</span>
            <span>COLLECTIONS</span>
            <span>INSPIRATION</span>
            <span>NEWS</span>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-neutral-500">
          <button className="hover:text-black transition">🔍</button>
          <button className="hover:text-black transition">🔖</button>
          <button className="hover:text-black transition">☰</button>
        </div>
      </header>

      {/* Breadcrumb Bar */}
      <div className="px-6 py-3 border-b border-neutral-100 text-[11px] text-neutral-500 flex items-center gap-2 uppercase tracking-wider bg-neutral-50/50">
        <span>{t('backToOverview')}</span>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 lg:p-10 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Texture Preview Hero Canvas */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 group shadow-sm">
              <Image
                src="/material_samples_showcase.jpg"
                alt="KEIM Silanputz Texture Preview"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                unoptimized
              />
              <button className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-md text-neutral-700 hover:text-black transition">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Action Controls */}
            <div className="flex items-center justify-between text-xs font-semibold text-neutral-600 pt-2 border-t border-neutral-100">
              <button className="flex items-center gap-1.5 hover:text-black transition">
                <Download className="w-4 h-4" />
                <span>{t('download')}</span>
              </button>
              <button
                onClick={() => setSaved(!saved)}
                className={`flex items-center gap-1.5 transition ${saved ? 'text-blue-600' : 'hover:text-black'}`}
              >
                <Bookmark className="w-4 h-4" />
                <span>{saved ? t('remembered') : t('remember')}</span>
              </button>
              <button className="flex items-center gap-1.5 hover:text-black transition">
                <Scale className="w-4 h-4" />
                <span>{t('compare')}</span>
              </button>
              <button className="flex items-center gap-1.5 hover:text-black transition">
                <Share2 className="w-4 h-4" />
                <span>{t('share')}</span>
              </button>
            </div>
          </div>

          {/* Center Column: Product Specs & Metadata Table */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-neutral-500 block mb-1">
                {t('manufacturer')}
              </span>
              <h1 className="text-2xl md:text-3xl font-normal text-black tracking-tight mb-2" style={{ fontFamily: "var(--font-ft-calhern), serif" }}>
                {t('keimTitle')}
              </h1>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-light">
                {t('keimSub')}
              </p>
            </div>

            {/* Product Metadata Grid Table */}
            <div className="divide-y divide-neutral-100 text-xs border-t border-b border-neutral-100 py-2">
              {metadata.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 py-2 items-center">
                  <span className="col-span-6 font-medium text-neutral-500 uppercase tracking-wider text-[10px]">
                    {item.label}
                  </span>
                  <span className="col-span-6 text-neutral-900 font-normal">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Manufacturer Sidebar & Docs */}
          <div className="lg:col-span-2 space-y-8 border-l border-neutral-100 pl-0 lg:pl-6">
            {/* Manufacturer Logo & Links */}
            <div className="space-y-4 text-center">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-red-600" />
                  <span className="font-black tracking-tighter text-base">KEIM</span>
                </div>
              </div>

              <div className="space-y-2">
                <button className="w-full py-2.5 px-3 rounded-lg bg-black text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-800 transition">
                  <span>{t('websiteBtn')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button className="w-full py-2.5 px-3 rounded-lg bg-white border border-neutral-200 text-neutral-800 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-50 transition">
                  <span>{t('contactBtn')}</span>
                </button>
              </div>
            </div>

            {/* Documentation Section */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-900 block">
                {t('documentsTitle')}
              </span>
              <div className="space-y-2.5 text-xs">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-neutral-700 hover:text-black cursor-pointer group">
                    <FileText className="w-4 h-4 text-neutral-400 group-hover:text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium leading-snug underline-offset-2 group-hover:underline">{doc.name}</div>
                      <div className="text-[10px] text-neutral-400">{doc.size}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Varianten & Digitale Materialdaten */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-neutral-200">
          
          {/* Varianten Carousel Column */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold uppercase tracking-wider text-black">{t('variantsTitle')}</span>
              <span className="text-neutral-500 font-medium cursor-pointer hover:underline">{t('allVariants')}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {variants.map((variant, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedVariant(idx)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between h-36 transition relative ${
                    selectedVariant === idx
                      ? 'border-black ring-1 ring-black bg-white shadow-xs'
                      : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300'
                  }`}
                >
                  <div
                    className="w-full h-16 rounded-lg border border-black/10 shadow-inner"
                    style={{ backgroundColor: variant.bg }}
                  />
                  <div className="space-y-0.5 pt-2">
                    <div className="text-xs font-bold text-black truncate">{variant.name}</div>
                    <div className="text-[10px] text-neutral-500 truncate">{variant.grain}</div>
                    <div className="text-[10px] text-neutral-400 truncate">{variant.texture}</div>
                  </div>
                  {selectedVariant === idx && (
                    <div className="absolute top-2 right-2 p-1 rounded-full bg-black text-white">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Digitale Materialdaten PBR Section */}
          <div className="lg:col-span-4 space-y-4 border-l border-neutral-100 pl-0 lg:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-black block">
              {t('digitalMaterialData')}
            </span>

            <div className="flex items-center gap-4">
              <div className="space-y-2 flex-1 text-xs text-neutral-700">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-50 border border-neutral-200/80">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="font-semibold text-[11px]">Textur (Seamless)</div>
                    <div className="text-[10px] text-neutral-400">JPG · 4096 × 4096</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-50 border border-neutral-200/80">
                  <Box className="w-4 h-4 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-[11px]">Normal Map</div>
                    <div className="text-[10px] text-neutral-400">JPG · 4096 × 4096</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-50 border border-neutral-200/80">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <div>
                    <div className="font-semibold text-[11px]">Displacement & Bump</div>
                    <div className="text-[10px] text-neutral-400">JPG · 4096 × 4096</div>
                  </div>
                </div>
              </div>

              {/* 3D Sphere Preview Thumbnail */}
              <div className="w-28 h-28 rounded-2xl bg-neutral-100 border border-neutral-200 flex flex-col items-center justify-center p-2 relative shadow-inner">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-700 shadow-md border border-white/50" />
                <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider pt-2">{t('sphere3d')}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
