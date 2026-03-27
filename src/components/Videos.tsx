"use client";

import SectionHeader from "./SectionHeader";
import { Play, Clock, Eye } from "lucide-react";

const videoCategories = [
  { label: "Recientes", active: true },
  { label: "Farmacología", active: false },
  { label: "Reducción de riesgos", active: false },
  { label: "Entrevistas", active: false },
  { label: "Educativos", active: false },
];

const videos = [
  {
    title: "¿Qué es realmente la reducción de riesgos y daños?",
    thumbnail: null,
    duration: "18:24",
    views: "45K",
    category: "Reducción de riesgos",
    featured: true,
  },
  {
    title: "MDMA: farmacología, efectos y lo que necesitas saber",
    thumbnail: null,
    duration: "22:10",
    views: "38K",
    category: "Farmacología",
    featured: false,
  },
  {
    title: "Cannabis y el sistema endocannabinoide explicado",
    thumbnail: null,
    duration: "15:45",
    views: "52K",
    category: "Educativos",
    featured: false,
  },
  {
    title: "Entrevista: Política de drogas en América Latina",
    thumbnail: null,
    duration: "45:30",
    views: "28K",
    category: "Entrevistas",
    featured: false,
  },
  {
    title: "Los mitos más peligrosos sobre automedicación",
    thumbnail: null,
    duration: "12:33",
    views: "31K",
    category: "Educativos",
    featured: false,
  },
  {
    title: "¿Cómo funcionan los psicodélicos en tu cerebro?",
    thumbnail: null,
    duration: "20:15",
    views: "67K",
    category: "Farmacología",
    featured: false,
  },
];

export default function Videos() {
  return (
    <section id="videos" className="relative gradient-section py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Videos y YouTube"
          title="Ciencia en ||movimiento||"
          subtitle="Contenido audiovisual que conecta la farmacología, la reducción de riesgos y la divulgación con una audiencia global."
        />

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {videoCategories.map((c) => (
            <button
              key={c.label}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                c.active
                  ? "bg-gradient-to-r from-purple-vivid to-magenta text-white shadow-lg shadow-purple-vivid/20"
                  : "bg-white/[0.04] text-lavender/50 border border-white/[0.08] hover:text-white hover:border-white/[0.15]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.title} className="glass-card overflow-hidden group cursor-pointer">
              {/* Thumbnail placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-deep to-purple-mid overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                {/* Duration */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/70 rounded text-xs text-white font-mono">
                  {v.duration}
                </div>
                {v.featured && (
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-gradient-to-r from-purple-vivid to-magenta rounded text-xs text-white font-semibold">
                    Destacado
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-sm leading-snug mb-3 group-hover:text-fuchsia transition-colors line-clamp-2">
                  {v.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-lavender/40">
                  <span className="flex items-center gap-1">
                    <Eye size={12} /> {v.views} vistas
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {v.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://youtube.com/@farmadrux"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Play size={18} />
            Ver canal de YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
