import { Separator } from "@/components/ui/separator";
import logoImage from "@assets/Logo_IntelloMind_1767046191762.jpg";
import { Linkedin, Instagram } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const footerLinks = {
  services: [
    { label: "KI-Anrufassistent", href: "#services" },
    { label: "Terminbuchung", href: "#services" },
    { label: "Chat-Automatisierung", href: "#services" },
  ],
  company: [
    { label: "Über uns", href: "#about" },
    { label: "Kontakt", href: "#contact" },
  ],
  legal: [
    { label: "Datenschutz", href: "#" },
    { label: "Impressum", href: "#" },
    { label: "Cookie-Richtlinie", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: SiWhatsapp, href: "#", label: "WhatsApp" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border/30 py-16" data-testid="section-footer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <img
                src={logoImage}
                alt="IntelloMind"
                className="h-10 w-auto rounded-lg"
              />
              <span className="font-bold text-xl text-foreground">IntelloMind</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformiere dein Business durch fortschrittliche KI-Technologie.
              Automatisiere Prozesse und steigere deinen Umsatz.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-border/30 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            2024 IntelloMind. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                data-testid={`link-social-${social.label.toLowerCase()}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
