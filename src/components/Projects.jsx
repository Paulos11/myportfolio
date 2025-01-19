import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as LinkIcon, Github, Lock, X } from "lucide-react";
import tufuImage from "../assets/tufu.png";
import pptImage from "../assets/ppt.png";
import jobImage from "../assets/job.png";
import acaImage from "../assets/aca.png";
import chImage from "../assets/ch.png";
import fmImage from "../assets/fm.png";

const ProjectCard = ({ project, onView }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.6 }}
    className="p-2"
  >
    <div className="group h-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500">
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover animate-slowSlideDown"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {project.isPrivate && (
          <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-[10px] flex items-center gap-1">
            <Lock size={10} />
            Private
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="text-base font-mono text-white mb-1">{project.title}</h3>
        <p className="text-xs text-gray-400 mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech?.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.tech?.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-gray-300">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <button
          onClick={() => onView(project)}
          className="w-full py-1.5 rounded-lg bg-white/5 text-white text-xs hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-1.5 group"
        >
          <LinkIcon size={12} />
          View Details
        </button>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    onClick={onClose}
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-lg bg-black/90 rounded-xl border border-white/10 overflow-hidden"
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-white z-10"
      >
        <X size={18} />
      </button>

      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover animate-slowSlideDown"
        />
        {project.isPrivate && (
          <div className="absolute top-3 left-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1.5 backdrop-blur-sm">
            <Lock size={12} />
            Private Repository
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-lg font-mono text-white mb-2">{project.title}</h2>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <div className="space-y-3">
          <div>
            <h3 className="text-xs font-mono text-white mb-1.5">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech?.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono text-white mb-1.5">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
              {project.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 pt-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-white text-xs hover:bg-white/10 transition-colors duration-300"
              >
                <LinkIcon size={12} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-white text-xs hover:bg-white/10 transition-colors duration-300"
              >
                <Github size={12} />
                {project.isPrivate ? "Private Repo" : "Source Code"}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack solution with user authentication, product management, and secure payment integration.",
      image: tufuImage,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Order management and tracking",
      ],
      liveLink: "https://ecommerce.example.com",
      github: "https://github.com/username/ecommerce",
      isPrivate: true,
    },
    {
      title: "PPT Management System",
      description:
        "Streamlined web app for organizing, sharing, and downloading presentation materials with advanced search capabilities.",
      image: pptImage,
      tech: ["Next.js", "Firebase", "Tailwind CSS"],
      features: [
        "File upload and management",
        "Advanced search functionality",
        "User permissions and sharing",
        "Version control",
        "Preview generation",
      ],
      liveLink: "https://ppt.example.com",
      github: "https://github.com/username/ppt-system",
      isPrivate: false,
    },
    {
      title: "Job Portal",
      description:
        "Comprehensive platform connecting job seekers and employers, featuring vacancy listings, application tracking, and hiring tools.",
      image: jobImage,
      tech: ["React", "Express", "PostgreSQL", "Redis"],
      features: [
        "Job posting and application",
        "Resume builder",
        "Application tracking",
        "Interview scheduling",
        "Analytics dashboard",
      ],
      liveLink: "https://jobs.example.com",
      github: "https://github.com/username/job-portal",
      isPrivate: true,
    },
    {
      title: "Academic Consultancy",
      description:
        "Interactive website for educational consulting, offering resources, appointment scheduling, and personalized advice for students.",
      image: acaImage,
      tech: ["Vue.js", "Django", "PostgreSQL"],
      features: [
        "Appointment scheduling",
        "Resource library",
        "Student progress tracking",
        "Video consultations",
        "Payment processing",
      ],
      liveLink: "https://academic.example.com",
      github: "https://github.com/username/academic",
      isPrivate: false,
    },
    {
      title: "Church Management System",
      description:
        "All-in-one solution for religious organizations to manage members, events, donations, and communications efficiently.",
      image: chImage,
      tech: ["React", "Node.js", "MongoDB"],
      features: [
        "Member management",
        "Event scheduling",
        "Donation tracking",
        "Communication system",
        "Attendance tracking",
      ],
      liveLink: "https://church.example.com",
      github: "https://github.com/username/church-management",
      isPrivate: true,
    },
    {
      title: "File Sharing System",
      description:
        "Secure and user-friendly platform for uploading, organizing, and sharing files with customizable access controls.",
      image: fmImage,
      tech: ["React", "AWS", "Node.js"],
      features: [
        "Drag and drop upload",
        "File organization",
        "Access control",
        "File preview",
        "Share management",
      ],
      liveLink: "https://files.example.com",
      github: "https://github.com/username/file-sharing",
      isPrivate: false,
    },
  ];
  return (
    <div id="projects" className="relative bg-black py-14">
      <style jsx global>{`
        @keyframes slowSlideDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-slowSlideDown {
          animation: slowSlideDown 30s linear infinite;
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-lg font-mono text-white text-center mb-6">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onView={setSelectedProject}
              />
            ))}
          </div>

          <AnimatePresence>
            {selectedProject && (
              <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
