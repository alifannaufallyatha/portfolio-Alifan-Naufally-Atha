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
    date: "08/2024 - 10/2024",
    position: "Junior Backend Developer",
    company: "DPMPTSP ACEH",
    location: "Aceh, Indonesia",
    description: [
      "Develop a room loan system at the DPMPTSP office ACEH.",
      "Design ERD for Database.",
      "Using MYSQL for database management system (DBMS).",
      "Used the Laravel framework",
      "the MVC concept.",
      "focus on developing system logic Models, Controller and Middleware."
    ]
  },
  {
    id: 2,
    date: "11/2023 - 09/2023",
    position: "Junior Front-End Engineer",
    company: "PT. KARYA GENERASI NUSANTARA",
    location: "Jakarta, Indonesia",
    description: [
      "Understand the existing folder structure.",
      "Fetching data from the API.",
      "Develop a responsive website such as mobile use react.",
      "Using react strap for styling."
    ]
  }
];