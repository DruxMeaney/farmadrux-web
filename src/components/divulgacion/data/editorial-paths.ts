export interface EditorialPathData {
  id: string;
  title: string;
  description: string;
  articleIds: string[];
  icon: string; // lucide icon name
}

export const editorialPaths: EditorialPathData[] = [
  {
    id: "autonomia-cuidado",
    title: "Autonomía y cuidado",
    description: "Un recorrido por la tensión entre el placer, el riesgo, la medicalización y el derecho a cuidar nuestro propio cuerpo. De la iatrogenia cultural a la reducción de riesgos como práctica cotidiana.",
    articleIds: ["cuidado-terceriza", "camino-rrd"],
    icon: "Heart",
  },
  {
    id: "ciencia-desde-mexico",
    title: "Ciencia desde México",
    description: "Reflexiones sobre descolonización epistémica, ciencia situada y la posibilidad de hacer ciencia con voz propia, en español, con filosofía y sin sumisión al meridiano cero.",
    articleIds: ["reflexionando-ciencia"],
    icon: "Globe",
  },
];
