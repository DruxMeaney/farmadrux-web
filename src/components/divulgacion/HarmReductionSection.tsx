"use client";

import { motion } from "framer-motion";
import {
  Shield, Heart, Scale, Users, BookOpen, Lightbulb, Quote,
} from "lucide-react";

const principles = [
  { icon: Heart, title: "Dignidad humana", desc: "Cada persona tiene derecho a recibir información veraz, acompañamiento sin juicio y atención digna, independientemente de sus decisiones sobre el uso de sustancias." },
  { icon: Shield, title: "Evidencia científica", desc: "Las estrategias de reducción de riesgos y daños se fundamentan en evidencia, no en moralismo. La ciencia es la base de cada intervención." },
  { icon: Scale, title: "Derechos humanos", desc: "La política de drogas debe respetar la autonomía, la salud y los derechos fundamentales. La criminalización no es salud pública." },
  { icon: Users, title: "Trabajo comunitario", desc: "El acompañamiento cercano, el análisis de sustancias y la educación entre pares son herramientas que transforman comunidades." },
  { icon: BookOpen, title: "Educación no estigmatizante", desc: "Comunicar sobre drogas sin demonizar, sin infantilizar y sin reducir la conversación al miedo. Informar es empoderar." },
  { icon: Lightbulb, title: "Pensamiento crítico", desc: "Cuestionar las narrativas dominantes, las políticas punitivas y los enfoques reduccionistas con datos, análisis y reflexión." },
];

const quotes = [
  { text: "Si vamos a minimizar el daño, necesitamos una forma de medirlo y un marco de políticas que pueda responder a esta evidencia.", author: "Prof. David Nutt", source: "Drugs Without the Hot Air" },
  { text: "Si los usuarios son adictos, entonces están enfermos, y las sanciones penales son una forma inapropiada de tratar una enfermedad.", author: "Prof. David Nutt", source: "Drug Science" },
  { text: "Reducir riesgos no es promover el consumo. Es reconocer que las personas toman decisiones, y que merecen información veraz, herramientas concretas y acompañamiento sin juicio.", author: "Andrés Portilla Martínez", source: "Farmadrux" },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HarmReductionSection() {
  return (
    <div>
      <div className="text-center mb-14">
        <span className="tag mb-4 inline-block">Reducción de riesgos y daños</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
          Salud pública con <span className="text-gradient">dignidad y evidencia</span>
        </h2>
        <div className="glow-line max-w-24 mx-auto mt-8 opacity-60" />
      </div>

      {/* Academic definition */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp}
        className="glass-card p-8 md:p-10 mb-12 max-w-4xl mx-auto border-l-4 border-purple-vivid/40"
      >
        <div className="flex items-start gap-4">
          <BookOpen size={24} className="text-fuchsia flex-shrink-0 mt-1" />
          <div>
            <p className="text-lavender/80 leading-relaxed italic mb-3">
              La reducción de daños se define como el conjunto de políticas y programas que buscan reducir los costos sanitarios, sociales y económicos del uso de sustancias psicoactivas legales e ilegales, sin exigir necesariamente la eliminación del consumo.
            </p>
            <p className="text-sm text-lavender/40">
              — <span className="text-fuchsia/70">Harm Reduction Journal</span>, Springer Nature
            </p>
          </div>
        </div>
      </motion.div>

      {/* Quotes */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={stagger}
        className="mb-14 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <motion.div key={i} variants={fadeUp} className="glass-card p-7 relative">
              <Quote size={28} className="text-purple-vivid/15 absolute top-4 right-4" />
              <p className="text-lavender/70 italic leading-relaxed text-sm mb-4">
                &ldquo;{q.text}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold text-sm">{q.author}</p>
                <p className="text-lavender/40 text-xs">{q.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Principles */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {principles.map((p) => (
          <motion.div key={p.title} variants={fadeUp} className="glass-card p-7 group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-vivid/20 to-magenta/20 flex items-center justify-center flex-shrink-0">
                <p.icon size={20} className="text-fuchsia" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-lavender/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
