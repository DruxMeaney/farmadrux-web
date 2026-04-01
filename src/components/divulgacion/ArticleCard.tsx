"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Feather, Sparkles, BookOpen, Star, Clock, Calendar } from "lucide-react";
import type { Article, ContentType } from "./data/articles";
import { conceptMap } from "./data/concepts";

const typeConfig: Record<ContentType, { icon: typeof Star; label: string; borderClass: string; iconColor: string }> = {
  publicado: { icon: ArrowUpRight, label: "Publicado en", borderClass: "border-l-blue-500/40", iconColor: "text-blue-400" },
  original: { icon: Feather, label: "Original", borderClass: "border-l-purple-vivid/50", iconColor: "text-purple-vivid" },
  reflexion: { icon: Sparkles, label: "Reflexión", borderClass: "border-l-fuchsia/40", iconColor: "text-fuchsia" },
  ensayo: { icon: BookOpen, label: "Ensayo", borderClass: "border-l-magenta/50", iconColor: "text-magenta" },
  esencial: { icon: Star, label: "Esencial", borderClass: "border-l-neon-pink/50", iconColor: "text-neon-pink" },
};

interface Props {
  article: Article;
  variant?: "hero" | "standard" | "compact";
  hoveredConcept: string | null;
  onConceptClick?: (id: string) => void;
}

export default function ArticleCard({ article, variant = "standard", hoveredConcept, onConceptClick }: Props) {
  const config = typeConfig[article.type];
  const Icon = config.icon;

  const isDimmed = hoveredConcept !== null && !article.concepts.includes(hoveredConcept);
  const isHighlighted = hoveredConcept !== null && article.concepts.includes(hoveredConcept);

  const isHero = variant === "hero";
  const isCompact = variant === "compact";

  const linkProps = article.externalUrl
    ? { href: article.externalUrl, target: "_blank" as const, rel: "noopener noreferrer" }
    : article.pdfUrl
    ? { href: article.pdfUrl, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`glass-card border-l-4 ${config.borderClass} overflow-hidden group transition-all duration-300 ${
        isDimmed ? "opacity-25 grayscale-[30%]" : ""
      } ${isHighlighted ? "shadow-[0_0_30px_rgba(232,121,249,0.15)]" : ""} ${
        article.type === "esencial" ? "shadow-[0_0_20px_rgba(124,58,237,0.1)]" : ""
      }`}
    >
      <a {...linkProps} className="block">
        <div className={`${isHero ? "p-8 md:p-10" : isCompact ? "p-5" : "p-6 md:p-7"}`}>
          {/* Type badge + source */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className={`inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider ${config.iconColor}`}>
              <Icon size={12} />
              {config.label}
            </span>
            {article.source && (
              <span className="text-[11px] text-lavender/40">
                {article.type === "publicado" ? "en " : "· "}
                <span className="text-lavender/60">{article.source.name}</span>
              </span>
            )}
            {article.featured && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-vivid to-magenta text-white font-semibold">
                Destacado
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className={`text-white font-bold leading-tight mb-2 group-hover:text-fuchsia transition-colors ${
            isHero ? "text-2xl md:text-3xl" : isCompact ? "text-base" : "text-lg md:text-xl"
          }`}>
            {article.title}
          </h3>

          {/* Subtitle */}
          {article.subtitle && !isCompact && (
            <p className={`text-lavender/50 mb-3 ${isHero ? "text-base" : "text-sm"}`}>
              {article.subtitle}
            </p>
          )}

          {/* Excerpt */}
          {!isCompact && (
            <p className={`text-lavender/45 leading-relaxed mb-4 ${
              isHero ? "text-base line-clamp-4" : "text-sm line-clamp-3"
            }`}>
              {article.excerpt}
            </p>
          )}

          {/* Pull quote preview (hero only) */}
          {isHero && article.pullQuotes[0] && (
            <div className="border-l-2 border-fuchsia/20 pl-4 mb-5">
              <p className="text-lavender/40 text-sm italic line-clamp-2">
                &ldquo;{article.pullQuotes[0].text}&rdquo;
              </p>
            </div>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
            <span className="flex items-center gap-1 text-lavender/35">
              <Calendar size={11} />
              {new Date(article.date).toLocaleDateString("es-MX", { year: "numeric", month: "short" })}
            </span>
            <span className="flex items-center gap-1 text-lavender/35">
              <Clock size={11} />
              {article.readingTime}
            </span>
          </div>

          {/* Concept tags */}
          <div className="flex flex-wrap gap-1.5">
            {article.concepts.slice(0, isCompact ? 3 : 6).map((cId) => {
              const concept = conceptMap[cId];
              if (!concept) return null;
              return (
                <button
                  key={cId}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onConceptClick?.(cId);
                  }}
                  className={`concept-tag ${
                    hoveredConcept === cId ? "concept-tag-active" : ""
                  }`}
                >
                  {concept.label}
                </button>
              );
            })}
          </div>
        </div>
      </a>
    </motion.article>
  );
}
