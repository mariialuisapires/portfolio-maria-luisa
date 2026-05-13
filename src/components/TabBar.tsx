"use client";

interface Tab {
  id: string;
  label: string;
  section: string;
  dot?: string;
}

const TABS: Tab[] = [
  { id: "home",     label: "home.tsx",     section: "hero",     dot: "var(--blue)"   },
  { id: "about",    label: "about.tsx",    section: "about",    dot: "var(--cyan)"   },
  { id: "skills",   label: "skills.tsx",   section: "skills",   dot: "var(--green)"  },
  { id: "projects", label: "projects.tsx", section: "projects", dot: "var(--yellow)" },
  { id: "terminal", label: "terminal.sh",  section: "terminal", dot: "var(--purple)" },
  { id: "contact",  label: "contact.tsx",  section: "contact",  dot: "var(--pink)"   },
];

interface TabBarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function TabBar({ activeSection, onNavigate }: TabBarProps) {
  const scrollTo = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    onNavigate(section);
  };

  return (
    <div
      className="flex items-end overflow-x-auto shrink-0 border-b"
      style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}
    >
      {TABS.map((tab) => {
        const active = activeSection === tab.section || (activeSection === "" && tab.section === "hero");
        return (
          <button
            key={tab.id}
            onClick={() => scrollTo(tab.section)}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs whitespace-nowrap transition-all relative shrink-0"
            style={{
              color: active ? "var(--text-primary)" : "var(--text-muted)",
              background: active ? "var(--bg-elevated)" : "transparent",
              borderRight: `1px solid var(--border)`,
              borderTop: active ? `1px solid ${tab.dot}` : "1px solid transparent",
            }}
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0" style={{ background: tab.dot }} />
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.id}</span>
          </button>
        );
      })}
    </div>
  );
}
