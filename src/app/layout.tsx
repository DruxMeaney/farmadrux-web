import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farmadrux — Farmacología, ciencia y reducción de riesgos con mirada humana",
  description:
    "Andrés Portilla Martínez · Farmacéutico, divulgador científico, activista en reducción de riesgos y daños. Ciencia, salud y sustancias psicoactivas sin estigma.",
  keywords: [
    "farmacología",
    "reducción de riesgos y daños",
    "divulgación científica",
    "sustancias psicoactivas",
    "endocannabinología",
    "salud pública",
    "Farmadrux",
    "Andrés Portilla",
  ],
  openGraph: {
    title: "Farmadrux — Ciencia, salud y sustancias psicoactivas sin estigma",
    description:
      "Farmacología, divulgación científica, reducción de riesgos y daños. Andrés Portilla Martínez.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
