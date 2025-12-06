import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group relative block"
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-accent via-accent/50 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px] animate-gradient-border" />
      
      {/* Glassmorphism card */}
      <div className="relative h-full p-6 rounded-xl border border-border/50 bg-card/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-base text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
      </div>
    </a>
  );
}
