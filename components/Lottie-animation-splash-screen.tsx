import React from "react";
import Lottie from "lottie-react";
import animationData from "../public/lottie/Loader.json";

export default function LottieAnimationSplashScreen() {
  return (
    <div className="">
      <div className="size-44">
        <Lottie animationData={animationData} loop={true} autoplay={true} />
      </div>
    </div>
  );
}
