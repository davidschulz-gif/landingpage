'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { ViewerShowcase } from '@/components/research-viewers/viewer-showcase'
import { useLocale, useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Cpu,
  Layers,
  Sparkles,
  Users,
  Database,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Megaphone,
  ShoppingCart,
  Zap,
  Building2,
  FileCheck,
  Trophy,
  Target,
  ExternalLink,
  Handshake,
  Settings,
  Tag,
  Coins,
  Gift,
  Library,
  Brain,
  LayoutGrid,
  Box,
  Plus,
  Play,
  Leaf,
  Globe
} from 'lucide-react'

const PartnerHeaderLogos = () => (
  <div className="flex flex-wrap items-center justify-between gap-6 border-b border-neutral-200 dark:border-neutral-800 pb-8 pt-4">
    <div className="flex items-center justify-between w-full gap-6 sm:gap-8 md:gap-12 flex-wrap">
      <Image src="/logo/logo_ffplus.svg" alt="Fortissimo Plus" width={360} height={140} className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain dark:invert" />
      <Image src="/logo/logo_eccc.svg" alt="ECCC European Cybersecurity Competence Centre" width={400} height={140} className="h-10 sm:h-14 md:h-18 lg:h-22 w-auto object-contain dark:invert" />
      <Image src="/logo/logo_eurohpc.svg" alt="EuroHPC Joint Undertaking" width={420} height={140} className="h-10 sm:h-14 md:h-18 lg:h-22 w-auto object-contain dark:invert" />
      <Image src="/logo/logo_chipsju.svg" alt="Chips JU" width={360} height={140} className="h-10 sm:h-14 md:h-18 lg:h-22 w-auto object-contain dark:invert" />
      <Image src="/logo/logo_rwth.svg" alt="RWTH Aachen University" width={450} height={140} className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain dark:invert" />
    </div>
  </div>
)

