import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { CursorGlow } from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <ScrollProgress />
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ProjectsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
