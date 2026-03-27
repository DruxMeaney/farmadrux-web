"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#reduccion", label: "Reducción de riesgos" },
  { href: "#divulgacion", label: "Divulgación" },
  { href: "#publicaciones", label: "Publicaciones" },
  { href: "#videos", label: "Videos" },
  { href: "#podcast", label: "Podcast" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060212]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-purple-vivid/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-vivid to-magenta flex items-center justify-center text-white font-bold text-sm">
              Fx
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-fuchsia transition-colors">
              FARMADRUX
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-lavender/70 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-lavender/70 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-[#060212]/95 backdrop-blur-xl border-t border-white/[0.06] space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-lavender/70 hover:text-white hover:bg-white/[0.04] rounded-xl transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
