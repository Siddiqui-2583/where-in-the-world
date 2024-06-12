"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <Button
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
      variant="ghost"
      className="bg-gray-200 rounded p-2 dark:bg-gray-700 flex items-center gap-2"
    >
      {theme === "dark" ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
