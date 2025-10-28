import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Star } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "Workshop at BITS Hyderabad",
      description: "Hands-on workshop covering AI, ML, and Data Science fundamentals",
      date: "8th & 9th October 2025",
      location: "BITS Pilani, Hyderabad Campus",
      capacity: "100+ Students",
      featured: true,
    },
    {
      title: "Workshop at IIT Guwahati",
      description: "Advanced workshop on Cloud Computing and DevOps practices",
      date: "29th & 30th November 2025",
      location: "IIT Guwahati Campus",
      capacity: "150+ Students",
      featured: true,
    },
    {
      title: "Workshop at IIT Kanpur",
      description: "Comprehensive training in Full Stack Development",
      date: "Coming Soon",
      location: "IIT Kanpur Campus",
      capacity: "200+ Students",
      featured: true,
    },
  ];

  return (
    <section className="py-20 px-4" id="workshops">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-wider mb-4">Limited Seats Available</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Upcoming Workshop Series</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Join our expert-led workshops at top institutions across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                {workshop.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}
                <div className="text-6xl font-bold text-primary/30">{index + 1}</div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                <p className="text-foreground/70 text-sm mb-4 flex-1">
                  {workshop.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{workshop.capacity}</span>
                  </div>
                </div>
                
                <Button className="w-full">Register Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
