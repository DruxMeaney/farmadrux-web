"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { Play, Clock, ExternalLink, X, Headphones } from "lucide-react";

const episodes = [
  {
    id: "ejKARMuOw2E",
    number: "EP 11 · T4",
    title: "¿Escuchas voces cuando usas sustancias?",
    guest: "Dr. Luis Felipe Rivera",
    date: "2026-03-18",
    tags: ["Salud mental", "Sustancias"],
    featured: true,
  },
  {
    id: "-UOiKoLsEtE",
    number: "EP 10 · T4",
    title: "¿Puedo reducir daños al fumar? — Tabaco, Cannabis y más",
    guest: "",
    date: "2026-03-05",
    tags: ["Reducción de riesgos", "Cannabis"],
    featured: false,
  },
  {
    id: "KXrmoaYA-l8",
    number: "EP 9 · T4",
    title: "Sustancias, Anatomía del Estigma",
    guest: "",
    date: "2026-02-26",
    tags: ["Estigma", "Política de drogas"],
    featured: false,
  },
  {
    id: "WCywseRYRZk",
    number: "EP 8 · T4",
    title: "¡Resumen del año!",
    guest: "",
    date: "2025-12-18",
    tags: ["Resumen", "Comunidad"],
    featured: false,
  },
  {
    id: "0Q6exvUhQYc",
    number: "EP 7 · T4",
    title: "Kiubo con la Keta — Datos de la Ketamina",
    guest: "",
    date: "2025-12-12",
    tags: ["Ketamina", "Farmacología"],
    featured: false,
  },
  {
    id: "v8gjw50GBqU",
    number: "EP 6 · T4",
    title: "Opioides, ¿las sustancias más peligrosas?",
    guest: "",
    date: "2025-11-26",
    tags: ["Opioides", "Reducción de riesgos"],
    featured: false,
  },
  {
    id: "YnjuzqQQsPA",
    number: "EP 5 · T4",
    title: "Sustancias en el cine mexa",
    guest: "",
    date: "2025-11-20",
    tags: ["Cultura", "Cine"],
    featured: false,
  },
  {
    id: "5bI1FzRfcLw",
    number: "EP 4 · T4",
    title: "La metha es el cuidado",
    guest: "",
    date: "2025-11-12",
    tags: ["Metanfetamina", "Reducción de riesgos"],
    featured: false,
  },
  {
    id: "7O6n6Rj831w",
    number: "EP 3 · T4",
    title: "Queremos Yerba",
    guest: "Caitlin Donohue",
    date: "2025-11-05",
    tags: ["Cannabis", "Entrevista"],
    featured: false,
  },
  {
    id: "J95M_BVc_Gg",
    number: "EP 2 · T4",
    title: "¿Las sustancias me hacen eso?",
    guest: "",
    date: "2025-10-29",
    tags: ["Farmacología", "Educación"],
    featured: false,
  },
  {
    id: "iZfCsl1Fm7Q",
    number: "EP 1 · T4",
    title: "Cuando las drogas fueron legales en México",
    guest: "",
    date: "2025-10-22",
    tags: ["Historia", "Política de drogas"],
    featured: false,
  },
  {
    id: "lT-FLUpw4UI",
    number: "EP 12 · T3",
    title: "Entrón, morboso, con fume y lugar",
    guest: "",
    date: "2025-06-18",
    tags: ["Cultura", "Sustancias"],
    featured: false,
  },
];

export default function Podcast() {
  const [activeEpisode, setActiveEpisode] = useState<string | null>(null);

  return (
    <section id="podcast" className="relative gradient-section-alt py-24 md:py-36 overflow-hidden">
      <div className="orb w-[300px] h-[300px] bg-fuchsia/8 top-[30%] right-[-80px]" />

      {/* Video modal */}
      {activeEpisode && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveEpisode(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveEpisode(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={28} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeEpisode}?autoplay=1`}
              title="Episodio de Disociadxs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Podcast"
          title="||Disociadxs|| — Conversaciones que importan"
          subtitle="Un podcast sobre sustancias psicoactivas, salud, política de drogas, reducción de riesgos y la complejidad humana detrás de cada sustancia."
        />

        {/* Podcast brand card */}
        <div className="glass-card p-8 md:p-10 mb-12 max-w-3xl mx-auto text-center">
          <div className="w-28 h-28 rounded-2xl mx-auto mb-5 overflow-hidden shadow-lg shadow-magenta/20 border border-white/[0.08]">
            <Image
              src="/disociadxs.png"
              alt="Disociadxs Podcast"
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Disociadxs</h3>
          <p className="text-lavender/60 max-w-lg mx-auto mb-6 leading-relaxed">
            Cada episodio es un puente entre la ciencia, la experiencia humana y la conversación pública. Sin moralismo, sin estigma, con evidencia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://youtube.com/@disociadxs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <Headphones size={16} />
              Ver en YouTube
            </a>
            <a href="#" className="btn-secondary text-sm">
              <ExternalLink size={16} />
              Spotify
            </a>
          </div>
        </div>

        {/* Episodes */}
        <div className="space-y-4">
          {episodes.map((ep) => (
            <div
              key={ep.id}
              className={`glass-card p-6 group cursor-pointer ${ep.featured ? "border-magenta/20" : ""}`}
              onClick={() => setActiveEpisode(ep.id)}
            >
              <div className="flex items-start gap-4">
                {/* Thumbnail */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <img
                    src={`https://img.youtube.com/vi/${ep.id}/mqdefault.jpg`}
                    alt={ep.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <Play size={18} className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-magenta font-bold">{ep.number}</span>
                    {ep.featured && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-vivid to-magenta text-white font-semibold">
                        Nuevo
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold leading-snug mb-1.5 group-hover:text-fuchsia transition-colors">
                    {ep.title}
                  </h3>
                  {ep.guest && (
                    <p className="text-fuchsia/60 text-xs mb-1.5">con {ep.guest}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1 text-xs text-lavender/40">
                      <Clock size={12} /> {ep.date}
                    </span>
                    {ep.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
