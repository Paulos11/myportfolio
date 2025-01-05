"use client";

import { motion } from "framer-motion";
import { Lightbulb, Cpu, Rocket, Download, Mail, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const About = () => {
  const qualities = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Innovation Driven",
      description: "Creating cutting-edge solutions for complex challenges",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Full Stack Expertise",
      description: "End-to-end development from concept to deployment",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Performance Focused",
      description: "Optimizing for speed, scalability, and user experience",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-12 pt-[130px]" id="about">
      {/* Binary Rain Background */}
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-gray-900">
        <div className="absolute inset-0 opacity-[0.03]">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 text-gray-900 dark:text-white font-mono text-sm binary-rain"
              style={{
                left: `${i * 7}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {Array.from({ length: 25 }).map((_, j) => (
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

        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50 dark:from-gray-900/50 dark:via-transparent dark:to-gray-900/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Greeting Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-2xl font-bold ">👋 Hey there!</h2>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - About Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  I am a passionate full-stack developer with a strong
                  foundation in computer applications and design. My journey in
                  technology is driven by the desire to create meaningful and
                  innovative solutions that make a difference.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  Specializing in building scalable web applications, I combine
                  technical expertise with creative problem-solving to deliver
                  exceptional digital experiences.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a href="/my_cv.pdf" download>
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-5 rounded-xl text-sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="px-6 py-5 rounded-xl border-gray-300 text-sm"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Right Column - Quality Cards */}
            <div className="grid grid-cols-1 gap-4">
              {qualities.map((quality, index) => (
                <Card
                  key={index}
                  className="bg-white/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700
                    backdrop-blur-sm hover:shadow-md transition-all duration-300 group"
                >
                  <CardContent className="p-5 flex gap-4">
                    <div className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {quality.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white text-sm font-semibold mb-2">
                        {quality.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {quality.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }

        .animate-wave {
          animation: wave 1.5s infinite;
        }

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
      `}</style>
    </section>
  );
};
