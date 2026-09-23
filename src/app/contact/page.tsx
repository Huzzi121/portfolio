import { ContactForm } from "./ContactForm";
import { socials } from "@/data/socials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Huzaifa Ahmed",
  description: "Get in touch for opportunities, collaborations, or just to say hi.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Let's Connect</h1>
            <p className="text-lg text-muted max-w-md">
              I'm always open to discussing software engineering roles, creative development projects, or partnership opportunities.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted">Email</h3>
              <a href={`mailto:${socials.email}`} className="text-xl font-medium text-foreground hover:text-emerald transition-colors inline-block w-fit">
                {socials.email}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted">Socials</h3>
              <div className="flex gap-4">
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-emerald transition-colors font-medium">LinkedIn</a>
                <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-emerald transition-colors font-medium">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-secondary p-8 md:p-10 rounded-lg border border-border-subtle">
          <ContactForm />
        </div>
        
      </div>
    </div>
  );
}
