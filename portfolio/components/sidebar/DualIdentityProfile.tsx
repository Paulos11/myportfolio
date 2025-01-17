"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Music, ChevronRight } from "lucide-react";

const DualIdentityProfile = () => {
  const [activeTab, setActiveTab] = useState("dev");

  return (
    <div className="space-y-6 relative">
      {/* Identity Switcher */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("dev")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
            activeTab === "dev"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <Code size={18} />
          <span>Developer</span>
        </button>
        <button
          onClick={() => setActiveTab("musician")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
            activeTab === "musician"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 mt-2">
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
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Singer & Composer
          </h2>
          <p className="text-gray-600 mt-2">
            Creating melodies that resonate with the soul
          </p>

          {/* Musical Journey Cards */}
          <div className="mt-4 space-y-3">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <Music className="text-purple-500" size={20} />
              <span className="text-gray-700">Songwriter & Composer</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <ChevronRight className="text-purple-500" size={20} />
              <span className="text-gray-700">Original Compositions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 rounded-xl" />
    </div>
  );
};

export default DualIdentityProfile;
