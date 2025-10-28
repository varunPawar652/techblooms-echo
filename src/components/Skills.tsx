import { Brain, BarChart3, Sparkles, Database, MessageSquare } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Brain,
      label: "A",
      title: "Deep Dive Analysis in Seconds",
      description: "Master advanced data analysis techniques and tools. Learn to extract meaningful insights from complex datasets with industry-standard frameworks.",
    },
    {
      icon: BarChart3,
      label: "B",
      title: "Data Visualization",
      description: "Create stunning visual representations of data. Learn to use cutting-edge tools to transform raw data into compelling visual stories.",
    },
    {
      icon: Sparkles,
      label: "C",
      title: "Custom AI Solutions",
      description: "Build and deploy custom AI models tailored to real-world problems. Master machine learning frameworks and implementation strategies.",
    },
    {
      icon: Database,
      label: "D",
      title: "Supporting Massive Data Sets",
      description: "Handle and process large-scale datasets efficiently. Learn distributed computing and big data technologies used by industry leaders.",
    },
    {
      icon: MessageSquare,
      label: "E",
      title: "Chat With Your Data",
      description: "Implement conversational AI interfaces for data exploration. Build intelligent systems that make data accessible through natural language.",
    },
  ];

  return (
    <section className="py-20 px-4" id="courses">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-wider mb-4">What You'll Learn</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Comprehensive Tech Skills</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Master the technologies shaping the future of data science and AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-lg">{skill.label}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-lg uppercase tracking-wide">
                        {skill.title}
                      </h3>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
