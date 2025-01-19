import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Terminal,
  Database,
  GitBranch,
  Palette,
  Camera,
  Monitor,
  Laptop,
  Figma,
} from "lucide-react";

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2 text-gray-400">
      <Icon size={16} />
      <span className="text-sm font-semibold">{title}</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          className="px-3 py-1 text-xs rounded-lg bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors duration-300"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skills = {
    development: {
      frontend: {
        icon: Laptop,
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "HTML/CSS",
          "Redux",
          "Tailwind",
        ],
      },
      backend: {
        icon: Terminal,
        skills: ["Node.js", "Express", "Python", "Django", "REST APIs"],
      },
      database: {
        icon: Database,
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
      },
      devops: {
        icon: GitBranch,
        skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
      },
    },
    creative: {
      design: {
        icon: Figma,
        skills: ["Figma", "Adobe XD", "Prototyping", "Wireframing"],
      },
      graphics: {
        icon: Palette,
        skills: ["Photoshop", "Illustrator", "InDesign", "After Effects"],
      },
      video: {
        icon: Camera,
        skills: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      },
    },
  };

  return (
    <div id="skills" className="relative bg-black py-8">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Development Skills */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h2 className="text-lg font-mono text-white mb-6 flex items-center gap-2">
              <Code size={18} />
              Development Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills.development).map(([key, value]) => (
                <SkillCategory
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  skills={value.skills}
                  icon={value.icon}
                />
              ))}
            </div>
          </div>

          {/* Creative Skills */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h2 className="text-lg font-mono text-white mb-6 flex items-center gap-2">
              <Monitor size={18} />
              Creative Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills.creative).map(([key, value]) => (
                <SkillCategory
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  skills={value.skills}
                  icon={value.icon}
                />
              ))}
            </div>
          </div>

          {/* Visual skill level indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Frontend", "Backend", "Design", "DevOps"].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg bg-white/5 border border-white/10 text-center"
              >
                <div className="text-2xl font-mono text-white mb-1">
                  {90 - index * 5}%
                </div>
                <div className="text-xs text-gray-400">{skill}</div>
                <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${90 - index * 5}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-white/30 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
