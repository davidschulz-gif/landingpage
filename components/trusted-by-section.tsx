"use client";
import React from "react";
import Image from "next/image";

const trustedByItems = [
  {
    title: "CERTIFIED BY",
    logo: (
      <div className="relative" style={{ width: '30px', height: 'max-content' }}>
        <Image src="/logo/ihk_logo.avif" alt="IHK Logo" width={30} height={18} className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
      </div>
    )
  },
  {
    title: "GPU ENGINE USED",
    logo: (
      <div className="relative" style={{ width: '120px', height: 'max-content' }}>
        <Image src="/logo/nvidia_logo.svg" alt="NVIDIA Logo" width={120} height={60}  />
      </div>
    )
  },
  {
    title: "INTEGRATIONS",
    logo: (
      <div className="flex items-center justify-center gap-0 w-full">
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105">
          <Image src="/logo/revit_logo.avif" alt="Revit" width={120} height={60}  />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105">
          <Image src="/logo/rhino_logo.png" alt="Rhino" width={60} height={60}  />                     
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105">
          <Image src="/logo/archicad_logo.avif" alt="ArchiCAD" width={120} height={60}  />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105">
          <Image src="/logo/sketchup.png" alt="SketchUp" width={120} height={60}  />
        </div>
      </div>
    )
  },
  {
    title: "AS SEEN ON",
    logo: (
      <div className="flex items-center justify-center gap-0 w-full">
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105">
          <Image src="/logo/dab_logo.png" alt="DAB Logo" width={80} height={50}  />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105">
          <Image src="/logo/80sek_black.png" alt="80sek Logo" width={80} height={50}  />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105">
          <Image src="/logo/heinze.png" alt="Heinze Logo" width={80} height={50}  />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105">
          <Image src="/logo/baunetz-newsletter-logo.png" alt="Baunetz Logo" width={80} height={50}  />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105">
          <Image src="/logo/konferenzen-logo.png" alt="Konferenzen Logo" width={80} height={50}  />
        </div>
      </div>
    )
  },
  {
    title: "FINALIST FOR TIC\nAWARD 2024.",
    logo: (
      <div className="relative cursor-pointer" style={{ width: '60px', height: 'max-content' }}>
        <Image src="/logo/tic_logo.png" alt="TIC Logo" width={120} height={60}  />
      </div>
    )
  },
  {
    title: "MEMBER OF.",
    logo: (
      <div className="relative" style={{ width: '110px', height: 'max-content' }}>
        <Image src="/logo/lo_bdbau_1c_rz.avif" alt="Member Logo" width={120} height={60}  />
      </div>
    )
  }
];

export const TrustedBySection = () => {
  return (
    <div className="w-full bg-[#f0f0f0] backdrop-blur-sm relative z-30" style={{ minHeight: '15%', maxHeight: '15%', height: '15%' }}>
      <div className="flex justify-center items-start" style={{ padding: '10px 0px 20px' }}>
        <div className="flex flex-wrap justify-around gap-x-2 gap-y-6" style={{ width: '100%' }}>
          {trustedByItems.map((item, index) => (
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
                  <div className="transition-all duration-300 hover:scale-110">
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