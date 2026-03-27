"use client";

import SectionHeader from "./SectionHeader";
import { FileText, ExternalLink, Calendar, BookMarked } from "lucide-react";

const publications = [
  {
    title: "In silico evaluation of flavonoids as potential inhibitors of SARS-CoV-2 main nonstructural proteins (Nsps) — amentoflavone as a multitarget candidate",
    journal: "Journal of Molecular Modeling",
    year: "2022",
    type: "Artículo de investigación",
    file: "/articulos/In silico Ament_SARS CoV2 JournalModeling (2022).pdf",
    desc: "Evaluación computacional mediante docking y dinámica molecular de flavonoides como potenciales inhibidores de proteínas no estructurales del SARS-CoV-2.",
  },
  {
    title: "(-)-Epicatechin Is a Biased Ligand of Apelin Receptor",
    journal: "Journal of Molecular Modeling",
    year: "2022",
    type: "Artículo de investigación",
    file: "/articulos/Epi Apelin ligand_ JournalMolecular(2022).pdf",
    desc: "Análisis de (-)-epicatequina como ligando sesgado del receptor de apelina mediante modelado molecular y simulaciones in silico.",
  },
  {
    title: "(-)-Epicatechin Inhibits Metastatic-Associated Proliferation, Migration, and Invasion of Murine Breast Cancer Cells In Vitro",
    journal: "Publicación científica",
    year: "2022",
    type: "Artículo de investigación",
    file: "/articulos/EpiInhibitsCancer.pdf",
    desc: "Evaluación de los efectos antiproliferativos y antimetastásicos de (-)-epicatequina en células de cáncer de mama murino in vitro.",
  },
  {
    title: "Reverse Screening of Boronic Acid Derivatives: Analysis of Potential Antiproliferative Effects on a Triple-Negative Breast Cancer Model In Vitro",
    journal: "Inorganics (MDPI)",
    year: "2023",
    type: "Artículo de investigación",
    file: "/articulos/inorganics-11-00165.pdf",
    desc: "Screening reverso de derivados de ácido borónico y análisis de sus efectos antiproliferativos en un modelo de cáncer de mama triple negativo.",
  },
  {
    title: "Beneficial Effects of Flavonoids on Skeletal Muscle Health: A Systematic Review and Meta-Analysis",
    journal: "Revista científica internacional",
    year: "2021",
    type: "Revisión sistemática",
    file: "/articulos/Flavo on Muscle SistReview (2021).pdf",
    desc: "Revisión sistemática y meta-análisis sobre los efectos benéficos de los flavonoides en la salud del músculo esquelético.",
  },
  {
    title: "SARS-CoV-2 and the Ocular Surface",
    journal: "Publicación científica",
    year: "2021",
    type: "Artículo de investigación",
    file: "/articulos/SARS-CoV2 ocularsurface (2021).pdf",
    desc: "Estudio sobre la relación entre SARS-CoV-2 y la superficie ocular como potencial vía de entrada viral.",
  },
  {
    title: "Catechins modulate the activity of mu opioid receptor (μOR): An in silico approach",
    journal: "Elsevier",
    year: "2020",
    type: "Artículo de investigación",
    file: "/articulos/Catechin Opioid Receptor (2020).pdf",
    desc: "Estudio in silico sobre la modulación de la actividad del receptor opioide mu (μOR) por catequinas.",
  },
  {
    title: "PXR is a target of (-)-epicatechin in skeletal muscle",
    journal: "Heliyon (Elsevier)",
    year: "2020",
    type: "Artículo de investigación",
    file: "/articulos/Epi PXR ligand_ Hyperion (2020).pdf",
    desc: "Identificación del receptor PXR como blanco molecular de (-)-epicatequina en músculo esquelético.",
  },
  {
    title: "Defining pharmacological terms based on receptor ligand interactions",
    journal: "Revista Latinoamericana de Química",
    year: "2020",
    type: "Artículo de revisión",
    file: "/articulos/PharmaTerms_review (2020).pdf",
    desc: "Revisión conceptual para definir términos farmacológicos con base en las interacciones receptor-ligando.",
  },
  {
    title: "G-proteins coupled receptors",
    journal: "Revista Latinoamericana de Química",
    year: "2019",
    type: "Artículo de revisión",
    file: "/articulos/GPCR_review (2019).pdf",
    desc: "Revisión sobre receptores acoplados a proteínas G: estructura, clasificación, señalización y relevancia farmacológica.",
  },
  {
    title: "Publicación en Revista Latinoamericana de Química",
    journal: "Revista Latinoamericana de Química",
    year: "2019",
    type: "Artículo de investigación",
    file: "/articulos/RevLatinoamericana de Quimica (2019).pdf",
    desc: "Contribución científica publicada en la Revista Latinoamericana de Química.",
  },
  {
    title: "Memorias del Congreso — Revista Latinoamericana RIIPN",
    journal: "Revista Latinoamericana RIIPN",
    year: "2019",
    type: "Memorias de congreso",
    file: "/articulos/RevLatinoRIIPN_Memorias 2019.pdf",
    desc: "Participación y publicación en las memorias del congreso de la Red Iberoamericana de Investigación de Productos Naturales.",
  },
  {
    title: "Reflexionando otra ciencia para México",
    journal: "Publicación independiente",
    year: "2019",
    type: "Ensayo",
    file: "/articulos/Reflexionando_otra_ciencia_para_Mexico.pdf",
    desc: "Reflexión sobre modelos alternativos de hacer ciencia en el contexto mexicano.",
  },
  {
    title: "Phytochemical Analysis",
    journal: "Publicación científica",
    year: "2022",
    type: "Artículo de investigación",
    file: "/articulos/Phytochemical.pdf",
    desc: "Análisis fitoquímico de compuestos bioactivos con potencial farmacológico.",
  },
];

export default function Publicaciones() {
  return (
    <section id="publicaciones" className="relative gradient-section-alt py-24 md:py-36 overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-purple-vivid/8 bottom-[10%] right-[-80px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Publicaciones"
          title="Biblioteca ||académica y científica||"
          subtitle="Artículos de investigación, revisiones sistemáticas y publicaciones científicas. Un acervo que respalda el trabajo con evidencia y rigor."
        />

        <div className="space-y-5">
          {publications.map((pub, i) => (
            <article key={i} className="glass-card p-6 md:p-8 group">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-vivid/20 to-magenta/20 flex items-center justify-center flex-shrink-0">
                  <FileText size={22} className="text-fuchsia" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-lg leading-snug mb-2 group-hover:text-fuchsia transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-lavender/50 text-sm leading-relaxed mb-3">{pub.desc}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-lavender/40">
                      <BookMarked size={13} /> {pub.journal}
                    </span>
                    <span className="flex items-center gap-1 text-lavender/40">
                      <Calendar size={13} /> {pub.year}
                    </span>
                    <span className="tag text-xs">{pub.type}</span>
                  </div>
                </div>

                {/* Action */}
                <a
                  href={pub.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-fuchsia/70 hover:text-fuchsia transition-colors whitespace-nowrap flex-shrink-0"
                >
                  <ExternalLink size={14} />
                  Consultar PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
