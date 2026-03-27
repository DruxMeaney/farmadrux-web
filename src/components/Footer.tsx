import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#040110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-vivid to-magenta flex items-center justify-center text-white font-bold text-sm">
                Fx
              </div>
              <span className="text-lg font-bold text-white">FARMADRUX</span>
            </div>
            <p className="text-sm text-lavender/50 leading-relaxed max-w-xs">
              Farmacología, ciencia y reducción de riesgos con mirada humana. Un proyecto de Andrés Portilla Martínez.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Navegación</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: "#sobre-mi", label: "Sobre mí" },
                { href: "#reduccion", label: "Reducción de riesgos" },
                { href: "#divulgacion", label: "Divulgación" },
                { href: "#publicaciones", label: "Publicaciones" },
                { href: "#videos", label: "Videos" },
                { href: "#podcast", label: "Podcast" },
                { href: "#tecnologia", label: "Tecnología" },
                { href: "#contacto", label: "Contacto" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-lavender/40 hover:text-fuchsia transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Conecta</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Instagram", href: "https://instagram.com/farmadrux" },
                { label: "YouTube", href: "https://www.youtube.com/@farmadrux" },
                { label: "Disociadxs", href: "https://youtube.com/@disociadxs" },
                { label: "TikTok", href: "https://tiktok.com/@farmadrux" },
                { label: "Spotify", href: "#podcast" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-lavender/40 hover:text-fuchsia transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-lavender/30">
            &copy; {new Date().getFullYear()} Farmadrux. Todos los derechos reservados.
          </p>
          <p className="text-xs text-lavender/30 flex items-center gap-1">
            Hecho con <Heart size={12} className="text-pink-intense" /> ciencia y compromiso social.
          </p>
        </div>
      </div>
    </footer>
  );
}
