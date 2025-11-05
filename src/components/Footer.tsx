export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevTools. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
