import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Wrench, Shield, Search, Sparkles, Brain, Gamepad2 } from "lucide-react";

const projectCategories = [
  {
    id: "utilities",
    title: "Essential Utilities",
    icon: Wrench,
    projects: [
      { title: "JSON Formatter", description: "Beautiful JSON viewer and formatter with syntax highlighting", link: "#" },
      { title: "Base64 Encoder/Decoder", description: "Quick encoding and decoding for base64 strings", link: "#" },
      { title: "Hash Generator", description: "Generate MD5, SHA-1, SHA-256 and other hash types", link: "#" },
      { title: "QR Code Generator", description: "Create custom QR codes for URLs, text, and more", link: "#" },
      { title: "Markdown Editor", description: "Real-time markdown editor with live preview", link: "#" },
      { title: "Color Palette Generator", description: "Generate beautiful color schemes for your projects", link: "#" },
    ],
  },
  {
    id: "security",
    title: "Cybersecurity Arsenal",
    icon: Shield,
    projects: [
      { title: "Port Scanner", description: "Network port scanning and service detection tool", link: "#" },
      { title: "Password Strength Checker", description: "Analyze password security and get improvement suggestions", link: "#" },
      { title: "SSL Certificate Checker", description: "Verify SSL certificates and check expiration dates", link: "#" },
      { title: "Security Headers Analyzer", description: "Analyze HTTP security headers of any website", link: "#" },
      { title: "Vulnerability Scanner", description: "Scan websites for common security vulnerabilities", link: "#" },
      { title: "Encryption Tool", description: "Encrypt and decrypt sensitive data securely", link: "#" },
    ],
  },
  {
    id: "osint",
    title: "OSINT Toolkit",
    icon: Search,
    projects: [
      { title: "IP Geolocation Lookup", description: "Find geographic location and details of any IP address", link: "#" },
      { title: "WHOIS Lookup", description: "Domain registration and ownership information", link: "#" },
      { title: "DNS Record Checker", description: "View all DNS records for any domain", link: "#" },
      { title: "Email Validator", description: "Verify email addresses and check deliverability", link: "#" },
      { title: "Subdomain Finder", description: "Discover subdomains of any target domain", link: "#" },
      { title: "Metadata Extractor", description: "Extract hidden metadata from documents and images", link: "#" },
    ],
  },
  {
    id: "productivity",
    title: "Productivity Boosters",
    icon: Sparkles,
    projects: [
      { title: "Pomodoro Timer", description: "Time management tool with focus sessions", link: "#" },
      { title: "Lorem Ipsum Generator", description: "Create placeholder text for your designs", link: "#" },
      { title: "Diff Checker", description: "Compare text files and highlight differences", link: "#" },
      { title: "URL Shortener", description: "Create short, shareable links", link: "#" },
      { title: "Screenshot Tool", description: "Capture and annotate screenshots", link: "#" },
      { title: "Text Case Converter", description: "Convert text between different cases", link: "#" },
    ],
  },
  {
    id: "ai",
    title: "AI-Powered Tools",
    icon: Brain,
    projects: [
      { title: "Text Summarizer", description: "AI-powered text summarization and key points extraction", link: "#" },
      { title: "Code Explainer", description: "Get AI explanations for complex code snippets", link: "#" },
      { title: "Content Generator", description: "Generate creative content with AI assistance", link: "#" },
      { title: "Image Analyzer", description: "Extract information and insights from images", link: "#" },
      { title: "Language Translator", description: "Translate text between multiple languages", link: "#" },
      { title: "Sentiment Analyzer", description: "Analyze emotional tone of text content", link: "#" },
    ],
  },
  {
    id: "games",
    title: "Fun & Games",
    icon: Gamepad2,
    projects: [
      { title: "Snake Game", description: "Classic snake game with modern twist", link: "#" },
      { title: "Tic Tac Toe", description: "Play against AI with different difficulty levels", link: "#" },
      { title: "Memory Card Game", description: "Test your memory with this card matching game", link: "#" },
      { title: "Typing Speed Test", description: "Measure and improve your typing speed", link: "#" },
      { title: "2048", description: "Addictive number puzzle game", link: "#" },
      { title: "Minesweeper", description: "Classic mine-finding puzzle game", link: "#" },
    ],
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("utilities");
  const [isAnimating, setIsAnimating] = useState(false);
  const currentCategory = projectCategories.find(cat => cat.id === activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeCategory) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(categoryId);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <section id="projects" className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-8 md:mb-12 animate-slide-up">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
          Featured Projects
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
          Explore tools organized by purpose
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 animate-slide-up px-2" style={{ animationDelay: '100ms' }}>
        {projectCategories.map((category, idx) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`
                inline-flex items-center justify-center gap-2 px-3 md:px-5 py-2.5 rounded-full text-sm font-medium
                transition-all duration-300 relative overflow-hidden group min-w-[44px]
                ${isActive 
                  ? 'bg-accent text-accent-foreground shadow-card scale-105' 
                  : 'bg-secondary text-secondary-foreground hover:bg-accent/10 hover:text-accent hover:scale-105'
                }
              `}
              style={{ animationDelay: `${idx * 50}ms` }}
              aria-label={category.title}
            >
              {/* Animated background on active */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-hero opacity-20 animate-shimmer bg-[length:200%_100%]"></div>
              )}
              
              <Icon className={`w-4 h-4 md:w-4 md:h-4 relative z-10 transition-transform duration-300 ${
                isActive ? 'rotate-0' : 'group-hover:rotate-12'
              }`} />
              <span className="relative z-10 hidden md:inline">{category.title}</span>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-accent/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className={`transition-all duration-300 ${
        isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
          {currentCategory?.projects.map((project, idx) => (
            <div 
              key={`${activeCategory}-${idx}`} 
              className="animate-scale-in" 
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
