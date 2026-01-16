import { Separator } from "@/components/ui/separator";
import { Shield, Flag, CheckCircle } from "lucide-react";
import logoImage from "@assets/Logo_IntelloMind_1767046191762.jpg";

const footerLinks = {
  services: [
    { label: "KI-Telefonassistent", href: "#services" },
    { label: "KI-Chatbot", href: "#services" },
    { label: "KI-Mailbot", href: "#services" },
  ],
  company: [
    { label: "Über uns", href: "#about" },
    { label: "Kontakt", href: "#contact" },
  ],
  legal: [
    { label: "Datenschutz", href: "#" },
    { label: "Impressum", href: "#" },
    { label: "Cookie-Einstellungen", href: "#", isCookieSettings: true },
  ],
};

interface FooterProps {
  onOpenCookieSettings?: () => void;
}

export function Footer({ onOpenCookieSettings }: FooterProps) {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-border/30 py-16" data-testid="section-footer">
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
              Automatisieren Sie Ihre Kommunikation mit smarten KI-Lösungen.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Produkte</h4>
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
                  {link.isCookieSettings ? (
                    <button
                      onClick={onOpenCookieSettings}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-testid="button-cookie-settings"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-border/30 mb-8" />

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8">
          <div 
            className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border/50"
            data-testid="badge-trust-eu-ai-act"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
              <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">EU AI ACT</p>
              <p className="text-sm font-semibold text-foreground">KONFORM</p>
            </div>
          </div>

          <div 
            className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border/50"
            data-testid="badge-trust-made-in-germany"
          >
            <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-950 flex items-center justify-center">
              <Flag className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Software made in</p>
              <p className="text-sm font-semibold text-foreground">Germany</p>
            </div>
          </div>

          <div 
            className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border/50"
            data-testid="badge-trust-dsgvo"
          >
            <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-950 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">DSGVO</p>
              <p className="text-sm font-semibold text-foreground">KONFORM</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-muted-foreground text-sm">
            © 2026 IntelloMind UG (haftungsbeschränkt). Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
