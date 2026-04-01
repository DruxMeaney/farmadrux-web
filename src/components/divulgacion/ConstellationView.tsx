"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import type { Article } from "./data/articles";
import { conceptMap } from "./data/concepts";

interface Props {
  articles: Article[];
  hoveredConcept: string | null;
  onConceptHover: (id: string | null) => void;
  onConceptClick: (id: string) => void;
}

interface NodePos {
  x: number;
  y: number;
  article: Article;
}

interface Connection {
  from: NodePos;
  to: NodePos;
  sharedConcepts: string[];
}

export default function ConstellationView({ articles, hoveredConcept, onConceptHover, onConceptClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 800, h: 500 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setDims({ w: containerRef.current.offsetWidth, h: Math.max(450, containerRef.current.offsetWidth * 0.55) });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (articles.length === 0) {
    return <div className="text-center py-20"><p className="text-lavender/40 text-lg">No hay textos para mostrar.</p></div>;
  }

  // Compute positions (elliptical layout)
  const cx = dims.w / 2;
  const cy = dims.h / 2;
  const rx = dims.w * 0.35;
  const ry = dims.h * 0.35;

  const nodes: NodePos[] = articles.map((article, i) => {
    const angle = (2 * Math.PI * i) / articles.length - Math.PI / 2;
    return { x: cx + rx * Math.cos(angle), y: cy + ry * Math.sin(angle), article };
  });

  // Compute connections
  const connections: Connection[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const shared = nodes[i].article.concepts.filter((c) => nodes[j].article.concepts.includes(c));
      if (shared.length > 0) {
        connections.push({ from: nodes[i], to: nodes[j], sharedConcepts: shared });
      }
    }
  }

  // Mobile fallback
  const isMobile = dims.w < 640;
  if (isMobile) {
    return (
      <div className="space-y-4">
        {articles.map((a) => {
          const related = articles.filter((b) => b.id !== a.id && a.concepts.some((c) => b.concepts.includes(c)));
          return (
            <div key={a.id} className="glass-card p-5">
              <h4 className="text-white font-semibold mb-2">{a.title}</h4>
              <p className="text-lavender/45 text-sm mb-3 line-clamp-2">{a.excerpt}</p>
              {related.length > 0 && (
                <p className="text-xs text-fuchsia/50">
                  Conectado con: {related.map((r) => r.title).join(", ")}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: dims.h }}>
      {/* SVG connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        {connections.map((conn, i) => {
          const isActive = hoveredConcept !== null && conn.sharedConcepts.includes(hoveredConcept);
          const isNodeHovered = hoveredNode && (conn.from.article.id === hoveredNode || conn.to.article.id === hoveredNode);
          return (
            <motion.line
              key={i}
              x1={conn.from.x}
              y1={conn.from.y}
              x2={conn.to.x}
              y2={conn.to.y}
              stroke={isActive || isNodeHovered ? "#e879f9" : "#7c3aed"}
              strokeWidth={isActive || isNodeHovered ? 2 : 1}
              strokeOpacity={isActive || isNodeHovered ? 0.6 : 0.12}
              strokeDasharray={isActive || isNodeHovered ? "none" : "4 4"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
            />
          );
        })}
      </svg>

      {/* Article nodes */}
      {nodes.map((node, i) => {
        const a = node.article;
        const isDimmed = hoveredConcept !== null && !a.concepts.includes(hoveredConcept);
        const isNodeActive = hoveredNode === a.id;

        return (
          <motion.div
            key={a.id}
            className={`absolute transition-all duration-300 ${isDimmed ? "opacity-25" : ""}`}
            style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 + i * 0.1 }}
            onMouseEnter={() => setHoveredNode(a.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* Node circle */}
            <div className={`w-28 h-28 rounded-full flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${
              isNodeActive
                ? "bg-gradient-to-br from-purple-vivid/30 to-magenta/30 border-2 border-fuchsia/40 shadow-[0_0_40px_rgba(232,121,249,0.3)] scale-110"
                : "bg-white/[0.04] border border-white/[0.08] hover:border-fuchsia/20"
            }`}>
              <p className="text-white text-xs font-semibold leading-tight px-2 line-clamp-3">
                {a.title.length > 40 ? a.title.slice(0, 40) + "..." : a.title}
              </p>
              <span className="text-[9px] text-lavender/40 mt-1">{a.readingTime}</span>
            </div>

            {/* Hover popup */}
            {isNodeActive && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-72 glass-card p-5 z-20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-fuchsia">{a.type}</span>
                  <span className="flex items-center gap-1 text-[10px] text-lavender/35">
                    <Clock size={9} /> {a.readingTime}
                  </span>
                </div>
                <h4 className="text-white font-semibold text-sm leading-snug mb-2">{a.title}</h4>
                <p className="text-lavender/45 text-xs leading-relaxed line-clamp-3 mb-3">{a.excerpt}</p>
                <div className="flex flex-wrap gap-1">
                  {a.concepts.slice(0, 4).map((cId) => (
                    <span key={cId} className="concept-tag text-[10px]">
                      {conceptMap[cId]?.label || cId}
                    </span>
                  ))}
                </div>
                {(a.externalUrl || a.pdfUrl) && (
                  <a
                    href={a.externalUrl || a.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-fuchsia/70 hover:text-fuchsia mt-3 transition-colors"
                  >
                    <ArrowUpRight size={12} /> Leer
                  </a>
                )}
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* Center label */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <p className="text-lavender/15 text-sm font-medium tracking-widest uppercase">Constelación</p>
      </div>
    </div>
  );
}
