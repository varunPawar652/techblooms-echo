import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <p className="text-primary mb-6 text-sm uppercase tracking-wider animate-fade-in">
          Empowering Future Tech Leaders
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Empower Your Future
          <br />
          in <span className="text-primary glow-effect inline-block">Technology</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in">
          Join expert-led workshops and online courses at top institutions like{" "}
          <span className="text-primary font-semibold">IIT</span> and{" "}
          <span className="text-primary font-semibold">BITS</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="group">
            Explore Workshops
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline">
            View Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
