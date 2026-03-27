import type { Metadata } from "next";
import Podcast from "@/components/Podcast";

export const metadata: Metadata = {
  title: "Disociadxs Podcast — Farmadrux",
  description: "Podcast sobre sustancias psicoactivas, salud, política de drogas y reducción de riesgos. Conversaciones que importan.",
};

export default function PodcastPage() {
  return <Podcast />;
}
