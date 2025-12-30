import { motion } from "framer-motion";
import { SiWhatsapp, SiOpenai, SiInstagram, SiFacebook, SiGoogle, SiSlack, SiZapier, SiNotion, SiHubspot, SiSalesforce } from "react-icons/si";

const integrations = [
  { icon: SiWhatsapp, name: "WhatsApp", color: "#25D366" },
  { icon: SiOpenai, name: "OpenAI", color: "#412991" },
  { icon: SiInstagram, name: "Instagram", color: "#E4405F" },
  { icon: SiFacebook, name: "Facebook", color: "#1877F2" },
  { icon: SiGoogle, name: "Google", color: "#4285F4" },
  { icon: SiSlack, name: "Slack", color: "#4A154B" },
  { icon: SiZapier, name: "Zapier", color: "#FF4A00" },
  { icon: SiNotion, name: "Notion", color: "#FFFFFF" },
  { icon: SiHubspot, name: "HubSpot", color: "#FF7A59" },
  { icon: SiSalesforce, name: "Salesforce", color: "#00A1E0" },
];

export function IntegrationsSection() {
  return (
    <section className="py-20 bg-background overflow-hidden" data-testid="section-integrations">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Überall integrierbar</span>
          </h2>
          <p className="text-muted-foreground">
            Nahtlose Verbindung zu allen wichtigen Plattformen
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-scroll-left">
          <div className="flex gap-12 px-6">
            {[...integrations, ...integrations].map((integration, index) => (
              <div
                key={`${integration.name}-${index}`}
                className="flex flex-col items-center gap-3 min-w-[100px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center border border-border/50 hover-float">
                  <integration.icon 
                    className="w-8 h-8" 
                    style={{ color: integration.color }}
                  />
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
