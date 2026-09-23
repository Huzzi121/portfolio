export type SkillCategory = {
  name: string;
  skills: { name: string; level: "Experienced With" | "Familiar With" | "Currently Learning" | "Used in Portfolio" }[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: "Experienced With" },
      { name: "Next.js", level: "Experienced With" },
      { name: "TypeScript", level: "Experienced With" },
      { name: "JavaScript", level: "Experienced With" },
      { name: "HTML5", level: "Experienced With" },
      { name: "CSS3", level: "Experienced With" },
      { name: "Tailwind CSS", level: "Experienced With" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: "Experienced With" },
      { name: "NestJS", level: "Experienced With" },
      { name: "Express.js", level: "Experienced With" },
      { name: "FastAPI", level: "Familiar With" },
      { name: "REST APIs", level: "Experienced With" }
    ]
  },
  {
    name: "AI and Machine Learning",
    skills: [
      { name: "Python", level: "Experienced With" },
      { name: "TensorFlow", level: "Familiar With" },
      { name: "NLP", level: "Familiar With" },
      { name: "Deep learning", level: "Currently Learning" },
      { name: "LLM-based applications", level: "Familiar With" },
      { name: "RAG systems", level: "Experienced With" }
    ]
  },
  {
    name: "Databases and Infrastructure",
    skills: [
      { name: "SQL", level: "Experienced With" },
      { name: "MongoDB", level: "Experienced With" },
      { name: "Firebase", level: "Familiar With" },
      { name: "Docker", level: "Familiar With" },
      { name: "Kafka", level: "Familiar With" }
    ]
  },
  {
    name: "Creative Development",
    skills: [
      { name: "Three.js", level: "Used in Portfolio" },
      { name: "React Three Fiber", level: "Used in Portfolio" },
      { name: "Blender", level: "Familiar With" }
    ]
  }
];
