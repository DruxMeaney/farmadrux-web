import type { Metadata } from "next";
import Divulgacion from "@/components/Divulgacion";

export const metadata: Metadata = {
  title: "Divulgación científica — Farmadrux",
  description: "Farmacología, sistema endocannabinoide, sustancias psicoactivas, neurociencia y salud pública explicados con rigor y claridad.",
};

export default function DivulgacionPage() {
  return <Divulgacion />;
}
