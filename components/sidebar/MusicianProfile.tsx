"use client";

import Image from "next/image";
import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.8-.179-.92-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const AppleMusicIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.137-1.563-.132-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81.84-.553 1.472-1.287 1.88-2.208.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536-.142-.773.227-1.624 1.038-2.022.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516.014-.063.02-.13.02-.193 0-1.815 0-3.63-.002-5.443 0-.062-.01-.125-.026-.185-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.326.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.443-.088.664-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z" />
  </svg>
);

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
            Christian musician creating heartfelt melodies inspired by faith in
            Jesus Christ, God the Father, and the Holy Spirit. Worship leader
            and songwriter dedicated to crafting music that bridges emotions and
            stories, glorifying God through worship.
          </p>
        </div>

        {/* Social Links with Tech Styling */}
        <div className="mt-4 flex gap-2 items-center">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          {[
            {
              icon: YouTubeIcon,
              href: "https://www.youtube.com/channel/UCBxS-Gem7PCWHYS2nxs3Q6g",
            },
            {
              icon: SpotifyIcon,
              href: "https://open.spotify.com/artist/0pea7Mxu4K0HUpljPajxao",
            },
            {
              icon: AppleMusicIcon,
              href: "https://music.apple.com/us/artist/paul-lakandri/1688040934",
            },
          ].map(({ icon: Icon, href }) => (
            <Button
              key={href}
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 rounded-lg hover:bg-zinc-800 hover:text-zinc-300 text-zinc-400 transition-colors"
              asChild
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            </Button>
          ))}
          <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-700 via-zinc-700 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default MusicianProfile;
