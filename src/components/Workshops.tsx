import { Calendar, MapPin, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const workshops = [
  {
    id: 1,
    title: "Workshop at BITS Hyderabad",
    date: "8th & 9th October 2025",
    location: "BITS Pilani, Hyderabad Campus",
    participants: "100+ Students",
    description: "Hands-on workshop covering AI, ML, and Data Science fundamentals",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: 2,
    title: "Workshop at IIT Guwahati",
    date: "29th & 30th November 2025",
    location: "IIT Guwahati Campus",
    participants: "150+ Students",
    description: "Advanced workshop on Cloud Computing and DevOps practices",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  {
    id: 3,
    title: "Workshop at IIT Kanpur",
    date: "Coming Soon",
    location: "IIT Kanpur Campus",
    participants: "200+ Students",
    description: "Comprehensive training in Full Stack Development",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
];

export const Workshops = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="workshops" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm mb-2">
            <span className="text-sm font-medium text-secondary">Limited Seats Available</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Workshop Series
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light">
            Join our expert-led workshops at top institutions across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className={`group relative ${
                isVisible ? "animate-roll-up" : "opacity-0"
              }`}
              style={{ animationDelay: isVisible ? `${index * 0.15}s` : "0s" }}
            >
              <Card className="group relative bg-transparent border-0 overflow-hidden h-full">
              {/* Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* Card Content */}
              <div className="relative h-full bg-card/50 backdrop-blur-xl border border-border group-hover:border-primary/40 rounded-3xl transition-all duration-500 hover:shadow-[0_30px_80px_hsl(var(--primary)/0.3)]">
                {/* Image */}
                <div className="relative h-56 overflow-hidden rounded-t-3xl">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-md border border-primary/30">
                    <span className="text-xs font-semibold text-foreground">Featured</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-5">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {workshop.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {workshop.description}
                  </p>

                  {/* Info Grid */}
                  <div className="space-y-3 py-4">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Calendar size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-foreground/40 mb-0.5">Date</div>
                        <div className="font-medium text-foreground/80">{workshop.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <MapPin size={18} className="text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs text-foreground/40 mb-0.5">Location</div>
                        <div className="font-medium text-foreground/80">{workshop.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Users size={18} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-xs text-foreground/40 mb-0.5">Capacity</div>
                        <div className="font-medium text-foreground/80">{workshop.participants}</div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-accent hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 py-6 text-base font-semibold">
                    Register Now
                  </Button>
                </div>
              </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
