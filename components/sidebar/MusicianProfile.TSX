"use client";

import Image from "next/image";
import { Mail, Github, Linkedin, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicianProfile = () => {
  return (
    <div className="relative bg-[#323232]">
      {/* Tech-inspired decorative elements */}
      <div className="absolute -left-6 top-16 w-6 h-[2px] bg-gradient-to-r from-zinc-700" />
      <div className="absolute -right-6 top-16 w-6 h-[2px] bg-gradient-to-l from-zinc-700" />
      <div className="absolute left-12 top-0 w-[1px] h-6 bg-gradient-to-b from-zinc-700" />
      <div className="absolute right-12 top-0 w-[1px] h-6 bg-gradient-to-b from-zinc-700" />

      <div className="px-8 pt-8 pb-6">
        <div className="relative flex items-start gap-6">
          {/* Profile Image with Tech Border */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-600 via-transparent to-zinc-600 opacity-50 animate-spin-slow" />
            <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-zinc-700 shadow-lg">
              <Image
                src="/artist.jpg"
                alt="Paul Lakandri"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-zinc-500/10 to-transparent" />
            </div>
            {/* Music Accent */}
            <div className="absolute -right-1 -bottom-1 w-6 h-6 bg-zinc-800 rounded-full shadow-md flex items-center justify-center">
              <Music className="w-3 h-3 text-zinc-400" />
            </div>
          </div>

          {/* Name and Title with Styling */}
          <div className="flex-1 pt-2">
            <div className="relative">
              <h2 className="text-xl font-bold text-white tracking-wide">
                Paul Lakandri
              </h2>
              <p className="text-sm text-zinc-400 mt-1">Singer & Composer</p>
              {/* Decorative line */}
              <div className="absolute -left-3 top-3 w-2 h-[2px] bg-gradient-to-r from-zinc-700" />
            </div>
          </div>
        </div>

        {/* About Section with Tech Border */}
        <div className="mt-6 relative">
          <div className="absolute -left-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-700 via-transparent to-zinc-700" />
          <p className="text-sm text-zinc-400 leading-relaxed pl-4">
            Versatile musician crafting melodies that bridge emotions and
            stories. Bringing creative vision to life through original
            compositions and heartfelt performances.
          </p>
        </div>

        {/* Social Links with Tech Styling */}
        <div className="mt-4 flex gap-2 items-center">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          {["mail", "github", "linkedin"].map((social) => (
            <Button
              key={social}
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 rounded-lg hover:bg-zinc-800 hover:text-zinc-300 text-zinc-400 transition-colors"
            >
              {social === "mail" && <Mail className="w-4 h-4" />}
              {social === "github" && <Github className="w-4 h-4" />}
              {social === "linkedin" && <Linkedin className="w-4 h-4" />}
            </Button>
          ))}
          <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-700 via-zinc-700 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default MusicianProfile;
