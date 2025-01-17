"use client";

import React from "react";
import { Music, Youtube, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const MusicianSection = () => {
  const musicPlatforms = [
    {
      title: "YouTube Performances",
      icon: <Youtube className="w-6 h-6 text-red-500" />,
      items: [
        {
          title: "Worship Session Live",
          thumbnail: "/placeholder-image.jpg",
          link: "#",
        },
        {
          title: "Gospel Concert 2024",
          thumbnail: "/placeholder-image.jpg",
          link: "#",
        },
      ],
    },
    {
      title: "Spotify Tracks",
      icon: <Music className="w-6 h-6 text-green-500" />,
      items: [
        {
          title: "Praise & Worship Album",
          thumbnail: "/placeholder-image.jpg",
          link: "#",
        },
      ],
    },
  ];

  const galleryImages = [
    { src: "/placeholder-image.jpg", alt: "Church Performance 1" },
    { src: "/placeholder-image.jpg", alt: "Worship Leading" },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Musical Journey</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Serving through music ministry and spreading the message of faith
          through melodies
        </p>
      </div>

      {/* Music Platforms */}
      <div className="max-w-7xl mx-auto mb-16">
        {musicPlatforms.map((platform) => (
          <div key={platform.title} className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              {platform.icon}
              <h2 className="text-2xl font-semibold text-white">
                {platform.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platform.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Photo Gallery */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <ImageIcon className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-semibold text-white">Photo Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.alt}
              className="aspect-square relative rounded-lg overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-400 mb-6">
          For bookings, collaborations, or any inquiries about music ministry
        </p>
        <div className="space-y-2 text-gray-300">
          <p>Email: music@paullakandri.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default MusicianSection;
