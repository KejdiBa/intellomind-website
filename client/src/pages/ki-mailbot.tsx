import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { CookieBanner } from "@/components/cookie-banner";
import { useState } from "react";
import { ChevronLeft, Mail, Zap, Brain, GitBranch, Sliders, Paperclip, RefreshCw, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useMetaTags } from "@/hooks/use-meta-tags";

const features = [
  {
    icon: Zap,
    title: "Sekundenschnelle Antworten",
    description: "Jede eingehende E-Mail wird innerhalb von Sekunden analysiert und beantwortet – Ihre Kunden erleben eine Reaktionszeit, die kein menschliches Team leisten kann.",
  },
  {
    icon: Brain,
    title: "Kontextverständnis",
    description: "Der Mailbot versteht den Inhalt und die Absicht jeder E-Mail, erkennt Tonalität und Dringlichkeit und antwortet passend – nicht nach stumpfen Regeln, sondern intelligent.",
  },
  {
    icon: GitBranch,
    title: "Automatische Weiterleitung",
    description: "Komplexe Anfragen, Beschwerden oder VIP-Kunden werden automatisch an den zuständigen Mitarbeiter weitergeleitet – mit Zusammenfassung und Kontext.",
  },
  {
    icon: Sliders,
    title: "Tonalitätsanpassung",
    description: "Antwortet im Stil Ihres Unternehmens – ob förmlich, freundlich oder technisch. Die Stimme Ihrer Marke bleibt immer konsistent.",
  },
  {
    icon: Paperclip,
    title: "Anhang-Erkennung",
    description: "Erkennt und verarbeitet Anhänge wie Rechnungen, Bestellungen oder Formulare und reagiert darauf kontextbezogen ohne manuelle Prüfung.",
  },
  {
    icon: RefreshCw,
    title: "CRM-Synchronisation",
    description: "Alle E-Mail-Interaktionen werden automatisch in Ihr CRM-System gespielt – lückenlose Dokumentation ohne manuellen Aufwand.",
  },
];

const useCases = [
  {
    title: "Online Shops & E-Commerce",
    description: "Beantwortet automatisch Anfragen zu Bestellstatus, Versand, Retouren und Produkten. Reduziert das Support-Volumen um bis zu 80 % – ohne Qualitätsverlust.",
  },
  {
    title: "Anwaltskanzleien",
    description: "Mandantenanfragen werden sofort bestätigt, vorsortiert und mit einer Ersteinschätzung beantwortet. Ihr Team erhält strukturierte Zusammenfassungen statt ungeordneter Postfächer.",
  },
  {
    title: "Arztpraxen & medizinische Einrichtungen",
    description: "Terminanfragen, Rezeptbestellungen und allgemeine Fragen werden automatisch bearbeitet. Das Praxisteam wird spürbar entlastet und kann sich auf Patienten konzentrieren.",
  },
  {
    title: "B2B-Unternehmen & Dienstleister",
    description: "Angebots- und Bestellanfragen werden ausgelesen, klassifiziert und mit dem richtigen Ansprechpartner verknüpft – Ihre Reaktionszeit wird zum Wettbewerbsvorteil.",
  },
];

const faqs = [
  {
    q: "Wie lernt der KI-Mailbot, für mein Unternehmen zu antworten?",
    a: "Wir trainieren den Mailbot auf Basis Ihrer häufigsten E-Mail-Themen, Ihrer Unternehmenssprache und Ihrer Prozesse. Typischerweise liefern Sie uns eine Auswahl bisheriger E-Mails und Antworten – wir konfigurieren den Rest. Anpassungen sind jederzeit möglich.",
  },
  {
    q: "Was passiert, wenn eine E-Mail zu komplex ist?",
    a: "Wenn der Mailbot nicht sicher ist oder die E-Mail sensibel ist (z. B. Beschwerden, rechtliche Anfragen), leitet er sie automatisch an einen Mitarbeiter weiter – inklusive Zusammenfassung und Handlungsempfehlung. Nichts geht verloren.",
  },
  {
    q: "Kann der Mailbot in mein bestehendes E-Mail-System integriert werden?",
    a: "Ja. Der IntelloMind-Mailbot lässt sich nahtlos in Google Workspace (Gmail), Microsoft Outlook 365 und andere gängige E-Mail-Systeme integrieren. Die Einrichtung dauert in der Regel wenige Tage.",
  },
  {
    q: "Ist der Mailbot DSGVO-konform?",
    a: "Ja, vollständig. Alle Daten werden auf deutschen Servern verarbeitet, nicht an Dritte weitergegeben und gemäß DSGVO gespeichert. Sie erhalten auf Wunsch einen Auftragsverarbeitungsvertrag (AVV).",
  },
];

