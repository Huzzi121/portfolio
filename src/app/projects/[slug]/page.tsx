import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <Link href="/projects" className="inline-flex items-center gap-2 text-muted hover:text-emerald transition-colors font-medium text-sm mb-12">
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-secondary border border-border-subtle text-foreground rounded text-sm font-medium">
            {project.category}
          </span>
          <span className="px-3 py-1 bg-transparent border border-border-subtle text-muted rounded text-sm font-medium">
            {project.status}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">{project.title}</h1>
        <p className="text-xl text-muted text-balance">{project.description}</p>
      </div>

      {/* Visual Placeholder */}
      <div className="w-full h-64 md:h-96 bg-secondary border border-border-subtle rounded-lg flex items-center justify-center mb-12">
        <span className="text-muted tracking-widest uppercase font-medium">Project Visual Placeholder</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          {/* Case Study Sections */}
          <section>
            <h2 className="text-2xl font-bold font-heading mb-4">Project Overview</h2>
            <p className="text-muted leading-relaxed">
              This case study is under development. Additional details about the problem statement, objectives, implementation details, technical challenges, and results will be added soon.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold font-heading mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-secondary border border-border-subtle text-foreground rounded text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-secondary p-6 rounded-lg border border-border-subtle space-y-6">
            <h3 className="font-bold font-heading text-lg">Links</h3>
            <div className="flex flex-col gap-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors">
                  <GithubIcon style={{ width: '18px', height: '18px' }} /> GitHub Repository
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
              {!project.githubUrl && !project.demoUrl && (
                <span className="text-muted text-sm italic">Links currently unavailable.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
