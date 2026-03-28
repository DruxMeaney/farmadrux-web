"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Palette } from "lucide-react";

const themes = [
  { id: "dark", label: "Oscuro", icon: Moon, preview: "bg-[#060212]" },
  { id: "light", label: "Claro", icon: Sun, preview: "bg-[#f5f0ff]" },
  { id: "midnight", label: "Midnight", icon: Palette, preview: "bg-[#0f0a2e]" },
];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("farmadrux-theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const switchTheme = (id: string) => {
    setTheme(id);
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem("farmadrux-theme", id);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Theme options */}
      <div
        className={`absolute bottom-16 right-0 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-[#1a1030]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-2 shadow-xl shadow-purple-vivid/10 space-y-1 min-w-[160px]">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => switchTheme(t.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${
                theme === t.id
                  ? "bg-gradient-to-r from-purple-vivid/20 to-magenta/20 text-fuchsia"
                  : "text-lavender/70 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <div className={`w-4 h-4 rounded-full ${t.preview} border border-white/20`} />
              <t.icon size={14} />
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-vivid to-magenta flex items-center justify-center text-white shadow-lg shadow-magenta/30 hover:shadow-magenta/50 hover:scale-105 transition-all"
        aria-label="Cambiar tema"
      >
        <Palette size={20} />
      </button>
    </div>
  );
}
