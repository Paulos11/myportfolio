"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "The Gathering Church",
      description: "The Gathering Church Website",
      image: "/projects/image.png",
      link: "https://thegathering-sepia.vercel.app/",
    },
    {
      id: 2,
      title: "Eco Flow Malta",
      description: "EcoFlow Authorized Distributor Malta Website",
      image: "/projects/ecoflow.png",
      link: "https://ecoflowmalta.com",
    },

    {
      id: 3,
      title: "Dotmandu",
      description: "Dotmandu IT Solutions Website",
      image: "/projects/dotmandu.png",
      link: "https://dotmandu.com.np",
    },
    {
      id: 4,
      title: "Portuguese Learning Ebook",
      description:
        "Website to sell ebook to Learn Basic Intermediate Portuguese",
      image: "/projects/gopal.png",
      link: "https://www.gopalrai.com/",
    },

    {
      id: 5,
      title: "InfiniteWeddings",
      description: "InfiniteWeddings is a wedding planning website",
      image: "/projects/infinitewedding.png",
      link: "https://theinfiniteweddings.com",
    },
    {
      id: 6,
      title: "Workshoard",
      description: "Workshoard is a job management website",
      image: "/worskshoard.png",
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
      className="py-8 px-20 mx-auto bg-[#FCFCFC] dark:bg-gray-900"
      id="projects"
    >
      <div className="mb-8 max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-1 mb-2">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Explore some of my recent work and achievements
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
                        {project.description}
                      </p>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-7 text-xs px-2 py-0 bg-gray-100 hover:bg-gray-200 text-gray-900"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        Visit
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
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

export default Projects;
