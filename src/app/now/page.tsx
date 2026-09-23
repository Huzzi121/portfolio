import { currentWork } from "@/data/current-work";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Now | Huzaifa Ahmed",
  description: "What I am currently working on.",
};

export default function NowPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="mb-16 border-b border-border-subtle pb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Currently Working On</h1>
        <p className="text-lg text-muted max-w-2xl">
          What I'm building, learning, and focusing on right now.
        </p>
      </div>

      <div className="space-y-12">
        {currentWork.map((work, idx) => (
          <div key={idx} className="bg-secondary p-8 rounded-lg border border-border-subtle">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <h2 className="text-2xl font-bold font-heading">{work.name}</h2>
              <span className="px-3 py-1 bg-background border border-border-subtle rounded text-sm font-medium text-emerald">
                Status: {work.status}
              </span>
            </div>
            
            {work.image && (
              <div className="mb-6 rounded-lg overflow-hidden border border-border-subtle relative h-64 md:h-96 w-full">
                <Image src={work.image} alt={work.name} fill className="object-cover" />
              </div>
            )}

            <p className="text-muted text-lg mb-6 leading-relaxed">
              {work.overview}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Current Focus</h3>
                <p className="text-muted">{work.focus}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Next Milestone</h3>
                <p className="text-muted">{work.nextMilestone}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border-subtle">
              <div className="flex flex-wrap gap-2">
                {work.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-background border border-border-subtle rounded text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>
              {work.lastUpdated && (
                <div className="text-xs text-muted">
                  Last updated: {work.lastUpdated}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
