"use client";
import { Switch } from "@heroui/switch";
import { BrazilIcon, UnitedStatesIcon } from "./icons";
import { useState } from "react";
import { setLocaleCookie } from "@/server-actions/setup-cookies";

export function SwitchLenguage() {
  if (typeof window === "undefined") return null;
  const cookies = document.cookie.split(";");
  const localeCookie = cookies
    .find((cookie) => cookie.includes("ren_portfolio_locale="))
    ?.split("=")[1];
  console.log("localeCookie on Header component:", localeCookie);

  const [isPortuguese, setIsPortuguese] = useState(localeCookie === "pt");
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
