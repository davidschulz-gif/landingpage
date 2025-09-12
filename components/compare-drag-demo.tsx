import React from "react";
import { Compare } from "@/components/ui/compare";
import { BreathingAnimationText } from "./breathing-animation-text";

export default function CompareDemo() {
  return (
    <section className="w-full max-w-[75%] mx-auto pt-20 pb-0" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BreathingAnimationText
            animationType="black-gray"
            className="font-space-grotesk"
          >
            <h2
              className="text-[30px] font-normal text-black mb-6"
              style={{
                fontFamily:
                  "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              }}
            >
              BEFORE & AFTER
            </h2>
          </BreathingAnimationText>
          <BreathingAnimationText animationType="black-gray">
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              See the dramatic transformation from basic CAD files to photorealistic architectural visualizations
            </p>
          </BreathingAnimationText>
        </div>
        
        <div className="flex h-[60vh] w-full items-center justify-center px-1 md:px-8">
          <div
            className="mx-auto h-full w-full rounded-3xl border border-neutral-200 bg-neutral-100 p-1 md:h-3/4 md:p-4 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <Compare
              firstImage="/hero-parallax-images/row-1-2-3/modern residential house.png"
              secondImage="/hero-parallax-images/row-1-2-3/contemporary residential villa.png"
              firstImageClassName="object-cover object-left-top w-full"
              secondImageClassname="object-cover object-left-top w-full"
              className="h-full w-full rounded-[22px] md:rounded-lg"
              slideMode="drag"
              autoplay={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}