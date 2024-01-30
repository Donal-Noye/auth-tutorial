"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const themes = ["light", "dark", "system"];

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [activeTheme, setActiveTheme] = useState("");

  const toggleTheme = (theme: any) => {
    setTheme(theme);
    setActiveTheme(theme);
  };

  return (
    <div className="flex gap-x-2">
      {themes.map(theme => (
        <Button
          variant={activeTheme === theme ? "default" : "outline"}
          key={theme}
          onClick={() => toggleTheme(theme)}
        >
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </Button>
      ))}
    </div>
  );
}
