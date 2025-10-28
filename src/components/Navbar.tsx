import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold text-foreground">TB</span>
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              TechBlooms
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#workshops"
              className="relative text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium group"
            >
              Workshops
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#courses"
              className="relative text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium group"
            >
              Courses
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#about"
              className="relative text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contact"
              className="relative text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
            </a>
            <Button className="bg-gradient-accent hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 px-6 font-semibold">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 animate-fade-in border-t border-border/50">
            <a
              href="#workshops"
              className="block text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-all duration-300 p-3 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Workshops
            </a>
            <a
              href="#courses"
              className="block text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-all duration-300 p-3 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </a>
            <a
              href="#about"
              className="block text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-all duration-300 p-3 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-all duration-300 p-3 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full bg-gradient-accent hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 py-6 font-semibold">
              Enroll Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
