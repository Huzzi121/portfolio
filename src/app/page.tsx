"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroScene } from "@/components/three/HeroScene";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { currentWork } from "@/data/current-work";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowRight, Code, Database, Layout, Sparkles, Terminal, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { StatsMarquee } from "@/components/ui/StatsMarquee";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestExperience = experience[0];
  const activeProject = currentWork[0];
  
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. Hero Parallax and Fade (No Pinning for seamless flow)
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-trigger",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      });
      
      heroTl.to(".hero-content", {
        y: -50,
        opacity: 0,
        duration: 1
      }, 0);

      heroTl.to(".scroll-indicator", {
        opacity: 0,
        y: 20,
        duration: 0.3
      }, 0);
    });

    // We no longer need the reduced-motion fallback for the sections since ScrollReveal handles it
    // But we still need the matchMedia fallback for GSAP if anything relies on it
  }, { scope: containerRef });

  return (
    <div className="flex flex-col w-full" ref={containerRef}>
      {/* Hero Section */}
      <section className="hero-trigger relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          
          {/* Left Side: Intro */}
          <div className="hero-content flex flex-col gap-6 order-2 lg:order-1 pt-12 lg:pt-0 pb-24 lg:pb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-xs font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
              Available for work
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading tracking-tight text-foreground">
              Software Engineer building <span className="text-emerald">intelligent applications</span> and immersive digital experiences.
            </h1>
            
            <p className="text-lg md:text-xl text-muted max-w-2xl text-balance">
              I build full-stack applications, AI-powered solutions, and interactive experiences that combine thoughtful engineering with modern design.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link 
                href="/projects"
                className="px-6 py-3 bg-emerald text-background font-medium rounded hover:bg-emerald/90 transition-colors"
              >
                Explore My Work
              </Link>
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border border-border-subtle text-foreground font-medium rounded hover:border-emerald hover:text-emerald transition-colors"
              >
                View CV
              </a>
              <Link 
                href="/contact"
                className="px-6 py-3 bg-transparent text-muted font-medium hover:text-emerald transition-colors underline underline-offset-4 decoration-border-subtle hover:decoration-emerald"
              >
                Let's Connect
              </Link>
            </div>
          </div>

          {/* Right Side: Interactive 3D */}
          <div className="h-[60vh] lg:h-[90vh] w-full order-1 lg:order-2 relative lg:-mr-12">
            <HeroScene />
          </div>
          
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hidden md:flex">
          <span className="text-xs tracking-widest uppercase font-medium">Scroll to explore</span>
          <ChevronDown className="animate-bounce text-emerald" size={20} />
        </div>
      </section>

      {/* Section A: Professional Introduction */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Engineering software with purpose.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              I am passionate about creating robust systems and seamless user interfaces. From developing intelligent AI models to architecting scalable backends and crafting interactive 3D web experiences, I approach every project with a focus on performance, maintainability, and design excellence.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link href="/about" className="inline-flex items-center justify-center gap-2 text-emerald font-medium hover:text-emerald/80 transition-colors mt-2">
              Read more about me <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Marquee Strip (Animated on Scroll) */}
      <ScrollReveal>
        <StatsMarquee />
      </ScrollReveal>

      {/* Section B: Selected Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Selected Work</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-muted max-w-xl">A collection of my recent software engineering and creative development projects.</p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-emerald font-medium hover:text-emerald/80 transition-colors">
                View All Projects <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>
          
          <ScrollRevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-0" staggerDelay={0.15}>
            {featuredProjects.map(project => (
              <ScrollRevealItem key={project.slug} className="project-card h-full">
                <ProjectCard project={project} />
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
          
          <Link href="/projects" className="inline-flex md:hidden items-center gap-2 text-emerald font-medium hover:text-emerald/80 transition-colors mt-8">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Section C: Technical Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Expertise</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-muted max-w-2xl mx-auto">My core competencies span the full stack of modern web development and applied AI.</p>
            </ScrollReveal>
          </div>
          
          <ScrollRevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            <ScrollRevealItem className="group relative overflow-hidden skill-card bg-background p-8 rounded-lg border border-border-subtle hover:border-emerald/50 transition-colors">
              {/* Animated Borders */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              
              <Layout className="text-emerald mb-6 relative z-10" size={32} />
              <h3 className="text-xl font-bold mb-3 relative z-10">Frontend Development</h3>
              <p className="text-muted mb-4 relative z-10">Building responsive, accessible, and performant user interfaces.</p>
              <p className="text-sm text-muted font-medium relative z-10">React, Next.js, TypeScript, Tailwind CSS</p>
            </ScrollRevealItem>
            <ScrollRevealItem className="group relative overflow-hidden skill-card bg-background p-8 rounded-lg border border-border-subtle hover:border-emerald/50 transition-colors">
              {/* Animated Borders */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              
              <Terminal className="text-emerald mb-6 relative z-10" size={32} />
              <h3 className="text-xl font-bold mb-3 relative z-10">Backend Development</h3>
              <p className="text-muted mb-4 relative z-10">Architecting scalable APIs and robust server-side applications.</p>
              <p className="text-sm text-muted font-medium relative z-10">Node.js, NestJS, Python, FastAPI</p>
            </ScrollRevealItem>
            <ScrollRevealItem className="group relative overflow-hidden skill-card bg-background p-8 rounded-lg border border-border-subtle hover:border-emerald/50 transition-colors">
              {/* Animated Borders */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              
              <Sparkles className="text-emerald mb-6 relative z-10" size={32} />
              <h3 className="text-xl font-bold mb-3 relative z-10">AI & Machine Learning</h3>
              <p className="text-muted mb-4 relative z-10">Integrating intelligent features and predictive models into applications.</p>
              <p className="text-sm text-muted font-medium relative z-10">TensorFlow, NLP, LLMs, RAG Systems</p>
            </ScrollRevealItem>
          </ScrollRevealGroup>
          
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/skills" className="inline-flex items-center gap-2 text-emerald font-medium hover:text-emerald/80 transition-colors">
                View Full Skills Matrix <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section D: Professional Experience Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">Experience</h2>
          </ScrollReveal>
          
          <ScrollRevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {experience.slice(0, 2).map((exp, idx) => (
              <ScrollRevealItem key={idx} className="group relative p-8 bg-secondary border border-border-subtle rounded-lg hover:border-emerald/50 transition-colors h-full flex flex-col overflow-hidden">
                {/* Animated Borders */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10"></div>
                <div className="absolute top-0 right-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10"></div>
                <div className="absolute bottom-0 right-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10"></div>
                <div className="absolute bottom-0 left-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10"></div>
                
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <div className="text-emerald font-medium mt-1 mb-6">{exp.company} • {exp.period}</div>
                <ul className="space-y-4 flex-1">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-muted relative pl-6 leading-relaxed">
                      <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-border-subtle group-hover:bg-emerald transition-colors duration-500"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
          
          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <Link href="/experience" className="inline-flex items-center gap-2 px-6 py-3 border border-border-subtle rounded hover:border-emerald hover:text-emerald transition-colors font-medium">
                View Full Experience
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section E: Currently Working On */}
      {activeProject && (
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-sm font-medium tracking-widest text-emerald uppercase mb-4">Currently Working On</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-6">{activeProject.name}</h3>
            </ScrollReveal>

            {activeProject.image && (
              <ScrollReveal delay={0.15}>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border border-border-subtle mb-8">
                  <Image src={activeProject.image} alt={activeProject.name} fill className="object-cover" />
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted mb-8">{activeProject.overview}</p>
            </ScrollReveal>
            <ScrollRevealGroup staggerDelay={0.1}>
              <div className="flex items-center justify-center gap-4 text-sm">
                <ScrollRevealItem className="px-3 py-1 bg-background border border-border-subtle rounded text-muted">
                  Focus: {activeProject.focus}
                </ScrollRevealItem>
                <ScrollRevealItem className="px-3 py-1 bg-background border border-border-subtle rounded text-muted">
                  Status: {activeProject.status}
                </ScrollRevealItem>
              </div>
            </ScrollRevealGroup>
            <ScrollReveal delay={0.3}>
              <div className="mt-10">
                <Link href="/now" className="inline-flex items-center gap-2 text-emerald font-medium hover:text-emerald/80 transition-colors">
                  What I'm doing now <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Section F: Contact Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Have a project in mind?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-muted mb-10">Let's build something meaningful together.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-emerald text-background font-medium rounded hover:bg-emerald/90 transition-colors text-lg w-full sm:w-auto"
              >
                Get In Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
