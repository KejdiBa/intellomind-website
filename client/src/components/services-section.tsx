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
    title: "AI Strategy Consulting",
    description:
      "Develop a comprehensive AI roadmap tailored to your business goals. We assess your current capabilities and chart a clear path to AI-powered success.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Cpu,
    title: "Machine Learning Solutions",
    description:
      "Build custom ML models that solve real business problems. From predictive analytics to computer vision, we create solutions that deliver measurable ROI.",
    color: "text-tech-green",
    bgColor: "bg-tech-green/10",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Deploy intelligent chatbots and virtual assistants that understand context and provide meaningful interactions with your customers 24/7.",
    color: "text-indigo",
    bgColor: "bg-indigo/10",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "Transform raw data into actionable insights. Our analytics solutions help you make data-driven decisions faster and with greater confidence.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description:
      "Automate repetitive tasks and streamline workflows with intelligent automation. Free your team to focus on high-value strategic work.",
    color: "text-tech-green",
    bgColor: "bg-tech-green/10",
  },
  {
    icon: Shield,
    title: "AI Governance & Ethics",
    description:
      "Implement responsible AI practices with robust governance frameworks. Ensure your AI systems are fair, transparent, and compliant.",
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            AI Solutions That Drive Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive AI consulting services designed to transform your
            business operations and create sustainable competitive advantages.
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
                  Learn More
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
