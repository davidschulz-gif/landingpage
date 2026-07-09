'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

const ADA_CALENDAR = 'https://calendar.app.google/uUbcjgHyvHY7jkig7';
const ANNIKA_CALENDAR = 'https://calendar.app.google/MGAqUYdnXJEoTCyL6';

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

  const currentCalendarUrl = ANNIKA_CALENDAR;

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
                src={currentCalendarUrl} 
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
          <div className="flex flex-col gap-4 w-full max-w-[340px] sm:max-w-[440px] shrink-0">
            
            {/* Team Profile Card */}
            <div className="flex flex-col items-center text-center rounded-2xl p-6 border bg-white border-black shadow-lg ring-1 ring-black w-full">
              <div className="flex flex-row items-center justify-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-neutral-200">
                  <Image src="/team/adavkayser.jpeg" alt="Ada von Kayser" fill className="object-cover" />
                </div>
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-neutral-200">
                  <Image src="/team/annika fleig.png" alt="Annika Fleig" fill className="object-cover" />
                </div>
              </div>
              <h4 className="text-[12px] font-bold tracking-[0.05em] uppercase text-neutral-900 leading-tight mb-1">
                ADA VON KAYSER & ANNIKA FLEIG
              </h4>
              <p className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400 mb-2">
                ACCOUNT MANAGERINNEN
              </p>
              <p className="text-[12px] text-neutral-500 leading-relaxed font-serif px-1">
                {t('annikaDesc')}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
