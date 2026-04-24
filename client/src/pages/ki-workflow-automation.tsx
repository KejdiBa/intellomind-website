import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { CookieBanner } from "@/components/cookie-banner";
import { useState } from "react";
import {
  ChevronLeft,
  Workflow,
  Phone,
  MessageSquare,
  Mail,
  Database,
  CalendarCheck,
  Zap,
  Link2,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Layers,
  RefreshCw,
  Settings2,
} from "lucide-react";
import { useMetaTags } from "@/hooks/use-meta-tags";

const features = [
  {
    icon: Link2,
    title: "Alles verbunden",
    description: "Telefon, Chat, E-Mail und Ihre Tools arbeiten als ein System.",
  },
  {
    icon: Zap,
    title: "Vollautomatisch",
    description: "Prozesse laufen ohne manuelle Eingriffe – rund um die Uhr.",
  },
  {
    icon: Layers,
    title: "Skalierbar",
    description: "Wächst mit Ihrem Unternehmen – von 10 bis 10.000 Vorgängen täglich.",
  },
];

const benefits = [
  "Keine manuelle Datenpflege zwischen Systemen",
  "Bis zu 80 % weniger Bearbeitungszeit pro Vorgang",
  "Echtzeit-Synchronisation über alle Kanäle",
  "Individuelle Trigger, Regeln und Eskalationspfade",
  "Volle Transparenz durch zentrales Dashboard",
];

const faqs = [
  {
    q: "Welche Systeme lassen sich integrieren?",
    a: "Wir verbinden nahezu jede Plattform: CRM-Systeme (HubSpot, Salesforce, Pipedrive), Kalender (Google, Outlook), Ticketsysteme (Zendesk, Freshdesk), ERP-Software sowie individuelle REST-APIs. Sprechen Sie uns an – wir finden eine Lösung.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Einfache Automations sind in 1–2 Wochen live. Komplexere End-to-End-Workflows mit mehreren Systemintegrationen planen wir gemeinsam und setzen sie schrittweise um – typisch in 3–6 Wochen.",
  },
  {
    q: "Kann ich bestehende Prozesse behalten?",
    a: "Ja. Wir analysieren Ihre aktuellen Abläufe und digitalisieren sie – ohne alles auf den Kopf zu stellen. Bestehende Tools bleiben in der Regel erhalten und werden intelligent verbunden.",
  },
];

const inputNodes = [
  { id: "phone", icon: Phone, label: "Telefon", color: "from-cyan-500 to-blue-500", x: 60, y: 80 },
  { id: "chat", icon: MessageSquare, label: "Chat", color: "from-blue-500 to-purple-500", x: 60, y: 200 },
  { id: "mail", icon: Mail, label: "E-Mail", color: "from-cyan-500 to-blue-500", x: 60, y: 320 },
];

const outputNodes = [
  { id: "crm", icon: Database, label: "CRM", color: "from-blue-500 to-purple-500", x: 540, y: 80 },
  { id: "calendar", icon: CalendarCheck, label: "Kalender", color: "from-cyan-500 to-blue-500", x: 540, y: 200 },
  { id: "erp", icon: Settings2, label: "ERP / Tools", color: "from-cyan-500 to-purple-600", x: 540, y: 320 },
];

