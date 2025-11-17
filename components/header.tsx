import { ThemeSwitch } from "./theme-switch";

import { title } from "./primitives";
import LottieJsonComponent from "./lottieJson";
import SwitchTheme from "./switchTheme";

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-between p-4 border rounded-full ${className}`}
    >
      <div className="flex items-center gap-4">
        <LottieJsonComponent
          animationData={require("@/assets/lottie/coffeeLove.json")}
          loop={true}
          autoplay={true}
        />
        <div>
          <h1 className={title({ className: "text-3xl lg:text-4xl" })}>
            Renan&nbsp;
          </h1>
          <h2
            className={title({
              color: "yellow",
              className: "text-2xl lg:text-3xl",
            })}
          >
            N. Viana
          </h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <SwitchTheme />
      </div>
    </header>
  );
}
