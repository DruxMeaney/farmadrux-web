"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpLeft } from "lucide-react";

const anchors = [
  { href: "#galeria", label: "Galería" },
  { href: "#sobre", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function FotoNav() {
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
          ? "bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <a href="#top" className="flex items-baseline gap-2 group">
            <span className="text-lg font-bold tracking-[0.25em] text-white">
              DRUX
            </span>
            <span className="text-lg font-light tracking-[0.25em] text-neutral-400 group-hover:text-white transition-colors">
              FOTO
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {anchors.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="px-3 py-2 text-sm tracking-wide text-neutral-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                {a.label}
              </a>
            ))}
            <div className="w-px h-4 bg-white/15 mx-3" />
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-fuchsia transition-colors"
            >
              <ArrowUpLeft size={14} />
              farmadrux.com
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-neutral-400 hover:text-white transition-colors p-2"
            aria-label="Abrir menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/[0.06] space-y-1">
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-neutral-300 hover:text-white rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              {a.label}
            </a>
          ))}
          <Link
            href="/"
            className="flex items-center gap-1.5 px-4 py-3 text-sm text-neutral-500 hover:text-fuchsia transition-colors"
          >
            <ArrowUpLeft size={14} />
            Volver a farmadrux.com
          </Link>
        </div>
      </div>
    </nav>
  );
}
