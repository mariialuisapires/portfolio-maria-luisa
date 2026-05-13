"use client";

import { useEffect, useState } from "react";

interface StatusBarProps {
  activeSection: string;
}

export default function StatusBar({ activeSection }: StatusBarProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  const branchLabel = activeSection || "hero";

  return (
    <div
      className="flex items-center justify-between px-3 py-[3px] text-[10px] shrink-0 select-none"
      style={{ background: "var(--purple-dim)", color: "rgba(255,255,255,0.85)" }}
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 font-semibold">
          <span>⎇</span>
          <span>main</span>
        </span>
        <span style={{ color: "rgba(255,255,255,0.55)" }}>|</span>
        <span>📄 {branchLabel}</span>
        <span className="hidden sm:inline" style={{ color: "rgba(255,255,255,0.55)" }}>TypeScript React</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden md:inline">UTF-8</span>
        <span className="hidden md:inline" style={{ color: "rgba(255,255,255,0.55)" }}>|</span>
        <span className="hidden sm:inline">Ln 1, Col 1</span>
        <span className="hidden sm:inline" style={{ color: "rgba(255,255,255,0.55)" }}>|</span>
        <span className="hidden md:inline">🟢 Prettier</span>
        <span className="hidden md:inline" style={{ color: "rgba(255,255,255,0.55)" }}>|</span>
        <span>🔔 {time}</span>
      </div>
    </div>
  );
}
