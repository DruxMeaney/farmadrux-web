"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import {
  FlaskConical,
  Megaphone,
  HeartHandshake,
  Leaf,
  BrainCircuit,
  Code2,
  Microscope,
  GraduationCap,
  Rocket,
  ExternalLink,
} from "lucide-react";

const facets = [
  {
    icon: FlaskConical,
    title: "Farmacéutico",
    desc: "Formación en ciencias farmacéuticas con enfoque en farmacología, sistemas biológicos y fármacos.",
  },
  {
    icon: Megaphone,
    title: "Divulgador científico",
    desc: "Comunicación rigurosa y accesible sobre salud, farmacología y sustancias psicoactivas.",
  },
  {
    icon: HeartHandshake,
    title: "Activista en reducción de riesgos y daños",
    desc: "Colaboración con colectivos y organizaciones en educación, análisis de sustancias y acompañamiento.",
  },
  {
    icon: Leaf,
    title: "Endocannabinólogo certificado",
    desc: "Certificación por la UNAM en el estudio del sistema endocannabinoide y sus aplicaciones.",
  },
  {
    icon: BrainCircuit,
    title: "Ciencia de datos y bioinformática",
    desc: "Integración de modelos computacionales, aprendizaje automático y análisis de datos en salud.",
  },
  {
    icon: Code2,
    title: "Tecnología aplicada a salud",
    desc: "Desarrollo de herramientas, aplicaciones y proyectos interdisciplinarios entre ciencia y tecnología.",
  },
  {
    icon: Microscope,
    title: "Investigación aplicada",
    desc: "Experiencia en modelos in vitro, fármacos y sistemas biológicos con enfoque translacional.",
  },
  {
    icon: GraduationCap,
    title: "Educación y formación",
    desc: "Talleres, charlas, materiales educativos y formación de públicos sobre salud y sustancias.",
  },
];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="relative gradient-section py-24 md:py-36 overflow-hidden">
      <div className="sparkle-field" aria-hidden="true" />
      <div className="glow-dots" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag="Quién soy"
          title="Donde convergen ||ciencia, salud y compromiso social||"
          subtitle="Soy Andrés Portilla Martínez. Mi trabajo articula farmacología, divulgación científica, reducción de riesgos y daños, derechos humanos y tecnología."
        />

        {/* ── Photo + Narrative side by side ── */}
        <div className="glass-card p-0 overflow-hidden mb-16 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="relative w-full md:w-[340px] h-80 md:h-auto min-h-[360px] flex-shrink-0">
              <Image
                src="/drux-rrd.jpg"
                alt="Andrés Portilla Martínez"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#060212]/80 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060212]/90 to-transparent md:hidden" />
            </div>
            {/* Text */}
            <div className="p-8 md:p-10 flex-1">
              <div className="space-y-5 text-lavender/70 leading-relaxed text-base">
                <p>
                  Soy farmacéutico de formación, divulgador por vocación y activista por convicción. A lo largo de mi trayectoria he trabajado en la intersección entre la ciencia, la salud comunitaria y la comunicación pública, con un enfoque particular en sustancias psicoactivas, farmacología y reducción de riesgos y daños.
                </p>
                <p>
                  Mi trabajo no se limita a explicar ciencia: busco transformar la conversación pública sobre drogas, salud y autonomía corporal. Creo que la información basada en evidencia, libre de estigma y centrada en derechos humanos puede salvar vidas, cambiar narrativas y construir comunidades más informadas y compasivas.
                </p>
                <p>
                  He colaborado con organizaciones y colectivos dedicados al análisis de sustancias, la educación comunitaria y el acompañamiento en salud. Al mismo tiempo, integro herramientas de programación, ciencia de datos, bioinformática e inteligencia artificial en proyectos orientados a la salud y la investigación.
                </p>
                <p>
                  <span className="text-fuchsia font-medium">Farmadrux</span> es el espacio donde todo converge: farmacología, ciencia, activismo, comunicación, tecnología, sensibilidad humana y pensamiento crítico.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Sustanciario CTA ── */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative glass-card p-0 overflow-hidden border-magenta/20 group">
            {/* Background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-vivid/10 via-magenta/15 to-fuchsia/10 opacity-60" />
            <div className="absolute inset-0 sparkle-field" aria-hidden="true" />
            <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-vivid to-magenta flex items-center justify-center flex-shrink-0 shadow-xl shadow-magenta/30">
                <Rocket size={36} className="text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="tag text-xs mb-3 inline-block">Proyecto propio</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Soy creador de <span className="text-gradient">El Sustanciario</span>
                </h3>
                <p className="text-lavender/60 leading-relaxed mb-5 max-w-xl">
                  Una webapp interactiva con información basada en evidencia sobre sustancias psicoactivas. Consulta perfiles farmacológicos, interacciones, mecanismos de acción y estrategias de reducción de riesgos, todo en un solo lugar.
                </p>
                <a
                  href="https://sustanciario.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex text-lg px-8 py-4 group-hover:shadow-[0_0_50px_rgba(192,38,211,0.4)]"
                >
                  <ExternalLink size={20} />
                  Explorar El Sustanciario
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Facets grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facets.map((f) => (
            <div key={f.title} className="glass-card p-6 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-vivid/20 to-magenta/20 flex items-center justify-center mb-4 group-hover:from-purple-vivid/30 group-hover:to-magenta/30 transition-all">
                <f.icon size={22} className="text-fuchsia" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-lavender/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
