import { Clock, FileText, Image as ImageIcon, Sparkles, Type, Upload, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const HowItWorks: React.FC = () => {
    const t = useTranslations('HowItWorks');
    const [typedText, setTypedText] = useState('');
    const fullText = t('visualization.prompt');
    const [isLandingPage, setIsLandingPage] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/en/done-for-you' || pathname === '/de/done-for-you') {
            setIsLandingPage(false);
        } else {
            setIsLandingPage(true);
        }
    }, [pathname]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                setTimeout(() => { index = 0; }, 3000); // Pause at the end
            }
        }, 50);
        return () => clearInterval(interval);
    }, [fullText]);

    const steps = isLandingPage ? [
        {
            icon: <FileText className="w-6 h-6" />,
            title: t('landingSteps.step1.title'),
            description: t('landingSteps.step1.description'),
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: t('landingSteps.step2.title'),
            description: t('landingSteps.step2.description'),
        },
        {
            icon: <ImageIcon className="w-6 h-6" />,
            title: t('landingSteps.step3.title'),
            description: t('landingSteps.step3.description'),
        },
    ] : [
        {
            icon: <FileText className="w-6 h-6" />,
            title: t('steps.step1.title'),
            description: t('steps.step1.description'),
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: t('steps.step2.title'),
            description: t('steps.step2.description'),
        },
        {
            icon: <ImageIcon className="w-6 h-6" />,
            title: t('steps.step3.title'),
            description: t('steps.step3.description'),
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden font-space-grotesk">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F7F7F7]/50 -skew-x-12 transform origin-top translate-x-1/2 -z-10" />

            <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-24">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-8 group">
                                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#F7F7F7] border border-gray-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-black/10 group-hover:-translate-y-1">
                                    {step.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                                    <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        {/* Main Visualization Container */}
                        <div className="relative z-10 bg-white rounded-[40px] p-4 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-gray-100 group">
                            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3]">
                                <img
                                    src={'/Sketch-to-Render.webp'}
                                    alt="How it works visualization"
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent opacity-60" />

                                {/* Overlay: Processing State */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-white animate-pulse" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-white w-2/3 animate-[progress_3s_ease-in-out_infinite]" />
                                        </div>
                                        <p className="text-[10px] font-bold text-white uppercase tracking-widest opacity-80">{t('visualization.generating')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Interaction UI: Prompt Box */}
                        <div className="absolute -top-10 -left-10 z-20 w-80 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 hidden md:block animate-in zoom-in-95 slide-in-from-top-4 duration-700 delay-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-white">
                                    <Type className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('visualization.aiPromptBadge')}</span>
                            </div>
                            <div className="bg-[#F7F7F7] rounded-xl p-4 min-h-[100px] text-sm text-gray-600 font-mono leading-relaxed">
                                {typedText}
                                <span className="inline-block w-1.5 h-4 bg-black ml-1 animate-pulse" />
                            </div>
                        </div>

                        {/* Floating Interaction UI: Upload Box */}
                        <div className="absolute -bottom-10 -right-10 z-20 bg-white rounded-3xl p-5 shadow-2xl border border-gray-100 hidden md:flex items-center gap-4 animate-in zoom-in-95 slide-in-from-right-4 duration-700 delay-500">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                <Upload className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">{t('visualization.inputTypeBadge')}</span>
                                <span className="text-sm font-bold text-gray-900">{t('visualization.inputTypeValue')}</span>
                            </div>
                        </div>

                        {/* Background glowing accents */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-40 -z-10" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full blur-[100px] opacity-40 -z-10" />
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes progress {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0); }
                    100% { transform: translateX(100%); }
                }
            ` }} />
        </section>
    );
};

