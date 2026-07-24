"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Foto } from "./data/photos";

interface FotoLightboxProps {
  fotos: Foto[];
  index: number | null;
  onChange: (index: number | null) => void;
}

export default function FotoLightbox({ fotos, index, onChange }: FotoLightboxProps) {
  const abierta = index !== null && index >= 0 && index < fotos.length;
  const foto = abierta ? fotos[index] : null;

  const anterior = useCallback(() => {
    if (index === null) return;
    onChange((index - 1 + fotos.length) % fotos.length);
  }, [index, fotos.length, onChange]);

  const siguiente = useCallback(() => {
    if (index === null) return;
    onChange((index + 1) % fotos.length);
  }, [index, fotos.length, onChange]);

  // Teclado
  useEffect(() => {
    if (!abierta) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") siguiente();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierta, anterior, siguiente, onChange]);

  // Bloquear scroll del fondo
  useEffect(() => {
    if (!abierta) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [abierta]);

  const meta = foto
    ? [foto.camera, foto.focal, foto.f, foto.shutter, foto.iso].filter(Boolean).join(" · ")
    : "";

  return (
    <AnimatePresence>
      {abierta && foto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col"
          onClick={() => onChange(null)}
          role="dialog"
          aria-modal="true"
          aria-label={foto.alt}
        >
          {/* Barra superior */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 shrink-0">
            <span className="text-sm font-mono text-neutral-400">
              {String(index + 1).padStart(2, "0")} — {String(fotos.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => onChange(null)}
              className="p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Cerrar visor"
            >
              <X size={22} />
            </button>
          </div>

          {/* Imagen */}
          <div className="relative flex-1 min-h-0 mx-4 sm:mx-16" onClick={(e) => e.stopPropagation()}>
            <motion.div
              key={foto.src}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="100vw"
                quality={90}
                placeholder="blur"
                blurDataURL={foto.blur}
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Flechas */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              anterior();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/[0.06] hover:bg-white/15 text-white transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              siguiente();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/[0.06] hover:bg-white/15 text-white transition-colors"
            aria-label="Foto siguiente"
          >
            <ChevronRight size={22} />
          </button>

          {/* Pie: descripción + ficha técnica */}
          <div
            className="shrink-0 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-neutral-300 max-w-2xl">{foto.alt}</p>
            {meta && (
              <p className="text-[11px] font-mono text-neutral-500 tracking-wide shrink-0">
                {meta}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
