'use client'

import React from 'react'
import { ProductDetailViewer } from '@/components/research-viewers/product-detail-viewer'

export default function ProductPageViewerRoute() {
  return (
    <div className="w-full min-h-screen bg-white p-2 sm:p-4">
      <ProductDetailViewer />
    </div>
  )
}
