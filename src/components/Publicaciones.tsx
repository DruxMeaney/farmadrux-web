"use client";

import SectionHeader from "./SectionHeader";
import { FileText, ExternalLink, Calendar, BookMarked } from "lucide-react";

const publications = [
  {
    title: "Evaluación de compuestos cannabinoides en modelos de inflamación in vitro",
    journal: "Revista Mexicana de Ciencias Farmacéuticas",
    year: "2024",
    type: "Artículo de investigación",
    doi: "#",
    desc: "Estudio sobre la actividad antiinflamatoria de cannabinoides en líneas celulares, con análisis de citoquinas y mecanismos moleculares.",
  },
  {
    title: "Reducción de riesgos y daños en festivales: una revisión de estrategias comunitarias",
    journal: "Salud Pública de México",
    year: "2023",
    type: "Artículo de revisión",
    doi: "#",
    desc: "Revisión de las mejores prácticas internacionales en reducción de daños aplicada a espacios recreativos y festivos.",
  },
  {
    title: "Aplicaciones de la bioinformática en la identificación de blancos farmacológicos cannabinoides",
    journal: "Journal of Cannabis Research",
    year: "2023",
    type: "Artículo de investigación",
    doi: "#",
    desc: "Uso de docking molecular y análisis computacional para identificar nuevos blancos terapéuticos del sistema endocannabinoide.",
  },
  {
    title: "Automedicación informada: un marco ético y científico para la autonomía en salud",
    journal: "Gaceta Médica de México",
    year: "2022",
    type: "Ensayo académico",
    doi: "#",
    desc: "Propuesta de un enfoque basado en evidencia para la automedicación responsable, incorporando principios de reducción de riesgos.",
  },
  {
    title: "Análisis de sustancias en contextos comunitarios: metodologías y resultados",
    journal: "Drugs: Education, Prevention and Policy",
    year: "2022",
    type: "Artículo de investigación",
    doi: "#",
    desc: "Documentación y análisis de programas de drug checking en comunidades latinoamericanas.",
  },
];

export default function Publicaciones() {
  return (
    <section id="publicaciones" className="relative gradient-section-alt py-24 md:py-36 overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-purple-vivid/8 bottom-[10%] right-[-80px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Publicaciones"
          title="Biblioteca ||académica y científica||"
          subtitle="Artículos, textos y publicaciones formales. Un acervo que respalda el trabajo con evidencia y rigor."
        />

        <div className="space-y-5">
          {publications.map((pub) => (
            <article key={pub.title} className="glass-card p-6 md:p-8 group">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-vivid/20 to-magenta/20 flex items-center justify-center flex-shrink-0">
                  <FileText size={22} className="text-fuchsia" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-lg leading-snug mb-2 group-hover:text-fuchsia transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-lavender/50 text-sm leading-relaxed mb-3">{pub.desc}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-lavender/40">
                      <BookMarked size={13} /> {pub.journal}
                    </span>
                    <span className="flex items-center gap-1 text-lavender/40">
                      <Calendar size={13} /> {pub.year}
                    </span>
                    <span className="tag text-xs">{pub.type}</span>
                  </div>
                </div>

                {/* Action */}
                <a
                  href={pub.doi}
                  className="flex items-center gap-1.5 text-sm text-fuchsia/70 hover:text-fuchsia transition-colors whitespace-nowrap flex-shrink-0"
                >
                  <ExternalLink size={14} />
                  Consultar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
