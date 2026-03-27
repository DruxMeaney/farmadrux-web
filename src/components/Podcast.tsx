"use client";

import SectionHeader from "./SectionHeader";
import { Headphones, Mic, Clock, Play, ExternalLink } from "lucide-react";

const episodes = [
  {
    number: "EP 24",
    title: "Psicodélicos y salud mental: ¿terapia o moda?",
    desc: "Analizamos la evidencia detrás de la terapia asistida con psicodélicos, sus promesas y sus riesgos reales.",
    duration: "1h 12min",
    tags: ["Psicodélicos", "Salud mental"],
    featured: true,
  },
  {
    number: "EP 23",
    title: "Fentanilo: la crisis que no entendemos",
    desc: "¿Qué es el fentanilo? ¿Por qué es tan peligroso? Desmontamos los mitos y ofrecemos datos reales.",
    duration: "58min",
    tags: ["Opioides", "Reducción de riesgos"],
    featured: false,
  },
  {
    number: "EP 22",
    title: "Cannabis medicinal en México: regulación y realidad",
    desc: "El panorama legal, científico y social de la cannabis medicinal en nuestro país.",
    duration: "1h 05min",
    tags: ["Cannabis", "Política de drogas"],
    featured: false,
  },
  {
    number: "EP 21",
    title: "Automedicación: entre la autonomía y el riesgo",
    desc: "¿Es posible automedicarse de forma informada? ¿Qué dice la evidencia y dónde están los límites?",
    duration: "47min",
    tags: ["Automedicación", "Farmacología"],
    featured: false,
  },
  {
    number: "EP 20",
    title: "Drug checking: analizar para cuidar",
    desc: "Cómo funciona el análisis de sustancias, por qué es una herramienta de salud pública y qué hemos aprendido.",
    duration: "52min",
    tags: ["Drug checking", "Reducción de riesgos"],
    featured: false,
  },
];

export default function Podcast() {
  return (
    <section id="podcast" className="relative gradient-section-alt py-24 md:py-36 overflow-hidden">
      <div className="orb w-[300px] h-[300px] bg-fuchsia/8 top-[30%] right-[-80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Podcast"
          title="||Disociadxs|| — Conversaciones que importan"
          subtitle="Un podcast sobre sustancias psicoactivas, salud, política de drogas, reducción de riesgos y la complejidad humana detrás de cada sustancia."
        />

        {/* Podcast brand card */}
        <div className="glass-card p-8 md:p-10 mb-12 max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-vivid via-magenta to-pink-intense mx-auto mb-5 flex items-center justify-center shadow-lg shadow-magenta/20">
            <Mic size={36} className="text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Disociadxs</h3>
          <p className="text-lavender/60 max-w-lg mx-auto mb-6 leading-relaxed">
            Cada episodio es un puente entre la ciencia, la experiencia humana y la conversación pública. Sin moralismo, sin estigma, con evidencia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="btn-primary text-sm">
              <Headphones size={16} />
              Escuchar en Spotify
            </a>
            <a href="#" className="btn-secondary text-sm">
              <ExternalLink size={16} />
              Apple Podcasts
            </a>
          </div>
        </div>

        {/* Episodes */}
        <div className="space-y-4">
          {episodes.map((ep) => (
            <div key={ep.number} className={`glass-card p-6 group cursor-pointer ${ep.featured ? "border-magenta/20" : ""}`}>
              <div className="flex items-start gap-4">
                {/* Play button */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-vivid/20 to-magenta/20 flex items-center justify-center flex-shrink-0 group-hover:from-purple-vivid/30 group-hover:to-magenta/30 transition-all">
                  <Play size={20} className="text-fuchsia ml-0.5" />
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
                  <p className="text-lavender/50 text-sm leading-relaxed mb-2">{ep.desc}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1 text-xs text-lavender/40">
                      <Clock size={12} /> {ep.duration}
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
