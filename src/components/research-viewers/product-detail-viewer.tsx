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
  FileText,
  ChevronRight,
  Maximize2,
  Check,
  Layers,
  Box,
  Sparkles,
  Search,
  Grid,
  SlidersHorizontal,
  BookmarkPlus,
  Menu,
  ChevronLeft
} from 'lucide-react'

export function ProductDetailViewer() {
  const t = useTranslations('ResearchPage.viewers')
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [saved, setSaved] = useState(false)

  const variants = [
    { id: '9001', name: 'Weiß 9001', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', img: '/keim_variant_9001.jpg', mainImg: '/keim_silanputz_main.jpg' },
    { id: '9010', name: 'Weiß 9010', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', img: '/keim_variant_9010.jpg', mainImg: '/keim_variant_9010_hq.jpg' },
    { id: '9002', name: 'Hellgrau 9002', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', img: '/keim_variant_9002.jpg', mainImg: '/keim_variant_9002_hq.jpg' },
    { id: '9011', name: 'Beige 9011', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', img: '/keim_variant_9011.jpg', mainImg: '/keim_variant_9011_hq.jpg' },
    { id: '9012', name: 'Sandbeige 9012', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', img: '/keim_variant_9012.jpg', mainImg: '/keim_variant_9012_hq.jpg' },
    { id: '9004', name: 'Dunkelgrau 9004', grain: 'Körnung 1,5 mm', texture: 'Reibeputz', img: '/keim_variant_9004.jpg', mainImg: '/keim_variant_9004_hq.jpg' },
  ]

  const activeVariant = variants[selectedVariant] || variants[0]

  const metadata = [
    { label: 'PRODUKTGRUPPE', value: 'Putz / Fassade' },
    { label: 'ANWENDUNG', value: 'Außen & Innen' },
    { label: 'MATERIALTYP', value: 'Mineralischer Oberputz' },
    { label: 'KÖRNUMG', value: activeVariant.grain },
    { label: 'STRUKTUR', value: activeVariant.texture },
    { label: 'OBERFLÄCHE', value: 'Matt, fein strukturiert' },
    { label: 'FARBTON', value: activeVariant.name },
    { label: 'FARBTON-CODE', value: activeVariant.id },
    { label: 'FARBVARIANTEN', value: 'Über 150 Farbtöne' },
    { label: 'PHYSICAL SCALE', value: '1000 mm × 1000 mm (Seamless)' },
    { label: 'ARCHITEXTURES FORMAT', value: 'Seamless JPG, PBR Maps, CAD Hatch' },
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
    { name: 'Architextures CAD Hatch & PBR', size: 'ZIP · 4.8 MB' },
  ]

  return (
    <div className="w-full bg-white text-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl font-sans">
      
      {/* Top Header Navbar */}
      <header className="border-b border-neutral-200 px-4 py-2 flex items-center justify-between bg-white text-xs">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 font-bold text-base tracking-tight">
            <div className="w-3.5 h-3.5 bg-black rounded-xs" />
            <span style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>typus.ai</span>
          </div>
          <nav className="hidden lg:flex items-center gap-5 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
            <span className="text-black font-bold border-b-2 border-black pb-0.5">MATERIALS</span>
            <span className="hover:text-black transition cursor-pointer">BRANDS</span>
            <span className="hover:text-black transition cursor-pointer">COLLECTIONS</span>
            <span className="hover:text-black transition cursor-pointer">INSPIRATION</span>
            <span className="hover:text-black transition cursor-pointer">NEWS</span>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-neutral-600">
          <button className="hover:text-black transition"><Search className="w-3.5 h-3.5" /></button>
          <button className="hover:text-black transition"><Bookmark className="w-3.5 h-3.5" /></button>
          <button className="hover:text-black transition"><Menu className="w-4 h-4" /></button>
        </div>
      </header>

      {/* Sub-header Breadcrumb */}
      <div className="px-4 py-1.5 border-b border-neutral-100 text-[10px] font-semibold text-neutral-500 flex items-center justify-between uppercase tracking-wider bg-white">
        <div className="flex items-center gap-1 hover:text-black cursor-pointer transition">
          <ChevronLeft className="w-3 h-3" />
          <span>{t('backToOverview')}</span>
        </div>
        <div className="text-[9px] text-neutral-400 font-mono">
          ARCHITEXTURES.ORG INTEGRATED MATERIAL SPEC
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="p-3.5 sm:p-4 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-start">
          
          {/* Column 1: Main Texture Canvas Preview (Switches dynamically on click) */}
          <div className="lg:col-span-6 space-y-2">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-neutral-200/90 bg-neutral-100 group shadow-2xs">
              <Image
                key={activeVariant.id}
                src={activeVariant.mainImg}
                alt={`KEIM Silanputz ${activeVariant.name}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-102"
                unoptimized
              />
              <button className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-xs text-neutral-700 hover:text-black transition">
                <Maximize2 className="w-3 h-3" />
              </button>

              {/* Active Variant Overlay Tag */}
              <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{activeVariant.name} ({activeVariant.id})</span>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-neutral-500 pt-0.5">
              <button className="flex items-center gap-1 hover:text-black transition">
                <Download className="w-3 h-3" />
                <span>{t('download')}</span>
              </button>
              <button
                onClick={() => setSaved(!saved)}
                className={`flex items-center gap-1 transition ${saved ? 'text-blue-600 font-bold' : 'hover:text-black'}`}
              >
                <Bookmark className="w-3 h-3" />
                <span>{saved ? t('remembered') : t('remember')}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-black transition">
                <Scale className="w-3 h-3" />
                <span>{t('compare')}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-black transition">
                <Share2 className="w-3 h-3" />
                <span>{t('share')}</span>
              </button>
            </div>
          </div>

          {/* Column 2: Product Specifications & Dynamic Metadata Table */}
          <div className="lg:col-span-4 space-y-3">
            <div>
              <span className="text-[9px] uppercase tracking-widest font-bold text-neutral-400 block mb-0.5">
                {t('manufacturer')}
              </span>
              <h1 className="text-base md:text-lg font-bold text-black tracking-tight mb-0.5" style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>
                {t('keimTitle')} – {activeVariant.name}
              </h1>
              <p className="text-[11px] text-neutral-500 leading-snug font-normal">
                {t('keimSub')}
              </p>
            </div>

            {/* Dynamic Specs Table updating on variant click */}
            <div className="divide-y divide-neutral-100 text-[10px] border-t border-b border-neutral-100 py-0.5 font-sans">
              {metadata.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 py-1 items-center">
                  <span className="col-span-6 font-semibold text-neutral-400 uppercase tracking-wider text-[9px]">
                    {item.label}
                  </span>
                  <span className={`col-span-6 font-medium ${item.label === 'FARBTON' || item.label === 'FARBTON-CODE' ? 'text-blue-600 font-bold' : 'text-neutral-900'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Manufacturer Logo, Links & Documents */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-end">
              <button className="p-0.5 text-neutral-400 hover:text-black transition">
                <Bookmark className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Manufacturer Brand Badge & CTA Buttons */}
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-center">
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-red-600" />
                  <span className="font-black tracking-tighter text-xs">KEIM</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <button className="w-full py-2 px-2.5 rounded-md bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-black transition">
                  <span>{t('websiteBtn')}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </button>
                <button className="w-full py-1.5 px-2.5 rounded-md bg-white border border-neutral-200 text-neutral-800 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center hover:bg-neutral-50 transition">
                  <span>{t('contactBtn')}</span>
                </button>
              </div>
            </div>

            {/* Documents Section */}
            <div className="space-y-2 pt-1 border-t border-neutral-100">
              <span className="text-[9px] uppercase tracking-wider font-bold text-neutral-900 block">
                {t('documentsTitle')}
              </span>
              <div className="space-y-1.5 text-[10px]">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-neutral-700 hover:text-black cursor-pointer group">
                    <FileText className="w-3 h-3 text-neutral-400 group-hover:text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold leading-snug group-hover:underline text-[10px]">{doc.name}</div>
                      <div className="text-[8px] text-neutral-400">{doc.size}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section (Interactive Clickable Varianten Carousel & Architextures PBR Data) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 pt-3 border-t border-neutral-200 items-start">
          
          {/* Varianten Grid / Carousel with Active Click Handlers */}
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-bold">
              <span className="text-black">{t('variantsTitle')} (CLICK TO SWITCH)</span>
              <span className="text-neutral-400 font-semibold cursor-pointer hover:text-black transition">{t('allVariants')}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {variants.map((variant, idx) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(idx)}
                  className={`rounded-lg border text-left overflow-hidden transition-all duration-200 relative bg-white cursor-pointer ${
                    selectedVariant === idx
                      ? 'border-blue-600 ring-2 ring-blue-600 shadow-xs scale-102'
                      : 'border-neutral-200 hover:border-neutral-400 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden">
                    <Image
                      src={variant.img}
                      alt={variant.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {selectedVariant === idx && (
                      <div className="absolute top-1 right-1 p-0.5 rounded-full bg-blue-600 text-white shadow-xs">
                        <Check className="w-2 h-2" />
                      </div>
                    )}
                  </div>
                  <div className="p-1.5 space-y-0.5">
                    <div className={`text-[10px] font-bold truncate ${selectedVariant === idx ? 'text-blue-600' : 'text-neutral-900'}`}>{variant.name}</div>
                    <div className="text-[8px] text-neutral-400 truncate">{variant.grain}</div>
                    <div className="text-[8px] text-neutral-400 truncate">{variant.texture}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Architextures.org PBR Maps & 3D Sphere Section */}
          <div className="lg:col-span-4 space-y-2 border-l border-neutral-100 pl-0 lg:pl-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-black block">
              {t('digitalMaterialData')} (ARCHITEXTURES PBR)
            </span>

            <div className="flex items-center justify-between gap-2.5">
              <div className="space-y-1 flex-1 text-[10px] text-neutral-700">
                <div className="flex items-center gap-1.5 p-1 rounded-md bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition">
                  <Layers className="w-3 h-3 text-blue-600" />
                  <div>
                    <div className="font-semibold text-[9px]">Textur (Seamless JPG)</div>
                    <div className="text-[8px] text-neutral-400">4096 × 4096 · 1000mm Scale</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 p-1 rounded-md bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition">
                  <Box className="w-3 h-3 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-[9px]">Normal Map</div>
                    <div className="text-[8px] text-neutral-400">4096 × 4096 · Directx & OpenGL</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 p-1 rounded-md bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition">
                  <Sparkles className="w-3 h-3 text-purple-600" />
                  <div>
                    <div className="font-semibold text-[9px]">Bump & Displacement</div>
                    <div className="text-[8px] text-neutral-400">4096 × 4096 · 16-Bit Grayscale</div>
                  </div>
                </div>
              </div>

              {/* 3D Sphere Preview Thumbnail */}
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-xl bg-neutral-100 border border-neutral-200/80 relative overflow-hidden flex-shrink-0 shadow-xs">
                <Image
                  src="/keim_sphere_3d.jpg"
                  alt="3D Sphere Preview"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Breadcrumb */}
        <div className="pt-2 border-t border-neutral-100 text-[9px] text-neutral-400 font-semibold uppercase tracking-wider flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span>MATERIALS</span>
            <span>›</span>
            <span>PUTZ / FASSADE</span>
            <span>›</span>
            <span className="text-black font-bold">KEIM SILANPUTZ® {activeVariant.name}</span>
          </div>
          <div className="text-neutral-400 font-mono text-[8px]">
            POWERED BY ARCHITEXTURES PRO × TYPUS.AI
          </div>
        </div>

      </div>

    </div>
  )
}
