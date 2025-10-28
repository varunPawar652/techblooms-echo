const Stats = () => {
  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "25+", label: "Expert Workshops" },
    { value: "10+", label: "Top Institutions" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
