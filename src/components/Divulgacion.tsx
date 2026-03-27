"use client";

import SectionHeader from "./SectionHeader";
import { FlaskConical, Leaf, Pill, Brain, Dna, Microscope, ArrowUpRight } from "lucide-react";

const topics = [
  {
    icon: FlaskConical,
    title: "Farmacología",
    desc: "Mecanismos de acción, interacciones, farmacocinética y farmacodinamia explicados con rigor y claridad.",
    color: "from-purple-vivid to-fuchsia",
  },
  {
    icon: Leaf,
    title: "Sistema endocannabinoide",
    desc: "La ciencia detrás del sistema endocannabinoide, los fitocannabinoides y sus aplicaciones clínicas y terapéuticas.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Pill,
    title: "Sustancias psicoactivas",
    desc: "Información basada en evidencia sobre sustancias: efectos, riesgos, interacciones y estrategias de reducción de daños.",
    color: "from-pink-intense to-magenta",
  },
  {
    icon: Brain,
    title: "Neurociencia y conducta",
    desc: "Cómo funcionan los neurotransmisores, los receptores y los circuitos cerebrales implicados en el placer, el dolor y la adicción.",
    color: "from-fuchsia to-neon-pink",
  },
  {
    icon: Microscope,
    title: "Automedicación informada",
    desc: "Herramientas y conocimiento para tomar decisiones responsables sobre salud, medicamentos y sustancias.",
    color: "from-magenta to-purple-vivid",
  },
  {
    icon: Dna,
    title: "Ciencia y salud pública",
    desc: "Análisis de políticas de salud, vacunas, epidemiología, regulación farmacéutica y acceso a medicamentos.",
    color: "from-blue-500 to-purple-vivid",
  },
];

const featured = [
  { title: "¿Qué pasa en tu cerebro cuando consumes MDMA?", type: "Artículo", tag: "Neurociencia" },
  { title: "Cannabis medicinal: lo que dice la evidencia", type: "Infografía", tag: "Endocannabinología" },
  { title: "Interacciones peligrosas: sustancias que no debes mezclar", type: "Guía", tag: "Reducción de riesgos" },
  { title: "Mitos sobre la automedicación: entre el riesgo y la autonomía", type: "Artículo", tag: "Salud pública" },
];

export default function Divulgacion() {
  return (
    <section id="divulgacion" className="relative gradient-section py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Divulgación científica"
          title="Ciencia rigurosa, ||comunicación accesible||"
          subtitle="Explicar ciencia con claridad no significa simplificarla. Significa tender puentes entre la evidencia y las personas que la necesitan."
        />

        {/* Topic cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {topics.map((t) => (
            <div key={t.title} className="glass-card p-7 group cursor-default">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} bg-opacity-20 flex items-center justify-center mb-5 opacity-80 group-hover:opacity-100 transition-opacity`}>
                <t.icon size={24} className="text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{t.title}</h3>
              <p className="text-lavender/50 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Featured content */}
        <div>
          <h3 className="text-xl font-bold text-white mb-8 text-center">Contenido destacado</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {featured.map((f) => (
              <div key={f.title} className="glass-card p-6 flex items-start justify-between gap-4 group cursor-pointer">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag text-xs">{f.tag}</span>
                    <span className="text-xs text-lavender/40">{f.type}</span>
                  </div>
                  <h4 className="text-white font-medium leading-snug group-hover:text-fuchsia transition-colors">
                    {f.title}
                  </h4>
                </div>
                <ArrowUpRight size={18} className="text-lavender/30 group-hover:text-fuchsia transition-colors flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
