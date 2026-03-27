import type { Metadata } from "next";
import Contacto from "@/components/Contacto";

export const metadata: Metadata = {
  title: "Contacto — Farmadrux",
  description: "Colaboraciones, conferencias, talleres, entrevistas y proyectos interdisciplinarios. Contacta a Andrés Portilla Martínez.",
};

export default function ContactoPage() {
  return <Contacto />;
}
