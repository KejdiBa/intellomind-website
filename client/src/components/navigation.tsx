import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/Logo_IntelloMind_1767046191762.jpg";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Start", href: "#home" },
  { label: "Leistungen", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
      data-testid="navigation-header"
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="flex items-center gap-3"
          data-testid="link-logo"
        >
          <img
            src={logoImage}
            alt="IntelloMind"
            className="h-10 w-auto rounded-lg"
          />
          <span className="font-bold text-xl text-foreground tracking-tight">
            IntelloMind
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-muted-foreground hover-tint transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="rounded-full px-6 hover-glow"
            data-testid="button-nav-contact"
          >
            Jetzt starten
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="md:hidden glass-nav border-t border-border/10"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-base font-medium text-foreground hover-tint py-2"
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full rounded-full mt-4 hover-glow"
                data-testid="button-mobile-contact"
              >
                Jetzt starten
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
