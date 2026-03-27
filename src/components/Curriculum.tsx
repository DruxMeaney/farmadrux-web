"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import {
  Download,
  GraduationCap,
  Briefcase,
  Mic,
  BookOpen,
  Code2,
  FlaskConical,
  Brain,
  Globe,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Dna,
  Cpu,
  Database,
  Users,
  Leaf,
} from "lucide-react";

/* ─── DATA ─── */

const education = [
  {
    degree: "Doctorado en Investigación en Medicina",
    school: "Instituto Politécnico Nacional",
    period: "2019 – 2023",
    icon: FlaskConical,
  },
  {
    degree: "Maestría en Ciencias en Farmacología",
    school: "Instituto Politécnico Nacional",
    period: "2017 – 2019",
    icon: Brain,
  },
  {
    degree: "Licenciatura en Química Farmacéutica Biológica",
    school: "Universidad Autónoma Metropolitana",
    period: "2010 – 2016",
    icon: GraduationCap,
  },
  {
    degree: "Diplomado Internacional en Endocannabinología",
    school: "Universidad Nacional Autónoma de México (UNAM)",
    period: "2022 – 2023",
    icon: Leaf,
  },
  {
    degree: "Diplomado en Neurociencia y Biología de la Conducta",
    school: "Pharmed Solutions Institute",
    period: "2015",
    icon: Brain,
  },
];

const experience = [
  {
    role: "Director de Tecnología",
    company: "Stonevale — Startup de IA en Salud",
    period: "Nov 2025 – actualidad",
    desc: "Desarrollo de algoritmos de aprendizaje automático supervisados y no supervisados aplicados a salud.",
    link: "https://stonevale.io",
    tags: ["IA", "Machine Learning", "Salud"],
    active: true,
  },
  {
    role: "Socio inversionista industrial",
    company: "Clínica en diagnóstico molecular — Startup",
    period: "Ago 2023 – actualidad",
    desc: "Diseño experimental en biología molecular, secuenciación de ADN de nueva generación, protocolos PNO y algoritmos de bioinformática.",
    tags: ["Bioinformática", "Diagnóstico molecular", "NGS"],
    active: true,
  },
  {
    role: "Analista de bases de datos",
    company: "Banco Interamericano de Desarrollo (BID)",
    period: "Jul 2023 – Mar 2024",
    desc: "Coordinación de programación del equipo de estandarización de datos de movilidad usando Python.",
    tags: ["Python", "Data Science", "Consultoría"],
    active: false,
  },
  {
    role: "Investigador y administrador de laboratorio",
    company: "Instituto Politécnico Nacional",
    period: "2017 – 2023",
    desc: "Equipos multidisciplinarios de medicina traslacional: diseño de fármacos, interacción fármaco-receptor con modelos in silico e in vitro en cultivos de células eucariotas.",
    tags: ["Farmacología", "In silico", "In vitro", "Medicina traslacional"],
    active: false,
  },
];

const talks = [
  { title: "El alcohol, lo que sabemos y un poco de farmacología", venue: "REDUFEST — CELIBRE A.C.", date: "Jun 2025" },
  { title: "Reducción de Riesgos y Daños", venue: "IAPA — Secretaría de Salud", date: "May 2025" },
  { title: "Hablemos de sustancias psicoactivas", venue: "Universidad de la Comunicación", date: "May 2025" },
  { title: "Hackeando el dolor: el poder de los cannabinoides", venue: "Instituto Biocanna — Clase magistral", date: "Mar 2025" },
  { title: "Cannabinoides, endocannabinoides y análogos como moduladores en vías nociceptivas", venue: "UAM Xochimilco — BIOSALUD", date: "Feb 2025" },
  { title: "Sustancias Psicoactivas: Ciencia, Salud y Responsabilidades Médicas", venue: "Escuela Militar de Medicina — Conferencia magistral", date: "Ene 2025" },
  { title: "Reconocimiento de Imágenes con K-Means en Python", venue: "DATAMINI — Curso (8 h)", date: "Abr 2024" },
  { title: "La vida del CBD en el organismo", venue: "Instituto Biocanna — Seminario", date: "Abr 2024" },
  { title: "Mecanismos moleculares en interacción fármaco-receptor", venue: "UAM Xochimilco — Maestría en Ciencias Farmacéuticas", date: "Jun 2023" },
  { title: "Profesor de Bioquímica", venue: "Escuela Superior de Medicina, IPN", date: "2019 – 2022" },
  { title: "(-)-Epicatechin is a Biased Ligand of Apelin Receptor", venue: "Scientific Meditech — 6th Int. Webinar", date: "Nov 2022" },
  { title: "Vías de señalización celular", venue: "UNAM — Curso (10 h)", date: "Jun 2022" },
  { title: "Evaluación de metabolitos secundarios con actividad biológica", venue: "UNAM — Taller (20 h)", date: "Jun 2022" },
  { title: "Citocromo P450: estructura, función y relevancia biológica", venue: "Instituto Nacional de Pediatría — Curso (19 h)", date: "Ene 2020" },
];

