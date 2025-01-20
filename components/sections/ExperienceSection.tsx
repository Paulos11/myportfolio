import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BriefcaseIcon, CalendarIcon, MapPinIcon, Circle } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  skills: string[];
  achievement: string;
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Project Manager",
      company: "Dotmandu I.T. Solutions",
      period: "2023 - 2025",
      location: "Hybrid",
      skills: ["Project Management", "Agile", "Scrum"],
      achievement: "Managed projects with 100% success rate",
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Baliyo Ventures Inc.",
      period: "2022 - 2024",
      location: "Lalitpur, Nepal",
      skills: ["Fullstack", "React", "Node.js"],
      achievement: "Developed fullstack web applications",
    },
    {
      id: 3,
      role: "Web and Graphics Designer",
      company: "EMS, Malta",
      period: "2022 - 2024",
      location: "Malta",
      skills: ["Figma", "Photoshop", "Illustrator", "Webdesign"],
      achievement: "2 years of contract of service with EMS",
    },
  ];

  return (
    <section className="py-8 inset-0 bg-[#fafafa] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-bold text-left text-gray-900 dark:text-white">
          Work Experience
          <div className="font-normal text-sm text-gray-500 mt-2">
            More than 5 years of learning and working
          </div>
        </h2>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative pt-8">
          {/* Main road path */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2" />

          {/* Experience points */}
          <div className="flex justify-between items-center relative">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative group w-72">
                {/* Connector line */}
                <div className="absolute left-1/2 w-px h-24 bg-gray-200 dark:bg-gray-700 top-0" />

                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-12 z-10">
                  <Circle className="w-4 h-4 text-gray-600 dark:text-gray-300 fill-current" />
                </div>

                {/* Experience Card */}
                <ExperienceCard experience={exp} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative pt-8">
          <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-[14px] top-3 transform -translate-x-1/2 z-10">
                  <Circle className="w-4 h-4 text-gray-600 dark:text-gray-300 fill-current" />
                </div>

                {/* Experience Card - Full width on mobile */}
                <div className="w-full">
                  <ExperienceCard experience={exp} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience: exp }) => (
  <Card className="p-3 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="text-xs">
          <CalendarIcon className="w-3 h-3 mr-1" />
          {exp.period}
        </Badge>
      </div>

      <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
        {exp.role}
      </h3>

      <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
        <BriefcaseIcon className="w-3 h-3 mr-1" />
        {exp.company}
      </div>

      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
        <MapPinIcon className="w-3 h-3 mr-1" />
        {exp.location}
      </div>

      <div className="flex flex-wrap gap-1 pt-2">
        {exp.skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="text-[10px] bg-gray-100 dark:bg-gray-700"
          >
            {skill}
          </Badge>
        ))}
      </div>

      <div className="text-xs text-gray-600 dark:text-gray-300 pt-2 border-t border-gray-100 dark:border-gray-700">
        ✨ {exp.achievement}
      </div>
    </div>
  </Card>
);

export default ExperienceSection;
