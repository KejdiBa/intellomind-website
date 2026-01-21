import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, ArrowRight, Workflow } from "lucide-react";

const products = [
  {
    icon: Phone,
    title: "KI-Telefonassistent",
    subtitle: "24/7 intelligenter Kundenservice ohne Wartezeiten",
    description:
      "Rund um die Uhr erreichbar – ohne Wartezeiten. Unser intelligenter Telefonassistent beantwortet Kundenanfragen professionell und effizient.",
  },
  {
    icon: MessageSquare,
    title: "KI-Chatbot",
    subtitle: "Smarte Konversation für Website und App",
    description:
      "Smarte Konversation auf Ihrer Website oder App. Natürliche Dialogführung, die Ihre Kunden begeistert und Ihre Conversion-Rate steigert.",
  },
  {
    icon: Mail,
    title: "KI-Mailbot",
    subtitle: "Automatisierte E-Mail-Bearbeitung und Kundenservice",
    description:
      "Sekundenschnelle Antworten auf E-Mails. Intelligente E-Mail-Bearbeitung, die Ihren Kundenservice revolutioniert und Zeit spart.",
  },
  {
    icon: Workflow,
    title: "KI-Workflow-Automation",
    subtitle: "Integrierte KI-Workflows für Ihre Systeme",
    description:
      "End-to-End-Automatisierung Ihrer Geschäftsprozesse – intelligent, effizient und nahtlos integriert. Unsere KI-Workflow-Automation verbindet Telefon, Chat, E-Mail und Ihre bestehenden Systeme zu durchgängigen, automatisierten Abläufen. So reduzieren Sie manuelle Aufwände, beschleunigen Prozesse und schaffen maximale Effizienz.",
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
      className="py-24 md:py-32 bg-background/50 backdrop-blur-[2px] relative overflow-hidden"
      data-testid="section-services"
    >

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Unsere KI-Produkte</span>
            <br />
            <span className="text-foreground">für Ihre digitale Zukunft</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionäre AI-Technologie für moderne Unternehmen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Card
                className="p-6 h-full glass-card hover-float glow-border flex flex-col"
                data-testid={`card-product-${product.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div className="w-14 h-14 rounded-2xl icon-bubble-gradient flex items-center justify-center mb-5">
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                <p className="text-sm gradient-text mb-3">{product.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {product.description}
                </p>
                <Button
                  variant="ghost"
                  className="mt-4 w-fit p-0 text-purple-400 hover:text-purple-300"
                  onClick={scrollToContact}
                  data-testid={`button-product-${product.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  Mehr erfahren
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
