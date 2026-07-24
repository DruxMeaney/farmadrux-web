"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, AtSign, Send } from "lucide-react";
import { serifFoto } from "./fonts";

const EMAIL = "contacto@farmadrux.com";

const tiposSesion = [
  "Retrato",
  "Boda / compromiso",
  "Documental / oficio",
  "Evento",
  "Sesión en exteriores",
  "Otra idea",
];

export default function FotoContacto() {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState(tiposSesion[0]);
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const asunto = `Sesión de fotos — ${tipo}${nombre ? ` — ${nombre}` : ""}`;
    const cuerpo = [
      nombre && `Nombre: ${nombre}`,
      `Tipo de sesión: ${tipo}`,
      fecha && `Fecha tentativa: ${fecha}`,
      "",
      mensaje,
    ]
      .filter((l) => l !== undefined && l !== null && l !== "")
      .join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  };

  return (
    <section id="contacto" className="relative bg-[#0a0a0a] py-24 md:py-32 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.35em] text-neutral-500 uppercase mb-4">
            Contacto
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight">
            Reserva tu{" "}
            <em className={`${serifFoto.className} italic font-medium`}>sesión</em>
          </h2>
          <p className="mt-5 text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Cuéntame qué tienes en mente — una boda, un retrato, tu oficio, tu
            proyecto. Respondo personalmente cada mensaje.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={enviar} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="foto-nombre" className="block text-sm text-neutral-400 mb-2">
                  Nombre
                </label>
                <input
                  id="foto-nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="foto-tipo" className="block text-sm text-neutral-400 mb-2">
                  Tipo de sesión
                </label>
                <select
                  id="foto-tipo"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white focus:outline-none focus:border-white/30 transition-colors text-sm appearance-none"
                >
                  {tiposSesion.map((t) => (
                    <option key={t} value={t} className="bg-[#111]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="foto-fecha" className="block text-sm text-neutral-400 mb-2">
                Fecha tentativa <span className="text-neutral-600">(opcional)</span>
              </label>
              <input
                id="foto-fecha"
                type="text"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                placeholder="Ej. segunda semana de septiembre"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="foto-mensaje" className="block text-sm text-neutral-400 mb-2">
                Mensaje
              </label>
              <textarea
                id="foto-mensaje"
                rows={5}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Cuéntame sobre tu idea: lugar, ambiente, referencias..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              <Send size={16} />
              Redactar correo
            </button>
            <p className="text-xs text-neutral-600 text-center">
              Al enviar se abrirá tu aplicación de correo con el mensaje listo.
            </p>
          </form>

          {/* Contacto directo */}
          <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <Mail size={15} />
              {EMAIL}
            </a>
            <a
              href="https://instagram.com/farmadrux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <AtSign size={15} />
              farmadrux
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
