"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ViewSwitcher, { type ViewMode } from "./ViewSwitcher";
import ConceptCloud from "./ConceptCloud";
import PullQuoteTicker from "./PullQuoteTicker";
import MagazineView from "./MagazineView";
import ListView from "./ListView";
import ConstellationView from "./ConstellationView";
import EditorialPaths from "./EditorialPath";
import HarmReductionSection from "./HarmReductionSection";
import { articles, type ContentType } from "./data/articles";

export default function ConstellationHub() {
  const [viewMode, setViewMode] = useState<ViewMode>("magazine");
  const [activeConcepts, setActiveConcepts] = useState<string[]>([]);
  const [hoveredConcept, setHoveredConcept] = useState<string | null>(null);

  const toggleConcept = useCallback((id: string) => {
    setActiveConcepts((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  }, []);

  // Filter articles by active concepts
  const filtered = activeConcepts.length === 0
    ? articles
    : articles.filter((a) =>
        activeConcepts.some((c) => a.concepts.includes(c))
      );

  return (
    <section className="relative gradient-section py-24 md:py-36 overflow-hidden">
      <div className="sparkle-field" aria-hidden="true" />
      <div className="glow-dots" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader
          tag="Constelación editorial"
          title="Un atlas de ||ideas en movimiento||"
          subtitle="Divulgación, ensayo, reflexión y pensamiento crítico. No un blog: una cartografía viva donde la farmacología, la salud, los derechos humanos y la autonomía se cruzan, se iluminan y se transforman."
        />

        {/* Pull quote ticker */}
        <PullQuoteTicker />

        {/* Controls bar */}
        <div className="flex flex-col gap-4 mb-10">
          {/* View + filters row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <ViewSwitcher active={viewMode} onChange={setViewMode} />
            <div className="text-xs text-lavender/30">
              {filtered.length} {filtered.length === 1 ? "texto" : "textos"}
              {activeConcepts.length > 0 && ` · ${activeConcepts.length} concepto${activeConcepts.length > 1 ? "s" : ""} activo${activeConcepts.length > 1 ? "s" : ""}`}
            </div>
          </div>

          {/* Concept cloud */}
          <ConceptCloud
            activeConcepts={activeConcepts}
            onToggle={toggleConcept}
            onHover={setHoveredConcept}
          />
        </div>

        {/* Views */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {viewMode === "magazine" && (
              <MagazineView
                articles={filtered}
                hoveredConcept={hoveredConcept}
                onConceptClick={toggleConcept}
              />
            )}
            {viewMode === "list" && (
              <ListView
                articles={filtered}
                hoveredConcept={hoveredConcept}
                onConceptClick={toggleConcept}
              />
            )}
            {viewMode === "constellation" && (
              <ConstellationView
                articles={filtered}
                hoveredConcept={hoveredConcept}
                onConceptHover={setHoveredConcept}
                onConceptClick={toggleConcept}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Editorial paths */}
        <div className="mt-24">
          <div className="section-divider mb-16" />
          <EditorialPaths />
        </div>

        {/* Harm reduction */}
        <div className="mt-24">
          <div className="section-divider mb-16" />
          <HarmReductionSection />
        </div>
      </div>
    </section>
  );
}