export default function KiMailbot() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useMetaTags(
    "KI-Mailbot – Automatische E-Mail-Beantwortung | IntelloMind",
    "Sekundenschnelle KI-E-Mail-Antworten für Ihr Unternehmen. Reduzieren Sie E-Mail-Aufwand um bis zu 80% mit IntelloMind. DSGVO-konform. Jetzt Demo buchen."
  );

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation isSubPage />
      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
            data-testid="link-back-home"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Zurück zur Startseite
          </Link>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm font-medium mb-6">
              <Mail className="h-4 w-4" />
              KI-Mailbot
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Der KI-Mailbot
              </span>
              <br />
              <span className="text-foreground">E-Mails in Sekunden beantworten</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Aufwand auf null reduzieren. IntelloMind's KI-Mailbot liest, versteht und beantwortet
              eingehende E-Mails automatisch – im Stil Ihres Unternehmens, DSGVO-konform und
              rund um die Uhr verfügbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-hero-cta"
              >
                Demo buchen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/preise"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/60 text-foreground font-semibold hover:bg-card transition-colors"
                data-testid="button-hero-preise"
              >
                Preise ansehen
              </a>
            </div>
          </motion.div>

          {/* Was ist es */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm mb-12"
            data-testid="section-was-ist"
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Was ist ein KI-Mailbot?
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ein KI-Mailbot ist ein intelligenter E-Mail-Assistent, der eingehende Nachrichten
              vollautomatisch liest, analysiert und beantwortet. Er versteht den Inhalt jeder E-Mail,
              erkennt die Absicht des Absenders und formuliert passende Antworten – in Ihrer
              Unternehmenssprache und mit Ihrem gewünschten Ton.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              IntelloMind's KI-Mailbot reduziert den E-Mail-Aufwand Ihres Teams um bis zu 80 %.
              Standardanfragen, Bestellbestätigungen, Terminanfragen und Support-Tickets werden
              ohne menschliches Zutun bearbeitet. Komplexe oder sensible E-Mails werden intelligent
              weitergeleitet – mit Kontext und Handlungsempfehlung für Ihren Mitarbeiter.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Was Ihr KI-Mailbot kann
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-sm hover:border-purple-500/30 transition-colors"
                  data-testid={`card-feature-${i}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <f.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Für welche Branchen?
              </span>
            </h2>
            <div className="space-y-4">
              {useCases.map((uc, i) => (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-sm flex gap-4"
                  data-testid={`card-usecase-${i}`}
                >
                  <CheckCircle2 className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Und viele mehr */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-4 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              data-testid="card-und-viele-mehr"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                <span className="text-white text-lg font-bold">+</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground mb-1">… und viele weitere Branchen</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ihre Branche ist nicht dabei? Kein Problem. Unser KI-Mailbot lässt sich
                  flexibel an nahezu jeden Anwendungsfall anpassen – egal ob Handwerk, Logistik,
                  Bildung oder eine ganz andere Branche. Sprechen Sie uns einfach an.
                </p>
              </div>
              <a
                href="/#contact"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                data-testid="link-und-viele-mehr-cta"
              >
                Demo buchen
              </a>
            </motion.div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Häufige Fragen
              </span>
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl shadow-sm overflow-hidden"
                  data-testid={`faq-${i}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-muted/20 transition-colors"
                    data-testid={`faq-toggle-${i}`}
                  >
                    <span className="font-semibold text-foreground">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-10 text-center"
            data-testid="section-cta"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Schluss mit dem E-Mail-Chaos.
            </h2>
            <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
              Vereinbaren Sie jetzt eine kostenlose Demo und sehen Sie, wie der KI-Mailbot
              Ihr Postfach in einen automatisierten Kundenservice-Kanal verwandelt.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
              data-testid="button-cta-demo"
            >
              Kostenlose Demo buchen
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Other products */}
          <div className="mt-14 pt-10 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4 text-center">Weitere KI-Produkte von IntelloMind</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/ki-telefonassistent"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card/60 text-foreground text-sm font-medium hover:bg-card transition-colors"
                data-testid="link-ki-telefonassistent"
              >
                KI-Telefonassistent →
              </Link>
              <Link
                href="/ki-chatbot"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card/60 text-foreground text-sm font-medium hover:bg-card transition-colors"
                data-testid="link-ki-chatbot"
              >
                KI-Chatbot →
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer onOpenCookieSettings={() => setShowCookieSettings(true)} />
      <CookieBanner forceOpen={showCookieSettings} onClose={() => setShowCookieSettings(false)} />
    </div>
  );
}
