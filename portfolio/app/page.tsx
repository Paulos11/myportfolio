"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { MainContent } from "@/components/main-content";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 text-white"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-[450px]">
        <MainContent />
      </div>
    </div>
  );
}
