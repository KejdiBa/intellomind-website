import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const values = [
  {
    icon: Target,
    title: "Ergebnisorientiert",
    description: "Messbare Geschäftsergebnisse, nicht nur Technologie.",
  },
  {
    icon: Users,
    title: "Kundenorientiert",
    description: "Langfristige Partnerschaften auf Vertrauen aufgebaut.",
  },
  {
    icon: Award,
    title: "Exzellenz",
    description: "Höchste Standards von Strategie bis Umsetzung.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Immer an der Spitze der KI-Technologie.",
  },
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & KI-Strategin",
    initials: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    initials: "MR",
  },
  {
    name: "Emily Watson",
    role: "Leiterin ML-Engineering",
    initials: "EW",
  },
  {
    name: "David Kim",
    role: "Leiter Kundenerfolg",
    initials: "DK",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-card"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p className="text-primary font-medium mb-3">Über IntelloMind</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
              Wegweisende KI-Lösungen für moderne Unternehmen
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              IntelloMind wurde mit einer klaren Mission gegründet: KI zu demokratisieren und
              ihre transformative Kraft für Unternehmen jeder Größe zugänglich zu machen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wir glauben, dass KI menschliche Fähigkeiten erweitern sollte, nicht ersetzen.
              Unser Ansatz kombiniert modernste Technologie mit tiefem Branchenwissen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 bg-background border-border"
                data-testid={`card-value-${value.title.toLowerCase()}`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 tracking-tight">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            Unser Führungsteam
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise aus führenden Technologieunternehmen und Forschungseinrichtungen.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Card
                className="p-6 text-center hover-float bg-background border-border"
                data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-secondary text-foreground text-lg font-medium">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-foreground mb-1 tracking-tight">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
