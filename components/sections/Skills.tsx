"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML/CSS", "Redux", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    category: "DevOps",
    items: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Prototyping", "Wireframing"],
  },
  {
    category: "Graphics",
    items: ["Photoshop", "Illustrator", "InDesign", "After Effects"],
  },
];

export const Skills = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="skills">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#272726]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
        {/* Animated Dots Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Light leak effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white/5 via-white/40 to-white/5 mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillSet, index) => (
              <Card
                key={index}
                className="bg-[#1a1a19]/50 border-[#333333] backdrop-blur-sm hover:bg-[#1a1a19]/80 transition-all duration-300 group hover:transform hover:scale-[1.02]"
              >
                <CardHeader>
                  <CardTitle className="text-white">
                    {skillSet.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-[#333333] text-[#999999] rounded-full text-sm group-hover:bg-[#444444] group-hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
