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
  const currentCategory = projectCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore tools organized by purpose
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {projectCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium
                transition-all duration-300
                ${isActive 
                  ? 'bg-accent text-accent-foreground shadow-card' 
                  : 'bg-secondary text-secondary-foreground hover:bg-accent/10 hover:text-accent'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span>{category.title}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="animate-fade-in">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {currentCategory?.projects.map((project, idx) => (
            <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
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
