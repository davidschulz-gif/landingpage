'use client'
import { Play } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';



export const VideoTemplates: React.FC = () => {
    const t = useTranslations("VideoGenerate");
   const VIDEO_TEMPLATES = [
{
    id: "timelapse",
    title: "videoGenerate.templates.items.timelapse.title",
    description: "videoGenerate.templates.items.timelapse.description",
    prompt: "...",
    thumbnail: "template_gif/Timelapse.gif",
},
{
    id: "drone-flyover",
    title: "videoGenerate.templates.items.droneFlyover.title",
    description: "videoGenerate.templates.items.droneFlyover.description",
    prompt: "...",
    thumbnail: "template_gif/DroneFlyover.gif",
},
{
    id: "construction-timelapse",
    title: "videoGenerate.templates.items.constructionTimelapse.title",
    description: "videoGenerate.templates.items.constructionTimelapse.description",
    prompt: "...",
    thumbnail: "template_gif/ConstructionTimelapse.gif",
},
{
    id: "animated-render",
    title: "videoGenerate.templates.items.animatedRender.title",
    description: "videoGenerate.templates.items.animatedRender.description",
    prompt: "...",
    thumbnail: "template_gif/AnimatedRender.gif",
},
{
    id: "building-assembly",
    title: "videoGenerate.templates.items.buildingAssembly.title",
    description: "videoGenerate.templates.items.buildingAssembly.description",
    prompt: "...",
    thumbnail: "template_gif/BuildingAssembly.gif",
},
{
    id: "unveiling",
    title: "videoGenerate.templates.items.unveiling.title",
    description: "videoGenerate.templates.items.unveiling.description",
    prompt: "...",
    thumbnail: "template_gif/Unveiling.gif",
},
{
    id: "balloon-house",
    title: "videoGenerate.templates.items.balloonHouse.title",
    description: "videoGenerate.templates.items.balloonHouse.description",
    prompt: "...",
    thumbnail: "template_gif/BalloonHouse.gif",
},
{
    id: "sun-cycle",
    title: "videoGenerate.templates.items.sunCycle.title",
    description: "videoGenerate.templates.items.sunCycle.description",
    prompt: "...",
    thumbnail: "template_gif/SunCycle.gif",
},
{
    id: "architectural-walkthrough",
    title: "videoGenerate.templates.items.walkthrough.title",
    description: "videoGenerate.templates.items.walkthrough.description",
    prompt: "...",
    thumbnail: "template_gif/ArchitecturalWalkthroughGif.gif",
},
{
    id: "nature-overgrowth",
    title: "videoGenerate.templates.items.natureOvergrowth.title",
    description: "videoGenerate.templates.items.natureOvergrowth.description",
    prompt: "...",
    thumbnail: "template_gif/NatureOvergrowthGif.gif",
},
{
    id: "construction-progress-reveal",
    title: "videoGenerate.templates.items.constructionProgressReveal.title",
    description: "videoGenerate.templates.items.constructionProgressReveal.description",
    prompt: "...",
    thumbnail: "template_gif/Construction-Progress-Reveal.gif",
},
{
    id: "day-to-night-transition",
    title: "videoGenerate.templates.items.dayToNightTransition.title",
    description: "videoGenerate.templates.items.dayToNightTransition.description",
    prompt: "...",
    thumbnail: "template_gif/Day-to-Night-Architectural-Transition.gif",
},
{
    id: "drone-cinematic-flyover",
    title: "videoGenerate.templates.items.droneCinematicFlyover.title",
    description: "videoGenerate.templates.items.droneCinematicFlyover.description",
    prompt: "...",
    thumbnail: "template_gif/Drone-Cinematic-Flyover.gif",
},
{
    id: "building-assembly-animation",
    title: "videoGenerate.templates.items.buildingAssemblyAnimation.title",
    description: "videoGenerate.templates.items.buildingAssemblyAnimation.description",
    prompt: "...",
    thumbnail: "template_gif/Building-Assembly-Animation.gif",
},
{
    id: "before-after-renovation",
    title: "videoGenerate.templates.items.beforeAfterRenovation.title",
    description: "videoGenerate.templates.items.beforeAfterRenovation.description",
    prompt: "...",
    thumbnail: "template_gif/Before -After-Renovation.gif",
},
{
    id: "real-estate-promo",
    title: "videoGenerate.templates.items.realEstatePromo.title",
    description: "videoGenerate.templates.items.realEstatePromo.description",
    prompt: "...",
    thumbnail: "template_gif/Real-Estate-Promo-Style.gif",
},
{
    id: "blueprint-to-reality",
    title: "videoGenerate.templates.items.blueprintToReality.title",
    description: "videoGenerate.templates.items.blueprintToReality.description",
    prompt: "...",
    thumbnail: "template_gif/Blueprint-to-Reality.gif",
},
{
    id: "skeleton-to-structure",
    title: "videoGenerate.templates.items.skeletonToStructure.title",
    description: "videoGenerate.templates.items.skeletonToStructure.description",
    prompt: "...",
    thumbnail: "template_gif/Skeleton-to-Structure.gif",
},
{
    id: "empty-to-luxury",
    title: "videoGenerate.templates.items.emptyToLuxury.title",
    description: "videoGenerate.templates.items.emptyToLuxury.description",
    prompt: "...",
    thumbnail: "template_gif/Empty-Interior-t- Luxury-Space.gif",
},
{
    id: "luxury-villa-reveal",
    title: "videoGenerate.templates.items.luxuryVillaReveal.title",
    description: "videoGenerate.templates.items.luxuryVillaReveal.description",
    prompt: "...",
    thumbnail: "template_gif/Luxury-Villa-Reveal.gif",
},
{
    id: "urban-land-to-mega-project",
    title: "videoGenerate.templates.items.urbanLandToMegaProject.title",
    description: "videoGenerate.templates.items.urbanLandToMegaProject.description",
    prompt: "...",
    thumbnail: "template_gif/Urban-Land-to-Mega-Project.gif",
},
{
    id: "concrete-foundation-timelapse",
    title: "videoGenerate.templates.items.concreteFoundationTimelapse.title",
    description: "videoGenerate.templates.items.concreteFoundationTimelapse.description",
    prompt: "...",
    thumbnail: "template_gif/Concrete-Foundation-Timelapse.gif",
},
{
    id: "glass-facade-showcase",
    title: "videoGenerate.templates.items.glassFacadeShowcase.title",
    description: "videoGenerate.templates.items.glassFacadeShowcase.description",
    prompt: "...",
    thumbnail: "template_gif/Glass-Facade-Showcase.gif",
},
{
    id: "mega-project-scale-reveal",
    title: "videoGenerate.templates.items.megaProjectScaleReveal.title",
    description: "videoGenerate.templates.items.megaProjectScaleReveal.description",
    prompt: "...",
    thumbnail: "template_gif/Mega-Project-Scale-Reveal.gif",
},
{
    id: "smart-building-highlight",
    title: "videoGenerate.templates.items.smartBuildingHighlight.title",
    description: "videoGenerate.templates.items.smartBuildingHighlight.description",
    prompt: "...",
    thumbnail: "template_gif/Smart-Building-Highlight.gif",
},
{
    id: "green-architecture-evolution",
    title: "videoGenerate.templates.items.greenArchitectureEvolution.title",
    description: "videoGenerate.templates.items.greenArchitectureEvolution.description",
    prompt: "...",
    thumbnail: "template_gif/Green-Architecture-Evolution.gif",
},
{
    id: "night-construction-site",
    title: "videoGenerate.templates.items.nightConstructionSite.title",
    description: "videoGenerate.templates.items.nightConstructionSite.description",
    prompt: "...",
    thumbnail: "template_gif/Night-Construction-Site.gif",
},
{
    id: "skyscraper-vertical-growth",
    title: "videoGenerate.templates.items.skyscraperVerticalGrowth.title",
    description: "videoGenerate.templates.items.skyscraperVerticalGrowth.description",
    prompt: "...",
    thumbnail: "template_gif/Skyscraper-Vertical-Growth.gif",
},
{
    id: "architectural-detail-macro",
    title: "videoGenerate.templates.items.architecturalDetailMacro.title",
    description: "videoGenerate.templates.items.architecturalDetailMacro.description",
    prompt: "...",
    thumbnail: "template_gif/Architectural-Detail-Macro.gif",
},
{
    id: "resort-development-reveal",
    title: "videoGenerate.templates.items.resortDevelopmentReveal.title",
    description: "videoGenerate.templates.items.resortDevelopmentReveal.description",
    prompt: "...",
    thumbnail: "template_gif/Resort-Development-Reveal.gif",
}
];

    return (
         <div className="max-w-7xl mx-auto py-16 px-6 sm:px-10 space-y-8 w-full text-gray-900">
                    <div className="text-center space-y-2">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900">{t('landing.showcase.videos.title')}</h2>
                        <p className="text-lg text-gray-500 font-light">{t('landing.showcase.videos.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[220px]">
                        {VIDEO_TEMPLATES.filter(t => [
                            'unveiling',
                            'drone-flyover',
                            'construction-progress-reveal',
                            'urban-land-to-mega-project',
                            'building-assembly',
                            'construction-timelapse',
                            'night-construction-site'
                        ].includes(t.id)).map((template) => {
                            // Assign specific grid positions to recreate the exact 7-item layout requested
                            let spanClasses = "col-span-1 row-span-1";
                            if (template.id === 'unveiling') spanClasses = "col-span-1 row-span-1 md:col-start-1 md:row-start-1";
                            else if (template.id === 'drone-flyover') spanClasses = "col-span-2 row-span-2 md:col-start-2 md:row-start-1";
                            else if (template.id === 'construction-progress-reveal') spanClasses = "col-span-1 row-span-1 md:col-start-4 md:row-start-1";
                            else if (template.id === 'urban-land-to-mega-project') spanClasses = "col-span-1 row-span-1 md:col-start-1 md:row-start-2";
                            else if (template.id === 'building-assembly') spanClasses = "col-span-1 row-span-1 md:col-start-4 md:row-start-2";
                            else if (template.id === 'construction-timelapse') spanClasses = "col-span-2 md:col-span-3 row-span-1 md:col-start-1 md:row-start-3";
                            else if (template.id === 'night-construction-site') spanClasses = "col-span-1 md:col-span-1 row-span-1 md:col-start-4 md:row-start-3";

                            return (
                                <div
                                    key={template.id}
                                    className={`group relative rounded-[32px] overflow-hidden border border-gray-100 bg-gray-100 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-1 ${spanClasses}`}
                                >
                                    <img
                                        src={template.thumbnail}
                                        alt={t(template.title)}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-5 left-5 bg-white p-3 rounded-full shadow-md z-10 transition-transform group-hover:scale-110 flex items-center justify-center">
                                        <Play className="w-4 h-4 fill-black text-black ml-px" />
                                    </div>
                                    {/* Glassmorphism Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-20">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-3">
                                            <div className="space-y-1">
                                                <h3 className="text-xl font-bold text-white tracking-tight leading-tight">{template.title}</h3>
                                            </div>
                                            {/* <Button
                                                size="sm"
                                                onClick={() => handleTryVideoTemplate(template)}
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

