'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { useState, useEffect } from 'react'
import { apiUrl } from '@/lib/constants'

const floorPlanPackages = [
  {
    id: 'lite',
    name: 'LITE',
    price: '12',
    description: 'Für persönliche Projekte und gelegentliche Raumideen.',
    features: [
      'HD-Exporte und Downloads ohne Wasserzeichen',
      '800 monatliche Credits',
      'Basis-Warteschlange',
      'Bis zu 6 ausstehende Bildgenerierungen',
      'Erweiterte Funktionen für KI-Floorplan freischalten',
      'Persönliche Projekte und leichte Kundenarbeit',
      '24-Stunden-E-Mail-Support'
    ],
  },
  {
    id: 'mehr',
    name: 'MEHR',
    price: '29',
    description: 'Für Innenräume, Außenbereiche und Immobilien-Visuals.',
    isPopular: true,
    features: [
      'Kommerzielle Nutzungsrechte für deine generierten Bilder',
      'HD-Exporte und Downloads ohne Wasserzeichen',
      '3.000 monatliche Credits',
      'Schnellere Warteschlange',
      'Bestehende Ergebnisse weiter bearbeiten, ohne neu zu starten',
      'Bis zu 15 ausstehende Bildgenerierungen',
      'Erweiterte Funktionen für KI-Floorplan freischalten',
      '24-Stunden-E-Mail-Support'
    ],
  },
  {
    id: 'pro',
    name: 'PRO',
    price: '59',
    description: 'Für Teams, Studios und umfangreiche Immobilienprojekte.',
    features: [
      'Kommerzielle Nutzungsrechte für deine generierten Bilder',
      'HD-Exporte und Downloads ohne Wasserzeichen',
      '9.999 monatliche Credits',
      'Warteschlange mit höchster Priorität',
      'Bestehende Ergebnisse weiter bearbeiten, ohne neu zu starten',
      'Bis zu 30 ausstehende Bildgenerierungen',
      'Erweiterte Funktionen für KI-Floorplan freischalten',
      '24-Stunden-E-Mail-Support'
    ],
  }
]

export function FloorPlanPricingSection() {
  const [plansData, setPlansData] = useState<any[]>([]);
  const apiBaseUrl = `${apiUrl}/api/subscription/public/`;

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}plans?currency=eur`);
        if (response.ok) {
          const data = await response.json();
          if (data.floorPlans) { setPlansData(data.floorPlans); }
        }
      } catch (error) {
        console.error('Error fetching floor plans:', error);
      }
    };
    fetchPlans();
  }, [apiBaseUrl]);

  // Helper: get matching API plan by planType
  const getApiPlan = (pkgName: string) =>
    plansData.find(p => p.planType === pkgName);
  const t = useTranslations('Pricing')
  const locale = useLocale()

  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-4 sm:py-8 mb-16 relative z-10'>
      <div className='text-center mb-8 sm:mb-12'>
        <h2 className='heading-primary '>Floor plans</h2>
      </div>
      <div className='flex flex-col xl:flex-row justify-center items-start w-full gap-6 mb-4 px-4 xl:px-0 max-w-[1298px] mx-auto'>
        {floorPlanPackages.map((pkg) => (
          <div 
            key={pkg.id}
            className='flex h-auto lg:h-[700px] mb-4 flex-col p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative group rounded-2xl w-full max-w-sm mx-auto'
            style={{ backgroundColor: '#ffffff', color: '#000000' }}
          >
            {pkg.isPopular && (
              <div className='absolute -top-2 left-0 z-30 origin-top-left'>
                <div className='relative transform -rotate-12'>
                  <div className='bg-gradient-to-b from-yellow-400 to-yellow-500 px-5 py-1.5 shadow-lg relative overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
                    <div className='absolute -left-2 top-0 w-0 h-0 border-t-[14px] border-t-yellow-600 border-r-[10px] border-r-transparent'></div>
                    <div className='absolute -left-2 bottom-0 w-0 h-0 border-b-[14px] border-b-yellow-600 border-r-[10px] border-r-transparent'></div>
                    <div className='absolute -right-2 top-0 w-0 h-0 border-t-[14px] border-t-yellow-600 border-l-[10px] border-l-transparent'></div>
                    <div className='absolute -right-2 bottom-0 w-0 h-0 border-b-[14px] border-b-yellow-600 border-l-[10px] border-l-transparent'></div>
                    <span
                      className='text-[10px] font-bold tracking-wider text-gray-900 relative z-10 whitespace-nowrap'
                      style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                    >
                      {locale === 'de' ? 'EMPFOHLEN' : 'RECOMMENDED'}
                    </span>
                  </div>
                  <div className='absolute top-full left-0 right-0 h-1 bg-black/10 blur-sm'></div>
                </div>
              </div>
            )}
            
            <div className='flex flex-col items-center text-center justify-center mb-4 relative pt-3'>
              <span 
                className='text-[18px] sm:text-[20px] font-bold uppercase tracking-wider mb-1 block text-black' 
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {pkg.name}
              </span>
              
              <span className='text-[11px] font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full mb-3 inline-block max-w-[90%] text-center leading-tight'>
                {pkg.description}
              </span>

              <div className='mb-3'>
                <div className='flex flex-col items-center justify-center'>
                  <div className='flex items-baseline justify-center gap-1'>
                    <span 
                      className='text-3xl sm:text-4xl font-normal tracking-tight text-black' 
                      style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                    >
                      €{(() => {
                        const apiPlan = getApiPlan(pkg.name);
                        if (apiPlan?.prices?.monthly) {
                          return (apiPlan.prices.monthly / 100).toFixed(0);
                        }
                        return pkg.price;
                      })()}
                    </span>
                    <span 
                      className='text-xs sm:text-sm text-gray-500' 
                      style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                    >
                      /Monat
                    </span>
                  </div>
                </div>
                
                <div className='space-y-1 text-[11px] text-gray-500 mt-3 text-center'>
                  <div style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                    {t('billedMonthly')}
                  </div>
                </div>
              </div>
            </div>

            <div className='px-4 flex-1 flex flex-col justify-start mb-4 overflow-y-auto no-scrollbar'>
              <ul className='space-y-4'>
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start text-[11px] text-gray-600 font-medium leading-relaxed'>
                    <Check className='mr-3 h-[18px] w-[18px] text-emerald-500 shrink-0' strokeWidth={2} />
                    <span className='text-[10px] font-bold tracking-wider text-gray-900' style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-auto pt-4 border-t border-gray-100'>
              <Button 
                className='bg-black text-white cursor-pointer w-full px-4 py-2 text-[10px] font-medium uppercase tracking-wide border border-black hover:bg-gray-900 transition-all duration-200 rounded-2xl'
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                disabled={true}
                onClick={() => {
                  const apiPlan = getApiPlan(pkg.name);
                  if (apiPlan) {
                    alert('Floor Plan Checkout will open for: ' + apiPlan.name);
                  } else {
                    alert('Stripe integration pending for floor plan packages.');
                  }
                }}
              >
                {t('subscribe')}
              </Button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
