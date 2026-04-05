import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { CookieBanner } from "@/components/cookie-banner";
import { useState } from "react";
import { ChevronLeft, Phone, Clock, CalendarCheck, Target, Globe, Database, Zap, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useMetaTags } from "@/hooks/use-meta-tags";

const features = [
  {
    icon: Clock,
    title: "24/7 erreichbar",
    description: "Kein Anruf geht verloren – auch nachts, am Wochenende oder an Feiertagen antwortet Ihr KI-Assistent professionell und zuverlässig.",
  },
  {
    icon: CalendarCheck,
    title: "Automatische Terminbuchung",
    description: "Der Assistent bucht Termine direkt in Ihren Kalender ein, sendet Bestätigungen und erinnert Kunden automatisch – ohne Ihr Zutun.",
  },
  {
    icon: Target,
    title: "Lead-Qualifizierung",
    description: "Filtert relevante Anfragen heraus, stellt gezielte Rückfragen und übergibt qualifizierte Leads direkt an Ihr Vertriebsteam.",
  },
  {
    icon: Globe,
    title: "Mehrsprachig",
    description: "Kommuniziert fließend auf Deutsch, Englisch und weiteren Sprachen – ideal für internationale Kundschaft.",
  },
  {
    icon: Database,
    title: "CRM-Integration",
    description: "Nahtlose Anbindung an Ihre bestehenden Systeme: CRM, Kalender, Ticketsystem oder ERP – alles bleibt synchron.",
  },
  {
    icon: Zap,
    title: "Keine Wartezeiten",
    description: "Ihre Kunden werden sofort verbunden und erhalten innerhalb von Sekunden eine kompetente Antwort – Wartemusik gehört der Vergangenheit an.",
  },
];

const useCases = [
  {
    title: "Arztpraxen & Gesundheitswesen",
    description: "Patienten buchen Termine rund um die Uhr, ohne die Praxis zu überlasten. Der Assistent nimmt Beschwerden entgegen, priorisiert Notfälle und organisiert Rückrufe – so kann sich Ihr Team auf die Behandlung konzentrieren.",
  },
  {
    title: "Anwaltskanzleien",
    description: "Erstberatungstermine werden automatisch qualifiziert und gebucht. Mandanten erhalten sofortige Rückmeldung, Unterlagen können direkt per Sprache erfasst werden – ohne Sekretariat in der Leitung.",
  },
  {
    title: "Handwerksbetriebe",
    description: "Notfallanfragen werden sofort priorisiert, Kostenvoranschläge können erfasst werden und Kundentermine werden direkt ins Auftragsbuch eingetragen – auch wenn Sie auf der Baustelle sind.",
  },
  {
    title: "Friseursalons & Beauty",
    description: "Kunden buchen ihren Wunschstylisten, wählen Leistungen und erhalten automatische Terminerinnerungen – Ihr Team konzentriert sich auf das, was es am besten kann.",
  },
  {
    title: "Immobilienmakler",
    description: "Interessenten melden sich rund um die Uhr, der Assistent qualifiziert ihre Suchkriterien, vereinbart Besichtigungstermine und sendet Follow-up-Nachrichten – automatisch und professionell.",
  },
];

