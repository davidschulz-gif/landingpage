"use client";
import React from "react";
import Image from "next/image";

const trustedByItems = [
  {
    title: "AS SEEN ON",
    logo: (
      <div className="relative w-full h-12">
        <Image src="/logo/dab_logo.png" alt="DAB Logo" fill className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
      </div>
    )
  },
  {
    title: "GPU ENGINE",
    logo: (
      <div className="relative w-full h-18">
        <Image src="/logo/nvidia_logo.svg" alt="NVIDIA Logo" fill className="fill object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
      </div>
    )
  },
  {
    title: "INTEGRATIONS.",
    logo: (
      <div className="flex gap-2 w-full">
        <div className="relative h-20 w-20 transition-all duration-300 hover:scale-105">
          <Image src="/logo/revit_logo.png" alt="Revit" fill className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="relative h-20 w-20 transition-all duration-300 hover:scale-105">
          <Image src="/logo/rhino_logo.svg" alt="Rhino" fill className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="relative h-20 w-20 transition-all duration-300 hover:scale-105">
          <Image src="/logo/archicad_logo.svg" alt="ArchiCAD" fill className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="relative h-20 w-20 transition-all duration-300 hover:scale-105">
          <Image src="/logo/sketchup.svg" alt="SketchUp" fill className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    )
  },
  {
    title: "CERTIFIED BY",
    logo: (
      <div className="relative w-full h-12">
        <Image src="/logo/ihk_logo.svg" alt="IHK Logo" fill className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
      </div>
    )
  },
  {
    title: "TIC AWARD 2024",
    logo: (
      <div className="relative w-full h-18">
        <Image src="/logo/tic_logo.png" alt="TIC Logo" fill className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
      </div>
    )
  },
  {
    title: "MEMBER OF",
    logo: (
      <div className="relative w-full h-18">
        <Image src="/logo/lo_bdbau_1c_rz.svg" alt="Member Logo" fill className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
      </div>
    )
  }
];

export const TrustedBySection = () => {
  return (
    <div className="w-full bg-white/80 backdrop-blur-sm py-8 relative z-30">
      <div className="w-full px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 max-w-none">
          {trustedByItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <h3 
                className="text-[11px] font-medium tracking-[0.15em] text-gray-700 uppercase text-center leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.title}
              </h3>
              
              <div className="flex items-center justify-center min-h-[80px] w-full">
                {index === 2 ? (
                  item.logo
                ) : (
                  <div className="transition-all duration-300 hover:scale-105 w-full">
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