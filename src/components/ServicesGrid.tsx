import { Activity, BarChart3, Sparkles, Database, MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const services = [
  {
    letter: "A",
    title: "DEEP DIVE ANALYSIS IN SECONDS",
    description: "Master advanced data analysis techniques and tools. Learn to extract meaningful insights from complex datasets with industry-standard frameworks.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    hasImage: true,
  },
  {
    letter: "B",
    title: "DATA VISUALIZATION",
    description: "Create stunning visual representations of data. Learn to use cutting-edge tools to transform raw data into compelling visual stories.",
    icon: BarChart3,
    hasImage: false,
  },
  {
    letter: "C",
    title: "CUSTOM AI SOLUTIONS",
    description: "Build and deploy custom AI models tailored to real-world problems. Master machine learning frameworks and implementation strategies.",
    icon: Sparkles,
    hasImage: false,
  },
  {
    letter: "D",
    title: "SUPPORTING MASSIVE DATA SETS",
    description: "Handle and process large-scale datasets efficiently. Learn distributed computing and big data technologies used by industry leaders.",
    icon: Database,
    hasImage: false,
  },
  {
    letter: "E",
    title: "CHAT WITH YOUR DATA",
    description: "Implement conversational AI interfaces for data exploration. Build intelligent systems that make data accessible through natural language.",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    hasImage: true,
  },
];

export const ServicesGrid = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const parallaxBg = useParallax(0.2);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-section" 
        style={{ transform: `translateY(${parallaxBg}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-2">
            <span className="text-sm font-medium text-primary">What You'll Learn</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Tech Skills
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light">
            Master the technologies shaping the future of data science and AI
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              role="article"
              aria-label={`${service.letter}: ${service.title}`}
              className={`PiVxGu MDrwHQ wixui-box sticky ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ 
                animationDelay: isVisible ? `${index * 0.15}s` : "0s",
                top: `${80 + index * 40}px`,
                zIndex: index + 1
              }}
            >
              <div className="relative h-full rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_30px_80px_hsl(var(--primary)/0.3)] group">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image/Icon Side */}
                  <div className="relative" role="img" aria-label={`${service.title} illustration`}>
                    {service.hasImage ? (
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          style={{ transform: `scale(1.1) translateY(${-parallaxBg * 0.3}px)` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50" />
                      </div>
                    ) : (
                      <div className="h-64 md:h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative w-32 h-32 rounded-3xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="w-16 h-16" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Side */}
                  <div className="relative p-8 md:p-12 flex flex-col justify-center">
                    {/* Letter Badge */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow-primary">
                      <span className="text-4xl font-bold">{service.letter}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
