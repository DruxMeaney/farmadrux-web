import type { Metadata } from "next";
import RedesSociales from "@/components/RedesSociales";

export const metadata: Metadata = {
  title: "Redes sociales — Farmadrux",
  description: "Conecta con Farmadrux en Instagram, YouTube, TikTok, Spotify y más.",
};

export default function RedesPage() {
  return <RedesSociales />;
}
