'use client'

import React from 'react'
import { CatalogGridViewer } from '@/components/research-viewers/catalog-grid-viewer'

export default function CatalogViewerRoute() {
  return (
    <div className="w-full min-h-screen bg-[#f8f8f6] p-2 sm:p-4">
      <CatalogGridViewer />
    </div>
  )
}
