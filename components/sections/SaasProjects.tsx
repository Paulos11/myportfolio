"use client";

import React, { useState } from "react";
import {
  Cloud,
  Code2,
  Users,
  BarChart3,
  ExternalLink,
  LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  title: string;
  description: string;
  techStack: string;
  demoUrl: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string;
  demoUrl: string;
  icon: LucideIcon;
}

const FeatureCard = ({
  title,
  description,
  techStack,
  demoUrl,
  icon: Icon,
  isActive,
  onClick,
}: FeatureCardProps) => (
  <Card
    onClick={onClick}
    className={`p-3 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
  >
    <div className="space-y-2">
      <div className="flex items-start justify-between">
        <div
          className={`p-2 rounded-lg ${
            isActive
              ? "bg-gray-900 text-white"
              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          <Icon className="w-3 h-3" />
        </div>
        <Button
          size="sm"
          variant="secondary"
          className="opacity-0 group-hover:opacity-100 h-7 text-xs px-2 py-0 bg-gray-100 hover:bg-gray-200 text-gray-900"
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            window.open(demoUrl, "_blank");
          }}
        >
          View
          <ExternalLink className="w-3 h-3 ml-1" />
        </Button>
      </div>

      <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-1 pt-2">
        {techStack.split("•").map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-[10px] bg-gray-100 dark:bg-gray-700"
          >
            {tech.trim()}
          </Badge>
        ))}
      </div>
    </div>
  </Card>
);

export const SaasProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Project Management Suite",
      description:
        "Enterprise-grade project management platform with real-time collaboration.",
      techStack: "Next.js • tRPC • PostgreSQL",
      demoUrl: "https://demo.projectsuite.com",
      icon: Code2,
    },
    {
      id: 2,
      title: "Team Analytics Dashboard",
      description:
        "Comprehensive analytics platform for measuring team performance metrics.",
      techStack: "React • Redux • Node.js",
      demoUrl: "https://demo.teamanalytics.com",
      icon: BarChart3,
    },
    {
      id: 3,
      title: "HR Management System",
      description:
        "Modern HR platform for managing employee data and performance.",
      techStack: "Vue.js • Express • MySQL",
      demoUrl: "https://demo.hrmsystem.com",
      icon: Users,
    },
    {
      id: 4,
      title: "Cloud Integration Platform",
      description:
        "Seamless integration platform connecting various cloud services.",
      techStack: "Next.js • GraphQL • AWS",
      demoUrl: "https://demo.cloudintegration.com",
      icon: Cloud,
    },
  ];

  return (
    <section className="py-8 inset-0 bg-[#fafafa] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold text-left text-gray-900 dark:text-white">
          SaaS Solutions
          <div className="font-normal text-sm text-gray-500 mt-2">
            Enterprise software built with modern tech stack
          </div>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          {projects.map((project, index) => (
            <FeatureCard
              key={project.id}
              {...project}
              isActive={activeProject === index}
              onClick={() => setActiveProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasProjects;
