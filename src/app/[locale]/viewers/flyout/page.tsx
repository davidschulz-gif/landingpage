'use client'

import React from 'react'
import { CatalogGridViewer } from '@/components/research-viewers/catalog-grid-viewer'
import { FlyoutModalViewer } from '@/components/research-viewers/flyout-modal-viewer'

export default function FlyoutViewerRoute() {
  return (
    <div className="w-full min-h-screen bg-[#f8f8f6] p-2 sm:p-4 relative">
      <CatalogGridViewer />
      <FlyoutModalViewer isOpen={true} />
    </div>
  )
}
