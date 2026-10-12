import React from 'react'
import { Sparkles } from 'lucide-react'
import { CornerSquares } from '@/components/common/corner-squares'

interface WorkflowSectionProps {
  isDe: boolean
  workflowNode: React.ReactNode
}

export function WorkflowSection({ isDe, workflowNode }: WorkflowSectionProps) {
  return (
    <section
      id="teilnahmeprozess"
      className="max-w-7xl mx-auto px-2 sm:px-4 py-16 space-y-8 scroll-mt-24 border-t border-neutral-200/80 dark:border-neutral-800"
    >
      <div className="flex items-center justify-between text-xs text-neutral-500 font-mono tracking-widest uppercase">
        <span>[ SECTION // {isDe ? 'TEILNAHMEPROZESS' : 'PARTICIPATION PROCESS'} ]</span>
        <span className="text-black dark:text-white font-semibold flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-black dark:text-white" />
          {isDe ? '7-STUFIGER INTEGRATIONSABLAUF' : '7-STEP INTEGRATION WORKFLOW'}
        </span>
      </div>

      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 text-xs uppercase tracking-widest">
          {isDe ? 'TEILNAHMEPROZESS' : 'PARTICIPATION PROCESS'}
        </span>
        <h3 className="heading-primary text-2xl sm:text-3xl md:text-4xl" style={{ fontFamily: 'Arial' }}>
          {isDe ? 'Von Ihren Produktdaten zu realer Wirkung.' : 'From Your Product Data to Real-World Impact.'}
        </h3>
        <p
          className="subheading-primary text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: 'Arial' }}
        >
          {isDe
            ? 'Ein klar definierter Prozess zur Integration Ihrer Produkte und Materialien in die TYPUS.AI Plattform und den KI-gestützten Workflow – von der ersten Datenübergabe bis zur Veröffentlichung in der Materialbibliothek.'
            : 'A clearly defined process for integrating your products and materials into the TYPUS.AI platform and AI-supported workflow – from initial data handover to publishing in the material library.'}
        </p>
      </div>

      <div className="relative py-4">
        <CornerSquares />
        {workflowNode}
      </div>
    </section>
  )
}
