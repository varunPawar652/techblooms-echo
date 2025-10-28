import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Workshops from "@/components/Workshops";
import Advantages from "@/components/Advantages";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Skills />
      <Workshops />
      <Advantages />
      <About />
      <Contact />
      
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center text-foreground/60 text-sm">
          <p>© 2025 TechBlooms. Empowering Future Tech Leaders.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
