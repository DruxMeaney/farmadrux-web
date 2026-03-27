import type { Metadata } from "next";
import ReduccionRiesgos from "@/components/ReduccionRiesgos";

export const metadata: Metadata = {
  title: "Reducción de riesgos y daños — Farmadrux",
  description: "Salud pública con dignidad y evidencia. Enfoque en derechos humanos, educación no estigmatizante y acompañamiento basado en ciencia.",
};

export default function ReduccionPage() {
  return <ReduccionRiesgos />;
}
