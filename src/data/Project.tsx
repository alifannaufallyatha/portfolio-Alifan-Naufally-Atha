export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Website A",
    description: "Description of project 1",
    image: "/path/to/image1.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    link: "https://project1.com"
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "A responsive admin dashboard for managing online store operations, including inventory tracking, order management, and sales analytics.",
    image: "/projects/dashboard.jpg",
    technologies: ["Next.js", "TypeScript", "Material UI", "Redux", "Chart.js"],
    link: "https://dashboard-demo.com"
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Full-stack social media platform with real-time messaging, post sharing, and user authentication features.",
    image: "/projects/social-app.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    link: "https://social-app.com"
  },
  {
    id: 4,
    title: "AI Image Generator",
    description: "Web application that generates unique images using AI models, featuring custom prompts and style transfer options.",
    image: "/projects/ai-generator.jpg",
    technologies: ["Python", "Flask", "TensorFlow", "React", "AWS"],
    link: "https://ai-image-gen.com"
  }
];