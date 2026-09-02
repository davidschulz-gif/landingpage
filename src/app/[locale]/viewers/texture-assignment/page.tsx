'use client'

import React from 'react'
import { TextureAssignmentViewer } from '@/components/research-viewers/texture-assignment-viewer'

export default function TextureAssignmentViewerRoute() {
  return (
    <div className="w-full min-h-screen bg-neutral-950 p-2 sm:p-4">
      <TextureAssignmentViewer />
    </div>
  )
}
