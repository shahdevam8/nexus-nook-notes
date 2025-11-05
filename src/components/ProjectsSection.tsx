import { ProjectCard } from "./ProjectCard";

const projectCategories = [
  {
    title: "Essential Utilities",
    projects: [
      { title: "JSON Formatter", description: "Beautiful JSON viewer and formatter with syntax highlighting", link: "#" },
      { title: "Base64 Encoder/Decoder", description: "Quick encoding and decoding for base64 strings", link: "#" },
      { title: "Hash Generator", description: "Generate MD5, SHA-1, SHA-256 and other hash types", link: "#" },
      { title: "QR Code Generator", description: "Create custom QR codes for URLs, text, and more", link: "#" },
    ],
  },
  {
    title: "Cybersecurity Arsenal",
    projects: [
      { title: "Port Scanner", description: "Network port scanning and service detection tool", link: "#" },
      { title: "Password Strength Checker", description: "Analyze password security and get improvement suggestions", link: "#" },
      { title: "SSL Certificate Checker", description: "Verify SSL certificates and check expiration dates", link: "#" },
      { title: "Security Headers Analyzer", description: "Analyze HTTP security headers of any website", link: "#" },
    ],
  },
  {
    title: "OSINT Toolkit",
    projects: [
      { title: "IP Geolocation Lookup", description: "Find geographic location and details of any IP address", link: "#" },
      { title: "WHOIS Lookup", description: "Domain registration and ownership information", link: "#" },
      { title: "DNS Record Checker", description: "View all DNS records for any domain", link: "#" },
      { title: "Email Validator", description: "Verify email addresses and check deliverability", link: "#" },
    ],
  },
  {
    title: "Productivity Boosters",
    projects: [
      { title: "Markdown Editor", description: "Real-time markdown editor with live preview", link: "#" },
      { title: "Color Palette Generator", description: "Generate beautiful color schemes for your projects", link: "#" },
      { title: "Lorem Ipsum Generator", description: "Create placeholder text for your designs", link: "#" },
      { title: "Diff Checker", description: "Compare text files and highlight differences", link: "#" },
    ],
  },
  {
    title: "AI-Powered Tools",
    projects: [
      { title: "Text Summarizer", description: "AI-powered text summarization and key points extraction", link: "#" },
      { title: "Code Explainer", description: "Get AI explanations for complex code snippets", link: "#" },
      { title: "Content Generator", description: "Generate creative content with AI assistance", link: "#" },
      { title: "Image Analyzer", description: "Extract information and insights from images", link: "#" },
    ],
  },
  {
    title: "Fun & Games",
    projects: [
      { title: "Snake Game", description: "Classic snake game with modern twist", link: "#" },
      { title: "Tic Tac Toe", description: "Play against AI with different difficulty levels", link: "#" },
      { title: "Memory Card Game", description: "Test your memory with this card matching game", link: "#" },
      { title: "Typing Speed Test", description: "Measure and improve your typing speed", link: "#" },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Project Collection
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A curated selection of tools and utilities organized by category
        </p>
      </div>

      <div className="space-y-16">
        {projectCategories.map((category, idx) => (
          <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-hero rounded-full"></span>
              {category.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.projects.map((project, projectIdx) => (
                <ProjectCard
                  key={projectIdx}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
