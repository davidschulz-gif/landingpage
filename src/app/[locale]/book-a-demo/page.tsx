'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

const DOMINIK_CALENDAR = 'https://calendar.app.google/MGAqUYdnXJEoTCyL6';

export default function BookADemoPage() {
  const t = useTranslations('BeforeYouGo');
  const locale = useLocale();
  const router = useRouter();
  
  const [mounted, setMounted] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4 sm:p-8">
      <div className="relative bg-white rounded-[32px] border border-neutral-100 shadow-2xl p-6 sm:p-8 w-full max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='mb-0 flex flex-col items-center space-y-2'
          >
            <img src="/typus_logos/logo typus_highres.png" className="h-auto w-50 mx-auto" alt="Typus AI" />
          </motion.div>

          <h3 className="heading-primary mb-2 text-center max-w-xl text-neutral-900">
            {t('step3Title')}
          </h3>
          <div className="text-sm text-center mb-5 font-medium leading-relaxed text-neutral-600 flex flex-col items-center gap-1">
            <p>- {t('bookBothInstruction1')}</p>
          </div>
        </div>

        <button 
          onClick={() => router.replace('/')} 
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-black transition-all duration-300 hover:rotate-90 hover:scale-110 z-10"
          aria-label="Close"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center w-full transition-all duration-500">
          
          {/* Iframe Column */}
          <div className="flex-1 w-full min-w-[300px] lg:min-w-[400px] animate-in fade-in duration-500">
            <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden border border-neutral-200 bg-white">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-50">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-6 h-6 rounded-full border-2 border-t-transparent border-neutral-300" />
                  <p className="text-[11px] text-neutral-400">Kalender wird geladen…</p>
                </div>
              )}
              <iframe 
                src={DOMINIK_CALENDAR} 
                title="Book a call" 
                width="100%" 
                height="100%" 
                style={{ border: 'none', display: 'block', minHeight: '500px' }} 
                onLoad={() => setIframeLoading(false)} 
                allow="camera; microphone" 
              />
            </div>
          </div>

          {/* Cards Column */}
          <div className="flex flex-col gap-4 w-full max-w-[320px] shrink-0">
            


            {/* Annika Profile Card */}
            <div className="flex-1 flex flex-col items-center text-center rounded-2xl p-5 border bg-white border-neutral-200 shadow-sm hover:shadow-md transition-all select-none">
              <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm ring-1 ring-neutral-200">
                <Image src="/team/annika fleig.png" alt="Annika Fleig" fill className="object-cover" />
              </div>
              <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-neutral-900">{t('annikaName')}</h4>
              <p className="text-[9px] font-semibold tracking-wider uppercase text-neutral-400 mb-3">{t('annikaRole')}</p>
              <p className="text-[11px] text-neutral-500 leading-relaxed mb-4 font-serif px-2">{t('annikaDesc')}</p>
              <div className="w-full mt-auto py-2.5 rounded-xl bg-neutral-950 text-white text-[11px] font-medium flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                {t('annikaCta')}
              </div>
            </div>

            {/* Case Study Button */}
            <button
              type="button"
              onClick={() => router.push(`/${locale}/siegrist`)}
              className="w-full mt-2 py-3.5 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-neutral-200 shadow-sm group"
            >
              {t('caseStudyBtn')}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
