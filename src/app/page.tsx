import IDELayout from "@/components/IDELayout";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import TerminalSection from "@/sections/TerminalSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <IDELayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TerminalSection />
      <ContactSection />
    </IDELayout>
  );
}
