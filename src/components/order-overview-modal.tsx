'use client'

import React, { useState } from 'react'
import { getOrderPageData } from './order-overview-data'
import { Check, Loader2, X } from 'lucide-react'
import Link from 'next/link'
import { apiUrl } from '@/lib/constants'

const apiBaseUrl = `${apiUrl}/api/subscription/public/`

interface OrderOverviewModalProps {
  planId: string
  locale: string
  checkoutData: any
  onClose: () => void
}

export function OrderOverviewModal({ planId, locale, checkoutData, onClose }: OrderOverviewModalProps) {
  const data = getOrderPageData(planId, locale)
  
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!data) return null

  const allChecked = checked1 && checked2 && checked3

  const handleCompleteOrder = async () => {
    if (!allChecked || !checkoutData) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch(`${apiBaseUrl}checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutData)
      })
      
      const resData = await response.json()
      if (resData.url) {
        window.location.href = resData.url
      } else {
        alert('Checkout error: ' + (resData.message || 'Unknown error'))
        setIsSubmitting(false)
      }
    } catch (e) {
      console.error(e)
      alert('Network error')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-[#fcfcfd]/80 backdrop-blur-md overflow-y-auto font-sans text-gray-900">
      {/* <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"> */}
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={onClose} 
            className="mb-6 flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            <X size={16} className="mr-1" />
            {locale === 'de' ? 'Zurück' : 'Back'}
          </button>

          <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
            <div className="p-8 sm:p-12">
              {/* Header */}
              <h1 className="text-3xl sm:text-4xl font-black mb-8 leading-tight" style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}>
                {data.title}
              </h1>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">{data.offer}</h2>
                <p className="text-gray-600">{data.audience}</p>
              </div>

              <hr className="my-10 border-gray-100" />

              {/* Pricing */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-5">{data.pricingTitle}</h2>
                <div className="font-black text-xl mb-3">{data.pricingMain}</div>
                <ul className="space-y-2 mb-4">
                  {data.pricingList.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-black mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {data.pricingDesc && <p className="text-sm text-gray-500 italic mt-4">{data.pricingDesc}</p>}
              </div>

              <hr className="my-10 border-gray-100" />

              {/* Scope */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-5">{data.scopeTitle}</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {data.scopeDesc.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <hr className="my-10 border-gray-100" />

              {/* Credit System */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-5">{data.creditSystemTitle}</h2>
                {data.creditSystemDesc && <p className="mb-8 text-gray-700">{data.creditSystemDesc}</p>}

                <h3 className="text-lg font-bold mb-3">{data.includedCreditsTitle}</h3>
                <div className="font-bold mb-1">{data.includedCreditsMain}</div>
                <div className="text-sm text-gray-600 mb-8">{data.includedCreditsSub}</div>

                <h3 className="text-lg font-bold mb-3">{data.creditNoticeTitle}</h3>
                <p className="mb-3">{data.creditNoticeDesc}</p>
                <p className="mb-2 font-medium">{data.creditNoticeListTitle}</p>
                <ul className="space-y-2 mb-4">
                  {data.creditNoticeList.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-black mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm italic mb-8">{data.creditNoticeFooter}</p>

                <h3 className="text-lg font-bold mb-3">{data.extraCreditsTitle}</h3>
                <p className="mb-3">{data.extraCreditsDesc}</p>
                <p className="mb-2 font-medium">{data.extraCreditsListTitle}</p>
                <ul className="space-y-2 mb-4">
                  {data.extraCreditsList.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-black mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {data.extraCreditsFooter && <p className="text-sm italic mb-10">{data.extraCreditsFooter}</p>}

                {/* Tables */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {data.tables.map((table, i) => (
                    <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold mb-4 border-b border-gray-200 pb-2">{table.title}</h4>
                      <ul className="space-y-3 text-sm">
                        {table.items.map((item, j) => (
                          <li key={j} className="flex items-start">
                            <span className="mr-2 text-gray-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-10 border-gray-100" />

              {/* Usage Category */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-5">{data.usageCategoryTitle}</h2>
                <div className="space-y-4 text-gray-700">
                  {data.usageCategoryDesc.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>

              <hr className="my-10 border-gray-100" />

              {/* Support */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-5">{data.supportTitle}</h2>
                <div className="space-y-4 text-gray-700 mb-8">
                  {data.supportDesc.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                {data.satisfactionTitle && <h3 className="text-xl font-bold mb-4 mt-8">{data.satisfactionTitle}</h3>}
                {data.satisfactionDesc && <div className="space-y-4 text-gray-700 mb-8">
                  {data.satisfactionDesc.map((p, i) => <p key={i}>{p}</p>)}
                </div>}

                {data.satisfactionNoticeTitle && <h3 className="text-xl font-bold mb-4 mt-8">{data.satisfactionNoticeTitle}</h3>}
                {data.satisfactionNoticeDesc && <div className="space-y-4 text-gray-700 mb-8">
                  {data.satisfactionNoticeDesc.map((p, i) => <p key={i}>{p}</p>)}
                </div>}

              </div>

              <hr className="my-10 border-gray-100" />

              {/* Included Features */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-5">{data.includedFeaturesTitle}</h2>
                <ul className="space-y-3">
                  {data.includedFeaturesList.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 text-black mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="my-10 border-gray-100" />

              {/* Funding */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-5">{data.fundingTitle}</h2>
                <div className="space-y-4 text-gray-700">
                  {data.fundingDesc.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>

              <hr className="my-10 border-gray-100" />

              {/* Terms */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-5">{data.termsTitle}</h2>
                {data.termsDesc && <p className="mb-5">{data.termsDesc}</p>}
                <ul className="space-y-3">
                  {data.termsList.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 text-black mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="my-10 border-gray-100" />

              {/* AGB & Consent (Checkboxes) */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-10 mb-10 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">{data.agbTitle}</h2>
                <p className="mb-6 font-medium text-gray-800">{data.agbDesc}</p>
                
                {data.agbList && (
                  <ul className="space-y-3 mb-8">
                    {data.agbList.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 text-gray-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="space-y-5 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-all ${checked1 ? 'bg-black border-black text-white shadow-md' : 'border-gray-300 bg-white group-hover:border-black'}`}>
                      {checked1 && <Check size={16} strokeWidth={3} />}
                    </div>
                    <input type="checkbox" className="hidden" checked={checked1} onChange={() => setChecked1(!checked1)} />
                    <span className="text-gray-800 leading-snug font-medium pt-0.5">{data.checkboxes[0]}</span>
                  </label>

                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-all ${checked2 ? 'bg-black border-black text-white shadow-md' : 'border-gray-300 bg-white group-hover:border-black'}`}>
                      {checked2 && <Check size={16} strokeWidth={3} />}
                    </div>
                    <input type="checkbox" className="hidden" checked={checked2} onChange={() => setChecked2(!checked2)} />
                    <span className="text-gray-800 leading-snug font-medium pt-0.5">{data.checkboxes[1]}</span>
                  </label>

                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-all ${checked3 ? 'bg-black border-black text-white shadow-md' : 'border-gray-300 bg-white group-hover:border-black'}`}>
                      {checked3 && <Check size={16} strokeWidth={3} />}
                    </div>
                    <input type="checkbox" className="hidden" checked={checked3} onChange={() => setChecked3(!checked3)} />
                    <span className="text-gray-800 leading-snug font-medium pt-0.5">
                      {data.checkboxes[2]} (<Link href={data.agbLink} target="_blank" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">AGB</Link>)
                    </span>
                  </label>
                </div>
              </div>

              {/* Footer Note & Button */}
              <div className="mt-10 text-center">
                <button
                  onClick={handleCompleteOrder}
                  disabled={!allChecked || isSubmitting}
                  className={`w-full sm:w-auto px-12 py-5 text-sm font-bold uppercase tracking-widest rounded transition-all flex items-center justify-center mx-auto ${allChecked && !isSubmitting ? 'bg-black text-white hover:bg-gray-900 hover:-translate-y-1 shadow-xl hover:shadow-2xl' : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'}`}
                  style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : data.finishOrderTitle}
                </button>

                <div className="mt-8 text-xs text-gray-500 max-w-lg mx-auto bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="font-bold uppercase tracking-wider block mb-2 text-gray-700">{data.noteTitle}</span>
                  {data.noteDesc}
                </div>
              </div>

            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}
