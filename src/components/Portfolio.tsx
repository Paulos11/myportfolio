import React from "react";
import { motion } from "framer-motion";
import { Code, Brush, Layout, Terminal, GitBranch } from "lucide-react";

const AboutSection = () => (
  <div id="about" className="relative bg-black">
    {/* Animated grid background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* About Me */}
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h2 className="text-lg font-mono text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            I am a passionate full-stack developer with a strong foundation in
            computer applications and design. My journey in technology is driven
            by the desire to create meaningful and innovative solutions that
            make a difference.
          </p>
        </div>

        {/* Skills Overview */}
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h2 className="text-lg font-mono text-white mb-4">Core Skills</h2>
          <div className="space-y-3">
            {[
              { icon: <Terminal size={16} />, skill: "Full Stack Development" },
              { icon: <Layout size={16} />, skill: "UI/UX Design" },
              { icon: <Brush size={16} />, skill: "Graphic Design" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-400"
              >
                {item.icon}
                <span className="text-sm">{item.skill}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={16} />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Terminal size={16} />,
      skills: ["Node.js", "Python", "Django", "PostgreSQL"],
    },
    {
      title: "DevOps",
      icon: <GitBranch size={16} />,
      skills: ["Git", "Docker", "AWS", "CI/CD"],
    },
    {
      title: "Design",
      icon: <Layout size={16} />,
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    },
  ];

  return (
    <div id="skills" className="relative bg-black py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-lg font-mono text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack solution with user authentication and secure payments",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with animations and responsive design",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "Task Management",
      description: "Collaborative task management application",
      tags: ["React", "Firebase", "Material-UI"],
    },
  ];

  return (
    <div id="projects" className="relative bg-black py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="text-lg font-mono text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-black/30 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      position: "Frontend Developer",
      company: "Tech Corp",
      period: "2023 - Present",
      description: "Developing modern web applications using React and Next.js",
    },
    {
      position: "UI/UX Designer",
      company: "Design Studio",
      period: "2022 - 2023",
      description:
        "Created user interfaces and experiences for various clients",
    },
  ];

  return (
    <div id="experience" className="relative bg-black py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-mono text-white">
                    {exp.position}
                  </h3>
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-500">{exp.period}</span>
              </div>
              <p className="text-gray-400 text-sm">{exp.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export { AboutSection, SkillsSection, ProjectsSection, ExperienceSection };
