"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Play, X, ExternalLink } from "lucide-react";

const videos = [
  {
    id: "axMdaUG7c4k",
    title: "Las plantas siempre han estado aquí",
    date: "2026-03-03",
  },
  {
    id: "uyUp64Xfzwo",
    title: "El humo siempre hará daño",
    date: "2026-02-27",
  },
  {
    id: "3226Rc8Edu8",
    title: "Todas las personas usamos sustancias. ¿O qué crees que tomas cuando consumes café?",
    date: "2025-12-17",
  },
  {
    id: "JdDOuvW3hHc",
    title: "El prohibicionismo no trata de cuidar sino de castigar",
    date: "2025-12-16",
  },
  {
    id: "8bhjrBo7F0A",
    title: "Paro cardiopulmonar y por qué sucede — Fragmento de Disociadxs",
    date: "2025-05-20",
  },
  {
    id: "5oBNoK1LWZM",
    title: "Consulta a un farmacéuticx antes de medicarte",
    date: "2024-11-11",
  },
  {
    id: "abvBh8F-7jg",
    title: "Farmacéuticos en sociedad",
    date: "2024-11-10",
  },
  {
    id: "RFTMTP2WZCM",
    title: "Medicamentos OTC",
    date: "2024-11-09",
  },
  {
    id: "V9-2gnwj2KA",
    title: "La automedicación",
    date: "2024-11-06",
  },
  {
    id: "SFgCJUrW1eA",
    title: "Campañas de uso adulto para todas las sustancias",
    date: "2024-11-05",
  },
  {
    id: "8W_v70AJedo",
    title: "¿Sabes qué es la Medicina traslacional?",
    date: "2024-11-05",
  },
  {
    id: "AIojjFOE1z0",
    title: "Las sustancias como creadoras de cultura",
    date: "2024-11-05",
  },
  {
    id: "qxLHHxhaEa4",
    title: "Ahora hablamos de consumos y consumos problemáticos",
    date: "2024-10-25",
  },
  {
    id: "ekr0WZNCO2M",
    title: "Análisis que determina el daño potencial de todas las sustancias psicoactivas",
    date: "2024-10-25",
  },
  {
    id: "zSQlrmz9_IY",
    title: "Computadoras cuánticas",
    date: "2024-10-21",
  },
];

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="relative gradient-section py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Videos y YouTube"
          title="Ciencia en ||movimiento||"
          subtitle="Contenido audiovisual que conecta la farmacología, la reducción de riesgos y la divulgación con una audiencia global."
        />

        {/* Video modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors z-10"
              >
                <X size={28} />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div
              key={v.id}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => setActiveVideo(v.id)}
            >
              {/* Thumbnail from YouTube */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 transition-all">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-fuchsia transition-colors line-clamp-2">
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
