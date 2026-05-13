"use client";

import { useEffect, useState } from "react";
import { PERSONAL } from "@/lib/data";

const ROLES = [
  "Backend Developer",
  "Mobile Developer",
  "C# / .NET Engineer",
  "Flutter Developer",
  "Fullstack Developer",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const delay = deleting ? 45 : displayed.length === current.length ? 2200 : 90;
    const id = setTimeout(() => {
      if (!deleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else if (!deleting && displayed.length === current.length) {
        setDeleting(true);
      } else if (deleting && displayed.length > 0) {
        setDisplayed(displayed.slice(0, -1));
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }
    }, delay);
    return () => clearTimeout(id);
  }, [displayed, deleting, index, texts]);

  return (
    <span>
      <span style={{ color: "var(--purple)" }}>{displayed}</span>
      <span className="animate-blink" style={{ color: "var(--pink)" }}>|</span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh", background: "var(--bg-primary)" }}
    >
      {/* Static grid background — no animation, GPU-friendly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Static glow orbs — no animation */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.09) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)" }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8"
          style={{
            background: "rgba(168,85,247,0.1)",
            border: "1px solid rgba(168,85,247,0.25)",
            color: "var(--purple)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="gradient-text">{PERSONAL.name.split(" ")[0]} </span>
          <span style={{ color: "var(--text-primary)" }}>
            {PERSONAL.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* Typewriter role */}
        <div
          className="text-xl sm:text-2xl md:text-3xl font-mono mb-6 h-10"
          style={{ color: "var(--text-secondary)" }}
        >
          <TypewriterText texts={ROLES} />
        </div>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {PERSONAL.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-80"
            style={{
              background: "linear-gradient(135deg, var(--purple-dim), var(--pink-dim))",
              color: "#fff",
              boxShadow: "var(--glow-purple)",
            }}
          >
            Ver Projetos
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(168,85,247,0.35)", color: "var(--purple)" }}
          >
            GitHub ↗
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(236,72,153,0.35)", color: "var(--pink)" }}
          >
            Contato
          </a>
        </div>

        {/* Scroll hint — CSS only */}
        <div className="mt-16 flex flex-col items-center gap-2" style={{ color: "var(--text-muted)" }}>
          <span className="text-xs">scroll to explore</span>
          <span className="text-base">↓</span>
        </div>
      </div>
    </section>
  );
}
