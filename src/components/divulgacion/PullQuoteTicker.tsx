"use client";

import { motion } from "framer-motion";
import { allPullQuotes } from "./data/articles";

export default function PullQuoteTicker() {
  const quotes = allPullQuotes;
  if (quotes.length === 0) return null;

  // Duplicate for seamless loop
  const doubled = [...quotes, ...quotes];

  return (
    <div className="relative overflow-hidden py-6 mb-8">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        {doubled.map((q, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm italic text-lavender/30 select-none"
          >
            <span className="text-fuchsia/20">&ldquo;</span>
            {q.text}
            <span className="text-fuchsia/20">&rdquo;</span>
            <span className="w-1 h-1 rounded-full bg-magenta/20 flex-shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
