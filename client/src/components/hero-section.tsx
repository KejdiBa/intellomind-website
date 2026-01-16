import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { GradientOrb } from "./gradient-orb";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            data-testid="text-hero-title"
          >
            <span className="text-foreground">Intelligenz neu gedacht</span>
            <br />
            <span className="text-foreground">– mit </span>
            <span className="gradient-text">IntelloMind</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Automatisieren Sie Ihre Kommunikation mit smarten KI-Lösungen.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="rounded-full px-8 py-6 text-base font-semibold btn-primary-gradient"
              data-testid="button-hero-cta-primary"
            >
              <Zap className="mr-2 h-5 w-5" />
              Jetzt Demo anfragen
            </Button>
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <GradientOrb />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
