import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, MessageSquare, Mail, ArrowRight, Workflow } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const products = [
  {
    icon: Phone,
    title: "KI-Telefonassistent",
    subtitle: "24/7 intelligenter Kundenservice ohne Wartezeiten",
    description:
      "Rund um die Uhr erreichbar – ohne Wartezeiten. Unser intelligenter Telefonassistent beantwortet Kundenanfragen professionell und effizient.",
    href: "/ki-telefonassistent",
  },
  {
    icon: MessageSquare,
    title: "KI-Chatbot",
    subtitle: "Smarte Konversation für Website und App",
    description:
      "Smarte Konversation auf Ihrer Website oder App. Natürliche Dialogführung, die Ihre Kunden begeistert und Ihre Conversion-Rate steigert.",
    href: "/ki-chatbot",
  },
  {
    icon: Mail,
    title: "KI-Mailbot",
    subtitle: "Automatisierte E-Mail-Bearbeitung und Kundenservice",
    description:
      "Sekundenschnelle Antworten auf E-Mails. Intelligente E-Mail-Bearbeitung, die Ihren Kundenservice revolutioniert und Zeit spart.",
    href: "/ki-mailbot",
  },
  {
    icon: Workflow,
    title: "KI-Workflow-Automation",
    subtitle: "Integrierte KI-Workflows für Ihre Systeme",
    description:
      "End-to-End-Automatisierung Ihrer Geschäftsprozesse – intelligent, effizient und nahtlos integriert. Unsere KI-Workflow-Automation verbindet Telefon, Chat, E-Mail und Ihre bestehenden Systeme zu durchgängigen, automatisierten Abläufen.",
    href: "/ki-workflow-automation",
  },
];

const staggerDelays = ["delay-100", "delay-200", "delay-300", "delay-400"];

export function ServicesSection() {
  const { ref: sectionRef, isVisible } = useInView();

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background/50 backdrop-blur-[2px] relative overflow-hidden"
      data-testid="section-services"
    >

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 fade-in-up${isVisible ? " is-visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Unsere KI-Produkte</span>
            <br />
            <span className="text-foreground">für Ihre digitale Zukunft</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionäre AI-Technologie für moderne Unternehmen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {products.map((product, i) => (
            <div
              key={product.title}
              className={`fade-in-up ${staggerDelays[i]}${isVisible ? " is-visible" : ""}`}
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
                <Link href={product.href}>
                  <Button
                    size="sm"
                    className="mt-4 w-fit bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white border-transparent"
                    data-testid={`button-product-${product.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
