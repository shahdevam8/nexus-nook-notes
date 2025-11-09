import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <section id="about" className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className={`order-2 md:order-1 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Developer & <span className="bg-gradient-hero bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">Security Enthusiast</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
            Passionate about creating tools that make development easier, security stronger, 
            and workflows more efficient. Explore my collection of utilities, security tools, 
            and creative projects below.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-card hover:shadow-hover group hover:scale-110 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${700 + idx * 100}ms` }}
              >
                <social.icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className={`order-1 md:order-2 flex justify-center mb-6 md:mb-0 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full animate-pulse"></div>
            <div 
              className="relative w-48 h-48 md:w-80 md:h-80 overflow-hidden shadow-hover hover:scale-105 transition-transform duration-500"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
