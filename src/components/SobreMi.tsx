"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import {
  FlaskConical,
  Megaphone,
  HeartHandshake,
  Leaf,
  BrainCircuit,
  Code2,
  Microscope,
  GraduationCap,
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
    <section id="sobre-mi" className="relative gradient-section py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Quién soy"
          title="Donde convergen ||ciencia, salud y compromiso social||"
          subtitle="Soy Andrés Portilla Martínez. Mi trabajo articula farmacología, divulgación científica, reducción de riesgos y daños, derechos humanos y tecnología."
        />

        {/* Narrative with image */}
        <div className="glass-card p-8 md:p-12 mb-16 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Image */}
            <div className="relative w-full md:w-64 h-72 md:h-80 rounded-2xl overflow-hidden flex-shrink-0 border border-white/[0.08]">
              <Image
                src="/drux.png"
                alt="Andrés Portilla Martínez"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060212]/50 via-transparent to-transparent" />
            </div>

            {/* Text */}
            <div className="space-y-5 text-lavender/70 leading-relaxed text-base md:text-lg flex-1">
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
