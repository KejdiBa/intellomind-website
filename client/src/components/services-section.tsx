import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  BarChart3,
  MessageSquare,
  Cog,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "KI-Strategieberatung",
    description:
      "Entwickeln Sie eine umfassende KI-Roadmap, die auf Ihre Geschäftsziele zugeschnitten ist.",
  },
  {
    icon: Cpu,
    title: "Machine Learning Lösungen",
    description:
      "Maßgeschneiderte ML-Modelle, die echte Geschäftsprobleme lösen – von prädiktiver Analytik bis Computer Vision.",
  },
  {
    icon: MessageSquare,
    title: "Konversations-KI",
    description:
      "Intelligente Chatbots und virtuelle Assistenten für sinnvolle Kundeninteraktionen rund um die Uhr.",
  },
  {
    icon: BarChart3,
    title: "Datenanalyse & BI",
    description:
      "Verwandeln Sie Rohdaten in umsetzbare Erkenntnisse für datengesteuerte Entscheidungen.",
  },
  {
    icon: Cog,
    title: "Prozessautomatisierung",
    description:
      "Automatisieren Sie wiederkehrende Aufgaben und befreien Sie Ihr Team für strategische Arbeit.",
  },
  {
    icon: Shield,
    title: "KI-Governance & Ethik",
    description:
      "Implementieren Sie verantwortungsvolle KI-Praktiken mit robusten Governance-Frameworks.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-background"
      data-testid="section-services"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">Unsere Leistungen</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            KI-Lösungen, die Ergebnisse liefern
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Umfassende KI-Beratungsleistungen, die Ihre Geschäftsabläufe transformieren
            und nachhaltige Wettbewerbsvorteile schaffen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Card
                className="p-8 h-full hover-float bg-card border-card-border"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