const skills = {
  tech: [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 85 },
    { name: "Bioinformática", level: 90 },
    { name: "Ciencia de datos", level: 88 },
    { name: "Linux / Shell", level: 80 },
    { name: "Java / CSS", level: 70 },
  ],
  science: [
    { name: "Farmacología", level: 98 },
    { name: "Docking molecular", level: 95 },
    { name: "Cultivo celular", level: 90 },
    { name: "Endocannabinología", level: 92 },
    { name: "Diseño de fármacos", level: 88 },
    { name: "Divulgación científica", level: 95 },
  ],
  tools: ["GraphPad Prism", "GROMACS", "PyMol", "DiscoveryStudio", "AutoDock Vina", "Anaconda", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Excel profesional", "QGis"],
};

/* ─── COMPONENT ─── */

export default function Curriculum() {
  return (
    <section className="relative gradient-section py-24 md:py-36 overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb w-[400px] h-[400px] bg-purple-vivid/10 top-[10%] right-[-120px]" />
      <div className="orb w-[350px] h-[350px] bg-magenta/8 bottom-[20%] left-[-100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Curriculum Vitae"
          title="Dr. Andrés ||Portilla Martínez||"
          subtitle="Farmacéutico · Investigador · Divulgador científico · Director de tecnología · Activista en reducción de riesgos y daños"
        />

        {/* ── HEADER CARD WITH PHOTO + DOWNLOAD ── */}
        <div className="glass-card p-8 md:p-10 mb-16 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-white/[0.08] flex-shrink-0 shadow-xl shadow-purple-vivid/10">
              <Image src="/drux-portrait.jpg" alt="Dr. Andrés Portilla Martínez" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060212]/40 via-transparent to-transparent" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Dr. Andrés Portilla Martínez</h3>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4 text-sm text-lavender/50">
                <span className="flex items-center gap-1"><MapPin size={14} className="text-fuchsia/60" /> CDMX, México</span>
                <span className="flex items-center gap-1"><Globe size={14} className="text-fuchsia/60" /> Español · Inglés</span>
              </div>
              <p className="text-lavender/60 text-sm leading-relaxed mb-5">
                Doctor en Investigación en Medicina por el IPN. Más de 12 publicaciones científicas internacionales. Experiencia en farmacología, IA en salud, bioinformática, divulgación y reducción de riesgos y daños.
              </p>
              <a
                href="/CV_AndresPortillaMartinez.pdf"
                download
                className="btn-primary inline-flex"
              >
                <Download size={18} />
                Descargar CV completo
              </a>
            </div>
          </div>
        </div>

        {/* ── EDUCATION TIMELINE ── */}
        <div className="mb-20">
          <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-vivid to-fuchsia flex items-center justify-center">
              <GraduationCap size={20} className="text-white" />
            </div>
            Formación académica
          </h3>
          <div className="relative pl-8 border-l-2 border-purple-vivid/20 space-y-8">
            {education.map((e, i) => (
              <div key={i} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full bg-[#060212] border-2 border-purple-vivid/40 group-hover:border-fuchsia group-hover:shadow-[0_0_12px_rgba(192,38,211,0.4)] transition-all flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-vivid/60 group-hover:bg-fuchsia transition-colors" />
                </div>
                <div className="glass-card p-5 group-hover:border-magenta/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-vivid/15 to-magenta/15 flex items-center justify-center flex-shrink-0">
                      <e.icon size={18} className="text-fuchsia" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold leading-snug">{e.degree}</h4>
                      <p className="text-lavender/50 text-sm mt-0.5">{e.school}</p>
                      <span className="text-xs text-lavender/30 flex items-center gap-1 mt-1">
                        <Calendar size={11} /> {e.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── EXPERIENCE ── */}
        <div className="mb-20">
          <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-magenta to-pink-intense flex items-center justify-center">
              <Briefcase size={20} className="text-white" />
            </div>
            Experiencia profesional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((e, i) => (
              <div key={i} className={`glass-card p-7 group ${e.active ? "border-magenta/15" : ""}`}>
                {e.active && (
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-green-400 font-semibold">Activo</span>
                  </div>
                )}
                <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-fuchsia transition-colors">{e.role}</h4>
                <p className="text-fuchsia/60 text-sm font-medium mb-2">{e.company}</p>
                <span className="text-xs text-lavender/30 flex items-center gap-1 mb-3">
                  <Calendar size={11} /> {e.period}
                </span>
                <p className="text-lavender/50 text-sm leading-relaxed mb-4">{e.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>
                {e.link && (
                  <a href={e.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-fuchsia/50 hover:text-fuchsia transition-colors mt-3">
                    <ExternalLink size={12} /> {e.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── SKILLS ── */}
        <div className="mb-20">
          <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-vivid flex items-center justify-center">
              <Code2 size={20} className="text-white" />
            </div>
            Habilidades y competencias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Tech skills */}
            <div className="glass-card p-7">
              <div className="flex items-center gap-2 mb-6">
                <Cpu size={18} className="text-fuchsia" />
                <h4 className="text-white font-semibold">Tecnología y programación</h4>
              </div>
              <div className="space-y-4">
                {skills.tech.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-lavender/70">{s.name}</span>
                      <span className="text-xs text-lavender/40 font-mono">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-vivid to-fuchsia transition-all duration-1000"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Science skills */}
            <div className="glass-card p-7">
              <div className="flex items-center gap-2 mb-6">
                <Dna size={18} className="text-fuchsia" />
                <h4 className="text-white font-semibold">Ciencia y farmacología</h4>
              </div>
              <div className="space-y-4">
                {skills.science.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-lavender/70">{s.name}</span>
                      <span className="text-xs text-lavender/40 font-mono">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-magenta to-pink-intense transition-all duration-1000"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools cloud */}
          <div className="glass-card p-7">
            <div className="flex items-center gap-2 mb-5">
              <Database size={18} className="text-fuchsia" />
              <h4 className="text-white font-semibold">Software y herramientas</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((t) => (
                <span key={t} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-lavender/60 hover:text-fuchsia hover:border-magenta/30 transition-all cursor-default font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TALKS & TEACHING ── */}
        <div className="mb-20">
          <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia to-neon-pink flex items-center justify-center">
              <Mic size={20} className="text-white" />
            </div>
            Conferencias, cursos y ponencias
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {talks.map((t, i) => (
              <div key={i} className="glass-card p-5 group">
                <h4 className="text-white font-medium text-sm leading-snug mb-1.5 group-hover:text-fuchsia transition-colors">
                  {t.title}
                </h4>
                <p className="text-lavender/40 text-xs mb-1">{t.venue}</p>
                <span className="text-xs text-lavender/30 flex items-center gap-1">
                  <Calendar size={10} /> {t.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── ASSOCIATIONS ── */}
        <div className="mb-16">
          <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
              <Users size={20} className="text-white" />
            </div>
            Asociaciones
          </h3>
          <div className="glass-card p-7">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-400/20 flex items-center justify-center flex-shrink-0">
                <Award size={22} className="text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Asociación Mexicana de Medicina Cannabinoide A.C.</h4>
                <p className="text-lavender/50 text-sm mt-1">Asociado desde 2021 · Jefe de la Comisión de Investigación · Profesor de Farmacología de cannabinoides y endocannabinoides.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── DOWNLOAD CTA ── */}
        <div className="text-center">
          <div className="glass-card p-10 max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-vivid to-magenta mx-auto mb-5 flex items-center justify-center shadow-lg shadow-magenta/20">
              <BookOpen size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">¿Quieres ver el CV completo?</h3>
            <p className="text-lavender/50 text-sm mb-6 max-w-md mx-auto">
              Descarga el documento PDF con toda mi trayectoria académica, profesional, publicaciones y más.
            </p>
            <a href="/CV_AndresPortillaMartinez.pdf" download className="btn-primary inline-flex">
              <Download size={18} />
              Descargar CV en PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
