import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

export function HeroSection() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Developer & <span className="bg-gradient-hero bg-clip-text text-transparent">Security Enthusiast</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Passionate about creating tools that make development easier, security stronger, 
            and workflows more efficient. Explore my collection of utilities, security tools, 
            and creative projects below.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-card hover:shadow-hover group"
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center animate-slide-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
            <div 
              className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden shadow-hover"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
