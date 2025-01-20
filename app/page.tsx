"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { MainContent } from "@/components/main-content";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex min-h-screen relative w-full overflow-x-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 text-white hover:bg-zinc-800/70 transition-colors"
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 transition-all duration-300 ease-in-out lg:translate-x-0",
          "w-[85vw] sm:w-[400px] lg:w-[450px]",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 w-full transition-all duration-300 ease-in-out overflow-x-hidden",
          "lg:ml-[450px]",
          "pt-16 lg:pt-0"
        )}
      >
        <MainContent />
      </main>
    </div>
  );
}
