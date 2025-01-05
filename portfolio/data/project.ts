// data/projects.ts
export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    shortDescription:
      "Full-stack solution with user authentication, product management, and secure payment integration.",
    fullDescription:
      "A comprehensive e-commerce platform built with modern technologies, featuring robust user authentication, real-time inventory management, and secure payment processing. The platform offers a seamless shopping experience with advanced filtering, search capabilities, and responsive design.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/projects/ecommerce.jpg",
    features: [
      "User authentication and authorization",
      "Product catalog with categories and filters",
      "Shopping cart and wishlist functionality",
      "Secure payment integration",
      "Admin dashboard for inventory management",
      "Order tracking and history",
    ],
    techDetails: {
      frontend: ["React", "Redux", "Tailwind CSS", "Material UI"],
      backend: ["Node.js", "Express", "JWT Authentication"],
      database: ["MongoDB", "Redis for caching"],
      deployment: ["AWS", "Docker", "CI/CD pipeline"],
    },
  },
  {
    id: "ppt-management",
    title: "PPT Management System",
    shortDescription:
      "Streamlined web app for organizing, sharing, and downloading presentation materials with advanced search capabilities.",
    fullDescription:
      "A modern presentation management system that allows teams to collaborate, organize, and share presentation materials efficiently. Features include advanced search functionality, version control, and automated thumbnail generation.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    image: "/projects/ppt-management.jpg",
    features: [
      "Drag-and-drop file upload",
      "Advanced search with filters",
      "Real-time collaboration",
      "Version control",
      "Access control management",
      "Analytics dashboard",
    ],
    techDetails: {
      frontend: ["Next.js", "React Query", "Tailwind CSS"],
      backend: ["Firebase Functions", "Cloud Storage"],
      database: ["Firestore", "Firebase Auth"],
      deployment: ["Vercel", "Firebase Hosting"],
    },
  },
  // Add other projects similarly...
];
