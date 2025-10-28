import { Activity, BarChart3, Sparkles, Database, MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />

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

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${
                isVisible ? "animate-roll-up" : "opacity-0"
              } ${service.hasImage ? "md:row-span-1" : ""}`}
              style={{ 
                animationDelay: isVisible ? `${index * 0.15}s` : "0s",
                zIndex: services.length - index
              }}
            >
              <div className="relative h-full rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_30px_80px_hsl(var(--primary)/0.3)]">
                {service.hasImage && (
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>
                )}

                <div className="relative p-8 md:p-10">
                  {/* Letter Badge */}
                  <div className="absolute -top-4 right-8 w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow-primary">
                    <span className="text-3xl font-bold">{service.letter}</span>
                  </div>

                  {/* Icon */}
                  {!service.hasImage && (
                    <div className="mb-6">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-10 h-10" />
                        </div>
                      </div>
                    </div>
                  )}

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">
                    {service.description}
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
