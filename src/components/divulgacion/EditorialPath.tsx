"use client";

import { Heart, Globe, Route, ArrowRight } from "lucide-react";
import { editorialPaths } from "./data/editorial-paths";
import { articles } from "./data/articles";

const iconMap: Record<string, typeof Heart> = { Heart, Globe };

export default function EditorialPaths() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Route size={20} className="text-fuchsia" />
        <h3 className="text-xl font-bold text-white">Hilos conductores</h3>
        <span className="text-xs text-lavender/40">Recorridos editoriales sugeridos</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {editorialPaths.map((path) => {
          const Icon = iconMap[path.icon] || Heart;
          const pathArticles = path.articleIds
            .map((id) => articles.find((a) => a.id === id))
            .filter(Boolean);

          return (
            <div key={path.id} className="glass-card p-7 group">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-vivid/20 to-magenta/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-fuchsia" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{path.title}</h4>
                  <p className="text-lavender/50 text-sm leading-relaxed">{path.description}</p>
                </div>
              </div>

              {/* Article chain */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {pathArticles.map((article, i) => (
                  <div key={article!.id} className="flex items-center gap-2 flex-shrink-0">
                    <div className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-lavender/70 max-w-[180px] truncate">
                      {article!.title}
                    </div>
                    {i < pathArticles.length - 1 && (
                      <ArrowRight size={12} className="text-fuchsia/30 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
