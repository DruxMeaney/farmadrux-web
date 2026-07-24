"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Camera } from "lucide-react";
import { HERO_FOTO } from "./data/photos";
import { serifFoto } from "./fonts";

export default function FotoHero() {
  const meta = [HERO_FOTO.camera, HERO_FOTO.focal, HERO_FOTO.f, HERO_FOTO.shutter, HERO_FOTO.iso]
    .filter(Boolean)
    .join(" · ");

  return (
    <section id="top" className="relative h-svh min-h-[600px] overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src={HERO_FOTO.src}
        alt={HERO_FOTO.alt}
        fill
        preload
        quality={90}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={HERO_FOTO.blur}
        className="object-cover object-center"
      />

      {/* Veladuras para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-24 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xs sm:text-sm tracking-[0.35em] text-neutral-300 uppercase mb-5"
        >
          Andrés Portilla Martínez — Portafolio fotográfico
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-light leading-[1.02] tracking-tight text-white max-w-4xl"
        >
          La luz también{" "}
          <em className={`${serifFoto.className} italic font-medium`}>
            cuenta historias
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed"
        >
          Retrato editorial · bodas · oficios · documental. Fotografío personas,
          gestos y escenas que no se repiten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#galeria"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            Ver galería
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all"
          >
            <Camera size={16} />
            Reservar sesión
          </a>
        </motion.div>
      </div>

      {/* Ficha técnica de la foto */}
      {meta && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-6 right-4 sm:right-8 z-10 text-[11px] font-mono text-neutral-400/80 tracking-wide"
        >
          {meta}
        </motion.p>
      )}

      {/* Indicador de scroll */}
      <motion.a
        href="#galeria"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-neutral-400 hover:text-white transition-colors"
        aria-label="Ir a la galería"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
