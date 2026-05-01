'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { appUrl, apiUrl, landingPageUrl } from '@/lib/constants'
import Script from 'next/script'

function ThankYouContent() {
  const t = useTranslations('ThankYou')
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [user, setUser] = useState<any>();

  // Function to report conversion to Google Ads
  const reportGoogleAdsConversion = (userData: any) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17657716865/4ZZwCM3aqK4bEIHB7eNB',
        'value': userData.amount,
        'currency': userData.currency || 'EUR',
        'transaction_id': userData.id || '',
        'user_data': {
          'email': userData.email,
          'phone_number': userData.onboardingData?.phone,
          'address': {
            'first_name': userData.onboardingData?.firstName,
            'last_name': userData.onboardingData?.lastName,
            'city': userData.onboardingData?.city,
            'region': userData.onboardingData?.state,
            'postal_code': userData.onboardingData?.postalCode,
            'country': userData.onboardingData?.country
          }
        }
      });
      console.log('✅ Google Ads Conversion Reported');
    }
  };

  const fetchCheckoutSession = async (sessionId: string) => {
    try {
      const res = await fetch(
        `${apiUrl}/api/subscription/checkout/retrieve/${sessionId}`
      );

      if (!res.ok) throw new Error('Failed to fetch session');

      const data = await res.json();
      if (data && data.session_details) {
        const s = data.session_details;
        setUser({
          name: s?.customer_details?.name,
          email: s?.customer_details?.email,
          phone: s?.customer_details?.phone,
          address: s?.customer_details?.address,
          payment_status: s?.payment_status,
          id: sessionId,
          transaction_id: sessionId,
          amount: (s?.item?.price || 0) / 100,
          currency: s?.item?.currency?.toUpperCase(),
          onboardingData: s?.onboardingData,
          item: {
            item_name: s?.item?.name,
            item_id: s?.item?.product_id,
            price: s?.item?.price / 100,
            quantity: s?.item?.quantity
          },
          plan: s?.item?.name, // Extracting plan name for display
          metadata: s?.metadata // Store metadata for GTM
        });

      }
      return data;
    } catch (error) {
      console.error('❌ Fetch session error:', error);
      return null;
    }
  };

  const pushPurchaseToDataLayer = (data: any) => {
    try {
      if (!user || user?.payment_status !== 'paid') {
        return;
      }

      const executePush = () => {
        const customerName = user?.name || "";
        const firstName = customerName.split(" ").shift() || "";
        const lastName = customerName.split(" ").length > 1 ? customerName.split(" ").pop() : "";

        console.log("GTM PAYLOAD", {
          event: 'purchase',
          user_data: {
            first_name: user?.onboardingData?.firstName,
            last_name: user?.onboardingData?.lastName,
            email: user?.email,
            phone: user?.onboardingData?.phone,
            city: user?.onboardingData?.city,
            country: user?.onboardingData?.country,
            postal_code: user?.onboardingData?.postalCode
          },
          ecommerce: {
            transaction_id: user?.id,
            value: user?.amount,
            currency: user?.currency?.toUpperCase() || 'EUR',
            items: [user?.item]
          },
        })

        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'purchase',
            user_data: {
              first_name: user?.onboardingData?.firstName,
              last_name: user?.onboardingData?.lastName,
              email: user?.email,
              phone: user?.onboardingData?.phone,
              city: user?.onboardingData?.city,
              country: user?.onboardingData?.country,
              postal_code: user?.onboardingData?.postalCode
            },
            ecommerce: {
              transaction_id: user?.id,
              value: user?.amount,
              currency: user?.currency?.toUpperCase() || 'EUR',
              items: [user?.item]
            },
            // Attribution Data
            gclid: user?.metadata?.gclid || "",
            utm_source: user?.metadata?.utm_source || "",
            utm_medium: user?.metadata?.utm_medium || "",
            utm_campaign: user?.metadata?.utm_campaign || "",
            utm_campaign_name: user?.metadata?.utm_campaign_name || "",
            utm_content: user?.metadata?.utm_content || "",
            utm_term: user?.metadata?.utm_term || "",
            gad_source: user?.metadata?.gad_source || "",
            gad_campaignid: user?.metadata?.gad_campaignid || "",
            bi: user?.metadata?.bi || ""
          });

          console.log('✅ GTM Purchase Event Pushed with User Data');
          reportGoogleAdsConversion(user);
        } else {
          console.warn('❌ dataLayer not found');
        }
      };

      // Check for consent - if already granted or if we should wait
      if (typeof window !== 'undefined') {
        const dataLayer = (window as any).dataLayer || [];
        const consentGiven = dataLayer.some((entry: any) =>
          entry.event === 'cookie_consent_update' || entry.event === 'consent_update'
        );

        if (consentGiven) {
          executePush();
        } else {
          console.log('⏳ Waiting for consent before pushing purchase event...');
          // Poll for consent or wait for event
          let checkInterval = setInterval(() => {
            const currentDataLayer = (window as any).dataLayer || [];
            if (currentDataLayer.some((entry: any) => entry.event === 'cookie_consent_update')) {
              console.log('✅ Consent detected, pushing purchase event');
              executePush();
              clearInterval(checkInterval);
            }
          }, 500);

          // Timeout after 5 seconds to avoid hanging
          setTimeout(() => clearInterval(checkInterval), 5000);
        }
      }

    } catch (error) {
      console.error('❌ GTM push error:', error);
    }
  };


  useEffect(() => {
    const handleTracking = async () => {
      if (!sessionId) return;

      console.log('Session ID:', sessionId);
      const session = await fetchCheckoutSession(sessionId);
    };

    handleTracking();
  }, [sessionId]);

  useEffect(() => {
    if (user) {
      console.log("Hitting gtm layer")
      pushPurchaseToDataLayer(user);
    }
  }, [user])

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
        <h1
          className="text-4xl font-bold text-black"
          style={{ fontFamily: "var(--font-ft-calhern), var(--font-ft-calhern), sans-serif" }}
        >
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600">
          {t('message')}
        </p>

        {user && (
          <div className="bg-gray-50 p-6 rounded-lg text-left space-y-4 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-black border-b border-gray-200 pb-2" style={{ fontFamily: "var(--font-ft-calhern), var(--font-ft-calhern), sans-serif" }}>
              {t('detailsTitle')}
            </h2>
            <div className="grid grid-cols-1 gap-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">{t('email')}</span>
                <span className="text-black font-semibold">{user?.email}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">{t('transactionId')}</span>
                <span className="text-black font-mono text-xs opacity-70" title={user?.transaction_id}>
                  {user?.transaction_id?.substring(0, 15)}...
                </span>
              </div>

              <div className="border-t border-gray-200 pt-3 mt-1">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">{t('plan')}</span>
                  <span className="text-black font-bold uppercase tracking-wider">{user?.plan}</span>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-black font-bold text-lg">{t('amount')}</span>
                  <span className="text-black font-bold text-xl">
                    {user?.amount} {user?.currency}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="pt-8">
          {user?.email ? <Link href={`${appUrl}/login?email=${encodeURIComponent(user?.email)}`}>
            <Button
              className="bg-black cursor-pointer text-white hover:bg-black px-8 py-6 rounded-md text-sm font-bold uppercase tracking-widest transition-all"
              style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
            >
              {t('logIn')}
            </Button>
          </Link> : <Link href={`${landingPageUrl}/pricing`}>
            <Button
              className="bg-black cursor-pointer text-white hover:bg-black px-8 py-6 rounded-md text-sm font-bold uppercase tracking-widest transition-all"
              style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
            >
              {t('doNotHavePlan')}
            </Button>
          </Link>}
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-[80vh] flex items-center justify-center">...</div>}>
      <ThankYouContent />
      {/* 
        OLD CONVERSION SCRIPT (Commented for reference)
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-17657716865/4ZZwCM3aqK4bEIHB7eNB',
                    'value': 1.0,
                    'currency': 'EUR',
                    'transaction_id': '',
                    'event_callback': callback
                });
              }
              return false;
            }
          `}
        </Script>
      */}
    </Suspense>
  )
}
