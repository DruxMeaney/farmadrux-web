import type { Metadata } from "next";
import Publicaciones from "@/components/Publicaciones";

export const metadata: Metadata = {
  title: "Publicaciones científicas — Farmadrux",
  description: "Artículos de investigación, revisiones sistemáticas y publicaciones académicas de Andrés Portilla Martínez.",
};

export default function PublicacionesPage() {
  return <Publicaciones />;
}
