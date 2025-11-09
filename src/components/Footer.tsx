export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16 md:mt-24">
      <div className="container mx-auto px-4 py-6 md:py-8 animate-slide-up">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} DevTools. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a 
              href="#" 
              className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 relative group"
            >
              Privacy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 relative group"
            >
              Terms
              <span className="absolute -bottom-1 left-0 w-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
