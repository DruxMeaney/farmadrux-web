"use client";

import { LayoutGrid, List, Waypoints } from "lucide-react";
import { motion } from "framer-motion";

export type ViewMode = "magazine" | "list" | "constellation";

const views: { id: ViewMode; label: string; icon: typeof LayoutGrid; hint?: string }[] = [
  { id: "magazine", label: "Revista", icon: LayoutGrid },
  { id: "list", label: "Lista", icon: List },
  { id: "constellation", label: "Constelación", icon: Waypoints, hint: "escritorio" },
];

interface Props {
  active: ViewMode;
  onChange: (v: ViewMode) => void;
}

export default function ViewSwitcher({ active, onChange }: Props) {
  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
      {views.map((v) => (
        <motion.button
          key={v.id}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(v.id)}
          className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
            active === v.id
              ? "text-white"
              : "text-lavender/50 hover:text-lavender/80"
          }`}
        >
          {active === v.id && (
            <motion.div
              layoutId="view-active"
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-vivid to-magenta"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1.5">
            <v.icon size={14} />
            <span className="hidden sm:inline">{v.label}</span>
            {v.hint && <span className="hidden lg:inline text-[10px] text-white/40">({v.hint})</span>}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
