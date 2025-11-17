"use client";
import { Switch } from "@heroui/switch";
import { MoonFilledIcon, SunFilledIcon } from "@/components/icons";
import { useTheme } from "next-themes";

export default function App() {
  const { theme, setTheme } = useTheme();
  return (
    <Switch
      defaultSelected={theme === "dark"}
      color="primary"
      endContent={<MoonFilledIcon size={18} />}
      size="lg"
      startContent={<SunFilledIcon size={18} />}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    ></Switch>
  );
}
