import React from 'react'

export function ViewerShowcaseSkeleton() {
  return (
    <div className="w-full space-y-3 animate-pulse">
      <div className="h-14 rounded-xl bg-neutral-900 border border-neutral-800" />
      <div className="w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[730px] rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-neutral-400">
          <div className="w-10 h-10 rounded-full border-2 border-neutral-300 dark:border-neutral-700 border-t-neutral-900 dark:border-t-white animate-spin" />
          <span className="text-xs font-mono uppercase tracking-widest">Loading interactive viewer...</span>
        </div>
      </div>
    </div>
  )
}

export function SlideshowSkeleton() {
  return (
    <div className="w-full my-8 space-y-4 animate-pulse">
      <div className="h-32 sm:h-44 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800" />
      <div className="h-32 sm:h-44 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800" />
      <div className="h-32 sm:h-44 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800" />
    </div>
  )
}

export function WorkflowSkeleton() {
  return (
    <div className="w-full min-h-[500px] rounded-3xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 p-8 space-y-6 animate-pulse flex flex-col items-center justify-center">
      <div className="h-10 w-3/4 rounded-full bg-neutral-200 dark:bg-neutral-800 max-w-xl" />
      <div className="h-64 w-full rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
    </div>
  )
}
