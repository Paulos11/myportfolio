"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-15 py-15 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-gray-900">
        {/* Binary Rain Effect */}
        <div className="absolute inset-0 opacity-[0.03]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 text-gray-900 dark:text-white font-mono text-sm binary-rain"
              style={{
                left: `${i * 10}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div
                  key={j}
                  className="opacity-90"
                  style={{
                    animationDelay: `${j * 0.1}s`,
                  }}
                >
                  {Math.random() > 0.5 ? "1" : "0"}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50 dark:from-gray-900/50 dark:via-transparent dark:to-gray-900/50" />
      </div>

      {/* Light Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/[0.02] dark:bg-blue-400/[0.03] rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[700px] h-[700px] bg-purple-500/[0.02] dark:bg-purple-400/[0.03] rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto px-6">
        <div className="relative mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white animate-fade-in-up">
            Welcome to My Portfolio
          </h1>
        </div>

        <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up delay-100">
          Full Stack Developer & Problem Solver
        </h2>

        <p className="text-base text-gray-600/90 dark:text-gray-400/90 mb-8 animate-fade-in-up delay-200 leading-relaxed">
          I specialize in creating innovative web solutions using modern
          technologies, building scalable and user-friendly applications that
          solve real-world problems.
        </p>

        <div className="flex flex-row gap-4 animate-fade-in-up delay-300">
          <a href="/my_cv.pdf" download>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-6 rounded-xl">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </a>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="px-6 py-6 rounded-xl border-gray-300 hover:bg-gray-100"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>

      <style jsx>{`
        .binary-rain {
          animation: rain 20s linear infinite;
        }
        .binary-rain div {
          animation: fade 2s linear infinite;
        }
        @keyframes rain {
          from {
            transform: translateY(-100px);
          }
          to {
            transform: translateY(100vh);
          }
        }
        @keyframes fade {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
