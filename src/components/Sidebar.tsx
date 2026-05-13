"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";

const NAV_ITEMS = [
  { id: "home",     label: "home.tsx",         icon: "⬡",  section: "hero"      },
  { id: "about",    label: "about.tsx",         icon: "◈",  section: "about"     },
  { id: "skills",   label: "skills.tsx",        icon: "◇",  section: "skills"    },
  { id: "projects", label: "projects/",         icon: "▦",  section: "projects"  },
  { id: "terminal", label: "terminal.sh",       icon: "❯",  section: "terminal"  },
  { id: "contact",  label: "contact.tsx",       icon: "✉",  section: "contact"   },
];

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [projectsOpen, setProjectsOpen] = useState(true);

  const scrollTo = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    onNavigate(section);
  };

  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 border-r" style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}>
      {/* Explorer header */}
      <div className="px-3 py-2 text-[10px] font-semibold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
        Explorer
      </div>

      {/* File tree */}
      <nav className="flex-1 overflow-y-auto px-1 text-xs" style={{ color: "var(--text-secondary)" }}>
        {/* portfolio folder */}
        <div className="mb-1">
          <div className="flex items-center gap-1 px-2 py-1 rounded text-[11px]" style={{ color: "var(--text-muted)" }}>
            <span>▾</span>
            <span className="font-medium">PORTFOLIO-MARIA</span>
          </div>

          {NAV_ITEMS.map((item) => {
            if (item.id === "projects") {
              return (
                <div key={item.id}>
                  <button
                    onClick={() => { setProjectsOpen(!projectsOpen); scrollTo("projects"); }}
                    className="w-full flex items-center gap-2 px-3 py-1 rounded text-left transition-colors hover:text-white"
                    style={{
                      color: activeSection === "projects" ? "#e2e8f0" : undefined,
                      background: activeSection === "projects" ? "rgba(168,85,247,0.12)" : undefined,
                    }}
                  >
                    <span style={{ color: "var(--yellow)" }}>{projectsOpen ? "▾" : "▸"}</span>
                    <span style={{ color: "var(--yellow)" }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>

                  {projectsOpen && (
                    <div className="ml-4">
                      {PROJECTS.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => scrollTo("projects")}
                          className="w-full flex items-center gap-2 px-3 py-[3px] rounded text-left transition-colors hover:text-white text-[11px]"
                          style={{ color: p.color }}
                        >
                          <span>📁</span>
                          <span>{p.folder}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const colors: Record<string, string> = {
              home: "var(--blue)",
              about: "var(--cyan)",
              skills: "var(--green)",
              terminal: "var(--purple)",
              contact: "var(--pink)",
            };

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.section)}
                className="w-full flex items-center gap-2 px-3 py-1 rounded text-left transition-all hover:text-white"
                style={{
                  color: activeSection === item.section ? "#e2e8f0" : undefined,
                  background: activeSection === item.section ? "rgba(168,85,247,0.12)" : undefined,
                }}
              >
                <span style={{ color: colors[item.id] || "var(--purple)" }}>{item.icon}</span>
                <span>{item.label}</span>
                {activeSection === item.section && (
                  <span className="ml-auto w-1 h-1 rounded-full animate-pulse-glow" style={{ background: "var(--purple)" }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Extra info */}
        <div className="mt-4 px-3 border-t pt-3" style={{ borderColor: "var(--border)" }}>
          <div className="text-[10px] mb-2 font-semibold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
            Outline
          </div>
          <div className="space-y-1 text-[10px]" style={{ color: "var(--text-muted)" }}>
            <div>🔷 PERSONAL</div>
            <div>🔶 SKILLS[12]</div>
            <div>🟣 PROJECTS[5]</div>
            <div>🟢 CONTACT</div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
