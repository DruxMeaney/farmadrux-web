import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import {
  Users,
  FlaskConical,
  FileText,
  Play,
  Headphones,
  Code2,
  Download,
  Share2,
  Mail,
  Sparkles,
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
    href: "/divulgacion",
    icon: FlaskConical,
    title: "Divulgación y reducción de riesgos",
    desc: "Farmacología, sustancias psicoactivas, reducción de riesgos y daños, y neurociencia. Ciencia con dignidad y evidencia.",
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
    href: "/sobre-mi#curriculum",
    icon: Code2,
    title: "Curriculum Vitae",
    desc: "Trayectoria académica, experiencia profesional, publicaciones, conferencias y habilidades.",
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

      {/* ── Closing visual with image ── */}
      <section className="relative gradient-contact py-20 md:py-32 overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-purple-vivid/12 top-[-100px] right-[-100px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-0 overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-72 md:h-auto min-h-[320px]">
                <Image
                  src="/drux-rrd.jpg"
                  alt="Andrés Portilla Martínez — Farmadrux"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#060212]/70 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060212]/80 to-transparent md:hidden" />
              </div>
              {/* Text */}
              <div className="p-8 md:p-12 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={20} className="text-fuchsia" />
                  <span className="text-sm text-fuchsia/70 font-medium">La ciencia como puente</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Donde la evidencia se encuentra con la <span className="text-gradient">experiencia humana</span>
                </h3>
                <p className="text-lavender/60 leading-relaxed mb-6">
                  Farmadrux nace de la convicción de que la ciencia puede ser cercana, la salud puede ser digna y la conversación sobre sustancias puede existir sin estigma. Cada proyecto, cada video, cada episodio es un paso hacia una sociedad más informada y compasiva.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/sobre-mi" className="btn-primary text-sm">
                    Conoce mi historia
                  </Link>
                  <Link href="/contacto" className="btn-secondary text-sm">
                    Colaboremos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
