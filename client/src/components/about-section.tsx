import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, Sparkles, CalendarCheck, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Verfügbarkeit",
    description: "Reagiert in Echtzeit auf Anfragen, 365 Tage im Jahr.",
  },
  {
    icon: Sparkles,
    title: "Lead Qualifizierung",
    description: "Steigert deine Abschlussquoten und beschleunigt dein Wachstum.",
  },
  {
    icon: CalendarCheck,
    title: "Auto Terminbuchungen",
    description: "Synchronisiert und bestätigt Termine automatisch über alle Kalender.",
  },
  {
    icon: TrendingUp,
    title: "Kosten- und Zeitersparnis",
    description: "Weniger manuelle Arbeit, geringere No-Show-Raten.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      data-testid="section-about"
    >
      <div className="absolute inset-0">
        <div className="bg-gradient-orb bg-gradient-orb-pink w-[500px] h-[500px] top-0 left-1/4 opacity-15" />
        <div className="bg-gradient-orb bg-gradient-orb-purple w-[400px] h-[400px] bottom-0 right-1/4 opacity-15" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
              Dein KI-Partner
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Mehr als nur ein Tool</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Das intelligente Herz deines Unternehmens „IntelloMind" übernimmt alle Verkaufsaufgaben
              und lässt dein Business automatisch wachsen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vergiss komplizierte Tools und zeitraubende Prozesse. IntelloMind ist wie ein erfahrener
              Geschäftsführer, der dein komplettes Kundenmanagement übernimmt – von der ersten Anfrage
              bis zum gebuchten Termin. Während du schläfst, arbeitet IntelloMind unermüdlich daran,
              dein Unternehmen erfolgreicher zu machen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <Card
                  className="p-6 glass-card hover-float glow-border h-full"
                  data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
