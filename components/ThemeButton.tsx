"use client";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import React from "react";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-colors"
      onClick={() =>
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-5 w-5 text-orange-300" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-800" />
      )}
    </button>
  );
};

export default ThemeButton;
