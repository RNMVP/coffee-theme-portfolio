"use client";
import Lottie from "lottie-react";

export default function LottieJsonComponent({
  animationData,
  loop,
  autoplay,
}: {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
}) {
  return (
    <div className="w-[60px] h-[60px]">
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  );
}
