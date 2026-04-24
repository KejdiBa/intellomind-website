import { Card } from "@/components/ui/card";
import { Clock, TrendingDown, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    value: "24/7",
    label: "ohne Pause",
    description: "Rund um die Uhr verfügbar",
  },
  {
    icon: TrendingDown,
    value: "Ausgaben",
    label: "senken",
    description: "Weniger Personalkosten",
  },
  {
    icon: TrendingUp,
    value: "Umsatz",
    label: "steigern",
    description: "Mehr Abschlüsse",
  },
  {
    icon: Zap,
    value: "Abläufe",
    label: "skalieren",
    description: "Unbegrenztes Wachstum",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background/50 backdrop-blur-[2px] relative overflow-hidden" data-testid="section-features">

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Die Zukunft </span>
            <span className="gradient-text">heute nutzen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verwandle dein Business in eine Erfolgsmaschine, die niemals schläft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.value}>
              <Card
                className="p-8 text-center glass-card hover-float glow-border h-full"
                data-testid={`card-feature-${feature.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-14 h-14 rounded-2xl icon-bubble-gradient flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {feature.value}
                </div>
                <div className="text-lg font-semibold gradient-text mb-2">
                  {feature.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
