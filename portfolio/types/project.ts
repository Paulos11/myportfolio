// types/project.ts
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  link?: string;
  isPrivate?: boolean;
  features: string[];
  techDetails: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    deployment?: string[];
  };
}
