import type { Metadata } from "next";
import FotoNav from "@/components/foto/FotoNav";
import FotoHero from "@/components/foto/FotoHero";
import FotoGaleria from "@/components/foto/FotoGaleria";
import FotoSobre from "@/components/foto/FotoSobre";
import FotoContacto from "@/components/foto/FotoContacto";
import FotoFooter from "@/components/foto/FotoFooter";

export const metadata: Metadata = {
  title: "Drux Foto — Fotografía por Andrés Portilla Martínez",
  description:
    "Portafolio fotográfico de Andrés Portilla Martínez (Drux). Retrato editorial, bodas, documental de oficios, eventos y exteriores. Reserva tu sesión.",
  keywords: [
    "fotografía",
    "fotógrafo",
    "retrato editorial",
    "fotografía de bodas",
    "fotografía documental",
    "Drux",
    "Andrés Portilla",
    "Farmadrux",
  ],
  openGraph: {
    title: "Drux Foto — La luz también cuenta historias",
    description:
      "Retrato editorial, bodas, documental de oficios y exteriores. Portafolio de Andrés Portilla Martínez.",
    type: "website",
    locale: "es_MX",
    images: ["/foto/exteriores-10.jpg"],
  },
};

export default function FotoPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <FotoNav />
      <FotoHero />
      <FotoGaleria />
      <FotoSobre />
      <FotoContacto />
      <FotoFooter />
    </div>
  );
}
