'use client'

import { Button } from '@/components/ui/button'
import { sendGTMEvent } from '@next/third-parties/google'
import { CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

function ThankYouContent() {
  const t = useTranslations('ThankYou')
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  
  useEffect(() => {
    if (sessionId) {
    // alert(sessionId)
      // Send the GTM event for the Stripe purchase tracking
      // We push the event and the session_id so that GTM can capture it
      sendGTMEvent({ event: 'stripe_purchase', session_id: sessionId })
    }
  }, [sessionId])

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
        <h1 
          className="text-4xl font-bold text-black"
          style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
        >
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600">
          {t('message')}
        </p>
        
        {sessionId && (
          <p className="text-sm text-gray-400">
            {t('orderReference')}: {sessionId.substring(0, 10)}...
          </p>
        )}

        <div className="pt-8">
          <Link href="/">
            <Button 
              className="bg-black cursor-pointer text-white hover:bg-gray-800 px-8 py-6 rounded-md text-sm font-bold uppercase tracking-widest transition-all"
              style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
            >
              {t('backToHome')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-[80vh] flex items-center justify-center">...</div>}>
      <ThankYouContent />
    </Suspense>
  )
}
