import { skillCategories } from "@/data/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Huzaifa Ahmed",
  description: "My technical skills and proficiencies.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Technical Skills</h1>
        <p className="text-lg text-muted max-w-2xl">
          An overview of the technologies, frameworks, and tools I use to build software applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((category) => (
          <div key={category.name} className="flex flex-col">
            <h2 className="text-2xl font-bold font-heading mb-6 pb-2 border-b border-border-subtle">{category.name}</h2>
            <div className="flex flex-col gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between p-4 bg-secondary border border-border-subtle rounded-lg">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm font-medium text-emerald bg-emerald/10 px-3 py-1 rounded-full border border-emerald/20">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
