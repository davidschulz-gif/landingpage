"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Check } from "lucide-react";
import { BreathingAnimationText } from "./breathing-animation-text";

const professionalPlans = [
  {
    id: "starter",
    name: "STARTER",
    monthlyPrice: "$19",
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
      "ALL PLUGIN INTEGRATIONS",
    ],
    buttonText: "Get Started",
    buttonBg: "#000000",
  },
  {
    id: "explorer",
    name: "EXPLORER",
    monthlyPrice: "$49",
    yearlyPrice: "€149",
    period: "/month",
    yearlyPeriod: "/year",
    yearlyDiscount: "75% off",
    bgColor: "#ffffff",
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
      "NO QUEUE",
    ],
    buttonText: "Get Started",
    buttonBg: "#000000",
    popular: true,
  },
  {
    id: "pro",
    name: "PRO",
    monthlyPrice: "$99",
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
      "RESOLUTION UP TO 13K",
    ],
    buttonText: "Get Started",
    buttonBg: "#000000",
  },
];

const educationPlans = [
  {
    id: "student",
    name: "STUDENT",
    monthlyPrice: "$9",
    yearlyPrice: "€29",
    period: "/month",
    yearlyPeriod: "/year",
    yearlyDiscount: "75% off",
    bgColor: "#ffffff",
    textColor: "#000000",
    features: [
      "25 CREDITS /month (e.g. 15 base images and 5 Refinements)",
      "STUDENT VERIFICATION REQUIRED",
      "1 CONCURRENT JOB",
      "INTEGRATED REFINER",
      "CANCEL ANYTIME",
      "SECURE PAYMENT ON STRIPE",
      "ALL PLUGIN INTEGRATIONS",
    ],
    buttonText: "Get Started",
    buttonBg: "#000000",
  },
  {
    id: "educator",
    name: "EDUCATOR",
    monthlyPrice: "$24",
    yearlyPrice: "€74",
    period: "/month",
    yearlyPeriod: "/year",
    yearlyDiscount: "75% off",
    bgColor: "#ffffff",
    textColor: "#000000",
    features: [
      "75 CREDITS /month (e.g. 50 base images and 5 Refinements)",
      "EDUCATOR VERIFICATION REQUIRED",
      "2 CONCURRENT JOBS",
      "INTEGRATED REFINER",
      "CANCEL ANYTIME",
      "SECURE PAYMENT ON STRIPE",
      "ALL PLUGIN INTEGRATIONS",
      "RESOLUTION UP TO 4K",
      "CLASSROOM SHARING TOOLS",
    ],
    buttonText: "Get Started",
    buttonBg: "#000000",
    popular: true,
  },
  {
    id: "institution",
    name: "INSTITUTION",
    monthlyPrice: "$49",
    yearlyPrice: "€149",
    period: "/month",
    yearlyPeriod: "/year",
    yearlyDiscount: "75% off",
    bgColor: "#ffffff",
    textColor: "#000000",
    features: [
      "500 CREDITS /month (e.g. 400 base images and 20 Refinements)",
      "ALL FEATURES FROM EDUCATOR",
      "4 CONCURRENT JOBS",
      "PREMIUM LIVE VIDEO CALL SUPPORT",
      "INCREASED SPEED OF GENERATION",
      "RESOLUTION UP TO 13K",
      "MULTI-USER MANAGEMENT",
    ],
    buttonText: "Get Started",
    buttonBg: "#000000",
  },
];

