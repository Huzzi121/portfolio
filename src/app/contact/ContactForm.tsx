"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { socials } from "@/data/socials";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Placeholder logic for form submission
    console.warn("Contact form submission is not connected to a backend service yet. Please configure the API endpoint.");
    
    setSubmitStatus("success");
    setIsSubmitting(false);
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold font-heading mb-2">Send a Message</h2>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="w-full bg-background border border-border-subtle rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-emerald transition-colors"
          placeholder="John Doe"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="w-full bg-background border border-border-subtle rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-emerald transition-colors"
          placeholder="john@example.com"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          required 
          className="w-full bg-background border border-border-subtle rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-emerald transition-colors"
          placeholder="Project Inquiry"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={5}
          required 
          className="w-full bg-background border border-border-subtle rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-emerald transition-colors resize-none"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-emerald text-background font-medium rounded-md hover:bg-emerald/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </button>

      {submitStatus === "success" && (
        <div className="p-4 bg-emerald/10 border border-emerald/20 text-emerald rounded-md text-sm">
          Message sent successfully (Simulated). In production, configure your backend endpoint.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-md text-sm">
          Failed to send message. Please try again or use the fallback email: {socials.email}
        </div>
      )}
    </form>
  );
}
