import { Button } from "./ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-2">
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Get Started?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/60 font-light">
              Join thousands of students transforming their careers with TechBlooms
            </p>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl" />

            {/* Card */}
            <div className="relative bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-12 space-y-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-7 h-7 text-foreground" />
                    </div>
                  </div>
                  <div className="text-base font-semibold">Email Us</div>
                  <a
                    href="mailto:info@techblooms.in"
                    className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    info@techblooms.in
                  </a>
                </div>

                <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-secondary/5 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-foreground" />
                    </div>
                  </div>
                  <div className="text-base font-semibold">Call Us</div>
                  <a
                    href="tel:+919876543210"
                    className="text-foreground/60 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    +91 98765 43210
                  </a>
                </div>

                <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-accent/5 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-7 h-7 text-foreground" />
                    </div>
                  </div>
                  <div className="text-base font-semibold">Visit Us</div>
                  <div className="text-foreground/60 text-sm">India</div>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-border/50 space-y-4">
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] transition-all duration-300 text-lg px-14 py-7 font-semibold"
                >
                  Enroll Now
                </Button>
                <p className="text-sm text-foreground/50">
                  Start your learning journey today • No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
