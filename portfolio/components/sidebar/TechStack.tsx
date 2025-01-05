// components/sidebar/TechStack.tsx
import { Badge } from "@/components/ui/badge";
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
  SassOriginal,
  WebpackPlain,
  JestPlain,
  CypressioPlain,
  FigmaOriginal,
  PhotoshopOriginal,
  IllustratorPlain,
  AftereffectsOriginal,
  BlenderOriginal,
  WordpressPlain,
} from "devicons-react";
import { Code2, Layers } from "lucide-react";

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  techs: { icon: React.ReactNode; name: string }[];
}

const TechStack = () => {
  const categories: TechCategory[] = [
    {
      title: "Frontend",
      icon: <Code2 className="w-4 h-4" />,
      techs: [
        { icon: <ReactOriginal size="24" />, name: "React" },
        { icon: <NextjsOriginal size="24" />, name: "Next.js" },
        { icon: <JavascriptOriginal size="24" />, name: "JavaScript" },
        { icon: <TypescriptOriginal size="24" />, name: "TypeScript" },
        { icon: <TailwindcssPlainWordmark size="24" />, name: "Tailwind" },
        { icon: <ReduxOriginal size="24" />, name: "Redux" },
        { icon: <VuejsOriginal size="24" />, name: "Vue.js" },
        { icon: <AngularOriginal size="24" />, name: "Angular" },
      ],
    },
    {
      title: "Backend",
      icon: <Layers className="w-4 h-4" />,
      techs: [
        { icon: <NodejsOriginal size="24" />, name: "Node.js" },
        { icon: <ExpressOriginal size="24" />, name: "Express" },
        { icon: <NestjsOriginalWordmark size="24" />, name: "NestJS" },
        { icon: <GraphqlPlain size="24" />, name: "GraphQL" },
        { icon: <LaravelOriginal size="24" />, name: "Laravel" },
        { icon: <JavaOriginal size="24" />, name: "Java" },
        { icon: <PythonOriginal size="24" />, name: "Python" },
        { icon: <PhpOriginal size="24" />, name: "PHP" },
      ],
    },
    {
      title: "Database & DevOps",
      icon: <Code2 className="w-4 h-4" />,
      techs: [
        { icon: <PostgresqlOriginal size="24" />, name: "PostgreSQL" },
        { icon: <MongodbOriginal size="24" />, name: "MongoDB" },
        { icon: <RedisOriginal size="24" />, name: "Redis" },
        { icon: <MysqlOriginal size="24" />, name: "MySQL" },
        { icon: <DockerOriginal size="24" />, name: "Docker" },
        { icon: <KubernetesPlain size="24" />, name: "Kubernetes" },
        { icon: <GitOriginal size="24" />, name: "Git" },
        { icon: <WebpackPlain size="24" />, name: "Webpack" },
      ],
    },
    {
      title: "Design Tools",
      icon: <Layers className="w-4 h-4" />,
      techs: [
        { icon: <FigmaOriginal size="24" />, name: "Figma" },
        { icon: <PhotoshopOriginal size="24" />, name: "Photoshop" },
        { icon: <IllustratorPlain size="24" />, name: "Illustrator" },
        { icon: <AftereffectsOriginal size="24" />, name: "After Effects" },
        { icon: <BlenderOriginal size="24" />, name: "Blender" },
      ],
    },
  ];

  return (
    <div className="relative px-6 py-4">
      {/* Tech Decorative Elements */}
      <div className="absolute -left-6 top-8 w-6 h-[2px] bg-gradient-to-r from-gray-200 to-transparent" />
      <div className="absolute -right-6 top-8 w-6 h-[2px] bg-gradient-to-l from-gray-200 to-transparent" />

      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Code2 className="w-4 h-4" />
        Tech Stack
      </h3>

      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.title} className="relative">
            {/* Category Decorative Elements */}
            <div className="absolute -left-3 top-3 w-2 h-[2px] bg-gradient-to-r from-gray-200 to-transparent" />

            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              {category.icon}
              {category.title}
            </div>

            <div className="grid grid-cols-8 gap-1">
              {category.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative flex items-center justify-center p-1.5 rounded-md hover:bg-gray-100 transition-all duration-200"
                  title={tech.name}
                >
                  {tech.icon}
                  {/* Hover tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Decorative Line */}
      <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  );
};

export default TechStack;
