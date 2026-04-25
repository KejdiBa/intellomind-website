import { useState } from "react";
import { Link } from "wouter";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { useInView } from "@/hooks/use-in-view";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { CookieBanner } from "@/components/cookie-banner";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Phone, MessageSquare, Mail, Check, X } from "lucide-react";

type Product = "telefon" | "chat" | "mail";
type Billing = "monthly" | "yearly";

interface IncludedItem {
  text: string;
  sub?: string;
  crossed?: boolean;
}

interface PricingRow {
  label: string;
  value: string;
  highlight?: boolean;
}

interface TelefonCard {
  name: string;
  sub: string;
  price: string | null;
  pricePrefix?: string;
  oldPrice?: string;
  popular: boolean;
  cta: string;
  included: IncludedItem[];
  features: string[];
}

interface TransactionCard {
  name: string;
  sub: string;
  price: string | null;
  oldPrice?: string;
  popular: boolean;
  cta: string;
  rows: PricingRow[];
}

const PRODUCTS = [
  { id: "telefon" as Product, label: "KI-Telefonassistent", icon: Phone },
  { id: "chat" as Product, label: "KI-Chatassistent", icon: MessageSquare },
  { id: "mail" as Product, label: "KI-Mailassistent", icon: Mail },
];

const FAQ_ITEMS = [
  {
    q: "Was ist Pay-as-you-go?",
    a: "Bei Chat und E-Mail zahlen Sie nur für die tatsächlich genutzten Transaktionen – ohne Abo-Bindung. Ideal für den Einstieg oder variable Nutzung.",
  },
  {
    q: "Was zählt als Transaktion?",
    a: "Beim KI-Chatassistenten: Eine Nutzereingabe + KI-Antwort = 1 Transaktion. Bei E-Mail: Eine E-Mail-Analyse + Antwort = 1 Transaktion.",
  },
];

