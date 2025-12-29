import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  BarChart3,
  MessageSquare,
  Cog,
  Shield,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "KI-Strategieberatung",
    description:
      "Entwickeln Sie eine umfassende KI-Roadmap, die auf Ihre Geschäftsziele zugeschnitten ist. Wir analysieren Ihre aktuellen Fähigkeiten und zeigen einen klaren Weg zum KI-gestützten Erfolg auf.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Cpu,
    title: "Machine Learning Lösungen",
    description:
      "Entwicklung maßgeschneiderter ML-Modelle, die echte Geschäftsprobleme lösen. Von prädiktiver Analytik bis Computer Vision erstellen wir Lösungen mit messbarem ROI.",
    color: "text-tech-green",
    bgColor: "bg-tech-green/10",
  },
  {
    icon: MessageSquare,
    title: "Konversations-KI",
    description:
      "Implementieren Sie intelligente Chatbots und virtuelle Assistenten, die Kontext verstehen und Ihren Kunden rund um die Uhr sinnvolle Interaktionen bieten.",
    color: "text-indigo",
    bgColor: "bg-indigo/10",
  },
  {
    icon: BarChart3,
    title: "Datenanalyse & BI",
    description:
      "Verwandeln Sie Rohdaten in umsetzbare Erkenntnisse. Unsere Analyselösungen helfen Ihnen, datengesteuerte Entscheidungen schneller und mit größerer Sicherheit zu treffen.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Cog,
    title: "Prozessautomatisierung",
    description:
      "Automatisieren Sie wiederkehrende Aufgaben und optimieren Sie Arbeitsabläufe mit intelligenter Automatisierung. Befreien Sie Ihr Team für wertschöpfende strategische Arbeit.",
    color: "text-tech-green",
    bgColor: "bg-tech-green/10",
  },
  {
    icon: Shield,
    title: "KI-Governance & Ethik",
    description:
      "Implementieren Sie verantwortungsvolle KI-Praktiken mit robusten Governance-Frameworks. Stellen Sie sicher, dass Ihre KI-Systeme fair, transparent und konform sind.",
    color: "text-indigo",
    bgColor: "bg-indigo/10",
  },
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-soft-grey dark:bg-background"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            KI-Lösungen, die Ergebnisse liefern
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Wir bieten umfassende KI-Beratungsleistungen, die Ihre Geschäftsabläufe
            transformieren und nachhaltige Wettbewerbsvorteile schaffen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="p-8 h-full hover-elevate bg-card border-card-border transition-shadow duration-300"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6`}
                >
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 font-medium"
                  onClick={scrollToContact}
                  data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
