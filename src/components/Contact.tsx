import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "info@techblooms.in",
      href: "mailto:info@techblooms.in",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "India",
      href: "#",
    },
  ];

  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto">
        <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto">
          <p className="text-primary text-sm uppercase tracking-wider mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-foreground/70 text-lg mb-8">
            Join thousands of students transforming their careers with TechBlooms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-6 h-6 text-primary" />
                  <div className="text-sm text-foreground/70">{info.label}</div>
                  <div className="font-semibold">{info.value}</div>
                </a>
              );
            })}
          </div>

          <Button size="lg" className="text-lg px-8">
            Enroll Now
          </Button>
          <p className="text-foreground/50 text-sm mt-4">
            Start your learning journey today • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
