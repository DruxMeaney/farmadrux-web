"use client";

import SectionHeader from "./SectionHeader";
import { Download, FileText, Image, BookOpen, FileSpreadsheet, Presentation } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Guía de reducción de riesgos en festivales",
    type: "PDF",
    size: "2.4 MB",
    desc: "Información práctica sobre sustancias, señales de alerta y cómo cuidarte y cuidar a otros.",
    category: "Reducción de riesgos",
  },
  {
    icon: Image,
    title: "Infografía: ¿Qué es el sistema endocannabinoide?",
    type: "PNG",
    size: "1.8 MB",
    desc: "Visualización didáctica de los receptores CB1 y CB2, ligandos endógenos y funciones fisiológicas.",
    category: "Divulgación",
  },
  {
    icon: BookOpen,
    title: "Manual de automedicación informada",
    type: "PDF",
    size: "3.1 MB",
    desc: "Marco ético y práctico para tomar decisiones responsables sobre medicamentos y sustancias.",
    category: "Salud",
  },
  {
    icon: Presentation,
    title: "Presentación: Política de drogas y derechos humanos",
    type: "PDF",
    size: "5.2 MB",
    desc: "Material de conferencia sobre el impacto de la criminalización y alternativas basadas en evidencia.",
    category: "Política de drogas",
  },
  {
    icon: FileSpreadsheet,
    title: "Tabla de interacciones farmacológicas comunes",
    type: "PDF",
    size: "890 KB",
    desc: "Referencia rápida sobre interacciones entre sustancias psicoactivas y medicamentos frecuentes.",
    category: "Farmacología",
  },
  {
    icon: FileText,
    title: "Guía para comunicar sobre drogas sin estigma",
    type: "PDF",
    size: "1.5 MB",
    desc: "Recomendaciones para periodistas, educadores y comunicadores sobre lenguaje no estigmatizante.",
    category: "Comunicación",
  },
];

export default function Recursos() {
  return (
    <section id="recursos" className="relative gradient-section-alt py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Recursos"
          title="Materiales para ||consulta y descarga||"
          subtitle="Guías, infografías, presentaciones y documentos informativos. Herramientas gratuitas y basadas en evidencia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resources.map((r) => (
            <div key={r.title} className="glass-card p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-vivid/20 to-magenta/20 flex items-center justify-center flex-shrink-0">
                  <r.icon size={20} className="text-fuchsia" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="tag text-xs">{r.category}</span>
                    <span className="text-xs text-lavender/30 font-mono">{r.type} · {r.size}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-1.5 group-hover:text-fuchsia transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-lavender/50 text-xs leading-relaxed">{r.desc}</p>
                </div>
                <button className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-lavender/40 hover:text-fuchsia hover:border-magenta/30 transition-all flex-shrink-0">
                  <Download size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
