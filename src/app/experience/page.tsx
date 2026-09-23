import { experience } from "@/data/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Huzaifa Ahmed",
  description: "My professional experience as a Software Engineer.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Professional Experience</h1>
        <p className="text-lg text-muted max-w-2xl">
          A timeline of my professional roles and the responsibilities I've held.
        </p>
      </div>

      <div className="space-y-16">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute w-4 h-4 bg-emerald rounded-full left-[-8px] top-1.5 z-10"></div>
            <div className="md:border-l md:border-border-subtle md:pl-10 md:pb-4 relative">
              <div className="md:hidden absolute w-4 h-4 bg-emerald rounded-full -left-[33px] top-1.5 z-10"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{exp.role}</h2>
                  <div className="text-xl font-medium text-muted mt-1">{exp.company}</div>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-emerald/10 text-emerald text-sm font-medium rounded-full w-fit">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-4 mt-6">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-muted relative pl-6 leading-relaxed">
                    <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-border-subtle"></span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
