import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { CookieBanner } from "@/components/cookie-banner";
import { useState } from "react";
import { ChevronLeft, MessageSquare, Sparkles, Target, CalendarCheck, ShoppingBag, Layers, Shield, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useMetaTags } from "@/hooks/use-meta-tags";

const features = [
  {
    icon: Sparkles,
    title: "Natürliche Konversation",
    description: "Der Chatbot versteht Kontext, führt echte Dialoge und antwortet so natürlich, dass Kunden ihn kaum von einem menschlichen Mitarbeiter unterscheiden.",
  },
  {
    icon: Target,
    title: "Lead-Erfassung",
    description: "Qualifiziert Besucher gezielt, erfasst Name, E-Mail und Bedarf und übergibt heiße Leads direkt an Ihr Vertriebsteam – vollautomatisch.",
  },
  {
    icon: CalendarCheck,
    title: "Terminbuchung",
    description: "Bucht Beratungstermine, Demos oder Servicetermine direkt in Ihren Kalender ein – ohne Rückfragen und ohne Wartezeit für den Kunden.",
  },
  {
    icon: ShoppingBag,
    title: "Produktberatung",
    description: "Hilft Kunden dabei, das richtige Produkt oder die passende Dienstleistung zu finden – personalisiert, auf Basis ihrer Antworten.",
  },
  {
    icon: Layers,
    title: "Mehrkanal-fähig",
    description: "Einsetzbar auf Ihrer Website, in Ihrer App, per WhatsApp oder anderen Kanälen – überall dort, wo Ihre Kunden sind.",
  },
  {
    icon: Shield,
    title: "DSGVO-konform",
    description: "Alle Daten werden DSGVO-konform verarbeitet, auf deutschen Servern gehostet und niemals an Dritte weitergegeben.",
  },
];

const useCases = [
  {
    title: "Online Shops & E-Commerce",
    description: "Beantwortet Produktfragen, hilft bei der Auswahl, trackt Bestellstatus und wickelt einfache Retouren ab – Ihr Kundenservice skaliert ohne Mehrkosten.",
  },
  {
    title: "Coaching & Beratung",
    description: "Führt Interessenten durch einen strukturierten Bedarfscheck, erklärt Angebote und bucht direkt ein Erstgespräch – ohne dass Sie persönlich eingreifen müssen.",
  },
  {
    title: "Fitnessstudios & Wellness",
    description: "Beantwortet Fragen zu Mitgliedschaften, bucht Probetrainings und gibt Kursempfehlungen – damit Ihre Mitarbeiter sich auf die Betreuung vor Ort konzentrieren können.",
  },
  {
    title: "Restaurants & Gastronomie",
    description: "Nimmt Tischreservierungen entgegen, erfasst Allergien und Sonderwünsche, informiert über Speisekarten und beantwortet Fragen zu Öffnungszeiten.",
  },
  {
    title: "Immobilienmakler",
    description: "Qualifiziert Suchkriterien von Interessenten, vereinbart Besichtigungstermine und sendet automatisch relevante Objektvorschläge – rund um die Uhr.",
  },
];

const faqs = [
  {
    q: "Auf welchen Plattformen kann der KI-Chatbot eingesetzt werden?",
    a: "Der IntelloMind-Chatbot lässt sich auf Ihrer Website, in Web-Apps und auf Messenger-Plattformen wie WhatsApp einbinden. Die Integration erfolgt über ein einfaches Code-Snippet oder eine API – kompatibel mit allen gängigen CMS und Shop-Systemen.",
  },
  {
    q: "Wie trainiere ich den Chatbot auf mein Unternehmen?",
    a: "Wir konfigurieren den Chatbot gemeinsam mit Ihnen: Sie liefern Informationen zu Ihren Produkten, Dienstleistungen und häufigen Kundenfragen – wir bauen daraus ein maßgeschneidertes KI-Modell. Anpassungen können jederzeit vorgenommen werden.",
  },
  {
    q: "Kann der Chatbot auch auf Englisch oder anderen Sprachen antworten?",
    a: "Ja. Der KI-Chatbot erkennt die Sprache des Nutzers automatisch und antwortet entsprechend. Standardmäßig sind Deutsch und Englisch aktiviert, weitere Sprachen können auf Anfrage freigeschaltet werden.",
  },
  {
    q: "Was passiert, wenn der Chatbot eine Frage nicht beantworten kann?",
    a: "In solchen Fällen leitet der Chatbot das Gespräch nahtlos an einen menschlichen Mitarbeiter weiter oder nimmt eine Rückrufanfrage auf. Es gibt keine frustrierende Sackgasse für Ihre Kunden.",
  },
];

export default function KiChatbot() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useMetaTags(
    "KI-Chatbot für Ihre Website – IntelloMind",
    "Smarter KI-Chatbot für Website und App: qualifiziert Leads, bucht Termine und begeistert Kunden – DSGVO-konform und 24/7 verfügbar. Jetzt Demo buchen."
  );

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4" />
              KI-Chatbot
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Der smarte KI-Chatbot
              </span>
              <br />
              <span className="text-foreground">für Ihre Website</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Leads qualifizieren, Termine buchen, Kunden begeistern – rund um die Uhr.
              IntelloMind's KI-Chatbot verwandelt Website-Besucher in echte Kunden, ohne
              dass Ihr Team eingreifen muss.
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
              Was ist ein KI-Chatbot?
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ein KI-Chatbot ist ein intelligenter digitaler Assistent, der Besucher Ihrer Website in
              Echtzeit begleitet, ihre Fragen beantwortet und sie gezielt durch Ihren Verkaufsprozess
              führt. Anders als klassische Chatbots versteht er natürliche Sprache, erkennt Absichten
              und reagiert kontextbezogen – wie ein echter Mitarbeiter.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              IntelloMind's KI-Chatbot ist speziell für Unternehmen entwickelt, die ihren Kundenservice
              skalieren wollen, ohne dabei Qualität einzubüßen. Er qualifiziert Leads, beantwortet
              Support-Anfragen, bucht Termine und gibt Produktempfehlungen – vollautomatisch, DSGVO-konform
              und rund um die Uhr. Ihr Team wird entlastet, Ihre Kunden bleiben zufrieden.
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
                Was Ihr KI-Chatbot kann
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
                  className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-sm hover:border-blue-500/30 transition-colors"
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
                  <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
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
              className="mt-4 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-600/5 border border-blue-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              data-testid="card-und-viele-mehr"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                <span className="text-white text-lg font-bold">+</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground mb-1">… und viele weitere Branchen</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ihre Branche ist nicht dabei? Kein Problem. Unser KI-Chatbot lässt sich
                  flexibel an nahezu jeden Anwendungsfall anpassen – egal ob Handwerk, Logistik,
                  Bildung oder eine ganz andere Branche. Sprechen Sie uns einfach an.
                </p>
              </div>
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
            className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-10 text-center"
            data-testid="section-cta"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Ihr Chatbot wartet – starten Sie heute.
            </h2>
            <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
              Vereinbaren Sie eine kostenlose Demo und sehen Sie, wie der KI-Chatbot Ihre
              Website in eine Verkaufsmaschine verwandelt.
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
