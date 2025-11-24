"use client";
import { Switch } from "@heroui/switch";
import { BrazilIcon, UnitedStatesIcon } from "./icons";
import { useState, useEffect } from "react";
import { setLocaleCookie } from "@/server-actions/setup-cookies";
import { Skeleton } from "@heroui/skeleton";
import { useIsSSR } from "@react-aria/ssr";

export function SwitchLenguage() {
  const isSSR = useIsSSR();
  const [isPortuguese, setIsPortuguese] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(";");
    const localeCookie = cookies
      .find((cookie) => cookie.includes("ren_portfolio_locale="))
      ?.split("=")[1];
    console.log("localeCookie on Header component:", localeCookie);

    setIsPortuguese(localeCookie === "pt");
  }, []);

  if (isSSR) return <Skeleton className="w-12 h-6 rounded-full" />;
  return (
    <Switch
      startContent={<BrazilIcon />}
      endContent={<UnitedStatesIcon />}
      onValueChange={(value) => {
        setLocaleCookie(value ? "pt" : "en");
        setIsPortuguese(value);
      }}
      defaultSelected={isPortuguese}
    />
  );
}
