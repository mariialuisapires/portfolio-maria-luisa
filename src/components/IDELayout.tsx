"use client";

import { useEffect, useState, useRef } from "react";
import TitleBar from "./TitleBar";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import StatusBar from "./StatusBar";

const SECTIONS = ["hero", "about", "skills", "projects", "terminal", "contact"];

export default function IDELayout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  // Sempre abre no topo ao carregar
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }
    mainRef.current?.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.4 }
    );

    const els = SECTIONS.map((s) => document.getElementById(s)).filter(Boolean);
    els.forEach((el) => observerRef.current?.observe(el!));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <TitleBar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />

        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <TabBar activeSection={activeSection} onNavigate={setActiveSection} />

          {/* Main scrollable content */}
          <main ref={mainRef} className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>

      <StatusBar activeSection={activeSection} />
    </div>
  );
}
