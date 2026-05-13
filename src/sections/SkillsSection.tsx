"use client";

import { useRef, useEffect, useState } from "react";
import { SKILLS } from "@/lib/data";

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

const FILTERS = ["all", "backend", "mobile", "frontend", "database", "security", "devops", "tools"];

export default function SkillsSection() {
  const [active, setActive] = useState("all");
  const { ref, vis } = useSectionVisible();
  const filtered = active === "all" ? SKILLS : SKILLS.filter((s) => s.tag === active);

  return (
    <section ref={ref} id="skills" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-12 fade-up ${vis ? "visible" : ""}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(74,222,128,0.1)", color: "var(--green)" }}>skills.tsx</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>// Stack técnica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold"><span className="gradient-text">Habilidades</span></h2>
        </div>

        {/* Filter pills */}
        <div className={`flex flex-wrap gap-2 mb-10 fade-up delay-1 ${vis ? "visible" : ""}`}>
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize"
              style={{
                background: active === f ? "var(--purple-dim)" : "rgba(255,255,255,0.04)",
                color: active === f ? "#fff" : "var(--text-muted)",
                border: `1px solid ${active === f ? "transparent" : "var(--border)"}`,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Skills grid — CSS hover, no JS animation per card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className={`fade-up ${vis ? "visible" : ""} group p-5 rounded-xl transition-transform hover:-translate-y-1`}
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                transitionDelay: vis ? `${i * 35}ms` : "0ms",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-medium"
                  style={{ background: `${skill.color}15`, color: skill.color }}>
                  {skill.tag}
                </span>
              </div>
              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{skill.name}</h3>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>proficiência</span>
                  <span className="text-[10px] font-mono" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                  {/* CSS-only progress bar — no JS animation */}
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: vis ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      transition: vis ? `width 0.8s ease ${i * 35 + 100}ms` : "none",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 fade-up delay-3 ${vis ? "visible" : ""}`}>
          {[
            { label: "Tecnologias", value: "12+", color: "var(--purple)" },
            { label: "Projetos",    value: "5+",  color: "var(--pink)"   },
            { label: "Semestres",   value: "5º",  color: "var(--cyan)"   },
            { label: "Inglês",      value: "B2/C1", color: "var(--green)" },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-xl" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
              <div className="text-2xl font-bold mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
