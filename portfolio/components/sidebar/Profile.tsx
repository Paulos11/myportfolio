// components/sidebar/Profile.tsx
"use client";
import Image from "next/image";
import { Mail, Github, Linkedin, Code2, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIdentity } from "@/context/IdentityContext";

const Profile = () => {
  const { currentIdentity, toggleIdentity } = useIdentity();

  const profileData = {
    developer: {
      name: "Sunil Lakandri",
      title: "Full Stack Developer",
      about:
        "Passionate Full Stack Developer with 5+ years of experience in building scalable web applications using modern technologies. Specialized in creating innovative solutions with cutting-edge tools.",
      icon: <Code2 className="w-3 h-3 text-gray-600" />,
    },
    musician: {
      name: "Paul Lakandri",
      title: "Singer & Composer",
      about:
        "Versatile musician crafting melodies that bridge emotions and stories. Bringing creative vision to life through original compositions and heartfelt performances.",
      icon: <Music className="w-3 h-3 text-gray-600" />,
    },
  };

  const current = profileData[currentIdentity];

  return (
    <div className="relative">
      {/* Tech-inspired decorative elements */}
      <div className="absolute -left-6 top-16 w-6 h-[2px] bg-gradient-to-r from-gray-200 to-transparent" />
      <div className="absolute -right-6 top-16 w-6 h-[2px] bg-gradient-to-l from-gray-200 to-transparent" />
      <div className="absolute left-12 top-0 w-[1px] h-6 bg-gradient-to-b from-gray-200 to-transparent" />
      <div className="absolute right-12 top-0 w-[1px] h-6 bg-gradient-to-b from-gray-200 to-transparent" />

      <div className="px-8 pt-8 pb-6">
        <div className="relative flex items-start gap-6">
          {/* Profile Image with Tech Border */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 via-transparent to-gray-200 animate-spin-slow" />
            <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-gray-100 shadow-lg">
              <Image
                src={
                  currentIdentity === "developer"
                    ? "/myimage.png"
                    : "/musician-image.png"
                }
                alt={current.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" />
            </div>
            {/* Tech/Music Accent */}
            <div className="absolute -right-1 -bottom-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
              {current.icon}
            </div>
          </div>

          {/* Name and Title with Tech Styling */}
          <div className="flex-1 pt-2">
            <div className="relative">
              <h2 className="text-xl font-bold text-gray-800">
                {current.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{current.title}</p>
              {/* Decorative line */}
              <div className="absolute -left-3 top-3 w-2 h-[2px] bg-gradient-to-r from-gray-200 to-transparent" />
            </div>
          </div>
        </div>

        {/* About Section with Tech Border */}
        <div className="mt-6 relative">
          <div className="absolute -left-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gray-200 via-transparent to-gray-200" />
          <p className="text-sm text-gray-600 leading-relaxed pl-4">
            {current.about}
          </p>
        </div>

        {/* Social Links with Tech Styling */}
        <div className="mt-4 flex gap-2 items-center">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <Github className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </Button>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-200 via-gray-200 to-transparent" />
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
    </div>
  );
};

export default Profile;
