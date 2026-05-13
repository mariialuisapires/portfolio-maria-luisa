"use client";

import { useRef, useEffect, useState } from "react";
import { PERSONAL } from "@/lib/data";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`fade-up${vis ? " visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const TIMELINE = [
  { year: "2023", title: "Início da jornada dev", desc: "Ensino médio + primeiros cursos HTML/CSS/JS na Rocketseat", color: "var(--blue)" },
  { year: "2024", title: "ADS — ULBRA Torres", desc: "Ingresso no curso de Análise e Desenvolvimento de Sistemas", color: "var(--cyan)" },
  { year: "2025-2026", title: "C# .NET e Flutter", desc: "Mergulho em backend .NET e mobile Flutter. Primeiros projetos fullstack", color: "var(--purple)" },
  { year: "2026", title: "FitDivas & sistemas reais", desc: "App fitness completo: JWT, Firebase, painel admin, Clean Architecture", color: "var(--pink)" },
];

const CODE_SNIPPET = `// about.cs
public class Developer
{
    public string Name    => "Maria Luísa Pires";
    public string Role    => "Backend & Mobile Dev";
    public string Course  => "ADS — 5º semestre";

    public string[] Stack => new[] {
        "C# / ASP.NET Core",
        "Flutter / Dart",
        "PostgreSQL",
        "REST APIs + JWT",
    };

    public string Goal =>
        "Oportunidades em TI — " +
        "presencial, híbrido ou remoto.";
}`;

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(168,85,247,0.1)", color: "var(--purple)" }}>about.tsx</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>// Trajetória & contexto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold"><span className="gradient-text">Sobre mim</span></h2>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-6">
            <FadeUp delay={60}>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {PERSONAL.bio}
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Minha linguagem principal é{" "}
                <strong style={{ color: "var(--purple)" }}>C# com ASP.NET Core</strong>, com foco em APIs REST,
                autenticação JWT e arquitetura em camadas. No mobile, desenvolvo com{" "}
                <strong style={{ color: "var(--blue)" }}>Flutter/Dart</strong> e tenho experiência real com Firebase
                e integração de APIs.
              </p>
            </FadeUp>

            {/* Timeline */}
            <div className="space-y-4 pt-2">
              {TIMELINE.map((item, i) => (
                <FadeUp key={i} delay={i * 70}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: item.color }} />
                      {i < TIMELINE.length - 1 && <div className="w-px flex-1 mt-1" style={{ background: "var(--border)" }} />}
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.04)", color: item.color }}>{item.year}</span>
                        <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{item.title}</span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Quick facts */}
            <FadeUp delay={300}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Inglês", value: "Intermediário/Avançado" },
                  { label: "Modalidade", value: "Presencial / Híbrido / Remoto" },
                  { label: "Localização", value: "RS, Brasil" },
                  { label: "Formação", value: "ADS — 5º semestre" },
                ].map((f) => (
                  <div key={f.label} className="p-3 rounded-lg" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
                    <div className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>{f.label}</div>
                    <div className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>{f.value}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — code card */}
          <FadeUp delay={80}>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)", background: "var(--bg-elevated)" }}>
              <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c940" }} />
                <span className="ml-2 text-[11px]" style={{ color: "var(--text-muted)" }}>about.cs</span>
              </div>
              <pre className="p-5 text-[11px] leading-6 overflow-x-auto font-mono" style={{ color: "var(--text-secondary)" }}>
                {CODE_SNIPPET.split("\n").map((line, i) => {
                  const colored = line
                    .replace(/(public|class|string|new)\b/g, `<span style="color:var(--purple)">$1</span>`)
                    .replace(/(=>)/g, `<span style="color:var(--pink)">$1</span>`)
                    .replace(/(".*?")/g, `<span style="color:var(--green)">$1</span>`)
                    .replace(/(\/\/.*)/g, `<span style="color:var(--text-muted)">$1</span>`);
                  return (
                    <div key={i} className="flex gap-4">
                      <span className="select-none w-5 text-right shrink-0" style={{ color: "var(--text-muted)" }}>{i + 1}</span>
                      <span dangerouslySetInnerHTML={{ __html: colored }} />
                    </div>
                  );
                })}
              </pre>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
