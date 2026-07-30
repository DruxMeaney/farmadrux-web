"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CATEGORIAS, FOTOS, type Foto, type FotoCategoria } from "./data/photos";
import { barajarGaleria } from "./ordenar";
import FotoLightbox from "./FotoLightbox";
import { serifFoto } from "./fonts";

const CAT_LABEL: Record<FotoCategoria, string> = {
  retrato: "Retrato",
  bodas: "Bodas",
  oficios: "Oficios",
  eventos: "Eventos",
  exteriores: "Exteriores",
  ciudad: "Ciudad",
};

export default function FotoGaleria() {
  const [filtro, setFiltro] = useState<FotoCategoria | "todas">("todas");
  const [activa, setActiva] = useState<number | null>(null);
  // Orden base estático para el prerender; al montar se baraja con las
  // mismas reglas de dispersión, así cada visita ve la galería distinta.
  const [orden, setOrden] = useState<Foto[]>(FOTOS);

  useEffect(() => {
    setOrden(barajarGaleria(FOTOS));
  }, []);

  const fotos: Foto[] = useMemo(
    () => (filtro === "todas" ? orden : orden.filter((f) => f.cat === filtro)),
    [filtro, orden]
  );

  return (
    <section id="galeria" className="relative bg-[#0a0a0a] py-24 md:py-32 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.35em] text-neutral-500 uppercase mb-4">
              Galería
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight">
              Selección de{" "}
              <em className={`${serifFoto.className} italic font-medium`}>trabajo</em>
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-500">
            {String(fotos.length).padStart(2, "0")} fotografías
          </p>
        </div>

        {/* Filtros */}
        <div className="flex gap-2 mb-10 md:mb-14 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {CATEGORIAS.map((c) => (
            <button
              key={c.id}
              onClick={() => setFiltro(c.id)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm tracking-wide transition-all ${
                filtro === c.id
                  ? "bg-white text-black font-semibold"
                  : "border border-white/15 text-neutral-400 hover:text-white hover:border-white/35"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Mosaico */}
        <div key={filtro} className="columns-2 lg:columns-3 gap-3 sm:gap-4">
          {fotos.map((foto, i) => (
            <motion.div
              key={foto.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 6) * 0.05 }}
              className="mb-3 sm:mb-4 break-inside-avoid"
            >
              <button
                onClick={() => setActiva(i)}
                data-serie={foto.serie}
                data-estilo={foto.estilo}
                className="group relative block w-full overflow-hidden rounded-sm cursor-zoom-in"
                aria-label={`Ampliar: ${foto.alt}`}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  width={foto.w}
                  height={foto.h}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={foto.blur}
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                {/* Overlay al pasar el cursor */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-xs tracking-[0.25em] uppercase text-white/90">
                    {CAT_LABEL[foto.cat]}
                  </span>
                  {foto.focal && (
                    <span className="text-[11px] font-mono text-white/60">
                      {foto.focal}
                    </span>
                  )}
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visor */}
      <FotoLightbox fotos={fotos} index={activa} onChange={setActiva} />
    </section>
  );
}
