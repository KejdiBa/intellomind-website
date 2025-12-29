import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import logoImage from "@assets/Logo_IntelloMind_1767046191762.jpg";
import { Linkedin, Twitter, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const footerLinks = {
  services: [
    { label: "KI-Strategieberatung", href: "#services" },
    { label: "Machine Learning Lösungen", href: "#services" },
    { label: "Konversations-KI", href: "#services" },
    { label: "Prozessautomatisierung", href: "#services" },
  ],
  company: [
    { label: "Über uns", href: "#about" },
    { label: "Unser Team", href: "#about" },
    { label: "Karriere", href: "#" },
    { label: "Blog", href: "#" },
  ],
  resources: [
    { label: "Fallstudien", href: "#" },
    { label: "Dokumentation", href: "#" },
    { label: "API-Referenz", href: "#" },
    { label: "Support", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Angemeldet!",
        description: "Vielen Dank für Ihre Newsletter-Anmeldung.",
      });
      setEmail("");
    }
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-navy text-white py-16" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <img
                src={logoImage}
                alt="IntelloMind"
                className="h-12 w-auto rounded-md"
              />
            </a>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Wir transformieren Unternehmen durch modernste KI-Lösungen.
              Wir helfen Firmen, die Kraft der künstlichen Intelligenz zu nutzen,
              um Innovation und Wachstum voranzutreiben.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-wrap gap-3">
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1 min-w-[200px]"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                className="bg-tech-green hover:bg-tech-green/90 text-white"
                data-testid="button-newsletter-subscribe"
              >
                Anmelden
              </Button>
            </form>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ressourcen</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">
            2024 IntelloMind. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
              data-testid="link-footer-privacy"
            >
              Datenschutz
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
              data-testid="link-footer-terms"
            >
              Nutzungsbedingungen
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover-elevate transition-colors"
                data-testid={`link-social-${social.label.toLowerCase()}`}
              >
                <social.icon className="w-5 h-5 text-white/80" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
