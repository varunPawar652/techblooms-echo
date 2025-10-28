import { GraduationCap, Users, Award, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Workshops",
    description: "Hands-on training in cutting-edge technologies from industry leaders",
  },
  {
    icon: Users,
    title: "Top Institutions",
    description: "Learn at prestigious IITs and BITS campuses across India",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Receive certificates of completion from recognized institutions",
  },
  {
    icon: Zap,
    title: "Practical Learning",
    description: "Real-world projects and case studies for hands-on experience",
  },
];

export const Features = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="courses" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-2">
            <span className="text-sm font-medium text-primary">Our Advantages</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              TechBlooms
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light">
            Comprehensive learning solutions designed for your success in the tech industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative ${
                isVisible ? "animate-roll-up" : "opacity-0"
              }`}
              style={{ animationDelay: isVisible ? `${index * 0.15}s` : "0s" }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur-xl border border-border group-hover:border-primary/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.3)]">
                <div className="relative">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-accent rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