const faqs = [
  {
    q: "Was kostet ein KI-Telefonassistent von IntelloMind?",
    a: "Unsere Tarife starten ab 99 €/Monat für den Solo-Plan (bis zu 250 Minuten). Für größere Teams bieten wir den Team-Plan ab 299 €/Monat an. Alle Details finden Sie auf unserer Preisseite. Gerne erstellen wir Ihnen auch ein individuelles Angebot.",
  },
  {
    q: "Wie schnell kann der KI-Telefonassistent eingerichtet werden?",
    a: "In der Regel ist Ihr KI-Telefonassistent innerhalb von 3–5 Werktagen einsatzbereit. Wir konfigurieren ihn gemeinsam mit Ihnen, passen die Stimme und das Gesprächsskript an Ihr Unternehmen an und führen umfangreiche Tests durch, bevor er live geht.",
  },
  {
    q: "Welche Sprachen spricht der KI-Telefonassistent?",
    a: "Standardmäßig Deutsch und Englisch. Der Assistent kann so konfiguriert werden, dass er neben Deutsch und Englisch auch weitere Sprachen wie Spanisch, Französisch, Russisch, Portugiesisch, Italienisch und Niederländisch versteht und spricht – ideal für Unternehmen mit internationaler Kundschaft.",
  },
  {
    q: "Kann der Assistent in mein bestehendes CRM integriert werden?",
    a: "Ja. Wir integrieren den KI-Telefonassistenten in gängige CRM-Systeme wie HubSpot, Salesforce, Pipedrive sowie Kalender-Apps wie Google Calendar und Outlook. Individuelle Integrationen über API sind ebenfalls möglich.",
  },
];

export default function KiTelefonassistent() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useMetaTags(
    "KI-Telefonassistent – 24/7 Kundenservice | IntelloMind",
    "IntelloMind's KI-Telefonassistent nimmt Anrufe entgegen, bucht Termine und qualifiziert Leads – vollautomatisch, rund um die Uhr. Jetzt Demo buchen."
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-sm font-medium mb-6">
              <Phone className="h-4 w-4" />
              KI-Telefonassistent
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Der KI-Telefonassistent
              </span>
              <br />
              <span className="text-foreground">für Ihr Unternehmen</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              24/7 erreichbar, kein Anruf verpasst. Ihr intelligenter Sprachassistent von IntelloMind
              beantwortet Anfragen, bucht Termine und qualifiziert Leads – vollautomatisch und in
              natürlicher Sprache.
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
              Was ist ein KI-Telefonassistent?
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ein KI-Telefonassistent ist ein intelligenter Sprachbot, der eingehende Anrufe in Ihrem
              Unternehmen selbstständig entgegennimmt und bearbeitet – ohne dass ein Mitarbeiter am
              Telefon sitzen muss. Er versteht natürliche Sprache, stellt gezielte Rückfragen und
              reagiert kontextbezogen auf die Anliegen Ihrer Kunden.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              IntelloMind's KI-Telefonassistent geht dabei weit über einen klassischen Anrufbeantworter
              hinaus: Er bucht Termine direkt in Ihren Kalender, qualifiziert Leads nach Ihren Kriterien,
              leitet dringende Anfragen weiter und hält Ihre Kunden zu jeder Tages- und Nachtzeit professionell
              in der Kommunikation. Das Ergebnis: weniger Personalaufwand, mehr zufriedene Kunden und
              kein verpasster Auftrag mehr.
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
                Was Ihr KI-Telefonassistent kann
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
                  className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-sm hover:border-cyan-500/30 transition-colors"
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
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
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
              className="mt-4 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              data-testid="card-und-viele-mehr"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                <span className="text-white text-lg font-bold">+</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground mb-1">… und viele weitere Branchen</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Ihre Branche ist nicht dabei? Kein Problem. Unser KI-Telefonassistent lässt sich flexibel an nahezu jeden Anwendungsfall anpassen – egal ob Logistik, Bildung oder eine ganz andere Branche. Sprechen Sie uns einfach an.</p>
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
            className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-600/10 border border-cyan-500/20 rounded-2xl p-10 text-center"
            data-testid="section-cta"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Bereit, keinen Anruf mehr zu verpassen?
            </h2>
            <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
              Vereinbaren Sie jetzt eine kostenlose Demo und erleben Sie, wie der KI-Telefonassistent
              Ihren Kundenservice transformiert.
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
                href="/ki-chatbot"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card/60 text-foreground text-sm font-medium hover:bg-card transition-colors"
                data-testid="link-ki-chatbot"
              >
                KI-Chatbot →
              </Link>
              <Link
                href="/ki-mailbot"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card/60 text-foreground text-sm font-medium hover:bg-card transition-colors"
                data-testid="link-ki-mailbot"
              >
                KI-Mailbot →
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
