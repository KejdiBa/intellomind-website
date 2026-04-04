import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { CookieBanner } from "@/components/cookie-banner";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";

const gradientHeading =
  "text-lg font-semibold mb-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent";
const card =
  "bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm";
const body = "text-foreground/80 leading-relaxed text-sm";
const subheading = "font-semibold text-foreground mt-5 mb-2 text-sm";
const listClass = "list-disc list-outside ml-5 space-y-1 text-sm text-foreground/80";

const emailLink = (
  <a
    href="mailto:info@intellomind.ai"
    className="font-medium text-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text transition-colors"
    data-testid="link-leistungsbeschreibung-email"
  >
    info@intellomind.ai
  </a>
);

export default function Leistungsbeschreibung() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  useMetaTags(
    "Leistungsbeschreibung – IntelloMind",
    "Vollständige Leistungsbeschreibung für KI-Chatbots, KI-E-Mail-Assistenten und KI-Telefonassistenten von IntelloMind."
  );

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation isSubPage />
      <main className="relative z-10 pt-32 pb-24 px-6 text-[10px]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
            data-testid="link-back-home"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Zurück zur Startseite
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Leistungsbeschreibung – IntelloMind
              </span>
            </h1>
            <p className="text-muted-foreground text-base">
              Stand: 06.03.2026
            </p>
          </div>

          <div className="space-y-10">
            {/* 1. Gegenstand der Leistungen */}
            <section id="lb-1" className={card} data-testid="section-leistungsbeschreibung-1">
              <h2 className={gradientHeading}>1. Gegenstand der Leistungen (Scope of Services)</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  IntelloMindAI ist eine cloudbasierte Software-as-a-Service (SaaS) Plattform zur
                  Erstellung und Nutzung KI-gestützter Kommunikationsassistenten.
                </p>
                <p>
                  Die Plattform ermöglicht es Kunden, KI-basierte Assistenten für Chat- und
                  E-Mail-Kommunikation zu konfigurieren und einzusetzen.
                </p>
                <p>Die Plattform stellt insbesondere folgende Funktionen bereit.</p>

                <h3 className={subheading}>KI-Chatbots</h3>
                <p>Kunden können innerhalb der Plattform KI-gestützte Chatbots erstellen.</p>
                <p>
                  Die Konfiguration erfolgt durch Eingabe eines Systemprompts, der das Verhalten
                  und die Antworten des Chatbots definiert.
                </p>
                <p>
                  Für jeden Chatbot kann ein Chat-Widget generiert werden, das über einen
                  Embed-Code auf der eigenen Website des Kunden eingebunden werden kann.
                </p>
                <p>
                  Website-Besucher können anschließend über dieses Chat-Widget mit dem
                  KI-Chatbot kommunizieren.
                </p>

                <h3 className={subheading}>KI-E-Mail-Assistenten</h3>
                <p>
                  Kunden können innerhalb der Plattform KI-gestützte E-Mail-Assistenten erstellen.
                </p>
                <p>
                  Der Kunde kann eine eigene E-Mail-Domain mit dem E-Mail-Assistenten verknüpfen.
                </p>
                <p>
                  Eingehende E-Mails werden durch den KI-Assistenten verarbeitet und es wird eine
                  KI-generierte Antwort erstellt, die über die E-Mail-Adresse des Kunden
                  versendet werden kann.
                </p>
                <p>
                  Die Konfiguration des Assistenten erfolgt ebenfalls über einen Systemprompt,
                  der das Verhalten der KI steuert.
                </p>

                <h3 className={subheading}>Konfiguration über Systemprompts</h3>
                <p>
                  Die Anpassung der KI-Assistenten erfolgt ausschließlich über Systemprompts, die
                  durch den Kunden innerhalb der Plattform definiert werden.
                </p>
                <p>Weitere Konfigurationsmöglichkeiten, wie z. B.:</p>
                <ul className={listClass}>
                  <li>Integration externer Datenquellen</li>
                  <li>Anbindung externer Systeme</li>
                  <li>API-Integrationen</li>
                </ul>
                <p>sind nicht Bestandteil der Standardfunktionalität der Plattform.</p>
              </div>
            </section>

            {/* 2. Telefonassistenten über Drittanbieter */}
            <section id="lb-2" className={card} data-testid="section-leistungsbeschreibung-2">
              <h2 className={gradientHeading}>2. Telefonassistenten über Drittanbieter (Fonio AI)</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  IntelloMind ist Vertriebspartner des Dienstes Fonio AI, der KI-gestützte
                  Telefonassistenten bereitstellt.
                </p>
                <p>
                  Telefonassistenten werden über die Plattform von Fonio AI erstellt und betrieben.
                </p>
                <p>
                  Optional kann eine technische Verbindung zwischen einem
                  Fonio-Telefonassistenten und der IntelloMind AI Plattform hergestellt werden.
                </p>
                <p>
                  Hierbei können über eine Webhook-Verbindung ausgewählte Gesprächsdaten in die
                  IntelloMind AI Plattform übertragen werden.
                </p>
                <p>Dies umfasst insbesondere:</p>
                <ul className={listClass}>
                  <li>Gesprächsverlauf</li>
                  <li>Gesprächstranskript</li>
                  <li>KI-generierte Gesprächszusammenfassung</li>
                  <li>Audiodatei des Gesprächs</li>
                </ul>
                <p>
                  Die Erstellung, Bereitstellung und der Betrieb der Telefonassistenten erfolgen
                  ausschließlich über die Infrastruktur von Fonio AI.
                </p>
                <p>
                  IntelloMind übernimmt keine Verantwortung für die technische Verfügbarkeit
                  oder Funktionsfähigkeit der Fonio-Dienste.
                </p>
              </div>
            </section>

            {/* 3. Individuelle Projektleistungen */}
            <section id="lb-3" className={card} data-testid="section-leistungsbeschreibung-3">
              <h2 className={gradientHeading}>3. Individuelle Projektleistungen</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Neben der Nutzung der SaaS-Plattform kann IntelloMind zusätzliche
                  projektbezogene Leistungen erbringen.
                </p>
                <p>Hierzu können insbesondere gehören:</p>
                <ul className={listClass}>
                  <li>Beratung zur Nutzung von KI-Assistenten</li>
                  <li>Unterstützung bei der Erstellung von Systemprompts</li>
                  <li>individuelle Konfiguration von KI-Assistenten</li>
                  <li>Analyse und Optimierung bestehender Kommunikationsprozesse</li>
                </ul>
                <p>
                  Der konkrete Umfang solcher Projektleistungen wird jeweils gesondert im Rahmen
                  eines individuellen Angebots oder Projektvertrags vereinbart.
                </p>
                <p>
                  Projektleistungen sind nicht Bestandteil der Standard-SaaS-Leistung, sofern
                  sie nicht ausdrücklich vereinbart wurden.
                </p>
              </div>
            </section>

            {/* 4. Technische Bereitstellung */}
            <section id="lb-4" className={card} data-testid="section-leistungsbeschreibung-4">
              <h2 className={gradientHeading}>4. Technische Bereitstellung</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>Die Software wird als cloudbasierter Dienst bereitgestellt.</p>
                <p>
                  Der Zugriff erfolgt über eine webbasierte Benutzeroberfläche. Eine lokale
                  Installation ist nicht erforderlich.
                </p>
                <p>
                  Für die Nutzung der Plattform ist eine stabile Internetverbindung erforderlich.
                </p>
                <p>
                  Die Plattform unterstützt die jeweils aktuellen Versionen der folgenden
                  Webbrowser:
                </p>
                <ul className={listClass}>
                  <li>Google Chrome</li>
                  <li>Mozilla Firefox</li>
                  <li>Apple Safari</li>
                  <li>Microsoft Edge</li>
                </ul>
                <p>
                  Für eine optimale Nutzung wird eine Bildschirmauflösung von mindestens
                  1280 × 720 Pixeln empfohlen.
                </p>
              </div>
            </section>

            {/* 5. Verfügbarkeit und Performance */}
            <section id="lb-5" className={card} data-testid="section-leistungsbeschreibung-5">
              <h2 className={gradientHeading}>5. Verfügbarkeit und Performance</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>IntelloMind strebt eine hohe Zuverlässigkeit der Plattform an.</p>

                <h3 className={subheading}>Zielverfügbarkeit</h3>
                <p>
                  Die Plattform weist eine angestrebte Verfügbarkeit von 99,0 % im Jahresmittel
                  auf.
                </p>
                <p>Von dieser Zielverfügbarkeit ausgenommen sind insbesondere:</p>
                <ul className={listClass}>
                  <li>geplante Wartungsarbeiten</li>
                  <li>Störungen außerhalb des Einflussbereichs des Anbieters</li>
                  <li>Ausfälle von Drittanbietern</li>
                  <li>höhere Gewalt</li>
                </ul>

                <h3 className={subheading}>Wartungsfenster</h3>
                <p>
                  Planmäßige Wartungsarbeiten können regelmäßig sonntags zwischen 02:00 Uhr und
                  05:00 Uhr (MEZ/MESZ) erfolgen.
                </p>
                <p>
                  Während dieser Zeit kann es zu vorübergehenden Einschränkungen der Plattform
                  kommen.
                </p>
              </div>
            </section>

            {/* 6. Datensicherheit und Hosting */}
            <section id="lb-6" className={card} data-testid="section-leistungsbeschreibung-6">
              <h2 className={gradientHeading}>6. Datensicherheit und Hosting</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>Der Schutz der Kundendaten hat hohe Priorität.</p>
                <p>
                  Alle Datenverarbeitungen erfolgen unter Berücksichtigung der geltenden
                  datenschutzrechtlichen Bestimmungen, insbesondere der
                  Datenschutz-Grundverordnung (DSGVO).
                </p>

                <h3 className={subheading}>Serverstandort</h3>
                <p>
                  Das Hosting der Plattform erfolgt auf Serverinfrastruktur in Rechenzentren
                  innerhalb der Europäischen Union, insbesondere in Rechenzentren in Frankfurt
                  am Main (Deutschland).
                </p>

                <h3 className={subheading}>Verschlüsselung</h3>
                <p>
                  Die Datenübertragung zwischen Nutzer und Plattform erfolgt ausschließlich
                  verschlüsselt über HTTPS (TLS).
                </p>

                <h3 className={subheading}>Backups</h3>
                <p>Systemdaten werden regelmäßig automatisiert gesichert.</p>
              </div>
            </section>

            {/* 7. Support und Onboarding */}
            <section id="lb-7" className={card} data-testid="section-leistungsbeschreibung-7">
              <h2 className={gradientHeading}>7. Support und Onboarding</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>IntelloMind unterstützt Kunden bei der Nutzung der Plattform.</p>

                <h3 className={subheading}>Support</h3>
                <p>Supportanfragen können über folgende Kanäle gestellt werden:</p>
                <ul className={listClass}>
                  <li>Supportsystem innerhalb der Plattform</li>
                  <li>E-Mail: {emailLink}</li>
                </ul>

                <h3 className={subheading}>Dokumentation</h3>
                <p>
                  Innerhalb der Plattform können Dokumentationen und Nutzungshinweise zur
                  Verfügung gestellt werden.
                </p>

                <h3 className={subheading}>Onboarding</h3>
                <p>
                  Kunden erhalten Zugang zu einem standardisierten Onboarding-Prozess innerhalb
                  der Plattform.
                </p>
                <p>
                  Individuelle Schulungen oder persönliche Implementierungsleistungen sind nicht
                  Bestandteil der Standard-SaaS-Leistung.
                </p>
              </div>
            </section>

            {/* 8. Leistungsgrenzen und Haftungsausschlüsse */}
            <section id="lb-8" className={card} data-testid="section-leistungsbeschreibung-8">
              <h2 className={gradientHeading}>8. Leistungsgrenzen und Haftungsausschlüsse</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <h3 className={subheading}>KI-generierte Inhalte</h3>
                <p>Die Plattform nutzt KI-Modelle zur Generierung von Antworten.</p>
                <p>
                  Aufgrund der Funktionsweise solcher Systeme kann keine Gewähr für die
                  inhaltliche Richtigkeit, Vollständigkeit oder Angemessenheit der generierten
                  Inhalte übernommen werden.
                </p>
                <p>
                  Der Kunde ist verpflichtet, generierte Inhalte vor ihrer Verwendung
                  eigenständig zu prüfen.
                </p>

                <h3 className={subheading}>Verantwortung für Inhalte</h3>
                <p>
                  Der Kunde ist verantwortlich für die Inhalte, die über die Plattform
                  verarbeitet oder generiert werden.
                </p>

                <h3 className={subheading}>Drittanbieter-Dienste</h3>
                <p>
                  Die Plattform kann Dienste externer Anbieter nutzen, insbesondere
                  KI-Modellanbieter oder Dienste von Fonio AI.
                </p>
                <p>
                  Für die Verfügbarkeit oder Funktionsfähigkeit dieser Dienste übernimmt
                  IntelloMind keine Gewähr.
                </p>
              </div>
            </section>

            {/* 9. Mitwirkungspflichten des Kunden */}
            <section id="lb-9" className={card} data-testid="section-leistungsbeschreibung-9">
              <h2 className={gradientHeading}>9. Mitwirkungspflichten des Kunden</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>Der Kunde ist verpflichtet,</p>
                <ul className={listClass}>
                  <li>die Plattform nur im Rahmen geltender Gesetze zu nutzen</li>
                  <li>
                    keine rechtswidrigen oder missbräuchlichen Inhalte über die Plattform zu
                    verarbeiten
                  </li>
                  <li>
                    eigene Konfigurationen der KI-Assistenten vor produktivem Einsatz zu testen
                  </li>
                  <li>Zugangsdaten vertraulich zu behandeln</li>
                </ul>
              </div>
            </section>

            {/* 10. Weiterentwicklung der Plattform */}
            <section id="lb-10" className={card} data-testid="section-leistungsbeschreibung-10">
              <h2 className={gradientHeading}>10. Weiterentwicklung der Plattform</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>IntelloMind entwickelt die Plattform kontinuierlich weiter.</p>
                <p>Der Anbieter behält sich vor:</p>
                <ul className={listClass}>
                  <li>Funktionen anzupassen</li>
                  <li>neue Funktionen einzuführen</li>
                  <li>bestehende Funktionen zu verändern oder einzustellen</li>
                </ul>
                <p>
                  Der konkrete Leistungsumfang richtet sich jeweils nach dem gebuchten
                  Abonnement.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer onOpenCookieSettings={() => setShowCookieSettings(true)} />
      <CookieBanner
        forceOpen={showCookieSettings}
        onClose={() => setShowCookieSettings(false)}
      />
    </div>
  );
}
