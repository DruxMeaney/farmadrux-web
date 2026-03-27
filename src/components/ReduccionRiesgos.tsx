"use client";

import SectionHeader from "./SectionHeader";
import { Shield, Heart, Scale, BookOpen, Users, Lightbulb } from "lucide-react";

const principles = [
  {
    icon: Heart,
    title: "Dignidad humana",
    desc: "Cada persona tiene derecho a recibir información veraz, acompañamiento sin juicio y atención digna, independientemente de sus decisiones sobre el uso de sustancias.",
  },
  {
    icon: Shield,
    title: "Evidencia científica",
    desc: "Las estrategias de reducción de riesgos y daños se fundamentan en evidencia, no en moralismo. La ciencia es la base de cada intervención.",
  },
  {
    icon: Scale,
    title: "Derechos humanos",
    desc: "La política de drogas debe respetar la autonomía, la salud y los derechos fundamentales. La criminalización no es salud pública.",
  },
  {
    icon: Users,
    title: "Trabajo comunitario",
    desc: "El acompañamiento cercano, el análisis de sustancias y la educación entre pares son herramientas que transforman comunidades.",
  },
  {
    icon: BookOpen,
    title: "Educación no estigmatizante",
    desc: "Comunicar sobre drogas sin demonizar, sin infantilizar y sin reducir la conversación al miedo. Informar es empoderar.",
  },
  {
    icon: Lightbulb,
    title: "Pensamiento crítico",
    desc: "Cuestionar las narrativas dominantes, las políticas punitivas y los enfoques reduccionistas con datos, análisis y reflexión.",
  },
];

export default function ReduccionRiesgos() {
  return (
    <section id="reduccion" className="relative gradient-section-alt py-24 md:py-36 overflow-hidden">
      {/* Orb */}
      <div className="orb w-[400px] h-[400px] bg-magenta/10 top-[20%] left-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Reducción de riesgos y daños"
          title="Salud pública con ||dignidad y evidencia||"
          subtitle="La reducción de riesgos y daños no es apología. Es un enfoque de salud pública, educación, derechos humanos y acompañamiento basado en evidencia científica."
        />

        {/* Quote */}
        <div className="max-w-3xl mx-auto mb-16">
          <blockquote className="glass-card p-8 md:p-10 text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-vivid to-magenta flex items-center justify-center">
              <span className="text-white text-lg font-bold">&ldquo;</span>
            </div>
            <p className="text-lg md:text-xl text-lavender/80 italic leading-relaxed">
              Reducir riesgos no es promover el consumo. Es reconocer que las personas toman decisiones, y que merecen información veraz, herramientas concretas y acompañamiento sin juicio para cuidar su salud y su vida.
            </p>
          </blockquote>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p) => (
            <div key={p.title} className="glass-card p-7 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-vivid/20 to-magenta/20 flex items-center justify-center flex-shrink-0 group-hover:from-purple-vivid/30 group-hover:to-magenta/30 transition-all">
                  <p.icon size={20} className="text-fuchsia" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                  <p className="text-lavender/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resources teaser */}
        <div className="mt-16 text-center">
          <a href="/recursos" className="btn-primary">
            <BookOpen size={18} />
            Explorar recursos educativos
          </a>
        </div>
      </div>
    </section>
  );
}
