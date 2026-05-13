"use client";

import { useRef, useEffect, useState } from "react";
import { PERSONAL } from "@/lib/data";

function useSectionVisible() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, vis };
}

const LINKS = [
  { label: "Email",    value: PERSONAL.email,                       href: `mailto:${PERSONAL.email}`,     icon: "✉",  color: "var(--purple)" },
  { label: "GitHub",   value: "github.com/mariialuisapires",         href: PERSONAL.github,                icon: "🐙", color: "var(--cyan)"   },
  { label: "LinkedIn", value: "linkedin.com/in/maria-pires",         href: PERSONAL.linkedin,              icon: "💼", color: "var(--blue)"   },
  { label: "Telefone", value: PERSONAL.phone,                       href: "tel:+5551997765859",            icon: "📱", color: "var(--pink)"   },
];

export default function ContactSection() {
  const { ref, vis } = useSectionVisible();
  const [year, setYear] = useState<number>(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <section ref={ref} id="contact" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-14 fade-up ${vis ? "visible" : ""}`}>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(236,72,153,0.1)", color: "var(--pink)" }}>contact.tsx</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4"><span className="gradient-text">Vamos conversar?</span></h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            Aberta a oportunidades presenciais, híbridas ou remotas. Pode falar comigo por qualquer canal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {LINKS.map((link, i) => (
            <a key={link.label} href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-5 rounded-xl transition-transform hover:-translate-y-1 fade-up ${vis ? "visible" : ""}`}
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", transitionDelay: vis ? `${i * 70}ms` : "0ms" }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl text-xl shrink-0"
                style={{ background: `${link.color}12`, border: `1px solid ${link.color}25` }}>
                {link.icon}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>{link.label}</div>
                <div className="text-sm font-medium truncate" style={{ color: link.color }}>{link.value}</div>
              </div>
              <div className="ml-auto text-base opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: link.color }}>↗</div>
            </a>
          ))}
        </div>

        <div className={`flex justify-center fade-up delay-4 ${vis ? "visible" : ""}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
            <span>📍</span>
            <span>{PERSONAL.location}</span>
            <span style={{ color: "var(--text-muted)" }}>•</span>
            <span style={{ color: "var(--green)" }}>Disponível</span>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t text-center" style={{ borderColor: "var(--border)" }}>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          Built with <span style={{ color: "var(--purple)" }}>Next.js</span> +{" "}
          <span style={{ color: "var(--pink)" }}>CSS Transitions</span> +{" "}
          <span style={{ color: "var(--cyan)" }}>Tailwind CSS</span>
          {" "}— {year} Maria Luísa Pires Soares
        </p>
      </div>
    </section>
  );
}
