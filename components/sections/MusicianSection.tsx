"use client";

import React from "react";
import { Music, Youtube, Image as ImageIcon, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Helper function to get YouTube thumbnail
const getYouTubeThumbnail = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

const MusicianSection = () => {
  const musicPlatforms = [
    {
      title: "Worship Sessions",
      icon: <Youtube className="w-6 h-6 text-red-500" />,
      items: [
        {
          title: "Tapaiko Najik",
          description:
            "This song is about the deep longing to draw closer to the Lord.",
          videoId: "AaT1s9N1UMs",
          views: "37K",
          type: "youtube",
        },
        {
          title: "EK PAL",
          description: "Without Him, life is death, even for a moment.",
          videoId: "RHm6HBHZO0M",
          views: "5.9K",
          type: "youtube",
        },
        {
          title: "Sworga Gunjidaicha",
          description:
            "When we worship the Lord, it not only resonates here but also echoes in heaven, glorifying the name of our Lord, Jesus.",
          videoId: "8ozh0Lq2cUY",
          views: "21K",
          type: "youtube",
        },
        {
          title: "Yeshu Aaye",
          description: "Yeshu Aaye is a Gospel-centered Nepali Christmas song.",
          videoId: "3zL-4GdcVuY",
          views: "303K",
          type: "youtube",
        },
        {
          title: "Mero Pranle",
          description:
            "I wrote this song during the global Covid strike. Through Psalm 62, God&apos;s word inspired me to write this worship song.",
          videoId: "n3rELECQWLU",
          views: "2.3K",
          type: "youtube",
        },
        {
          title: "Tapaiko Aagamanma",
          description:
            "1 Thessalonians 4:16-17 - For the Lord Himself will come down from heaven.",
          videoId: "L-Nzq4W9Tmg",
          views: "7.2K",
          type: "youtube",
        },
      ],
    },
  ];

  const renderCard = (item: {
    title: string;
    description: string;
    videoId: string;
    views: string;
    type: string;
    spotifyId?: string;
    thumbnail?: string;
  }) => (
    <Card
      key={item.videoId}
      className="group bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-600 transition-all duration-300"
    >
      <CardContent className="p-0">
        <a
          href={
            item.type === "youtube"
              ? `https://youtube.com/watch?v=${item.videoId}`
              : `https://open.spotify.com/track/${item.spotifyId}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={getYouTubeThumbnail(item.videoId)}
              alt={item.title}
              width={640}
              height={360}
              className="w-full h-full object-cover rounded-t-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
            <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {item.type === "youtube" && (
              <div className="absolute bottom-2 right-2 text-white text-xs bg-black/70 px-2 py-1 rounded">
                {item.views} views
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-white font-medium text-sm mb-1 line-clamp-1">
              {item.title}
            </h3>
            <p className="text-zinc-400 text-xs mb-2 line-clamp-1">
              {item.description}
            </p>
            <div className="flex items-center justify-between">
              <Badge
                variant="secondary"
                className="bg-zinc-800 text-zinc-300 text-[10px] px-2 py-0.5"
              >
                {item.type === "youtube" ? "Watch Now" : "Listen on Spotify"}
              </Badge>
              {item.type === "spotify" && (
                <Music className="w-4 h-4 text-green-500" />
              )}
            </div>
          </div>
        </a>
      </CardContent>
    </Card>
  );

  return (
    <div className="bg-[#323232] min-h-screen">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-12 space-y-8">
          {musicPlatforms.map((platform) => (
            <div key={platform.title} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800">
                  {platform.icon}
                </div>
                <h2 className="text-xl font-semibold text-white tracking-tight">
                  {platform.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {platform.items.map((item) => renderCard(item))}
              </div>
            </div>
          ))}
        </div>

        {/* Ministry Moments */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800">
              <ImageIcon className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-xl font-semibold text-white tracking-tight">
              Ministry Moments
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="aspect-square relative rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src="/m5.jpg"
                  alt={`Gallery Image ${index}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                  <p className="text-white text-xs font-medium text-center px-4">
                    Ministry Moment {index}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto mt-12">
          <Card className="bg-zinc-900/30 border-zinc-800 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
            <CardContent className="p-6 relative">
              <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Let&apos;s Connect
              </h2>
              <p className="text-zinc-400 text-sm mb-4">
                For bookings, collaborations, and worship ministry inquiries
              </p>
              <div className="space-y-1 text-zinc-300 text-sm">
                <p>paul.lakandri50@gmail.com</p>
                <p>+9779808063933</p>
              </div>
              <Button
                variant="outline"
                className="mt-4 border-zinc-700 text-white hover:bg-zinc-800 text-xs"
              >
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MusicianSection;
