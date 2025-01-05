"use client";

import { useState } from "react";
import Image from "next/image";
import { Project, projects } from "@/data/project";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Lock, Code2 } from "lucide-react";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative py-16 overflow-hidden" id="projects">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-gray-900">
        {/* Tech Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Circuit Lines */}
        <div className="absolute left-0 w-[200px] h-[1px] bg-gradient-to-r from-gray-200 to-transparent top-1/3" />
        <div className="absolute right-0 w-[150px] h-[1px] bg-gradient-to-l from-gray-200 to-transparent bottom-1/3" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Title with Tech Accent */}
          <div className="relative text-center mb-10">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-12 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
              <Code2 className="w-5 h-5" />
              Featured Projects
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card
                    className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 
                    hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <CardHeader className="relative p-4">
                      <div className="relative h-40 w-full mb-3 rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {project.isPrivate && (
                          <div className="absolute top-2 right-2 bg-gray-900/70 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            Private
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-gray-900 dark:text-white text-lg">
                        {project.title}
                      </CardTitle>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                {/* Project Details Modal */}
                <DialogContent className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">
                      {project.title}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="relative h-56 w-full rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.fullDescription}
                    </p>

                    <div>
                      <h3 className="text-base font-semibold mb-2">
                        Key Features
                      </h3>
                      <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2">
                        Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {Object.values(project.techDetails)
                          .flat()
                          .map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-gray-100 dark:bg-gray-800"
                            >
                              {tech}
                            </Badge>
                          ))}
                      </div>
                    </div>

                    {project.link && (
                      <Button
                        className="w-full"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        Visit Project <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>

      {/* Light Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/[0.02] dark:bg-blue-400/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-purple-500/[0.02] dark:bg-purple-400/[0.03] rounded-full blur-[80px]" />
      </div>
    </section>
  );
};
