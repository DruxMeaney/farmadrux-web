"use client";

import { concepts } from "./data/concepts";
import { articles } from "./data/articles";
import { motion } from "framer-motion";

interface Props {
  activeConcepts: string[];
  onToggle: (id: string) => void;
  onHover: (id: string | null) => void;
}

export default function ConceptCloud({ activeConcepts, onToggle, onHover }: Props) {
  const counts: Record<string, number> = {};
  for (const a of articles) {
    for (const c of a.concepts) {
      counts[c] = (counts[c] || 0) + 1;
    }
  }

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide scroll-smooth snap-x snap-mandatory">
      {concepts
        .filter((c) => counts[c.id])
        .map((c) => {
          const isActive = activeConcepts.includes(c.id);
          return (
            <motion.button
              key={c.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onToggle(c.id)}
              onMouseEnter={() => onHover(c.id)}
              onMouseLeave={() => onHover(null)}
              className={`snap-start flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                isActive
                  ? "bg-gradient-to-r from-purple-vivid to-magenta text-white shadow-md shadow-magenta/20"
                  : "bg-white/[0.04] border border-white/[0.08] text-lavender/60 hover:text-lavender hover:border-fuchsia/30"
              }`}
            >
              {c.label}
              <span className={`text-[10px] ${isActive ? "text-white/60" : "text-lavender/30"}`}>
                {counts[c.id]}
              </span>
            </motion.button>
          );
        })}
      {activeConcepts.length > 0 && (
        <button
          onClick={() => {
            for (const c of activeConcepts) onToggle(c);
          }}
          className="flex-shrink-0 text-[11px] text-fuchsia/60 hover:text-fuchsia transition-colors px-2"
        >
          Limpiar
        </button>
      )}
    </div>
  );
}
