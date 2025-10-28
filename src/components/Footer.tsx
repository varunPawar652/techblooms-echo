export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-xl overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                <span className="text-base font-bold text-foreground">TB</span>
              </div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              TechBlooms
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/60">
            <a
              href="#workshops"
              className="hover:text-foreground transition-colors duration-300 font-medium"
            >
              Workshops
            </a>
            <a
              href="#about"
              className="hover:text-foreground transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors duration-300 font-medium"
            >
              Contact
            </a>
            <a
              href="/community"
              className="hover:text-foreground transition-colors duration-300 font-medium"
            >
              Community
            </a>
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="/cancellation-refund"
              className="hover:text-foreground transition-colors duration-300 font-medium"
            >
              Cancellation & Refund
            </a>
            <a
              href="/terms"
              className="hover:text-foreground transition-colors duration-300 font-medium"
            >
              Terms & Conditions
            </a>
          </div>

          <div className="text-sm text-foreground/50 font-medium">
            © 2025 TechBlooms. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
