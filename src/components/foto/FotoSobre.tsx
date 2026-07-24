"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Aperture } from "lucide-react";
import { FOTOS } from "./data/photos";
import { serifFoto } from "./fonts";

const servicios = [
  "Retrato editorial",
  "Bodas y compromisos",
  "Documental de oficios",
  "Eventos y cultura",
  "Sesiones en exteriores",
];

export default function FotoSobre() {
  const fotoLateral = FOTOS.find((f) => f.src === "/foto/exteriores-01.jpg") ?? FOTOS[0];

  return (
    <section id="sobre" className="relative bg-[#0d0d0d] py-24 md:py-32 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
          >
            <Image
              src={fotoLateral.src}
              alt={fotoLateral.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL={fotoLateral.blur}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/50 to-transparent" />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-xs tracking-[0.35em] text-neutral-500 uppercase mb-4">
              Sobre mí
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-7">
              Detrás de la{" "}
              <em className={`${serifFoto.className} italic font-medium`}>cámara</em>
            </h2>

            <div className="space-y-5 text-neutral-400 leading-relaxed">
              <p>
                Soy Andrés — <span className="text-white">Drux</span>. La misma
                curiosidad que me llevó a la farmacología y a la divulgación
                científica me puso una cámara en las manos: mirar de cerca,
                esperar el momento preciso y contar lo que otros pasan de largo.
              </p>
              <p>
                Fotografío personas y sus mundos: el gesto de un retrato, la
                tensión tranquila de un oficio, la emoción irrepetible de una
                boda. Trabajo con luz natural y disponible, buscando imágenes
                honestas antes que poses perfectas.
              </p>
            </div>

            {/* Servicios */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {servicios.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full border border-white/12 text-sm text-neutral-300"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Equipo */}
            <div className="mt-8 flex items-center gap-5 text-neutral-500 text-sm">
              <span className="inline-flex items-center gap-2">
                <Camera size={15} />
                Nikon serie Z
              </span>
              <span className="inline-flex items-center gap-2">
                <Aperture size={15} />
                Luz natural y disponible
              </span>
            </div>

            <a
              href="#contacto"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              Trabajemos juntos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
