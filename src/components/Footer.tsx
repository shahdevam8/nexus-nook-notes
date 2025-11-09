import { ContactForm } from "./ContactForm";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card mt-16 md:mt-24">
      <div className="container mx-auto px-4 py-12 md:py-16 animate-slide-up">
        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Get In Touch</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Have a question or want to work together? Send me a message!
            </p>
          </div>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-6">
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
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
