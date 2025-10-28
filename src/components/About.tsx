import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const benefits = [
  "Learn from industry experts and academic leaders",
  "Hands-on practical training with real-world projects",
  "Network with peers from top institutions",
  "Get certified by recognized educational bodies",
  "Access to exclusive learning resources",
  "Career guidance and placement support",
];

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const parallaxBg = useParallax(0.2);

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-section"
        style={{ transform: `translateY(${parallaxBg}px)` }}
      />
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]"
          style={{ transform: `translateY(${parallaxBg * 0.5}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px]"
          style={{ transform: `translateY(${-parallaxBg * 0.5}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-2">
              <span className="text-sm font-medium text-accent">About TechBlooms</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Cultivating Tomorrow's{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Tech Leaders
              </span>
            </h2>

            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">
              TechBlooms is dedicated to empowering students and professionals with cutting-edge
              technology education. Our expert-led workshops and courses are conducted at India's
              premier institutions, providing unparalleled learning experiences.
            </p>

            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CheckCircle className="relative w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Main Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-border/50 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Students learning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ transform: `translateY(${parallaxBg * 0.1}px)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/30" />
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-8 -left-8 group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl" />
              <div className="relative bg-card/95 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 shadow-[0_20px_60px_hsl(var(--primary)/0.3)] hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-foreground/60 font-medium">Satisfaction Rate</div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 group">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl" />
              <div className="relative bg-card/95 backdrop-blur-xl border border-secondary/30 rounded-2xl p-6 shadow-[0_20px_60px_hsl(var(--secondary)/0.3)] hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-secondary mb-1">500+</div>
                <div className="text-sm text-foreground/60 font-medium">Happy Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
