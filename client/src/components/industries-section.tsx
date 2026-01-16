import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Scale, 
  Stethoscope, 
  Wrench, 
  Scissors, 
  Utensils, 
  ShoppingCart,
  GraduationCap,
  Home,
  Dumbbell,
  Building2
} from "lucide-react";

const industries = [
  {
    icon: Scale,
    title: "Anwaltskanzleien",
    features: ["Erstberatungstermine qualifizieren", "Mandantenunterlagen sammeln", "Fristenerinnerungen automatisieren"],
  },
  {
    icon: Stethoscope,
    title: "Arztpraxen",
    features: ["Automatische Terminbuchung", "Vorqualifizierung von Notfällen", "Rückruf-Management"],
  },
  {
    icon: Wrench,
    title: "Handwerker",
    features: ["Notfälle priorisieren", "Kostenvoranschläge erstellen", "Garantieleistungen verwalten"],
  },
  {
    icon: Scissors,
    title: "Friseursalons",
    features: ["Online-Terminbuchung", "Stylist-Auswahl", "Produktempfehlungen"],
  },
  {
    icon: Utensils,
    title: "Restaurants",
    features: ["Tischreservierungen", "Allergien erfassen", "Takeaway-Bestellungen"],
  },
  {
    icon: ShoppingCart,
    title: "Online Shops",
    features: ["Produktberatung", "Bestellstatus-Tracking", "Retourenabwicklung"],
  },
  {
    icon: GraduationCap,
    title: "Coaching/Beratung",
    features: ["Bedarfsanalyse", "Pakete erklären", "Fortschrittsmessung"],
  },
  {
    icon: Home,
    title: "Immobilienmakler",
    features: ["Besichtigungstermine", "Interessenten qualifizieren", "Follow-up Nachrichten"],
  },
  {
    icon: Dumbbell,
    title: "Fitnessstudios",
    features: ["Probetraining-Buchungen", "Mitgliedschaftsberatung", "Kursanmeldungen"],
  },
  {
    icon: Building2,
    title: "Reinigungsdienste",
    features: ["Auftragserfassung", "Reinigungsumfang kalkulieren", "Regelmäßige Termine"],
  },
];

export function IndustriesSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-background/50 backdrop-blur-[2px] relative overflow-hidden" data-testid="section-industries">

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Für wen ist </span>
            <span className="gradient-text">IntelloMind</span>
            <span className="text-foreground"> geeignet?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Egal ob Dienstleistung, Handel oder Beratung – IntelloMind integriert sich nahtlos
            in die unterschiedlichsten Branchen und Geschäftsmodelle.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Card
                className="p-5 h-full glass-card hover-float glow-border"
                data-testid={`card-industry-${industry.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`}
              >
                <div className="w-10 h-10 rounded-xl icon-bubble-gradient flex items-center justify-center mb-4">
                  <industry.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-3 text-sm">
                  {industry.title}
                </h3>
                <ul className="space-y-1.5">
                  {industry.features.map((feature, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            <span className="font-semibold text-foreground">+100 weitere Branchen</span> möglich
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="rounded-full px-10 py-7 text-lg font-semibold btn-primary-gradient hover-glow"
            data-testid="button-industries-cta"
          >
            Ich will es testen
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
