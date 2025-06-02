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
    title: "Peminjaman Ruangan DPMPTSP ACEH",
    description: "Make a sistem for room loans at the DPMPTSP ACEH office, using the Laravel framework with a focus on developing system logic.",
    category: "Web Development",
    image: "/public/assets/image/dpmptsp.png",
    technologies: ["LARAVEL", "MYSQL", "Tailwind", "PHP"],
    link: "https://bidangdatin.xyz/app/sipro/public/"
  },
  {
    id: 2,
    title: "Fit-buddy Website",
    description: "A modern dashboard for fitness enthusiasts for your ideal body dreams with an exercise program designed especially for you. and responsive design.",
    category: "Web Development",
    image: "/public/assets/image/fit-buddy.png",
    technologies: ["React js + Vite", "Tailwind", "React hooks"],
    link: "https://fit-buddy-git-landing-page-alifannaufallyathas-projects.vercel.app/"
  },
  {
    id: 3,
    title: "APURA API Development",
    description: "RESTful API service with authentication, database integration, and documentation.",
    category: "Backend",
    image: "/public/assets/image/doc-api-apura.png",
    technologies: ["Node.js","Typescript", "Express", "PostgreSQL", "JWT", "Postman", "Cloudinary", "Nodemailer"],
    link: "https://documenter.getpostman.com/view/31404023/2sB2qgddg4"
  },
    {
    id: 4,
    title: "MOOD MEAL API Development",
    description: "RESTful API service with authentication, database integration, and documentation.",
    category: "Backend",
    image: "/public/assets/image/mood-meal-api-doc.png",
    technologies: ["Node.js","Typescript", "Express", "PostgreSQL", "JWT", "Postman"],
    link: "https://documenter.getpostman.com/view/31404023/2sB2qgcxi4"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern and responsive portfolio website with smooth animations and intuitive user interface.",
    category: "Web Design",
    image: "/projects/portfolio.jpg",
    technologies: ["Figma", "CSS3", "SASS", "JavaScript", "Framer Motion"],
    link: "https://portfolio.com"
  }
];