import { ThemeSwitch } from "./theme-switch";

import { title } from "./primitives";

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-between p-4 border rounded-full ${className}`}
    >
      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <span className={title()}>Renan&nbsp;</span>
        <span className={title({ color: "yellow" })}>N. Viana</span>
      </div>
    </header>
  );
}
