export interface ExperienceItem {
  id: number;
  date: string;
  position: string;
  company: string;
  location?: string;
  description: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    date: "2023 - Present",
    position: "Software Engineer",
    company: "Tech Company",
    location: "Jakarta, Indonesia",
    description: [
      "Developed and maintained web applications using React and TypeScript",
      "Collaborated with cross-functional teams to deliver high-quality software",
      "Implemented responsive design and improved application performance"
    ]
  },
  {
    id: 2,
    date: "2021 - 2023",
    position: "Junior Developer",
    company: "Startup Corp",
    location: "Bandung, Indonesia",
    description: [
      "Built and maintained frontend features using modern JavaScript frameworks",
      "Participated in code reviews and technical discussions",
      "Worked on bug fixes and performance improvements"
    ]
  }
];