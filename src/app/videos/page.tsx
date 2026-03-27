import type { Metadata } from "next";
import Videos from "@/components/Videos";

export const metadata: Metadata = {
  title: "Videos — Farmadrux",
  description: "Contenido audiovisual sobre farmacología, reducción de riesgos y divulgación científica. Canal de YouTube @farmadrux.",
};

export default function VideosPage() {
  return <Videos />;
}
