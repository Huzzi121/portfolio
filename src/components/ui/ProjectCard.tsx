"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { type Project } from "@/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, layout = "vertical" }: { project: Project; layout?: "vertical" | "horizontal" }) {
  // Always use the light mode image (or fallback) as requested
  const currentImage = project.imageLight || project.image;

  return (
    <div className={cn(
      "group relative flex h-full bg-secondary border border-border-subtle rounded-lg overflow-hidden hover:border-emerald/50 transition-colors",
      layout === "horizontal" ? "flex-col md:flex-row" : "flex-col"
    )}>
      {/* Animated Borders */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-20 pointer-events-none"></div>

      <div className={cn(
        "relative w-full bg-background/50 overflow-hidden shrink-0",
        layout === "horizontal" ? "h-64 md:h-auto md:w-2/5" : "h-48 md:h-64"
      )}>
        {currentImage ? (
          <Image
            src={currentImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted">
            <span className="text-sm font-medium uppercase tracking-widest">{project.title}</span>
          </div>
        )}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-2 py-1 text-xs font-medium bg-background/80 backdrop-blur text-foreground rounded">
            {project.category}
          </span>
        </div>
      </div>
      <div className={cn(
        "flex flex-col flex-1",
        layout === "horizontal" ? "p-6 md:p-10 md:justify-center" : "p-6"
      )}>
        <div className="flex items-start justify-between mb-2">
          <h3 className={cn("font-bold font-heading text-foreground", layout === "horizontal" ? "text-2xl md:text-3xl mb-2" : "text-xl")}>{project.title}</h3>
          <span className="px-2 py-1 text-xs font-medium border border-border-subtle text-muted rounded-full shrink-0 ml-4">
            {project.status}
          </span>
        </div>
        <p className={cn("text-muted mb-6 flex-1", layout === "horizontal" ? "text-base md:text-lg line-clamp-4" : "text-sm line-clamp-3")}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs text-muted bg-background border border-border-subtle/50 px-2.5 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs text-muted bg-background border border-border-subtle/50 px-2.5 py-1 rounded">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-subtle">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald hover:text-emerald/80 transition-colors"
          >
            Case Study <ArrowRight size={16} />
          </Link>
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="GitHub Repository">
                <GithubIcon style={{ width: '18px', height: '18px' }} />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="Live Demo">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
