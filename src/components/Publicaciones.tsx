"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { FileText, ExternalLink, Calendar, BookMarked, ChevronDown, ChevronUp, Award, ArrowUpDown, Star } from "lucide-react";

const publications = [
  {
    title: "Phytochemical compounds against mild cognitive impairment key proteins: An in-silico approach",
    journal: "Journal of Applied Pharmaceutical Science",
    year: "2025",
    doi: "10.7324/JAPS.2025.209505",
    type: "Artículo de investigación",
    file: "/articulos/Phytochemical.pdf",
    abstract: "Mild cognitive impairment (MCI) is defined as an intermediate stage between normal age-related cognitive decline and pathological cognitive deterioration associated with aging. We investigate five critical proteins involved in the pathophysiological process of MCI: GSK3β, BACE1, GTRAP3-18, PXR, and EGFR. We evaluated 2,568 phytochemical compounds as potential ligands using virtual screening and molecular dynamics. The top probable ligand for each protein was dioscin for BACE1, quadrigeminal-A for GSK3β and GTRAP3-18, psychotridine for PXR and EGFR. This research emphasizes various phytochemicals that influence dysregulated proteins in MCI, offering details on their binding affinities and molecular interactions.",
    firstAuthor: false,
  },
  {
    title: "Reflexionando otra ciencia para México",
    journal: "Dinámica de Fluidos · Revista Materiales Avanzados, UNAM",
    year: "2024",
    doi: "10.22201/iim.rma.2024.41.97",
    type: "Ensayo",
    file: "/articulos/Reflexionando_otra_ciencia_para_Mexico.pdf",
    abstract: "Una reflexión sobre la relación entre ciencia, filosofía y política en el contexto mexicano. El texto explora cómo la herencia positivista, el cientificismo y la hegemonía del inglés han moldeado la práctica científica en México, proponiendo alternativas para una ciencia más democrática, situada y comprometida con su realidad social. Aborda la alternativa infernal de Stengers, la objetividad cuestionada de Latour y la necesidad de descolonizar el conocimiento.",
    firstAuthor: true,
  },
  {
    title: "Reverse Screening of Boronic Acid Derivatives: Analysis of Potential Antiproliferative Effects on a Triple-Negative Breast Cancer Model In Vitro",
    journal: "Inorganics (MDPI)",
    year: "2023",
    doi: "10.3390/inorganics11040165",
    type: "Artículo de investigación",
    file: "/articulos/inorganics-11-00165.pdf",
    abstract: "Different organoboron compounds interact with well-known molecular targets including serine proteases, transcription factors, and receptors. Using in silico servers SuperPred, PASS-Targets, and PPB2, we found that the analyzed compounds have anticancer properties. The antiproliferative effect was evaluated using an in vitro model of triple-negative breast cancer (4T1 cells). We demonstrated that phenanthren-9-yl boronic acid and 6-hydroxynaphthalen-2-yl boronic acid have cytotoxic properties at sub-micromolar concentrations.",
    firstAuthor: false,
  },
  {
    title: "(-)-Epicatechin Inhibits Metastatic-Associated Proliferation, Migration, and Invasion of Murine Breast Cancer Cells In Vitro",
    journal: "Molecules (MDPI)",
    year: "2023",
    doi: "10.3390/molecules28176229",
    type: "Artículo de investigación",
    file: "/articulos/EpiInhibitsCancer.pdf",
    abstract: "Breast cancer is a public health problem worldwide. (-)-Epicatechin (EC) is widely distributed in green tea, grapes, and cocoa. We reported that EC had an antitumor effect in a murine triple-negative mammary gland tumor model, decreasing tumoral size and volume and increasing survival by 44%. We found proliferation diminished, Bax/Bcl2 ratio increased, significant reduction in migration, and increased expression of genes associated with metastasis (Cdh1, Mtss1, Pten, Bmrs, Fat1, Smad4).",
    firstAuthor: false,
  },
  {
    title: "In silico evaluation of flavonoids as potential inhibitors of SARS-CoV-2 main nonstructural proteins (Nsps) — amentoflavone as a multitarget candidate",
    journal: "Journal of Molecular Modeling (Springer)",
    year: "2022",
    doi: "10.1007/s00894-022-05391-6",
    type: "Artículo de investigación",
    file: "/articulos/In silico Ament_SARS CoV2 JournalModeling (2022).pdf",
    abstract: "Despite the development of vaccines against COVID-19 and the multiple efforts to find efficient drugs, it is necessary to find nutraceutical/pharmaceutical drugs as possible preventives/treatments. Using virtual screening, 478 flavonoids from the KEGG database were evaluated against non-structural proteins Nsp1, Nsp3, Nsp5, Nsp12, and Nsp15. Amentoflavone, a biflavonoid found mainly in Ginkgo biloba, can interact and bind with the five proteins, suggesting its potential as a multitarget inhibitor. Molecular docking and structural analysis from molecular dynamics simulations support this potential.",
    firstAuthor: true,
  },
  {
    title: "(-)-Epicatechin Is a Biased Ligand of Apelin Receptor",
    journal: "International Journal of Molecular Sciences (MDPI)",
    year: "2022",
    doi: "10.3390/ijms23168962",
    type: "Artículo de investigación",
    file: "/articulos/Epi Apelin ligand_ JournalMolecular(2022).pdf",
    abstract: "(-)-Epicatechin (EC) is part of a large family of biomolecules called flavonoids. The apelin receptor (APLNR) is classified within the GPCR family and is capable of activating G protein canonical pathways and the β-arrestin transducer, which participates in receptor desensitization and internalization. With molecular dynamics and in vitro assays, we demonstrate how EC can recruit the β-arrestin in the active conformation of the APLN receptor acting as a biased agonist.",
    firstAuthor: true,
  },
  {
    title: "Beneficial Effects of Flavonoids on Skeletal Muscle Health: A Systematic Review and Meta-Analysis",
    journal: "Journal of Medicinal Food, Vol. 25, No. 5",
    year: "2022",
    doi: "10.1089/jmf.2021.0054",
    type: "Revisión sistemática y meta-análisis",
    file: "/articulos/Flavo on Muscle SistReview (2021).pdf",
    abstract: "Skeletal muscle is a highly dynamic tissue that responds to physiological adaptations or pathological conditions, and its mitochondria play a major role in bioenergetics and regulation. Flavonoids are polyphenolic compounds with the ability to modulate molecular pathways implicated in mitochondrial myopathy. We performed a systematic review using PubMed and Scopus to evaluate preclinical and clinical effects of flavonoids on skeletal muscle structure and function. The use of flavonoids could be a potential tool for prevention of muscle loss.",
    firstAuthor: false,
  },
  {
    title: "Ocular surface alterations in patients hospitalized for SARS-CoV-2",
    journal: "American Journal of Medicine and Surgery",
    year: "2021",
    doi: "10.17605/OSF.IO/AWPYC",
    type: "Artículo de investigación",
    file: "/articulos/SARS-CoV2 ocularsurface (2021).pdf",
    abstract: "Although COVID-19 is identified as a systemic disease with mainly pulmonary transmission, various studies present the ocular surface as a possible route of infection. We describe alterations of the ocular surface in patients hospitalized for SARS-CoV-2 in the Hospital de Especialidades Centro Médico Nacional Siglo XXI. Subconjunctival microbleeds were the predominant clinical sign, not previously reported in international literature, likely related to microvascular damage caused by the virus and/or anticoagulant treatment.",
    firstAuthor: false,
  },
  {
    title: "Catechins modulate the activity of mu opioid receptor (μOR): An in silico approach",
    journal: "Informatics in Medicine Unlocked (Elsevier), Vol. 20",
    year: "2020",
    doi: "10.1016/j.imu.2020.100431",
    type: "Artículo de investigación",
    file: "/articulos/Catechin Opioid Receptor (2020).pdf",
    abstract: "Treating addiction and withdrawal syndrome remains a research area of great interest since it is a persistent public health problem. Opiates account for the majority of addiction and withdrawal problems (at least 56% of reported drug consumers). Development of opiate addiction results mainly from activation of the mu-opioid receptor (MOR). Using an in silico approach, we demonstrate that catechins can modulate the activity of μOR, suggesting their potential as therapeutic candidates for opioid addiction treatment.",
    firstAuthor: false,
  },
  {
    title: "PXR is a target of (-)-epicatechin in skeletal muscle",
    journal: "Heliyon (Elsevier), Vol. 6, Issue 10",
    year: "2020",
    doi: "10.1016/j.heliyon.2020.e05357",
    type: "Artículo de investigación",
    file: "/articulos/Epi PXR ligand_ Hyperion (2020).pdf",
    abstract: "(-)-Epicatechin (EC) is a flavanol that has shown numerous biological effects such as decreased risk of cardiovascular dysfunction, metabolism regulation, and skeletal muscle performance improvement. The described EC acceptor/receptor molecules do not explain the EC's effect on skeletal muscle. We hypothesize that the pregnane X receptor (PXR) can fulfill those characteristics, and demonstrate through bioinformatics, affinity columns, and in vitro assays that PXR is a molecular target of EC in skeletal muscle.",
    firstAuthor: false,
  },
  {
    title: "Defining pharmacological terms based on receptor ligand interactions",
    journal: "Cardiovascular and Metabolic Science, Vol. 30 No. 3",
    year: "2020",
    doi: "10.35366/95585",
    type: "Artículo de revisión",
    file: "/articulos/PharmaTerms_review (2020).pdf",
    abstract: "There are several theories of how a drug interacts with a receptor. This review discusses the most relevant theories to elucidate the mechanisms governing drug-receptor interactions, including the occupational theory proposed by A. J. Clark. Over time, drug-receptor interaction theories became more complex and accurate, gaining fundamental parameters such as potency, efficacy, types of agonism (partial, total, inverse), antagonism (competitive and non-competitive), and modulation. Deep understanding of these concepts can make the difference between success or failure in pharmacological treatment.",
    firstAuthor: true,
  },
  {
    title: "G-proteins coupled receptors",
    journal: "Cardiovascular and Metabolic Science, Vol. 30 No. 2",
    year: "2019",
    doi: "",
    type: "Artículo de revisión",
    file: "/articulos/GPCR_review (2019).pdf",
    abstract: "Membrane receptors coupled to regulatory G proteins (GPCRs), also known as heptahelical or serpentine receptors, form a large and ubiquitous protein superfamily in charge of fundamental cellular functions. In humans, more than 800 of such receptors have been cloned. A wide variety of natural and synthetic molecules — hormones, neurotransmitters, autacoids, nutrients, ions, photons — exert their stimulatory or inhibitory actions through interaction with these receptors. This review covers their structure, classification, signaling, and pharmacological relevance.",
    firstAuthor: false,
  },
  {
    title: "Estudio de acoplamiento molecular de (-)-epicatequina y catequina como alternativa terapéutica para tratar la adicción y sobredosis por opiáceos",
    journal: "Revista Latinoamericana de Química — Suplemento especial",
    year: "2019",
    doi: "",
    type: "Artículo de investigación",
    file: "/articulos/RevLatinoamericana de Quimica (2019).pdf",
    abstract: "Estudio de acoplamiento molecular (docking) que evalúa el potencial de (-)-epicatequina y catequina como alternativas terapéuticas para el tratamiento de la adicción y sobredosis por opiáceos, mediante la modelación de la interacción de estos flavonoides con el receptor opioide mu (μOR).",
    firstAuthor: false,
  },
  {
    title: "Memorias del Congreso — Red Iberoamericana de Investigación de Productos Naturales (RIIPN)",
    journal: "Revista Latinoamericana RIIPN",
    year: "2019",
    doi: "",
    type: "Memorias de congreso",
    file: "/articulos/RevLatinoRIIPN_Memorias 2019.pdf",
    abstract: "Participación y publicación en las memorias del congreso de la Red Iberoamericana de Investigación de Productos Naturales, donde se presentaron avances en el estudio de compuestos bioactivos de origen natural y su potencial farmacológico.",
    firstAuthor: false,
  },
];

