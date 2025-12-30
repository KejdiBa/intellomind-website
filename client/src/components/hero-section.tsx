import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-gradient-orb bg-gradient-orb-pink w-[600px] h-[600px] -top-40 -right-40" />
        <div className="bg-gradient-orb bg-gradient-orb-purple w-[500px] h-[500px] top-1/2 -left-40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight"
          data-testid="text-hero-title"
        >
          <span className="gradient-text">Hol dir</span>
          <br />
          <span className="gradient-text">KI-Power!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          data-testid="text-hero-subtitle"
        >
          IntelloMind transformiert dein Business durch fortschrittliche KI-Technologie.
          Automatisiere Prozesse, beantworte Nachrichten und steigere deinen Umsatz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="rounded-full px-10 py-7 text-lg font-semibold hover-glow"
            data-testid="button-hero-cta-primary"
          >
            Jetzt starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#services")}
            className="rounded-full px-10 py-7 text-lg font-semibold border-muted-foreground/30"
            data-testid="button-hero-cta-secondary"
          >
            Mehr erfahren
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
