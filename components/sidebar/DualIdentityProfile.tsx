"use client";

import React, { useState } from "react";
import { Code, Music } from "lucide-react";
import MusicianContent from "./MusicianContent";

const DualIdentityProfile = () => {
  const [activeTab, setActiveTab] = useState("dev");

  return (
    <div className="min-h-screen bg-black space-y-6 relative p-8">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-50" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Identity Switcher */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("dev")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
              activeTab === "dev"
                ? "bg-gradient-to-r from-zinc-800 to-zinc-700 text-white border border-zinc-600"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <Code size={18} />
            <span>Developer</span>
          </button>
          <button
            onClick={() => setActiveTab("musician")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
              activeTab === "musician"
                ? "bg-gradient-to-r from-zinc-800 to-zinc-700 text-white border border-zinc-600"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <Music size={18} />
            <span>Musician</span>
          </button>
        </div>

        {/* Developer Content */}
        <div
          className={`transition-all duration-500 ${
            activeTab === "dev" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white">
              Full Stack Developer
            </h2>
            <p className="text-zinc-400 mt-2">
              Crafting digital experiences with code and creativity
            </p>
          </div>
        </div>

        {/* Musician Content */}
        <div
          className={`transition-all duration-500 ${
            activeTab === "musician" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <MusicianContent />
        </div>
      </div>
    </div>
  );
};

export default DualIdentityProfile;
