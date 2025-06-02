export interface IProject {
  id: number;
  title: string;
  description: string;
  category?: string;
  image: string;
  technologies: string[];
  link?: string;
}