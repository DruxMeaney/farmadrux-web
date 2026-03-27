import Link from "next/link";
import Hero from "@/components/Hero";
import {
  Users,
  Shield,
  FlaskConical,
  FileText,
  Play,
  Headphones,
  Code2,
  Download,
  Share2,
  Mail,
} from "lucide-react";

const sections = [
  {
    href: "/sobre-mi",
    icon: Users,
    title: "Sobre mí",
    desc: "Farmacéutico, divulgador científico, activista en reducción de riesgos y daños. Conoce quién está detrás de Farmadrux.",
    gradient: "from-purple-vivid to-fuchsia",
  },
  {
    href: "/reduccion-de-riesgos",
    icon: Shield,
    title: "Reducción de riesgos y daños",
    desc: "Salud pública con dignidad y evidencia. Principios, recursos y acompañamiento sin estigma.",
    gradient: "from-magenta to-pink-intense",
  },
  {
    href: "/divulgacion",
    icon: FlaskConical,
    title: "Divulgación científica",
    desc: "Farmacología, sistema endocannabinoide, sustancias psicoactivas y neurociencia explicados con rigor.",
    gradient: "from-fuchsia to-neon-pink",
  },
  {
    href: "/publicaciones",
    icon: FileText,
    title: "Publicaciones científicas",
    desc: "14 artículos de investigación en revistas internacionales. Biblioteca académica con acceso a PDFs.",
    gradient: "from-purple-vivid to-magenta",
  },
  {
    href: "/videos",
    icon: Play,
    title: "Videos",
    desc: "Contenido audiovisual en YouTube sobre farmacología, reducción de riesgos y divulgación.",
    gradient: "from-red-500 to-pink-intense",
  },
  {
    href: "/podcast",
    icon: Headphones,
    title: "Podcast Disociadxs",
    desc: "Conversaciones sobre sustancias psicoactivas, salud, política de drogas y derechos humanos.",
    gradient: "from-purple-vivid to-fuchsia",
  },
  {
    href: "/tecnologia",
    icon: Code2,
    title: "Ciencia y tecnología",
    desc: "Programación, ciencia de datos, bioinformática e inteligencia artificial aplicadas a salud.",
    gradient: "from-blue-500 to-purple-vivid",
  },
  {
    href: "/recursos",
    icon: Download,
    title: "Recursos descargables",
    desc: "Guías, infografías y materiales educativos gratuitos sobre salud y reducción de riesgos.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    href: "/redes",
    icon: Share2,
    title: "Redes sociales",
    desc: "Conecta con Farmadrux en Instagram, YouTube, TikTok, Spotify y más.",
    gradient: "from-pink-intense to-magenta",
  },
  {
    href: "/contacto",
    icon: Mail,
    title: "Contacto",
    desc: "Conferencias, talleres, entrevistas, asesorías y colaboraciones. Trabajemos juntos.",
    gradient: "from-purple-vivid to-magenta",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />

      {/* Navigation hub */}
      <section id="explorar" className="relative gradient-section py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="tag mb-4 inline-block">Explora</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
              Todo el universo <span className="text-gradient">Farmadrux</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-lavender/60 max-w-2xl leading-relaxed mx-auto">
              Navega por cada área de mi trabajo. Ciencia, salud, tecnología, comunicación y activismo en un solo lugar.
            </p>
            <div className="glow-line max-w-24 mx-auto mt-8 opacity-60" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="glass-card p-7 group block"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all`}
                >
                  <s.icon size={24} className="text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-fuchsia transition-colors">
                  {s.title}
                </h3>
                <p className="text-lavender/50 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
