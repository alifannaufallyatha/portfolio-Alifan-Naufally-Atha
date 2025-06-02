export interface Project {
  id: number;
  title: string;
  description: string;
  category?: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Website A",
    description: "Description of project 1",
    category: "Web Development",
    image: "/path/to/image1.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    link: "https://project1.com"
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "A responsive admin dashboard for managing online store operations, including inventory tracking, order management, and sales analytics.",
    category: "Web Development",
    image: "/projects/dashboard.jpg",
    technologies: ["Next.js", "TypeScript", "Material UI", "Redux", "Chart.js"],
    link: "https://dashboard-demo.com"
  },
  {
    id: 3,
    title: "API Development",
    description: "RESTful API service with authentication, database integration, and comprehensive documentation.",
    category: "Backend",
    image: "/projects/backend.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    link: "https://api-docs.com"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern and responsive portfolio website with smooth animations and intuitive user interface.",
    category: "Web Design",
    image: "/projects/portfolio.jpg",
    technologies: ["Figma", "CSS3", "SASS", "JavaScript", "Framer Motion"],
    link: "https://portfolio.com"
  }
];