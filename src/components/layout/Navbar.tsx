"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Now", path: "/now" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight hover:text-emerald transition-colors" onClick={() => setIsOpen(false)}>
          HUZAIFA AHMED
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
              return (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-emerald",
                      isActive ? "text-emerald" : "text-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-medium bg-secondary text-foreground border border-border-subtle rounded hover:border-emerald hover:text-emerald transition-colors"
          >
            View CV
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 text-muted hover:text-emerald transition-colors rounded-full border border-transparent hover:border-border-subtle"
              aria-label="Toggle Theme"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 text-muted hover:text-emerald transition-colors rounded-full"
              aria-label="Toggle Theme"
            >
              {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button 
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border-subtle overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
                return (
                  <li key={link.name}>
                    <Link 
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block text-lg font-medium transition-colors hover:text-emerald",
                        isActive ? "text-emerald" : "text-muted"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 border-t border-border-subtle">
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full px-5 py-3 text-sm font-medium bg-emerald text-background rounded hover:bg-emerald/90 transition-colors"
                >
                  View CV
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
