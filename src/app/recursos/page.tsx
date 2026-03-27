import type { Metadata } from "next";
import Recursos from "@/components/Recursos";

export const metadata: Metadata = {
  title: "Recursos descargables — Farmadrux",
  description: "Guías, infografías, presentaciones y materiales educativos gratuitos sobre salud, farmacología y reducción de riesgos.",
};

export default function RecursosPage() {
  return <Recursos />;
}
