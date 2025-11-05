import { ExternalLink, ArrowUpRight } from "lucide-react";

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
      <div className="relative h-full p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-hover">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-base text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
}
