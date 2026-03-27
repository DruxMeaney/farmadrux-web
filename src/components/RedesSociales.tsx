"use client";

import SectionHeader from "./SectionHeader";

const socials = [
  {
    name: "Instagram",
    handle: "@farmadrux",
    desc: "Contenido diario sobre farmacología, sustancias y reducción de riesgos.",
    href: "https://instagram.com/farmadrux",
    gradient: "from-pink-intense via-magenta to-purple-vivid",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@farmadrux",
    desc: "Videos educativos, entrevistas y series sobre ciencia y salud.",
    href: "https://youtube.com/@farmadrux",
    gradient: "from-red-500 to-red-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@farmadrux",
    desc: "Ciencia en formato corto. Clips rápidos que informan y desafían.",
    href: "https://tiktok.com/@farmadrux",
    gradient: "from-black to-zinc-800",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.22 8.22 0 0 0 4.76 1.52V6.77a4.83 4.83 0 0 1-1-.08z"/>
      </svg>
    ),
  },
  {
    name: "Spotify",
    handle: "Disociadxs",
    desc: "Escucha el podcast sobre drogas, salud y derechos humanos.",
    href: "#podcast",
    gradient: "from-green-500 to-green-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@farmadrux",
    desc: "Hilos, opinión y conversación sobre ciencia y política de drogas.",
    href: "https://x.com/farmadrux",
    gradient: "from-zinc-700 to-zinc-900",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "Correo",
    handle: "contacto@farmadrux.com",
    desc: "Para colaboraciones, entrevistas, conferencias y proyectos.",
    href: "mailto:contacto@farmadrux.com",
    gradient: "from-purple-vivid to-magenta",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function RedesSociales() {
  return (
    <section id="redes" className="relative gradient-section py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Redes sociales"
          title="Conecta con ||Farmadrux||"
          subtitle="Sigue el proyecto, únete a la conversación y mantente al día con contenido sobre ciencia, salud y reducción de riesgos."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-card p-6 group block"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 text-white opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all`}>
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-0.5 group-hover:text-fuchsia transition-colors">
                {s.name}
              </h3>
              <p className="text-fuchsia/60 text-sm font-mono mb-2">{s.handle}</p>
              <p className="text-lavender/50 text-sm leading-relaxed">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
