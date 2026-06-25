export type ContentType = "publicado" | "original" | "reflexion" | "ensayo" | "esencial";

export interface ExternalSource {
  name: string;
  url: string;
}

export interface PullQuoteData {
  text: string;
  attribution?: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  type: ContentType;
  source?: ExternalSource;
  author: string;
  date: string;
  concepts: string[];
  topics: string[];
  excerpt: string;
  pullQuotes: PullQuoteData[];
  readingTime: string;
  featured?: boolean;
  series?: string;
  relatedIds: string[];
  pdfUrl?: string;
  externalUrl?: string;
}

export const articles: Article[] = [
  {
    id: "cuidado-terceriza",
    title: "Cuando el cuidado se terceriza, el placer se vuelve riesgo",
    subtitle: "Sobre iatrogenia cultural, medicalización y la expropiación del saber sobre el cuerpo",
    type: "publicado",
    source: { name: "Animal Político / Grupo Animal", url: "https://grupoanimal.mx" },
    author: "Andrés Portilla Martínez",
    date: "2026-01-30",
    concepts: ["iatrogenia", "autocuidado", "placer", "riesgo", "reduccion-de-danos", "autonomia", "medicalizacion"],
    topics: ["sustancias-psicoactivas", "salud-publica"],
    excerpt: "Cuando delegamos el bienestar por completo a instituciones que convierten la salud en burocracia, aparece un daño social silencioso. La medicalización de la vida cotidiana separa el placer del cuidado, y convierte la autonomía corporal en sospecha. Este texto explora la iatrogenia cultural, la expropiación del saber sobre el cuerpo y la necesidad urgente de reconstruir una cultura del autocuidado informado.",
    pullQuotes: [
      { text: "Cuando el cuidado se terceriza, el placer se vuelve riesgo.", attribution: "Andrés Portilla Martínez" },
      { text: "La medicalización no solo ocurre en los consultorios: ocurre cada vez que dejamos de confiar en nuestro propio saber sobre el cuerpo." },
      { text: "Reducir riesgos no es promover el consumo. Es reconocer que las personas toman decisiones, y que merecen herramientas reales para cuidar su vida." },
    ],
    readingTime: "8 min",
    featured: true,
    relatedIds: ["camino-rrd", "reflexionando-ciencia"],
    externalUrl: "https://grupoanimal.mx/opinion/cuando-el-cuidado-se-terceriza-el-placer-se-vuelve-riesgo",
  },
  {
    id: "reflexionando-ciencia",
    title: "Reflexionando otra ciencia para México",
    subtitle: "Ciencia situada, descolonización epistémica y la alternativa infernal de Stengers",
    type: "ensayo",
    source: { name: "Revista Materiales Avanzados, UNAM", url: "https://www.iim.unam.mx" },
    author: "Andrés Portilla Martínez",
    date: "2024-07-01",
    concepts: ["ciencia-situada", "descolonizacion", "filosofia-ciencia", "politica-cientifica", "autonomia"],
    topics: ["ciencia-salud-publica"],
    excerpt: "Una reflexión sobre la relación entre ciencia, filosofía y política en el contexto mexicano. Explora cómo la herencia positivista, el cientificismo y la hegemonía del inglés han moldeado la práctica científica en México, proponiendo alternativas para una ciencia más democrática, situada y comprometida con su realidad social.",
    pullQuotes: [
      { text: "Utilicemos la pluma de la literatura como aliada para tejer ciencia con hilos de la imaginación y observación." },
      { text: "Los medicamentos no son los que tienen dosis, somos las personas quienes las tenemos." },
      { text: "No tenemos por qué obedecer la hegemonía de un idioma para hacer ciencia. Y ese es el punto." },
      { text: "Convirtámonos en dueños de nuestra propia ciencia y acortemos la brecha del conocimiento." },
      { text: "Terminamos siendo carroñeros, buscando y consumiendo las sobras de las ideas positivistas de los dueños." },
    ],
    readingTime: "15 min",
    featured: true,
    relatedIds: ["cuidado-terceriza", "camino-rrd"],
    pdfUrl: "/articulos/Reflexionando_otra_ciencia_para_Mexico.pdf",
  },
  {
    id: "camino-rrd",
    title: "Mi camino en la reducción de riesgos y daños",
    subtitle: "Del paradigma prohibicionista a la evidencia: farmacología comunitaria, drug checking y justicia epistémica en salud",
    type: "original",
    author: "Andrés Portilla Martínez",
    date: "2026-03-01",
    concepts: ["reduccion-de-danos", "drug-checking", "autonomia", "derechos-humanos", "autocuidado"],
    topics: ["sustancias-psicoactivas", "salud-publica"],
    excerpt: "La reducción de riesgos y daños (RRD) constituye un marco de salud pública que, lejos de exigir la abstinencia como condición, prioriza la disminución de consecuencias adversas asociadas al uso de sustancias psicoactivas (Harm Reduction International, 2020). Este enfoque, respaldado por la Organización Mundial de la Salud y la Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC, 2023), reconoce la autonomía corporal como derecho fundamental. Mi trayectoria en este campo se ha construido desde la trinchera comunitaria: jornadas de drug checking con técnicas de cromatografía y reactivos colorimétricos (Barratt et al., 2018, International Journal of Drug Policy), formación de pares educadores, comunicación de resultados farmacológicos en campo y diseño de materiales basados en evidencia. El análisis de sustancias es hoy una de las intervenciones con mayor evidencia de efectividad para prevenir sobredosis y reducir exposición a adulterantes tóxicos, como lo documentan Maghsoudi et al. (2022) en The Lancet Public Health. En México, donde la política de drogas ha operado históricamente desde un paradigma punitivo, la RRD representa una ruptura epistémica: pasar del castigo a la información, del estigma a la dignidad, de la criminalización a la salud pública basada en derechos humanos (Csete et al., 2016, The Lancet).",
    pullQuotes: [
      { text: "La reducción de riesgos y daños no es una apología del consumo: es un acto de dignidad, ciencia y derechos humanos." },
      { text: "Las personas toman decisiones, y merecen herramientas reales para cuidar su vida." },
      { text: "El drug checking es hoy una de las intervenciones con mayor evidencia para prevenir sobredosis y reducir la exposición a adulterantes tóxicos." },
      { text: "En México, la RRD representa una ruptura epistémica: pasar del castigo a la información, del estigma a la dignidad." },
    ],
    readingTime: "10 min",
    featured: false,
    relatedIds: ["cuidado-terceriza"],
  },
];

// Helper: get all unique pull quotes across articles
export const allPullQuotes = articles.flatMap((a) =>
  a.pullQuotes.map((q) => ({ ...q, articleTitle: a.title, articleId: a.id }))
);
