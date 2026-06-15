'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, XIcon } from 'lucide-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import TypusLogoBlack from '@/components/common/typus-logo-black'
import { getOnboardingTranslations } from './translations'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

interface OnboardingWizardProps {
    email: string
    locale: string
    onComplete: (data: any) => void
    onCancel: () => void
}

export default function OnboardingWizard({ email, locale, onComplete, onCancel }: OnboardingWizardProps) {
    const t = getOnboardingTranslations(locale)
    const [showErrors, setShowErrors] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        phoneNumber: '',
        streetAndNumber: '',
        city: '',
        postcode: '',
        state: '',
        country: '',
    })

    const handleNext = () => {
        if (!formData.firstName.trim() || !formData.lastName.trim()) {
            setShowErrors(true)
            toast.error(t.firstNameAndLastNameRequired)
            return
        }

        if (!formData.phoneNumber) {
            setShowErrors(true)
            toast.error(locale === 'de' ? 'Telefonnummer ist erforderlich' : 'Phone number is required')
            return
        }

        if (!formData.streetAndNumber.trim() || !formData.city.trim() || !formData.postcode.trim() || !formData.country.trim()) {
            setShowErrors(true)
            toast.error((t as any).addressRequired || 'Address fields are required')
            return
        }

        setShowErrors(false)
        onComplete(formData)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="fixed inset-0 z-[50000] flex flex-col items-center justify-center bg-[#fcfcfd]/80 backdrop-blur-md p-4 overflow-y-auto">
            <button
                className="absolute top-4 right-4 text-gray-600 cursor-pointer"
                onClick={onCancel}
            >
                <XIcon className="w-6 h-6" />
            </button>

            <div className='mb-0 flex flex-col items-center space-y-2 mt-8 sm:mt-0'>
                <TypusLogoBlack className="size-9 mx-auto" /> 
                <span
                  className='text-center !font-logo'
                  style={{
                    fontSize: '25px',
                    fontWeight: 700,
                    letterSpacing: '2.5px',
                    lineHeight: '1.3em',
                    color: '#000',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-soyuz-grotesk)'
                  }}
                >
                  typus.AI
                </span>
                <p className="mt-2 text-center text-xs text-gray-600 font-medium">
                  {t.tagline}
                </p>
            </div>

            <div className="w-full max-w-2xl bg-white p-8 md:p-12 mt-6 mb-8 max-h-[85vh] overflow-y-auto custom-scrollbar shadow-lg border border-gray-100 rounded-lg">
                <style>{`
                  .react-tel-input .flag-dropdown {
                    background-color: transparent;
                    border-radius: 0;
                    padding: 0;
                    width: 48px;
                    border: none;
                    border-right: 1px solid #e5e7eb;
                  }
                  .react-tel-input .form-control {
                    width: 100% !important;
                    height: 46px !important;
                    font-size: 14px !important;
                    background-color: transparent !important;
                    padding: 12px !important;
                    border-radius: 0 !important;
                    padding-left: 60px !important;
                    border: 1px solid #d1d5db !important;
                    transition: all 0.2s;
                  }
                  .react-tel-input .form-control:focus {
                    border-color: #6b7280 !important;
                    box-shadow: none !important;
                  }
                  .react-tel-input .selected-flag {
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center; 
                  }
                  .react-tel-input .selected-flag:hover {
                    background-color: transparent;
                  }
                  .react-tel-input .arrow {
                    display: none;
                  }
                `}</style>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.welcomeTitle}</h2>
                    <p className="text-gray-600 text-sm">{t.welcomeDescription}</p>
                </div>

                <div className="space-y-8">
                    {/* Personal Information */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-5 pb-2 border-b border-gray-100">{t.provideInformation}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">{t.firstName} <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder={t.firstNamePlaceholder}
                                    className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                        showErrors && !formData.firstName.trim() ? "border-red-500 bg-red-50" : "border-gray-300")}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">{t.lastName} <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder={t.lastNamePlaceholder}
                                    className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                        showErrors && !formData.lastName.trim() ? "border-red-500 bg-red-50" : "border-gray-300")}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">{t.companyName}</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    placeholder={t.companyNamePlaceholder}
                                    className="w-full p-3 border border-gray-300 rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">{locale === 'de' ? 'Telefon / Firmen-Telefon' : 'Phone / Company Phone'} <span className="text-red-500">*</span></label>
                                <div className={cn("w-full relative", showErrors && !formData.phoneNumber ? "border border-red-500 bg-red-50" : "")}>
                                    <PhoneInput
                                        country={'de'}
                                        value={formData.phoneNumber}
                                        onChange={phone => setFormData(prev => ({ ...prev, phoneNumber: phone }))}
                                        enableSearch={true}
                                        placeholder={locale === 'de' ? 'Ihre Telefonnummer' : 'Enter your phone number'}
                                        containerClass="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Address Information */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-5 pb-2 border-b border-gray-100">{t.provideAddress}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-sm font-medium text-gray-700">{t.streetAndNumber} <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="streetAndNumber"
                                    value={formData.streetAndNumber}
                                    onChange={handleInputChange}
                                    placeholder={t.streetAndNumberPlaceholder}
                                    className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                        showErrors && !formData.streetAndNumber.trim() ? "border-red-500 bg-red-50" : "border-gray-300")}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">{t.city} <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder={t.cityPlaceholder}
                                    className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                        showErrors && !formData.city.trim() ? "border-red-500 bg-red-50" : "border-gray-300")}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">{t.postcode} <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleInputChange}
                                    placeholder={t.postcodePlaceholder}
                                    className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                        showErrors && !formData.postcode.trim() ? "border-red-500 bg-red-50" : "border-gray-300")}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">{t.stateProvince}</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    placeholder={t.stateProvincePlaceholder}
                                    className="w-full p-3 border border-gray-300 rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">{t.country} <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    placeholder={t.countryPlaceholder}
                                    className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                        showErrors && !formData.country.trim() ? "border-red-500 bg-red-50" : "border-gray-300")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="flex justify-end items-center mt-10 pt-6 border-t border-gray-100">
                    <button
                        onClick={handleNext}
                        className="flex items-center px-8 py-3.5 bg-black text-white text-sm font-bold uppercase tracking-widest rounded transition-all hover:bg-gray-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                        style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                    >
                        {locale === 'de' ? 'WEITER ZUR ANGEBOTSÜBERSICHT' : 'GO TO THE OFFER OVERVIEW'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    )
}
