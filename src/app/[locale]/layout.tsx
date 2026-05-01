import { ThemeProvider } from '@/components/theme-provider'
import { routing } from '@/i18n/routing'
import type { Metadata, Viewport } from 'next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import BeforeYouGoPopup from '@/components/before-you-go-popup'
import './globals.css'



const logoFont = localFont({
  src: [
    {
      path: '../../../public/fonts/soyuz-grotesk/Soyuz Grotesk Bold.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-logo-font',
})

const ftCalhern = localFont({
  src: [
    {
      path: '../../../public/fonts/PPFragment/PPFragment-TextRegular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-ft-calhern',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://typus.ai'),
  title: {
    default:
      'Typus AI - AI-Powered Architectural Visualization & Design Platform',
    template: '%s | Typus AI',
  },
  description:
    'Transform your architectural designs with AI. Typus AI preserves structure while creating photorealistic visualizations from CAD files, sketches, and 3D models. Professional AI rendering for architects.',
  keywords: [
    'AI architecture',
    'architectural visualization',
    'CAD to render',
    'AI design',
    'building visualization',
    'architectural rendering',
    'AI powered design',
    'photorealistic rendering',
    '3D visualization',
    'architectural AI',
    'design automation',
    'building design AI',
  ],
  authors: [{ name: 'Typus AI', url: 'https://typus.ai' }],
  creator: 'Typus AI',
  publisher: 'Typus AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon-32x32.png',
    apple: [
      {
        url: '/apple-touch-icon.png',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typus.ai',
    siteName: 'Typus AI',
    title: 'Typus.ai – AI Rendering for Architects',
    description:
      'Transform sketches, CAD and 3D models into high-end architectural renders in seconds.',
    images: [
      {
        url: 'https://typus.ai/preview-image.png',
        width: 1200,
        height: 630,
        alt: 'Typus.ai – AI Rendering for Architects',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TypusAI',
    creator: '@TypusAI',
    title: 'Typus.ai – AI Rendering for Architects',
    description:
      'Transform sketches, CAD and 3D models into high-end architectural renders in seconds.',
    images: ['https://typus.ai/preview-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://typus.ai',
  },
  category: 'Technology',
  classification: 'AI Software',
  referrer: 'origin-when-cross-origin',
}

export const viewport: Viewport = {
  maximumScale: 1,
  initialScale: 1,
  userScalable: false,
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <html
      lang='en'
      className={`${ftCalhern.variable} ${logoFont.variable} antialiased max-md:overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        /> */}
        <link rel='dns-prefetch' href='https://app.typus.ai' />
        <link
          rel='preload'
          href={'row-1-2-3/commercial building.png'}
          as='image'
        />
        <link rel='preload' href='/logo/typus_logo_red_transp.png' as='image' />
        <meta name='theme-color' content='#ff3636' />
        <meta name='msapplication-TileColor' content='#ff3636' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
        {/* 
          OLD TRACKING CODE (Commented for reference)
          <script id="gtm-consent-mode" dangerouslySetInnerHTML={{ __html: \`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent', 'default', { 'ad_storage': 'denied', 'analytics_storage': 'denied', 'ad_user_data': 'denied', 'ad_personalization': 'denied', 'wait_for_update': 500 });\` }} />
          <script id="gtm-script" dangerouslySetInnerHTML={{ __html: \`!function(){"use strict";...}();\` }} />
          <script id="google-ads-gtag" dangerouslySetInnerHTML={{ __html: \`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-17657716865');\` }} />
        */}
        {/* 1. DATA LAYER & ATTRIBUTION CAPTURE (Must be absolute first) */}
        <script
          id="capture-params"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              (function() {
                try {
                  const urlParams = new URLSearchParams(window.location.search);
                  const params = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_campaign_name', 'gad_source', 'gad_campaignid', 'stapeUserId'];
                  
                  const getCookie = (name) => document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
                  
                  params.forEach(param => {
                    let value = urlParams.get(param);
                    if (!value) value = getCookie(param);
                    if (value) {
                      document.cookie = param + '=' + value + '; path=/; domain=.typus.ai; max-age=7776000; SameSite=Lax';
                    }
                  });

                  // Ensure Stape ID is always synced
                  const sUid = getCookie('stapeUserId');
                  if (sUid) {
                    document.cookie = 'stapeUserId=' + sUid + '; path=/; domain=.typus.ai; max-age=7776000; SameSite=Lax';
                  }
                } catch (e) { console.error('Tracking capture error:', e); }
              })();
            `
          }}
        />
        {/* 2. GOOGLE TRACKING INITIALIZATION */}
        <script
          id="gtm-init"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag(){dataLayer.push(arguments);}
              
              // Consent Mode Default
              gtag('consent', 'default', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'wait_for_update': 1500
              });

              // Explicitly signal consent to unblock components (like Thank You page)
              window.dataLayer.push({ 
                event: 'cookie_consent_update', 
                analytics_storage: 'granted',
                ad_storage: 'granted'
              });

              // Safeguard: Re-signal granted status after a short delay to ensure GTM overrides don't stick
              setTimeout(function() {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'granted'
                });
                console.log("🛡️ Persistence Layer: Consent re-verified as GRANTED");
              }, 2500);

              gtag('js', new Date());
              gtag('config', 'AW-17657716865', { 'send_page_view': false });
              
              // GTM / Stape Loader
              (function(){"use strict";function l(e){for(var t=e,r=0,n=document.cookie.split(";");r<n.length;r++){var o=n[r].split("=");if(o[0].trim()===t)return o[1]}}function s(e){return localStorage.getItem(e)}function u(e){return window[e]}function A(e,t){e=document.querySelector(e);return t?null==e?void 0:e.getAttribute(t):null==e?void 0:e.textContent}var e=window,t=document,r="script",n="dataLayer",o="https://ss.typus.ai",a="https://load.ss.typus.ai",i="d75patrvfsjx",c="c001u=EQ5OISI%2FWTZKJz8sMT46Rw5XQUhHVBAPRR4KFgMBWgAR",g="stapeUserId",v="",E="",d=!1;try{var d=!!g&&(m=navigator.userAgent,!!(m=new RegExp("Version/([0-9._]+)(.*Mobile)?.*Safari.*").exec(m)))&&16.4<=parseFloat(m[1]),f="stapeUserId"===g,I=d&&!f?function(e,t,r){void 0===t&&(t="");var n={cookie:l,localStorage:s,jsVariable:u,cssSelector:A},t=Array.isArray(t)?t:[t];if(e&&n[e])for(var o=n[e],a=0,i=t; a<i.length; a++){var c=i[a],c=r?o(c,r):o(c);if(c)return c}else console.warn("invalid uid source",e)}(g,v,E):void 0;d=d&&(!!I||f)}catch(e){console.error(e)}var m=e,g=(m[n]=m[n]||[],m[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),I&&m[n].push({bi:I}),t.getElementsByTagName(r)[0]),v=I?"&bi="+encodeURIComponent(I):"",E=t.createElement(r),f=(d&&(i=8<i.length?i.replace(/([a-z]{8}$)/,"kp$1"):"kp"+i),!d&&a?a:o);E.async=!0,E.src=f+"/"+i+".js?"+c+v,null!=(e=g.parentNode)&&e.insertBefore(E,g)}());
            `
          }}
        />
        {/* 3. EXTERNAL LIBRARIES */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17657716865" />
        <script
          id="tracking-debug"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                console.log("🚀 ANTIGRAVITY TRACKING DEBUG STARTED\\n");

                // -----------------------------
                // 1. CHECK URL PARAMS
                // -----------------------------
                const params = new URLSearchParams(window.location.search);
                const utms = ["utm_source", "utm_medium", "utm_campaign", "gclid", "stapeUserId"];

                console.log("🔍 Checking URL params...");
                utms.forEach((param) => {
                  const val = params.get(param);
                  if (val) {
                    console.log("✅ " + param + ":", val);
                  } else {
                    console.warn("❌ Missing " + param);
                  }
                });

                // -----------------------------
                // 2. CHECK COOKIES
                // -----------------------------
                console.log("\\n🍪 Checking cookies...");
                utms.forEach((param) => {
                  const match = document.cookie.match(new RegExp(param + "=([^;]+)"));
                  if (match) {
                    console.log("✅ Cookie " + param + ":", match[1]);
                  } else {
                    console.warn("❌ Cookie missing " + param);
                  }
                });

                // -----------------------------
                // 3. CHECK DATALAYER
                // -----------------------------
                console.log("\\n📦 Checking dataLayer...");
                if (window.dataLayer && window.dataLayer.length) {
                  console.log("✅ dataLayer events: " + window.dataLayer.length);
                  console.log(window.dataLayer);
                } else {
                  console.error("❌ dataLayer empty or not found");
                }

                // -----------------------------
                // 4. CHECK GTAG
                // -----------------------------
                console.log("\\n📡 Checking gtag...");
                if (typeof gtag === "function") {
                  console.log("✅ gtag is defined");
                } else {
                  console.error("❌ gtag NOT found");
                }

                // -----------------------------
                // 5. CHECK CONSENT
                // -----------------------------
                console.log("\\n🔐 Checking consent state...");
                try {
                  gtag("get", "G-QR6YQP6P8N", "consent", (consent) => {
                    console.log("Consent State:", consent);
                    if (!consent) {
                      console.warn("⚠️ Consent object not returned (GA4 not yet initialized)");
                      return;
                    }
                    if (consent.analytics_storage !== "granted") {
                      console.warn("❌ analytics_storage NOT granted");
                    } else {
                      console.log("✅ analytics_storage granted");
                    }
                  });
                } catch (e) {
                  console.warn("⚠️ Cannot read consent:", e.message);
                }

                // -----------------------------
                // 6. CHECK GA4 REQUEST
                // -----------------------------
                console.log("\\n🌐 Monitoring GA4 network calls...");
                
                const checkEntry = (entry) => {
                  const isTracking = entry.name.includes("collect?v=2") || entry.name.includes("collect?v=1") || entry.name.includes("ss.typus.ai");
                  if (isTracking) {
                    try {
                      const url = new URL(entry.name);
                      const isEvent = url.searchParams.has('en');
                      
                      if (isEvent || entry.name.includes("collect")) {
                        console.log("📡 Tracking Request Found:", entry.name);
                        
                        const hasAttribution = url.searchParams.has('utm_source') || 
                                             url.searchParams.has('gclid') || 
                                             url.searchParams.has('gclaw') || 
                                             url.searchParams.has('bi') ||
                                             entry.name.includes('utm_source');
                        
                        const hasSession = url.searchParams.has('sid') || url.searchParams.has('ga_session_id') || url.searchParams.has('ga_sid');
                        const hasClientId = url.searchParams.has('cid') || url.searchParams.has('ga_client_id') || url.searchParams.has('ga_cid');

                        if (hasAttribution) {
                          console.log("✅ Attribution data detected");
                        } else {
                          console.warn("❌ No attribution data in this URL (Normal for repeat hits)");
                        }

                        if (isEvent && !hasSession && !hasClientId) {
                          console.warn("⚠️ Event detected but Session/Client IDs missing from URL (Check POST body)");
                        } else if (hasSession && hasClientId) {
                          console.log("✅ Session & Client IDs detected");
                        }
                      }
                    } catch (e) { /* Invalid URL for some reason */ }
                  }
                };

                // Catch existing entries
                performance.getEntriesByType("resource").forEach(checkEntry);

                // Observe new entries
                const observer = new PerformanceObserver((list) => {
                  list.getEntries().forEach(checkEntry);
                });

                observer.observe({ type: "resource", buffered: true });

                // -----------------------------
                // 7. FINAL DIAGNOSIS
                // -----------------------------
                console.log("\\n🧠 FINAL DIAGNOSIS:");
                console.log(\`
If First User Source is missing:

1. session_start fired before UTM capture ❌
2. consent updated too late ❌
3. GA4 config fired before params ❌
4. server-side tagging dropped UTMs ❌

✔ Fix order:
capture params → consent → config → session_start
\`);

                console.log("\\n✅ ANTIGRAVITY DEBUG COMPLETE");
              })();
            `
          }}
        />
      </head>
      <body
        className={`bg-[#fcfcfd] text-gray-900 transition-colors duration-300 max-md:overflow-x-hidden ${logoFont.variable}`}
        /* suppressHydrationWarning is needed because browser extensions (like ColorZilla) 
           inject attributes that cause Next.js hydration mismatches. */
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://load.ss.typus.ai/ns.html?id=GTM-W2MLJGLN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            {children}
            <BeforeYouGoPopup />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
      <script id="vtag-ai-js" async src="https://r2.leadsy.ai/tag.js" data-pid="91T92U78hCpk9Nyg" data-version="062024"></script>
    </html>
  )
}
