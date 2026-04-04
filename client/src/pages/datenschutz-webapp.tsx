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
    data-testid="link-datenschutz-webapp-email"
  >
    info@intellomind.ai
  </a>
);

const phoneLink = (
  <a
    href="tel:+4917670599319"
    className="font-medium text-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text transition-colors"
    data-testid="link-datenschutz-webapp-phone"
  >
    +49 176 70599319
  </a>
);

export default function DatenschutzWebapp() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  useMetaTags(
    "Datenschutzerklärung Webapp – IntelloMind",
    "Datenschutzerklärung für die IntelloMind Web-App (app.intellomind.ai) gemäß DSGVO."
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
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">Datenschutzerklärung - Webapp</span>
            </h1>
            <p className="text-muted-foreground text-base">
              für die Inhalte und Funktionen
            </p>
            <p className="text-muted-foreground text-base">
              der{" "}
              <span className="font-medium text-foreground">https://app.intellomind.ai</span>
            </p>
            <p className="text-muted-foreground text-base">
              (nachfolgend „Services")
            </p>
            <p className="text-muted-foreground text-base">
              Stand: März 2026
            </p>
          </div>

          <div className="space-y-10">
            {/* Einleitung */}
            <section className={card} data-testid="section-datenschutz-webapp-einleitung">
              <h2 className={gradientHeading}>Einleitung</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Datenschutzerklärungen sind oft schwer zu lesen. Das verstehen wir. Und möchten es
                  anders machen. Wir möchten Nutzern mit unserer Datenschutzerklärung eine einfach
                  verständliche Erklärung über die Art und Weise der Verarbeitung von
                  personenbezogenen Daten durch uns geben. Hierfür gliedern wir unsere
                  Datenschutzerklärung klar strukturiert für Nutzer auf und zeigen Nutzern zu jedem
                  Themenbereich, ob und wie wir die personenbezogenen Daten von Nutzern verarbeiten.
                </p>
                <p>
                  Wir erläutern Nutzern in dieser Datenschutzerklärung, ob und wie wir
                  personenbezogene Daten verarbeiten. Hierbei stellen wir Nutzern sämtliche
                  Verarbeitungsvorgänge dar, die durch uns, durch von uns beauftragte oder
                  eingebundene Dienste Dritter oder die sonstige Dritte in unserem Auftrag im
                  Rahmen der Nutzung unserer Website, unserer Social Media Profile und der hierbei
                  jeweils verfügbarer Funktionen (nachfolgend zusammen auch „Services" genannt)
                  vorgenommen werden.
                </p>
              </div>
              <h3 className={`${subheading} mt-6`}>Inhaltsverzeichnis</h3>
              <p className={`mb-2 ${body}`}>Unsere Datenschutzerklärung ist wie folgt aufgebaut</p>
              <ol className="list-decimal list-outside ml-5 space-y-1 text-sm text-foreground/80">
                <li>Allgemeines – Kurze Einführung zum Gegenstand der Datenschutzerklärung, zum Verantwortlichen und zum Datenschutzbeauftragen</li>
                <li>Allgemeine Informationen zur Datenverarbeitung – Informationen dazu, was personenbezogene Daten sind, auf welcher rechtlichen Grundlage wir diese verarbeiten oder auch mit Dritten teilen</li>
                <li>Betroffenenrechte – Informationen zu Nutzer Rechten auf u.a. Auskunft, Löschung oder Widerspruch zu unserer Datenverarbeitung</li>
                <li>Angaben zu den verwendeten Cookies und weiterer Technologien – Informationen zur Verwendung von Cookies und weiterer Technologien, mit bzw. mithilfe derer wir die personenbezogenen Daten von Nutzern verarbeiten</li>
                <li>Datenverarbeitung im Zusammenhang mit der Nutzung unserer Services – Informationen zu unserer Datenverarbeitung in unseren Services selbst</li>
                <li>Kommunikations-Services – Informationen zu Diensten zur Kommunikation sowie zur entsprechenden Verarbeitung von personenbezogenen Daten</li>
                <li>Bereitstellung unserer Services – Informationen zu Hostingdienstleistern und den von diesen in Anspruch genommenen Diensten</li>
                <li>Tracking &amp; Tools – Informationen zu Diensten, mittels derer wir Nutzern unsere Services bereitstellen und mittels derer wir die Nutzung unserer Services analysieren</li>
                <li>Transaktionale Mails – Informationen zur Integration von Mailing-Dienstleistern, mit denen wir transaktionale Mailings umsetzen</li>
                <li>Profile auf Social Media – Informationen zu unseren Präsenzen auf den Netzwerken der Sozialen Medien und der entsprechend hierdurch erfolgten Verarbeitung von personenbezogenen Daten</li>
                <li>Payment Abwicklung – Informationen zur Abwicklung von Zahlungen unter Integration von Zahlungsdienstleistern und der hierdurch erfolgten Verarbeitung von personenbezogenen Daten</li>
              </ol>
            </section>

            {/* 1. Allgemeines */}
            <section className={card} data-testid="section-datenschutz-webapp-allgemeines">
              <h2 className={gradientHeading}>1. Allgemeines</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Der Schutz von personenbezogenen Daten und der Privatsphäre ist uns überaus
                  wichtig. Deshalb möchten wir Nutzern umfassende Transparenz bezüglich der
                  Verarbeitung von personenbezogenen Daten (DSGVO) sowie bezüglich der Speicherung
                  von Informationen auf dem Endgerät des Nutzers (TDDDG) bieten. Denn nur, wenn die
                  Verarbeitung von personenbezogenen Daten und Informationen für Nutzer als
                  betroffene Personen nachvollziehbar sind, sind sie ausreichend über den Umfang,
                  die Zwecke und den Nutzen der Verarbeitung informiert.
                </p>
                <p>
                  Diese Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen
                  personenbezogener Daten sowie für die Speicherung von Informationen auf
                  Endgeräten. Nutzer gilt also sowohl im Rahmen der Erbringung von Leistungen in
                  unseren Services als auch innerhalb externer Onlinepräsenzen, wie z.B. unserer
                  Social-Media-Profile.
                </p>
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO), des
                  Bundesdatenschutzgesetzes (BDSG) sowie sonstiger datenschutzrechtlicher Vorgaben
                  ist die
                </p>
                <div className="space-y-1 pl-4 border-l-2 border-border/50">
                  <p className="font-medium text-foreground">
                    Intellomind UG (haftungsbeschränkt)
                  </p>
                  <p>Geschäftsführer: Agron Basha</p>
                  <p>Hüingser Ring 1</p>
                  <p>58710 Menden</p>
                  <p>E-Mail: {emailLink}</p>
                  <p>Telefon: {phoneLink}</p>
                </div>
                <p>Im Folgenden „Verantwortlicher" oder „wir" genannt.</p>
              </div>
            </section>

            {/* 2. Allgemeine Informationen zur Datenverarbeitung */}
            <section className={card} data-testid="section-datenschutz-webapp-datenverarbeitung">
              <h2 className={gradientHeading}>2. Allgemeine Informationen zur Datenverarbeitung</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Zunächst einmal möchten wir Nutzern einleitende Informationen dazu geben, was der
                  Schutz personenbezogener Daten bedeutet, was personenbezogene Daten sind, wie wir
                  sie verarbeiten und welche Sicherheitsmaßnahmen wir hierbei anbringen.
                </p>
                <p>
                  IntelloMind ist eine B2B-SaaS-Plattform für Unternehmen, die KI-gestützte
                  Kundenkommunikation über Chat, E-Mail und optional Telefon einsetzen möchten.
                  Kunden (im Verlauf dieser Datenschutzerklärung auch „Nutzer") können KI-Assistenten
                  konfigurieren sowie ein zentrales Ticketsystem zur Verwaltung und Bearbeitung
                  eingehender Endkundenanfragen nutzen. IntelloMind arbeitet mandantengetrennt
                  (Multi-Tenant-Struktur), sodass eine Vermischung von personenbezogenen Daten
                  verschiedener Nutzer von IntelloMind ausgeschlossen ist.
                </p>

                <h3 className={subheading}>2.1 Verarbeitung personenbezogener Daten</h3>
                <p>
                  Personenbezogene Daten (nachfolgend auch „Daten") sind Einzelangaben über
                  persönliche oder sachliche Verhältnisse einer bestimmten oder bestimmbaren
                  natürlichen Person.
                </p>
                <p>
                  Einzelangaben über persönliche oder sachliche Verhältnisse sind beispielsweise
                  die Folgenden Daten, wobei klargestellt wird, dass nicht alle diese Daten auch
                  durch unsere Services verarbeitet werden müssen:
                </p>
                <ul className={listClass}>
                  <li>Personaldaten – Name, Alter, Familienstand, Geburtsdatum</li>
                  <li>Kommunikationsdaten – Anschrift, Telefonnummer, E-Mail Adresse</li>
                  <li>Kontodaten – Konto-, Kreditkartennummer</li>
                  <li>Geodaten – IP Adresse &amp; Standortdaten</li>
                  <li>Gesundheitsdaten – Gesundheitlicher Zustand, Krankheiten</li>
                </ul>
                <p>Das „Verarbeiten" personenbezogener Daten umfasst beispielsweise die folgenden Maßnahmen:</p>
                <ul className={listClass}>
                  <li>Erhebung – Die Erhebung von Daten über Kontaktformulare, per E-Mail oder durch von uns genutzte Prozesse und Dienste</li>
                  <li>Übermittlung – Die Übermittlung von Daten an unsere Dienstleister, eingebundene Dienste oder sonstige Dritte</li>
                  <li>Speicherung – Die Speicherung von Daten in unseren Datenbanken oder auf unseren Servern</li>
                  <li>Veränderung – Die Änderung von Daten aufgrund von Änderungen des Namens, des Wohnortes oder von Angaben in unseren Services</li>
                  <li>Löschen – Das Löschen von Daten, wenn wir keine Berechtigung mehr haben, diese zu verarbeiten</li>
                </ul>

                <h3 className={subheading}>2.2 Rechtliche Grundlagen zur Verarbeitung von personenbezogenen Daten</h3>
                <p>
                  Wir verarbeiten personenbezogene Daten nur innerhalb der rechtlich zulässigen
                  Grenzen. Dazu verpflichtet uns schon das Gesetz. Insbesondere die DSGVO. Daraus
                  sind wir verpflichtet, Datenverarbeitungsvorgänge immer auf eine rechtliche
                  Grundlage stützen zu können. Diese rechtlichen Grundlagen sind in Art. 6 Abs. 1
                  DSGVO normiert. Im Folgenden nennen wir sämtliche rechtlichen Grundlagen, auf die
                  wir eine Verarbeitung von personenbezogenen Daten stützen.
                </p>
                <ul className={listClass}>
                  <li>
                    <span className="font-medium text-foreground">Einwilligung</span> – Art. 6
                    Abs. 1 lit. a DSGVO: Eine Verarbeitung von Daten erfolgt, wenn Nutzer in diese
                    Verarbeitung, nach vorheriger ausreichender Information über deren Umfang und
                    Zwecke durch uns, aktiv, also bspw. durch ein „Opt-In", eingewilligt haben.
                    Sollten Nutzer ihre Einwilligung widerrufen oder nicht erteilt haben, so
                    verarbeiten wir Daten unserer Nutzer nicht (mehr) für Zwecke, bei denen wir
                    eine Einwilligung benötigen.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Einwilligung besondere Kategorien</span> – Art. 9
                    Abs. 2 lit. a DSGVO: Eine Verarbeitung von Daten, die in besondere Kategorien
                    personenbezogener Daten fallen, wie bspw. Gesundheitsdaten, politische
                    Meinungen etc. (siehe auch Art. 9 Abs. 1 DSGVO) erfolgt, wenn Nutzer in diese
                    Verarbeitung, nach vorheriger ausreichender Information über deren Umfang und
                    Zwecke durch uns, aktiv, also bspw. durch ein „Opt-In", eingewilligt haben.
                    Sollten Nutzer ihre Einwilligung widerrufen oder nicht erteilt haben, so
                    verarbeiten wir Daten unserer Nutzer nicht (mehr) für Zwecke, bei denen wir
                    eine Einwilligung benötigen.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Zur Vertragserfüllung</span> – Art. 6
                    Abs. 1 lit. b: Eine Verarbeitung von Daten erfolgt, wenn sie für die
                    Erfüllung eines Vertrags zwischen uns oder zur Durchführung vorvertraglicher
                    Maßnahmen erforderlich ist. Sofern die Verarbeitung zur Vertragserfüllung nicht
                    mehr notwendig ist, verarbeiten wir die personenbezogenen Daten von Nutzern
                    nicht mehr.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Erfüllung einer rechtlichen Verpflichtung</span> . Art. 6
                    Abs. 1 lit. c DSGVO: Eine Verarbeitung von Daten erfolgt, wenn diese
                    Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,
                    der wir als Verantwortliche unterliegen.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Berechtigtes Interesse</span> – Art. 6
                    Abs. 1 lit. f DSGVO: Eine Verarbeitung von Daten erfolgt, wenn dies zur
                    Wahrung eines auf unserer Seite liegenden berechtigten Interesses erforderlich
                    ist und hierbei Interessen oder Grundrechte und Grundfreiheiten der Nutzer,
                    den Schutz von Daten betreffend, nicht überwiegen.
                  </li>
                </ul>
                <p>
                  Personenbezogene Daten werden von uns nur für eindeutige Zwecke verarbeitet
                  (Art. 5 Abs. 1 lit. b DSGVO). Sobald der Zweck der Verarbeitung wegfällt, werden
                  die personenbezogenen Daten von Nutzern gelöscht oder durch technische sowie
                  organisatorische Maßnahmen geschützt (z.B. durch Pseudonymisierung).
                </p>
                <p>
                  Gleiches gilt für den Ablauf einer vorgeschriebenen Speicherfrist, vorbehaltlich
                  der Fälle, in denen eine weitere Speicherung für einen Vertragsabschluss oder
                  Vertragserfüllung notwendig ist. Darüber hinaus kann sich eine gesetzliche Pflicht
                  zu einer längeren Speicherung oder einer Weitergabe an Dritte (insb. an
                  Strafverfolgungsbehörden) ergeben. In sonstigen Fällen hängt die
                  Speicherdauer und Art der erhobenen Daten sowie die Art der Datenverarbeitung
                  davon ab, welche Funktionen Nutzer im Einzelfall nutzt. Gerne geben wir Nutzern
                  darüber auch im Einzelfall Auskunft, gemäß Art. 15 DSGVO.
                </p>

                <h3 className={subheading}>2.3 Diese Datenkategorien verarbeiten wir</h3>
                <p>Datenkategorien sind insbesondere die folgenden Daten:</p>
                <ul className={listClass}>
                  <li>Stammdaten (z.B. Namen, Anschriften, Geburtsdaten)</li>
                  <li>Kontaktdaten (z.B. E-Mail-Adressen, Telefonnummern, Messengerdienste)</li>
                  <li>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos, Inhalte von Dokumenten/Dateien)</li>
                  <li>Vertragsdaten (z.B. Vertragsgegenstand, Laufzeiten, Kundenkategorie)</li>
                  <li>Zahlungsdaten (z.B. Bankverbindungen, Zahlungshistorie, Verwendung sonstiger Zahlungsdienstleister)</li>
                  <li>Nutzungsdaten (z.B. Verlauf in unseren Services, Nutzung bestimmter Inhalte, Zugriffszeiten)</li>
                  <li>Verbindungsdaten (z.B. Geräte-Informationen, IP-Adressen, URL-Referrer)</li>
                </ul>

                <h3 className={subheading}>2.4 Diese Sicherheitsmaßnahmen treffen wir</h3>
                <p>
                  Nach Maßgabe der gesetzlichen Vorgaben und unter Berücksichtigung des Stands der
                  Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und
                  der Zwecke der Verarbeitung sowie der unterschiedlichen
                  Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung von Rechten und
                  Freiheiten treffen wir geeignete technische und organisatorische Maßnahmen, um
                  ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
                </p>
                <p>
                  Zu den Maßnahmen gehören insbesondere die Sicherstellung, dass Daten unserer
                  Nutzer vertraulich, integer und jederzeit verfügbar gespeichert und verarbeitet
                  werden. Weiterhin gehören Kontrollen des Zugangs zu Daten sowie des Zugriffs, der
                  Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihre Trennung von
                  Daten anderer natürlicher Personen zu den Sicherheitsmaßnahmen, die wir
                  implementieren. Des Weiteren haben wir Verfahren eingerichtet, die eine
                  Wahrnehmung von Betroffenenrechten (siehe unter Ziff. 3), die Löschung von
                  Daten und Reaktionen bei einer Gefahr für Daten unserer Nutzer gewährleisten.
                  Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
                  Entwicklung unserer Software sowie durch Verfahren die dem Prinzip des
                  Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche
                  Voreinstellungen entsprechen.
                </p>

                <h3 className={subheading}>2.5 So übermitteln oder offenbaren wir personenbezogene Daten gegenüber Dritten</h3>
                <p>
                  Im Rahmen unserer Verarbeitungsmaßnahmen von personenbezogenen Daten kommt es
                  vor, dass diese Daten an andere Stellen, Unternehmen, rechtlich selbstständige
                  Organisationseinheiten oder Personen übermittelt oder offengelegt werden. Diese
                  Dritten können z.B. Zahlungsinstitute im Rahmen von Zahlungsvorgängen, mit
                  IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten,
                  die wir in unsere Services eingebunden haben, gehören. Sollten wir die
                  personenbezogenen Daten von Nutzern an Dritte übermitteln oder offenbaren,
                  beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende
                  Verträge bzw. Vereinbarungen, die dem Schutz von Daten dienen, mit den
                  Empfängern von Daten ab.
                </p>

                <h3 className={subheading}>2.6 So erfolgt eine Drittlandübermittlung</h3>
                <p>
                  Sollte in dieser Datenschutzerklärung dargestellt sein, dass wir die
                  personenbezogenen Daten von Nutzern in ein Drittland, also ein Land außerhalb der
                  EU bzw. außerhalb des EWR, übermitteln, gilt Folgendes. Eine Drittlandübermittlung
                  erfolgt nur in Übereinstimmung mit den gesetzlichen Vorgaben. Wir sichern Nutzern
                  zu, dass wir eine vertragliche oder gesetzliche Ermächtigung zur Übermittlung und
                  Verarbeitung von Daten in dem betreffenden Drittland haben. Darüber hinaus lassen
                  wir Daten unserer Nutzer nur von Dienstleistern in Drittländern verarbeiten, die
                  aus unserer Sicht ein anerkanntes Datenschutzniveau aufweisen. Das bedeutet, dass
                  zwischen der EU und dem Land, in dem wir die personenbezogenen Daten von Nutzern
                  übermitteln, z.B. ein entsprechender Angemessenheitsbeschluss besteht. Ein
                  „Angemessenheitsbeschluss" ist ein Beschluss, der von der Europäischen Kommission
                  gemäß Art. 45 DSGVO angenommen wird und durch den festgelegt wird, dass ein
                  Drittland (d. h. ein Land, das nicht an die DSGVO gebunden ist) oder eine
                  internationale Organisation ein angemessenes Schutzniveau für personenbezogene
                  Daten bietet. Alternativ, also bspw. wenn es keinen Angemessenheitsbeschluss
                  gibt, erfolgt eine Drittlandübermittlung nur, wenn etwa vertragliche
                  Verpflichtungen zwischen uns und dem Dienstleister im Drittland durch sogenannte
                  Standardvertragsklauseln der EU-Kommission vorliegen und weitergehende technische
                  Sicherheitsvorkehrungen getroffen wurden, die ein angemessen gleiches Schutzniveau
                  zu dem in der EU gewährleisten bzw. der Dienstleister im Drittland
                  Datenschutz-Zertifizierungen vorweisen kann und Daten unserer Nutzer nur gemäß
                  interner Datenschutzvorschriften verarbeitet werden (Art. 44 bis 49 DSGVO.
                  Informationsseite der EU-Kommission:{" "}
                  <a
                    href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
                  >
                    ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de
                  </a>).
                </p>
                <p>
                  Im Rahmen des sogenannten „Data Privacy Framework" („DPF") hat die EU-Kommission
                  das Datenschutzniveau für bestimmte Unternehmen aus den USA im Rahmen des
                  Angemessenheitsbeschlusses vom 10.07.2023 als sicher anerkannt. Eine Liste der
                  zertifizierten Unternehmen als auch weitere Informationen zu dem DPF können
                  Nutzer der Webseite des Handelsministeriums der USA unter{" "}
                  <a
                    href="https://www.dataprivacyframework.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
                  >
                    www.dataprivacyframework.gov
                  </a>{" "}
                  (in Englisch) entnehmen. Wir informieren Nutzer im Rahmen dieser
                  Datenschutzerklärung, welche von uns eingesetzten Services unter dem Data Privacy
                  Framework zertifiziert sind.
                </p>

                <h3 className={subheading}>2.7 Löschung von Daten</h3>
                <p>
                  Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben
                  gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden
                  oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser
                  Daten entfallen ist oder sie für den Zweck nicht erforderlich sind). Sofern die
                  Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke
                  erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die
                  Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für
                  Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen
                  oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
                  juristischen Person erforderlich ist.
                </p>
                <p>
                  Im Rahmen dieser Datenschutzerklärung informieren wir ggf. zu der Löschung sowie
                  zu der Aufbewahrung von Daten, die speziell für die jeweiligen
                  Verarbeitungsprozesses gelten.
                </p>

                <h3 className={subheading}>2.8 Speicherung von und Zugriff auf Daten auf dem Endgerät des Nutzers</h3>
                <p>
                  Sofern wir von Nutzern keine Einwilligung dazu einholen, erfolgt die Speicherung
                  von oder der Zugriff auf Informationen auf dem Endgerät des Nutzers gemäß § 25
                  Abs. 2 Nr. 2 des Gesetzes über den Datenschutz und den Schutz der Privatsphäre
                  in der Telekommunikation und bei Digitalen Diensten (TDDDG), da die Speicherung
                  von und der Zugriff auf diese Informationen unbedingt erforderlich ist, um die
                  gewünschten Funktionen unserer Services zur Verfügung zu stellen. Sofern wir eine
                  Einwilligung dazu einholen, ist die Rechtsgrundlage § 25 Abs. 1 TDDDG. Unsere
                  Services verwenden Cookies, Tokens oder andere Technologien, die ggf. auf
                  Endgeräten gespeichert werden und ohne die die Bereitstellung unserer Services
                  nicht möglich wäre.
                </p>
                <p>
                  Cookies, Tokens oder andere Technologien sind in der Regel Textdateien, die auf
                  dem Endgerät des Nutzers gespeichert und von uns und Dritten bei einem Aufruf
                  unserer Services ausgelesen werden können. Viele der vorgenannten Technologien
                  enthalten eine eigene ID. Eine solche ID ist eine eindeutige Kennung der jeweils
                  verwendeten Technologie. Nutzer besteht aus einer Zeichenfolge, durch welche
                  Webseiten und Server dem konkreten Internetbrowser oder dem konkret genutzten
                  Dienst oder Endgerät zugeordnet werden können, in dem Cookies, Tokens oder andere
                  Technologien gespeichert wurden. Dies ermöglicht es den Betreibern von Webseiten
                  und Analysediensten, Nutzer als Nutzer zu identifizieren und von anderen zu
                  unterscheiden.
                </p>

                <h3 className={subheading}>2.9 Auftragsverarbeitung</h3>
                <p>
                  Sollten wir uns zur Verarbeitung von Daten externer Dienstleister bedienen,
                  werden diese von uns sorgfältig ausgewählt und beauftragt. Sollte es sich bei
                  den Diensten, die diese Dienstleister erbringen, um Auftragsverarbeitungen im
                  Sinne von Art. 28 DSGVO handeln, so sind die Dienstleister an unsere Weisungen
                  gebunden und werden regelmäßig kontrolliert. Dabei entsprechen unsere
                  Auftragsverarbeitungsverträge den strengen Voraussetzungen des Art. 28 DSGVO
                  sowie den Vorgaben der deutschen Datenschutzbehörden.
                </p>
              </div>
            </section>

            {/* 3. Betroffenenrechte */}
            <section className={card} data-testid="section-datenschutz-webapp-betroffenenrechte">
              <h2 className={gradientHeading}>3. Betroffenenrechte</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Werden personenbezogene Daten unserer Nutzer verarbeitet, sind sie Betroffener
                  i.S.d. DSGVO und es stehen Nutzern als Nutzer folgende Rechte gegenüber dem
                  Verantwortlichen zu:
                </p>

                <h3 className={subheading}>3.1 Auskunftsrecht</h3>
                <p>
                  Nutzer können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob
                  personenbezogene Daten, die Nutzer betreffen, von uns verarbeitet werden.
                </p>
                <p>Liegt eine solche Verarbeitung vor, können Nutzer von dem Verantwortlichen über folgende Informationen Auskunft verlangen:</p>
                <ul className={listClass}>
                  <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>
                  <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>
                  <li>die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Nutzer betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;</li>
                  <li>die geplante Dauer der Speicherung der Nutzer betreffenden personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;</li>
                  <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der Nutzer betreffenden personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;</li>
                  <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
                  <li>alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;</li>
                  <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.</li>
                  <li>Nutzern steht das Recht zu, Auskunft darüber zu verlangen, ob die Nutzer betreffenden personenbezogenen Daten in ein Drittland oder an eine internationale Organisation übermittelt werden. In diesem Zusammenhang können Nutzer verlangen, über die geeigneten Garantien gemäß Art. 46 DSGVO im Zusammenhang mit der Übermittlung unterrichtet zu werden.</li>
                </ul>

                <h3 className={subheading}>3.2 Recht auf Berichtigung</h3>
                <p>
                  Nutzer haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem
                  Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Nutzer
                  betreffen, unrichtig oder unvollständig sind. Der Verantwortliche hat die
                  Berichtigung unverzüglich vorzunehmen.
                </p>

                <h3 className={subheading}>3.3 Recht auf Einschränkung der Verarbeitung</h3>
                <p>Unter den folgenden Voraussetzungen können Nutzer die Einschränkung der Verarbeitung der Nutzer betreffenden personenbezogenen Daten verlangen:</p>
                <ul className={listClass}>
                  <li>wenn Nutzer die Richtigkeit der Nutzer betreffenden personenbezogenen Daten für eine Dauer bestreiten, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;</li>
                  <li>die Verarbeitung unrechtmäßig ist und Nutzer die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen;</li>
                  <li>der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Nutzer diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder</li>
                  <li>wenn Nutzer Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Gründen der Nutzer überwiegen.</li>
                  <li>Wurde die Verarbeitung der Nutzer betreffenden personenbezogenen Daten eingeschränkt, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit einer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden.</li>
                </ul>
                <p>
                  Wurde die Einschränkung der Verarbeitung nach den o.g. Voraussetzungen
                  eingeschränkt, werden Nutzer von dem Verantwortlichen unterrichtet, bevor die
                  Einschränkung aufgehoben wird.
                </p>

                <h3 className={subheading}>3.4 Recht auf Löschung</h3>
                <p className="font-medium text-foreground/90">3.4.1.</p>
                <p>
                  Nutzer können von dem Verantwortlichen verlangen, dass die Nutzer betreffenden
                  personenbezogenen Daten unverzüglich gelöscht werden, und der Verantwortliche ist
                  verpflichtet diese Daten unverzüglich zu löschen, sofern einer der folgenden
                  Gründe zutrifft:
                </p>
                <ul className={listClass}>
                  <li>Die Nutzer betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
                  <li>Nutzer widerrufen eine Einwilligung, auf die sich die Verarbeitung gemäß Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
                  <li>Nutzer legen gemäß Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Nutzer legen gemäß Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.</li>
                  <li>Die Nutzer betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                  <li>Die Löschung der Nutzer betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
                  <li>Die Nutzer betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.</li>
                </ul>
                <p className="font-medium text-foreground/90">3.4.2.</p>
                <p>
                  Hat der Verantwortliche die Nutzer betreffenden personenbezogenen Daten
                  öffentlich gemacht und ist er gemäß Art. 17 Abs. 1 DSGVO zu deren Löschung
                  verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und
                  der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für
                  die Datenverarbeitung Verantwortliche, die die personenbezogenen Daten
                  verarbeiten, darüber zu informieren, dass Nutzer als betroffene Personen von
                  ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien
                  oder Replikationen dieser personenbezogenen Daten verlangt haben.
                </p>
                <p className="font-medium text-foreground/90">3.4.3.</p>
                <p>Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist</p>
                <ul className={listClass}>
                  <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
                  <li>zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;</li>
                  <li>aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Ab. 3 DSGVO;</li>
                  <li>für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gemäß Art. 89 Abs. 1 DSGVO, soweit das in Abs. 1 genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder</li>
                  <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
                </ul>

                <h3 className={subheading}>3.5 Recht auf Unterrichtung</h3>
                <p>
                  Haben Nutzer das Recht auf Berichtigung, Löschung oder Einschränkung der
                  Verarbeitung gegenüber dem Verantwortlichen geltend gemacht, ist dieser
                  verpflichtet, allen Empfängern, denen die Nutzer betreffenden personenbezogenen
                  Daten offengelegt wurden, diese Berichtigung oder Löschung der Daten oder
                  Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als
                  unmöglich oder ist mit einem unverhältnismäßigen Aufwand verbunden.
                </p>
                <p>
                  Nutzern steht gegenüber dem Verantwortlichen das Recht zu, über diese Empfänger
                  unterrichtet zu werden.
                </p>

                <h3 className={subheading}>3.6 Recht auf Datenübertragbarkeit</h3>
                <p>
                  Nutzer haben das Recht, die Nutzer betreffenden personenbezogenen Daten, die
                  Nutzer dem Verantwortlichen bereitgestellt haben, in einem strukturierten,
                  gängigen und maschinenlesbaren Format zu erhalten. Außerdem haben Nutzer das
                  Recht diese Daten einem anderen Verantwortlichen ohne Behinderung durch den
                  Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu
                  übermitteln, sofern die Verarbeitung auf einer Einwilligung gemäß Art. 6 Abs. 1
                  lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gemäß
                  Art. 6 Abs. 1 lit. b DSGVO beruht und die Verarbeitung mithilfe automatisierter
                  Verfahren erfolgt.
                </p>
                <p>
                  In Ausübung dieses Rechts haben Nutzer ferner das Recht, zu erwirken, dass die
                  Nutzer betreffenden personenbezogenen Daten direkt von einem Verantwortlichen
                  einem anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar
                  ist. Freiheiten und Rechte anderer Personen dürfen hierdurch nicht beeinträchtigt
                  werden.
                </p>
                <p>
                  Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung
                  personenbezogener Daten, die für die Wahrnehmung einer Aufgabe erforderlich ist,
                  die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt,
                  die dem Verantwortlichen übertragen wurde.
                </p>

                <h3 className={subheading}>3.7 Widerspruchsrecht</h3>
                <p>
                  Nutzer haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation
                  ergeben, jederzeit gegen die Verarbeitung der Nutzer betreffenden
                  personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO
                  erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen
                  gestütztes Profiling.
                </p>
                <p>
                  Der Verantwortliche verarbeitet die Nutzer betreffenden personenbezogenen Daten
                  nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die
                  Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der Nutzer
                  überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder
                  Verteidigung von Rechtsansprüchen.
                </p>
                <p>
                  Werden die Nutzer betreffenden personenbezogenen Daten verarbeitet, um
                  Direktwerbung zu betreiben, haben Nutzer das Recht, jederzeit Widerspruch gegen
                  die Verarbeitung der Nutzer betreffenden personenbezogenen Daten zum Zwecke
                  derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit
                  solcher Direktwerbung in Verbindung steht.
                </p>
                <p>
                  Widersprechen Nutzer der Verarbeitung für Zwecke der Direktwerbung, so werden die
                  Nutzer betreffenden personenbezogenen Daten nicht mehr für diese Zwecke
                  verarbeitet.
                </p>
                <p>
                  Nutzer haben die Möglichkeit, im Zusammenhang mit der Nutzung von Diensten der
                  Informationsgesellschaft – ungeachtet der Richtlinie 2002/58/EG – ihr
                  Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen
                  technische Spezifikationen verwendet werden.
                </p>

                <h3 className={subheading}>3.8 Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung</h3>
                <p>
                  Nutzer haben das Recht, eine datenschutzrechtliche Einwilligungserklärung
                  jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die
                  Rechtmäßigkeit, der aufgrund der Einwilligung bis zum Widerruf erfolgten
                  Verarbeitung nicht berührt. Die Verarbeitung ist bis zu einem Widerruf
                  rechtmäßig – der Widerruf wirkt somit erst auf die Verarbeitung nach Zugang des
                  Widerrufs. Nutzer können den Widerruf formlos per Post oder E-Mail erklären. Die
                  Verarbeitung von personenbezogenen Daten erfolgt dann nicht mehr, vorbehaltlich
                  der Gestattung durch eine anderweitige gesetzliche Grundlage. Ist dies nicht der
                  Fall, müssen Daten unserer Nutzer nach dem Widerruf gemäß Art. 17 Abs. 2 DSGVO
                  unverzüglich gelöscht werden. Das Recht, eine Einwilligung vorbehaltlich der oben
                  genannten Voraussetzungen zu widerrufen wird gewährleistet.
                </p>
                <p>Der Widerruf ist zu richten an:</p>
                <div className="space-y-1 pl-4 border-l-2 border-border/50">
                  <p className="font-medium text-foreground">Intellomind UG (haftungsbeschränkt)</p>
                  <p>Geschäftsführer: Agron Basha</p>
                  <p>Hüingser Ring 1</p>
                  <p>58710 Menden</p>
                  <p>E-Mail: {emailLink}</p>
                  <p>Telefon: {phoneLink}</p>
                </div>

                <h3 className={subheading}>3.9 Recht auf Beschwerde bei einer Aufsichtsbehörde</h3>
                <p>
                  Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
                  Rechtsbehelfs steht Nutzern das Recht auf Beschwerde bei einer Aufsichtsbehörde,
                  insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder
                  des Orts des mutmaßlichen Verstoßes, wenn Nutzer der Ansicht sind, dass die
                  Verarbeitung der Nutzer betreffenden personenbezogenen Daten gegen die DSGVO
                  verstößt.
                </p>
                <p>
                  Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den
                  Beschwerdeführer über den Stand und die Ergebnisse der Beschwerde einschließlich
                  der Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
                </p>

                <h3 className={subheading}>3.10 Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</h3>
                <p>Automatisierte Entscheidungen im Einzelfall einschließlich Profiling erfolgen nicht.</p>

                <h3 className={subheading}>3.11 Mitteilungspflichten des Verantwortlichen</h3>
                <p>
                  Sollten anderen Empfängern (Dritte) die personenbezogenen Daten von Nutzern mit
                  Rechtsgrund offengelegt worden sein, teilen wir jenen jede Berichtigung, Löschung
                  oder Einschränkung der Verarbeitung von personenbezogenen Daten mit (Art. 16,
                  Art 17 Abs. 1 und Art. 18 DSGVO). Die Mitteilungspflicht entfällt, wenn sie mit
                  einem unverhältnismäßigen Aufwand verbunden ist oder unmöglich ist. Wir
                  unterrichten Nutzer ferner auf Verlangen über die Empfänger.
                </p>
              </div>
            </section>

            {/* 4. Cookies */}
            <section className={card} data-testid="section-datenschutz-webapp-cookies">
              <h2 className={gradientHeading}>4. Angaben zu den verwendeten Cookies und weiterer Technologien</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Wir nutzen Cookies oder weitere Technologien, um unsere Services zu erbringen,
                  auszuwerten und mit den ausgewerteten Daten Marketing zu betreiben. Cookies sind
                  dabei bspw. kleine Textdateien, die Daten von besuchten Websites oder Domains
                  enthalten und auf einem Gerät (Computer, Tablet oder Smartphone) gespeichert
                  werden. Greifen Nutzer auf eine Website zu, sendet der auf einem Gerät
                  gespeicherte Cookie Informationen an denjenigen, der den Cookie platziert hat.
                </p>

                <h3 className={subheading}>4.1 So verwenden wir Cookies und weitere Technologien</h3>
                <p>
                  Wir möchten, dass Nutzer in der Lage sind, eine informierte Entscheidung für oder
                  gegen die Verwendung von Cookies und weiterer Technologien zu treffen, die für die
                  technischen Eigenschaften der Services nicht unbedingt erforderlich sind. Daher
                  ermöglichen wir es Nutzern für den Fall, dass wir Cookies und weitere Technologien
                  einsetzen, die einer Einwilligung bedürfen, im Rahmen einer freiwilligen
                  Entscheidung beim erstmaligen Besuch unserer Services und danach dauerhaft in
                  entsprechenden Einstellungen zu wählen, welche Cookies und weitere Technologien
                  Nutzer zulassen. Hierbei gilt stets, dass für den Besuch unserer Services
                  Funktionale Cookies und weitere Technologien zwingend sind und daher schon über
                  unsere Voreinstellungen zugelassen sind. Statistik und Marketing Cookies und
                  weitere Technologien sind optional. Nutzer können sie zulassen, indem Nutzer im
                  Consent Banner in das Setzen dieser Cookies und weiterer Technologien entsprechend
                  einwilligen. Alternativ können Nutzer Statistik und Marketing Cookies und weitere
                  Technologien ablehnen.
                </p>

                <h3 className={subheading}>4.2 Speicherdauer von Cookies und weiterer Technologien</h3>
                <p>
                  Sofern wir Nutzern keine expliziten Angaben zur Speicherdauer von Cookies und
                  weiterer Technologien mitteilen (z.B. im Rahmen des Consent Banners), können
                  Nutzer davon ausgehen, dass die Speicherdauer bis zu zwei Jahre betragen kann.
                  Wurden Cookies und weitere Technologien auf Basis einer Einwilligung gesetzt,
                  haben Nutzer jederzeit die Möglichkeit, eine erteilte Einwilligung zu widerrufen
                  oder der Verarbeitung von Daten durch Cookie / Technologien zu widersprechen
                  (zusammenfassend als „Opt-Out" bezeichnet).
                </p>

                <h3 className={subheading}>4.3 Arten von Cookies und weiterer Technologien</h3>
                <p>Sachlich unterscheiden wir zwischen</p>
                <ul className={listClass}>
                  <li>
                    <span className="font-medium text-foreground">Funktionalen Cookies / Technologien:</span>{" "}
                    Diese sind für die grundlegenden technischen Funktionen der Services
                    erforderlich. Nutzer ermöglichen bspw. einen sicheren Login und die Speicherung
                    des Fortschritts bei Bestellvorgängen. Weiterhin ermöglichen sie uns bspw. das
                    Speichern von Anmeldedaten, des Warenkorb-Inhalts und die einheitliche
                    Darstellung von Seiteninhalten.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Statistik Cookies / Technologien:</span>{" "}
                    Diese ermöglichen uns die Analyse der Services, damit wir deren Leistung messen
                    und verbessern können. Nutzer können persönliche Einstellungen der Statistik
                    ändern, indem Nutzer auf den entsprechenden Opt-Out Link klicken.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Marketing Cookies / Technologien:</span>{" "}
                    Diese werden von uns verwendet, um Nutzern Werbung zu unterbreiten, die für
                    Interessen relevant sein könnte. Nutzer ermöglichen bspw. das Teilen von Seiten
                    über Soziale Netzwerke und das Schreiben von Kommentaren. Ebenso werden
                    Angebote, die den Interessen der Nutzer entsprechen könnten, angezeigt. Nutzer
                    können persönliche Einstellungen im Marketing ändern, indem sie auf den
                    entsprechenden Opt-Out Link klicken.
                  </li>
                </ul>

                <h3 className={subheading}>4.4 Einwilligungs Management</h3>
                <p>
                  Wir nutzen das Einwilligungsmanagement-Tool (nachfolgend auch „Consent-Tool") des
                  unten genannten Anbieters im Rahmen der Tracking- und Analysetätigkeiten in
                  unseren Services. Das Consent-Tool sammelt Logfile- und Einwilligungsdaten. Das
                  Consent-Tools ermöglicht es, Nutzer über eine Einwilligung zu bestimmten Tags in
                  unseren Services zu informieren und diese einzuholen, zu verwalten und zu
                  dokumentieren. Wir verarbeiten dabei die folgenden Daten: (1) Consent Daten bzw.
                  Daten der Einwilligung (anonymisierte Logbuchdaten (Consent ID, Processor ID,
                  Controller ID), Consent Status, Timestamp), (2) Device Daten bzw. Daten der
                  verwendeten Geräte (u.a. gekürzte IP-Adressen (IP v4, IP v6),
                  Geräteinformationen, Timestamp), (3) User Daten bzw. Benutzerdaten (u.a. eMail,
                  ID, Browserinformationen, SettingIDs, Changelog). Die ConsentID (enthält die
                  oben genannten Daten) und der Consent-Status inkl. Zeitstempel werden in dem
                  lokalen Speicher des Browsers und gleichzeitig auf den von uns eingesetzten
                  Cloud-Servern gespeichert. Eine weitere Verarbeitung erfolgt nur, wenn Nutzer
                  eine Anfrage auf Auskunftsersuchen stellen oder die Zustimmung widerrufen. Die
                  Rechtsgrundlage zur Verarbeitung personenbezogener Daten mittels des
                  Consent-Tools nach der hier genannten Maßgabe resultiert aus unserem berechtigten
                  Interesse sowie zur Erfüllung rechtlicher Vorgaben und damit aus Art. 6 Abs. 1
                  lit. f und c DSGVO. Mittels des Consent-Tools möchten wir gesetzliche Vorgaben
                  zum Datenschutz und zum Tracking erfüllen und damit die Funktionsweise unserer
                  informationstechnischen Systeme gesetzeskonform und nutzerzentriert aufstellen.
                </p>
                <p className="font-medium text-foreground">Anbieter des von uns genutzten Consent-Tools</p>
                <div className="space-y-0.5 pl-4 border-l-2 border-border/50">
                  <p>Usercentrics GmbH</p>
                  <p>Sendlinger Straße 7</p>
                  <p>80331 München</p>
                </div>
              </div>
            </section>

            {/* 5. Datenverarbeitung in Services */}
            <section className={card} data-testid="section-datenschutz-webapp-services">
              <h2 className={gradientHeading}>5. Datenverarbeitung im Zusammenhang mit der Nutzung unserer Services</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Die Nutzung unserer Services mit all ihren Funktionen geht mit der Verarbeitung
                  von personenbezogenen Daten einher. Wie genau das geschieht, erläutern wir
                  Nutzern hier.
                </p>

                <h3 className={subheading}>5.1 Informatorische Nutzung unserer Services</h3>
                <p>
                  Das rein informatorische Aufrufen unserer Services erfordert eine Verarbeitung
                  von folgenden personenbezogenen Daten und Informationen: Gerätetyp und
                  Geräteversion, verwendetes Betriebssystem, IP-Adresse des Endgeräts, mit dem
                  Nutzer auf unsere Services zugreifen sowie die Uhrzeit des Aufrufs unserer
                  Services. All diese Informationen werden automatisch von einem Gerät übermittelt,
                  sollten Nutzer dieses nicht derart konfiguriert haben, dass eine Übermittlung der
                  Informationen unterdrückt wird.
                </p>
                <p>
                  Diese personenbezogenen Daten werden zum Zwecke der Funktionsfähigkeit und
                  Optimierung unserer Services, sowie zur Gewährleistung der Sicherheit unserer
                  informationstechnischen Systeme verarbeitet. Diese Zwecke sind zugleich
                  berechtigte Interessen nach Art. 6 Abs. 1 lit. f DSGVO, die Verarbeitung erfolgt
                  somit mit Rechtsgrund.
                </p>

                <h3 className={subheading}>5.2 Nutzung durch bzw. nach Registrierung</h3>

                <h3 className={subheading}>5.2.1 Registrierung</h3>
                <p>
                  Über die rein informatorische Nutzung unserer Services hinaus haben Nutzer die
                  Möglichkeit, sich für unsere Services zu registrieren und unser gesamtes Angebot
                  zu nutzen. Hierbei verarbeiten wir insbesondere Stammdaten und Kontaktdaten wie
                  bspw. den Namen, die E-Mail-Adresse und das Passwort. Darüber hinaus verarbeiten
                  wir hierbei automatisch Verbindungsdaten wie bspw. Datum, Geräte-Informationen
                  und IP-Adresse.
                </p>
                <p>
                  Einige Verarbeitungsschritte können auch bei Drittanbietern erfolgen. Die
                  Datenverarbeitung der Drittanbieter erfolgt zu den Konditionen der jeweils
                  einschlägigen Datenschutzerklärungen. Im Falle einer Datenverarbeitung mit
                  Drittanbietern kann es sich um eine Auftragsverarbeitung im Sinne des Art. 28
                  DSGVO handeln. Diese unterliegt strengen gesetzlichen Vorgaben, welche wir im
                  Zuge unserer Vertragsvereinbarungen mit unseren Auftragsverarbeitern einhalten.
                </p>
                <p>
                  Die Nutzung bei bzw. nach erfolgter Registrierung und Login und die damit
                  verbundenen Datenverarbeitungsvorgänge können von der rein informatorischen
                  Nutzung abweichen. Das Erheben dieser, mit einem Profil in Verbindung stehenden
                  Daten, erfolgt zum Zwecke der Verifizierung des Status und der damit
                  zusammenhängenden Erfüllung unserer vertraglichen Verpflichtungen Nutzern
                  gegenüber. Dies sind legitime Zwecke nach Art. 6 Abs. 1 lit. b DSGVO. Sollte für
                  den Verarbeitungsvorgang eine Einwilligung notwendig sein, werden wir diese an
                  entsprechender Stelle einholen (bspw. über die Opt-In Möglichkeit im Rahmen eines
                  Consent Banners bei erstmaliger Nutzung unseres Services). Bei weiteren Fragen
                  stehen wir Nutzern gerne im Rahmen des Auskunftsrechts nach Art. 15 Abs. 1 DSGVO
                  zur Verfügung.
                </p>

                <h3 className={subheading}>5.2.2 Einrichtung und Verwendung eines Nutzerkontos</h3>
                <p>
                  Nutzer können ein Nutzerkonto in unseren Services anlegen, um unsere Services und
                  deren Funktionen in Anspruch zu nehmen. Wenn Nutzer dies tun, werden die von
                  ihnen dort angegebenen personenbezogenen Daten durch das Endgerät an uns
                  übermittelt und in unseren informationstechnischen Systemen gespeichert.
                  Gespeichert werden außerdem die IP-Adresse und der Zeitpunkt einer Registrierung.
                  Wenn Nutzer sich in ihr Nutzerkonto einloggen, legt unser Service auf dem
                  Endgerät Tokens ab, um zu ermöglichen, dass sie eingeloggt bleiben – auch wenn
                  sie unsere Services zwischenzeitlich neu laden müssen. Durch das Anlegen des
                  Nutzerkontos können Nutzer die Funktionen unserer Services nutzen.
                </p>
                <p>
                  Die mit dem Anlegen eines Nutzerkontos zusammenhängenden Verarbeitungsvorgänge
                  dienen dem Zweck, künftige Nutzungsvorgänge zuordnen zu können und das gesamte
                  Angebot unserer Services abrufen zu können. Bei der Bestellung etwaiger Produkte
                  oder Buchung von Leistungen dient die Verarbeitung von Daten ferner der
                  Vertragsdurchführung, ist somit zweckgebunden und erforderlich gemäß Art. 6 Abs. 1
                  lit. b DSGVO.
                </p>
                <p>
                  Die Speicherung von IP-Adresse und Zeitpunkt der Registrierung ist erforderlich
                  zur Gewährleistung der Sicherheit unserer informationstechnischen Systeme. Hierin
                  liegt zugleich unser berechtigtes Interesse, weshalb die Verarbeitung auch nach
                  Art. 6 Abs. 1 lit. f DSGVO rechtmäßig ist.
                </p>
                <p>
                  Die Speicherung der von Nutzern eingegebenen personenbezogenen Daten erfolgt bis
                  zum Zeitpunkt der Löschung dieser Daten innerhalb des Nutzerkontos bzw. spätestens
                  bis zur vollständigen Löschung des Nutzerkontos bei uns. Dem widersprechend
                  verarbeiten wir gewissen personenbezogene Daten von Nutzern nur, sofern wir
                  hierzu eine gesetzliche oder vertragliche Ermächtigung haben. Das ist bspw. der
                  Fall, wenn wir Vertrags- oder Zahlungsdaten auch nach Löschung des Nutzerkontos
                  aus Abrechnungs- oder sonstigen Gründen, die zur ordnungsgemäßen Abwicklung
                  unseres Vertragsverhältnisses notwendig sind, aufbewahren dürfen.
                </p>
              </div>
            </section>

            {/* 6. Kommunikations-Services */}
            <section className={card} data-testid="section-datenschutz-webapp-kommunikation">
              <h2 className={gradientHeading}>6. Kommunikations-Services</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <h3 className={subheading}>6.1 Kontaktformular / Kontaktaufnahme per E-Mail</h3>
                <p>
                  Wir verarbeiten die personenbezogenen Daten von Nutzern, die Nutzer uns im Rahmen
                  der Kontaktaufnahme zur Verfügung stellen zum Zweck der Beantwortung einer
                  Anfrage, einer E-Mail oder einer Rückrufbitte. Verarbeitete Datenkategorien sind
                  hierbei Stammdaten, Kontaktdaten, Inhaltsdaten, ggf. Nutzungsdaten,
                  Verbindungsdaten und ggf. Vertragsdaten. Wir leiten diese Daten im Einzelfall
                  weiter an mit uns verbundene Unternehmen, oder Dritte, die diese Daten zur
                  Abwicklung von Bestellungen und Buchungen vereinbarungsgemäß verarbeiten dürfen.
                  Die Rechtsgrundlage der Verarbeitung richtet sich nach dem Zweck der
                  Kontaktaufnahme. Mit einer Anfrage im Kontaktformular bzw. durch die
                  Kontaktaufnahme per E-Mail erklären Nutzer, dass sie Antworten oder Informationen
                  zu bestimmten Themen wünschst. Zu diesem Zweck hinterlassen Nutzer auch ihre
                  Daten. Wir beantworten eine Anfrage wunschgemäß und verarbeiten hierzu Daten
                  unserer Nutzer. Daher basiert die Berechtigung zur Verarbeitung von Daten auf
                  Art. 6 Abs. 1 lit. b DSGVO, da wir sie zur Beantwortung einer Anfrage und damit
                  zur Erfüllung des Vertrages hierüber verarbeiten.
                </p>

                <h3 className={subheading}>6.2 Feedbackformular</h3>
                <p>
                  Wir verarbeiten die personenbezogenen Daten von Nutzern, die Nutzer uns im Rahmen
                  der Vergabe von Feedback zur Umsetzung des Feedbacks wie bspw. zur Verbesserung
                  unserer Services, zur Verfügung stellen. Verarbeitete Datenkategorien sind hierbei
                  Stammdaten, Kontaktdaten, Inhaltsdaten, ggf. Nutzungsdaten, Verbindungsdaten und
                  ggf. Vertragsdaten. Wir leiten diese Daten im Einzelfall weiter an mit uns
                  verbundene Unternehmen, oder Dritte, die wir Verbesserung unserer Services
                  einsetzen. Die Rechtsgrundlage der Verarbeitung richtet sich nach dem Zweck einer
                  Feedback Vergabe. Mit einer Vergabe des Feedbacks erklären Nutzer, dass sie bspw.
                  eine Verbesserung von Funktionen unserer Services wünschen. Diese Informationen
                  nehmen wir auf und verarbeiten hierzu Daten unserer Nutzer. Daher basiert die
                  Berechtigung zur Verarbeitung von Daten auf Art. 6 Abs. 1 lit. b DSGVO zur
                  Erfüllung des Vertrages.
                </p>

                <h3 className={subheading}>6.3 Künstliche Intelligenz</h3>
                <p>
                  In unseren Services bieten wir Dienste künstlicher Intelligenz („KI-Dienste") an.
                  Die KI-Dienste bieten den Nutzern hierbei die Möglichkeit, ihre Services,
                  insbesondere Kommunikationsservices, wie ein KI-Chatbot oder auch ein
                  KI-Mail-Assistenten passgenau auf ihre Bedürfnisse zuzuschneiden und damit mit
                  einer state of the art Qualität und einer individuellen Zielgenauigkeit zu
                  erbringen, die für ihre Beziehung zu den Endkunden besonders wertvoll ist. Mit
                  den KI-Diensten können Nutzer im Rahmen der Datenverarbeitung zur Erbringung
                  ihrer Services ein intelligentes System bereitstellen, das sämtliche Interaktionen
                  in ihren Services, in die die KI-Dienste eingebunden sind, auf die effizienteste
                  und für Endkunden nützlichste Art und Weise verarbeitet. Wir unterstützen Nutzer
                  hierbei durch das Anbieten der KI-Dienste, die anschließend in eigener
                  Verantwortung von Nutzern eingesetzt werden. Welche Services dies genau sind, in
                  die wir KI-Dienste integriert haben, wird Nutzern aus der Nutzung der Services
                  selbst bzw. aus der entsprechenden Kennzeichnung durch uns deutlich. Der Zweck
                  der Datenverarbeitung durch die KI-Dienste ist damit die Bereitstellung eines
                  solch fortschrittlichen Systems, das es Nutzern ermöglicht, stets die
                  bestmöglichen Leistungen für ihre Endkunden zu erbringen. Verarbeitete
                  Datenkategorien sind hierbei Stammdaten, Kontaktdaten, Inhaltsdaten, ggf.
                  Nutzungsdaten, Verbindungsdaten und ggf. Vertragsdaten. Empfänger der Daten sind
                  hierbei die von uns eingebundenen und unten genannten Anbieter von KI-Diensten.
                  Sollten diese KI-Dienste Daten in ein Drittland transferieren (bspw. die USA),
                  so geschieht dies auf Basis eines mit ihnen geschlossenen
                  Auftragsverarbeitungsvertrages und gemäß mit ihnen vereinbarter Standard
                  Vertragsklauseln und sonstiger von der DSGVO zugelassenen Sicherheitsmaßnahmen,
                  die die Sicherheit der Verarbeitung der personenbezogenen Daten unserer Nutzer
                  mit einem Schutzniveau, der identisch zu dem in der EU ist, gewährleisten, und
                  sofern ein Datentransfer in die USA erfolgt, insbesondere auf Basis des EU-US
                  Data Privacy Framework (DPF). Unsere Rechtsgrundlage zur Nutzung von KI-Diensten
                  resultiert aus Art. 6 Abs. 1 lit. b und f DSGVO.
                </p>
                <p className="font-medium text-foreground">Anbieter der von uns eingesetzten KI-Dienste</p>
                <div className="space-y-3 pl-4 border-l-2 border-border/50">
                  <div>
                    <p>Microsoft Ireland Operations Limited</p>
                    <p>One Microsoft Place</p>
                    <p>South County Business Park</p>
                    <p>Leopardstown</p>
                    <p>Dublin 18, Irland</p>
                  </div>
                  <div>
                    <p>ChatGPT</p>
                    <p>OpenAI Ireland Limited</p>
                    <p>1st Floor, The Liffey Trust Centre</p>
                    <p>117-126 Sheriff Street Upper</p>
                    <p>Dublin 1, D01 YC43, Ireland</p>
                    <p>
                      <a
                        href="https://openai.com/de-DE/policies/eu-privacy-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
                      >
                        openai.com/de-DE/policies/eu-privacy-policy
                      </a>
                    </p>
                  </div>
                  <div>
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
                        docs.fonio.ai/Datenschutz/Datenschutz
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Hosting */}
            <section className={card} data-testid="section-datenschutz-webapp-hosting">
              <h2 className={gradientHeading}>7. Hosting</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <h3 className={subheading}>7.1 Bereitstellung unserer Services</h3>
                <p>
                  Um Nutzern unsere Services bereitstellen zu können, nehmen wir die Leistungen der
                  unten genannten Hosting Anbieter in Anspruch. Unsere Services werden von den
                  Servern dieser Hosting Anbieter abgerufen. Zu diesen Zwecken nehmen wir die
                  Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und
                  Datenbankdienste sowie Sicherheitsleistungen und technische Wartungsleistungen
                  der Webshosting Anbieter in Anspruch.
                </p>
                <p>
                  Zu den verarbeiteten Daten gehören alle solche Daten, die Nutzer im Rahmen der
                  Nutzung und Kommunikation in Verbindung mit ihrem Besuch in unseren Services
                  eingeben bzw. die von Nutzern hierbei erhoben werden (bspw. IP Adresse). Unsere
                  Rechtsgrundlage zur Nutzung der Hostinganbieter zur Bereitstellung unserer
                  Services resultiert aus Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                </p>

                <h3 className={subheading}>7.2 Empfang und Versand von E-Mails</h3>
                <p>
                  Die von uns in Anspruch genommenen Leistungen der Hoster kann ebenfalls den
                  Versand, den Empfang sowie die Speicherung von E-Mails umfassen. Zu diesen
                  Zwecken werden die Adressen der Empfänger von E-Mails sowie die Absender als auch
                  weitere Informationen betreffend den E-Mailversand (z.B. die beteiligten
                  Provider) sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die vorgenannten
                  Daten werden u.a. zu Zwecken der Erkennung von SPAM verarbeitet. E-Mails werden
                  im Internet grundsätzlich nicht verschlüsselt versendet. Im Regelfall werden
                  E-Mails zwar auf dem Transportweg verschlüsselt, aber (sofern keine
                  Ende-zu-Ende-Verschlüsselung erfolgt) nicht auf den Servern, von denen sie
                  abgesendet und empfangen werden. Wir können daher für den Übertragungsweg der
                  E-Mails zwischen dem Absender und dem Empfang auf unserem Server keine
                  Verantwortung übernehmen. Unsere Rechtsgrundlage zur Nutzung der Hostinganbieter
                  zum Empfang und Versand von E-Mails resultiert aus Art. 6 Abs. 1 lit. f DSGVO
                  (berechtigtes Interesse).
                </p>

                <h3 className={subheading}>7.3 Erhebung von Zugriffsdaten und Logfiles</h3>
                <p>
                  Wir selbst (bzw. die Hosting Anbieter) erheben Daten zu jedem Zugriff auf den
                  Server (Serverlogfiles). Zu den Serverlogfiles können Adresse und Name der
                  abgerufenen Services und Dateien, Datum und Uhrzeit des Abrufs, übertragene
                  Datenmengen, Meldung über erfolgreichen Abruf, Gerätetyp nebst Version,
                  Betriebssystem, Referrer URL (die zuvor besuchte Seite) und im Regelfall
                  IP-Adressen sowie der anfragende Provider gehören.
                </p>
                <p>
                  Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden,
                  z.B., um eine Überlastung der Server zu vermeiden (insbesondere im Fall von
                  missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die
                  Auslastung der Server und ihre Stabilität sicherzustellen. Unsere Rechtsgrundlage
                  zur Nutzung eines Hostinganbieters zur Erhebung von Zugriffsdaten und Logfiles
                  resultiert aus Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                </p>
                <p className="font-medium text-foreground">Die von uns eingesetzten Hosting Anbieter sind die Folgenden:</p>
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

            {/* 8. Tracking & Tools */}
            <section className={card} data-testid="section-datenschutz-webapp-tracking">
              <h2 className={gradientHeading}>8. Tracking &amp; Tools</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Um einen reibungslosen technischen Ablauf und eine optimale nutzerfreundliche
                  Verwendung unserer Services zu gewährleisten, setzen wir folgende Dienste ein:
                </p>

                <h3 className={subheading}>Google Tag Manager</h3>
                <p>
                  In unseren Services nutzen wir den Google Tag Manager. Google Tag Manager ist
                  eine Lösung, mit der wir sog. Website-Tags über eine Oberfläche verwalten und so
                  andere Dienste in unsere Services einbinden können. Der Google Tag Manager selbst
                  (welches die Tags implementiert) erstellt noch keine Profile und setzt auch keine
                  Cookies oder andere Technologien auf dem Endgerät des Nutzers. Über die
                  Aktivierung des Google Tag Managers werden jedoch weitere Google Dienste
                  eingebunden, wie bspw. Google Analytics. Verarbeitete Daten sind bei der
                  Einbindung des Google Tag Mangers u.a. Nutzungsdaten &amp; Verbindungsdaten.
                  Empfänger der Daten ist die Google Ireland Ltd., Gordon House, Barrow Street
                  Dublin 4 Irland. Sollte Google diese Daten in ein Drittland transferieren
                  (bspw. die USA), so geschieht dies nur im Einzelfall, auf Basis eines mit Google
                  geschlossenen Auftragsverarbeitungsvertrags und gemäß mit Google vereinbarter
                  Standard Vertragsklauseln und sonstiger von der DSGVO zugelassenen
                  Sicherheitsmaßnahmen, die die Sicherheit der Verarbeitung von personenbezogenen
                  Daten mit einem Schutzniveau, der identisch zu dem in der EU ist, gewährleisten,
                  insbesondere auf Basis des EU-US Data Privacy Framework (DPF). Die
                  Rechtsgrundlage zur Nutzung des Google Tag Manager ist eine Einwilligung (bspw.
                  über ein Opt-In im Consent Banner), sofern Nutzer uns diese im Rahmen des
                  Besuches in unseren Services erteilt haben und resultiert daher aus Art. 6
                  Abs. 1 lit. a DSGVO. Auf Basis einer Einwilligung können, sofern über den Google
                  Tag Manager weitere Dienste eingebunden werden, durch Aktivierung des Google Tag
                  Managers Cookies oder ähnliche (Text-)Dateien auf dem Endgerät des Nutzers
                  gespeichert und hierdurch personenbezogene Daten ausgelesen werden werden.
                  Sollten Nutzer uns die Einwilligung zur Nutzung von Google Tag Managers nicht
                  erteilt haben (kein Opt-In im Consent Banner bzw. Widerruf einer Einwilligung),
                  so nutzen wir den Google Tag Manager im Rahmen von Besuchen in unseren Services
                  nicht (mehr).
                </p>

                <h3 className={subheading}>Google Search Console</h3>
                <p>
                  Zum Zwecke der fortlaufenden Optimierung des Google-Rankings unserer Services
                  nutzen wir die Google Search Console, ein Webanalysedienst von Google.
                  Durch die Google Search Console können wir Suchanalysen durchführen, welche uns
                  Aufschluss darüber geben, wie oft unsere Services in den Google-Suchergebnissen
                  erscheint. So können wir unsere Services im Suchindex überwachen und verwalten.
                  Im Rahmen der Nutzung der Google Search Console werden keine personenbezogenen
                  Nutzer- bzw. Trackingdaten verarbeitet oder an Google übermittelt.
                </p>

                <h3 className={subheading}>Google Analytics</h3>
                <p>
                  Wir nutzen Google Analytics zum Zweck der statistischen Auswertung der Nutzung
                  unserer Services. Die IP-Adresse wird von uns erhoben, bevor sie von Google noch
                  vor der dauerhaften Speicherung auf deren Servern durch Kürzung anonymisiert wird.
                  Google Analytics ermöglicht es uns, nachzuvollziehen, wie unsere Services von
                  Nutzern genutzt werden und wie wir diese dementsprechend verbessern und
                  weiterentwickeln können. So zeigt Google Analytics beispielsweise, welche Inhalte
                  von Nutzern angeklickt oder wiederholt besucht werden werden. Verarbeitete Daten
                  sind Nutzungsdaten &amp; Verbindungsdaten. Empfänger der Daten ist hierbei die
                  Google Ireland Ltd., Gordon House, Barrow Street Dublin 4 Irland (als gemeinsam
                  Verantwortlicher, Art. 26 DSGVO). Sollte Google diese Daten in ein Drittland
                  transferieren (bspw. die USA), so geschieht dies nur im Einzelfall, auf Basis
                  eines mit Google geschlossenen Auftragsverarbeitungsvertrags und gemäß mit Google
                  vereinbarter Standard Vertragsklauseln und sonstiger von der DSGVO zugelassenen
                  Sicherheitsmaßnahmen, die die Sicherheit der Verarbeitung von personenbezogenen
                  Daten mit einem Schutzniveau, der identisch zu dem in der EU ist, gewährleisten,
                  insbesondere auf Basis des EU-US Data Privacy Framework (DPF). Die Rechtsgrundlage
                  zur Nutzung von Google Analytics ist eine Einwilligung (bspw. über ein Opt-In im
                  Consent Banner), sofern Nutzer uns diese im Rahmen des Besuches in unseren
                  Services erteilt haben und resultiert daher aus Art. 6 Abs. 1 lit. a DSGVO. Auf
                  Basis einer Einwilligung werden Cookies oder ähnliche (Text-)Dateien auf dem
                  Endgerät des Nutzers gespeichert und hierdurch personenbezogene Daten ausgelesen
                  werden. Sollten Nutzer uns die Einwilligung zur Nutzung von Google Analytics nicht
                  erteilt haben (kein Opt-In im Consent Banner bzw. Widerruf einer Einwilligung),
                  so nutzen wir Google Analytics im Rahmen von Besuchen in unseren Services nicht
                  (mehr).
                </p>
              </div>
            </section>

            {/* 9. Transaktionale Mailings */}
            <section className={card} data-testid="section-datenschutz-webapp-mailings">
              <h2 className={gradientHeading}>9. Transaktionale Mailings</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Aus administrativen Vorgängen, zur Bestätigung von Aktionen sowie im Rahmen
                  unserer nicht werblichen Kundenkommenikation versenden wir transaktionale
                  Benachrichtigungen (nachfolgend „Transaktionale Mailings") an Nutzer. Unsere
                  Transaktionalen Mailings enthalten hierbei wichtige administrative Informationen
                  zu unseren Services. Für die Verwaltung unserer Transaktionalen Mailings sowie
                  für die Erstellung und Versendung von Transaktionalen Mailings nutzen wir die
                  unten stehenden Transaktionalen-Mail-Dienste. Im Rahmen des Abrufs der
                  Transaktionalen Mailings durch Nutzer können technische Informationen, wie
                  Informationen zum Browser und einem System, als auch Eine IP-Adresse und der
                  Zeitpunkt des Abrufs, erhoben werden. Diese Informationen werden zum technischen
                  Nachvollziehen der Interaktion mit unseren Transaktionalen Mailings anhand der
                  technischen Daten oder der Zielgruppen und ihres Leseverhaltens genutzt. Die
                  Rechtsgrundlage zur Nutzung von Transaktionalen Mailings liegt in Art. 6 Abs. 1
                  lit. b DSGVO, da wir mit den Informationen in den Transaktionalen Mailings unsere
                  vertraglichen Pflichten Nutzern gegenüber erfüllen. Sollten wir hierbei hierfür
                  auf die Dienste von dritten Anbietern zugreifen, liegt der Rechtsgrund hierfür
                  in Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse daran, die
                  Versendung von Transaktionalen Mailings zu vereinheitlichen und gesammelt zu
                  steuern. Hierbei wird das Interesse der Nutzer an einer möglichst sparsamen
                  Verarbeitung ihrer Daten nicht über Gebühr beeinträchtigt. Sollten Anbieter
                  Daten in ein Drittland transferieren (bspw. die USA), so geschieht dies nur im
                  Einzelfall, auf Basis eines mit ihnen geschlossenen Auftragsverarbeitungsvertrags
                  und gemäß mit ihnen vereinbarter Standard Vertragsklauseln und sonstiger von der
                  DSGVO zugelassenen Sicherheitsmaßnahmen, die die Sicherheit der Verarbeitung von
                  personenbezogenen Daten mit einem Schutzniveau, der identisch zu dem in der EU
                  ist, gewährleisten, insbesondere auf Basis des EU-US Data Privacy Framework (DPF).
                </p>
                <p className="font-medium text-foreground">Anbieter der von uns eingesetzten Transaktionalen-Mail-Dienste</p>
                <div className="space-y-0.5 pl-4 border-l-2 border-border/50">
                  <p>Sendgrid</p>
                  <p>Twilio SendGrid, Inc.</p>
                  <p>1801 California Street</p>
                  <p>Suite 500</p>
                  <p>Denver, CO 80202, USA</p>
                </div>
              </div>
            </section>

            {/* 10. Social Media */}
            <section className={card} data-testid="section-datenschutz-webapp-socialmedia">
              <h2 className={gradientHeading}>10. Profile auf Social Media Websites</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Wir unterhalten Profile auf den Plattformen der sozialen Netzwerke des Internets
                  und verarbeiten in diesem Rahmen personenbezogenen Daten, um mit den dort aktiven
                  Nutzern zu kommunizieren oder um Informationen über uns anzubieten. Wir weisen
                  Nutzer darauf hin, dass Daten unserer Nutzer beim Besuch unserer Profile außerhalb
                  des Raumes der Europäischen Union verarbeitet werden können. Verantwortlich
                  hierfür sind die Betreiber der jeweiligen sozialen Netzwerke. Eine detaillierte
                  Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten
                  (bspw. Opt-Out) können Nutzer in den Datenschutzerklärungen der Betreiber der
                  jeweiligen sozialen Netzwerke finden.
                </p>
                <p>
                  Bei dem Besuch unserer Social Media Profile kann das Nutzungsverhalten ausgewertet
                  und uns hieraus gewonnene Informationen mitgeteilt werden („Insights"). Diese
                  Auswertung erfolgt zu Zwecken der wirtschaftlichen Optimierung und
                  bedarfsgerechten Gestaltung unserer Services. Verarbeitete Datenkategorien sind
                  hierbei ggf. Stammdaten, ggf. Kontaktdaten, Inhaltsdaten, Nutzungsdaten,
                  Verbindungsdaten. Empfänger der Daten ist der Anbieter der jeweiligen Social
                  Media Plattform als gemeinsam Verantwortlicher gemäß Art. 26 DSGVO. Die
                  Rechtsgrundlage zur Verarbeitung der Daten nach der hier genannten Maßgabe
                  resultiert aus unserem berechtigten Interesse und damit aus Art. 6 Abs. 1 lit. f
                  DSGVO. Für die Umsetzung von Betroffenenrechten ist die jeweilige Social Media
                  Plattform verantwortlich. Über Betroffenenrechte informieren wir unten bei der
                  Nennung der jeweiligen Social Media Plattform, auf der wir ein Profil
                  unterhlaten. Nutzer können ihre Rechte auch uns gegenüber geltend machen, wir
                  werden ihre Anfrage dann umgehend an den Betreiber der Social Media Plattform
                  weiterleiten.
                </p>

                <h3 className={subheading}>Facebook</h3>
                <p>
                  Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour,
                  Dublin 2, Irland. Betroffenenrechte:{" "}
                  <a
                    href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
                  >
                    facebook.com/legal/terms/information_about_page_insights_data
                  </a>
                </p>

                <h3 className={subheading}>Instagram</h3>
                <p>
                  Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour,
                  Dublin 2, Irland. Betroffenenrechte:{" "}
                  <a
                    href="https://privacycenter.instagram.com/policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
                  >
                    privacycenter.instagram.com/policy
                  </a>
                </p>

                <h3 className={subheading}>LinkedIn</h3>
                <p>
                  LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Irland.
                  Betroffenenrechte:{" "}
                  <a
                    href="https://de.linkedin.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
                  >
                    de.linkedin.com/legal/privacy-policy
                  </a>
                </p>

                <h3 className={subheading}>X</h3>
                <p>
                  Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2,
                  Irland. Betroffenenrechte:{" "}
                  <a
                    href="https://gdpr.x.com/de.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
                  >
                    gdpr.x.com/de.html
                  </a>
                </p>
              </div>
            </section>

            {/* 11. Payment Abwicklung */}
            <section className={card} data-testid="section-datenschutz-webapp-payment">
              <h2 className={gradientHeading}>11. Payment Abwicklung</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Zur Abwicklung von Zahlungsforderungen bieten wir verschiedene Zahlungsmethoden
                  an. Hierfür binden wir die nachfolgend beschriebenen Payment Service Provider ein.
                  Dies tun wir zum Zweck der ordnungsgemäßen und bedarfsgerechten Erbringung unserer
                  Leistungen. Verarbeitete Daten sind in diesem Zusammenhang Nutzungsdaten,
                  Verbindungsdaten, Stammdaten, Zahlungsdaten, Kontaktdaten oder auch Vertragsdaten,
                  wie z.B. Kontonummern oder Kreditkartennummern, Passwörter, TANs und Prüfsummen
                  sowie die Vertrags-, Summen- und empfängerbezogenen Angaben. Die Angaben sind
                  erforderlich, um die Transaktionen durchzuführen. Die eingegebenen Daten werden
                  nur durch die Zahlungsdienstleister verarbeitet und bei diesen gespeichert. Wir
                  erhalten keine konto- oder kreditkartenbezogenen Informationen, sondern lediglich
                  Informationen über die Bestätigung oder eine Negativbeauskunftung der Zahlung.
                  Unter Umständen werden Daten unserer Nutzer seitens der Zahlungsdienstleister an
                  Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die Identitäts-
                  und Bonitätsprüfung. Hierzu verweisen wir auf die AGB und die Datenschutzhinweise
                  der Zahlungsdienstleister. Die Rechtsgrundlage zur Nutzung der Payment Service
                  Provider resultiert aus Art. 6 Abs. 1 lit. b DSGVO. Die Nutzern mit unseren
                  Services zugesagten Leistungen und damit die Erfüllung unserer Vertragspflichten
                  können wir nur erbringen, wenn wir uns für die Abwicklung von Zahlungsbewegungen
                  Dritten, wie den Payment Service Providern, bedienen. Sollte ein Payment Service
                  Provider Daten in ein Drittland transferieren (bspw. die USA), so geschieht dies
                  nur im Einzelfall, auf Basis eines mit ihnen geschlossenen
                  Auftragsverarbeitungsvertrags und gemäß mit ihnen vereinbarter Standard
                  Vertragsklauseln und sonstiger von der DSGVO zugelassenen Sicherheitsmaßnahmen,
                  die die Sicherheit der Verarbeitung von personenbezogenen Daten mit einem
                  Schutzniveau, der identisch zu dem in der EU ist, gewährleisten, insbesondere auf
                  Basis des EU-US Data Privacy Framework (DPF).
                </p>
                <p className="font-medium text-foreground">Payment Service Provider</p>

                <h3 className={subheading}>Stripe</h3>
                <p>
                  Wenn Nutzer sich für eine Zahlungsart des Paymentdienstleisters Stripe
                  entscheiden, erfolgt die Zahlungsabwicklung über den Paymentdienstleister Stripe
                  Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland,
                  an den wir im Rahmen des Bestellvorgangs mitgeteilte Informationen nebst den
                  Informationen über eine Bestellung (Name, Anschrift, Kontonummer, Bankleitzahl,
                  evtl. Kreditkartennummer, Rechnungsbetrag, Währung und Transaktionsnummer) gemäß
                  Art. 6 Abs. 1 lit. b DSGVO weitergeben. Nähere Informationen zum Datenschutz von
                  Stripe unter der URL{" "}
                  <a
                    href="https://stripe.com/de/privacy#translation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
                  >
                    stripe.com/de/privacy#translation
                  </a>.
                </p>
                <p>
                  Stripe behält sich vor, eine Bonitätsprüfung auf der Grundlage
                  mathematisch-statistischer Verfahren durchzuführen, um das berechtigte Interesse
                  an der Feststellung der Zahlungsfähigkeit des Nutzers zu wahren. Die für eine
                  Bonitätsprüfung notwendigen und im Rahmen der Zahlungsabwicklung erhaltenen
                  personenbezogenen Daten übermittelt Stripe gegebenenfalls an ausgewählte
                  Auskunfteien, welche Stripe Nutzern auf Anfrage offenlegt. Die
                  Bonitätsauskunft kann Wahrscheinlichkeitswerte enthalten (sog. Score-Werte).
                  Soweit Score-Werte in das Ergebnis der Bonitätsauskunft einfließen, haben diese
                  ihre Grundlage in einem wissenschaftlich anerkannten
                  mathematisch-statistischem Verfahren. In die Berechnung der Score-Werte fließen
                  unter anderem, aber nicht ausschließlich, Anschriftendaten ein. Das Ergebnis der
                  Bonitätsprüfung in Bezug auf die statistische Zahlungsausfallwahrscheinlichkeit
                  verwendet Stripe zum Zwecke der Entscheidung über die Nutzungsberechtigung für
                  die gewählte Zahlungsmethode.
                </p>
                <p>
                  Nutzer können dieser Verarbeitung von Daten jederzeit durch eine Nachricht an
                  Stripe oder die beauftragten Auskunfteien widersprechen.
                </p>
                <p>
                  Jedoch bleibt Stripe ggf. weiterhin berechtigt, die personenbezogenen Daten von
                  Nutzern zu verarbeiten, sofern dies zur vertragsgemäßen Zahlungsabwicklung
                  erforderlich ist.
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
