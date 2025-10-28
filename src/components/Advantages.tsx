import { Award, GraduationCap, Trophy, Briefcase } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Award,
      title: "Expert Workshops",
      description: "Hands-on training in cutting-edge technologies from industry leaders",
    },
    {
      icon: GraduationCap,
      title: "Top Institutions",
      description: "Learn at prestigious IITs and BITS campuses across India",
    },
    {
      icon: Trophy,
      title: "Certified Programs",
      description: "Receive certificates of completion from recognized institutions",
    },
    {
      icon: Briefcase,
      title: "Practical Learning",
      description: "Real-world projects and case studies for hands-on experience",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-wider mb-4">Our Advantages</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose TechBlooms</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Comprehensive learning solutions designed for your success in the tech industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-foreground/70 text-sm">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
