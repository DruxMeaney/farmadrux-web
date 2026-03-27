"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Play, X, ExternalLink, Star } from "lucide-react";

/* ── Featured video ── */
const featuredVideo = {
  id: "EcgTA1q7bEU",
  title: "Automedicación Responsable",
};

const videos = [
  { id: "axMdaUG7c4k", title: "Las plantas siempre han estado aquí", date: "2026-03-03" },
  { id: "uyUp64Xfzwo", title: "El humo siempre hará daño", date: "2026-02-27" },
  { id: "3226Rc8Edu8", title: "Todas las personas usamos sustancias. ¿O qué crees que tomas cuando consumes café?", date: "2025-12-17" },
  { id: "JdDOuvW3hHc", title: "El prohibicionismo no trata de cuidar sino de castigar", date: "2025-12-16" },
  { id: "8bhjrBo7F0A", title: "Paro cardiopulmonar y por qué sucede — Fragmento de Disociadxs", date: "2025-05-20" },
  { id: "5oBNoK1LWZM", title: "Consulta a un farmacéuticx antes de medicarte", date: "2024-11-11" },
  { id: "abvBh8F-7jg", title: "Farmacéuticos en sociedad", date: "2024-11-10" },
  { id: "RFTMTP2WZCM", title: "Medicamentos OTC", date: "2024-11-09" },
  { id: "V9-2gnwj2KA", title: "La automedicación", date: "2024-11-06" },
  { id: "SFgCJUrW1eA", title: "Campañas de uso adulto para todas las sustancias", date: "2024-11-05" },
  { id: "8W_v70AJedo", title: "¿Sabes qué es la Medicina traslacional?", date: "2024-11-05" },
  { id: "AIojjFOE1z0", title: "Las sustancias como creadoras de cultura", date: "2024-11-05" },
  { id: "qxLHHxhaEa4", title: "Ahora hablamos de consumos y consumos problemáticos", date: "2024-10-25" },
  { id: "ekr0WZNCO2M", title: "Análisis que determina el daño potencial de todas las sustancias psicoactivas", date: "2024-10-25" },
  { id: "zSQlrmz9_IY", title: "Computadoras cuánticas", date: "2024-10-21" },
];

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="relative gradient-section py-24 md:py-36">
      {/* Sparkles */}
      <div className="sparkle-field" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Videos y YouTube"
          title="Ciencia en ||movimiento||"
          subtitle="Contenido audiovisual que conecta la farmacología, la reducción de riesgos y la divulgación con una audiencia global."
        />

        {/* ═══ FEATURED VIDEO — Automedicación Responsable ═══ */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Star size={16} className="text-fuchsia fill-fuchsia" />
            <span className="text-sm text-fuchsia font-semibold uppercase tracking-wider">Video destacado</span>
          </div>
          <div className="glass-card overflow-hidden border-magenta/20">
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                title={featuredVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{featuredVideo.title}</h3>
            </div>
          </div>
        </div>

        {/* ═══ VIDEO GRID — All with inline iframes ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div
              key={v.id}
              className="glass-card overflow-hidden group"
            >
              {/* Inline YouTube embed */}
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-2">
                  {v.title}
                </h3>
                <span className="text-xs text-lavender/40">{v.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@farmadrux"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink size={18} />
            Ver canal completo en YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
