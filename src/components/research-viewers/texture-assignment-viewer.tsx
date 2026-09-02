'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Sparkles, Layers, Sliders, RefreshCw, Eye, CheckCircle2 } from 'lucide-react'

export function TextureAssignmentViewer() {
  const t = useTranslations('ResearchPage.viewers')
  const [selectedWallMaterial, setSelectedWallMaterial] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  const wallMaterials = [
    { name: 'Klinker Sichtmauerwerk', color: '#8c4e36', type: 'Ziegel' },
    { name: 'KEIM Silanputz® Weiß', color: '#e8e6e1', type: 'Putz' },
    { name: 'Beton Sichtfläche', color: '#9fa1a4', type: 'Beton' },
    { name: 'Holzfassade Eiche', color: '#b58b57', type: 'Holz' },
  ]

  const handleSwap = (idx: number) => {
    setSelectedWallMaterial(idx)
    setIsProcessing(true)
    setTimeout(() => setIsProcessing(false), 500)
  }

  return (
    <div className="w-full bg-neutral-950 text-white rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl p-6 md:p-8 space-y-8 font-sans">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>{t('textureSynthSubtitle')}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-normal text-white" style={{ fontFamily: "var(--font-ft-calhern), serif" }}>
            {t('textureSynthTitle')}
          </h2>
        </div>

        <button className="px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-emerald-500 transition shadow-lg">
          <RefreshCw className={`w-3.5 h-3.5 ${isProcessing ? 'animate-spin' : ''}`} />
          <span>{t('synthBtn')}</span>
        </button>
      </div>

      {/* Main Split Viewer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Interactive Architectural Rendering View */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
            <Image
              src="/architectural_building_render.jpg"
              alt="Architektur-Visualisierung mit zugewiesener Textur"
              fill
              className={`object-cover transition duration-700 ${isProcessing ? 'blur-sm scale-102 opacity-70' : 'opacity-100'}`}
              unoptimized
            />

            {/* Floating Active Overlay Badge */}
            <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: wallMaterials[selectedWallMaterial].color }} />
              <span>{wallMaterials[selectedWallMaterial].name}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Material Selection Panel */}
        <div className="lg:col-span-4 space-y-6">
          <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider block">
            {t('chooseTexture')}
          </span>

          <div className="space-y-3">
            {wallMaterials.map((mat, idx) => (
              <div
                key={idx}
                onClick={() => handleSwap(idx)}
                className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                  selectedWallMaterial === idx
                    ? 'border-emerald-500 bg-neutral-900 shadow-lg'
                    : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border border-white/10 shadow-inner" style={{ backgroundColor: mat.color }} />
                  <div>
                    <div className="text-xs font-bold text-white">{mat.name}</div>
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider">{mat.type}</div>
                  </div>
                </div>

                {selectedWallMaterial === idx && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                )}
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 space-y-2">
            <span className="text-white font-bold block">💡 TYPUS.AI:</span>
            <p className="leading-relaxed">
              Materialien aus dem Typus.AI Katalog werden automatisch auf Wand- & Bodenflächen in bestehenden Fassaden- und Innenraumvisualisierungen übertragen.
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}
