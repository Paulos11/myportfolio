"use client";

import React from "react";
import { useIdentity } from "@/context/IdentityContext";
import {
  ReactOriginal,
  JavascriptOriginal,
  TypescriptOriginal,
  NextjsOriginal,
  TailwindcssPlainWordmark,
  ReduxOriginal,
  NodejsOriginal,
  ExpressOriginal,
  NestjsOriginalWordmark,
  GraphqlPlain,
  MongodbOriginal,
  PostgresqlOriginal,
  RedisOriginal,
  MysqlOriginal,
  DockerOriginal,
  KubernetesPlain,
  GitOriginal,
  JavaOriginal,
  PythonOriginal,
  PhpOriginal,
  LaravelOriginal,
  VuejsOriginal,
  AngularOriginal,
  FigmaOriginal,
  PhotoshopOriginal,
  IllustratorPlain,
} from "devicons-react";
import {
  Code2,
  Database,
  Layout,
  Cpu,
  Music,
  Mic,
  Heart,
  Book,
  Users,
} from "lucide-react";

const TechStack = () => {
  const { currentIdentity } = useIdentity();

  const developerCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-4 h-4" />,
      techs: [
        { icon: <ReactOriginal size="20" />, name: "React" },
        { icon: <NextjsOriginal size="20" />, name: "Next.js" },
        { icon: <JavascriptOriginal size="20" />, name: "JavaScript" },
        { icon: <TypescriptOriginal size="20" />, name: "TypeScript" },
        { icon: <TailwindcssPlainWordmark size="20" />, name: "Tailwind" },
        { icon: <ReduxOriginal size="20" />, name: "Redux" },
        { icon: <VuejsOriginal size="20" />, name: "Vue.js" },
        { icon: <AngularOriginal size="20" />, name: "Angular" },
      ],
    },
    {
      title: "Backend",
      icon: <Code2 className="w-4 h-4" />,
      techs: [
        { icon: <NodejsOriginal size="20" />, name: "Node.js" },
        { icon: <ExpressOriginal size="20" />, name: "Express" },
        { icon: <NestjsOriginalWordmark size="20" />, name: "NestJS" },
        { icon: <GraphqlPlain size="20" />, name: "GraphQL" },
        { icon: <LaravelOriginal size="20" />, name: "Laravel" },
        { icon: <JavaOriginal size="20" />, name: "Java" },
        { icon: <PythonOriginal size="20" />, name: "Python" },
        { icon: <PhpOriginal size="20" />, name: "PHP" },
      ],
    },
    {
      title: "Database & DevOps",
      icon: <Database className="w-4 h-4" />,
      techs: [
        { icon: <PostgresqlOriginal size="20" />, name: "PostgreSQL" },
        { icon: <MongodbOriginal size="20" />, name: "MongoDB" },
        { icon: <RedisOriginal size="20" />, name: "Redis" },
        { icon: <MysqlOriginal size="20" />, name: "MySQL" },
        { icon: <DockerOriginal size="20" />, name: "Docker" },
        { icon: <KubernetesPlain size="20" />, name: "Kubernetes" },
        { icon: <GitOriginal size="20" />, name: "Git" },
      ],
    },
    {
      title: "Design",
      icon: <Cpu className="w-4 h-4" />,
      techs: [
        { icon: <FigmaOriginal size="20" />, name: "Figma" },
        { icon: <PhotoshopOriginal size="20" />, name: "Photoshop" },
        { icon: <IllustratorPlain size="20" />, name: "Illustrator" },
      ],
    },
  ];

  const musicianCategories = [
    {
      title: "Genres",
      icon: <Music className="w-4 h-4" />,
      techs: [
        { icon: "🎵", name: "Christian Contemporary" },
        { icon: "🙌", name: "Gospel" },
        { icon: "✝️", name: "Worship" },
        { icon: "💫", name: "Praise" },
        { icon: "🎼", name: "Contemporary" },
      ],
    },
    {
      title: "Roles",
      icon: <Mic className="w-4 h-4" />,
      techs: [
        { icon: "🎤", name: "Lead Vocalist" },
        { icon: "👥", name: "Worship Leader" },
        { icon: "🎹", name: "Composer" },
        { icon: "📝", name: "Songwriter" },
      ],
    },
    {
      title: "Ministry",
      icon: <Heart className="w-4 h-4" />,
      techs: [
        { icon: "🕊️", name: "Praise & Worship" },
        { icon: "🌟", name: "Gospel Music" },
        { icon: "🙏", name: "Christian Music" },
        { icon: "💝", name: "Worship Ministry" },
      ],
    },
    {
      title: "Verses & Inspiration",
      icon: <Book className="w-4 h-4" />,
      techs: [
        { icon: "📖", name: "Psalms 96:1" },
        { icon: "✨", name: "Colossians 3:16" },
        { icon: "💫", name: "Psalm 150:6" },
        { icon: "🎶", name: "Ephesians 5:19" },
      ],
    },
  ];

  const categories =
    currentIdentity === "developer" ? developerCategories : musicianCategories;

  return (
    <section className="py-3 bg-[#fafafa] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold text-left text-gray-900 dark:text-white">
          {currentIdentity === "developer" ? "Tech Stack" : "Musical Journey"}
          <div className="font-normal text-sm text-gray-500 mt-2">
            {currentIdentity === "developer"
              ? "Technologies I work with"
              : "Genres and roles in music ministry"}
          </div>
        </h2>

        <div className="mt-6 space-y-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="relative bg-white dark:bg-gray-800 p-4 rounded-lg"
            >
              <div className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                {category.icon}
                {category.title}
              </div>

              <div className="grid grid-cols-8 md:grid-cols-12 gap-2">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative flex items-center justify-center"
                  >
                    <div
                      className={`p-1 rounded-lg transition-all duration-200 ${
                        typeof tech.icon === "string"
                          ? "text-xl"
                          : "[&_svg]:grayscale [&_svg]:opacity-75 hover:[&_svg]:grayscale-0 hover:[&_svg]:opacity-100"
                      }`}
                    >
                      {tech.icon}
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
