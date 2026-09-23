"use client";

import { useEffect, useState } from "react";

const STATS = [
  { value: "5+", label: "PROJECTS DELIVERED" },
  { value: "10+", label: "CLIENTS SERVED" },
  { value: "2+", label: "YEARS IN BUSINESS" },
  { value: "Software Engineer", label: "SPECIALIZATION" },
  { value: "Web Developer", label: "EXPERTISE" },
];

export function StatsMarquee() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // We duplicate the array to allow for a seamless infinite scroll loop.
  // The CSS animation translates from 0 to -50%, so the content needs to be exactly twice as wide.
  const duplicatedStats = [...STATS, ...STATS];

  return (
    <div className="w-full overflow-hidden py-4 md:py-6 relative z-10 my-8">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {duplicatedStats.map((stat, index) => (
          <div 
            key={index} 
            className="flex items-center gap-6 px-6 md:px-12 whitespace-nowrap"
            aria-hidden={index >= STATS.length ? "true" : "false"}
          >
            {/* Dot Separator */}
            {index !== 0 && (
              <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_8px_var(--color-emerald)] opacity-80" />
            )}
            {index === 0 && <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_8px_var(--color-emerald)] opacity-80" />}

            {/* Stat Item */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl md:text-4xl font-heading font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-medium tracking-widest text-muted uppercase">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
