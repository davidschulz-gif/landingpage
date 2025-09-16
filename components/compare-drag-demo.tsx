import React from "react";
import { CompareWithAnimation } from "./compare-with-animation";

export default function CompareDemo() {
  return (
    <section className="w-full max-w-7xl mx-auto pt-20 pb-0" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-32">
          <CompareWithAnimation />
        </div>
      </div>
    </section>
  );
}