function WorkflowDiagram() {
  const hubX = 300;
  const hubY = 200;
  const nodeR = 32;
  const hubR = 52;

  return (
    <div className="relative w-full max-w-2xl mx-auto" data-testid="workflow-diagram">
      <svg
        viewBox="0 0 660 400"
        className="w-full h-auto"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {inputNodes.map((node, i) => {
          const nx = node.x + nodeR;
          const ny = node.y + nodeR;
          const path = `M${nx + nodeR} ${ny} C${(nx + hubX) / 2} ${ny}, ${(nx + hubX) / 2} ${hubY}, ${hubX - hubR} ${hubY}`;
          return (
            <path
              key={node.id}
              d={path}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeDasharray="8 4"
              filter="url(#glow)"
              className="svg-path-in"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          );
        })}

        {outputNodes.map((node, i) => {
          const nx = node.x + nodeR;
          const ny = node.y + nodeR;
          const path = `M${hubX + hubR} ${hubY} C${(hubX + nx) / 2} ${hubY}, ${(hubX + nx) / 2} ${ny}, ${nx - nodeR} ${ny}`;
          return (
            <path
              key={node.id}
              d={path}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeDasharray="8 4"
              filter="url(#glow)"
              className="svg-path-in"
              style={{ animationDelay: `${0.6 + i * 0.2}s` }}
            />
          );
        })}

        {inputNodes.map((node, i) => (
          <g
            key={node.id}
            className="svg-node-left"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <circle
              cx={node.x + nodeR}
              cy={node.y + nodeR}
              r={nodeR + 8}
              fill="#3b82f6"
              fillOpacity="0.08"
            >
              <animate
                attributeName="r"
                values={`${nodeR + 8};${nodeR + 14};${nodeR + 8}`}
                dur="2.5s"
                repeatCount="indefinite"
                begin={`${i * 0.4}s`}
              />
            </circle>
            <circle
              cx={node.x + nodeR}
              cy={node.y + nodeR}
              r={nodeR}
              fill="white"
              fillOpacity="0.06"
              stroke="#3b82f6"
              strokeOpacity="0.3"
              strokeWidth="1.5"
            />
            <foreignObject
              x={node.x}
              y={node.y}
              width={nodeR * 2}
              height={nodeR * 2}
              style={{ overflow: "visible" }}
            >
              <div className="flex flex-col items-center justify-center w-full h-full gap-0.5">
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg`}>
                  <node.icon className="h-4 w-4 text-white" />
                </div>
              </div>
            </foreignObject>
            <text
              x={node.x + nodeR}
              y={node.y + nodeR * 2 + 16}
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="11"
              fontFamily="Inter, sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}

        <circle
          cx={hubX}
          cy={hubY}
          r={hubR + 18}
          fill="#3b82f6"
          fillOpacity="0.06"
        >
          <animate
            attributeName="r"
            values={`${hubR + 18};${hubR + 28};${hubR + 18}`}
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx={hubX}
          cy={hubY}
          r={hubR + 8}
          fill="#3b82f6"
          fillOpacity="0.1"
        >
          <animate
            attributeName="r"
            values={`${hubR + 8};${hubR + 14};${hubR + 8}`}
            dur="2s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>
        <g className="svg-hub-enter">
          <circle
            cx={hubX}
            cy={hubY}
            r={hubR}
            fill="url(#hubGrad)"
            filter="url(#glow)"
          />
          <foreignObject
            x={hubX - hubR}
            y={hubY - hubR}
            width={hubR * 2}
            height={hubR * 2}
            style={{ overflow: "visible" }}
          >
            <div className="flex flex-col items-center justify-center w-full h-full gap-1">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </foreignObject>
        </g>
        <text
          x={hubX}
          y={hubY + hubR + 16}
          textAnchor="middle"
          fill="#e2e8f0"
          fontSize="11"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          IntelloMind KI
        </text>

        {outputNodes.map((node, i) => (
          <g
            key={node.id}
            className="svg-node-right"
            style={{ animationDelay: `${0.4 + i * 0.15}s` }}
          >
            <circle
              cx={node.x + nodeR}
              cy={node.y + nodeR}
              r={nodeR + 8}
              fill="#9333ea"
              fillOpacity="0.08"
            >
              <animate
                attributeName="r"
                values={`${nodeR + 8};${nodeR + 14};${nodeR + 8}`}
                dur="2.5s"
                repeatCount="indefinite"
                begin={`${1 + i * 0.4}s`}
              />
            </circle>
            <circle
              cx={node.x + nodeR}
              cy={node.y + nodeR}
              r={nodeR}
              fill="white"
              fillOpacity="0.06"
              stroke="#9333ea"
              strokeOpacity="0.3"
              strokeWidth="1.5"
            />
            <foreignObject
              x={node.x}
              y={node.y}
              width={nodeR * 2}
              height={nodeR * 2}
              style={{ overflow: "visible" }}
            >
              <div className="flex flex-col items-center justify-center w-full h-full gap-0.5">
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg`}>
                  <node.icon className="h-4 w-4 text-white" />
                </div>
              </div>
            </foreignObject>
            <text
              x={node.x + nodeR}
              y={node.y + nodeR * 2 + 16}
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="11"
              fontFamily="Inter, sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}

        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${hubX} ${hubY}`}
            to={`360 ${hubX} ${hubY}`}
            dur="12s"
            repeatCount="indefinite"
          />
          <circle
            cx={hubX}
            cy={hubY - hubR - 10}
            r={4}
            fill="#06b6d4"
            fillOpacity="0.6"
          />
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${hubX} ${hubY}`}
            to={`-360 ${hubX} ${hubY}`}
            dur="8s"
            repeatCount="indefinite"
          />
          <circle
            cx={hubX + hubR + 10}
            cy={hubY}
            r={3}
            fill="#9333ea"
            fillOpacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
}

export default function KiWorkflowAutomation() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useMetaTags(
    "KI-Workflow-Automation | IntelloMind",
    "End-to-End-Automatisierung Ihrer Geschäftsprozesse mit KI. Verbinden Sie Telefon, Chat, E-Mail und CRM zu einem intelligenten, automatisierten System."
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
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-sm font-medium mb-6">
              <Workflow className="h-4 w-4" />
              KI-Workflow-Automation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ihre Prozesse.
              </span>
              <br />
              <span className="text-foreground">Vollautomatisch vernetzt.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Verbinden Sie alle Kommunikationskanäle und Ihre bestehenden Systeme
              zu einem intelligenten, selbstlaufenden Workflow – ohne manuellen Aufwand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>

          {/* Workflow Diagram */}
          <div
            className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-3xl p-8 mb-16 shadow-sm"
            data-testid="section-diagram"
          >
            <p className="text-center text-xs text-muted-foreground/60 uppercase tracking-widest mb-6 font-medium">
              Wie Ihre Systeme verbunden werden
            </p>
            <WorkflowDiagram />
            <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" /> Eingehende Kanäle
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 inline-block" /> IntelloMind KI
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" /> Ausgabe-Systeme
              </span>
            </div>
          </div>

          {/* Features */}
          <div
            className="grid sm:grid-cols-3 gap-5 mb-16"
            data-testid="section-features"
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-sm"
                data-testid={`card-feature-${i}`}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div
            className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 mb-16 shadow-sm"
            data-testid="section-benefits"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Was Sie konkret gewinnen
            </h2>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  data-testid={`benefit-${i}`}
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Anwendungsbeispiele */}
          <div
            className="mb-16"
            data-testid="section-anwendungsbeispiele"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Typische Anwendungsfälle
              </span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Kundenanfrage per Telefon → CRM & Kalender",
                  description: "Ein Anruf landet beim KI-Telefonassistenten, der Kontaktdaten werden automatisch ins CRM übertragen und ein Folgetermin im Kalender gebucht – ohne manuelle Eingabe.",
                },
                {
                  title: "Chat-Anfrage → Ticket & E-Mail-Bestätigung",
                  description: "Eine Website-Anfrage öffnet automatisch ein Support-Ticket, versendet eine Bestätigungs-E-Mail und informiert das zuständige Team – in Sekunden.",
                },
                {
                  title: "E-Mail-Eingang → Kategorisierung & Weiterleitung",
                  description: "Eingehende E-Mails werden von der KI klassifiziert, priorisiert und direkt an die richtige Abteilung oder ins ERP-System weitergeleitet.",
                },
              ].map((uc, i) => (
                <div
                  key={i}
                  className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 flex gap-4 shadow-sm"
                  data-testid={`card-usecase-${i}`}
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div
            className="mb-16"
            data-testid="section-how-it-works"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                So einfach funktioniert es
              </span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { step: "01", icon: Settings2, title: "Analyse", text: "Wir analysieren Ihre Prozesse und identifizieren Automatisierungspotenzial." },
                { step: "02", icon: Link2, title: "Integration", text: "Wir verbinden Ihre Systeme und bauen die KI-Workflows nach Ihren Regeln." },
                { step: "03", icon: RefreshCw, title: "Live & optimieren", text: "Die Automation läuft und verbessert sich kontinuierlich mit jedem Vorgang." },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 relative overflow-hidden shadow-sm"
                  data-testid={`card-step-${i}`}
                >
                  <span className="absolute top-4 right-4 text-4xl font-black text-muted-foreground/10 select-none">
                    {item.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div
            className="mb-16"
            data-testid="section-faq"
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
          </div>

          {/* CTA */}
          <div
            className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-600/10 border border-cyan-500/20 rounded-2xl p-10 text-center"
            data-testid="section-cta"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Bereit, Ihre Prozesse zu automatisieren?
            </h2>
            <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
              Buchen Sie eine kostenlose Demo und sehen Sie live, wie IntelloMind
              Ihre Systeme intelligent vernetzt.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
              data-testid="button-cta-demo"
            >
              Kostenlose Demo buchen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

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
