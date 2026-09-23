export type CurrentWork = {
  name: string;
  overview: string;
  status: "Planning" | "In Development" | "Testing" | "Completed" | "Paused";
  focus: string;
  technologies: string[];
  nextMilestone: string;
  lastUpdated?: string;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
};

export const currentWork: CurrentWork[] = [
  {
    name: "Shawarma Lab — Restaurant Ordering Platform",
    overview: "Developing a restaurant website where customers can browse the menu, explore food items, and place orders online. Building a database-backed system to manage menu items and restaurant data. Creating an admin dashboard that allows restaurant staff to add, update, and manage existing menu items. Designing a responsive, user-friendly interface for a seamless ordering experience across desktop and mobile devices. Implementing the core functionality for customer ordering and restaurant menu management.",
    status: "In Development",
    focus: "Full-Stack Web Development",
    technologies: ["Next.js", "TypeScript", "React", "Database"],
    nextMilestone: "Core functionality for ordering and menu management",
    lastUpdated: new Date().toISOString().split('T')[0],
    image: "/images/shawarma-lab-new.jpg"
  }
];