export function ManyChatPricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isYearly, setIsYearly] = useState(true);
  const [isProfessional, setIsProfessional] = useState(true);

  const currentPlans = isProfessional ? professionalPlans : educationPlans;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  // Multi-layer parallax effects
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const cardParallaxY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Cards sliding from behind center card - sticky until all cards visible
  const leftCardX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    ["100%", "100%", "0%", "0%"]
  );
  const rightCardX = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    ["-100%", "-100%", "0%", "0%"]
  );
  const leftCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [0, 0, 1, 1]
  );
  const rightCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [0, 0, 1, 1]
  );
  const centerCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 1, 1]
  );

  return (
    <section
      ref={containerRef}
      className="h-[420vh] py-10 relative"
      style={{ backgroundColor: "#f0f0f0" }}
      id="pricing"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-4">
        <div className="w-full max-w-7xl mx-auto px-4 relative z-10 pt-20">
          <motion.div
            className="text-center mb-0 relative z-40"
            style={{ y: headerY }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "100px" }}
          >
            <BreathingAnimationText
              animationType="black-gray"
              className="font-space-grotesk"
            >
              <h2
                className="text-[30px] font-normal text-black mb-2"
                style={{
                  fontFamily:
                    "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                }}
              >
                {isProfessional ? "PROFESSIONAL PLANS" : "EDUCATION PLANS"}
              </h2>
            </BreathingAnimationText>

            {/* Plan Type Toggle Switch */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center bg-transparent rounded-full p-1">
                {isProfessional ? (
                  <MovingBorderButton
                    duration={3000}
                    className="bg-white border-0 text-black rounded-full text-sm font-medium transition-all duration-300 shadow-sm"
                    containerClassName="rounded-full !h-10 w-30 mr-2"
                    borderClassName="bg-[radial-gradient(#ff8c00_40%,#ff3636_60%)] opacity-80"
                    borderRadius="1.5rem"
                    onClick={() => setIsProfessional(true)}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Professional
                  </MovingBorderButton>
                ) : (
                  <button
                    onClick={() => setIsProfessional(true)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-gray-600 hover:text-gray-800 bg-white/50 hover:bg-white/70"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Professional
                  </button>
                )}
                {!isProfessional ? (
                  <MovingBorderButton
                    duration={3000}
                    className="bg-white border-0 text-black rounded-full text-sm font-medium transition-all duration-300 shadow-sm"
                    containerClassName="rounded-full !h-10 w-30 ml-2"
                    borderClassName="bg-[radial-gradient(#ff8c00_100%,#ff3636_100%)] opacity-80"
                    borderRadius="1.5rem"
                    onClick={() => setIsProfessional(false)}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Education
                  </MovingBorderButton>
                ) : (
                  <button
                    onClick={() => setIsProfessional(false)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-gray-600 hover:text-gray-800 bg-white/50 hover:bg-white/70"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Education
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <BreathingAnimationText animationType="black-gray">
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    isYearly
                      ? "bg-white text-black shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Yearly Billing{" "}
                  {/* {isYearly && (
                    <span
                      className="text-white bg-black px-2 py-1 rounded ml-2"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      75% OFF
                    </span>
                  )} */}
                </button>
              </BreathingAnimationText>
              <BreathingAnimationText animationType="black-gray">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    !isYearly
                      ? "bg-white text-black shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Monthly Billing
                </button>
              </BreathingAnimationText>
            </div>
            <BreathingAnimationText animationType="black-gray">
              <p
                className="text-gray-600 pb-0 mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Switch to Yearly to save 75%
              </p>
            </BreathingAnimationText>
          </motion.div>

          <div className="relative flex justify-center items-center h-[70vh] min-h-[600px] w-full gap-4">
            {/* Left Card */}
            <motion.div
              className="w-full max-w-xs z-10"
              style={{
                x: leftCardX,
                opacity: leftCardOpacity,
                y: cardParallaxY,
              }}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <PricingCard plan={currentPlans[0]} isYearly={isYearly} />
            </motion.div>

            {/* Center Card */}
            <motion.div
              className="w-full max-w-xs z-30"
              style={{
                opacity: centerCardOpacity,
                y: cardParallaxY,
              }}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <PricingCard plan={currentPlans[1]} isYearly={isYearly} />
            </motion.div>

            {/* Right Card */}
            <motion.div
              className="w-full max-w-xs z-10"
              style={{
                x: rightCardX,
                opacity: rightCardOpacity,
                y: cardParallaxY,
              }}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <PricingCard plan={currentPlans[2]} isYearly={isYearly} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  isYearly,
}: {
  plan: (typeof professionalPlans)[0];
  isYearly: boolean;
}) {
  return (
    <div
      className="flex h-[580px] mb-4 flex-col rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3.2rem] p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      style={{
        backgroundColor: plan.bgColor,
        color: plan.textColor,
      }}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-4">
        {plan.popular && (
          <div className="mb-2">
            <MovingBorderButton
              duration={2000}
              className="bg-transparent border-0 text-black rounded-full text-[10px] font-bold uppercase tracking-wide"
              containerClassName="rounded-full !h-10 w-30"
              borderClassName="bg-[radial-gradient(#ff8c00_100%,#ff3636_100%)]"
              borderRadius="1rem"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Most Popular
            </MovingBorderButton>
          </div>
        )}

        <BreathingAnimationText animationType="black-gray">
          <span
            className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider mb-2 block"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {plan.name}
          </span>
        </BreathingAnimationText>

        {/* Pricing Section */}
        <div className="mb-3">
          <div className="flex items-baseline justify-center mb-1">
            <span
              className="text-2xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            </span>
            <span
              className="text-xs ml-1 text-gray-600"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {isYearly ? plan.yearlyPeriod : plan.period}
            </span>
          </div>

          <div className="space-y-0.5 text-[10px] text-gray-500">
            {isYearly ? (
              <>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Billed yearly ({plan.yearlyPrice}/year)
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Save €
                  {plan.id === "starter"
                    ? "169"
                    : plan.id === "explorer"
                    ? "439"
                    : "899"}{" "}
                  with annual billing
                </div>
              </>
            ) : (
              <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Billed monthly
              </div>
            )}
            <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Plus 19% VAT
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Flex Grow */}
      <div className="flex-1 mb-3">
        <ul className="space-y-1.5">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-xs font-medium py-1.5 border-b border-gray-100 last:border-b-0"
            >
              <Check className="w-2.5 h-2.5 flex-shrink-0 mt-0.5 mr-2 text-green-600" />
              <span
                className="leading-tight text-left flex-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section - Fixed at Bottom */}
      <div className="mt-auto">
        <Button
          className="animate-breathe-primary-hover w-full rounded-full px-4 py-2 text-[10px] font-medium uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
