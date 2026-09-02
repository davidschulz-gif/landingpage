'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { X, Sliders, Maximize2, Download, Check } from 'lucide-react'

interface FlyoutModalViewerProps {
  isOpen?: boolean
  onClose?: () => void
  materialName?: string
}

export function FlyoutModalViewer({
  isOpen = true,
  onClose,
  materialName = 'Pearl Grey Limestone - Honed, Staggered'
}: FlyoutModalViewerProps) {
  const t = useTranslations('ResearchPage.viewers')
  const [scaleMm, setScaleMm] = useState(1185)

  if (!isOpen) return null

  const relatedVariants = [
    { name: 'Pearl Grey Limestone - Honed', bg: '#c8cac6' },
    { name: 'White Cloud Marble - Leathered', bg: '#dedfdc' },
    { name: 'Da Vinci Scabos Travertine - Honed', bg: '#b5a186' },
    { name: 'Royal Cream Marble - Leathered', bg: '#e0dcd1' },
  ]

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
      <div className="w-full max-w-5xl bg-white text-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col font-sans max-h-[90vh]">
        
        {/* Modal Header Bar */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/80">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-xs bg-black" />
            <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wider">
              {materialName}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-black transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 overflow-y-auto">
          
          {/* Left Column: Texture Preview with Scale Ruler Slider */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-inner">
              <Image
                src="/material_samples_showcase.jpg"
                alt="Texture Scale Preview"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Bottom Scale Slider Controls Bar */}
            <div className="p-4 rounded-xl bg-neutral-100/80 border border-neutral-200 flex items-center justify-between gap-4 text-xs font-mono">
              <span className="font-bold text-neutral-700">{scaleMm} MM</span>
              <input
                type="range"
                min="500"
                max="3000"
                value={scaleMm}
                onChange={(e) => setScaleMm(Number(e.target.value))}
                className="flex-1 accent-black cursor-pointer"
              />
              <Sliders className="w-4 h-4 text-neutral-500" />
            </div>
          </div>

          {/* Right Column: Related Variants & Technical Item Details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold text-neutral-500 tracking-wider block">
                {t('variantsTitle')}
              </span>

              <div className="grid grid-cols-2 gap-3">
                {relatedVariants.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl border border-neutral-200 bg-neutral-50 space-y-2 hover:border-black transition cursor-pointer">
                    <div className="h-20 rounded-lg border border-black/10 shadow-xs" style={{ backgroundColor: item.bg }} />
                    <div className="text-[11px] font-semibold text-neutral-900 leading-snug line-clamp-2">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Text Block */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-[11px] font-mono text-neutral-600 leading-relaxed uppercase tracking-wider space-y-2">
              <span className="font-bold text-black block">{t('itemDetails')}</span>
              <p>
                A SEAMLESS STONE TEXTURE WITH DESERT GREY TRAVERTINE - HONED ARRANGED IN A STAGGERED PATTERN. SEAMLESS TEXTURES CAN BE TILED REPEATEDLY ACROSS A SURFACE WITHOUT VISIBLE SEAMS MAKING THEM USEFUL FOR ARCHITECTURAL DRAWINGS AND 3D MODELS. THIS IMAGE CAN BE USED AS A SKETCHUP TEXTURE, REVIT MATERIAL OR IMPORTED INTO PHOTOSHOP FOR USE IN 2D ILLUSTRATIONS. A HIGH RESOLUTION VERSION OF THIS TEXTURE IS AVAILABLE, AS WELL AS CAD HATCHES AND PBR MAPS WITH ARCHITEXTURES PRO.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
