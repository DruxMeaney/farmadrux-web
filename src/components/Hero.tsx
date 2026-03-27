"use client";

import Image from "next/image";
import { ArrowDown, BookOpen, Play, Headphones, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Orbs */}
      <div className="orb w-[600px] h-[600px] bg-purple-vivid/20 top-[-200px] left-[-200px]" />
      <div className="orb w-[500px] h-[500px] bg-magenta/15 bottom-[-150px] right-[-150px]" />
      <div className="orb w-[300px] h-[300px] bg-pink-intense/10 top-[30%] right-[10%] animate-float" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
              <div className="glow-dot" />
              <span className="text-sm text-lavender/70">Farmacología &middot; Divulgación &middot; Reducción de riesgos</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="text-gradient glow-text">FARMA</span>
              <span className="text-white">DRUX</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-lavender/80 max-w-3xl leading-snug mb-4">
              Ciencia, salud y sustancias psicoactivas
              <br />
              <span className="text-gradient-vivid font-medium">sin estigma.</span>
            </p>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-lavender/50 max-w-2xl mb-10 leading-relaxed">
              Andrés Portilla Martínez — Farmacéutico, divulgador científico y activista en reducción de riesgos y daños. Endocannabinólogo certificado por la UNAM.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="#sobre-mi" className="btn-primary">
                <Users size={18} />
                Conoce mi trabajo
              </a>
              <a href="#publicaciones" className="btn-secondary">
                <BookOpen size={18} />
                Publicaciones
              </a>
              <a href="#videos" className="btn-secondary">
                <Play size={18} />
                Videos
              </a>
              <a href="#podcast" className="btn-secondary">
                <Headphones size={18} />
                Podcast
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="relative flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/[0.08] shadow-2xl shadow-purple-vivid/20">
              <Image
                src="/drux.png"
                alt="Andrés Portilla Martínez — Farmadrux"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060212]/60 via-transparent to-transparent" />
            </div>
            {/* Glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-vivid/20 via-magenta/10 to-pink-intense/10 blur-2xl -z-10" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-12">
          <a href="#sobre-mi" className="inline-flex flex-col items-center gap-2 text-lavender/30 hover:text-lavender/60 transition-colors">
            <span className="text-xs uppercase tracking-widest">Explorar</span>
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060212] to-transparent" />
    </section>
  );
}
