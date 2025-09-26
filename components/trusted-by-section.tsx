"use client";
import React from "react";
import Image from "next/image";

const getTrustedByItems = () => [
  {
    title: "CERTIFIED BY",
    logo: (
      <div className="relative w-10 md:w-9 lg:w-12 xl:w-16">
        <Image
          src="/logo/ihk_logo.avif"
          alt="IHK Logo"
          width={64}
          height={38}
          className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    ),
  },
  {
    title: "GPU ENGINE USED",
    logo: (
      <div className="relative w-20 md:w-12 lg:w-16 xl:w-24">
        <Image
          src="/logo/nvidia_logo.svg"
          alt="NVIDIA Logo"
          width={96}
          height={48}
          className="w-full h-auto"
        />
      </div>
    ),
  },
  {
    title: "INTEGRATIONS",
    logo: (
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-20 md:w-12 lg:w-16 xl:w-20">
          <Image
            src="/logo/revit_logo.avif"
            alt="Revit"
            width={78}
            height={39}
            className="w-full h-auto"
          />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-14 md:w-9 lg:w-12 xl:w-16">
          <Image
            src="/logo/rhino_logo.png"
            alt="Rhino"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-24 md:w-12 lg:w-16 xl:w-20">
          <Image
            src="/logo/archicad_logo.avif"
            alt="ArchiCAD"
            width={78}
            height={39}
            className="w-full h-auto"
          />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-20 md:w-12 lg:w-16 xl:w-20">
          <Image
            src="/logo/sketchup.png"
            alt="SketchUp"
            width={78}
            height={39}
            className="w-full h-auto"
          />
        </div>
      </div>
    ),
  },
  {
    title: "AS SEEN ON",
    logo: (
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-14 md:w-9 lg:w-12 xl:w-16">
          <Image
            src="/logo/dab_logo.png"
            alt="DAB Logo"
            width={64}
            height={38}
            className="w-full h-auto"
          />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-14 md:w-9 lg:w-12 xl:w-16">
          <Image
            src="/logo/80sek_black.png"
            alt="80sek Logo"
            width={64}
            height={38}
            className="w-full h-auto"
          />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-14 md:w-9 lg:w-12 xl:w-16">
          <Image
            src="/logo/heinze.png"
            alt="Heinze Logo"
            width={64}
            height={38}
            className="w-full h-auto"
          />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-14 md:w-9 lg:w-12 xl:w-16">
          <Image
            src="/logo/baunetz-newsletter-logo.png"
            alt="Baunetz Logo"
            width={64}
            height={38}
            className="w-full h-auto"
          />
        </div>
        <div className="relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-14 md:w-9 lg:w-12 xl:w-16">
          <Image
            src="/logo/konferenzen-logo.png"
            alt="Konferenzen Logo"
            width={64}
            height={38}
            className="w-full h-auto"
          />
        </div>
      </div>
    ),
  },
  {
    title: "FINALIST FOR TIC\nAWARD 2024.",
    logo: (
      <div className="relative cursor-pointer w-10 md:w-9 lg:w-12 xl:w-16">
        <Image
          src="/logo/tic_logo.png"
          alt="TIC Logo"
          width={64}
          height={32}
          className="w-full h-auto"
        />
      </div>
    ),
  },
  {
    title: "MEMBER OF.",
    logo: (
      <div className="relative w-14 md:w-10 lg:w-16 xl:w-20">
        <Image
          src="/logo/lo_bdbau_1c_rz.avif"
          alt="Member Logo"
          width={78}
          height={39}
          className="w-full h-auto"
        />
      </div>
    ),
  },
];

export const TrustedBySection = () => {
  return (
    <div
      className="w-full bg-[#f0f0f0] backdrop-blur-sm relative z-30"
      style={{ minHeight: "15%", maxHeight: "15%", height: "15%" }}
    >
      <div className="flex justify-center items-start pt-3 md:pb-3 pb-1">
        <div
          className="flex flex-wrap justify-around gap-y-1 md:gap-y-6"
          style={{ width: "100%" }}
        >
          {getTrustedByItems().map((item, index) => (
            <div
              key={index}
              className="flex flex-col"
              style={{ width: "max-content" }}
            >
              <div
                className="text-xs font-bold text-center uppercase md:mb-3 mb-1 md:h-[24px]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  lineHeight: 1,
                }}
              >
                {item.title}
              </div>

              <div
                className="flex items-center justify-center hover:cursor-pointer"
                style={{ height: "60px" }}
              >
                {[2, 3].includes(index) ? (
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
