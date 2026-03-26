import { useTranslations } from 'next-intl';
import React from 'react';
// import { Button } from '@/components/ui/button';
// import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Layers, Maximize, Video, Zap } from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
    const t = useTranslations('FeatureShowcase');
    // const navigate = useNavigate();

    const features = [
        {
            title: t('features.edit.title'),
            subtitle: t('features.edit.subtitle'),
            image: '/image_templates/MaterialSwap.webp',
            icon: <Layers className="w-5 h-5" />,
            cta: t('features.edit.cta'),
            link: '/edit',
            badge: t('features.edit.badge'),
            className: "md:col-span-2 md:row-span-1"
        },
        {
            title: t('features.upscale.title'),
            subtitle: t('features.upscale.subtitle'),
            image: '/image_templates/RenderEnhancer.webp',
            icon: <Maximize className="w-5 h-5" />,
            cta: t('features.upscale.cta'),
            link: '/upscale',
            badge: t('features.upscale.badge'),
            className: "md:col-span-1 md:row-span-1"
        },
        {
            title: t('features.video.title'),
            subtitle: t('features.video.subtitle'),
            image: '/image_templates/UrbanContext.webp',
            icon: <Video className="w-5 h-5" />,
            cta: t('features.video.cta'),
            link: '/generate-video',
            badge: t('features.video.badge'),
            className: "md:col-span-1 md:row-span-1"
        },
        {
            title: t('features.workflow.title'),
            subtitle: t('features.workflow.subtitle'),
            image: '/image_templates/Modern-Multi-Level-House.webp',
            icon: <Zap className="w-5 h-5" />,
            cta: t('features.workflow.cta'),
            link: '/create',
            badge: t('features.workflow.badge'),
            className: "md:col-span-2 md:row-span-1"
        }
    ];

    return (
        <section className="py-12 bg-[#F7F7F7] font-space-grotesk">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-20">
                <div className="text-center space-y-4">
                    {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        {t('title')}
                    </h2> */}
                    <p className="text-3xl text-gray-900 max-w-5xl mx-auto font-light">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col",
                                feature.className
                            )}
                        >
                            <div className="relative h-full min-h-[350px] overflow-hidden">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                                {/* Badge */}
                                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 z-20">
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{feature.badge}</span>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="space-y-1">
                                        <h3 className="text-3xl font-bold text-white tracking-tight">{feature.title}</h3>
                                        <p className="text-sm text-gray-200 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {feature.subtitle}
                                        </p>
                                    </div>

                                    {/* <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <Button
                                            onClick={() => navigate(feature.link)}
                                            className="bg-white text-black hover:bg-gray-100 rounded-2xl py-6 px-8 text-sm font-bold transition-all flex items-center gap-3 shadow-xl"
                                        >
                                            {feature.cta}
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
