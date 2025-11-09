import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden relative z-[60] hover:bg-accent/10"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="relative w-5 h-5">
          <Menu 
            className={`absolute inset-0 transition-all duration-300 ${
              isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
            }`} 
          />
          <X 
            className={`absolute inset-0 transition-all duration-300 ${
              isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
            }`} 
          />
        </div>
      </Button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-[55] md:hidden transition-all duration-500 ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <nav 
          className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-500 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <a
            onClick={() => handleSmoothScroll('#about')}
            className="text-2xl font-medium text-foreground hover:text-accent transition-all duration-300 hover:scale-110 cursor-pointer relative group"
          >
            About
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
          <a
            onClick={() => handleSmoothScroll('#projects')}
            className="text-2xl font-medium text-foreground hover:text-accent transition-all duration-300 hover:scale-110 cursor-pointer relative group"
          >
            Projects
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
          <a
            onClick={() => handleSmoothScroll('#contact')}
            className="text-2xl font-medium text-foreground hover:text-accent transition-all duration-300 hover:scale-110 cursor-pointer relative group"
          >
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
        </nav>
      </div>
    </>
  );
}
