"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All Projects", "Full-Stack Development", "AI / Machine Learning", "Frontend Development", "Creative Development"];

export function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All Projects" || project.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Projects</h1>
        <p className="text-lg text-muted max-w-2xl">
          Here are some of the projects I've worked on, ranging from full-stack web applications to AI-powered solutions.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {CATEGORIES.map((category) => {
          // Only show categories that have projects (except "All Projects")
          if (category !== "All Projects" && !projects.some(p => p.category === category)) {
            return null;
          }
          
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                activeCategory === category
                  ? "bg-emerald text-background border-emerald"
                  : "bg-transparent text-muted border-border-subtle hover:border-emerald/50 hover:text-foreground"
              )}
            >
              {category}
            </button>
          )
        })}
      </div>

      <motion.div layout className="flex flex-col gap-10">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px", amount: 0.1 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <ProjectCard project={project} layout="horizontal" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-muted">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
