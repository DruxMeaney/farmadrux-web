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
          subtitle="Soy Andrés Portilla Martínez. Farmacéutico, farmacólogo y doctor en investigación en medicina, con especialidad en endocannabinología por la UNAM. Mi trabajo articula farmacología, divulgación científica, reducción de riesgos y daños, derechos humanos y tecnología."
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
                  Soy farmacéutico, farmacólogo y doctor en investigación en medicina por el Instituto Politécnico Nacional, con especialidad en endocannabinología por la UNAM. A lo largo de mi trayectoria he trabajado en la intersección entre la ciencia, la salud comunitaria y la comunicación pública, con un enfoque particular en sustancias psicoactivas, farmacología y reducción de riesgos y daños.
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

              {/* Social links */}
              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-white/[0.06]">
                <a
                  href="https://linkedin.com/in/andrés-portilla-martínez-601666210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-lavender/70 hover:border-fuchsia/40 hover:text-fuchsia transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@farmadrux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-lavender/70 hover:border-fuchsia/40 hover:text-fuchsia transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  YouTube
                </a>
                <a
                  href="https://www.instagram.com/farmadrux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-lavender/70 hover:border-fuchsia/40 hover:text-fuchsia transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@farmadrux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-lavender/70 hover:border-fuchsia/40 hover:text-fuchsia transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                  TikTok
                </a>
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
