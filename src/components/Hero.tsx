import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Grid */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/15 rounded-full blur-[140px] animate-float" style={{ animationDelay: "4s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          <div className="inline-block">
            <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium text-primary">Empowering Future Tech Leaders</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight">
            Empower Your Future in{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                Technology
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent blur-sm" />
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-foreground/70 max-w-3xl mx-auto font-light">
            Join expert-led workshops and online courses at top institutions like <span className="text-primary font-semibold">IIT</span> and <span className="text-secondary font-semibold">BITS</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button size="lg" className="bg-gradient-accent hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 group text-lg px-10 py-7 font-semibold">
              Explore Workshops
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 text-lg px-10 py-7 backdrop-blur-sm font-semibold">
              View Courses
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-20 max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-card/40 backdrop-blur-md border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm md:text-base text-foreground/60 font-medium">Students Trained</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-card/40 backdrop-blur-md border border-secondary/20 rounded-2xl p-6 hover:border-secondary/40 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">25+</div>
                <div className="text-sm md:text-base text-foreground/60 font-medium">Expert Workshops</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-card/40 backdrop-blur-md border border-accent/20 rounded-2xl p-6 hover:border-accent/40 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm md:text-base text-foreground/60 font-medium">Top Institutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-primary/40 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-card/20">
          <div className="w-1.5 h-3 bg-gradient-to-b from-primary to-secondary rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};
