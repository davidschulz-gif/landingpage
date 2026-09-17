'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { ViewerShowcase } from '@/components/research-viewers/viewer-showcase'
import { Check, ExternalLink, ArrowRight, Box, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react'

// ── Corner square markers (TYPUS brand pattern in black) ─────────────────
function CornerSquares({ color = '#000000', size = 'w-2.5 h-2.5' }: { color?: string; size?: string }) {
  return (
    <>
      <span
        className={`absolute -top-1 -left-1 ${size} pointer-events-none select-none z-20`}
        style={{ backgroundColor: color }}
      />
      <span
        className={`absolute -top-1 -right-1 ${size} pointer-events-none select-none z-20`}
        style={{ backgroundColor: color }}
      />
      <span
        className={`absolute -bottom-1 -left-1 ${size} pointer-events-none select-none z-20`}
        style={{ backgroundColor: color }}
      />
      <span
        className={`absolute -bottom-1 -right-1 ${size} pointer-events-none select-none z-20`}
        style={{ backgroundColor: color }}
      />
    </>
  )
}

export default function EmbeddedConfiguratorLandingPage() {
  const locale = useLocale()
  const isDe = locale === 'de'
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const CALENDAR_URL = 'https://calendar.app.google/q85ip5B1L6vwHs1w7'
  const FONT = 'Arial, Helvetica, sans-serif'

  const t = {
    // Hero
    heroTag:        isDe ? 'EU FFPLUS RESEARCH PROGRAMME • DIGITALE MATERIALFÖRDERUNG' : 'EU FFPLUS RESEARCH PROGRAMME • DIGITAL MATERIAL FUNDING',
    heroLabel:      isDe ? 'Eingebetteter TYPUS-Konfigurator' : 'Embedded TYPUS Configurator',
    heroTitle:      isDe ? 'Digitalisierung leicht gemacht.' : 'Digitisation made simple.',
    heroSubtitle:   isDe
      ? 'Ein Materialkonfigurator, der Ihre Kunden direkt auf Ihrer Website von Ihren Produkten begeistert – ohne Ihren Auftritt zu verlassen.'
      : 'A material editor that lets your clients customise your products without ever leaving your site.',
    cta1:           isDe ? 'Kontakt aufnehmen' : 'Get in touch',
    cta2:           isDe ? 'Demo buchen' : 'Book a demo',

    // Try it
    tryLabel:       isDe ? 'Selbst ausprobieren' : 'Try it for yourself',
    tryTitle:       isDe ? 'So sieht der Konfigurator auf Ihrer Website aus.' : 'See how the configurator looks on your site.',
    tryDesc:        isDe
      ? 'Klicken Sie sich durch Kataloge, Flyouts und Texturzuweisungen – genau so, wie Ihre Besucher es erleben.'
      : 'Click through catalogues, flyouts and texture assignments — exactly as your visitors will experience it.',

    // Features
    featuresLabel:  isDe ? 'Was Sie erhalten' : 'What you get',
    featuresTitle:  isDe ? 'Vorteile auf einen Blick.' : 'Benefits at a glance.',
    features: [
      {
        num: '01',
        title: isDe ? '1-Klick-Einbettung' : '1-click embed',
        desc:  isDe
          ? 'Standard iFrame oder JS-Snippet – in jede Website oder jedes CMS integrierbar (WordPress, Webflow, Shopify, Typo3 …).'
          : 'Standard iframe or JS snippet — integrates into any website or CMS (WordPress, Webflow, Shopify, Typo3 …).',
      },
      {
        num: '02',
        title: isDe ? 'Echtzeit-KI-Rendering' : 'Real-time AI rendering',
        desc:  isDe
          ? 'Kombiniert 3D-Modelle mit modernster KI für sofortige fotorealistische Visualisierungen.'
          : 'Combines 3D models with cutting-edge AI for instant photorealistic visualisations.',
      },
      {
        num: '03',
        title: isDe ? 'Echte Hersteller-Materialien' : 'Authentic manufacturer materials',
        desc:  isDe
          ? 'Ihre PBR-Texturen, Farben und Formate werden exakt und maßstabsgetreu digitalisiert.'
          : 'Your PBR textures, colours and formats digitised precisely to scale.',
      },
      {
        num: '04',
        title: isDe ? 'Lead-Generierung & Spezifikation' : 'Lead generation & specification',
        desc:  isDe
          ? 'Planende können Entwürfe speichern, Materiallisten exportieren und Muster anfordern.'
          : 'Designers can save schemes, export schedules and request physical samples.',
      },
      {
        num: '05',
        title: isDe ? 'Cloud-basiert & mobiloptimiert' : 'Cloud-powered & mobile responsive',
        desc:  isDe
          ? 'Keine Installation erforderlich. Läuft flüssig auf Desktop, Tablet und Smartphone.'
          : 'No installation needed. Runs smoothly on desktop, tablet and smartphone.',
      },
      {
        num: '06',
        title: isDe ? 'White-Label & CI-Anpassung' : 'White-label & custom branding',
        desc:  isDe
          ? 'Farben, Typografie und Logos passend zu Ihrem Corporate Design.'
          : 'Colours, typography and logos matched to your corporate identity.',
      },
    ],

    // How it works
    howLabel:       isDe ? 'So funktioniert es' : 'How it works',
    howTitle:       isDe ? 'In 3 Schritten live.' : 'Live in 3 steps.',
    steps: [
      {
        num: '01',
        title: isDe ? 'Materialien bereitstellen' : 'Provide your materials',
        desc:  isDe
          ? 'Senden Sie uns Texturen, Datenblätter oder Produktkataloge. Unser Team digitalisiert Ihre Oberflächen mit PBR-Präzision.'
          : 'Share your textures, spec sheets or product catalogues. Our team digitises surfaces with PBR precision.',
      },
      {
        num: '02',
        title: isDe ? 'Snippet einbinden' : 'Embed the snippet',
        desc:  isDe
          ? 'Sie erhalten ein maßgeschneidertes iFrame- oder Script-Snippet, das in wenigen Minuten auf Ihrer Website live ist.'
          : 'Receive a tailored iframe or script snippet — live on your site in minutes.',
      },
      {
        num: '03',
        title: isDe ? 'Planer begeistern' : 'Engage architects',
        desc:  isDe
          ? 'Ihre Website wird zum aktiven Planungswerkzeug mit messbaren Neukontakten.'
          : 'Your website transforms into an active design tool with measurable new leads.',
      },
    ],

    // Pricing
    pricingLabel:   isDe ? 'Transparente Konditionen' : 'Transparent pricing',
    pricingTitle:   isDe ? 'Eingebetteter TYPUS-Konfigurator' : 'Embedded TYPUS Configurator',
    price:          '350 €',
    perMonth:       isDe ? '/ Monat' : '/ month',
    includes: [
      isDe ? 'Vollständiger Web-Konfigurator (iFrame / Widget)' : 'Full web configurator (iFrame / Widget)',
      isDe ? 'Individuelle Material- und Produktauswahl' : 'Custom material & product selection',
      isDe ? 'Echtzeit-3D & fotorealistische KI-Renderings' : 'Real-time 3D & photorealistic AI renderings',
      isDe ? 'Unbegrenzte Besucher-Sitzungen' : 'Unlimited visitor sessions',
      isDe ? 'Monatliches KI-Generierungskontingent' : 'Monthly AI generation quota',
      isDe ? 'Lead-Erfassung & Spezifikations-Download' : 'Lead capture & spec sheet downloads',
      isDe ? 'Updates, Wartung & Hosting inklusive' : 'Updates, maintenance & hosting included',
      isDe ? 'Prioritärer technischer Support' : 'Priority technical support',
    ],
    pricingCta:     isDe ? 'Konfigurator anfordern' : 'Request configurator',
    consultCta:     isDe ? 'Beratungsgespräch buchen' : 'Book a consultation',

    // FAQ
    faqLabel:       'FAQ',
    faqTitle:       isDe ? 'Häufig gestellte Fragen.' : 'Frequently asked questions.',
    faqs: [
      {
        q: isDe ? 'Wie aufwendig ist die technische Einbindung?' : 'How complex is the technical implementation?',
        a: isDe
          ? 'Die Einbindung erfolgt über einen Standard-HTML-iFrame oder ein JS-Snippet. In den meisten CMS dauert das Setup unter 10 Minuten.'
          : 'Embedding uses a standard HTML iframe or JS snippet. Setup takes less than 10 minutes in most CMS.',
      },
      {
        q: isDe ? 'Können wir eigene 3D-Modelle und Texturen nutzen?' : 'Can we use our own 3D models and textures?',
        a: isDe
          ? 'Ja. Wir unterstützen gängige CAD-, BIM- und 3D-Formate (glTF, OBJ, FBX) sowie hochauflösende PBR-Materialien.'
          : 'Yes. We support common CAD, BIM and 3D formats (glTF, OBJ, FBX) alongside high-resolution PBR textures.',
      },
      {
        q: isDe ? 'Gibt es eine Mindestvertragslaufzeit?' : 'Is there a minimum contract duration?',
        a: isDe
          ? 'Der Service wird monatlich mit 350 € abgerechnet — ohne versteckte Einrichtungsgebühren.'
          : 'The service is billed monthly at 350 € — no hidden setup fees.',
      },
      {
        q: isDe ? 'Ist der Konfigurator mobilfähig?' : 'Is the configurator mobile responsive?',
        a: isDe
          ? 'Ja, er passt sich automatisch Smartphones, Tablets und großen Desktop-Monitoren an.'
          : 'Yes, it adjusts seamlessly across smartphones, tablets and large desktop screens.',
      },
    ],
  }

  return (
    <div className="research-page-scope relative w-full bg-[#FFFFFF] dark:bg-neutral-950 text-neutral-900 dark:text-white min-h-screen font-sans selection:bg-black selection:text-white" style={{ fontFamily: FONT }}>
      <NavbarDemo />

      <main className="max-w-[1540px] mx-auto px-4 sm:px-6 md:px-10 space-y-20 md:space-y-28 pt-36 pb-28">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative py-8 text-center flex flex-col items-center justify-center space-y-8">
          
          {/* Top Specification Badge Tag */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs text-xs">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600 dark:text-neutral-300 font-semibold">
              {t.heroTag}
            </span>
          </div>

          {/* Main Hero Card Container Box with Corner Squares (Black) */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800 shadow-sm max-w-4xl w-full flex flex-col items-center justify-center space-y-6">
            <CornerSquares color="#000000" />

            <div className="space-y-3 max-w-3xl mx-auto">
              <p className="text-xs tracking-widest uppercase text-blue-600 dark:text-blue-400 font-bold">
                {t.heroLabel}
              </p>
              <h1 className="heading-primary text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
                {t.heroTitle}
              </h1>
              <p className="subheading-primary text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                {t.heroSubtitle}
              </p>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`mailto:info@typus.app`}
                className="inline-flex h-11 items-center justify-center rounded-full bg-black dark:bg-white px-8 text-xs font-bold tracking-widest uppercase text-white dark:text-black transition-all duration-200 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-md"
              >
                {t.cta1}
              </a>
              <Link
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 justify-center rounded-full border border-neutral-900 dark:border-white px-8 text-xs font-bold tracking-widest uppercase transition-all duration-200 text-neutral-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <span>{t.cta2}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── TRY IT (LIVE INTERACTIVE SHOWCASE) ───────────────────────────── */}
        <section className="py-10 border-t border-neutral-200/80 dark:border-neutral-800 space-y-8">
          
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
            <span>[ SECTION 01 // INTERAKTIVE LIVE-DEMO ]</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1">
              <Box className="w-3.5 h-3.5" /> LIVE INTERACTION
            </span>
          </div>

          <div className="relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 space-y-6 shadow-sm">
            <CornerSquares color="#000000" />

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                {t.tryLabel}
              </p>
              <h2 className="heading-primary text-2xl sm:text-3xl">
                {t.tryTitle}
              </h2>
              <p className="subheading-primary text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                {t.tryDesc}
              </p>
            </div>

            {/* Live viewer */}
            <div className="w-full pt-2">
              <ViewerShowcase />
            </div>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────────────────────── */}
        <section className="py-10 border-t border-neutral-200/80 dark:border-neutral-800 space-y-8">
          
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
            <span>[ SECTION 02 // FUNKTIONEN & VORTEILE ]</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> FEATURE MATRIX
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: label + title */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                {t.featuresLabel}
              </p>
              <h2 className="heading-primary text-2xl sm:text-3xl">
                {t.featuresTitle}
              </h2>
            </div>

            {/* Right: feature list in 2 cols */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {t.features.map((f, i) => (
                <div
                  key={i}
                  className="relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs space-y-2 hover:shadow-lg transition"
                >
                  <CornerSquares color="#000000" size="w-2 h-2" />
                  <span className="block text-xs font-mono text-neutral-400 font-semibold">
                    {f.num}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">{f.title}</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
        <section className="py-10 border-t border-neutral-200/80 dark:border-neutral-800 space-y-8">
          
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
            <span>[ SECTION 03 // SCHRITT-FÜR-SCHRITT ]</span>
            <span className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> WORKFLOW
            </span>
          </div>

          <div className="relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 space-y-8 shadow-sm">
            <CornerSquares color="#000000" />

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold">
                {t.howLabel}
              </p>
              <h2 className="heading-primary text-2xl sm:text-3xl">
                {t.howTitle}
              </h2>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {t.steps.map((step, i) => (
                <div key={i} className="relative p-6 rounded-2xl bg-neutral-50/70 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 space-y-3">
                  <span className="block text-4xl font-light text-neutral-900 dark:text-white font-mono">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">{step.title}</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ───────────────────────────────────────────────────────── */}
        <section
          id="pricing"
          className="py-10 border-t border-neutral-200/80 dark:border-neutral-800 space-y-8"
        >
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
            <span>[ SECTION 04 // PREISE & KONDITIONEN ]</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> TRANSPARENT PLAN
            </span>
          </div>

          <div className="relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 md:p-10 space-y-8 shadow-md">
            <CornerSquares color="#000000" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: label + title + price */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                    {t.pricingLabel}
                  </p>
                  <h2 className="heading-primary text-2xl sm:text-3xl">
                    {t.pricingTitle}
                  </h2>
                </div>

                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">{t.price}</span>
                  <span className="text-xs text-neutral-500 font-bold uppercase">{t.perMonth}</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-2">
                  <Link
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-black dark:bg-white px-8 text-xs font-bold tracking-widest uppercase text-white dark:text-black transition-all duration-200 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-md text-center"
                  >
                    {t.pricingCta}
                  </Link>
                  <Link
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-900 dark:border-white px-8 text-xs font-bold tracking-widest uppercase transition-all duration-200 text-neutral-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-center"
                  >
                    {t.consultCta}
                  </Link>
                </div>
              </div>

              {/* Right: includes list */}
              <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-neutral-800 pt-6 lg:pt-0 lg:pl-8">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-4">
                  {isDe ? 'Inkludierte Leistungen:' : 'Included features:'}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-medium text-neutral-800 dark:text-neutral-200">
                      <Check
                        className="shrink-0 mt-0.5 text-blue-600 dark:text-blue-400"
                        style={{ width: 16, height: 16 }}
                        strokeWidth={2.5}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="py-10 border-t border-neutral-200/80 dark:border-neutral-800 space-y-8">
          
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
            <span>[ SECTION 05 // HÄUFIG GESTELLTE FRAGEN ]</span>
            <span className="text-neutral-500 font-mono text-[10px]">FAQ & ANSWERS</span>
          </div>

          <div className="relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 md:p-10 space-y-6 shadow-sm">
            <CornerSquares color="#000000" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 space-y-2">
                <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">
                  {t.faqLabel}
                </p>
                <h2 className="heading-primary text-2xl sm:text-3xl">
                  {t.faqTitle}
                </h2>
              </div>

              <div className="lg:col-span-8 divide-y divide-neutral-200 dark:divide-neutral-800">
                {t.faqs.map((faq, i) => (
                  <div key={i} className="py-4 first:pt-0 last:pb-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                    >
                      <span className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {faq.q}
                      </span>
                      <span
                        className="shrink-0 text-xl font-light text-neutral-900 dark:text-white transition-transform duration-200"
                        style={{
                          transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                      >
                        +
                      </span>
                    </button>
                    {openFaq === i && (
                      <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA STRIP ───────────────────────────────────────────────── */}
        <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800">
          <div className="relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 p-8 sm:p-12 text-center space-y-6 shadow-sm">
            <CornerSquares color="#000000" />

            <p className="text-xs tracking-widest uppercase text-blue-600 dark:text-blue-400 font-bold">
              {isDe ? 'Jetzt starten' : 'Get started'}
            </p>
            <h2 className="heading-primary text-2xl sm:text-3xl max-w-2xl mx-auto">
              {isDe
                ? 'Bereit, Ihren Konfigurator live zu schalten?'
                : 'Ready to go live with your configurator?'}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href={`mailto:info@typus.app`}
                className="inline-flex h-11 items-center justify-center rounded-full bg-black dark:bg-white px-8 text-xs font-bold tracking-widest uppercase text-white dark:text-black transition-all duration-200 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-md"
              >
                {isDe ? 'Kontakt aufnehmen' : 'Get in touch'}
              </a>
              <Link
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 justify-center rounded-full border border-neutral-900 dark:border-white px-8 text-xs font-bold tracking-widest uppercase transition-all duration-200 text-neutral-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <span>{isDe ? 'Demo buchen' : 'Book a demo'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <FooterSection />
    </div>
  )
}
