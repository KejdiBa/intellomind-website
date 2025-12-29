import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/abstract_blue_tech_gradient.png";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover rounded-full blur-3xl"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-primary font-medium mb-4 tracking-wide"
        >
          Künstliche Intelligenz für Ihr Unternehmen
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-[1.1] tracking-tight"
          data-testid="text-hero-title"
        >
          Erschließen Sie die Kraft der{" "}
          <span className="gradient-text">
            Künstlichen Intelligenz
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          data-testid="text-hero-subtitle"
        >
          IntelloMind liefert maßgeschneiderte KI-Lösungen für Ihre Geschäftsanforderungen.
          Von der Strategie bis zur Implementierung helfen wir Ihnen, KI für Wachstum und Innovation zu nutzen.
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
            className="rounded-full px-8 py-6 text-base font-medium"
            data-testid="button-hero-cta-primary"
          >
            Starten Sie Ihre KI-Reise
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#services")}
            className="rounded-full px-8 py-6 text-base font-medium"
            data-testid="button-hero-cta-secondary"
          >
            Leistungen entdecken
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "100+", label: "Projekte" },
            { value: "50+", label: "Kunden" },
            { value: "98%", label: "Zufriedenheit" },
            { value: "10+", label: "Jahre Erfahrung" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="text-3xl md:text-4xl font-semibold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
