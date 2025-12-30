import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HeroOrbAnimation } from "./hero-orb-animation";

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
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-gradient-orb bg-gradient-orb-cyan w-[600px] h-[600px] -top-20 left-1/4 opacity-30" />
        <div className="bg-gradient-orb bg-gradient-orb-purple w-[500px] h-[500px] bottom-0 right-1/4 opacity-25" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
              data-testid="text-hero-title"
            >
              <span className="gradient-text">Intelligenz neu gedacht</span>
              <br />
              <span className="text-foreground">– mit </span>
              <span className="gradient-text">IntelloMind</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              data-testid="text-hero-subtitle"
            >
              Automatisieren Sie Ihre Kommunikation mit smarten KI-Lösungen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="rounded-full px-8 py-6 text-base font-semibold btn-primary-gradient"
                data-testid="button-hero-cta-primary"
              >
                Jetzt Demo anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center min-h-[400px]"
          >
            <HeroOrbAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
