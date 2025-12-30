import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Calendar, MessageCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "KI-Anrufassistent",
    description:
      "Dein KI-Assistent nimmt Anrufe entgegen, berät Kunden und bucht direkte Termine. Professionelle Gespräche rund um die Uhr – auch wenn du schläfst.",
  },
  {
    icon: Calendar,
    title: "Intelligente Terminbuchung",
    description:
      "Termine buchen sich automatisch über alle Kalender-Plattformen hinweg. Keine Doppelbuchungen, keine verpassten Anfragen – alles läuft vollautomatisch.",
  },
  {
    icon: MessageCircle,
    title: "KI-Chat-Automatisierung",
    description:
      "Deine KI beantwortet automatisch alle Nachrichten auf WhatsApp, Instagram und Facebook. Kunden erhalten sofort professionelle Antworten – 24/7 ohne dein Zutun.",
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
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      data-testid="section-services"
    >
      <div className="absolute inset-0">
        <div className="bg-gradient-orb bg-gradient-orb-pink w-[500px] h-[500px] -bottom-40 -left-40 opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
            Was ist IntelloMind?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="gradient-text">Mehr als nur ein Tool</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Das intelligente Herz deines Unternehmens „IntelloMind" übernimmt alle Verkaufsaufgaben
            und lässt dein Business automatisch wachsen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Card
                className="p-8 h-full glass-card hover-float glow-border"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="rounded-full px-10 py-7 text-lg font-semibold hover-glow"
            data-testid="button-services-cta"
          >
            Jetzt selbst davon überzeugen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
