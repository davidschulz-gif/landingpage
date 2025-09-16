"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const getTrustedByItems = (iconSizes: any) => [
  {
    title: "CERTIFIED BY",
    logo: (
      <div className="relative" style={{ width: iconSizes.small }}>
        <Image src="/logo/ihk_logo.avif" alt="IHK Logo" width={iconSizes.small} height={iconSizes.small * 0.6} className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
      </div>
    )
  },
  {
    title: "GPU ENGINE USED",
    logo: (
      <div className="relative" style={{ width: iconSizes.large }}>
        <Image src="/logo/nvidia_logo.svg" alt="NVIDIA Logo" width={iconSizes.large} height={iconSizes.large * 0.5} className="w-full h-auto" />
      </div>
    )
  },
  {
    title: "INTEGRATIONS",
    logo: (
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105" style={{ width: iconSizes.medium }}>
          <Image src="/logo/revit_logo.avif" alt="Revit" width={iconSizes.medium} height={iconSizes.medium * 0.5} className="w-full h-auto" />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105" style={{ width: iconSizes.small }}>
          <Image src="/logo/rhino_logo.png" alt="Rhino" width={iconSizes.small} height={iconSizes.small} className="w-full h-auto" />                     
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105" style={{ width: iconSizes.medium }}>
          <Image src="/logo/archicad_logo.avif" alt="ArchiCAD" width={iconSizes.medium} height={iconSizes.medium * 0.5} className="w-full h-auto" />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105" style={{ width: iconSizes.medium }}>
          <Image src="/logo/sketchup.png" alt="SketchUp" width={iconSizes.medium} height={iconSizes.medium * 0.5} className="w-full h-auto" />
        </div>
      </div>
    )
  },
  {
    title: "AS SEEN ON",
    logo: (
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105" style={{ width: iconSizes.small }}>
          <Image src="/logo/dab_logo.png" alt="DAB Logo" width={iconSizes.small} height={iconSizes.small * 0.6} className="w-full h-auto" />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105" style={{ width: iconSizes.small }}>
          <Image src="/logo/80sek_black.png" alt="80sek Logo" width={iconSizes.small} height={iconSizes.small * 0.6} className="w-full h-auto" />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105" style={{ width: iconSizes.small }}>
          <Image src="/logo/heinze.png" alt="Heinze Logo" width={iconSizes.small} height={iconSizes.small * 0.6} className="w-full h-auto" />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105" style={{ width: iconSizes.small }}>
          <Image src="/logo/baunetz-newsletter-logo.png" alt="Baunetz Logo" width={iconSizes.small} height={iconSizes.small * 0.6} className="w-full h-auto" />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105" style={{ width: iconSizes.small }}>
          <Image src="/logo/konferenzen-logo.png" alt="Konferenzen Logo" width={iconSizes.small} height={iconSizes.small * 0.6} className="w-full h-auto" />
        </div>
      </div>
    )
  },
  {
    title: "FINALIST FOR TIC\nAWARD 2024.",
    logo: (
      <div className="relative cursor-pointer" style={{ width: iconSizes.small }}>
        <Image src="/logo/tic_logo.png" alt="TIC Logo" width={iconSizes.small} height={iconSizes.small * 0.5} className="w-full h-auto" />
      </div>
    )
  },
  {
    title: "MEMBER OF.",
    logo: (
      <div className="relative" style={{ width: iconSizes.medium }}>
        <Image src="/logo/lo_bdbau_1c_rz.avif" alt="Member Logo" width={iconSizes.medium} height={iconSizes.medium * 0.5} className="w-full h-auto" />
      </div>
    )
  }
];

export const TrustedBySection = () => {
  const [iconSizes, setIconSizes] = useState({ small: 16, medium: 32, large: 48 });

  useEffect(() => {
    console.log("asdfads")
    const updateIconSizes = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIconSizes({ small: 24, medium: 36, large: 32 });
      } else if (width < 1024) {
        setIconSizes({ small: 36, medium: 48, large: 48 });
      } else if (width < 1280) {
        setIconSizes({ small: 48, medium: 64, large: 64 });
      } else {
        setIconSizes({ small: 64, medium: 78, large: 96 });
      }
    };

    updateIconSizes();
    window.addEventListener('resize', updateIconSizes);
    return () => window.removeEventListener('resize', updateIconSizes);
  }, []);

  return (
    <div className="w-full bg-[#f0f0f0] backdrop-blur-sm relative z-30" style={{ minHeight: '15%', maxHeight: '15%', height: '15%' }}>
      <div className="flex justify-center items-start" style={{ padding: '10px 0px 10px' }}>
        <div className="flex flex-wrap justify-around gap-y-6" style={{ width: '100%' }}>
          {getTrustedByItems(iconSizes).map((item, index) => (
            <div key={index} className="flex flex-col" style={{ width: 'max-content' }}>
              <div 
                className="text-xs font-bold text-center uppercase mb-3"
                style={{ 
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  lineHeight: 1,
                  height: '24px'
                }}
              >
                {item.title}
              </div>
              
              <div className="flex items-center justify-center hover:cursor-pointer" style={{ height: '60px' }}>
                {[2,3].includes(index) ? (
                  item.logo
                ) : (
                  <div className="transition-all px-2 duration-300 hover:scale-110">
                    {item.logo}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};