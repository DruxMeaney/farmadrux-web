"use client";

import SectionHeader from "./SectionHeader";
import { Code2, Database, BrainCircuit, Cpu, Dna, BarChart3, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: BrainCircuit,
    title: "Modelos de aprendizaje automático en farmacología",
    desc: "Desarrollo de modelos predictivos para la identificación de interacciones farmacológicas y efectos adversos mediante machine learning.",
    tags: ["ML", "Farmacología", "Python"],
    gradient: "from-purple-vivid to-fuchsia",
  },
  {
    icon: Dna,
    title: "Bioinformática y docking molecular",
    desc: "Análisis computacional de blancos terapéuticos cannabinoides utilizando simulaciones de acoplamiento molecular y modelado proteico.",
    tags: ["Bioinformática", "Cannabinoides", "Modelado"],
    gradient: "from-fuchsia to-pink-intense",
  },
  {
    icon: Database,
    title: "Análisis de datos en salud pública",
    desc: "Procesamiento y visualización de datos epidemiológicos y de drug checking para informar estrategias de reducción de riesgos.",
    tags: ["Data Science", "Salud pública", "R"],
    gradient: "from-magenta to-purple-vivid",
  },
  {
    icon: Cpu,
    title: "Herramientas digitales de educación en salud",
    desc: "Desarrollo de aplicaciones web y herramientas interactivas para la divulgación de información sobre sustancias y salud.",
    tags: ["Web Dev", "Educación", "Next.js"],
    gradient: "from-blue-500 to-purple-vivid",
  },
  {
    icon: BarChart3,
    title: "Algoritmos de análisis de muestras",
    desc: "Construcción de pipelines computacionales para el procesamiento de resultados de análisis de sustancias en contextos comunitarios.",
    tags: ["Algoritmos", "Drug checking", "Python"],
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: Code2,
    title: "Automatización y scraping científico",
    desc: "Herramientas de extracción y sistematización de información científica desde bases de datos farmacológicas y repositorios académicos.",
    tags: ["Automatización", "APIs", "NLP"],
    gradient: "from-pink-intense to-neon-pink",
  },
];

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="relative gradient-section py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Ciencia y tecnología"
          title="Código al servicio de ||la salud||"
          subtitle="Programación, ciencia de datos, bioinformática e inteligencia artificial aplicadas a farmacología, salud pública e investigación."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="glass-card p-7 group cursor-pointer">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-5 opacity-80 group-hover:opacity-100 transition-all`}>
                <p.icon size={24} className="text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-fuchsia transition-colors flex items-start justify-between gap-2">
                {p.title}
                <ArrowUpRight size={16} className="text-lavender/20 group-hover:text-fuchsia transition-colors flex-shrink-0 mt-1" />
              </h3>
              <p className="text-lavender/50 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-lavender/50 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
