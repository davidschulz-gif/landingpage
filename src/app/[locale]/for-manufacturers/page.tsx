import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { setRequestLocale, getTranslations } from 'next-intl/server'

import { ManufacturerHeaderWithModal } from '@/components/manufacturer/manufacturer-header-with-modal'
import { FooterSection } from '@/components/footer-section'
import {
  ViewerShowcaseSkeleton,
  SlideshowSkeleton,
  WorkflowSkeleton,
} from '@/components/manufacturer/skeletons'

import { HeroSection } from '@/components/manufacturer/sections/hero-section'
import { SupercomputerSection } from '@/components/manufacturer/sections/supercomputer-section'
import { ScientificLecturesSection } from '@/components/manufacturer/sections/scientific-lectures-section'
import { BdBauMediaSection } from '@/components/manufacturer/sections/bdbau-media-section'
import { FundingBarSection } from '@/components/manufacturer/sections/funding-bar-section'
import { ResearchPartnersSection } from '@/components/manufacturer/sections/research-partners-section'
import { ProductsAIModelSection } from '@/components/manufacturer/sections/products-ai-model-section'
import { AdvantagesSection } from '@/components/manufacturer/sections/advantages-section'
import { SubmissionSpecSection } from '@/components/manufacturer/sections/submission-spec-section'
import { ParticipationIncludesSection } from '@/components/manufacturer/sections/participation-includes-section'
import { PartnerHeaderLogos } from '@/components/manufacturer/sections/partner-header-logos'
import { WorkflowSection } from '@/components/manufacturer/sections/workflow-section'

// Dynamic imports with SSR skeletons for heavy below-the-fold interactive components
const ViewerShowcase = dynamic(
  () =>
    import('@/components/research-viewers/viewer-showcase').then(
      (mod) => mod.ViewerShowcase
    ),
  {
    loading: () => <ViewerShowcaseSkeleton />,
  }
)

const ManufacturerSlideshow = dynamic(
  () =>
    import('@/components/manufacturer/manufacturer-slideshow').then(
      (mod) => mod.ManufacturerSlideshow
    ),
  {
    loading: () => <SlideshowSkeleton />,
  }
)

const ProviderProcessWorkflow = dynamic(
  () =>
    import('@/components/manufacturer/provider-process-workflow').then(
      (mod) => mod.ProviderProcessWorkflow
    ),
  {
    loading: () => <WorkflowSkeleton />,
  }
)

export default async function ForManufacturersPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'ResearchPage' })
  const isDe = locale === 'de'

  return (
    <div className="research-page-scope relative w-full bg-[#FFFFFF] dark:bg-neutral-950 text-neutral-900 dark:text-white min-h-screen font-sans selection:bg-black selection:text-white">
      {/* Client Header with isolated Contact Modal */}
      <ManufacturerHeaderWithModal />

      <main className="max-w-[1540px] mx-auto px-4 sm:px-6 md:px-10 space-y-24 md:space-y-32 pt-12 md:pt-16 pb-28">
        {/* SLIDE 1 SECTION: HERO BRAND & ACTIVE USERS */}
        <HeroSection locale={locale} t={t} />

        {/* SLIDE 5 SECTION: JUPITER SUPERCOMPUTER ARTICLE */}
        <SupercomputerSection t={t} />

        {/* SLIDE 7B SECTION: PROF. DR. LEIF KOBBELT SCIENTIFIC VIDEO LECTURES */}
        <ScientificLecturesSection t={t} />

        {/* SLIDE 2 SECTION: BDBAU MEMBERSHIP & SLIDE 3 MEDIA LOGOS */}
        <BdBauMediaSection locale={locale} t={t} />

        {/* SLIDE 4 SECTION: EU & NRW STATE FUNDING BAR */}
        <FundingBarSection locale={locale} t={t} />

        {/* SLIDE 6 SECTION: GEFÖRDERT & WISSENSCHAFTLICH BEGLEITET */}
        <ResearchPartnersSection t={t} />

        {/* SLIDE 7 SECTION: PRODUCTS IN THE AI MODEL & SHOWCASE */}
        <ProductsAIModelSection
          locale={locale}
          t={t}
          viewerShowcaseNode={<ViewerShowcase />}
        />

        {/* Consultation CTA */}
        <div className="flex justify-center w-full py-4">
          <Link
            href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-8 sm:px-10 rounded-full bg-black hover:bg-neutral-800 text-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2.5 border border-neutral-800 dark:border-neutral-200 cursor-pointer"
            style={{ fontFamily: 'Arial' }}
          >
            <span>
              {isDe
                ? 'Kostenloses Beratungsgespräch buchen'
                : 'Book a free consultation'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* MANUFACTURER SLIDESHOW (LAZY LOADED CAROUSEL) */}
        <div className="w-full my-8">
          <ManufacturerSlideshow />
        </div>

        {/* SLIDE 9 SECTION: ADVANTAGES AT A GLANCE */}
        <AdvantagesSection t={t} />

        {/* SLIDE 10 SECTION: WAS SIE EINREICHEN KÖNNEN */}
        <SubmissionSpecSection t={t} />

        {/* SLIDE 11 SECTION: WHAT PARTICIPATION INCLUDES */}
        <ParticipationIncludesSection t={t} />

        {/* PARTNER HEADER LOGOS */}
        <PartnerHeaderLogos />

        {/* TEILNAHMEPROZESS (7-STEP INTEGRATION PROCESS) */}
        <WorkflowSection
          isDe={isDe}
          workflowNode={<ProviderProcessWorkflow isPublic={true} />}
        />
      </main>

      {/* FOOTER */}
      <FooterSection />
    </div>
  )
}
