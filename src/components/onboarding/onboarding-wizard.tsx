'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, XIcon } from 'lucide-react'
import { IconBrandWhatsapp } from '@tabler/icons-react'
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
    const [currentStep, setCurrentStep] = useState(1)
    const [showErrors, setShowErrors] = useState(false)
    const totalSteps = 8
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        streetAndNumber: '',
        city: '',
        postcode: '',
        state: '',
        country: '',
        software: '',
        companySize: '',
        status: '',
        moneySpentForOneImage: '',
        timeOnRenderings: '',
        howDidYouHear: '',
        howDidYouHearOther: '',
        phoneNumber: '',
        whatsappConsent: false,
        privacyTermsConsent: false,
    })

    // Match the app's progress calculation
    const progress = Math.round(((currentStep - 1) / totalSteps) * 100)

    const handleNext = () => {
        if (currentStep === 1) {
            if (!formData.firstName.trim() || !formData.lastName.trim()) {
                setShowErrors(true)
                toast.error(t.firstNameAndLastNameRequired)
                return
            }
        }

        if (currentStep === 2) {
            if (!formData.streetAndNumber.trim() || !formData.city.trim() || !formData.postcode.trim() || !formData.country.trim()) {
                setShowErrors(true)
                toast.error((t as any).addressRequired || 'Address fields are required')
                return
            }
        }

        if (currentStep >= 3 && currentStep <= 7) {
            const name = currentStep === 3 ? 'companySize' : (currentStep === 4 ? 'status' : (currentStep === 5 ? 'moneySpentForOneImage' : (currentStep === 6 ? 'timeOnRenderings' : 'howDidYouHear')))
            if (!(formData as any)[name]) {
                toast.error((t as any).requiredField || 'Required')
                return
            }
            if (name === 'howDidYouHear' && formData.howDidYouHear === 'Other' && !formData.howDidYouHearOther.trim()) {
                toast.error((t as any).requiredField || 'Required')
                return
            }
        }

        setShowErrors(false)

        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1)
        } else {
            const finalData = { ...formData }
            if (formData.howDidYouHear === 'Other') {
                finalData.howDidYouHear = `Other: ${formData.howDidYouHearOther.trim()}`
            }
            onComplete(finalData)
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleOptionSelect = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="relative w-full mb-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">{t.provideInformation}</h2>
                        <div className="space-y-4">
                            <div className="border-b pb-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.firstName} <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder={t.firstNamePlaceholder}
                                            className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                                showErrors && !formData.firstName.trim() ? "border-red-500" : "border-gray-300")}
                                        />
                                        {showErrors && !formData.firstName.trim() && (
                                            <p className="text-red-500 text-xs mt-1">{(t as any).requiredField || 'Required'}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.lastName} <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder={t.lastNamePlaceholder}
                                            className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                                showErrors && !formData.lastName.trim() ? "border-red-500" : "border-gray-300")}
                                        />
                                        {showErrors && !formData.lastName.trim() && (
                                            <p className="text-red-500 text-xs mt-1">{(t as any).requiredField || 'Required'}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t.companyName}</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    placeholder={t.companyNamePlaceholder}
                                    className="w-full p-3 border border-gray-300 rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className="relative w-full mb-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">{t.provideAddress}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t.streetAndNumber} <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="streetAndNumber"
                                    value={formData.streetAndNumber}
                                    onChange={handleInputChange}
                                    placeholder={t.streetAndNumberPlaceholder}
                                    className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                        showErrors && !formData.streetAndNumber.trim() ? "border-red-500" : "border-gray-300")}
                                />
                                {showErrors && !formData.streetAndNumber.trim() && (
                                    <p className="text-red-500 text-xs mt-1">{(t as any).requiredField || 'Required'}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t.city} <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder={t.cityPlaceholder}
                                    className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                        showErrors && !formData.city.trim() ? "border-red-500" : "border-gray-300")}
                                />
                                {showErrors && !formData.city.trim() && (
                                    <p className="text-red-500 text-xs mt-1">{(t as any).requiredField || 'Required'}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t.postcode} <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleInputChange}
                                    placeholder={t.postcodePlaceholder}
                                    className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                        showErrors && !formData.postcode.trim() ? "border-red-500" : "border-gray-300")}
                                />
                                {showErrors && !formData.postcode.trim() && (
                                    <p className="text-red-500 text-xs mt-1">{(t as any).requiredField || 'Required'}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t.stateProvince}</label>
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
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t.country} <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    placeholder={t.countryPlaceholder}
                                    className={cn("w-full p-3 border rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none",
                                        showErrors && !formData.country.trim() ? "border-red-500" : "border-gray-300")}
                                />
                                {showErrors && !formData.country.trim() && (
                                    <p className="text-red-500 text-xs mt-1">{(t as any).requiredField || 'Required'}</p>
                                )}
                            </div>
                        </div>
                    </div>
                )
            case 3:
            case 4:
            case 5:
            case 6:
                const options = currentStep === 3 ? t.companySizeOptions : (currentStep === 4 ? t.statusOptions : (currentStep === 5 ? t.moneySpentOptions : (t as any).timeOnRenderingsOptions))
                const name = currentStep === 3 ? 'companySize' : (currentStep === 4 ? 'status' : (currentStep === 5 ? 'moneySpentForOneImage' : 'timeOnRenderings'))
                const title = currentStep === 3 ? (t as any).companySizeQuestion : (currentStep === 4 ? t.whichStatus : (currentStep === 5 ? t.moneySpentQuestion : (t as any).timeSpentQuestion))

                return (
                    <div className="relative w-full mb-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">{title}</h2>
                        <div className="relative w-full space-y-3">
                            {options.map((opt: any) => (
                                <label
                                    key={opt.value}
                                    className={cn(
                                        "flex items-center p-3 cursor-pointer group/sub relative w-full text-left transition-all duration-200 ease-out rounded-none overflow-hidden",
                                        (formData as any)[name] === opt.value
                                            ? "text-black shadow-sm bg-white border border-gray-200"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-800 border border-transparent"
                                    )}
                                >
                                    <input
                                        type="radio"
                                        name={name}
                                        value={opt.value}
                                        className="sr-only"
                                        onChange={() => handleOptionSelect(name, opt.value)}
                                    />
                                    <div className="w-4 h-4 rounded-none flex items-center justify-center bg-gray-100 group-hover/sub:bg-gray-200 transition-colors duration-200 mr-3">
                                        <div
                                            className={cn(
                                                "w-1.5 h-1.5 rounded-none transition-all duration-200",
                                                (formData as any)[name] === opt.value
                                                    ? 'bg-black shadow-sm animate-pulse'
                                                    : 'bg-gray-300 group-hover/sub:bg-gray-400'
                                            )}
                                        />
                                    </div>
                                    <span className="text-sm font-medium">{opt.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )
            case 7:
                const hearOptions = (t as any).howDidYouHearOptions
                return (
                    <div className="relative w-full mb-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">{(t as any).howDidYouHearQuestion}</h2>
                        <div className="relative w-full space-y-3">
                            {hearOptions.map((opt: any) => (
                                <div key={opt.value}>
                                    <label
                                        className={cn(
                                            "flex items-center p-3 cursor-pointer group/sub relative w-full text-left transition-all duration-200 ease-out rounded-none overflow-hidden",
                                            formData.howDidYouHear === opt.value
                                                ? "text-black shadow-sm bg-white border border-gray-200"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-800 border border-transparent"
                                        )}
                                    >
                                        <input
                                            type="radio"
                                            name="howDidYouHear"
                                            value={opt.value}
                                            className="sr-only"
                                            onChange={() => handleOptionSelect('howDidYouHear', opt.value)}
                                        />
                                        <div className="w-4 h-4 rounded-none flex items-center justify-center bg-gray-100 group-hover/sub:bg-gray-200 transition-colors duration-200 mr-3">
                                            <div
                                                className={cn(
                                                    "w-1.5 h-1.5 rounded-none transition-all duration-200",
                                                    formData.howDidYouHear === opt.value
                                                        ? 'bg-black shadow-sm animate-pulse'
                                                        : 'bg-gray-300 group-hover/sub:bg-gray-400'
                                                )}
                                            />
                                        </div>
                                        <span className="text-sm font-medium">{opt.label}</span>
                                    </label>
                                    {opt.value === 'Other' && formData.howDidYouHear === 'Other' && (
                                        <div className="mt-2 ml-7">
                                            <input
                                                type="text"
                                                placeholder={locale === 'de' ? "Bitte geben Sie an..." : "Please specify..."}
                                                value={formData.howDidYouHearOther}
                                                onChange={(e) => setFormData(prev => ({ ...prev, howDidYouHearOther: e.target.value }))}
                                                className="w-full p-2 border border-gray-300 rounded-none focus:ring-gray-500 focus:border-gray-500 transition-all text-sm outline-none"
                                                autoFocus
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 8:
                return (
                    <div className="relative w-full mb-8 overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
                        <style>{`
              .react-tel-input .flag-dropdown {
                background-color: transparent;
                border-radius: 0;
                padding: 0;
                width: 48px;
                border: none;
                border-right: 1px solid #ccc;
              }
              .react-tel-input .form-control {
                width: 100% !important;
                height: 50px !important;
                font-size: 16px !important;
                background-color: transparent !important;
                padding: 12px !important;
                border-radius: 0 !important;
                padding-left: 60px !important;
                border: 1px solid #ccc !important;
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
                        <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">{t.whatsappNumber}</h2>
                        <div className="space-y-4">
                            <div className="p-3 bg-green-50 border border-green-200 rounded-none flex items-center gap-3">
                                <IconBrandWhatsapp className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-green-800">
                                    {t.whatsappInfo}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t.whatsappNumberOptional}</label>
                                <PhoneInput
                                    country={'de'}
                                    value={formData.phoneNumber}
                                    onChange={phone => setFormData(prev => ({ ...prev, phoneNumber: phone }))}
                                    enableSearch={true}
                                    placeholder="Enter your WhatsApp number"
                                    containerClass="w-full"
                                />
                            </div>

                            <div className="space-y-6 pt-6">
                                <label className="flex items-start space-x-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="whatsappConsent"
                                        checked={formData.whatsappConsent}
                                        onChange={handleInputChange}
                                        className="mt-1 w-4 h-4 border-gray-300 text-black focus:ring-black rounded-none"
                                    />
                                    <span className="text-sm text-gray-700 leading-relaxed">
                                        {t.whatsappConsent}
                                        <a href="mailto:support@typus.ai" className="text-blue-600 hover:text-blue-800 underline">{t.whatsappConsentEmail}</a>
                                        {t.whatsappConsentAfterEmail}
                                        <a href="/data-privacy" target="_blank" className="text-blue-600 hover:text-blue-800 underline">{t.whatsappConsentPrivacyPolicy}</a>
                                        {t.whatsappConsentEnd}
                                    </span>
                                </label>

                                <label className="flex items-start space-x-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="privacyTermsConsent"
                                        checked={formData.privacyTermsConsent}
                                        onChange={handleInputChange}
                                        className="mt-1 w-4 h-4 border-gray-300 text-black focus:ring-black rounded-none"
                                    />
                                    <span className="text-sm text-gray-700 leading-relaxed">
                                        {t.privacyTermsConsent}
                                        <a href="/terms" target="_blank" className="text-blue-600 hover:text-blue-800 underline">{t.privacyTermsConsentTerms}</a>
                                        {t.privacyTermsConsentAnd}
                                        <a href="/data-privacy" target="_blank" className="text-blue-600 hover:text-blue-800 underline">{t.privacyTermsConsentPrivacy}</a>
                                        {t.privacyTermsConsentEnd}
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    const isStep8Filled = !!formData.phoneNumber
    const isSkippable = (currentStep === 8 && !isStep8Filled)

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fcfcfd] p-4 overflow-y-auto">
            <button
                className="absolute top-4 right-4 text-gray-600 cursor-pointer"
                onClick={onCancel}
            >
                <XIcon className="w-6 h-6" />
            </button>

            <div className="flex w-full justify-center mb-4">
                <div className="mb-0">
                    <TypusLogoBlack className="size-9 mx-auto" />
                    <h1 className="mt-2 text-center text-xl font-light tracking-[2.5px] uppercase">
                        TYPUS.AI
                    </h1>
                    <p className="mt-2 text-center text-xs text-gray-600 font-medium">
                        {t.tagline}
                    </p>
                </div>
            </div>

            <div className="w-full max-w-2xl bg-white p-8 md:p-12">
                {/* Header Section */}
                {currentStep <= 3 && (
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.welcomeTitle}</h2>
                        <p className="text-gray-600 text-sm">{t.welcomeDescription}</p>
                    </div>
                )}

                {/* Progress Section */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>
                            {t.questionOf.replace('{current}', currentStep.toString()).replace('{total}', totalSteps.toString())}
                        </span>
                        <span>{t.percentComplete.replace('{percent}', progress.toString())}</span>
                    </div>
                    <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-gray-400/30 border border-gray-300/50">
                        <motion.div
                            animate={{ width: `${progress}%` }}
                            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                            className="bg-white h-full transition-all duration-300 ease-out rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                        />
                    </div>
                </div>

                {/* Step Content */}
                <div className="min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {renderStep()}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer Navigation */}
                <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-100">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className={cn(
                            "flex items-center text-sm font-medium transition-colors",
                            currentStep === 1 ? "opacity-0 pointer-events-none" : "text-gray-500 hover:text-black"
                        )}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {t.previous}
                    </button>

                    <button
                        onClick={handleNext}
                        className="flex items-center px-6 py-2 rounded-none bg-white shadow-sm border border-gray-200 text-sm transition-all cursor-pointer hover:shadow-md font-medium gap-2 min-w-[140px] justify-center"
                    >
                        {isSkippable ? t.illDoThisLater : (currentStep === totalSteps ? t.complete : t.next)}
                        {currentStep === totalSteps ? (
                            <Check className="w-4 h-4" />
                        ) : (
                            <ArrowRight className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
