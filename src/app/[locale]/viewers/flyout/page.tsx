'use client'

import React from 'react'
import { FlyoutModalViewer } from '@/components/research-viewers/flyout-modal-viewer'

export default function FlyoutViewerRoute() {
  return (
    <div className="w-full min-h-screen bg-white p-2 sm:p-4">
      <FlyoutModalViewer isOpen={true} />
    </div>
  )
}