function ArticleCard({ pub }: { pub: (typeof publications)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`glass-card p-6 md:p-8 group ${pub.firstAuthor ? "border-fuchsia/15" : ""}`}>
      <div className="flex flex-col md:flex-row md:items-start gap-5">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
          pub.firstAuthor
            ? "bg-gradient-to-br from-purple-vivid/30 to-magenta/30"
            : "bg-gradient-to-br from-purple-vivid/20 to-magenta/20"
        }`}>
          {pub.firstAuthor ? (
            <Award size={22} className="text-fuchsia" />
          ) : (
            <FileText size={22} className="text-fuchsia" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-2">
            <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-fuchsia transition-colors">
              {pub.title}
            </h3>
            {pub.firstAuthor && (
              <span className="flex-shrink-0 inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-vivid to-magenta text-white font-bold uppercase tracking-wider whitespace-nowrap">
                <Star size={10} className="fill-white" />
                1er autor
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
            <span className="flex items-center gap-1 text-lavender/40">
              <BookMarked size={13} /> {pub.journal}
            </span>
            <span className="flex items-center gap-1 text-lavender/40">
              <Calendar size={13} /> {pub.year}
            </span>
            <span className="tag text-xs">{pub.type}</span>
          </div>

          {/* Abstract toggle */}
          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-sm text-fuchsia/70 hover:text-fuchsia transition-colors mb-2"
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? "Ocultar abstract" : "Ver abstract"}
            </button>
            {expanded && (
              <div className="border-l-2 border-purple-vivid/20 pl-4 mt-2 mb-3">
                <p className="text-lavender/55 text-sm leading-relaxed italic">
                  {pub.abstract}
                </p>
              </div>
            )}
          </div>

          {pub.doi && (
            <span className="text-xs text-lavender/30">DOI: {pub.doi}</span>
          )}
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
  );
}

type SortMode = "year" | "firstAuthor";

export default function Publicaciones() {
  const [sortBy, setSortBy] = useState<SortMode>("year");

  const sorted = [...publications].sort((a, b) => {
    if (sortBy === "firstAuthor") {
      if (a.firstAuthor && !b.firstAuthor) return -1;
      if (!a.firstAuthor && b.firstAuthor) return 1;
      return parseInt(b.year) - parseInt(a.year);
    }
    return parseInt(b.year) - parseInt(a.year);
  });

  const firstAuthorCount = publications.filter(p => p.firstAuthor).length;

  return (
    <section id="publicaciones" className="relative gradient-section-alt py-24 md:py-36 overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-purple-vivid/8 bottom-[10%] right-[-80px]" />
      <div className="sparkle-field" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Mis publicaciones"
          title="Artículos científicos ||que he publicado||"
          subtitle="Estos son los artículos de investigación, revisiones y ensayos que he publicado como autor o coautor en revistas científicas indexadas. Cada publicación refleja años de trabajo, rigor metodológico y compromiso con la ciencia."
        />

        {/* Count badges + sort controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-vivid/15 to-magenta/15 border border-purple-vivid/20 text-sm text-lavender/70">
              <FileText size={15} className="text-fuchsia" />
              {publications.length} publicaciones
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia/10 to-magenta/10 border border-fuchsia/20 text-sm text-fuchsia/80">
              <Award size={15} />
              {firstAuthorCount} como primer autor
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowUpDown size={14} className="text-lavender/40" />
            <span className="text-xs text-lavender/40 mr-1">Ordenar:</span>
            <button
              onClick={() => setSortBy("year")}
              className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                sortBy === "year"
                  ? "bg-gradient-to-r from-purple-vivid to-magenta text-white"
                  : "bg-white/[0.04] border border-white/[0.08] text-lavender/60 hover:text-white"
              }`}
            >
              Por año
            </button>
            <button
              onClick={() => setSortBy("firstAuthor")}
              className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                sortBy === "firstAuthor"
                  ? "bg-gradient-to-r from-purple-vivid to-magenta text-white"
                  : "bg-white/[0.04] border border-white/[0.08] text-lavender/60 hover:text-white"
              }`}
            >
              Primer autor
            </button>
          </div>
        </div>

        <div className="space-y-5">
          {sorted.map((pub, i) => (
            <ArticleCard key={pub.title} pub={pub} />
          ))}
        </div>
      </div>
    </section>
  );
}
