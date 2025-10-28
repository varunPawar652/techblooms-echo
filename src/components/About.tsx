import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "Learn from industry experts and academic leaders",
    "Hands-on practical training with real-world projects",
    "Network with peers from top institutions",
    "Get certified by recognized educational bodies",
    "Access to exclusive learning resources",
    "Career guidance and placement support",
  ];

  const stats = [
    { value: "98%", label: "Satisfaction Rate" },
    { value: "500+", label: "Happy Students" },
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-wider mb-4">About TechBlooms</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Cultivating Tomorrow's Tech Leaders
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            TechBlooms is dedicated to empowering students and professionals with cutting-edge 
            technology education. Our expert-led workshops and courses are conducted at India's 
            premier institutions, providing unparalleled learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{feature}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
              <div className="text-6xl">🎓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
