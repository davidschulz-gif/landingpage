'use client'

import React, { useState } from 'react'
import { ManufacturerHeader } from '@/components/manufacturer/manufacturer-header'
import { useTranslations } from 'next-intl'
import { CheckCircle2, Mail, X } from 'lucide-react'

export function ManufacturerHeaderWithModal() {
  const tProvider = useTranslations('provider')
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)

  return (
    <>
      <ManufacturerHeader onOpenContact={() => setIsContactModalOpen(true)} />

      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-7 shadow-2xl border border-slate-100 text-black">
            <button
              onClick={() => {
                setIsContactModalOpen(false)
                setContactSubmitted(false)
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              aria-label="Close contact modal"
            >
              <X size={20} />
            </button>

            {contactSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg text-slate-900">{tProvider('landingModal.successTitle')}</h3>
                <p className="text-sm text-slate-600 max-w-xs mx-auto">
                  {tProvider('landingModal.successSubtitle')}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-xl text-slate-900">
                    {tProvider('landingModal.title')}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {tProvider('landingModal.subtitle')}
                  </p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setContactSubmitted(true)
                  }}
                  className="space-y-3 pt-2"
                >
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {tProvider('landingModal.company')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={tProvider('landingModal.companyPlaceholder')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {tProvider('landingModal.email')}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={tProvider('landingModal.emailPlaceholder')}
                      className="w-full px-3.5 py-2.5 rounded-md border border-neutral-300 text-sm focus:outline-hidden focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      {tProvider('landingModal.message')}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={tProvider('landingModal.messagePlaceholder')}
                      className="w-full px-3.5 py-2.5 rounded-md border border-neutral-300 text-sm focus:outline-hidden focus:border-black resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-md bg-black hover:bg-neutral-800 text-white text-xs font-medium tracking-widest uppercase transition-all shadow-2xs cursor-pointer"
                  >
                    {tProvider('landingModal.submitBtn')}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
