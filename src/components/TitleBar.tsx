"use client";

import { PERSONAL } from "@/lib/data";

export default function TitleBar() {
  return (
    <div
      className="flex items-center justify-between px-4 py-2 shrink-0 select-none"
      style={{ background: "var(--bg-elevated)", borderBottom: "1px solid var(--border)" }}
    >
      {/* Window controls */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28c940" }} />
      </div>

      {/* Title */}
      <div className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
        <span style={{ color: "var(--purple)" }}>portfolio</span>
        <span style={{ color: "var(--text-muted)" }}> — </span>
        <span>{PERSONAL.name}</span>
        <span style={{ color: "var(--text-muted)" }}> — VSCode Premium</span>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
        <span>⊞</span>
        <span>⊟</span>
        <span>✕</span>
      </div>
    </div>
  );
}
