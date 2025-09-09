"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { BreathingAnimationText } from "./breathing-animation-text";

const pricingPlans = [
  {
    id: "starter",
    name: "STARTER",
    monthlyPrice: "€5",
    yearlyPrice: "€59",
    period: "/month",
    yearlyPeriod: "/year",
    yearlyDiscount: "75% off",
    bgColor: "#ffffff",
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
    buttonText: "Get Started",
    buttonBg: "#ff3636"
  },
  {
    id: "explorer",
    name: "EXPLORER",
    monthlyPrice: "€12",
    yearlyPrice: "€149",
    period: "/month",
    yearlyPeriod: "/year",
    yearlyDiscount: "75% off",
    bgColor: "#f8f9fa",
    textColor: "#000000",
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
    buttonText: "Get Started",
    buttonBg: "#ff3636",
    popular: true
  },
  {
    id: "pro",
    name: "PRO",
    monthlyPrice: "€25",
    yearlyPrice: "€299",
    period: "/month",
    yearlyPeriod: "/year",
    yearlyDiscount: "75% off",
    bgColor: "#ffffff",
    textColor: "#000000",
    features: [
      "1000 CREDITS /month (e.g. 800 base images and 40 Refinements)",
      "ALL FEATURES FROM EXPLORER",
      "4 CONCURRENT JOBS",
      "PREMIUM LIVE VIDEO CALL SUPPORT",
      "INCREASED SPEED OF GENERATION",
      "RESOLUTION UP TO 13K"
    ],
    buttonText: "Get Started",
    buttonBg: "#ff3636"
  }
];

export function ManyChatPricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isYearly, setIsYearly] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"]
  });

  // Multi-layer parallax effects
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  
  const cardParallaxY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  
  // Cards sliding from behind center card - sticky until all cards visible
  const leftCardX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.85], ["100%", "100%", "0%", "0%"]);
  const rightCardX = useTransform(scrollYProgress, [0, 0.5, 0.75, 0.85], ["-100%", "-100%", "0%", "0%"]);
  const leftCardOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.85], [0, 0, 1, 1]);
  const rightCardOpacity = useTransform(scrollYProgress, [0, 0.5, 0.75, 0.85], [0, 0, 1, 1]);
  const centerCardOpacity = useTransform(scrollYProgress, [0, 0.1, 0.85], [0, 1, 1]);

  return (
    <section 
      ref={containerRef}
      className="h-[400vh] py-20 relative"
      style={{ backgroundColor: '#f0f0f0' }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-4">
        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-8"
            style={{ y: headerY, opacity: headerOpacity }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BreathingAnimationText animationType="black-gray" className="font-space-grotesk">
              <h2 
                className="text-[30px] font-normal text-black mb-6"
                style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}
              >
                PROFESSIONAL PLANS
              </h2>
            </BreathingAnimationText>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isYearly 
                    ? 'bg-white border-2 text-black' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={{
                  borderColor: isYearly ? '#ff3636' : 'transparent'
                }}
              >
                Yearly Billing {isYearly && <span className="text-white px-2 py-1 rounded ml-2" style={{ backgroundColor: '#ff3636', fontFamily: "'Space Grotesk', sans-serif" }}>75% OFF</span>}
              </button>
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !isYearly 
                    ? 'bg-white border-2 text-black' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={{
                  borderColor: !isYearly ? '#ff3636' : 'transparent'
                }}
              >
                Monthly Billing
              </button>
            </div>
            <BreathingAnimationText animationType="black-gray">
              <p className="text-gray-600" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Switch to Yearly to save 75%
              </p>
            </BreathingAnimationText>
          </motion.div>

          <div className="relative flex justify-center items-center h-[75vh] min-h-[650px] w-full gap-4">
          {/* Left Card */}
          <motion.div
            className="w-full max-w-xs z-10"
            style={{
              x: leftCardX,
              opacity: leftCardOpacity,
              y: cardParallaxY,
            }}
          >
            <PricingCard plan={pricingPlans[0]} isYearly={isYearly} />
          </motion.div>

          {/* Center Card */}
          <motion.div
            className="w-full max-w-xs z-30"
            style={{
              opacity: centerCardOpacity,
              y: cardParallaxY,
            }}
          >
            <PricingCard plan={pricingPlans[1]} isYearly={isYearly} />
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="w-full max-w-xs z-10"
            style={{
              x: rightCardX,
              opacity: rightCardOpacity,
              y: cardParallaxY,
            }}
          >
            <PricingCard plan={pricingPlans[2]} isYearly={isYearly} />
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, isYearly }: { plan: typeof pricingPlans[0]; isYearly: boolean }) {
  return (
    <div
      className="flex h-[80vh] min-h-[700px] max-h-[850px] flex-col items-center justify-between rounded-[1.5rem] sm:rounded-[2rem] p-3 sm:p-4 pt-0 md:rounded-[3.2rem] md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      style={{
        backgroundColor: plan.bgColor,
        color: plan.textColor,
      }}
    >
      <div className="flex w-full flex-col items-center">
        <div className="relative mt-4 sm:mt-6 flex w-full flex-col items-center text-center">
          {plan.popular && (
            <div className="mb-2">
              <span className="text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap" style={{ backgroundColor: '#ff3636', fontFamily: "'Space Grotesk', sans-serif" }}>
                Most Popular
              </span>
            </div>
          )}
          
          <BreathingAnimationText animationType="black-gray">
            <span 
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {plan.name}
            </span>
          </BreathingAnimationText>
          
          <div className="mb-4 sm:mb-6">
            <div className="flex items-baseline justify-center">
              <span 
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              </span>
              <span className="text-sm sm:text-base ml-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{isYearly ? plan.yearlyPeriod : plan.period}</span>
            </div>
            {isYearly && (
              <div className="text-xs mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Billed yearly ({plan.yearlyPrice}/year)
              </div>
            )}
            {!isYearly && (
              <div className="text-xs mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Billed monthly
              </div>
            )}
            <div className="text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Plus 19% VAT
            </div>
            {isYearly && (
              <div className="text-xs mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Save €{plan.id === 'starter' ? '169' : plan.id === 'explorer' ? '439' : '899'} with annual billing 75% off
              </div>
            )}
          </div>
        </div>

        <ul className="mt-2 sm:mt-4 grid w-full gap-1 sm:gap-2 flex-1">
          {plan.features.map((feature, index) => (
            <li 
              key={index}
              className="relative flex min-h-[2rem] items-center justify-between uppercase text-xs font-medium border-b border-opacity-20 pb-1 sm:pb-2"
              style={{ 
                borderColor: plan.textColor === '#ffffff' ? '#ffffff1F' : '#0000001F'
              }}
            >
              <span className="pr-2 leading-tight text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {feature}
              </span>
              <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            </li>
          ))}
        </ul>
      </div>

      <Button
        className="mt-4 w-full rounded-full px-4 sm:px-6 py-3 text-xs font-normal uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg flex-shrink-0"
        style={{
          backgroundColor: plan.buttonBg,
          color: '#ffffff',
          fontFamily: "'Space Grotesk', sans-serif"
        }}
      >
        Get Started
      </Button>
    </div>
  );
}