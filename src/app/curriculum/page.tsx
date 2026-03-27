import type { Metadata } from "next";
import Curriculum from "@/components/Curriculum";

export const metadata: Metadata = {
  title: "Curriculum Vitae — Dr. Andrés Portilla Martínez | Farmadrux",
  description: "Doctor en Investigación en Medicina, farmacéutico, divulgador científico, director de tecnología en IA en salud. +12 publicaciones internacionales.",
};

export default function CurriculumPage() {
  return <Curriculum />;
}
