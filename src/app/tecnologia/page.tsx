import type { Metadata } from "next";
import Tecnologia from "@/components/Tecnologia";

export const metadata: Metadata = {
  title: "Ciencia y tecnología — Farmadrux",
  description: "Programación, ciencia de datos, bioinformática e inteligencia artificial aplicadas a farmacología y salud pública.",
};

export default function TecnologiaPage() {
  return <Tecnologia />;
}
