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
      <div className="relative h-full p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-hover hover:-translate-y-1 hover:scale-[1.02]">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-base text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {/* Animated border gradient on hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </a>
  );
}
