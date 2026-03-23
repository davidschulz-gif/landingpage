'use client'
import { apiUrl } from '@/lib/constants';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

export const ImageTemplates: React.FC = () => {
    const t = useTranslations('ImageTemplates');
    const locale = useLocale();

    const [imageTemplates, setImageTemplates] = useState<any[]>([]);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {

                const response = await fetch(
                    `${apiUrl}/api/customization/templates`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                        },
                    }
                )
                const fetchedData = await response.json();

                const visibleCategories = (fetchedData?.categories || []).filter((cat: any) => cat.slug !== 'material-style');
                const t1Category = visibleCategories.find((cat: any) => cat.slug === 'architecture-render')?.templates;
                const t2Category = visibleCategories.find((cat: any) => cat.slug === 'interior')?.templates;
                const templateSlugArray = [
                    'institutional-buildings',
                    'commercial-buildings',
                    'recreational-buildings',
                    'agricultural-buildings',
                    'residential-buildings',
                    'industrial-buildings',
                    'multistory-office-building',
                    'architectural-sculptural',
                    'modern-living-room',
                    'minimalist-interior',
                    'industrial-loft-living-room'
                ]
                const rowTemplates = [...t1Category, ...t2Category]?.filter((t: any) => templateSlugArray.includes(t.slug));
                const allTemplates = rowTemplates.map((t: any) => ({
                    id: `template-${t.id}`,
                    backendId: t.id,
                    title: locale === 'de' ? (t.displayNameDe || '') : (t.displayNameEn || ''),
                    description: locale === 'de' ? (t.descriptionDe || '') : (t.descriptionEn || ''),
                    prompt: t.promptSnippet,
                    thumbnail: t.imageUrl || ''
                }));

                // Ensure we have 11 templates for the grid
                setImageTemplates(allTemplates.slice(0, 11));
            } catch (err) {
                console.error('Failed to fetch templates for showcase:', err);
            }
        };
        fetchTemplates();
    }, [locale]);

    return (
        <div className="max-w-7xl mx-auto py-1 px-6 sm:px-10 space-y-8 w-full">
            <div className="text-center space-y-2">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">{t('title')}</h2>
                <p className="text-lg text-gray-500 font-light">{t('subtitle')}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[220px]">
                {/* Dynamic Templates for the Grid */}
                {imageTemplates.map((template, index) => {

                    // Assign grid spans based on index to recreate the Krea.ai asymmetric look
                    let spanClasses = "col-span-1 row-span-1";
                    if (index === 0) { // Large center
                        spanClasses = "col-span-2 row-span-2 md:col-start-2 md:row-start-2";
                    } else if (index === 1) { // Wide top
                        spanClasses = "col-span-2 row-span-1 md:col-start-2 md:row-start-1";
                    } else if (index === 2) { // Wide middle
                        spanClasses = "col-span-2 row-span-1 md:col-start-1 md:row-start-4 md:col-span-2";
                    }

                    return (
                        <div
                            key={template.id}
                            className={`group relative rounded-[32px] overflow-hidden border border-gray-100 bg-white transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-1 ${spanClasses}`}
                        >
                            <img
                                src={template.thumbnail || ''}
                                alt={template.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Glassmorphism Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end gap-3 h-full">
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-bold text-white tracking-tight leading-tight">{template.title}</h3>
                                        {template.description && (
                                            <p className="text-sm text-white/80 line-clamp-2 leading-snug">
                                                {template.description}
                                            </p>
                                        )}
                                    </div>
                                    {/* <Button
                                                size="sm"
                                                onClick={() => handleTryImageTemplate(template)}
                                                className="w-fit bg-white text-black hover:bg-gray-100 rounded-xl font-bold px-6 shadow-xl"
                                            >
                                                {t('landing.showcase.try_now', 'Try Now')}
                                            </Button> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

