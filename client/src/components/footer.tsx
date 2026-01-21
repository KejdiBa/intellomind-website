import { Separator } from "@/components/ui/separator";
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
                    className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text transition-colors text-sm"
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
                    className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text transition-colors text-sm"
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
                      className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text transition-colors text-sm"
                      data-testid="button-cookie-settings"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text transition-colors text-sm"
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

        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-muted-foreground text-sm">
            © 2026 IntelloMind UG (haftungsbeschränkt). Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