export default function ResearchProjectsPage() {
  const locale = useLocale()
  const t = useTranslations('ResearchPage')
  const isDe = locale === 'de'

  return (
    <div className="research-page-scope relative w-full bg-[#fcfcfd] dark:bg-neutral-950 text-neutral-900 dark:text-white min-h-screen font-sans selection:bg-black selection:text-white">
      <NavbarDemo />

      <main className="max-w-[1540px] mx-auto px-4 sm:px-6 md:px-10 space-y-24 md:space-y-32 pt-36 pb-28">

        {/* SLIDE 1 SECTION: HERO BRAND & ACTIVE USERS (ARCHITEXTURES & MATERIAL GUIDE HERO UI) */}
        <section className="relative py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center justify-center text-center space-y-10"
          >
            {/* Top Specification Badge Tag */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs text-xs">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600 dark:text-neutral-300 font-semibold">
                EU FFPLUS RESEARCH PROGRAMME &bull; DIGITALE MATERIAL- & TEXTURFÖRDERUNG
              </span>
            </div>

            {/* Main Logo Container Box with Corner (+) Accents */}
            <div className="relative p-8 sm:p-12 md:p-14 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800 shadow-sm max-w-4xl w-full flex items-center justify-center">
              <span className="absolute -top-2 -left-2 text-red-500 font-light text-sm font-mono select-none">+</span>
              <span className="absolute -top-2 -right-2 text-red-500 font-light text-sm font-mono select-none">+</span>
              <span className="absolute -bottom-2 -left-2 text-red-500 font-light text-sm font-mono select-none">+</span>
              <span className="absolute -bottom-2 -right-2 text-red-500 font-light text-xs font-mono select-none">+</span>

              <Image
                src="/typus_hero_logo.png"
                alt="TYPUS.AI"
                width={380}
                height={120}
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain dark:invert drop-shadow-xs"
                priority
              />
            </div>

            {/* Active Users Metric Card (Material Guide Style) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm space-y-3 max-w-2xl w-full">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 stroke-[1.75]" />
              </div>
              <p
                className="subheading-primary text-base sm:text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                <Link href={`/${locale}`} className="text-[#0086bf] hover:underline ">
                  TYPUS.AI
                </Link>{' '}
                {t('slide1.activeUsers')}
              </p>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 5 SECTION: JUPITER SUPERCOMPUTER ARTICLE (MATERIAL GUIDE SPEC & ARTICLE LAYOUT) */}
        <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-10">
          
          {/* Section Tag Header */}
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
            <span>[ SECTION 01 // SUPERCOMPUTER & AI MODEL ]</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> FORSCHUNGSZENTRUM JÜLICH
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full space-y-10"
          >
            <div className="text-center space-y-4 max-w-4xl mx-auto">
              <span
                className="inline-block px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-xs uppercase tracking-widest "
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('slide5.badge')}
              </span>
              <h3
                className="heading-primary text-2xl sm:text-3xl md:text-4xl"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {t('slide5.title')}
              </h3>
              <p
                className="subheading-primary text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('slide5.subtitle')}
              </p>
              <div
                className="text-xs text-neutral-400 font-mono pt-1"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('slide5.dateAuthor')}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 max-w-6xl mx-auto w-full shadow-2xl">
              <div className="aspect-[16/9] w-full relative">
                <Image
                  src="/jupiter_inauguration.jpg"
                  alt="Feierliche Einweihung des Supercomputers JUPITER am Forschungszentrum Jülich"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
                
                <div
                  className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 text-white text-xs tracking-wider bg-black/75 px-4 py-2 rounded-full backdrop-blur-md border border-white/20  uppercase"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
                  {t('slide5.tag')}
                </div>

                <div
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-xs text-neutral-200 bg-black/75 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 font-mono"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide5.caption')}
                </div>
              </div>
            </div>

            <div
              className="flex justify-center text-xs md:text-sm pt-2"
              style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
            >
              <Link
                href="https://www.golem.de/news/supercomputer-jupiter-eingeweiht-europaeisch-ist-hochleistungsrechnen-richtig-gedacht-2509-199789.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-xs flex items-center gap-2 transition"
              >
                <span className="font-semibold">{t('slide5.source')}</span>
                <ExternalLink className="w-4 h-4 shrink-0 text-blue-500" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 7B SECTION: PROF. DR. LEIF KOBBELT SCIENTIFIC VIDEO LECTURES */}
        <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-10">
          
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
            <span>[ SECTION 02 // WISSENSCHAFTLICHE KOOPERATION ]</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">RWTH AACHEN COMPUTER GRAPHICS</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full space-y-10"
          >
            {/* Prof. Dr. Leif Kobbelt Cooperation Card placed above videos */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm space-y-3 max-w-2xl">
              <div
                className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 "
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('slide7.coopLabel')}
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-black text-white flex-shrink-0 shadow-md">
                  <Image src="/cube_mesh_icon.png" alt="Cube Mesh Icon" width={32} height={32} className="w-7 h-7 object-contain" />
                </div>
                <div className="space-y-0.5">
                  <h4
                    className="heading-primary text-lg sm:text-xl md:text-2xl"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide7.professorName')}
                  </h4>
                  <p
                    className="subheading-primary text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-snug"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide7.professorTitle')}
                  </p>
                </div>
              </div>
            </div>

            {/* 2-Column Responsive Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              {/* Video 1 Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-black relative shadow-inner">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/_IZowy8X29c"
                      title={t('videoSlide.video1Title')}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <div
                      className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 "
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      RWTH AACHEN VORTRAG
                    </div>
                    <h4
                      className="subheading-primary text-lg "
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('videoSlide.video1Title')}
                    </h4>
                    <p
                      className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('videoSlide.video1Desc')}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                    href="https://www.youtube.com/watch?v=_IZowy8X29c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm text-[#0086bf] hover:underline "
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    <span>Auf YouTube ansehen</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Video 2 Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 relative shadow-inner group">
                    <Link
                      href="https://www.youtube.com/watch?v=-Ts-IGJiIGI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full block relative"
                    >
                      <Image
                        src="https://img.youtube.com/vi/-Ts-IGJiIGI/hqdefault.jpg"
                        alt={t('videoSlide.video2Title')}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-xl transition transform group-hover:scale-110">
                          <Play className="w-8 h-8 fill-current ml-1" />
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <div
                      className="text-xs uppercase tracking-wider text-purple-600 dark:text-purple-400 "
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      DFG LEIBNIZ-PREIS PORTRÄT
                    </div>
                    <h4
                      className="subheading-primary text-lg "
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('videoSlide.video2Title')}
                    </h4>
                    <p
                      className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('videoSlide.video2Desc')}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                    href="https://www.youtube.com/watch?v=-Ts-IGJiIGI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm text-[#0086bf] hover:underline "
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    <span>Auf YouTube ansehen</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 2 SECTION: BDBAU MEMBERSHIP & SLIDE 3 MEDIA LOGOS */}
        <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-12">
          
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
            <span>[ SECTION 03 // BDBAU MITGLIEDSCHAFT & PRESSE ]</span>
            <span className="text-neutral-700 dark:text-neutral-300 font-semibold">DIGITALES BAUWESEN DEUTSCHLAND</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full space-y-12"
          >
            <div className="max-w-5xl mx-auto space-y-8 flex flex-col items-center text-center">
              <div className="w-full h-80 sm:h-96 md:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 relative bg-white dark:bg-neutral-900 shadow-md flex items-center justify-center p-6">
                <Image
                  src="/research_bdbau_directory.png"
                  alt="Bundesverband Digitales Bauwesen - Typus.AI Mitgliedschaft Directory"
                  width={850}
                  height={620}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>

              <p
                className="subheading-primary text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                <Link href={`/${locale}`} className="text-[#0086bf] hover:underline ">
                  TYPUS.AI
                </Link>{' '}
                {t.rich('slide2.bdbauDesc', {
                  link: (chunks) => (
                    <a
                      href="https://bdbau.org/mitglieder/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-neutral-400 hover:decoration-neutral-900 dark:hover:decoration-white transition-all underline-offset-4 "
                    >
                      {chunks}
                    </a>
                  )
                })}
              </p>

              <div className="flex items-center justify-center gap-5 pt-2">
                <a
                  href="https://bdbau.org/mitglieder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <Image src="/bdbau.png" alt="Bundesverband Digitales Bauwesen" width={450} height={200} className="h-28 sm:h-36 md:h-44 w-auto object-contain dark:invert" />
                </a>
              </div>
            </div>

            {/* Media Press Logos Container Box */}
            <div className="p-8 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md shadow-xs space-y-8">
              <div className="text-center text-xs font-mono uppercase tracking-widest text-neutral-400">
                BEKANNT AUS MEDIEN & FACHPRESSE
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center">
                <div className="flex items-center justify-center p-4">
                  <Image src="/logo/konferenzen-logo.png" alt="FAZ Konferenzen" width={220} height={80} className="h-12 sm:h-14 md:h-16 w-auto object-contain dark:invert" />
                </div>
                <div className="flex items-center justify-center p-4">
                  <Image src="/logo/dab_logo.png" alt="Deutsches Architektenblatt" width={240} height={90} className="h-12 sm:h-14 md:h-16 w-auto object-contain invert dark:invert-0" />
                </div>
                <div className="flex items-center justify-center p-4">
                  <Image src="/logo/80sek_black.png" alt="Neues Bauen 80 Sekunden" width={260} height={100} className="h-12 sm:h-14 md:h-16 w-auto object-contain dark:invert" />
                </div>
                <div className="flex items-center justify-center p-4">
                  <Image src="/logo/baunetz_logo.png" alt="BauNetz" width={220} height={80} className="h-12 sm:h-14 md:h-16 w-auto object-contain dark:invert" />
                </div>
              </div>

              <p
                className="subheading-primary text-center text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed border-t border-neutral-200/60 dark:border-neutral-800 pt-6"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('slide3.desc')}
              </p>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 4 SECTION: EU & NRW STATE FUNDING BAR */}
        <section className="py-4 border-t border-neutral-200/80 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-6 shadow-2xs space-y-3 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-1">
              <Image
                src={locale === 'de' ? '/eu-kofinanziert-von-der-europaeischen-union.png' : '/eu-kofinanziert-von-der-europaeischen-union-en.png'}
                alt="Kofinanziert von der Europäischen Union"
                width={220}
                height={55}
                className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              />
              <Image
                src="/Logo_MWIKE.jpg"
                alt="Ministerium für Wirtschaft, Industrie, Klimaschutz und Energie NRW"
                width={220}
                height={55}
                className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              />
            </div>

            <p
              className="subheading-primary text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
            >
              {t('slide4.desc')}
            </p>
          </motion.div>
        </section>

        {/* SLIDE 6 SECTION: GEFÖRDERT & WISSENSCHAFTLICH BEGLEITET */}
        <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-10">
          
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
            <span>[ SECTION 05 // FORSCHUNGSPARTNER & BEGLEITUNG ]</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">EFRE / JTF NRW & FFPLUS</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full space-y-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h3
                  className="heading-primary text-2xl sm:text-3xl"
                  style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
                >
                  {t('slide6.title')}
                </h3>

                <div className="space-y-4 text-xs md:text-sm">
                  {/* EFRE / JTF NRW Card */}
                  <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 flex items-center justify-between gap-4 shadow-sm">
                    <div className="flex items-center gap-4">
                      <Image src="/logo_efre_jtf.png" alt="EFRE JTF NRW 2021-27" width={220} height={80} className="h-14 sm:h-16 md:h-18 w-auto object-contain dark:invert" unoptimized />
                      <div
                        className="text-neutral-900 dark:text-white hidden sm:block  text-xs md:text-sm"
                        style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                      >
                        {t('slide6.efreTitle')}
                      </div>
                    </div>
                    <span
                      className="px-3.5 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-xs  uppercase tracking-wider shrink-0"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.statusApproved')}
                    </span>
                  </div>

                  {/* Fortissimo Plus Card */}
                  <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Image src="/logo_ffplus_card.png" alt="FORTISSIMO PLUS" width={120} height={55} className="h-11 sm:h-13 w-auto object-contain" />
                        <div
                          className="text-neutral-900 dark:text-white  text-xs md:text-sm"
                          style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                        >
                          {t('slide6.ffplusTitle')}
                        </div>
                      </div>
                      <span
                        className="px-3.5 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-xs  uppercase tracking-wider shrink-0"
                        style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                      >
                        {t('slide6.statusApproved')}
                      </span>
                    </div>
                    <p
                      className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.ffplusDesc')}
                    </p>
                  </div>

                  {/* Kooperationen & Partner Card */}
                  <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 space-y-4 shadow-sm">
                    <div
                      className="uppercase text-xs tracking-wider text-purple-600 dark:text-purple-400 "
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.partnerTitle')}
                    </div>
                    
                    <div className="flex items-center gap-6 flex-wrap">
                      <Image src="/logo_dfki.png" alt="DFKI German Research Center for AI" width={160} height={50} className="h-10 md:h-12 w-auto object-contain dark:invert" unoptimized />
                      <Image src="/logo_concular.png" alt="Concular" width={120} height={50} className="h-10 md:h-12 w-auto object-contain dark:invert" unoptimized />
                      <Image src="/logo_zukunft_bau.png" alt="Zukunft Bau" width={320} height={100} className="h-12 md:h-14 lg:h-16 w-auto object-contain dark:invert" unoptimized />
                      <Image src="/logo_kmu_innovativ.png" alt="KMU-innovativ" width={200} height={60} className="h-12 md:h-14 lg:h-16 w-auto object-contain dark:invert" unoptimized />
                    </div>

                    <p
                      className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800 pt-3"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.partnerDesc')} &bull; <span className="text-neutral-500 font-semibold">{t('slide6.deadline')}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: JUPITER Supercomputer Rack Photo Container */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-2xl h-[520px] sm:h-[620px] md:h-[680px] lg:h-[720px]">
                  <Image
                    src="/jupiter_rack_photo.png"
                    alt="JUPITER High-Performance Supercomputer Racks at Forschungszentrum Jülich"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />
                  
                  <div
                    className="absolute top-4 right-4 text-xs text-white bg-black/75 px-4 py-2 rounded-full backdrop-blur-md border border-white/20  uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide6.rackTag')}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 space-y-2">
                    <div
                      className="text-3xl md:text-4xl lg:text-5xl  text-white tracking-widest"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.rackTitle')}
                    </div>
                    <p
                      className="text-xs md:text-sm text-neutral-300 font-mono"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.rackSubtitle')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 7 SECTION: PRODUCTS IN THE AI MODEL & SHOWCASE */}
        <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-12">
          
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
            <span>[ SECTION 06 // MATERIAL KATALOG & DIGITALE SHOWCASE ]</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">ARCHITEXTURES × MATERIAL GUIDE</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full space-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Title, Subtitle, Checklist & Info Cards */}
              <div className="lg:col-span-6 space-y-6">
                <h3
                  className="heading-primary text-2xl sm:text-3xl"
                  style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
                >
                  {t('slide7.title')}
                </h3>

                <div className="space-y-3">
                  <div
                    className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 "
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide7.badge')}
                  </div>
                  <p
                    className="subheading-primary text-base md:text-lg lg:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide7.desc')}
                  </p>
                </div>

                {/* 4 Checklist Items */}
                <div className="space-y-3 pt-2">
                  {[0, 1, 2, 3].map((idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 text-sm md:text-base text-neutral-800 dark:text-neutral-200 font-semibold"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>{t(`slide8.checklist.${idx}`)}</span>
                    </div>
                  ))}
                </div>

                {/* 2 Info Cards (Ihr Vorteil & Direkt im Workflow) */}
                <div className="space-y-4 pt-2">
                  <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 shadow-xs">
                      <Target className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span
                        className="text-xs text-black dark:text-white uppercase tracking-wider  block"
                        style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                      >
                        {t('slide8.advantageBadge')}
                      </span>
                      <p
                        className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                        style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                      >
                        {t('slide8.advantageDesc')}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5 shadow-xs">
                      <Image src="/cube_mesh_icon.png" alt="3D Cube Icon" width={24} height={24} className="w-5 h-5 object-contain invert dark:invert-0" />
                    </div>
                    <div className="space-y-1">
                      <span
                        className="text-xs text-black dark:text-white uppercase tracking-wider  block"
                        style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                      >
                        {t('slide8.workflowBadge')}
                      </span>
                      <p
                        className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                        style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                      >
                        {t('slide8.workflowDesc')}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Architectural Render Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl h-[480px] sm:h-[600px] md:h-[680px] lg:h-[740px]">
                  <Image
                    src="/architectural_building_render.png"
                    alt="Fotorealistische Fassaden- & Materialvisualisierung - Modern Building Architecture Render"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Interactive Material & Texture Viewer Showcase */}
            <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800">
              <ViewerShowcase />
            </div>
          </motion.div>
        </section>

        {/* SLIDE 9 SECTION: ADVANTAGES AT A GLANCE */}
        <section className="py-10 border-t border-neutral-200/80 dark:border-neutral-800 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full space-y-8"
          >
            <h3
              className="heading-primary text-2xl sm:text-3xl"
              style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
            >
              {t('slide9.title')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: Megaphone },
                { icon: ShoppingCart },
                { icon: Sparkles },
                { icon: Users },
                { icon: ShieldCheck }
              ].map((col, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs flex flex-col justify-between space-y-4 text-center hover:shadow-lg transition">
                  <col.icon className="w-7 h-7 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
                  <div className="space-y-1">
                    <div
                      className="text-2xl sm:text-3xl  text-blue-600 dark:text-blue-400"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t(`slide9.items.${idx}.num`)}
                    </div>
                    <div
                      className="subheading-primary text-xs sm:text-sm  text-neutral-900 dark:text-white"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t(`slide9.items.${idx}.title`)}
                    </div>
                  </div>
                  <p
                    className="subheading-primary text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-snug"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t(`slide9.items.${idx}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SLIDE 10 SECTION: WAS SIE EINREICHEN KÖNNEN (MATERIAL GUIDE SPEC & CARD CONTAINER) */}
        <section className="py-8 border-t border-neutral-200/80 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-full"
          >
            <div className="w-full rounded-3xl bg-neutral-950 text-white p-6 sm:p-8 lg:p-10 border border-neutral-800 shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Top Header Logos Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-neutral-800/80">
                <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
                  <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-xs">
                    <Image src="/logo/logo_ffplus.svg" alt="Fortissimo Plus" width={140} height={40} className="h-6 sm:h-7 w-auto object-contain" />
                  </div>
                  <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-xs">
                    <Image src="/logo/logo_eccc.svg" alt="ECCC" width={140} height={40} className="h-5 sm:h-6 w-auto object-contain" />
                  </div>
                  <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-xs">
                    <Image src="/logo/logo_eurohpc.svg" alt="EuroHPC" width={140} height={40} className="h-5 sm:h-6 w-auto object-contain" />
                  </div>
                  <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-xs">
                    <Image src="/logo/logo_chipsju.svg" alt="Chips JU" width={140} height={40} className="h-5 sm:h-6 w-auto object-contain" />
                  </div>
                </div>
                <div className="flex items-center gap-3 border-l border-neutral-800 pl-4 hidden sm:flex">
                  <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-xs">
                    <Image src="/logo/logo_rwth.svg" alt="RWTH Aachen University" width={160} height={40} className="h-6 sm:h-7 w-auto object-contain" />
                  </div>
                </div>
              </div>

              {/* Header Title & Subtitle */}
              <div className="space-y-2">
                <h3
                  className="heading-primary text-xl sm:text-2xl md:text-3xl"
                  style={{ fontFamily: "var(--font-ft-calhern), sans-serif", color: 'white' }}
                >
                  {t('slide10.title')}
                </h3>
                <p
                  className="subheading-primary text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed max-w-4xl"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif", color: '#d4d4d4' }}
                >
                  {t('slide10.subtitle')}
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
                {/* Left Column: 4 Feature Boxes + Quote Banner */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {[
                      { icon: LayoutGrid, titleKey: 'slide10.inputs.0.title', descKey: 'slide10.inputs.0.desc' },
                      { icon: Layers, titleKey: 'slide10.inputs.1.title', descKey: 'slide10.inputs.1.desc' },
                      { icon: Box, titleKey: 'slide10.inputs.2.title', descKey: 'slide10.inputs.2.desc' },
                      { icon: FileCheck, titleKey: 'slide10.inputs.3.title', descKey: 'slide10.inputs.3.desc' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-3.5 hover:border-neutral-700 transition"
                      >
                        <div className="p-2 rounded-lg bg-neutral-800 text-neutral-200 flex-shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <div
                            className="subheading-primary text-xs sm:text-sm  text-white"
                            style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                          >
                            {t(item.titleKey)}
                          </div>
                          <div
                            className="subheading-primary text-[11px] sm:text-xs text-neutral-400"
                            style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                          >
                            {t(item.descKey)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Quote Notice Box */}
                  <div
                    className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-start gap-3 text-xs text-neutral-300 leading-relaxed font-medium"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    <div className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 flex-shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span>
                      <strong className="text-white  block mb-0.5 text-xs">QUALITÄTSHINWEIS:</strong>
                      {t('slide10.notice')}
                    </span>
                  </div>
                </div>

                {/* Right Column: Hero Material Render Image & 3 Key Badges */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-md h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]">
                    <Image
                      src="/material_samples_showcase.png"
                      alt="Digital Material Samples Showcase - High Resolution PBR"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Bottom 3 Standards Badges */}
                  <div
                    className="grid grid-cols-3 gap-3 text-center"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                      <Database className="w-4 h-4 text-neutral-300 mx-auto" />
                      <div className="text-white text-xs ">{t('slide10.badge1.title')}</div>
                      <div className="text-neutral-400 text-[10px]">{t('slide10.badge1.subtitle')}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                      <Building2 className="w-4 h-4 text-neutral-300 mx-auto" />
                      <div className="text-white text-xs ">{t('slide10.badge2.title')}</div>
                      <div className="text-neutral-400 text-[10px]">{t('slide10.badge2.subtitle')}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                      <ShieldCheck className="w-4 h-4 text-neutral-300 mx-auto" />
                      <div className="text-white text-xs ">{t('slide10.badge3.title')}</div>
                      <div className="text-neutral-400 text-[10px]">{t('slide10.badge3.subtitle')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer EU FFplus Funding Tag */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                  <span style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>
                    Gefördert im FFplus Programm der Europäischen Union
                  </span>
                </div>
                <div className="text-neutral-500 font-mono text-[10px] hidden sm:block">
                  FFPLUS × TYPUS.AI
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* SLIDE 11 SECTION: WHAT PARTICIPATION INCLUDES */}
        <section className="py-10 border-t border-neutral-200/80 dark:border-neutral-800 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="w-full space-y-8"
          >
            <h3
              className="heading-primary text-2xl sm:text-3xl"
              style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
            >
              {t('slide11.title')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {/* Card 1 */}
              <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs space-y-3 flex flex-col justify-start text-center hover:shadow-lg transition">
                <div className="space-y-2">
                  <Handshake className="w-6 h-6 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
                  <div
                    className="text-xs sm:text-sm  text-neutral-900 dark:text-white leading-tight"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide11.card1Title')}
                  </div>
                </div>
                <p
                  className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide11.card1Desc')}
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs space-y-3 flex flex-col justify-start text-center hover:shadow-lg transition">
                <div className="space-y-2">
                  <Settings className="w-6 h-6 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
                  <div
                    className="text-xs sm:text-sm  text-neutral-900 dark:text-white leading-tight"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide11.card2Title')}
                  </div>
                </div>
                <p
                  className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide11.card2Desc')}
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs space-y-3 flex flex-col justify-start hover:shadow-lg transition">
                <div className="space-y-2 text-center">
                  <Tag className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto stroke-[1.5]" />
                  <div
                    className="text-xs sm:text-sm  text-neutral-900 dark:text-white leading-tight"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide11.card3Title')}
                  </div>
                </div>
                <ul
                  className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 space-y-1 list-disc pl-4 text-left leading-relaxed"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {[0, 1].map((idx) => (
                    <li key={idx}>{t(`slide11.card3List.${idx}`)}</li>
                  ))}
                </ul>
              </div>

              {/* Card 4 */}
              <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs space-y-3 flex flex-col justify-start text-center hover:shadow-lg transition">
                <div className="space-y-2">
                  <Coins className="w-6 h-6 text-amber-500 mx-auto stroke-[1.5]" />
                  <div
                    className="text-xs sm:text-sm  text-neutral-900 dark:text-white leading-tight"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide11.card4Title')}
                  </div>
                </div>
                <p
                  className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide11.card4Desc')}
                </p>
              </div>

              {/* Card 5 */}
              <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs space-y-3 flex flex-col justify-start text-center hover:shadow-lg transition">
                <div className="space-y-2">
                  <Rocket className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto stroke-[1.5]" />
                  <div
                    className="text-xs sm:text-sm  text-neutral-900 dark:text-white leading-tight"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide11.card5Title')}
                  </div>
                </div>
                <p
                  className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide11.card5Desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 12 SECTION: INTEGRATION PACKAGES & PRICING */}
        <section className="py-10 border-t border-neutral-200/80 dark:border-neutral-800 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="w-full space-y-8 max-w-5xl mx-auto"
          >
            {/* Partner Logos Header Bar */}
            <PartnerHeaderLogos />

            <h3 className="heading-primary text-2xl sm:text-3xl text-center" style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>
              {t('slide12.title')}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Main Package (5.000 €) */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-blue-500/40 dark:border-blue-500/50 shadow-lg space-y-6 relative overflow-hidden flex flex-col justify-between">
                <div
                  className="absolute top-0 right-0 px-4 py-1.5 bg-blue-600 text-white text-xs uppercase tracking-widest rounded-bl-2xl "
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide12.recommendedBadge')}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400">
                      <Database className="w-6 h-6" />
                    </div>
                    <div>
                      <h4
                        className="subheading-primary text-lg sm:text-xl "
                        style={{ fontFamily: "var(--font-ft-calhern), 'Soyuz Grotesk', sans-serif" }}
                      >
                        {t('slide12.mainTitle')}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-3 pt-1">
                    <span
                      className="text-3xl sm:text-4xl md:text-5xl  text-black dark:text-white tracking-tight"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.mainPrice')}
                    </span>
                    <span
                      className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.mainVat')}
                    </span>
                  </div>

                  <div>
                    <span
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/80 text-xs uppercase tracking-wider rounded-lg inline-block "
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.mainScope')}
                    </span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="divide-y divide-neutral-100 dark:divide-neutral-800/80 text-xs sm:text-sm">
                  {[Sparkles, FileCheck, Library, Brain, ShieldCheck].map((IconComp, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 text-neutral-800 dark:text-neutral-200 first:pt-0 last:pb-0 font-medium">
                      <IconComp className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>{t(`slide12.mainFeatures.${idx}`)}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus Gift Box */}
                <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-neutral-950 border border-blue-100 dark:border-neutral-800 flex items-start gap-3 text-xs text-neutral-800 dark:text-neutral-200">
                  <Gift className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong
                      className="text-blue-900 dark:text-blue-300 block uppercase tracking-wide text-xs "
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.bonusTitle')}
                    </strong>
                    <span
                      className="text-neutral-600 dark:text-neutral-400 block text-xs"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.bonusDesc')}
                    </span>
                  </div>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit max-w-full mx-auto py-3 px-8 rounded-full bg-black dark:bg-white text-white dark:text-black text-center inline-block border border-black dark:border-white hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 text-xs  uppercase tracking-wide shadow-md"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide12.mainCta')}
                </Link>
              </div>

              {/* Single Product Alternative (1.000 €) */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm space-y-6 flex flex-col justify-between text-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto shadow-xs">
                    <Box className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span
                      className="text-xs uppercase text-blue-600 dark:text-blue-400 tracking-widest block "
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.altBadge')}
                    </span>
                    <h4
                      className="heading-primary text-base sm:text-lg md:text-xl "
                      style={{ fontFamily: "var(--font-ft-calhern), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.altTitle')}
                    </h4>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    <span
                      className="text-2xl sm:text-3xl md:text-4xl  text-black dark:text-white tracking-tight"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.altPrice')}
                    </span>
                    <span
                      className="text-xs text-neutral-500 dark:text-neutral-400 block pt-0.5 font-semibold"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.altVat')}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                    <LayoutGrid className="w-4 h-4" />
                  </div>
                  <p
                    className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide12.altDesc')}
                  </p>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit max-w-full mx-auto py-3 px-8 rounded-full bg-black dark:bg-white text-white dark:text-black text-center inline-block border border-black dark:border-white hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 text-xs  uppercase tracking-wide shadow-md"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide12.altCta')}
                </Link>
              </div>
            </div>

            {/* Bottom EU Funding Footer Badge */}
            <div
              className="flex items-center justify-center gap-3 text-xs sm:text-sm text-neutral-500 pt-6 border-t border-neutral-200 dark:border-neutral-800"
              style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
            >
              <span className="w-6 h-6 rounded-full border border-neutral-400 dark:border-neutral-600 flex items-center justify-center text-xs flex-shrink-0">
                🇪🇺
              </span>
              <span>{t('slide12.euFunding')}</span>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 13 SECTION: MANUFACTURER PRICING PLANS (ARCHITEXTURES CORNER PLUS '+' CARDS) */}
        <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="w-full space-y-10 max-w-7xl mx-auto px-2 sm:px-4"
          >
            {/* Header */}
            <div className="space-y-2 text-center max-w-3xl mx-auto">
              <h3
                className="heading-primary text-2xl sm:text-3xl md:text-4xl"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {t('plans.sectionTitle')}
              </h3>
              <p
                className="subheading-primary text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('plans.sectionSubtitle')}
              </p>
            </div>

            {/* 4 Pricing Cards Grid with Corner Plus (+) Accents */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {/* Card 1: Essential */}
              <div
                className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-300/90 dark:border-neutral-800 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl transition"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                <span className="absolute -top-2 -left-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -top-2 -right-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -bottom-2 -left-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -bottom-2 -right-2 text-red-500 font-light text-sm font-mono select-none">+</span>

                <div className="space-y-4 text-left">
                  <h4 className="text-xl sm:text-2xl  text-neutral-900 dark:text-white">
                    {t('plans.essential')}
                  </h4>

                  {/* Price */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.priceLabel')}
                    </span>
                    <span className="text-lg sm:text-xl  text-black dark:text-white block">
                      125 €{t('plans.perMonth')}
                    </span>
                  </div>

                  {/* Published Textures */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.publishedTexturesLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      50
                    </span>
                  </div>

                  {/* File Formats */}
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.fileFormatsLabel')}
                    </span>
                    <ul className="text-xs space-y-0.5">
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.highRes')}</li>
                      <li className="text-neutral-400 font-normal">{t('plans.formats.hatch')}</li>
                      <li className="text-neutral-400 font-normal">{t('plans.formats.pbr')}</li>
                    </ul>
                  </div>

                  {/* Analytics */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.analyticsLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      30 {t('plans.days')}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.featuresLabel')}
                    </span>
                    <ul className="text-xs space-y-1">
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.leadCapture')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.monthlySummary')}</li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full border border-neutral-900 dark:border-white text-neutral-900 dark:text-white text-center text-xs  uppercase tracking-wider hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 mt-6 inline-block"
                >
                  {t('plans.getStarted')}
                </Link>
              </div>

              {/* Card 2: Standard */}
              <div
                className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-300/90 dark:border-neutral-800 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl transition"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                <span className="absolute -top-2 -left-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -top-2 -right-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -bottom-2 -left-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -bottom-2 -right-2 text-red-500 font-light text-sm font-mono select-none">+</span>

                <div className="space-y-4 text-left">
                  <h4 className="text-xl sm:text-2xl  text-neutral-900 dark:text-white">
                    {t('plans.standard')}
                  </h4>

                  {/* Price */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.priceLabel')}
                    </span>
                    <span className="text-lg sm:text-xl  text-black dark:text-white block">
                      275 €{t('plans.perMonth')}
                    </span>
                  </div>

                  {/* Published Textures */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.publishedTexturesLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      150
                    </span>
                  </div>

                  {/* File Formats */}
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.fileFormatsLabel')}
                    </span>
                    <ul className="text-xs space-y-0.5">
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.highRes')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.hatch')}</li>
                      <li className="text-neutral-400 font-normal">{t('plans.formats.pbr')}</li>
                    </ul>
                  </div>

                  {/* Analytics */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.analyticsLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      90 {t('plans.days')}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.featuresLabel')}
                    </span>
                    <ul className="text-xs space-y-1">
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.leadCapture')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.brandPage')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.artxPromotion')}</li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full border border-neutral-900 dark:border-white text-neutral-900 dark:text-white text-center text-xs  uppercase tracking-wider hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 mt-6 inline-block"
                >
                  {t('plans.getStarted')}
                </Link>
              </div>

              {/* Card 3: Advanced */}
              <div
                className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900/90 border border-blue-500 dark:border-blue-500 flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl transition ring-2 ring-blue-500/30"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                <span className="absolute -top-2 -left-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -top-2 -right-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -bottom-2 -left-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -bottom-2 -right-2 text-red-500 font-light text-sm font-mono select-none">+</span>

                <div className="space-y-4 text-left">
                  <h4 className="text-xl sm:text-2xl  text-neutral-900 dark:text-white flex items-center justify-between">
                    <span>{t('plans.advanced')}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[9px]  uppercase">PRO</span>
                  </h4>

                  {/* Price */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.priceLabel')}
                    </span>
                    <span className="text-lg sm:text-xl  text-black dark:text-white block">
                      495 €{t('plans.perMonth')}
                    </span>
                  </div>

                  {/* Published Textures */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.publishedTexturesLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      500
                    </span>
                  </div>

                  {/* File Formats */}
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.fileFormatsLabel')}
                    </span>
                    <ul className="text-xs space-y-0.5">
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.highRes')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.hatch')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.pbr')}</li>
                    </ul>
                  </div>

                  {/* Analytics */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.analyticsLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      180 {t('plans.days')}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.featuresLabel')}
                    </span>
                    <ul className="text-xs space-y-1">
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.leadCapture')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.brandPage')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.artxPromotion')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.homepageFeature')}</li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full bg-blue-600 text-white text-center text-xs  uppercase tracking-wider hover:bg-blue-700 transition-all duration-200 mt-6 inline-block shadow-md"
                >
                  {t('plans.getStarted')}
                </Link>
              </div>

              {/* Card 4: Custom */}
              <div
                className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-300/90 dark:border-neutral-800 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl transition"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                <span className="absolute -top-2 -left-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -top-2 -right-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -bottom-2 -left-2 text-red-500 font-light text-sm font-mono select-none">+</span>
                <span className="absolute -bottom-2 -right-2 text-red-500 font-light text-sm font-mono select-none">+</span>

                <div className="space-y-4 text-left">
                  <h4 className="text-xl sm:text-2xl  text-neutral-900 dark:text-white">
                    {t('plans.custom')}
                  </h4>

                  {/* Price */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.priceLabel')}
                    </span>
                    <span className="text-lg sm:text-xl  text-black dark:text-white block">
                      {t('plans.speakToSales')}
                    </span>
                  </div>

                  {/* Published Textures */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.publishedTexturesLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      {t('plans.unlimited')}
                    </span>
                  </div>

                  {/* File Formats */}
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.fileFormatsLabel')}
                    </span>
                    <ul className="text-xs space-y-0.5">
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.highRes')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.hatch')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.pbr')}</li>
                    </ul>
                  </div>

                  {/* Analytics */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.analyticsLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      365 {t('plans.days')}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.featuresLabel')}
                    </span>
                    <ul className="text-xs space-y-1">
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.leadCapture')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.customApp')}</li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full border border-neutral-900 dark:border-white text-neutral-900 dark:text-white text-center text-xs  uppercase tracking-wider hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 mt-6 inline-block"
                >
                  {t('plans.contactSales')}
                </Link>
              </div>
            </div>

            {/* SUBSCRIPTION ADD-ONS SECTION */}
            <div
              className="pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-4"
              style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
            >
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  {t('plans.addonsHeader')}
                </span>
                <span className="text-red-500 font-light text-xs font-mono select-none">+</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                {/* Add-on 1 */}
                <div className="relative p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-300/80 dark:border-neutral-800 flex flex-col justify-between space-y-3 shadow-xs">
                  <span className="absolute -top-1.5 -left-1.5 text-red-500 font-light text-xs font-mono select-none">+</span>
                  <span className="absolute -bottom-1.5 -right-1.5 text-red-500 font-light text-xs font-mono select-none">+</span>
                  <div className="space-y-1 text-left">
                    <span className="text-xs  text-neutral-900 dark:text-white block">
                      {t('plans.addon1Title')}
                    </span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 block leading-relaxed">
                      {t('plans.addon1Sub')}
                    </span>
                  </div>
                  <Link
                    href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit py-1.5 px-4 rounded-full border border-neutral-900 dark:border-white text-neutral-900 dark:text-white text-center text-[10px]  uppercase tracking-wider hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 inline-block"
                  >
                    {t('plans.contactSales')}
                  </Link>
                </div>

                {/* Add-on 2 */}
                <div className="relative p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-300/80 dark:border-neutral-800 flex flex-col justify-between space-y-3 shadow-xs">
                  <span className="absolute -top-1.5 -left-1.5 text-red-500 font-light text-xs font-mono select-none">+</span>
                  <span className="absolute -bottom-1.5 -right-1.5 text-red-500 font-light text-xs font-mono select-none">+</span>
                  <div className="space-y-1 text-left">
                    <span className="text-xs  text-neutral-900 dark:text-white block">
                      {t('plans.addon2Title')}
                    </span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 block leading-relaxed">
                      {t('plans.addon2Sub')}
                    </span>
                  </div>
                  <Link
                    href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit py-1.5 px-4 rounded-full border border-neutral-900 dark:border-white text-neutral-900 dark:text-white text-center text-[10px]  uppercase tracking-wider hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 inline-block"
                  >
                    {t('plans.tryIt')}
                  </Link>
                </div>

                {/* Add-on 5: Persönlicher Visualisierer für Sie */}
                <div className="relative p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-300/80 dark:border-neutral-800 flex flex-col justify-between space-y-3 shadow-xs">
                  <span className="absolute -top-1.5 -left-1.5 text-red-500 font-light text-xs font-mono select-none">+</span>
                  <span className="absolute -bottom-1.5 -right-1.5 text-red-500 font-light text-xs font-mono select-none">+</span>
                  <div className="space-y-1 text-left">
                    <span className="text-xs  text-neutral-900 dark:text-white block">
                      {t('plans.addon5Title')}
                    </span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 block leading-relaxed">
                      {t('plans.addon5Sub')}
                    </span>
                  </div>
                  <Link
                    href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit py-1.5 px-4 rounded-full border border-neutral-900 dark:border-white text-neutral-900 dark:text-white text-center text-[10px]  uppercase tracking-wider hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 inline-block"
                  >
                    {t('plans.contactSales')}
                  </Link>
                </div>

                {/* Add-on 3 */}
                <div className="relative p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-300/80 dark:border-neutral-800 flex flex-col justify-between space-y-3 shadow-xs">
                  <span className="absolute -top-1.5 -left-1.5 text-red-500 font-light text-xs font-mono select-none">+</span>
                  <span className="absolute -bottom-1.5 -right-1.5 text-red-500 font-light text-xs font-mono select-none">+</span>
                  <div className="space-y-1 text-left">
                    <span className="text-xs  text-neutral-900 dark:text-white block">
                      {t('plans.addon3Title')}
                    </span>
                  </div>
                  <Link
                    href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit py-1.5 px-4 rounded-full border border-neutral-900 dark:border-white text-neutral-900 dark:text-white text-center text-[10px]  uppercase tracking-wider hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 inline-block"
                  >
                    {t('plans.contactSales')}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <FooterSection />
    </div>
  )
}
