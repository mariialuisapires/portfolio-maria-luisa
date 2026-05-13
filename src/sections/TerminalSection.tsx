"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { TERMINAL_RESPONSES } from "@/lib/data";

interface HistoryEntry {
  type: "input" | "output" | "error" | "system";
  text: string;
}

const WELCOME: HistoryEntry[] = [
  { type: "system", text: "Portfolio Terminal v1.0.0 — Maria Luísa Pires Soares" },
  { type: "system", text: "Type 'help' to see available commands." },
  { type: "system", text: "─────────────────────────────────────────────" },
];

const QUICK_CMDS = ["help", "about", "projects", "skills", "contact", "github", "education", "clear"];

export default function TerminalSection() {
  const [history, setHistory] = useState<HistoryEntry[]>(WELCOME);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIdx, setCmdIdx] = useState(-1);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = outputRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  const run = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const next: HistoryEntry[] = [...history, { type: "input", text: `$ ${trimmed}` }];
    const response = TERMINAL_RESPONSES[trimmed];

    if (response === "__CLEAR__") {
      setHistory(WELCOME);
    } else if (response) {
      if (trimmed === "github") window.open("https://github.com/mariialuisapires", "_blank");
      setHistory([...next, { type: "output", text: response }]);
    } else {
      setHistory([...next, { type: "error", text: `Command not found: '${trimmed}'. Type 'help'.` }]);
    }

    setCmdHistory((prev) => [trimmed, ...prev.slice(0, 49)]);
    setCmdIdx(-1);
    setInput("");
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { run(input); }
    else if (e.key === "ArrowUp") { e.preventDefault(); const n = Math.min(cmdIdx + 1, cmdHistory.length - 1); setCmdIdx(n); setInput(cmdHistory[n] ?? ""); }
    else if (e.key === "ArrowDown") { e.preventDefault(); const n = Math.max(cmdIdx - 1, -1); setCmdIdx(n); setInput(n === -1 ? "" : cmdHistory[n]); }
  };

  const colorMap: Record<HistoryEntry["type"], string> = {
    input: "var(--cyan)", output: "var(--text-secondary)", error: "var(--pink)", system: "var(--text-muted)",
  };

  return (
    <section id="terminal" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "rgba(168,85,247,0.1)", color: "var(--purple)" }}>terminal.sh</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>// Terminal interativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold"><span className="gradient-text">Terminal</span></h2>
          <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>Explore o portfólio via linha de comando</p>
        </div>

        {/* Quick commands */}
        <div className="flex flex-wrap gap-2 mb-4">
          {QUICK_CMDS.map((cmd) => (
            <button key={cmd} onClick={() => run(cmd)}
              className="text-xs px-3 py-1.5 rounded font-mono transition-opacity hover:opacity-75"
              style={{ background: "rgba(168,85,247,0.08)", color: "var(--purple)", border: "1px solid rgba(168,85,247,0.18)" }}>
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal window */}
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)", boxShadow: "var(--glow-purple)" }}>
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "var(--bg-elevated)", borderBottom: "1px solid var(--border)" }}>
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#28c940" }} />
            <span className="ml-2 text-xs" style={{ color: "var(--text-muted)" }}>terminal — portfolio@maria-luisa: ~</span>
          </div>

          {/* Output */}
          <div
            ref={outputRef}
            className="p-4 h-72 overflow-y-auto font-mono text-xs leading-6 cursor-text"
            style={{ background: "#0a0a0c" }}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, i) => (
              <div key={i} className="whitespace-pre-wrap" style={{ color: colorMap[entry.type] }}>{entry.text}</div>
            ))}
            <div className="flex items-center gap-1 mt-1">
              <span style={{ color: "var(--green)" }}>❯</span>
              <span style={{ color: "var(--purple)" }}>~/portfolio</span>
              <span style={{ color: "var(--text-muted)" }}> $ </span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                autoComplete="off"
                spellCheck={false}
                className="flex-1 bg-transparent outline-none"
                style={{ color: "var(--text-primary)", caretColor: "var(--purple)" }}
              />
              <span className="animate-blink" style={{ color: "var(--purple)" }}>▋</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
