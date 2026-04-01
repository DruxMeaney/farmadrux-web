import type { Metadata } from "next";
import ConstellationHub from "@/components/divulgacion/ConstellationHub";

export const metadata: Metadata = {
  title: "Constelación editorial — Farmadrux",
  description:
    "Divulgación, ensayo, reflexión y pensamiento crítico. Farmacología, salud, reducción de riesgos, autonomía y derechos humanos en una cartografía editorial viva.",
};

export default function DivulgacionPage() {
  return <ConstellationHub />;
}
