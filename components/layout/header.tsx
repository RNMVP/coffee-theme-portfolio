"use client";
import { title } from "../primitives";
import LottieJsonComponent from "../lottieJson";
import { ThemeSwitch } from "../theme-switch";
import { Button } from "@heroui/button";
import { SwitchLenguage } from "../lenguage-switch";

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
          timeToPause={4400}
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
        <ul className="flex gap-2">
          <li>
            <Button
              onPress={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="light"
            >
              Quem sou
            </Button>
          </li>
          <li>
            <Button
              onPress={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="light"
            >
              Projetos
            </Button>
          </li>
          <li>
            <Button
              onPress={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="light"
            >
              Contato
            </Button>
          </li>
        </ul>
        <SwitchLenguage />
        <ThemeSwitch />
      </div>
    </header>
  );
}
