"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef } from "react";

export default function LottieJsonComponent({
  animationData,
  loop = true,
  autoplay = true,
  timeToPause,
}: {
  animationData: any;
  timeToPause?: number;
  loop?: boolean;
  autoplay?: boolean;
}) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      if (timeToPause) {
        setTimeout(() => {
          lottieRef.current?.pause();
        }, timeToPause);
      } else {
        lottieRef.current?.play();
      }
    }
  }, [timeToPause, lottieRef]);

  return (
    <div className="w-[60px] h-[60px]">
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} lottieRef={lottieRef} />
    </div>
  );
}
