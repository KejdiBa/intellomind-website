import { Card } from "@/components/ui/card";
import { Clock, Target, CalendarCheck, Zap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const cardDelays = ["delay-200", "delay-300", "delay-400", "delay-500"];

const benefits = [
  {
    icon: Clock,
    title: "24/7 erreichbar",
    description: "Antwortet in Echtzeit – an 365 Tagen im Jahr.",
  },
  {
    icon: Target,
    title: "Smarte Lead-Qualifizierung",
    description: "Filtert relevante Anfragen, erhöht die Abschlussquote und beschleunigt den Verkaufsprozess.",
  },
  {
    icon: CalendarCheck,
    title: "Automatische Terminbuchung",
    description: "Koordiniert, synchronisiert und bestätigt Termine vollautomatisch über alle Kalender.",
  },
  {
    icon: Zap,
    title: "Zeit & Kosten sparen",
    description: "Weniger manuelle Arbeit, weniger No-Shows, mehr Fokus auf das Wesentliche.",
  },
];

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useInView();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background/50 backdrop-blur-[2px] relative overflow-hidden"
      data-testid="section-about"
    >

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`fade-in-up${isVisible ? " is-visible" : ""}`}>
            <p className="gradient-text font-semibold mb-3 tracking-wide uppercase text-sm">
              Dein KI-Partner fürs Wachstum
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Mehr als nur Software</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              IntelloMind ist nicht einfach Software – es ist das intelligente Herz deines Unternehmens.
              Die KI übernimmt deine Verkaufs- und Kundenprozesse automatisch und sorgt dafür, dass dein 
              Business strukturiert und nachhaltig wächst.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Keine komplizierten Systeme, keine unnötigen Klicks: IntelloMind begleitet deine Kunden 
              von der ersten Anfrage bis zum gebuchten Termin – zuverlässig, effizient und rund um die Uhr. 
              Während du dich auf dein Kerngeschäft konzentrierst (oder abschaltest), arbeitet IntelloMind 
              im Hintergrund an neuen Leads, besseren Abschlüssen und höherer Auslastung.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`fade-in-up ${cardDelays[i]}${isVisible ? " is-visible" : ""}`}
              >
                <Card
                  className="p-5 glass-card hover-float glow-border h-full"
                  data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`}
                >
                  <div className="w-11 h-11 rounded-xl icon-bubble-gradient flex items-center justify-center mb-4">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-sm">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
