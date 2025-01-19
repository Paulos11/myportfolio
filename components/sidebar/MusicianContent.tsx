import React from "react";
import Image from "next/image";
import {
  Music,
  Mic,
  Album,
  HeadphonesIcon,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MusicianContent = () => {
  const musicSkills = [
    {
      icon: <Mic className="w-5 h-5" />,
      title: "Worship Leader",
      description: "Leading congregations in spiritual connection",
    },
    {
      icon: <Album className="w-5 h-5" />,
      title: "Composer",
      description: "Creating original worship compositions",
    },
    {
      icon: <HeadphonesIcon className="w-5 h-5" />,
      title: "Producer",
      description: "Crafting immersive audio experiences",
    },
  ];

  return (
    <Card className="bg-[#323232] border-zinc-800">
      {/* Profile Section */}
      <div className="p-6 border-b border-zinc-800">
        <div className="relative flex items-start gap-6">
          {/* Profile Image with Glowing Border */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-600 via-transparent to-zinc-600 animate-spin-slow opacity-50" />
            <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-zinc-700 shadow-lg">
              <Image
                src="/musician-image.png"
                alt="Paul Lakandri"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-zinc-500/10 to-transparent" />
            </div>
            {/* Music Icon Badge */}
            <div className="absolute -right-1 -bottom-1 w-6 h-6 bg-zinc-800 rounded-full shadow-md flex items-center justify-center">
              <Music className="w-3 h-3 text-zinc-400" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="flex-1 pt-2">
            <h2 className="text-xl font-bold text-white tracking-wide">
              Paul Lakandri
            </h2>
            <p className="text-sm text-zinc-400 mt-1">Singer & Composer</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6 relative">
          <div className="absolute -left-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-700 via-transparent to-zinc-700" />
          <p className="text-sm text-zinc-400 leading-relaxed pl-4">
            Versatile musician crafting melodies that bridge emotions and
            stories. Bringing creative vision to life through original
            compositions and heartfelt performances.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-4 flex gap-2 items-center">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 rounded-lg hover:bg-zinc-800 hover:text-zinc-300 text-zinc-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 rounded-lg hover:bg-zinc-800 hover:text-zinc-300 text-zinc-400 transition-colors"
          >
            <Github className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 rounded-lg hover:bg-zinc-800 hover:text-zinc-300 text-zinc-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </Button>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-700 via-zinc-700 to-transparent" />
        </div>
      </div>

      {/* Skills and Recent Works Section */}
      <div className="p-6 space-y-6">
        {/* Skills List */}
        <div className="space-y-3">
          {musicSkills.map((skill) => (
            <div
              key={skill.title}
              className="relative group bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 hover:bg-zinc-800/50 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-zinc-800 rounded-lg text-white">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium">{skill.title}</h3>
                  <p className="text-zinc-400 text-sm">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Works */}
        <div className="space-y-3">
          <h3 className="text-white font-medium">Recent Productions</h3>
          <div className="space-y-2">
            {[
              "Worship Session 2024",
              "Digital Worship Album",
              "Live Performance Series",
            ].map((work) => (
              <div
                key={work}
                className="flex items-center space-x-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800/50 transition-colors duration-300"
              >
                <Music className="text-white" size={16} />
                <span className="text-zinc-300 text-sm">{work}</span>
                <Badge
                  variant="secondary"
                  className="ml-auto bg-zinc-800 text-zinc-300 text-xs"
                >
                  New
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </Card>
  );
};

export default MusicianContent;
