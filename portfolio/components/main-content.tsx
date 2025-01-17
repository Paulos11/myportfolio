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
import { Music } from "lucide-react";

export function MainContent() {
  const { currentIdentity, toggleIdentity } = useIdentity();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Identity Switcher */}
      <div className="fixed left-4 top-4 z-50">
        <div className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
          <p className="text-white/90 text-sm font-medium">
            Wanna see me as a musician?
            <span
              onClick={toggleIdentity}
              className="ml-1 text-purple-400 hover:text-purple-300 cursor-pointer transition-colors inline-flex items-center gap-1"
            >
              Click here
              <Music className="w-3 h-3" />
            </span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      {currentIdentity === "developer" ? (
        <>
          <About />
          <ExperienceSection />
          <SaasProjects />
          <Projects />
          <CreativeProjects />
          <ContactSection />
        </>
      ) : (
        <MusicianSection />
      )}
      <Footer />
    </div>
  );
}
