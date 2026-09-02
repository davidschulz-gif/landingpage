'use client'

import React, { useState } from 'react'
import { ExternalLink, Layers, RefreshCw } from 'lucide-react'

interface FlyoutModalViewerProps {
  isOpen?: boolean
  onClose?: () => void
  materialName?: string
}

export function FlyoutModalViewer({
  isOpen = true
}: FlyoutModalViewerProps) {
  const [activeTextureId, setActiveTextureId] = useState('5333')

  if (!isOpen) return null

  const architexturesItems = [
    { id: '5333', name: 'Oak Veneered MDF' },
    { id: '799', name: 'Pearl Grey Limestone' },
    { id: '3010', name: 'Staggered Brick' },
    { id: '2103', name: 'Terrazzo Tile' },
    { id: '1218', name: 'Concrete Surface' }
  ]

  const currentUrl = `https://architextures.org/textures/${activeTextureId}`

  return (
    <div className="w-full bg-white text-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl flex flex-col font-sans">
      
      {/* Architextures Live Header Bar & Material Switcher */}
      <div className="px-4 py-3 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-3 bg-neutral-50 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 bg-black rounded-xs flex items-center justify-center text-white text-[9px] font-bold">
            A
          </div>
          <span className="font-bold text-black uppercase tracking-wider font-mono text-[11px]">
            ARCHITEXTURES.ORG LIVE PRODUCT PAGE
          </span>
        </div>

        {/* Quick Material Switcher Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {architexturesItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTextureId(item.id)}
              className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer ${
                activeTextureId === item.id
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:border-black'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <a
          href={currentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:underline"
        >
          <span>Open on Architextures</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Embedded Direct Architextures.org Iframe */}
      <div className="w-full relative bg-white h-[580px] sm:h-[640px] md:h-[680px] overflow-hidden">
        <iframe
          src={currentUrl}
          key={activeTextureId}
          className="w-full h-full border-0 bg-white"
          title={`Architextures.org - Material ${activeTextureId}`}
        />
      </div>

    </div>
  )
}
