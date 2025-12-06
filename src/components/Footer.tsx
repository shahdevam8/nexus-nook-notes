import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { ScrollReveal } from "./ScrollReveal";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 bg-card/50 backdrop-blur-sm mt-16 md:mt-24">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Contact Form Section */}
        <ScrollReveal>
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
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Footer Bottom */}
        <ScrollReveal delay={200}>
          <div className="border-t border-border/50 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left flex items-center gap-1">
                Built with <Heart className="w-3 h-3 text-accent fill-accent" /> © {new Date().getFullYear()} DevTools
              </p>
              <div className="flex gap-4 md:gap-6">
                <a 
                  href="#" 
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-all duration-300 relative group"
                >
                  Privacy
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
                <a 
                  href="#" 
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-all duration-300 relative group"
                >
                  Terms
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
