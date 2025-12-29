import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable business outcomes, not just technology implementations.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships based on trust and transparency.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from strategy to execution.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of AI technology to bring you the most effective solutions.",
  },
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Chief AI Strategist",
    initials: "SC",
    color: "bg-primary",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    initials: "MR",
    color: "bg-tech-green",
  },
  {
    name: "Emily Watson",
    role: "Head of ML Engineering",
    initials: "EW",
    color: "bg-indigo",
  },
  {
    name: "David Kim",
    role: "Director of Client Success",
    initials: "DK",
    color: "bg-primary",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-background"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-tech-green/10 text-tech-green text-sm font-medium mb-4">
              About IntelloMind
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pioneering AI Solutions for Modern Enterprises
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              IntelloMind was founded with a clear mission: to democratize AI and make its
              transformative power accessible to businesses of all sizes. Our team of
              expert data scientists, engineers, and strategists brings decades of
              combined experience in artificial intelligence and machine learning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that AI should augment human capabilities, not replace them.
              Our approach combines cutting-edge technology with deep industry knowledge
              to create solutions that truly make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 bg-card border-card-border"
                data-testid={`card-value-${value.title.toLowerCase()}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Meet Our Leadership Team
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our diverse team brings together expertise from top tech companies,
            research institutions, and industry leaders.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="p-6 text-center hover-elevate bg-card border-card-border"
                data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className={`${member.color} text-white text-xl font-semibold`}>
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
