import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import mockup1 from "@assets/image_1767056200323.png";
import mockup2 from "@assets/image_1767056236945.png";

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
        <div className="bg-gradient-orb bg-gradient-orb-purple w-[800px] h-[800px] -top-40 left-1/2 -translate-x-1/2 opacity-40" />
        <div className="bg-gradient-orb bg-gradient-orb-pink w-[500px] h-[500px] bottom-0 right-0 opacity-30" />
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
                className="rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-0"
                data-testid="button-hero-cta-primary"
              >
                Jetzt Demo anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute right-0 top-0 z-20"
              >
                <img
                  src={mockup1}
                  alt="IntelloMind App Login"
                  className="w-48 md:w-56 rounded-3xl shadow-2xl transform rotate-3"
                  data-testid="img-mockup-1"
                />
              </motion.div>
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                className="relative z-10 ml-0 mt-20"
              >
                <img
                  src={mockup2}
                  alt="IntelloMind Dashboard"
                  className="w-56 md:w-64 rounded-3xl shadow-2xl transform -rotate-6"
                  data-testid="img-mockup-2"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
