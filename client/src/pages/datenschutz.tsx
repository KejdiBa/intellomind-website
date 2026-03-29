import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { CookieBanner } from "@/components/cookie-banner";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

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
    data-testid="link-datenschutz-email"
  >
    info@intellomind.ai
  </a>
);

const phoneLink = (
  <a
    href="tel:+4917670599319"
    className="font-medium text-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text transition-colors"
    data-testid="link-datenschutz-phone"
  >
    +49 176 70599319
  </a>
);

export default function Datenschutz() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation isSubPage />
      <main className="relative z-10 pt-32 pb-24 px-6">
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
                Datenschutzerklärung
              </span>
            </h1>
            <p className="text-muted-foreground text-base">
              für die Inhalte und Funktionen der{" "}
              <span className="font-medium text-foreground">https://intellomind.ai</span>{" "}
              (nachfolgend „Services") — Stand: März 2026
            </p>
          </div>

          <div className="space-y-10">
            <section className={card} data-testid="section-datenschutz-einleitung">
              <h2 className={gradientHeading}>Einleitung</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Datenschutzerklärungen sind oft schwer zu lesen. Das verstehen wir. Und möchten es
                  anders machen. Wir möchten Nutzern mit unserer Datenschutzerklärung eine einfach
                  verständliche Erklärung über die Art und Weise der Verarbeitung von
                  personenbezogenen Daten durch uns geben.
                </p>
                <p>
                  Wir erläutern Nutzern in dieser Datenschutzerklärung, ob und wie wir
                  personenbezogene Daten verarbeiten. Hierbei stellen wir Nutzern sämtliche
                  Verarbeitungsvorgänge dar, die durch uns, durch von uns beauftragte oder
                  eingebundene Dienste Dritter oder die sonstige Dritte in unserem Auftrag im
                  Rahmen der Nutzung unserer Website, unserer Social-Media-Profile und der hierbei
                  jeweils verfügbarer Funktionen (nachfolgend zusammen auch „Services" genannt)
                  vorgenommen werden.
                </p>
              </div>
              <h3 className={`${subheading} mt-6`}>Inhaltsverzeichnis</h3>
              <ol className="list-decimal list-outside ml-5 space-y-1 text-sm text-foreground/80">
                <li>Allgemeines</li>
                <li>Allgemeine Informationen zur Datenverarbeitung</li>
                <li>Betroffenenrechte</li>
                <li>Angaben zu den verwendeten Cookies und weiterer Technologien</li>
                <li>Datenverarbeitung im Zusammenhang mit der Nutzung unserer Services</li>
                <li>Kommunikations Services</li>
                <li>Bereitstellung unserer Services (Hosting)</li>
                <li>Tracking &amp; Tools</li>
                <li>Transaktionale Mailings</li>
                <li>Profile auf Social Media Websites</li>
              </ol>
            </section>

            <section className={card} data-testid="section-datenschutz-allgemeines">
              <h2 className={gradientHeading}>1. Allgemeines</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Der Schutz von personenbezogenen Daten und der Privatsphäre ist uns überaus
                  wichtig. Deshalb möchten wir Nutzern umfassende Transparenz bezüglich der
                  Verarbeitung von personenbezogenen Daten (DSGVO) sowie bezüglich der Speicherung
                  von Informationen auf dem Endgerät des Nutzers (TDDDG) bieten.
                </p>
                <p>
                  Diese Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen
                  personenbezogener Daten sowie für die Speicherung von Informationen auf
                  Endgeräten, sowohl im Rahmen der Erbringung von Leistungen in unseren Services
                  als auch innerhalb externer Onlinepräsenzen, wie z.B. unserer
                  Social-Media-Profile.
                </p>
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO), des
                  Bundesdatenschutzgesetzes (BDSG) sowie sonstiger datenschutzrechtlicher Vorgaben
                  ist die:
                </p>
                <div className="space-y-1 pl-4 border-l-2 border-border/50">
                  <p className="font-medium text-foreground">
                    Intellomind UG (haftungsbeschränkt)
                  </p>
                  <p>Geschäftsführer: Agron Basha</p>
                  <p>Hüingser Ring 1</p>
                  <p>58710 Menden</p>
                  <p>
                    E-Mail: {emailLink}
                  </p>
                  <p>
                    Telefon: {phoneLink}
                  </p>
                </div>
                <p>Im Folgenden „Verantwortlicher" oder „wir" genannt.</p>
              </div>
            </section>

            <section className={card} data-testid="section-datenschutz-datenverarbeitung">
              <h2 className={gradientHeading}>2. Allgemeine Informationen zur Datenverarbeitung</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Zunächst einmal möchten wir Nutzern einleitende Informationen dazu geben, was der
                  Schutz personenbezogener Daten bedeutet, was personenbezogene Daten sind, wie wir
                  sie verarbeiten und welche Sicherheitsmaßnahmen wir hierbei anbringen.
                </p>

                <h3 className={subheading}>2.1 Verarbeitung personenbezogener Daten</h3>
                <p>
                  Personenbezogene Daten (nachfolgend auch „Daten") sind Einzelangaben über
                  persönliche oder sachliche Verhältnisse einer bestimmten oder bestimmbaren
                  natürlichen Person. Einzelangaben sind beispielsweise:
                </p>
                <ul className={listClass}>
                  <li>Personaldaten – Name, Alter, Familienstand, Geburtsdatum</li>
                  <li>Kommunikationsdaten – Anschrift, Telefonnummer, E-Mail-Adresse</li>
                  <li>Kontodaten – Konto-, Kreditkartennummer</li>
                  <li>Geodaten – IP-Adresse &amp; Standortdaten</li>
                  <li>Gesundheitsdaten – Gesundheitlicher Zustand, Krankheiten</li>
                </ul>
                <p>Das „Verarbeiten" personenbezogener Daten umfasst beispielsweise:</p>
                <ul className={listClass}>
                  <li>Erhebung – über Kontaktformulare, per E-Mail oder durch genutzte Prozesse</li>
                  <li>Übermittlung – an Dienstleister, eingebundene Dienste oder sonstige Dritte</li>
                  <li>Speicherung – in Datenbanken oder auf Servern</li>
                  <li>Veränderung – bei Änderungen von Name, Wohnort oder Service-Angaben</li>
                  <li>Löschen – wenn keine Berechtigung zur Verarbeitung mehr besteht</li>
                </ul>

                <h3 className={subheading}>2.2 Rechtliche Grundlagen</h3>
                <p>
                  Wir verarbeiten personenbezogene Daten nur innerhalb der rechtlich zulässigen
                  Grenzen. Die Rechtsgrundlagen sind in Art. 6 Abs. 1 DSGVO normiert:
                </p>
                <ul className={listClass}>
                  <li>
                    <span className="font-medium text-foreground">Einwilligung</span> – Art. 6
                    Abs. 1 lit. a DSGVO
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      Einwilligung besondere Kategorien
                    </span>{" "}
                    – Art. 9 Abs. 2 lit. a DSGVO
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Vertragserfüllung</span> – Art. 6
                    Abs. 1 lit. b DSGVO
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      Erfüllung einer rechtlichen Verpflichtung
                    </span>{" "}
                    – Art. 6 Abs. 1 lit. c DSGVO
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Berechtigtes Interesse</span> –
                    Art. 6 Abs. 1 lit. f DSGVO
                  </li>
                </ul>

                <h3 className={subheading}>2.3 Diese Datenkategorien verarbeiten wir</h3>
                <ul className={listClass}>
                  <li>Stammdaten (z.B. Namen, Anschriften, Geburtsdaten)</li>
                  <li>Kontaktdaten (z.B. E-Mail-Adressen, Telefonnummern)</li>
                  <li>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos)</li>
                  <li>Vertragsdaten (z.B. Vertragsgegenstand, Laufzeiten)</li>
                  <li>Zahlungsdaten (z.B. Bankverbindungen, Zahlungshistorie)</li>
                  <li>Nutzungsdaten (z.B. Verlauf in unseren Services, Zugriffszeiten)</li>
                  <li>Verbindungsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
                </ul>

                <h3 className={subheading}>2.4 Diese Sicherheitsmaßnahmen treffen wir</h3>
                <p>
                  Nach Maßgabe der gesetzlichen Vorgaben treffen wir geeignete technische und
                  organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu
                  gewährleisten. Zu den Maßnahmen gehören insbesondere die Sicherstellung der
                  Vertraulichkeit, Integrität und Verfügbarkeit von Daten sowie Kontrollen des
                  Zugangs zu Daten und des Zugriffs, der Eingabe, der Weitergabe und der Sicherung
                  der Verfügbarkeit.
                </p>

                <h3 className={subheading}>
                  2.5 So übermitteln oder offenbaren wir personenbezogene Daten gegenüber Dritten
                </h3>
                <p>
                  Im Rahmen unserer Verarbeitungsmaßnahmen kommt es vor, dass Daten an andere
                  Stellen, Unternehmen oder Personen übermittelt werden. Dies können z.B.
                  Zahlungsinstitute, mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von
                  Diensten und Inhalten sein. Wir beachten stets die gesetzlichen Vorgaben und
                  schließen entsprechende Verträge zum Schutz von Daten ab.
                </p>

                <h3 className={subheading}>2.6 So erfolgt eine Drittlandübermittlung</h3>
                <p>
                  Eine Drittlandübermittlung erfolgt nur in Übereinstimmung mit den gesetzlichen
                  Vorgaben, insbesondere auf Basis von Angemessenheitsbeschlüssen,
                  Standardvertragsklauseln oder dem EU-US Data Privacy Framework (DPF) gemäß
                  Art. 44 bis 49 DSGVO.
                </p>

                <h3 className={subheading}>2.7 Löschung von Daten</h3>
                <p>
                  Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben
                  gelöscht, sobald zur Verarbeitung erlaubte Einwilligungen widerrufen werden oder
                  sonstige Erlaubnisse entfallen. Sofern die Daten nicht gelöscht werden, weil sie
                  für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren
                  Verarbeitung auf diese Zwecke beschränkt.
                </p>

                <h3 className={subheading}>
                  2.8 Speicherung von und Zugriff auf Daten auf dem Endgerät des Nutzers
                </h3>
                <p>
                  Sofern wir von Nutzern keine Einwilligung dazu einholen, erfolgt die Speicherung
                  von oder der Zugriff auf Informationen auf dem Endgerät des Nutzers gemäß § 25
                  Abs. 2 Nr. 2 TDDDG, da dies unbedingt erforderlich ist, um die gewünschten
                  Funktionen unserer Services zur Verfügung zu stellen. Sofern wir eine Einwilligung
                  einholen, ist die Rechtsgrundlage § 25 Abs. 1 TDDDG.
                </p>

                <h3 className={subheading}>2.9 Auftragsverarbeitung</h3>
                <p>
                  Sollten wir uns zur Verarbeitung von Daten externer Dienstleister bedienen,
                  werden diese von uns sorgfältig ausgewählt und beauftragt. Unsere
                  Auftragsverarbeitungsverträge entsprechen den strengen Voraussetzungen des
                  Art. 28 DSGVO sowie den Vorgaben der deutschen Datenschutzbehörden.
                </p>
              </div>
            </section>

            <section className={card} data-testid="section-datenschutz-betroffenenrechte">
              <h2 className={gradientHeading}>3. Betroffenenrechte</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Werden personenbezogene Daten unserer Nutzer verarbeitet, stehen ihnen als
                  Betroffene i.S.d. DSGVO folgende Rechte gegenüber dem Verantwortlichen zu:
                </p>

                <h3 className={subheading}>3.1 Auskunftsrecht</h3>
                <p>
                  Nutzer können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob
                  personenbezogene Daten, die sie betreffen, von uns verarbeitet werden. Liegt eine
                  solche Verarbeitung vor, können Nutzer Auskunft über folgende Informationen
                  verlangen:
                </p>
                <ul className={listClass}>
                  <li>die Zwecke der Verarbeitung</li>
                  <li>die Kategorien der verarbeiteten Daten</li>
                  <li>die Empfänger bzw. Kategorien von Empfängern</li>
                  <li>die geplante Speicherdauer oder Kriterien für deren Festlegung</li>
                  <li>Bestehen eines Rechts auf Berichtigung, Löschung oder Einschränkung</li>
                  <li>Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li>
                  <li>alle verfügbaren Informationen über die Herkunft der Daten</li>
                  <li>
                    das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling
                    gemäß Art. 22 DSGVO
                  </li>
                </ul>

                <h3 className={subheading}>3.2 Recht auf Berichtigung</h3>
                <p>
                  Nutzer haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem
                  Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten unrichtig oder
                  unvollständig sind. Der Verantwortliche hat die Berichtigung unverzüglich
                  vorzunehmen.
                </p>

                <h3 className={subheading}>3.3 Recht auf Einschränkung der Verarbeitung</h3>
                <p>
                  Unter folgenden Voraussetzungen können Nutzer die Einschränkung der Verarbeitung
                  verlangen:
                </p>
                <ul className={listClass}>
                  <li>
                    wenn Nutzer die Richtigkeit der Daten für eine Überprüfungsdauer bestreiten
                  </li>
                  <li>
                    die Verarbeitung unrechtmäßig ist und Nutzer die Löschung ablehnen und
                    stattdessen die Einschränkung der Nutzung verlangen
                  </li>
                  <li>
                    der Verantwortliche die Daten für die Zwecke der Verarbeitung nicht länger
                    benötigt, Nutzer sie aber zur Geltendmachung von Rechtsansprüchen benötigen
                  </li>
                  <li>
                    wenn Nutzer Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO
                    eingelegt haben
                  </li>
                </ul>

                <h3 className={subheading}>3.4 Recht auf Löschung</h3>
                <p>
                  Nutzer können die unverzügliche Löschung ihrer personenbezogenen Daten verlangen,
                  sofern einer der folgenden Gründe zutrifft:
                </p>
                <ul className={listClass}>
                  <li>Die Daten sind für die Zwecke, für die sie erhoben wurden, nicht mehr notwendig.</li>
                  <li>Nutzer widerrufen eine Einwilligung und es fehlt an einer anderweitigen Rechtsgrundlage.</li>
                  <li>Nutzer legen Widerspruch gegen die Verarbeitung ein.</li>
                  <li>Die Daten wurden unrechtmäßig verarbeitet.</li>
                  <li>Die Löschung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.</li>
                </ul>
                <p>
                  Das Recht auf Löschung besteht nicht, soweit die Verarbeitung zur Ausübung des
                  Rechts auf freie Meinungsäußerung, zur Erfüllung einer rechtlichen Verpflichtung,
                  aus Gründen des öffentlichen Interesses oder zur Geltendmachung von
                  Rechtsansprüchen erforderlich ist.
                </p>

                <h3 className={subheading}>3.5 Recht auf Unterrichtung</h3>
                <p>
                  Haben Nutzer das Recht auf Berichtigung, Löschung oder Einschränkung der
                  Verarbeitung geltend gemacht, ist der Verantwortliche verpflichtet, allen
                  Empfängern, denen die personenbezogenen Daten offengelegt wurden, diese
                  Maßnahmen mitzuteilen.
                </p>

                <h3 className={subheading}>3.6 Recht auf Datenübertragbarkeit</h3>
                <p>
                  Nutzer haben das Recht, ihre personenbezogenen Daten in einem strukturierten,
                  gängigen und maschinenlesbaren Format zu erhalten und diese Daten einem anderen
                  Verantwortlichen zu übermitteln, sofern die Verarbeitung auf einer Einwilligung
                  oder einem Vertrag beruht und mithilfe automatisierter Verfahren erfolgt.
                </p>

                <h3 className={subheading}>3.7 Widerspruchsrecht</h3>
                <p>
                  Nutzer haben das Recht, aus Gründen ihrer besonderen Situation jederzeit gegen
                  die Verarbeitung ihrer personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1
                  lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf
                  diese Bestimmungen gestütztes Profiling.
                </p>

                <h3 className={subheading}>
                  3.8 Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung
                </h3>
                <p>
                  Nutzer haben das Recht, eine datenschutzrechtliche Einwilligungserklärung
                  jederzeit zu widerrufen. Durch den Widerruf wird die Rechtmäßigkeit der
                  aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                  Der Widerruf ist zu richten an:
                </p>
                <div className="space-y-1 pl-4 border-l-2 border-border/50 mt-2">
                  <p className="font-medium text-foreground">
                    Intellomind UG (haftungsbeschränkt)
                  </p>
                  <p>Geschäftsführer: Agron Basha</p>
                  <p>Hüingser Ring 1</p>
                  <p>58710 Menden</p>
                  <p>E-Mail: {emailLink}</p>
                  <p>Telefon: {phoneLink}</p>
                </div>

                <h3 className={subheading}>
                  3.9 Recht auf Beschwerde bei einer Aufsichtsbehörde
                </h3>
                <p>
                  Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
                  Rechtsbehelfs steht Nutzern das Recht auf Beschwerde bei einer Aufsichtsbehörde
                  zu, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes
                  oder des Orts des mutmaßlichen Verstoßes, wenn sie der Ansicht sind, dass die
                  Verarbeitung ihrer personenbezogenen Daten gegen die DSGVO verstößt.
                </p>

                <h3 className={subheading}>
                  3.10 Automatisierte Entscheidungen im Einzelfall einschließlich Profiling
                </h3>
                <p>Automatisierte Entscheidungen im Einzelfall einschließlich Profiling erfolgen nicht.</p>

                <h3 className={subheading}>3.11 Mitteilungspflichten des Verantwortlichen</h3>
                <p>
                  Sollten anderen Empfängern (Dritten) die personenbezogenen Daten von Nutzern mit
                  Rechtsgrund offengelegt worden sein, teilen wir jenen jede Berichtigung, Löschung
                  oder Einschränkung der Verarbeitung mit (Art. 16, Art. 17 Abs. 1 und Art. 18
                  DSGVO). Wir unterrichten Nutzer ferner auf Verlangen über die Empfänger.
                </p>
              </div>
            </section>

            <section className={card} data-testid="section-datenschutz-cookies">
              <h2 className={gradientHeading}>
                4. Angaben zu den verwendeten Cookies und weiterer Technologien
              </h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Wir nutzen Cookies oder weitere Technologien, um unsere Services zu erbringen,
                  auszuwerten und mit den ausgewerteten Daten Marketing zu betreiben. Cookies sind
                  dabei kleine Textdateien, die Daten von besuchten Websites oder Domains enthalten
                  und auf einem Gerät gespeichert werden.
                </p>

                <h3 className={subheading}>4.1 So verwenden wir Cookies und weitere Technologien</h3>
                <p>
                  Wir möchten, dass Nutzer in der Lage sind, eine informierte Entscheidung für oder
                  gegen die Verwendung von Cookies zu treffen. Funktionale Cookies sind für den
                  Besuch unserer Services zwingend und daher schon über unsere Voreinstellungen
                  zugelassen. Statistik- und Marketing-Cookies sind optional und können über den
                  Consent-Banner ein- oder abgelehnt werden.
                </p>

                <h3 className={subheading}>4.2 Speicherdauer von Cookies</h3>
                <p>
                  Sofern wir Nutzern keine expliziten Angaben zur Speicherdauer mitteilen, können
                  Nutzer davon ausgehen, dass die Speicherdauer bis zu zwei Jahre betragen kann.
                  Wurden Cookies auf Basis einer Einwilligung gesetzt, haben Nutzer jederzeit die
                  Möglichkeit, eine erteilte Einwilligung zu widerrufen (Opt-Out).
                </p>

                <h3 className={subheading}>4.3 Arten von Cookies und weiterer Technologien</h3>
                <ul className={listClass}>
                  <li>
                    <span className="font-medium text-foreground">Funktionale Cookies:</span> Diese
                    sind für die grundlegenden technischen Funktionen der Services erforderlich
                    (z.B. sicherer Login, Speicherung des Warenkorb-Inhalts).
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Statistik-Cookies:</span> Diese
                    ermöglichen die Analyse der Services, um deren Leistung zu messen und zu
                    verbessern.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Marketing-Cookies:</span> Diese
                    werden verwendet, um Nutzern interessenrelevante Werbung zu unterbreiten.
                  </li>
                </ul>

                <h3 className={subheading}>4.4 Einwilligungs-Management</h3>
                <p>
                  Wir nutzen ein Einwilligungsmanagement-Tool (Consent-Tool), das es ermöglicht,
                  Nutzer über eine Einwilligung zu bestimmten Tags in unseren Services zu
                  informieren und diese einzuholen, zu verwalten und zu dokumentieren. Die
                  Rechtsgrundlage resultiert aus Art. 6 Abs. 1 lit. f und c DSGVO.
                </p>
                <p className="font-medium text-foreground">
                  Anbieter des von uns genutzten Consent-Tools:
                </p>
                <div className="space-y-0.5 pl-4 border-l-2 border-border/50">
                  <p>Usercentrics GmbH</p>
                  <p>Sendlinger Straße 7</p>
                  <p>80331 München</p>
                </div>
              </div>
            </section>

            <section className={card} data-testid="section-datenschutz-services">
              <h2 className={gradientHeading}>
                5. Datenverarbeitung im Zusammenhang mit der Nutzung unserer Services
              </h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Die Nutzung unserer Services mit all ihren Funktionen geht mit der Verarbeitung
                  von personenbezogenen Daten einher.
                </p>
                <h3 className={subheading}>Informatorische Nutzung unserer Services</h3>
                <p>
                  Das rein informatorische Aufrufen unserer Services erfordert eine Verarbeitung
                  von folgenden personenbezogenen Daten: Gerätetyp und Geräteversion, verwendetes
                  Betriebssystem, IP-Adresse des Endgeräts sowie die Uhrzeit des Aufrufs. Diese
                  Informationen werden automatisch von einem Gerät übermittelt. Die Verarbeitung
                  erfolgt zum Zwecke der Funktionsfähigkeit und Optimierung unserer Services sowie
                  zur Gewährleistung der Sicherheit unserer informationstechnischen Systeme gemäß
                  Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>
            </section>

            <section className={card} data-testid="section-datenschutz-kommunikation">
              <h2 className={gradientHeading}>6. Kommunikations Services</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <h3 className={subheading}>6.1 Kontaktformular / Kontaktaufnahme per E-Mail</h3>
                <p>
                  Wir verarbeiten die personenbezogenen Daten von Nutzern, die diese uns im Rahmen
                  der Kontaktaufnahme zur Verfügung stellen, zum Zweck der Beantwortung einer
                  Anfrage, einer E-Mail oder einer Rückrufbitte. Verarbeitete Datenkategorien sind
                  hierbei Stammdaten, Kontaktdaten, Inhaltsdaten, ggf. Nutzungsdaten,
                  Verbindungsdaten und ggf. Vertragsdaten. Die Rechtsgrundlage basiert auf Art. 6
                  Abs. 1 lit. b DSGVO.
                </p>

                <h3 className={subheading}>6.2 Feedbackformular</h3>
                <p>
                  Wir verarbeiten die personenbezogenen Daten von Nutzern, die diese uns im Rahmen
                  der Vergabe von Feedback zur Verfügung stellen, zur Umsetzung des Feedbacks und
                  Verbesserung unserer Services. Die Rechtsgrundlage basiert auf Art. 6 Abs. 1
                  lit. b DSGVO.
                </p>

                <h3 className={subheading}>6.3 Terminplanung und Terminbuchung</h3>
                <p>
                  Wir nutzen in unseren Services Terminplanungs-Tools, um Termine mit Nutzern zu
                  vereinbaren. Angaben aus dem Terminplanungs-Tool-Formular werden zwecks
                  Bearbeitung einer Anfrage oder eines Vertragsverhältnisses gespeichert. Sollte
                  eine Anfrage beantwortet sein oder der Zweck entfallen, werden wir Daten der
                  Nutzer zeitnah löschen.
                </p>
                <p className="font-medium text-foreground">Anbieter:</p>
                <div className="space-y-0.5 pl-4 border-l-2 border-border/50">
                  <p>Calendly, LLC</p>
                  <p>3423 Piedmont Road NE</p>
                  <p>Atlanta, GA 30305-1754, USA</p>
                  <p>
                    <a
                      href="https://calendly.com/pages/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
                    >
                      calendly.com/pages/privacy
                    </a>
                  </p>
                </div>

                <h3 className={subheading}>6.4 Online Kommunikations-Tools</h3>
                <p>
                  Wir nutzen Online Kommunikations-Tools, um Telefonkonferenzen,
                  Kundengespräche, Online-Meetings und Videokonferenzen durchzuführen. Die
                  Rechtsgrundlage zur Nutzung resultiert aus Art. 6 Abs. 1 lit. b DSGVO
                  (Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
                </p>
                <p className="font-medium text-foreground">Anbieter:</p>
                <div className="space-y-0.5 pl-4 border-l-2 border-border/50">
                  <p>Zoom Video Communications, Inc.</p>
                  <p>55 Almaden Blvd, Suite 600</p>
                  <p>San Jose, CA 95113, USA</p>
                </div>

                <h3 className={subheading}>6.5 Künstliche Intelligenz</h3>
                <p>
                  In unseren Services verwenden wir Dienste künstlicher Intelligenz (KI-Dienste),
                  um unsere Services passgenau auf die Bedürfnisse der Nutzer anzubieten. Die
                  Rechtsgrundlage resultiert aus Art. 6 Abs. 1 lit. b und f DSGVO.
                </p>
                <p className="font-medium text-foreground">Anbieter:</p>
                <div className="space-y-3 pl-4 border-l-2 border-border/50">
                  <div>
                    <p>Microsoft Ireland Operations Limited</p>
                    <p>One Microsoft Place, South County Business Park</p>
                    <p>Leopardstown, Dublin 18, Irland</p>
                  </div>
                  <div>
                    <p>OpenAI Ireland Limited (ChatGPT)</p>
                    <p>1st Floor, The Liffey Trust Centre</p>
                    <p>117-126 Sheriff Street Upper, Dublin 1, D01 YC43, Irland</p>
                  </div>
                </div>

                <h3 className={subheading}>6.6 Fonio.ai</h3>
                <p>
                  Wir nutzen für die Kundenkommunikation den Dienst „Fonio.ai", einen KI-gestützten
                  Telefonassistenten, der eingehende und/oder ausgehende Telefonanrufe automatisiert
                  entgegennimmt, führt, dokumentiert und – je nach Konfiguration – Termine
                  vereinbart oder Informationen erfasst. Dabei werden Stammdaten, Kontaktdaten,
                  Inhaltsdaten sowie Verbindungsdaten wie Telefonnummern und Sprachdaten
                  verarbeitet. Die Nutzung von Fonio.ai erfolgt auf Grundlage von Art. 6 Abs. 1
                  lit. f DSGVO.
                </p>
                <p className="font-medium text-foreground">Anbieter:</p>
                <div className="space-y-0.5 pl-4 border-l-2 border-border/50">
                  <p>fonio GmbH</p>
                  <p>Joanelligasse 5/16</p>
                  <p>1060 Wien, Österreich</p>
                  <p>
                    <a
                      href="https://docs.fonio.ai/Datenschutz/Datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
                    >
                      docs.fonio.ai/Datenschutz
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className={card} data-testid="section-datenschutz-hosting">
              <h2 className={gradientHeading}>7. Bereitstellung unserer Services (Hosting)</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <h3 className={subheading}>7.1 Bereitstellung unserer Services</h3>
                <p>
                  Um Nutzern unsere Services bereitstellen zu können, nehmen wir die Leistungen von
                  Hosting-Anbietern in Anspruch. Zu den verarbeiteten Daten gehören alle Daten, die
                  Nutzer im Rahmen der Nutzung eingeben bzw. die von ihnen hierbei erhoben werden
                  (bspw. IP-Adresse). Die Rechtsgrundlage resultiert aus Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 className={subheading}>7.2 Empfang und Versand von E-Mails</h3>
                <p>
                  Die von uns in Anspruch genommenen Leistungen der Hoster können ebenfalls den
                  Versand, den Empfang sowie die Speicherung von E-Mails umfassen. Die
                  Rechtsgrundlage resultiert aus Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 className={subheading}>7.3 Erhebung von Zugriffsdaten und Logfiles</h3>
                <p>
                  Wir erheben Daten zu jedem Zugriff auf den Server (Serverlogfiles), u.a.
                  Adresse und Name der abgerufenen Services, Datum und Uhrzeit des Abrufs,
                  übertragene Datenmengen, Gerätetyp, Betriebssystem, Referrer URL und IP-Adressen.
                  Die Rechtsgrundlage resultiert aus Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <p className="font-medium text-foreground mt-4">
                  Die von uns eingesetzten Hosting-Anbieter:
                </p>
                <div className="space-y-3 pl-4 border-l-2 border-border/50">
                  <div>
                    <p>HOSTINGER operations UAB</p>
                    <p>Švitrigailos str. 34</p>
                    <p>Vilnius 03230, Litauen</p>
                  </div>
                  <div>
                    <p>Microsoft Ireland Operations Limited</p>
                    <p>One Microsoft Place, South County Business Park</p>
                    <p>Leopardstown, Dublin 18, Irland</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={card} data-testid="section-datenschutz-tracking">
              <h2 className={gradientHeading}>8. Tracking &amp; Tools</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Um einen reibungslosen technischen Ablauf und eine optimale nutzerfreundliche
                  Verwendung unserer Services zu gewährleisten, setzen wir folgende Dienste ein:
                </p>

                <h3 className={subheading}>Google Tag Manager</h3>
                <p>
                  In unseren Services nutzen wir den Google Tag Manager, eine Lösung zum Verwalten
                  von Website-Tags über eine Oberfläche. Der Google Tag Manager selbst erstellt
                  keine Profile und setzt keine Cookies. Über seine Aktivierung werden jedoch
                  weitere Google-Dienste wie Google Analytics eingebunden. Empfänger der Daten ist
                  die Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland. Die
                  Rechtsgrundlage ist eine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
                </p>

                <h3 className={subheading}>Google Search Console</h3>
                <p>
                  Zum Zwecke der fortlaufenden Optimierung des Google-Rankings unserer Services
                  nutzen wir die Google Search Console, einen Webanalysedienst von Google. Im
                  Rahmen der Nutzung der Google Search Console werden keine personenbezogenen
                  Nutzer- bzw. Trackingdaten verarbeitet oder an Google übermittelt.
                </p>

                <h3 className={subheading}>Google Analytics</h3>
                <p>
                  Wir nutzen Google Analytics zum Zweck der statistischen Auswertung der Nutzung
                  unserer Services. Die IP-Adresse wird vor der dauerhaften Speicherung durch
                  Kürzung anonymisiert. Empfänger der Daten ist die Google Ireland Ltd., Gordon
                  House, Barrow Street, Dublin 4, Irland (als gemeinsam Verantwortlicher gemäß
                  Art. 26 DSGVO). Die Rechtsgrundlage ist eine Einwilligung gemäß Art. 6 Abs. 1
                  lit. a DSGVO. Sollten Nutzer die Einwilligung nicht erteilt haben, so nutzen wir
                  Google Analytics im Rahmen von Besuchen in unseren Services nicht (mehr).
                </p>
              </div>
            </section>

            <section className={card} data-testid="section-datenschutz-mailings">
              <h2 className={gradientHeading}>9. Transaktionale Mailings</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Aus administrativen Vorgängen, zur Bestätigung von Aktionen sowie im Rahmen
                  unserer nicht werblichen Kundenkommunikation versenden wir transaktionale
                  Benachrichtigungen an Nutzer. Die Rechtsgrundlage liegt in Art. 6 Abs. 1 lit. b
                  DSGVO, da wir mit den Informationen in den Transaktionalen Mailings unsere
                  vertraglichen Pflichten erfüllen. Sollten wir hierfür auf die Dienste von dritten
                  Anbietern zugreifen, liegt der Rechtsgrund in Art. 6 Abs. 1 lit. f DSGVO.
                </p>
                <p className="font-medium text-foreground">Anbieter:</p>
                <div className="space-y-0.5 pl-4 border-l-2 border-border/50">
                  <p>Twilio SendGrid, Inc.</p>
                  <p>1801 California Street, Suite 500</p>
                  <p>Denver, CO 80202, USA</p>
                </div>
              </div>
            </section>

            <section className={card} data-testid="section-datenschutz-socialmedia">
              <h2 className={gradientHeading}>10. Profile auf Social Media Websites</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Wir unterhalten Profile auf den Plattformen der sozialen Netzwerke und
                  verarbeiten in diesem Rahmen personenbezogene Daten, um mit den dort aktiven
                  Nutzern zu kommunizieren oder Informationen über uns anzubieten. Wir weisen
                  darauf hin, dass Daten beim Besuch unserer Profile außerhalb des Raumes der
                  Europäischen Union verarbeitet werden können. Die Rechtsgrundlage resultiert aus
                  unserem berechtigten Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO. Nutzer können
                  ihre Rechte auch uns gegenüber geltend machen, wir werden Anfragen dann
                  umgehend an den Betreiber der Social-Media-Plattform weiterleiten.
                </p>
                <p className="font-medium text-foreground">Profile und Anbieter:</p>
                <ul className={listClass}>
                  <li>
                    <span className="font-medium text-foreground">Facebook</span> – Meta Platforms
                    Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Instagram</span> – Meta Platforms
                    Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland
                  </li>
                  <li>
                    <span className="font-medium text-foreground">LinkedIn</span> – LinkedIn Ireland
                    Unlimited Company, Wilton Place, Dublin 2, Irland
                  </li>
                  <li>
                    <span className="font-medium text-foreground">X (ehemals Twitter)</span> –
                    Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2,
                    Irland
                  </li>
                </ul>
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
