'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ManufacturerHeader } from '@/components/manufacturer/manufacturer-header'
import { FooterSection } from '@/components/footer-section'
import { ViewerShowcase } from '@/components/research-viewers/viewer-showcase'
import { Check, ExternalLink } from 'lucide-react'

// ── Corner square markers (TYPUS brand pattern in black) ─────────────────
function CornerSquares({ color = '#000000', size = 'w-2 h-2' }: { color?: string; size?: string }) {
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
    heroLabel:      isDe ? 'Produktlistung' : 'Product Listing',
    heroTitle:      isDe ? 'Ihre Produkte. Direkt im Fokus.' : 'Your Products. Directly in Focus.',
    heroSubtitle:   isDe
      ? 'Mehr Sichtbarkeit. Mehr Nachfrage. Neue Geschäftskontakte.'
      : 'More Visibility. More Demand. New Business Contacts.',
    heroDesc:       isDe
      ? 'Präsentieren Sie Ihre Produkte genau dort, wo Architektinnen und Architekten Materialentscheidungen treffen – direkt im KI-gestützten Visualisierungsprozess von TYPUS. Automatische Produktempfehlungen, messbare Sichtbarkeit und konkrete Leads für Ihren Vertrieb.'
      : 'Present your products exactly where architects make material decisions – directly in the AI-assisted visualization process of TYPUS. Automated product recommendations, measurable visibility and concrete leads for your sales team.',
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
    featuresTitle:  isDe ? 'Sichtbarkeit, Performance & neue Geschäftskontakte.' : 'Visibility, Performance & New Business Contacts.',
    features: [
      {
        num: '01',
        title: isDe ? 'Dynamische Produktlistung' : 'Dynamic Product Listing',
        desc:  isDe
          ? 'Ihre Produkte werden automatisch und kontextbezogen bei passenden Materialanfragen von Architekturbüros vorgeschlagen.'
          : 'Your products are automatically and contextually recommended for matching material queries from architecture firms.',
      },
      {
        num: '02',
        title: isDe ? 'KI-gestützte Produktempfehlungen' : 'AI-Assisted Product Recommendations',
        desc:  isDe
          ? 'Ihre Produkte erscheinen direkt im Visualisierungsprozess – genau dort, wo Architektinnen und Architekten Materialentscheidungen treffen.'
          : 'Your products appear directly in the visualization process – right where architects make material decisions.',
      },
      {
        num: '03',
        title: isDe ? 'Gezielte Herstellerpräsenz' : 'Targeted Manufacturer Presence',
        desc:  isDe
          ? 'Erreichen Sie relevante Architekturbüros direkt im digitalen Planungs- und Entwurfsprozess.'
          : 'Reach relevant architecture firms directly in the digital design and planning process.',
      },
      {
        num: '04',
        title: isDe ? 'Performance-Monitoring' : 'Performance Monitoring',
        desc:  isDe
          ? 'Verfolgen Sie die Sichtbarkeit, Reichweite und tatsächliche Nutzung Ihrer Produkte anhand relevanter Kennzahlen.'
          : 'Track the visibility, reach, and actual usage of your products using relevant metrics.',
      },
      {
        num: '05',
        title: isDe ? 'Transparente Produktnachfrage' : 'Transparent Product Demand',
        desc:  isDe
          ? 'Erhalten Sie Einblicke, welche Ihrer Produkte von Architekturbüros in Visualisierungen eingesetzt werden.'
          : 'Gain insights into which of your products are used by architecture firms in visualizations.',
      },
      {
        num: '06',
        title: isDe ? 'Direkte Leadgenerierung' : 'Direct Lead Generation',
        desc:  isDe
          ? 'Identifizieren Sie Architekturbüros, die Ihre Produkte verwenden, und nutzen Sie verfügbare Kontaktdaten für die gezielte Geschäftsanbahnung.'
          : 'Identify architecture firms that use your products and utilize available contact details for targeted business development.',
      },
    ],

    // How it works
    howLabel:       isDe ? 'So funktioniert es' : 'How it works',
    howTitle:       isDe ? 'In 3 Schritten zu mehr Sichtbarkeit.' : 'In 3 steps to more visibility.',
    steps: [
      {
        num: '01',
        title: isDe ? 'Produktdaten bereitstellen' : 'Provide Product Data',
        desc:  isDe
          ? 'Sie stellen uns Ihre Produkt- und Materialdaten zur Verfügung. Wir übernehmen die Aufbereitung für die KI-gestützte Integration.'
          : 'You provide us with your product and material data. We handle the processing for AI-assisted integration.',
      },
      {
        num: '02',
        title: isDe ? 'Integration & Listung' : 'Integration & Listing',
        desc:  isDe
          ? 'Ihre Produkte werden in das KI-Modell integriert und dynamisch in passenden Visualisierungskontexten vorgeschlagen.'
          : 'Your products are integrated into the AI model and dynamically suggested in matching visualization contexts.',
      },
      {
        num: '03',
        title: isDe ? 'Performance messen & Kontakte gewinnen' : 'Measure Performance & Gain Leads',
        desc:  isDe
          ? 'Über Ihr Dashboard erhalten Sie Einblicke in Produktnutzung, Sichtbarkeit und relevante Architekturbüros – als Grundlage für neue Geschäftskontakte.'
          : 'Access insights into product usage, visibility, and relevant architecture firms via your dashboard – as the foundation for new business contacts.',
      },
    ],

    // Pricing
    pricingLabel:   isDe ? 'Transparente Konditionen' : 'Transparent conditions',
    pricingTitle:   isDe ? 'Dynamische Produktlistung' : 'Dynamic Product Listing',
    pricingDesc:    isDe
      ? 'Ihre Produkte werden automatisch und kontextbezogen bei passenden Material- und Produktanfragen von Architekturbüros innerhalb des KI-gestützten Visualisierungsprozesses vorgeschlagen.'
      : 'Your products are automatically and contextually recommended for matching material and product queries from architecture firms within the AI-assisted visualization process.',
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
    pricingCta:     isDe ? 'Mehr erfahren' : 'Learn More',
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
          ? 'Alle Details zu unseren Leistungspaketen und Konditionen finden Sie auf unserer Leistungsseite.'
          : 'All details regarding our service packages and terms can be found on our Services page.',
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
      <ManufacturerHeader />

      <main>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <div className="h-10 md:h-16" />
        <section className="relative mx-auto max-w-6xl px-6 md:px-10 py-4">
          <CornerSquares />

          <div className="max-w-4xl px-2 pb-4 space-y-6">
            {/* Label */}
            <p className="text-xs tracking-widest uppercase text-neutral-500 font-medium">
              {t.heroLabel}
            </p>

            {/* Headline block — bold + light, same large size */}
            <div>
              <h1 className="heading-primary">
                {t.heroTitle}
              </h1>
              <h2 className="heading-primary text-neutral-500 font-normal">
                {t.heroSubtitle}
              </h2>
              {t.heroDesc && (
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed max-w-2xl font-normal">
                  {t.heroDesc}
                </p>
              )}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:hello@typus.ai`}
                className="inline-flex h-9 items-center justify-center rounded-md bg-black px-6 text-xs tracking-widest uppercase text-white transition-colors hover:bg-neutral-800"
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
            <p className="text-xs tracking-widest uppercase text-neutral-500 font-medium">
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
              <p className="text-xs tracking-widest uppercase text-neutral-500 font-medium">
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
                    <span className="block text-xs font-mono text-neutral-400 font-medium">
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
            <p className="text-xs tracking-widest uppercase text-neutral-500 font-medium">
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
                      <span className="block text-3xl font-light text-neutral-900">
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
            {/* Left: label + title + description + CTAs */}
            <div className="space-y-4">
              <p className="text-xs tracking-widest uppercase text-neutral-500 font-medium">
                {t.pricingLabel}
              </p>
              <h2 className="heading-primary">
                {t.pricingTitle}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {t.pricingDesc}
              </p>
              {/* CTAs */}
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href={`/${locale}/for-manufacturers/pricing`}
                  className="inline-flex h-9 items-center justify-center rounded-md bg-black px-6 text-xs tracking-widest uppercase text-white transition-colors hover:bg-neutral-800 text-center"
                >
                  {t.pricingCta}
                </Link>
                <Link
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-black px-6 text-xs tracking-widest uppercase transition-colors hover:bg-black hover:text-white text-center"
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
                      className="shrink-0 mt-0.5 text-neutral-900"
                      style={{ width: 14, height: 14 }}
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
            <p className="text-xs tracking-widest uppercase text-neutral-500 font-medium">
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
                      <span className="text-sm  text-neutral-900 group-hover:text-neutral-600 transition-colors">
                        {faq.q}
                      </span>
                      <span
                        className="shrink-0 text-lg font-light text-neutral-900 transition-transform"
                        style={{
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
          <p className="text-xs tracking-widest uppercase text-neutral-500 font-medium">
            {isDe ? 'Jetzt starten' : 'Get started'}
          </p>
          <h2 className="heading-primary">
            {isDe
              ? 'Bereit, Ihren Konfigurator live zu schalten?'
              : 'Ready to go live with your configurator?'}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`mailto:hello@typus.ai`}
              className="inline-flex h-9 items-center justify-center rounded-md bg-black px-6 text-xs tracking-widest uppercase text-white transition-colors hover:bg-neutral-800"
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
