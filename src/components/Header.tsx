import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl animate-slide-down">
      {/* Dynamic Island Container */}
      <div className={`mx-auto transition-all duration-700 ease-out ${
        scrolled 
          ? 'w-full' 
          : 'w-fit'
      }`}>
        <div className={`
          bg-card/80 backdrop-blur-xl border border-border/50
          shadow-[0_8px_30px_rgb(0,0,0,0.12)]
          transition-all duration-700 ease-out overflow-hidden
          hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)]
          ${scrolled 
            ? 'rounded-2xl px-4 md:px-6 py-3' 
            : 'rounded-full px-6 md:px-8 py-3 md:py-4'
          }
        `}>
          <div className="flex items-center justify-between gap-3 md:gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-base md:text-lg font-bold bg-gradient-hero bg-clip-text text-transparent hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
                DevTools
              </span>
            </div>
            
            {/* Navigation - Hidden on mobile */}
            <nav className={`hidden md:flex items-center transition-all duration-700 ease-out ${
              scrolled ? 'gap-6' : 'gap-8'
            }`}>
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-all duration-300 ease-out hover:scale-105 relative group whitespace-nowrap"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-hero transition-all duration-500 ease-out group-hover:w-full rounded-full"></span>
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-all duration-300 ease-out hover:scale-105 relative group whitespace-nowrap"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-hero transition-all duration-500 ease-out group-hover:w-full rounded-full"></span>
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-all duration-300 ease-out hover:scale-105 relative group whitespace-nowrap"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-hero transition-all duration-500 ease-out group-hover:w-full rounded-full"></span>
              </a>
            </nav>

            {/* Right side - Mobile Menu + Theme Toggle */}
            <div className="flex items-center gap-2">
              <MobileMenu />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
