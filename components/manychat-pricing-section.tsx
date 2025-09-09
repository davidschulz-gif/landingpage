"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "starter",
    name: "STARTER",
    price: "€5",
    period: "/month",
    yearlyPrice: "€59/year",
    yearlyDiscount: "75% off",
    bgColor: "#edf2ed",
    textColor: "#000000",
    features: [
      "50 CREDITS /month (e.g. 30 base images and 10 Refinements )",
      "OPT. CREDITS FROM UPS",
      "UNLIMITED CONCURRENT JOBS",
      "INTEGRATED REFINER",
      "CANCEL ANYTIME",
      "SECURE PAYMENT ON STRIPE",
      "ALL PLUGIN INTEGRATIONS"
    ],
    buttonText: "get started",
    buttonBg: "#000000"
  },
  {
    id: "explorer",
    name: "EXPLORER",
    price: "€12",
    period: "/month",
    yearlyPrice: "€149/year",
    yearlyDiscount: "75% off",
    bgColor: "#007257",
    textColor: "#ffffff",
    features: [
      "150 CREDITS /month (e.g. 100 base images and 10 Refinements )",
      "OPT. CREDITS TOP UPS",
      "2 CONCURRENT JOBS",
      "INTEGRATED REFINER",
      "CANCEL ANYTIME",
      "SECURE PAYMENT ON STRIPE",
      "ALL PLUGIN INTEGRATIONS",
      "RESOLUTION UP TO 4K",
      "NO QUEUE"
    ],
    buttonText: "get started",
    buttonBg: "#ffffff",
    popular: true
  },
  {
    id: "pro",
    name: "PRO",
    price: "€25",
    period: "/month",
    yearlyPrice: "€299/year",
    yearlyDiscount: "75% off",
    bgColor: "#edf2ed",
    textColor: "#000000",
    features: [
      "1000 CREDITS /month (e.g. 800 base images and 40 Refinements)",
      "ALL FEATURES FROM EXPLORER",
      "4 CONCURRENT JOBS",
      "PREMIUM LIVE VIDEO CALL SUPPORT",
      "INCREASED SPEED OF GENERATION",
      "RESOLUTION UP TO 13K"
    ],
    buttonText: "get started",
    buttonBg: "#000000"
  }
];

