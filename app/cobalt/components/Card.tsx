"use client";
import { Claude, Copilot, DeepSeek, Gemini, OpenAI } from "@lobehub/icons";
import { useTheme } from "next-themes";
import React from "react";

// 1. TypeScript Interface for the array structure
interface IconItem {
  title: string;
  size: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

// 2. The requested 'icons' array configuration
export const icons: IconItem[] = [
  {
    title: "DeepSeek",
    size: 20,
    icon: DeepSeek.Color,
  },
  {
    title: "ChatGPT",
    size: 20,
    icon: OpenAI,
  },
  {
    title: "Anthropic",
    size: 20,
    icon: Claude.Color,
  },
  {
    title: "Gemini",
    size: 20,
    icon: Gemini.Color,
  },
  {
    title: "Copilot",
    size: 20,
    icon: Copilot.Color,
  },
];

// 3. Main React Component implementing Tailwind CSS
export default function Card() {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <div className="w-80 rounded-xl bg-neutral-200 px-5 dark:bg-neutral-500/20">
        {/* Icon */}
        <div className="relative z-20 flex h-40 w-full flex-col items-center justify-center overflow-hidden mask-t-from-50% mask-r-from-50% mask-l-from-50%">
          {/* diagonal grid line */}
          <div className="absolute -z-10 h-64 w-full bg-[repeating-linear-gradient(135deg,#8d96a7_0px,#414650_0px,transparent_0.75px,transparent_10px)]"></div>
          <div className="animate-marquee relative z-50 flex shrink-0 gap-3">
            {[...icons, ...icons].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`${item.title}-${index}`}
                  className="group flex flex-col items-center justify-center rounded-full border border-slate-100/60 bg-neutral-100 p-3 dark:border-slate-700/60 dark:bg-neutral-700/90"
                >
                  <IconComponent size={item.size} />
                </div>
              );
            })}
          </div>
        </div>
        {/* content */}
        <div className="py-4">
          <h3 className="text-xl font-semibold tracking-widest text-neutral-600 uppercase dark:text-neutral-200">
            Multimodal Power
          </h3>
          <p className="-leading-4 py-2 text-sm text-neutral-800 dark:text-neutral-200">
            Context-aware code completions and architectural suggestions
            integrated directly into your active development workflow.
          </p>
        </div>

        <button
          onClick={handleThemeChange}
          className="text-netural-900 cursor-pointer border border-neutral-800 px-2.5 py-1 text-xs font-semibold text-neutral-800 uppercase dark:border-neutral-600 dark:text-white"
        >
          Switch me
        </button>
      </div>
    </div>
  );
}
