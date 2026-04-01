export interface Concept {
  id: string;
  label: string;
  color: string; // Tailwind class
}

export const concepts: Concept[] = [
  { id: "reduccion-de-danos", label: "Reducción de daños", color: "text-fuchsia" },
  { id: "autocuidado", label: "Autocuidado", color: "text-neon-pink" },
  { id: "autonomia", label: "Autonomía", color: "text-purple-vivid" },
  { id: "placer", label: "Placer", color: "text-pink-intense" },
  { id: "riesgo", label: "Riesgo", color: "text-magenta" },
  { id: "iatrogenia", label: "Iatrogenia", color: "text-fuchsia" },
  { id: "medicalizacion", label: "Medicalización", color: "text-neon-purple" },
  { id: "drug-checking", label: "Drug checking", color: "text-fuchsia" },
  { id: "derechos-humanos", label: "Derechos humanos", color: "text-lavender" },
  { id: "ciencia-situada", label: "Ciencia situada", color: "text-purple-vivid" },
  { id: "descolonizacion", label: "Descolonización", color: "text-magenta" },
  { id: "filosofia-ciencia", label: "Filosofía de la ciencia", color: "text-neon-purple" },
  { id: "politica-cientifica", label: "Política científica", color: "text-lavender" },
  { id: "farmacologia", label: "Farmacología", color: "text-fuchsia" },
  { id: "salud-publica", label: "Salud pública", color: "text-pink-intense" },
];

export const conceptMap = Object.fromEntries(concepts.map((c) => [c.id, c]));
