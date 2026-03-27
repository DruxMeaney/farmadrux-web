import type { Metadata } from "next";
import SobreMi from "@/components/SobreMi";
import Curriculum from "@/components/Curriculum";

export const metadata: Metadata = {
  title: "Sobre mí — Farmadrux",
  description:
    "Andrés Portilla Martínez: farmacéutico, divulgador científico, activista en reducción de riesgos y daños, endocannabinólogo certificado por la UNAM.",
};

export default function SobreMiPage() {
  return (
    <>
      <SobreMi />
      <Curriculum />
    </>
  );
}
