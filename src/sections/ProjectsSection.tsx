"use client";

import { useRef, useEffect, useState } from "react";
import { PROJECTS } from "@/lib/data";

type Project = typeof PROJECTS[0];

function useSectionVisible() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, vis };
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
      style={{ background: "rgba(0,0,0,0.75)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl"
        style={{ background: "var(--bg-elevated)", border: `1px solid ${project.color}35` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b"
          style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}>
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-3 h-3 rounded-full shrink-0" style={{ background: project.color }} />
            <span className="font-bold text-base sm:text-lg truncate" style={{ color: "var(--text-primary)" }}>{project.name}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full capitalize shrink-0 hidden sm:inline"
              style={{ background: project.status === "em construção" ? "rgba(250,204,21,0.1)" : "rgba(74,222,128,0.1)", color: project.status === "em construção" ? "var(--yellow)" : "var(--green)" }}>
              {project.status}
            </span>
          </div>
          <button onClick={onClose} className="transition-colors hover:text-white ml-2 shrink-0 text-lg" style={{ color: "var(--text-muted)" }}>✕</button>
        </div>

        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.description}</p>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Stack Tecnológica</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-lg font-mono"
                  style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Destaques</h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="mt-0.5" style={{ color: project.color }}>▸</span>{h}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 pt-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-center transition-opacity hover:opacity-80"
              style={{ background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}35` }}>
              🐙 GitHub
            </a>
            <button onClick={onClose}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: "var(--bg-muted)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { ref, vis } = useSectionVisible();
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      const project = PROJECTS.find((p) => p.id === id);
      if (project) setSelected(project);
    };
    window.addEventListener("open-project", handler);
    return () => window.removeEventListener("open-project", handler);
  }, []);

  return (
    <section ref={ref} id="projects" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-12 fade-up ${vis ? "visible" : ""}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(250,204,21,0.1)", color: "var(--yellow)" }}>projects/</span>
            <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>// 5 projetos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold"><span className="gradient-text">Projetos</span></h2>
        </div>

        {/* Path */}
        <div className={`flex items-center gap-2 text-xs font-mono mb-8 px-3 py-2 rounded-lg w-fit fade-up delay-1 ${vis ? "visible" : ""}`}
          style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
          <span style={{ color: "var(--purple)" }}>~/</span>portfolio/
          <span style={{ color: "var(--yellow)" }}>projects</span>
        </div>

        {/* Featured */}
        {featured.map((p) => (
          <div key={p.id}
            className={`mb-8 group cursor-pointer relative rounded-2xl overflow-hidden p-6 sm:p-8 transition-transform hover:-translate-y-1 fade-up delay-2 ${vis ? "visible" : ""}`}
            style={{ background: "var(--bg-elevated)", border: `1px solid ${p.color}25` }}
            onClick={() => setSelected(p)}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{p.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded font-semibold uppercase" style={{ background: `${p.color}18`, color: p.color }}>projeto destaque</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(250,204,21,0.1)", color: "var(--yellow)" }}>{p.status}</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.slice(0, 6).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded font-mono"
                      style={{ background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}20` }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="sm:text-right shrink-0">
                <div className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>📁 {p.folder}</div>
                <span className="inline-block px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: p.color, color: "#000" }}>
                  Ver projeto →
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Others grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {others.map((p, i) => (
            <div key={p.id}
              className={`relative group cursor-pointer rounded-xl overflow-hidden p-5 transition-transform hover:-translate-y-1 fade-up ${vis ? "visible" : ""}`}
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", transitionDelay: vis ? `${i * 60 + 200}ms` : "0ms" }}
              onClick={() => setSelected(p)}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}30)` }} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-base font-bold" style={{ color: "var(--text-primary)" }}>{p.name}</span>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{p.headline}</p>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-full ml-2 whitespace-nowrap"
                    style={{ background: p.status === "em construção" ? "rgba(250,204,21,0.1)" : "rgba(74,222,128,0.1)", color: p.status === "em construção" ? "var(--yellow)" : "var(--green)" }}>
                    {p.status}
                  </span>
                </div>
                <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--text-secondary)" }}>{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded font-mono"
                      style={{ background: "rgba(255,255,255,0.04)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{t}</span>
                  ))}
                  {p.tech.length > 4 && <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>+{p.tech.length - 4}</span>}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono" style={{ color: p.color }}>📁 {p.folder}</span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>detalhes →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
