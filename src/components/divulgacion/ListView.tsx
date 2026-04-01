"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpDown } from "lucide-react";
import ArticleCard from "./ArticleCard";
import type { Article } from "./data/articles";

type SortBy = "date" | "type";

interface Props {
  articles: Article[];
  hoveredConcept: string | null;
  onConceptClick: (id: string) => void;
}

export default function ListView({ articles, hoveredConcept, onConceptClick }: Props) {
  const [sortBy, setSortBy] = useState<SortBy>("date");

  const sorted = [...articles].sort((a, b) => {
    if (sortBy === "date") return new Date(b.date).getTime() - new Date(a.date).getTime();
    return a.type.localeCompare(b.type);
  });

  if (articles.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lavender/40 text-lg">No hay textos que coincidan con estos filtros.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Sort control */}
      <div className="flex items-center gap-2 mb-6">
        <ArrowUpDown size={13} className="text-lavender/35" />
        <span className="text-xs text-lavender/35">Ordenar:</span>
        {(["date", "type"] as SortBy[]).map((s) => (
          <button
            key={s}
            onClick={() => setSortBy(s)}
            className={`text-xs px-3 py-1 rounded-full transition-all ${
              sortBy === s
                ? "bg-gradient-to-r from-purple-vivid to-magenta text-white"
                : "bg-white/[0.04] border border-white/[0.06] text-lavender/50 hover:text-white"
            }`}
          >
            {s === "date" ? "Fecha" : "Tipo"}
          </button>
        ))}
      </div>

      {/* List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        {sorted.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            variant="standard"
            hoveredConcept={hoveredConcept}
            onConceptClick={onConceptClick}
          />
        ))}
      </motion.div>
    </div>
  );
}