function TelefonCards({ billing }: { billing: Billing }) {
  const yearly = billing === "yearly";
  const cards: TelefonCard[] = [
    {
      name: "Solo",
      sub: "Geeignet für 1-20 Anrufe/Tag",
      price: yearly ? "85" : "99",
      oldPrice: yearly ? "99" : undefined,
      popular: false,
      cta: "Demo buchen",
      included: [
        { text: "1.000 Minuten", sub: "je weitere €0,15" },
        { text: "keine Parallelanrufe", crossed: true },
        { text: "1 Telefonnr.", sub: "je weitere €7/Monat" },
        { text: "∞ Assistenten" },
        { text: "1 User" },
      ],
      features: ["20+ Stimmen", "25+ Sprachen", "3-Wochen Intensivkurs"],
    },
    {
      name: "Team",
      sub: "Geeignet für 20-100 Anrufe/Tag",
      price: yearly ? "255" : "299",
      oldPrice: yearly ? "299" : undefined,
      popular: true,
      cta: "Demo buchen",
      included: [
        { text: "3.000 Minuten", sub: "je weitere €0,12" },
        { text: "5 gleichz. Anrufe" },
        { text: "3 Telefonnr.", sub: "je weitere €5/Monat" },
        { text: "∞ Assistenten" },
        { text: "∞ User" },
      ],
      features: ["Alles in Solo", "Eigener SIP Trunk", "Outbound Anrufe"],
    },
    {
      name: "Scale",
      sub: "Geeignet ab 100 Anrufe/Tag",
      price: "499",
      pricePrefix: "Ab",
      popular: false,
      cta: "Plan erstellen",
      included: [
        { text: "Ab 5000 Minuten" },
        { text: "Individuell gleichz. Anrufe" },
        { text: "Individuell Telefonnr." },
        { text: "∞ Assistenten" },
        { text: "∞ User" },
      ],
      features: ["Alles in Team", "Eigene Stimme", "Zero Data Retention", "Individueller SLA"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      {cards.map((card) => (
        <div
          key={card.name}
          className={`relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 ${
            card.popular
              ? "bg-slate-900 text-white shadow-2xl shadow-purple-500/10 scale-105"
              : "bg-card/80 backdrop-blur-sm border border-border/40 shadow-sm"
          }`}
          data-testid={`card-pricing-telefon-${card.name.toLowerCase()}`}
        >
          {card.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow">
                BELIEBT
              </span>
            </div>
          )}
          <div>
            <p className={`text-xl font-bold ${card.popular ? "text-white" : "text-foreground"}`}>{card.name}</p>
            <p className={`text-sm mt-0.5 ${card.popular ? "text-slate-300" : "text-muted-foreground"}`}>{card.sub}</p>
          </div>
          <div className="flex items-end gap-1">
            {card.price ? (
              <>
                {card.oldPrice && (
                  <span className={`text-sm line-through mr-1 ${card.popular ? "text-slate-400" : "text-muted-foreground"}`}>
                    {card.oldPrice} €
                  </span>
                )}
                {card.pricePrefix && (
                  <span className={`text-sm mb-1.5 mr-0.5 ${card.popular ? "text-slate-300" : "text-muted-foreground"}`}>{card.pricePrefix}</span>
                )}
                <span className={`text-4xl font-bold ${card.popular ? "text-white" : "text-foreground"}`}>{card.price} €</span>
                <span className={`text-sm mb-1.5 ${card.popular ? "text-slate-300" : "text-muted-foreground"}`}>/Monat</span>
              </>
            ) : (
              <span className={`text-3xl font-bold ${card.popular ? "text-white" : "text-foreground"}`}>Individuell</span>
            )}
          </div>
          <a href="/#contact">
            <Button
              className="w-full rounded-xl btn-primary-gradient"
              data-testid={`button-demo-${card.name.toLowerCase()}`}
            >
              {card.cta}
            </Button>
          </a>
          <div>
            <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${card.popular ? "text-slate-400" : "text-muted-foreground"}`}>
              Inkludiert
            </p>
            <ul className="space-y-1.5">
              {card.included.map((item) => (
                <li key={item.text} className="flex items-start gap-2 text-sm">
                  {item.crossed ? (
                    <X className={`w-4 h-4 mt-0.5 flex-shrink-0 ${card.popular ? "text-slate-400" : "text-muted-foreground"}`} />
                  ) : (
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${card.popular ? "text-cyan-400" : "text-cyan-500"}`} />
                  )}
                  <span className={item.crossed
                    ? (card.popular ? "text-slate-400" : "text-muted-foreground")
                    : (card.popular ? "text-slate-100" : "text-foreground/80")
                  }>
                    {item.text}
                    {item.sub && (
                      <span className={`ml-1 text-xs ${card.popular ? "text-slate-400" : "text-muted-foreground"}`}>{item.sub}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${card.popular ? "text-slate-400" : "text-muted-foreground"}`}>
              Features
            </p>
            <ul className="space-y-1.5">
              {card.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className={`w-4 h-4 flex-shrink-0 ${card.popular ? "text-cyan-400" : "text-cyan-500"}`} />
                  <span className={card.popular ? "text-slate-100" : "text-foreground/80"}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function TransactionCards({ cards }: { cards: TransactionCard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      {cards.map((card) => (
        <div
          key={card.name}
          className={`relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 ${
            card.popular
              ? "bg-slate-900 text-white shadow-2xl shadow-purple-500/10 scale-105"
              : "bg-card/80 backdrop-blur-sm border border-border/40 shadow-sm"
          }`}
          data-testid={`card-pricing-${card.name.toLowerCase()}`}
        >
          {card.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow">
                BELIEBT
              </span>
            </div>
          )}
          <div>
            <p className={`text-xl font-bold ${card.popular ? "text-white" : "text-foreground"}`}>{card.name}</p>
            <p className={`text-sm mt-0.5 ${card.popular ? "text-slate-300" : "text-muted-foreground"}`}>{card.sub}</p>
          </div>
          <div className="flex items-end gap-1">
            {card.price ? (
              <>
                {card.oldPrice && (
                  <span className={`text-sm line-through mr-1 ${card.popular ? "text-slate-400" : "text-muted-foreground"}`}>
                    {card.oldPrice} €
                  </span>
                )}
                <span className={`text-4xl font-bold ${card.popular ? "text-white" : "text-foreground"}`}>{card.price} €</span>
                <span className={`text-sm mb-1.5 ${card.popular ? "text-slate-300" : "text-muted-foreground"}`}>/Monat</span>
              </>
            ) : (
              <span className={`text-3xl font-bold ${card.popular ? "text-white" : "text-foreground"}`}>Individuell</span>
            )}
          </div>
          <a href="/#contact">
            <Button
              className="w-full rounded-xl btn-primary-gradient"
              data-testid={`button-cta-${card.name.toLowerCase()}`}
            >
              {card.cta}
            </Button>
          </a>
          <div className="divide-y divide-border/30">
            {card.rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between py-2">
                <span className={`text-sm ${card.popular ? "text-slate-300" : "text-muted-foreground"}`}>{row.label}</span>
                <span className={`text-sm font-semibold ${
                  row.highlight ? "text-green-400" : card.popular ? "text-white" : "text-foreground"
                }`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChatCards({ billing: _ }: { billing: Billing }) {
  const bullets = [
    "Integration in Sekunden – ohne IT-Aufwand",
    "Mehrsprachige Kommunikation",
    "Individuelle Wissensbasis",
    "DSGVO-konform & sicher gehostet",
  ];
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Verpassen Sie keine Kundenanfrage mehr – dank KI
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Beantworten Sie jede Anfrage sofort – auch nachts, am Wochenende und ohne zusätzliches Personal.
        </p>
        <div className="mb-1">
          <div className="flex items-end gap-2 justify-center">
            <span className="text-sm text-muted-foreground">ab</span>
            <span className="text-5xl font-bold text-foreground">0,05 €</span>
            <span className="text-sm text-muted-foreground mb-1.5">pro Chat</span>
          </div>
          <p className="text-xs text-muted-foreground mt-[8px]">
            Für wenige Cent pro Anfrage – effizienter als jeder Mitarbeiter.
          </p>
        </div>
        <a href="/#contact" className="block mt-6 mb-6">
          <Button className="w-full rounded-xl btn-primary-gradient" data-testid="button-chat-demo">
            Demo buchen
          </Button>
        </a>
        <ul className="space-y-2.5 text-left">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/80">
              <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MailCards() {
  const bullets = [
    "Automatische Antworten in Sekunden",
    "Individueller Tonfall wie von Ihnen geschrieben",
    "Eigene Wissensbasis integriert",
    "Mehrsprachige Kommunikation",
    "DSGVO-konform",
  ];
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Beantworten Sie jede E-Mail automatisch – ohne Zeitverlust</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Sparen Sie täglich Stunden: Ihre E-Mails werden sofort, präzise und in Ihrem Ton beantwortet – rund um die Uhr.
        </p>
        <div className="mb-1">
          <div className="flex items-end gap-2 justify-center">
            <span className="text-sm text-muted-foreground">ab</span>
            <span className="text-5xl font-bold text-foreground">0,10 €</span>
            <span className="text-sm text-muted-foreground mb-1.5">pro E-Mail</span>
          </div>
          <p className="text-xs text-muted-foreground mt-[8px]">
            Für wenige Cent pro Antwort – schneller und günstiger als manuelle Bearbeitung.
          </p>
        </div>
        <a href="/#contact" className="block mt-6 mb-6">
          <Button className="w-full rounded-xl btn-primary-gradient" data-testid="button-mail-demo">
            Demo buchen
          </Button>
        </a>
        <ul className="space-y-2.5 text-left">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/80">
              <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Preise() {
  const [activeProduct, setActiveProduct] = useState<Product>("telefon");
  const [billing, setBilling] = useState<Billing>("monthly");
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  const { ref: heroRef, isVisible: heroVisible } = useInView();
  const { ref: tabsRef, isVisible: tabsVisible } = useInView();
  const { ref: cardsRef, isVisible: cardsVisible } = useInView();
  const { ref: fullServiceRef, isVisible: fullServiceVisible } = useInView();
  const { ref: faqRef, isVisible: faqVisible } = useInView();

  useMetaTags(
    "Preise – KI-Assistenten für Unternehmen | IntelloMind",
    "Transparente Preise für KI-Telefonassistent, KI-Chatbot und KI-Mailbot. Monatlich oder jährlich buchen. Kein Verstecktes – ab 99 €/Monat."
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

          <div
            ref={heroRef}
            className={`text-center mb-12 fade-in-up${heroVisible ? " is-visible" : ""}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">Transparente Preise. Einfach und Fair.</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Wählen Sie den KI-Assistenten und das Modell, das zu Ihrem Unternehmen passt.
            </p>
          </div>

          <div
            ref={tabsRef}
            className={`flex justify-center mb-8 fade-in-up delay-100${tabsVisible ? " is-visible" : ""}`}
          >
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-1.5 shadow-sm flex-wrap justify-center">
              {PRODUCTS.map((p) => {
                const Icon = p.icon;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveProduct(p.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeProduct === p.id
                        ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`tab-product-${p.id}`}
                  >
                    <Icon className="w-4 h-4" />
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          {activeProduct === "telefon" && (
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/40 rounded-xl p-1 shadow-sm">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    billing === "monthly" ? "text-white shadow" : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={billing === "monthly" ? { background: "linear-gradient(to right, #06b6d4, #3b82f6, #9333ea)" } : {}}
                  data-testid="toggle-billing-monthly"
                >
                  Monatlich
                </button>
                <button
                  onClick={() => setBilling("yearly")}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    billing === "yearly" ? "text-white shadow" : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={billing === "yearly" ? { background: "linear-gradient(to right, #06b6d4, #3b82f6, #9333ea)" } : {}}
                  data-testid="toggle-billing-yearly"
                >
                  Jährlich
                  <span className="px-1.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                    -15%
                  </span>
                </button>
              </div>
            </div>
          )}

          <div
            ref={cardsRef}
            key={`${activeProduct}-${billing}`}
            className={`fade-in-up delay-200${cardsVisible ? " is-visible" : ""}`}
          >
              {(activeProduct === "chat" || activeProduct === "mail") && (
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/40 shadow-sm text-sm text-muted-foreground">
                    Nur zahlen, was Sie nutzen – mit unserem transparenten Pay-as-you-go-Modell:{" "}
                    <span className="font-bold text-foreground">
                      {activeProduct === "chat" ? "0,05 €" : "0,10 €"}
                    </span>{" "}
                    pro {activeProduct === "chat" ? "Chat" : "E-Mail"}
                  </div>
                </div>
              )}

              {activeProduct === "telefon" && <TelefonCards billing={billing} />}
              {activeProduct === "chat" && <ChatCards billing={billing} />}
              {activeProduct === "mail" && <MailCards />}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6 mb-2">
            Alle Preise verstehen sich zzgl. 19% MwSt.
          </p>

          <div
            ref={fullServiceRef}
            className={`mt-16 rounded-2xl overflow-hidden bg-slate-900 p-8 md:p-10 shadow-xl shadow-purple-500/5 fade-in-up${fullServiceVisible ? " is-visible" : ""}`}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">Full-Service Pakete verfügbar</h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Sie möchten sich voll auf Ihr Kerngeschäft konzentrieren? Wir übernehmen die komplette
                  Einrichtung und laufende Verwaltung Ihrer KI-Assistenten.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Komplette Einrichtung und Konfiguration",
                    "Laufende Verwaltung und Optimierung",
                    "Anpassungen der Assistenten jederzeit möglich",
                    "Persönlicher Ansprechpartner für Ihre Anliegen",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-400">
                  Details zu Full-Service Paketen erfahren Sie im persönlichen Beratungsgespräch.
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center md:items-start">
                <a href="/#contact">
                  <Button
                    className="rounded-xl btn-primary-gradient"
                    data-testid="button-fullservice-beratung"
                  >
                    Beratung vereinbaren
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div
            ref={faqRef}
            className={`mt-16 fade-in-up${faqVisible ? " is-visible" : ""}`}
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Häufige Fragen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {FAQ_ITEMS.map((item) => (
                  <div key={item.q} data-testid={`faq-item-${item.q.slice(0, 10).toLowerCase().replace(/\s+/g, "-")}`}>
                    <h3 className="font-semibold text-foreground text-sm mb-1.5">{item.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer onOpenCookieSettings={() => setShowCookieSettings(true)} />
      <CookieBanner forceOpen={showCookieSettings} onClose={() => setShowCookieSettings(false)} />
    </div>
  );
}
