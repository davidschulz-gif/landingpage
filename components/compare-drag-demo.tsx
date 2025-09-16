import React from "react";
import { CompareWithAnimation } from "./compare-with-animation";

export default function CompareDemo() {
  return (
    <section className="w-full max-w-[65%] mx-auto pb-0 overflow-x-hidden" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="w-full overflow-x-auto">
          <CompareWithAnimation />
      </div>
    </section>
  );
}