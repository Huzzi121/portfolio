export type Project = {
  slug: string;
  title: string;
  description: string;
  category: "Full-Stack Development" | "AI / Machine Learning" | "Frontend Development" | "Creative Development";
  technologies: string[];
  image: string;
  imageDark?: string;
  imageLight?: string;
  status: "Completed" | "In Development" | "Planned";
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "harmfilter",
    title: "HarmFilter",
    description: "An AI-based harmful-content detection application utilizing Bi-LSTM for hate speech detection.",
    category: "AI / Machine Learning",
    technologies: ["Flutter", "Python", "FastAPI", "Bi-LSTM", "PaddleOCR", "Firebase"],
    image: "/images/projects/harmfilter.jpg", // Fallback
    imageDark: "/images/projects/harmfilter-dark.png",
    imageLight: "/images/projects/harmfilter-light.png",
    status: "Completed",
    githubUrl: "https://github.com/Huzzi121/harmfilter"
  },
  {
    slug: "smart-dressing",
    title: "Smart Dressing",
    description: "An AI-powered outfit recommendation system based on user preferences and context.",
    category: "AI / Machine Learning",
    technologies: ["Python", "TensorFlow", "React"],
    image: "/images/projects/smart-dressing.png", // Fallback
    imageDark: "/images/projects/smart-dressing-dark.png",
    imageLight: "/images/projects/smart-dressing-light.png",
    status: "Completed",
    githubUrl: "https://github.com/Huzzi121/smart-dressing"
  },
  {
    slug: "roman-builders",
    title: "Roman Builders Website",
    description: "A comprehensive web development project focusing on responsive design, multi-page navigation, and performance optimization.",
    category: "Frontend Development",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/images/projects/roman-builders.png", // Fallback
    imageDark: "/images/projects/roman-builders-dark.png",
    imageLight: "/images/projects/roman-builders-light.png",
    status: "Completed",
    demoUrl: "https://placeholder-demo.com"
  }
];
