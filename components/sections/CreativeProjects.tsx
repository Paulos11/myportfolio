"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export const CreativeProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
    {
      id: 12,
      title: " Social Media Design",
      type: "Graphics Design",
      image: "/projects/c10.png",
    },
    {
      id: 11,
      title: " Thumbnail Design",
      type: "Graphics Design",
      image: "/projects/c9.webp",
    },
    {
      id: 1,
      title: "Surya Architecture Post Design",
      type: "Graphics Design",
      image: "/projects/surya.png",
    },
    {
      id: 2,
      title: "Flame Logo Design",
      type: "Logo Design",
      image: "/projects/c2.webp",
    },
    {
      id: 3,
      title: "ArtZapta Logo",
      type: "logo desgin",
      image: "/projects/artzapta.png",
    },

    {
      id: 4,
      title: "CVM Figma Prototype",
      type: "Figma Design",
      image: "/projects/cvm.png",
    },
    {
      id: 5,
      title: "Youtube Song Thumbnail",
      type: "Figma Design",
      image: "/projects/c1.webp",
    },

    {
      id: 6,
      title: "Social Media Post",
      type: "Graphics Design",
      image: "/projects/c3.webp",
    },

    {
      id: 7,
      title: "Social Media Post",
      type: "Graphics Design",
      image: "/projects/c5.png",
    },
    {
      id: 8,
      title: "Social Media Post",
      type: "Graphics Design",
      image: "/projects/c6.png",
    },
    {
      id: 9,
      title: "Social Media Post",
      type: "Graphics Design",
      image: "/projects/c7.png",
    },
    {
      id: 10,
      title: "CVM Logo Design",
      type: "Graphics Design",
      image: "/projects/c8.jpg",
    },
    {
      id: 13,
      title: "Social Media Post",
      type: "Graphics Design",
      image: "/projects/c11.png",
    },
    {
      id: 14,
      title: "Social Media Post",
      type: "Graphics Design",
      image: "/projects/c12.jpg",
    },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section
      className="py-8 px-20 mx-auto bg-gray-50 dark:bg-gray-900"
      id="creative-projects"
    >
      <div className="mb-8 text-left max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-1 mb-2">
          Creative Portfolio
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Explore some of my recent Creative work
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="flex-shrink-0 w-1/4 px-1">
                <div className="relative h-40 group rounded-md overflow-hidden bg-white dark:bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-102 group-hover:opacity-30"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                      <h3 className="text-white text-sm font-medium mb-0.5">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-xs mb-2 line-clamp-2 px-2">
                        {project.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-4 gap-1">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-gray-800 dark:bg-gray-200 w-3"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeProjects;
