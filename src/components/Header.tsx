import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 animate-slide-up">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
            DevTools
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-accent transition-all hover:scale-105 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
          <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-accent transition-all hover:scale-105 relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-all hover:scale-105 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
