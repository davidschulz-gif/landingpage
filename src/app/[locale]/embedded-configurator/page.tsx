'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { ViewerShowcase } from '@/components/research-viewers/viewer-showcase'
import { Check, ExternalLink } from 'lucide-react'

// ── Corner square markers (matches TYPUS brand pattern) ──────────────────
function CornerSquares({ color = '#f05a47', size = 'w-2 h-2' }: { color?: string; size?: string }) {
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
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: FONT }}>
      <NavbarDemo />

      <main>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <div className="h-10 md:h-16" />
        <section className="relative mx-auto max-w-6xl px-6 md:px-10 py-4">
          <CornerSquares />

          {/* Offset grid: empty left col on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="hidden md:block" />
            <div className="md:col-span-2 px-2 pb-4 space-y-6">
              {/* Label */}
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: '#f05a47' }}
              >
                {t.heroLabel}
              </p>

              {/* Headline block — bold + light, same large size */}
              <div>
                <h1 className="heading-primary">
                  {t.heroTitle}
                </h1>
                <h2 className="heading-primary">
                  {t.heroSubtitle}
                </h2>
              </div>

              {/* CTA row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`mailto:info@typus.app`}
                  className="inline-flex h-9 items-center justify-center rounded-md border px-6 text-xs tracking-widest uppercase transition-colors hover:bg-black hover:text-white"
                  style={{ borderColor: '#f05a47', color: '#f05a47' }}
                >
                  {t.cta1}
                </a>
                <Link
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-black px-6 text-xs tracking-widest uppercase transition-colors hover:bg-black hover:text-white"
                >
                  {t.cta2}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="h-20 md:h-28" />

        {/* ── TRY IT (tinted background section) ───────────────────────────── */}
        <div
          id="live-preview"
          style={{ backgroundColor: '#f7f5f0' }}
        >
          <div className="h-10" />

          {/* Label row above the bordered section */}
          <div className="relative mx-auto max-w-6xl px-6 md:px-10 pb-3">
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: '#f05a47' }}
            >
              {t.tryLabel}
            </p>
          </div>

          <section className="relative mx-auto max-w-6xl px-6 md:px-10 py-3">
            <CornerSquares />

            <div className="space-y-5">
              {/* Title + desc */}
              <div>
                <h2 className="heading-primary">
                  {t.tryTitle}
                </h2>
                <p className="text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
                  {t.tryDesc}
                </p>
              </div>

              {/* Live viewer */}
              <div className="w-full">
                <ViewerShowcase />
              </div>
            </div>
          </section>

          <div className="h-16" />
        </div>

        {/* ── FEATURES ──────────────────────────────────────────────────────── */}
        <div className="h-20" />
        <section className="relative mx-auto max-w-6xl px-6 md:px-10 py-4">
          <CornerSquares />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left: label + title */}
            <div className="space-y-3">
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: '#f05a47' }}
              >
                {t.featuresLabel}
              </p>
              <h2 className="heading-primary">
                {t.featuresTitle}
              </h2>
            </div>

            {/* Right: feature list in 2 cols */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                {t.features.map((f, i) => (
                  <div key={i} className="space-y-1.5">
                    <span
                      className="block text-xs "
                      style={{ color: '#f05a47' }}
                    >
                      {f.num}
                    </span>
                    <h3 className="text-sm  text-neutral-900">{f.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="h-20" />

        {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
        <div style={{ backgroundColor: '#f7f5f0' }}>
          <div className="h-10" />

          <div className="relative mx-auto max-w-6xl px-6 md:px-10 pb-3">
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: '#f05a47' }}
            >
              {t.howLabel}
            </p>
          </div>

          <section className="relative mx-auto max-w-6xl px-6 md:px-10 py-3">
            <CornerSquares />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Title */}
              <div>
                <h2 className="heading-primary">
                  {t.howTitle}
                </h2>
              </div>

              {/* Steps */}
              <div className="md:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {t.steps.map((step, i) => (
                    <div key={i} className="space-y-2">
                      <span
                        className="block text-3xl "
                        style={{ color: '#f05a47' }}
                      >
                        {step.num}
                      </span>
                      <h3 className="text-sm  text-neutral-900">{step.title}</h3>
                      <p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="h-16" />
        </div>

        {/* ── PRICING ───────────────────────────────────────────────────────── */}
        <div className="h-20" />
        <section
          id="pricing"
          className="relative mx-auto max-w-6xl px-6 md:px-10 py-4"
        >
          <CornerSquares />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Left: label + title + price */}
            <div className="space-y-4">
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: '#f05a47' }}
              >
                {t.pricingLabel}
              </p>
              <h2 className="heading-primary">
                {t.pricingTitle}
              </h2>
              <div className="flex items-baseline gap-1 pt-1">
                <span className="text-5xl font-light">{t.price}</span>
                <span className="text-sm text-neutral-500">{t.perMonth}</span>
              </div>
              {/* CTAs */}
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-md border px-6 text-xs tracking-widest uppercase transition-colors hover:bg-[#f05a47] hover:text-white"
                  style={{ borderColor: '#f05a47', color: '#f05a47' }}
                >
                  {t.pricingCta}
                </Link>
                <Link
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-black px-6 text-xs tracking-widest uppercase transition-colors hover:bg-black hover:text-white"
                >
                  {t.consultCta}
                </Link>
              </div>
            </div>

            {/* Right: includes list */}
            <div className="md:col-span-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                {t.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-neutral-800">
                    <Check
                      className="shrink-0 mt-0.5"
                      style={{ color: '#f05a47', width: 14, height: 14 }}
                      strokeWidth={2.5}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <div className="h-20" />

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <div style={{ backgroundColor: '#f7f5f0' }}>
          <div className="h-10" />

          <div className="relative mx-auto max-w-6xl px-6 md:px-10 pb-3">
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: '#f05a47' }}
            >
              {t.faqLabel}
            </p>
          </div>

          <section className="relative mx-auto max-w-6xl px-6 md:px-10 py-3">
            <CornerSquares />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h2 className="heading-primary">
                  {t.faqTitle}
                </h2>
              </div>

              <div className="md:col-span-2 divide-y divide-neutral-200">
                {t.faqs.map((faq, i) => (
                  <div key={i} className="py-4">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between text-left gap-4 group"
                    >
                      <span className="text-sm  text-neutral-900 group-hover:text-[#f05a47] transition-colors">
                        {faq.q}
                      </span>
                      <span
                        className="shrink-0 text-lg font-light transition-transform"
                        style={{
                          color: '#f05a47',
                          transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                      >
                        +
                      </span>
                    </button>
                    {openFaq === i && (
                      <p className="mt-2 text-xs text-neutral-600 leading-relaxed max-w-xl">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="h-16" />
        </div>

        {/* ── FINAL CTA STRIP ───────────────────────────────────────────────── */}
        <div className="h-20" />
        <section className="relative mx-auto max-w-6xl px-6 md:px-10 py-8 text-center space-y-4">
          <CornerSquares />
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: '#f05a47' }}
          >
            {isDe ? 'Jetzt starten' : 'Get started'}
          </p>
          <h2 className="heading-primary">
            {isDe
              ? 'Bereit, Ihren Konfigurator live zu schalten?'
              : 'Ready to go live with your configurator?'}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`mailto:info@typus.app`}
              className="inline-flex h-9 items-center justify-center rounded-md border px-6 text-xs tracking-widest uppercase transition-colors hover:bg-[#f05a47] hover:text-white"
              style={{ borderColor: '#f05a47', color: '#f05a47' }}
            >
              {isDe ? 'Kontakt aufnehmen' : 'Get in touch'}
            </a>
            <Link
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 justify-center rounded-md border border-black px-6 text-xs tracking-widest uppercase transition-colors hover:bg-black hover:text-white"
            >
              {isDe ? 'Demo buchen' : 'Book a demo'}
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </section>
        <div className="h-20" />

      </main>

      <FooterSection />
    </div>
  )
}
