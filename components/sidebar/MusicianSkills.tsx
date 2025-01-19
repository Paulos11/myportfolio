"use client";

import React from "react";
import Image from "next/image";

const MusicianSkills = () => {
  const images = [
    {
      src: "/m1.jpg",
      alt: "Worship Leading",
      category: "Praise & Worship",
    },
    {
      src: "/m2.jpg",
      alt: "Studio Session",
      category: "Recording",
    },
    {
      src: "/m3.jpg",
      alt: "Live Performance",
      category: "Concert",
    },
    {
      src: "/m4.jpg",
      alt: "Music Ministry",
      category: "Ministry",
    },
  ];

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square group overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
              <span className="text-zinc-300 text-xs mb-1">
                {image.category}
              </span>
              <h3 className="text-white text-sm font-medium text-center px-4">
                {image.alt}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicianSkills;
