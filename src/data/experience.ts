export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "Lean Automation",
    period: "August 2024 - Present",
    description: [
      "Built full-stack applications using React, Next.js, Node.js and NestJS.",
      "Developed business intelligence dashboards for data visualization.",
      "Implemented AI-powered RAG and copilot solutions.",
      "Worked on microservices-based IoT systems utilizing Kafka, Docker, and WebSockets."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "firnas.tech",
    period: "May 2024 - July 2024",
    description: [
      "Developed responsive user interfaces and implemented frontend features.",
      "Collaborated with designers and backend developers to deliver project requirements.",
      "Optimized website performance and contributed to overall project objectives.",
      "Applied problem-solving skills and quickly adapted to new tools, technologies, and development practices.",
      "Demonstrated professionalism, dedication, and effective collaboration throughout the internship."
    ]
  }
];
