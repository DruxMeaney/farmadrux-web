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
  FileText,
  Bookmark,
  Feather,
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
    icon: Dna,
    title: "Proteómica y genómica",
    desc: "El estudio de proteínas y genomas como herramientas para entender enfermedades, diseñar fármacos y avanzar hacia una medicina de precisión personalizada.",
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

/* ─── PULL QUOTES FROM THE ARTICLE ─── */
const articleQuotes = [
  {
    text: "La ciencia no proporciona toda la información necesaria para tomar la mejor decisión. Confiar exclusivamente en la ciencia puede producir percepciones alteradas de la realidad.",
    section: "Rechazar lo propio y favorecer lo extranjero",
  },
  {
    text: "Si no hacemos política con y desde la ciencia, estamos dejando que otras personas tomen las decisiones por nosotros.",
    section: "El meridiano científico",
  },
  {
    text: "Convirtámonos en dueños de nuestra propia ciencia y acortemos la brecha del conocimiento para que este llegue a más personas.",
    section: "La alternativa infernal y qué hacer",
  },
  {
    text: "Los medicamentos no son los que tienen dosis, somos las personas quienes las tenemos.",
    section: "Rechazar lo propio y favorecer lo extranjero",
  },
  {
    text: "Utilicemos la pluma de la literatura como aliada para tejer ciencia con hilos de la imaginación y observación.",
    section: "La alternativa infernal y qué hacer",
  },
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

/* ─── DAVID NUTT + PERSONAL QUOTES ─── */
const rrdQuotes = [
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
    <section className="relative gradient-section py-24 md:py-36 overflow-hidden">
      <div className="sparkle-field" aria-hidden="true" />
      <div className="glow-dots" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag="Divulgación científica"
          title="Ciencia rigurosa, ||comunicación accesible||"
          subtitle="Explicar ciencia con claridad no significa simplificarla. Significa tender puentes entre la evidencia y las personas que la necesitan."
        />

        {/* ═══ TOPIC CARDS ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
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

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* ═══ EDITORIAL ARTICLE: Reflexionando otra ciencia ═══ */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          {/* Article header — magazine style */}
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Ensayo destacado</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Reflexionando otra ciencia <span className="text-gradient">para México</span>
            </h2>
            <p className="mt-4 text-lavender/50 max-w-xl mx-auto">
              Revista Materiales Avanzados · UNAM · Núm. 41 · julio–diciembre 2024
            </p>
            <div className="flex items-center justify-center gap-3 mt-4 text-sm text-lavender/40">
              <Feather size={14} className="text-fuchsia/60" />
              <span>Andrés Portilla Martínez</span>
              <span className="text-lavender/20">·</span>
              <span>ONG Disociadxs · Colectivo DiVU</span>
            </div>
            <div className="glow-line max-w-24 mx-auto mt-8 opacity-60" />
          </div>

          {/* Epigraph */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="border-l-2 border-fuchsia/30 pl-6 py-2">
              <p className="text-lavender/60 italic text-lg leading-relaxed">
                &ldquo;El trabajo de un buen escrito se desarrolla en tres niveles: uno musical, donde se compone; uno arquitectónico, donde se construye; y por último, uno textil, donde se teje.&rdquo;
              </p>
              <p className="text-sm text-fuchsia/50 mt-3 font-medium">— Walter Benjamin</p>
            </div>
          </div>

          {/* Article body — editorial layout */}
          <div className="max-w-3xl mx-auto space-y-8">

            {/* Section 1 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <Bookmark size={20} className="text-fuchsia" />
                Rechazar lo propio y favorecer lo extranjero
              </h3>
              <div className="space-y-4 text-lavender/65 leading-relaxed">
                <p>
                  La ciencia ha influenciado ampliamente a la filosofía moderna y ha reemplazado muchas de las especulaciones metafísicas con puntos de partida diferentes. Desafortunadamente, la situación de regreso no es igual. En la actualidad, la ciencia se ha olvidado de la filosofía y ha cerrado sus puertas. El cientificismo domina discursos profesionales, cotidianos y hasta pseudocientíficos.
                </p>
                <p>
                  Si tan solo la ciencia nos dejara tomar prestada la manera de pensar que la filosofía ha conservado, nuestra realidad sería otra. Por ejemplo, la falacia ecológica nos dice que todos los miembros de un grupo muestran las mismas características del grupo. Esto lo vemos todo el tiempo: cuando nos recetan un medicamento dejamos que las oficinas de la industria farmacéutica decidan qué dosis debemos tomar, en lugar de dejar que una persona profesional de la salud las determine.
                </p>
              </div>
            </div>

            {/* Pull quote 1 — magazine style */}
            <div className="relative my-12 py-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-vivid/5 via-magenta/5 to-purple-vivid/5 rounded-2xl" />
              <div className="relative px-8 md:px-12">
                <Quote size={40} className="text-fuchsia/20 mb-3" />
                <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed italic">
                  &ldquo;Los medicamentos no son los que tienen dosis, somos las personas quienes las tenemos.&rdquo;
                </p>
                <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-fuchsia to-magenta rounded-full" />
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <Bookmark size={20} className="text-fuchsia" />
                El meridiano científico
              </h3>
              <div className="space-y-4 text-lavender/65 leading-relaxed">
                <p>
                  A la ciencia se le muestra desprendida de los eventos mundiales, aislada y estudiosa. Pero lo cierto es que siempre ha estado sujeta a los acontecimientos sociopolíticos globales. Desde tiempos antiguos, quien controle el meridiano cero controlará el discurso hegemónico, y mientras sigamos apreciándolo de esa manera, seguiremos esperando que desde fuera nos digan de dónde debemos partir para contar nuestra historia.
                </p>
                <p>
                  En México se nos enseña que las ciencias duras deben ser apolíticas. Isabelle Stengers argumenta que la forma en que se practica la ciencia actual es una forma de aceleración, en la que el objetivo principal es publicar cada vez más resultados y obtener cada vez más financiamiento, lo que ha llevado a la exclusión de perspectivas y enfoques que no se ajustan a esta idea de la ciencia.
                </p>
              </div>
            </div>

            {/* Pull quote 2 */}
            <div className="relative my-12 py-8">
              <div className="absolute inset-0 bg-gradient-to-r from-magenta/5 via-purple-vivid/5 to-fuchsia/5 rounded-2xl" />
              <div className="relative px-8 md:px-12">
                <Quote size={40} className="text-purple-vivid/20 mb-3" />
                <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed italic">
                  &ldquo;Si no hacemos política con y desde la ciencia, estamos dejando que otras personas tomen las decisiones por nosotros.&rdquo;
                </p>
                <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-purple-vivid to-fuchsia rounded-full" />
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <Bookmark size={20} className="text-fuchsia" />
                La ciencia carroñera
              </h3>
              <div className="space-y-4 text-lavender/65 leading-relaxed">
                <p>
                  Durante la estancia doctoral del autor en el Instituto Politécnico Nacional, una traducción literaria de un concepto científico fue rechazada, poniendo en evidencia la herencia positivista en la ciencia que se practica en México. Karl Popper argumentó que la ciencia es un método de conocimiento superior a otros métodos, incluyendo la literatura y la filosofía especulativa. Pero la literatura y otras formas de arte pueden proporcionar una comprensión más profunda de la realidad humana y del mundo natural.
                </p>
                <p>
                  ¿Por qué seguimos haciendo ciencia en inglés? Para comienzos del siglo XX, la ciencia se escribía en alemán, francés e inglés. Hoy el inglés ocupa hasta el 90% del total de publicaciones. Son 17 años los que tarda en trasladarse la información del laboratorio a los libros de texto en países angloparlantes. En México, ese retraso era de 23 años.
                </p>
              </div>
            </div>

            {/* Pull quote 3 */}
            <div className="relative my-12 py-8">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia/5 via-magenta/8 to-purple-vivid/5 rounded-2xl" />
              <div className="relative px-8 md:px-12">
                <Quote size={40} className="text-magenta/20 mb-3" />
                <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed italic">
                  &ldquo;La ciencia no proporciona toda la información necesaria para tomar la mejor decisión. Confiar exclusivamente en la ciencia puede producir percepciones alteradas de la realidad.&rdquo;
                </p>
                <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-magenta to-pink-intense rounded-full" />
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <Bookmark size={20} className="text-fuchsia" />
                La alternativa infernal y qué hacer
              </h3>
              <div className="space-y-4 text-lavender/65 leading-relaxed">
                <p>
                  Isabelle Stengers llama &ldquo;la alternativa infernal&rdquo; a la situación en la que creemos que solo tenemos dos opciones para resolver un problema. La búsqueda del progreso a cualquier costo puede llevar a consecuencias indeseables y a una pérdida de control sobre nuestro propio destino. En cambio, debemos estar dispuestos a explorar nuevas posibilidades y considerar perspectivas alternativas que nos permitan construir un futuro más sostenible, justo y equitativo.
                </p>
                <p>
                  Es fundamental que, como país, nos autoapreciemos y tengamos el valor suficiente para creer en nuestra propia creatividad y habilidades. Debemos tener la confianza de inventar conceptos, diseñar fármacos y redefinir teorías científicas. Tenemos la infraestructura y las posibilidades de contar nuestra historia desde nuestro lugar.
                </p>
              </div>
            </div>

            {/* Final pull quote — large */}
            <div className="relative my-14 py-10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-vivid/8 via-magenta/10 to-fuchsia/8 rounded-3xl border border-white/[0.06]" />
              <div className="relative px-8 md:px-14 text-center">
                <Quote size={48} className="text-fuchsia/15 mx-auto mb-4" />
                <p className="text-2xl md:text-3xl font-light text-white leading-snug italic max-w-2xl mx-auto">
                  &ldquo;Utilicemos la pluma de la literatura como aliada para tejer ciencia con hilos de la imaginación y observación.&rdquo;
                </p>
                <p className="text-sm text-fuchsia/50 mt-5 font-medium">— Andrés Portilla Martínez, 2024</p>
                <div className="mt-5 h-0.5 w-20 bg-gradient-to-r from-fuchsia to-magenta rounded-full mx-auto" />
              </div>
            </div>

            {/* Download CTA */}
            <div className="text-center pt-4">
              <a
                href="/articulos/Reflexionando_otra_ciencia_para_Mexico.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <FileText size={18} />
                Leer el artículo completo en PDF
              </a>
            </div>
          </div>
        </div>

        {/* Featured content grid */}
        <div className="mb-24">
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

        {/* Quotes */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {rrdQuotes.map((q, i) => (
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