export function ManyChatPricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Cards sliding from behind center card
  const leftCardX = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "-100%"]);
  const rightCardX = useTransform(scrollYProgress, [0.5, 0.9], ["0%", "100%"]);
  const leftCardZ = useTransform(scrollYProgress, [0.3, 0.7], [-50, 0]);
  const rightCardZ = useTransform(scrollYProgress, [0.5, 0.9], [-50, 0]);

  return (
    <section 
      ref={containerRef}
      className="min-h-[200vh] py-20 pricing-scroll-container"
      style={{ backgroundColor: '#f0f0f0' }}
    >
      <div className="sticky top-[100px] sm:top-[146px] h-screen flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold text-black mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Professional Plans
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <button className="px-6 py-2 bg-white rounded-full border-2 border-red-500 text-sm font-medium hover:bg-red-50 transition-colors">
                Yearly Billing <span className="bg-red-500 text-white px-2 py-1 rounded ml-2">75% OFF</span>
              </button>
              <button className="px-6 py-2 text-gray-600 text-sm font-medium hover:text-gray-800 transition-colors">
                Monthly Billing
              </button>
            </div>
            <p className="text-gray-600">
              Switch to Yearly to save 75%
            </p>
          </motion.div>

          <div className="relative flex justify-center items-center h-[60rem]">
          {/* Left Card - Behind center, slides left */}
          <motion.div
            className="absolute w-full max-w-sm"
            style={{
              x: leftCardX,
              z: leftCardZ,
            }}
          >
            <PricingCard plan={pricingPlans[0]} />
          </motion.div>

          {/* Right Card - Behind center, slides right */}
          <motion.div
            className="absolute w-full max-w-sm"
            style={{
              x: rightCardX,
              z: rightCardZ,
            }}
          >
            <PricingCard plan={pricingPlans[2]} />
          </motion.div>

          {/* Center Card - Always visible on top */}
          <motion.div
            className="relative z-20 w-full max-w-sm"
          >
            <PricingCard plan={pricingPlans[1]} />
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: typeof pricingPlans[0] }) {
  return (
    <div
      className="flex min-h-[58rem] sm:min-h-[62rem] flex-col items-center justify-between rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 pt-0 md:rounded-[3.2rem] md:p-8 lg:h-[62.5rem] shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{
        backgroundColor: plan.bgColor,
        color: plan.textColor,
      }}
    >
      <div className="flex w-full flex-col items-center">
        <div className="relative mt-6 sm:mt-8 flex max-w-[29.6rem] flex-col items-center text-center md:mt-12 md:max-w-[48.2rem]">
          {plan.popular && (
            <>
              <svg 
                fill="none" 
                viewBox="0 0 472 275" 
                className="absolute -top-[12%] left-0 right-0 mx-auto h-auto w-[100%] rotate-[17.7deg] sm:left-[3%] md:-top-[13%] md:w-[91.8%] md:rotate-[8.38deg] opacity-80"
              >
                <path 
                  strokeDasharray="1500" 
                  strokeDashoffset="0" 
                  stroke="url(#with-without-gradient)" 
                  strokeWidth="3" 
                  d="M237.435 4.564c12.847-2.092 24.295-3.071 33.349-2.73 4.527.17 8.412.67 11.554 1.504 3.159.838 5.457 1.987 6.923 3.378 3.657 3.468 5.391 7.408 4.922 12.257-.479 4.965-3.285 11.077-9.22 18.741l-2.53 3.268 4.031-.888c60.779-13.389 103.161-16.211 131.865-12.124 28.685 4.086 43.44 15.017 49.518 28.918l.001.002c3.654 8.315 2.96 19.6-5.794 32.146-8.775 12.577-25.621 26.352-54.071 39.346l-3.169 1.448 3.217 1.306c10.33 4.197 17.483 9.809 20.953 16.661 3.667 7.241 3.014 15.473-1.631 24.342-4.662 8.902-13.295 18.32-25.317 27.676-24.029 18.702-61.249 36.885-105.981 50.036-44.757 13.158-97.658 22.686-142.546 22.734-22.447.024-42.811-2.324-59.125-7.724-16.32-5.401-28.423-13.798-34.647-25.759-4.567-8.777-4.96-22.977 7.54-36.659l2.546-2.788-3.758.284c-20.943 1.582-36.314-.671-46.74-5.206-10.393-4.521-15.784-11.255-17.112-18.72-1.318-7.412.676-14.626 4.677-21.44 4.008-6.826 9.986-13.169 16.47-18.751 12.974-11.17 27.69-19.065 31.992-21.593l-.824-2.79c-5.945.301-10.861.046-14.63-.76-3.804-.814-6.22-2.14-7.465-3.788-2.155-2.85-1.676-7.05 2.64-12.863 4.254-5.728 11.863-12.441 22.485-19.7 21.211-14.495 54.049-30.907 94.825-45.794l.019-.007.019-.008c28.264-11.169 59.331-19.77 85.014-23.955Z"
                />
                <defs>
                  <linearGradient id="with-without-gradient" x1="527.137" x2="588.555" y1="197.17" y2="215.079" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFF100" />
                    <stop offset="1" stopColor="#007257" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-yellow-400 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide animate-gradient">
                  Most Popular
                </span>
              </div>
            </>
          )}
          
          <span 
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {plan.name}
          </span>
          
          <div className="mb-6 sm:mb-8">
            <div className="flex items-baseline justify-center">
              <span 
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {plan.price}
              </span>
              <span className="text-base sm:text-lg ml-1">{plan.period}</span>
            </div>
            <div className="text-xs sm:text-sm mt-2">
              Billed yearly ({plan.yearlyPrice})
            </div>
            <div className="text-xs sm:text-sm">
              Plus 19% VAT
            </div>
            <div className="text-xs sm:text-sm mt-1">
              Save {plan.yearlyDiscount} with annual billing
            </div>
          </div>
        </div>

        <ul className="mt-4 sm:mt-8 grid w-full gap-3 sm:gap-4">
          {plan.features.map((feature, index) => (
            <li 
              key={index}
              className="relative flex min-h-[3rem] sm:min-h-[3.7rem] items-center justify-between uppercase text-xs sm:text-sm font-medium border-b border-opacity-20 pb-3 sm:pb-4"
              style={{ 
                borderColor: plan.textColor === '#ffffff' ? '#ffffff1F' : '#0000001F'
              }}
            >
              <span className="pr-2 sm:pr-3 md:pr-12 leading-tight">
                {feature}
              </span>
              <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </li>
          ))}
        </ul>
      </div>

      <Button
        className="mt-6 sm:mt-8 w-full rounded-full px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-normal uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
        style={{
          backgroundColor: plan.buttonBg,
          color: plan.textColor === '#ffffff' ? '#000000' : '#ffffff',
          fontFamily: "'Space Grotesk', sans-serif"
        }}
      >
        {plan.buttonText}
      </Button>
    </div>
  );
}