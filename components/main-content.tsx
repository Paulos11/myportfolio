"use client";

import { About } from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import CreativeProjects from "@/components/sections/CreativeProjects";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SaasProjects from "@/components/sections/SaasProjects";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import MusicianSection from "@/components/sections/MusicianSection";
import { useIdentity } from "@/context/IdentityContext";

export function MainContent() {
  const { currentIdentity } = useIdentity();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
      <div className="w-full max-w-[100vw]">
        {currentIdentity === "developer" ? (
          <>
            <About />
            <ExperienceSection />
            <SaasProjects />
            <Projects />
            <CreativeProjects />
            <ContactSection />
            <Footer />
          </>
        ) : (
          <MusicianSection />
        )}
      </div>
    </div>
  );
}
