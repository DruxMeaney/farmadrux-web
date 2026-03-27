"use client";

import SectionHeader from "./SectionHeader";
import { Send, Mic, GraduationCap, Users, BookOpen, Lightbulb, Presentation, FlaskConical } from "lucide-react";

const opportunities = [
  { icon: Mic, label: "Entrevistas" },
  { icon: Presentation, label: "Conferencias" },
  { icon: GraduationCap, label: "Talleres" },
  { icon: Users, label: "Colaboraciones" },
  { icon: BookOpen, label: "Divulgación" },
  { icon: Lightbulb, label: "Asesorías" },
  { icon: FlaskConical, label: "Investigación" },
  { icon: Send, label: "Creación de contenido" },
];

export default function Contacto() {
  return (
    <section id="contacto" className="relative gradient-contact py-24 md:py-36 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-purple-vivid/15 bottom-[-200px] left-[50%] -translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Contacto"
          title="Trabajemos ||juntos||"
          subtitle="¿Tienes un proyecto, una idea o una oportunidad de colaboración? Me interesa escucharte."
        />

        {/* Opportunities */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {opportunities.map((o) => (
            <div key={o.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-lavender/60">
              <o.icon size={16} className="text-fuchsia/60" />
              {o.label}
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-lavender/60 mb-2 font-medium">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-lavender/30 focus:outline-none focus:border-magenta/40 focus:ring-1 focus:ring-magenta/20 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-lavender/60 mb-2 font-medium">Correo</label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-lavender/30 focus:outline-none focus:border-magenta/40 focus:ring-1 focus:ring-magenta/20 transition-all text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-lavender/60 mb-2 font-medium">Asunto</label>
              <input
                type="text"
                placeholder="¿Sobre qué quieres conversar?"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-lavender/30 focus:outline-none focus:border-magenta/40 focus:ring-1 focus:ring-magenta/20 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-lavender/60 mb-2 font-medium">Mensaje</label>
              <textarea
                rows={5}
                placeholder="Cuéntame sobre tu proyecto, propuesta o idea..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-lavender/30 focus:outline-none focus:border-magenta/40 focus:ring-1 focus:ring-magenta/20 transition-all text-sm resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              <Send size={18} />
              Enviar mensaje
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
            <p className="text-sm text-lavender/40">
              También puedes escribirme directamente a{" "}
              <a href="mailto:contacto@farmadrux.com" className="text-fuchsia/70 hover:text-fuchsia transition-colors">
                contacto@farmadrux.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
