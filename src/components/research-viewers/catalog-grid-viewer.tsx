'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Search, SlidersHorizontal, Upload, X, Plus, Layers, Wand2 } from 'lucide-react'

interface CatalogGridViewerProps {
  onOpenFlyout?: (item: any) => void
}

export function CatalogGridViewer({ onOpenFlyout }: CatalogGridViewerProps) {
  const t = useTranslations('ResearchPage.viewers')
  const [activeTab, setActiveTab] = useState<'wande' | 'boden'>('wande')
  const [searchQuery, setSearchQuery] = useState('')

  const materials = [
    { id: 1, name: 'AFC TERRASLAT BY TONALITY® 70025 BLACK MATTE', bg: 'bg-neutral-900', img: '/material_samples_showcase.jpg' },
    { id: 2, name: 'WOOD PAVER, STACK', bg: 'bg-amber-950', img: '/material_samples_showcase.jpg' },
    { id: 3, name: 'PEARL GREY LIMESTONE - HONED, STAGGERED', bg: 'bg-neutral-400', img: '/material_samples_showcase.jpg' },
    { id: 4, name: 'QUAKER PLANK PAVERS, HERRINGBONE', bg: 'bg-stone-700', img: '/material_samples_showcase.jpg' },
    { id: 5, name: 'PETALS, SAND', bg: 'bg-amber-200', img: '/material_samples_showcase.jpg' },
    { id: 6, name: 'AVALON, STRETCHER', bg: 'bg-slate-300', img: '/material_samples_showcase.jpg' },
    { id: 7, name: 'REMADE BRUT - VARIED', bg: 'bg-amber-800', img: '/material_samples_showcase.jpg' },
    { id: 8, name: 'ACQUERRELLO MARBLE', bg: 'bg-stone-300', img: '/material_samples_showcase.jpg' },
    { id: 9, name: 'DESERT IRONSPOT LIGHT VELOUR FACE BRICK', bg: 'bg-amber-900', img: '/material_samples_showcase.jpg' },
    { id: 10, name: 'DENIZLI WALNUT TRAVERTINE - HONED', bg: 'bg-stone-500', img: '/material_samples_showcase.jpg' },
    { id: 11, name: 'PAINTED WEAVE', bg: 'bg-stone-200', img: '/material_samples_showcase.jpg' },
    { id: 12, name: 'REMADE BIJOU - TANZANITE', bg: 'bg-blue-900', img: '/material_samples_showcase.jpg' },
    { id: 13, name: 'STAINLESS STEEL', bg: 'bg-neutral-500', img: '/material_samples_showcase.jpg' },
    { id: 14, name: 'GOLD BRUSHED METALLIC', bg: 'bg-amber-500', img: '/material_samples_showcase.jpg' },
  ]

  return (
    <div className="w-full bg-[#f8f8f6] text-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 shadow-xl p-6 md:p-8 space-y-6 relative font-sans">
      
      {/* Top Filter Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Toggle Switch: WÄNDE / BÖDEN */}
        <div className="bg-neutral-200/80 p-1 rounded-full flex items-center gap-1 shadow-inner text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('wande')}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === 'wande' ? 'bg-white text-black shadow-xs' : 'text-neutral-600 hover:text-black'
            }`}
          >
            {t('walls')}
          </button>
          <button
            onClick={() => setActiveTab('boden')}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === 'boden' ? 'bg-white text-black shadow-xs' : 'text-neutral-600 hover:text-black'
            }`}
          >
            {t('floors')}
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap text-xs font-semibold">
          <button className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-800 flex items-center gap-1.5 shadow-2xs hover:bg-neutral-50">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>KATALOG</span>
          </button>
          <button className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-800 flex items-center gap-1.5 shadow-2xs hover:bg-neutral-50">
            <Upload className="w-3.5 h-3.5" />
            <span>HOCHLADEN</span>
          </button>
          <select className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-800 outline-none shadow-2xs cursor-pointer">
            <option>CATEGORY ▾</option>
            <option>Fassade</option>
            <option>Naturstein</option>
            <option>Holz</option>
            <option>Metall</option>
          </select>
          <select className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-800 outline-none shadow-2xs cursor-pointer">
            <option>BRAND ▾</option>
            <option>KEIM</option>
            <option>TONALITY</option>
            <option>AVALON</option>
          </select>

          {/* Search Bar */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-neutral-200 text-xs text-neutral-900 outline-none shadow-2xs focus:border-black transition"
            />
          </div>
        </div>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {materials.map((mat) => (
          <div
            key={mat.id}
            onClick={() => onOpenFlyout && onOpenFlyout(mat)}
            className="group relative aspect-square rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-900 shadow-xs cursor-pointer hover:border-black hover:shadow-md transition"
          >
            <Image
              src={mat.img}
              alt={mat.name}
              fill
              className="object-cover group-hover:scale-105 transition duration-300 opacity-90 group-hover:opacity-100"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end">
              <span className="text-[10px] font-bold text-white uppercase tracking-wider leading-tight drop-shadow-xs">
                {mat.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Floating Interactive Control Modal */}
      <div className="max-w-xl mx-auto rounded-3xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-2xl p-5 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700">
          <Wand2 className="w-4 h-4 text-blue-600" />
          <span>{t('textureSynthSubtitle')}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-center space-y-2">
            <span className="text-[10px] uppercase font-bold text-neutral-500 block">{t('noWalls')}</span>
            <button className="w-full py-2 rounded-xl bg-white border border-neutral-300 text-xs font-bold uppercase flex items-center justify-center gap-1 hover:border-black transition">
              <Plus className="w-3.5 h-3.5" /> {t('addWall')}
            </button>
          </div>

          <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-center space-y-2">
            <span className="text-[10px] uppercase font-bold text-neutral-500 block">{t('noFloors')}</span>
            <button className="w-full py-2 rounded-xl bg-white border border-neutral-300 text-xs font-bold uppercase flex items-center justify-center gap-1 hover:border-black transition">
              <Plus className="w-3.5 h-3.5" /> {t('addFloor')}
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
