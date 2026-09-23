import { ArrowRight, BookOpen, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Huzaifa Ahmed",
  description: "Learn more about my background, education, and development philosophy.",
};

export default function About() {
  const timeline = [
    {
      year: "2024 - Present",
      title: "Software Developer",
      organization: "Lean Automation",
      description: "Building full-stack applications, BI dashboards, and AI-powered solutions.",
      icon: <Briefcase className="text-emerald" size={20} />
    },
    {
      year: "2024 (May - Jul)",
      title: "Frontend Developer Intern",
      organization: "firnas.tech",
      description: "Developed responsive user interfaces and collaborated on frontend features.",
      icon: <Briefcase className="text-emerald" size={20} />
    },
    {
      year: "2022 - 2026",
      title: "B.S. Software Engineering",
      organization: "COMSATS University Islamabad, Abbottabad Campus",
      description: "Studying core software engineering principles, algorithms, and system design.",
      icon: <GraduationCap className="text-emerald" size={20} />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-16">
      
      {/* Introduction */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">About Me</h1>
        <div className="prose prose-invert prose-emerald max-w-none">
          <p className="text-lg text-muted text-balance leading-relaxed">
            I am Huzaifa Ahmed, a Software Engineering student and professional developer with a strong foundation in full-stack applications and AI/ML projects. I enjoy bridging the gap between intelligent backend systems and immersive, highly polished frontend experiences.
          </p>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
          <BookOpen className="text-emerald" /> Education
        </h2>
        <div className="group relative overflow-hidden bg-secondary p-6 rounded-lg border border-border-subtle hover:border-emerald/50 transition-colors">
          {/* Animated Borders */}
          <div className="absolute top-0 left-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">B.S. Software Engineering</h3>
            <p className="text-emerald font-medium mb-4">COMSATS University Islamabad, Abbottabad Campus</p>
            <p className="text-muted text-sm uppercase tracking-wider">Session: 2022–2026</p>
          </div>
        </div>
      </section>

      {/* Professional Interests */}
      <section>
        <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
          <Sparkles className="text-emerald" /> Professional Interests
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Full-stack software engineering",
            "AI-powered applications",
            "Machine learning and NLP",
            "Interactive web development",
            "Creative development and 3D graphics"
          ].map((interest, i) => (
            <li key={i} className="group relative overflow-hidden flex items-center gap-3 bg-secondary/50 border border-border-subtle p-4 rounded text-muted hover:border-emerald/50 transition-colors hover:text-foreground">
              {/* Animated Borders */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
              
              <span className="w-1.5 h-1.5 rounded-full bg-border-subtle group-hover:bg-emerald transition-colors duration-300 relative z-10"></span>
              <span className="relative z-10">{interest}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Development Philosophy */}
      <section>
        <h2 className="text-2xl font-bold font-heading mb-6">Development Philosophy</h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            I believe that great software is built at the intersection of robust engineering and thoughtful design. My approach prioritizes maintainability, performance, and user experience.
          </p>
          <p>
            When building systems, I focus on creating clean architectures that can scale and adapt. Whether I'm designing a machine learning pipeline or crafting an interactive 3D interface, I aim for solutions that are not only technically sound but also genuinely enjoyable to use.
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section>
        <h2 className="text-2xl font-bold font-heading mb-8">Journey Timeline</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
          {timeline.map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary shadow z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {item.icon}
              </div>
              <div className="group relative overflow-hidden w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-secondary p-6 rounded border border-border-subtle shadow hover:border-emerald/50 transition-colors">
                {/* Animated Borders */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 h-1 w-0 bg-emerald group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1 h-0 bg-emerald group-hover:h-full transition-all duration-500 ease-out z-10 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                    <time className="text-sm font-medium text-emerald">{item.year}</time>
                  </div>
                  <div className="text-foreground/80 font-medium mb-3 text-sm">{item.organization}</div>
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-8 border-t border-border-subtle flex justify-between items-center">
        <Link href="/" className="text-muted hover:text-emerald transition-colors font-medium text-sm inline-flex items-center gap-2">
          <ArrowRight className="rotate-180" size={16} /> Back to Home
        </Link>
        <Link href="/experience" className="text-emerald hover:text-emerald/80 transition-colors font-medium text-sm inline-flex items-center gap-2">
          View Detailed Experience <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
