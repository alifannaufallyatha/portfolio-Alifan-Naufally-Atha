export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    icon: "/path/to/react-icon.svg"
  },
  // Add more skills here
];