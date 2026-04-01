"use client";

import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";
import type { Article } from "./data/articles";

interface Props {
  articles: Article[];
  hoveredConcept: string | null;
  onConceptClick: (id: string) => void;
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function MagazineView({ articles, hoveredConcept, onConceptClick }: Props) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lavender/40 text-lg">No hay textos que coincidan con estos filtros.</p>
      </div>
    );
  }

  const hero = articles.find((a) => a.featured) || articles[0];
  const rest = articles.filter((a) => a.id !== hero.id);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* Hero article */}
      <div className="mb-6">
        <ArticleCard
          article={hero}
          variant="hero"
          hoveredConcept={hoveredConcept}
          onConceptClick={onConceptClick}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {rest.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            variant={article.type === "reflexion" ? "compact" : "standard"}
            hoveredConcept={hoveredConcept}
            onConceptClick={onConceptClick}
          />
        ))}
      </div>
    </motion.div>
  );
}
