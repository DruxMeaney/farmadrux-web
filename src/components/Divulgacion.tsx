"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import {
  FlaskConical,
  Leaf,
  Pill,
  Brain,
  Microscope,
  Dna,
  ArrowUpRight,
  Shield,
  Heart,
  Scale,
  BookOpen,
  Users,
  Lightbulb,
  Quote,
  ExternalLink,
  FileText,
} from "lucide-react";

/* ─── DIVULGACIÓN TOPICS ─── */
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

/* ─── HARM REDUCTION PRINCIPLES ─── */
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

/* ─── QUOTES ─── */
const quotes = [
  {
    text: "Si vamos a minimizar el daño, necesitamos una forma de medirlo y un marco de políticas que pueda responder a esta evidencia.",
    author: "Prof. David Nutt",
    source: "Drugs Without the Hot Air",
  },
  {
    text: "Si los usuarios son adictos, entonces están enfermos, y las sanciones penales son una forma inapropiada de tratar una enfermedad.",
    author: "Prof. David Nutt",
    source: "Drug Science",
  },
  {
    text: "Reducir riesgos no es promover el consumo. Es reconocer que las personas toman decisiones, y que merecen información veraz, herramientas concretas y acompañamiento sin juicio.",
    author: "Andrés Portilla Martínez",
    source: "Farmadrux",
  },
];

/* ─── COMPONENT ─── */
export default function Divulgacion() {
  return (
    <section className="relative gradient-section py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Divulgación científica"
          title="Ciencia rigurosa, ||comunicación accesible||"
          subtitle="Explicar ciencia con claridad no significa simplificarla. Significa tender puentes entre la evidencia y las personas que la necesitan."
        />

        {/* ═══ TOPIC CARDS ═══ */}
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

        {/* ═══ FEATURED ARTICLE: Reflexionando otra ciencia ═══ */}
        <div className="mb-20">
          <div className="glass-card p-0 overflow-hidden max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row">
              {/* Article cover image */}
              <div className="relative w-full md:w-80 h-64 md:h-auto flex-shrink-0">
                <Image
                  src="/drux-rrd.jpg"
                  alt="Reflexionando otra ciencia para México"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#060212]/80 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060212]/80 to-transparent md:hidden" />
              </div>
              {/* Content */}
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] px-3 py-1 rounded-full bg-gradient-to-r from-purple-vivid to-magenta text-white font-semibold uppercase tracking-wider">
                    Artículo destacado
                  </span>
                  <span className="tag text-xs">Ensayo</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  Reflexionando otra ciencia para México
                </h3>
                <p className="text-lavender/60 leading-relaxed mb-2 text-sm">
                  Dinámica de fluidos, UNAM · 2024 · ISSN en trámite
                </p>
                <p className="text-lavender/50 leading-relaxed mb-6 text-sm">
                  Una reflexión sobre modelos alternativos de hacer ciencia en el contexto mexicano. Este ensayo propone repensar la relación entre ciencia, sociedad y política pública desde una perspectiva crítica y transformadora.
                </p>
                <a
                  href="/articulos/Reflexionando_otra_ciencia_para_Mexico.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex self-start"
                >
                  <FileText size={18} />
                  Leer artículo completo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured content grid */}
        <div className="mb-20">
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

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ═══ REDUCCIÓN DE RIESGOS Y DAÑOS — INTEGRATED ═══ */}
        {/* ═══════════════════════════════════════════════════════ */}

        <div className="section-divider mb-20" />

        <div className="text-center mb-14 md:mb-20">
          <span className="tag mb-4 inline-block">Reducción de riesgos y daños</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
            Salud pública con <span className="text-gradient">dignidad y evidencia</span>
          </h2>
          <div className="glow-line max-w-24 mx-auto mt-8 opacity-60" />
        </div>

        {/* Academic definition */}
        <div className="glass-card p-8 md:p-10 mb-12 max-w-4xl mx-auto border-l-4 border-purple-vivid/40">
          <div className="flex items-start gap-4 mb-4">
            <BookOpen size={24} className="text-fuchsia flex-shrink-0 mt-1" />
            <div>
              <p className="text-lavender/80 leading-relaxed italic mb-3">
                La reducción de daños se define como el conjunto de políticas y programas que buscan reducir los costos sanitarios, sociales y económicos del uso de sustancias psicoactivas legales e ilegales, sin exigir necesariamente la eliminación del consumo.
              </p>
              <p className="text-sm text-lavender/40">
                — <span className="text-fuchsia/70">Harm Reduction Journal</span>, Springer Nature · Definición adoptada por la comunidad científica internacional
              </p>
            </div>
          </div>
        </div>

        {/* My story in RRD */}
        <div className="glass-card p-8 md:p-10 mb-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
            <Shield size={22} className="text-fuchsia" />
            Mi camino en la reducción de riesgos y daños
          </h3>
          <div className="space-y-4 text-lavender/70 leading-relaxed">
            <p>
              Desde hace años participo activamente en la sociedad civil organizada dedicada a la reducción de riesgos y daños asociados al uso de sustancias psicoactivas. He colaborado con colectivos, organizaciones y espacios comunitarios en México enfocados en el análisis de sustancias, la educación entre pares y el acompañamiento en salud.
            </p>
            <p>
              Mi trabajo ha incluido la participación directa en jornadas de <span className="text-fuchsia font-medium">drug checking</span>, la elaboración de materiales informativos, la formación de voluntarios, la comunicación de resultados en campo y la creación de contenido educativo para redes sociales y espacios de formación.
            </p>
            <p>
              He sido ponente en eventos como el <span className="text-fuchsia font-medium">REDUFEST</span> organizado por CELIBRE A.C., panelista invitado del <span className="text-fuchsia font-medium">IAPA — Secretaría de Salud</span>, y he impartido charlas en universidades e instituciones como la <span className="text-fuchsia font-medium">Escuela Militar de Medicina</span> y la <span className="text-fuchsia font-medium">Universidad de la Comunicación</span>.
            </p>
            <p>
              Creo firmemente que la reducción de riesgos y daños no es una apología del consumo: es un acto de dignidad, ciencia y derechos humanos. Es reconocer que las personas toman decisiones, y que merecen herramientas reales para cuidar su vida.
            </p>
          </div>
        </div>

        {/* Quotes carousel */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {quotes.map((q, i) => (
              <div key={i} className="glass-card p-7 relative">
                <Quote size={28} className="text-purple-vivid/20 absolute top-4 right-4" />
                <p className="text-lavender/70 italic leading-relaxed text-sm mb-4">
                  &ldquo;{q.text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{q.author}</p>
                  <p className="text-lavender/40 text-xs">{q.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        {/* Resources CTA */}
        <div className="text-center">
          <a href="/recursos" className="btn-primary">
            <BookOpen size={18} />
            Explorar recursos educativos
          </a>
        </div>
      </div>
    </section>
  );
}
