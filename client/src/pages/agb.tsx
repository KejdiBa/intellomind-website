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

export default function AGB() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  useMetaTags(
    "AGB – IntelloMind UG",
    "Allgemeine Geschäftsbedingungen der IntelloMind UG (haftungsbeschränkt) für KI-Assistenten und digitale Dienstleistungen."
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
                Allgemeine Geschäftsbedingungen
              </span>
            </h1>
            <p className="text-muted-foreground text-base">
              der IntelloMind UG (haftungsbeschränkt)
            </p>
            <p className="text-muted-foreground text-base">Hüingser Ring 1, 
            58710 Menden</p>
            <p className="text-muted-foreground text-base mt-2">
              Stand: Februar 2026
            </p>
          </div>

          <div className="space-y-10">
            {/* Einleitung */}
            <section className={card} data-testid="section-agb-einleitung">
              <div className={`space-y-3 ${body}`}>
                <p>
                  Die vorliegenden Allgemeinen Geschäftsbedingungen („AGB") gelten für die Leistungen der
                  IntelloMind UG (haftungsbeschränkt) (auch als „wir" bezeichnet), die an Kunden (nachfolgend
                  auch „Kunde") bereitgestellt werden. Allgemeine Geschäftsbedingungen des Kunden finden keine
                  Anwendung, es sei denn, wir stimmen der Geltung ausdrücklich zu. Mit unseren Leistungen und
                  unseren AGB richten wir uns ausschließlich an Unternehmer im Sinne von § 14 BGB sowie
                  juristische Personen des öffentlichen Rechts und öffentlich-rechtliche Sondervermögen, nicht
                  jedoch an Verbraucher (§ 13 BGB).
                </p>
              </div>

            </section>

            {/* Präambel */}
            <section id="agb-praambel" className={card} data-testid="section-agb-praambel">
              <h2 className={gradientHeading}>Präambel</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Sofern der Kunde einen Hauptvertrag mit uns über die Erbringung von Leistungen abgeschlossen
                  hat, der bspw. durch seine Registrierung für unsere Software Leistungen über unseren
                  Registrierungsprozess samt anschließender Registrierungsbestätigung oder durch die verbindliche
                  Bestellung von unseren Software Leistungen zustande kommt (insgesamt nachfolgend auch
                  „Hauptvertrag" genannt), erwirbt der Kunde vorbehaltlich besonderer übereinstimmender
                  Vereinbarungen im Hauptvertrag, seiner Registrierung oder seiner Bestellung folgende
                  Leistungen & Rechte.
                </p>
              </div>
            </section>

            {/* 1. Vertragsgegenstand */}
            <section id="agb-1" className={card} data-testid="section-agb-1">
              <h2 className={gradientHeading}>1. Vertragsgegenstand</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Wir bieten mit IntelloMindAI eine Multi-Tenant-Plattform-Software zur Verwaltung von
                  KI-gestützten Kundenservice-Assistenten an.
                </p>
                <p>
                  Die Leistungen, die wir dem Kunden gegenüber erbringen, können die im Hauptvertrag, im
                  Registrierungs- oder Bestellprozess bzw. die in diesen AGB oder den hierin referenzierten
                  Dokumenten wie AVV, Leistungsbeschreibung und Preismodell genannten Bestandteile enthalten.
                </p>
                <p>
                  Sollte der Kunde den Hauptvertrag für ein Unternehmen oder eine sonstige Organisation, eine
                  Personengesellschaft oder eine juristische Person vornehmen, garantiert er, dass er berechtigt
                  ist, diese rechtlich zu vertreten und zu verpflichten.
                </p>
                <p>
                  Eine Übersicht über unsere Leistungen ergibt sich aus der Leistungsbeschreibung, die in ihrer
                  jeweiligen Fassung auf unserer Website{" "}
                  <a
                    href="https://intellomind.ai/leistungsbeschreibung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2"
                  >
                    https://intellomind.ai/leistungsbeschreibung
                  </a>{" "}
                  abrufbar oder aus dem Hauptvertrag ersichtlich ist.
                </p>
                <p>
                  Da wir im Rahmen des Vertragsverhältnisses mit dem Kunden personenbezogene Daten für den
                  Kunden im Auftrag verarbeiten, erfolgt diese Verarbeitung auf Basis des
                  Auftragsverarbeitungsvertrages gem. Art. 28 DSGVO („AVV"), der unmittelbar mit Wirksamwerden
                  des Hauptvertrages Geltung erlangt. Der jeweils geltende AVV ist auf unserer Website unter{" "}
                  <a
                    href="https://intellomind.ai/leistungsbeschreibung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2"
                  >
                    https://intellomind.ai/leistungsbeschreibung
                  </a>{" "}
                  hinterlegt oder liegt dem Hauptvertrag als Anlage bei.
                </p>
              </div>
            </section>

            {/* 2. Software- / Software Leistungen */}
            <section id="agb-2" className={card} data-testid="section-agb-2">
              <h2 className={gradientHeading}>2. Software- / Software Leistungen</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Bei IntelloMindAI und den hierin erfolgenden Prozessen handelt es sich um eine
                  „Software-as-a-Service" („SaaS") Lösung (nachfolgend auch „Software" oder „Software
                  Leistungen"), die direkt über einen Webbrowser zugänglich ist.
                </p>
                <p>
                  Zu den Hauptfunktionen unserer Software gehören die Einrichtung und Verwaltung von
                  KI-Assistenten für Chat, E-Mail und Telefon als Ticket-, Support- und CRM-System, das Kunden
                  in ihrem Endkundenverhältnis nutzen können. Die Assistenten können individuell konfiguriert,
                  mit der Wissensbasis des Kunden verknüpft und auf das persönliche Antwortverhalten des Kunden
                  trainiert werden.
                </p>
                <p>
                  Wir entwickeln die Software stetig weiter, verbessern sie und fügen ihr Funktionen hinzu. Eine
                  Übersicht über unser jeweils aktuelles Leistungsportfolio ergibt sich aus der
                  Leistungsbeschreibung, die in ihrer jeweiligen Fassung auf unserer Website{" "}
                  <a
                    href="https://intellomind.ai/leistungsbeschreibung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2"
                  >
                    https://intellomind.ai/leistungsbeschreibung
                  </a>{" "}
                  abrufbar ist.
                </p>
                <p>
                  Unsere Software Leistungen stellen wir dem Kunden im Rahmen eines „Pay-as-you-go-Modells" und
                  im Rahmen eines „Abonnementmodells" (engl. „Subscription-model"), juristisch gesehen also als
                  Mietsache für die Dauer unserer Vertragsbeziehung zur Verfügung. Durch die flexiblen
                  Funktionalitäten und dem flexiblen Lizenzmodell kann die Konfiguration der Funktionen
                  individuell an die Bedürfnisse jedes Kunden angepasst werden.
                </p>
                <p>
                  Wir weisen den Kunden ausdrücklich darauf hin, dass es sich bei der aktuellen Version unserer
                  Software um Software in einem frühen Entwicklungsstadium handelt. Diese frühe Version kann
                  Fehler und Mängel aufweisen, die eine inkorrekte Datenverarbeitung zur Folge haben kann.
                </p>
              </div>
            </section>

            {/* 3. Dienstleistungen & Support Leistungen */}
            <section id="agb-3" className={card} data-testid="section-agb-3">
              <h2 className={gradientHeading}>3. Dienstleistungen & Support Leistungen</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Neben den Software Leistungen bieten wir dem Kunden, sofern gesondert vereinbart, im
                  Zusammenhang mit unseren Software Leistungen stehende Dienstleistungen und Support Leistungen
                  an.
                </p>
                <p>
                  Die Beauftragung von Dienstleistungen und Support Leistungen ist über eine individuelle
                  Vereinbarung über Leistungsinhalte und Vergütung möglich. Bei der Erbringung von
                  Dienstleistungen und Support Leistungen wird unsere Vergütung, sofern nicht anderweitig
                  vereinbart, anhand der dafür angefallenen Personentage, nach Stunden bzw. entsprechend der
                  hierfür geltenden Pauschalen abgerechnet.
                </p>
              </div>
            </section>

            {/* 4. Web- & Serverhosting */}
            <section id="agb-4" className={card} data-testid="section-agb-4">
              <h2 className={gradientHeading}>4. Web- & Serverhosting</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Wir erbringen in Bezug auf unsere Software Leistungen zudem Web- & Server-Hosting Leistungen.
                  Unsere Web- & Server-Hosting Leistungen umfassen insbesondere die Zurverfügungstellung einer
                  IT-Umgebung für unsere Software. Die IT-Umgebung wird innerhalb von einem oder mehreren
                  Servern angelegt. Diese Server können insbesondere aus Virtuellen Privaten Servern bestehen
                  oder werden bei professionellen Hosting Providern angemietet.
                </p>
                <p>
                  Im Rahmen unserer Web- & Server-Hosting Leistungen überlassen wir dem Kunden einen
                  Speicherplatz in der von dem Kunden gebuchten bzw. in der von uns im Rahmen des von dem
                  Kunden gebuchten Modells bereitgestellten Größe zur Speicherung seiner Daten.
                </p>
                <p>
                  Wir tragen dafür Sorge, dass seine mit unseren Software Leistungen verarbeiteten Daten über
                  das Internet abrufbar und durch den Kunden in einem gängigen, umfassenden, strukturierten und
                  maschinenlesbaren Format exportierbar sind. Der Kunde kann, vorbehaltlich abweichender
                  Vorschriften betreffend die Verarbeitung personenbezogener Daten, jederzeit die Herausgabe
                  oder die Übermittlung ihrer Daten an sich selbst bzw. an einen von dem Kunden benannten
                  Dritten in einem umfassenden, strukturierten und maschinenlesbaren Format verlangen. Wir
                  werden dem Kunden hierfür keine bzw. nur angemessen Kosten für einen hierbei auf unserer
                  Seite anfallenden Aufwand berechnen. Weiterhin werden wir eine Übermittlung seiner Daten an
                  einen von dem Kunden benannten Dritten im Rahmen unserer Möglichkeiten unterstützen und
                  hierfür notwendige Informationen bereitstellen.
                </p>
                <p>
                  Der Kunde ist nicht berechtigt, seinen Speicherplatz einem Dritten zur Nutzung zu überlassen.
                </p>
              </div>
            </section>

            {/* 5. Vergütung für unsere Leistungen */}
            <section id="agb-5" className={card} data-testid="section-agb-5">
              <h2 className={gradientHeading}>5. Vergütung für unsere Leistungen</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Unsere Leistungen erwirbt der Kunde grds. zu den Konditionen des gewählten Preismodells bzw.
                  nach den Konditionen des Hauptvertrages.
                </p>
                <p>
                  Jede Vergütung versteht sich zzgl. Umsatzsteuer in gesetzlicher Höhe zum Zeitpunkt und am
                  Ort der Erbringung der Leistung.
                </p>
                <p>
                  Im Rahmen des Pay-as-you-go-Modells lädt der Kunde durch Einmalzahlungen sein Guthaben zur
                  Nutzung unserer Software Leistungen auf und erhält hierdurch Zugriff auf das im Preismodell
                  definierte Guthaben-Kontingent.
                </p>
                <p>
                  Im Rahmen des Abonnement-Modells zahlt der Kunde regelmäßige (monatliche) Beträge und erhält
                  hierdurch Zugriff auf das im Preismodell definierte monatliche Kontingent zur Nutzung unserer
                  Software Leistungen. Sofern das monatliche Kontingent aufgebraucht ist, kann der Kunde
                  Guthaben im Rahmen des Pay-as-you-go-Modells aufladen und unsere Software Leistungen
                  weiternutzen.
                </p>
                <p>
                  Die Vergütung im Abonnement-Modell ist jeweils im Voraus für den entsprechenden Vertragsmonat
                  zu zahlen. Wir sind zudem berechtigt, dem Kunden die jeweilige Vergütung für bis zu 12 Monate
                  im Voraus in Rechnung zu stellen.
                </p>
                <p>
                  Unsere Rechnungen werden mit Zugang bei dem Kunden fällig und sind ohne Abzüge innerhalb von
                  14 Kalendertagen auf unser in der Rechnung angegebenes Konto zu zahlen. Wir sind berechtigt,
                  sämtliche Vergütungen über Zahlungsdienstleister einzuziehen. Sollten wir dies tun, so hat
                  der Kunde bei der Nutzung dieser Zahlungsdienstleister ebenfalls deren Geschäftsbedingungen zu
                  beachten. Für keinen der Zahlungsdienstleister erheben wir von dem Kunden eine gesonderte
                  Gebühr.
                </p>
                <p>
                  Wir haben neben vertraglich vereinbarten Preisveränderungen das Recht, maximal einmal jährlich
                  unsere Preise der Entwicklung der Kosten anzupassen, die für die „Preisbildung" maßgeblich
                  sind. Für eine Preisanpassung gilt Folgendes:
                </p>
                <p>
                  <span className="font-semibold text-foreground">Preisbildung:</span> Für die Preisbildung
                  maßgeblich sind insbesondere die Kosten für Technik (z. B. Betrieb von Rechenzentren,
                  Hardware, technischer Service) und Kosten für Betrieb der Leistungen (Lizenzen, insbesondere
                  Softwarelizenzen, Kosten der Domainregistrierung- und -verwaltung, Kosten unserer Lieferanten,
                  die die Leistung in unserem Auftrag direkt bei dem Kunden ausführen), Kosten für die
                  Kundenbetreuung (z. B. für Service-Hotline, Abrechnungs- und IT Systeme), Personal- und
                  Dienstleistungskosten, Energie, Gemeinkosten (z. B. für Verwaltung, Marketing, Mieten,
                  Zinsen, Finanzierungskosten, Rechnungsstellung und Bezahlung) sowie hoheitlich auferlegten
                  Gebühren, Steuern, Abgaben und Beiträgen. Preisbildende Faktoren können hierbei zudem
                  insbesondere die Anpassung unserer Infrastruktur an den Stand der Technik und das den Risiken
                  für Rechte und Freiheiten natürlicher Personen angemessene Schutzniveau sowie an die
                  Entwicklung rechtlicher und aufsichtsbehördlicher Anforderungen insbesondere in Bereichen
                  Datenschutz, Telekommunikation und Verbraucherschutz und allgemeine wirtschaftliche
                  Veränderungen, insbesondere die inflationsbedingte Verschlechterung des Geldwertes.
                </p>
                <p>
                  Die Preisentwicklung dieser Kostenfaktoren kann sowohl zur Steigerung als auch zur Senkung
                  der von dem Kunden zu zahlenden Preise führen.
                </p>
                <p>
                  Eine Preisanpassung ist auf den Umfang der Änderungen der Kostenfaktoren begrenzt, maximal
                  auf 15% der jeweils aktuellen Preise.
                </p>
                <p>
                  Sowohl bei der Preissteigerung als auch bei der Preissenkung werden wir berücksichtigen, ob
                  die Preisänderung durch gesunkene/gestiegene Kosten in einem anderen Bereich ausgeglichen
                  werden kann.
                </p>
                <p>
                  Wir werden dem Kunden die Änderung spätestens 4 Wochen vor dem geplanten Wirksamwerden in
                  Textform mitteilen. Im Fall einer Preisänderung hat der Kunde das Recht, den Hauptvertrag
                  ohne Einhaltung einer Kündigungsfrist zum Zeitpunkt des Wirksamwerdens der Änderung in
                  Textform zu kündigen. Dies gilt nicht, wenn die Änderung ausschließlich auf einer Änderung
                  von hoheitlich auferlegten Steuern, Gebühren, Abgaben und Beiträgen beruht oder sich zu
                  seinen Gunsten auswirkt. Der Kunde wird in der Änderungsmitteilung auf sein Kündigungsrecht
                  gesondert hingewiesen. Sollte der Kunde innerhalb der vorgenannten Frist nicht kündigen, aber
                  zum Ausdruck bringen, dass er nicht mit der Preiserhöhung einverstanden ist („Widerspruch"),
                  haben wir das Recht, innerhalb von 4 Wochen seit seinem Widerspruch, den Hauptvertrag
                  außerordentlich zu kündigen.
                </p>
              </div>
            </section>

            {/* 6. Laufzeit des Hauptvertrages */}
            <section id="agb-6" className={card} data-testid="section-agb-6">
              <h2 className={gradientHeading}>6. Laufzeit des Hauptvertrages</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Der Hauptvertrag über die Software wird für die im Hauptvertrag bzw. im Bestellprozess
                  gewählte Dauer, im Übrigen und mangels konkreter Angaben auf die Standardlaufzeit von einem
                  Monat ab Vertragsschluss geschlossen („Grundlaufzeit").
                </p>
                <p>
                  Die Regelungen zur Kündigung ergeben sich aus dem Hauptvertrag bzw. dem Bestellprozess. Im
                  Übrigen, also mangels Regelung in den vorgenannten Dokumenten und Prozessen gilt: Die
                  Kündigungsfrist beträgt für beide Parteien 4 Wochen zum Ende der Grundlaufzeit.
                </p>
                <p>
                  Die Kündigung kann in Textform (mindestens per E-Mail) erfolgen oder durch entsprechende
                  Beendigung der Inanspruchnahme unserer Leistungen in seinem Admin Bereich. Bei ausbleibender
                  Kündigung verlängert sich der Hauptvertrag jeweils um die Dauer der Grundlaufzeit.
                </p>
                <p>
                  Mit Wirksamwerden der Kündigung wird der Zugang zu unseren Leistungen für den Kunden und
                  seine Nutzer gesperrt. Der Kunde kann die mit unseren Leistungen verarbeiteten Inhalte bis
                  zum Wirksamwerden der Kündigung exportieren. Hiernach werden wir seinen Zugang vollständig
                  löschen. Unterstützungsleistungen im Zusammenhang mit der Kündigung können von uns auf
                  Nachfrage und ggf. gegen gesonderte Vergütung erbracht werden.
                </p>
                <p>
                  Wir behalten uns das Recht vor, den Support und die Weiterentwicklung unserer Software
                  jederzeit einzustellen. Die Einstellung des gesamten Betriebs geschieht nur aus wichtigem
                  Grund oder unter Einräumung angemessener Übergangsfristen.
                </p>
                <p>
                  Das Recht zur außerordentlichen Kündigung dieses Hauptvertrages aus wichtigem Grund bleibt
                  unberührt. Ein wichtiger Grund liegt insbesondere dann vor, wenn:
                </p>
                <ul className={listClass}>
                  <li>
                    Der Kunde mit Zahlungen länger als 30 Tage in Verzug kommen und auf eine Mahnung hin
                    Rückstände nicht innerhalb einer Woche seit dem Datum des Zugangs der Mahnung begleicht;
                  </li>
                  <li>
                    Der Kunde vertragliche Verpflichtungen wie insbesondere solche aus Ziff. 6 dieser AGB trotz
                    einer Abmahnung von unserer Seite verletzt, insbesondere einen vertragswidrigen Gebrauch
                    der Software fortsetzt oder duldet.
                  </li>
                </ul>
              </div>
            </section>

            {/* 7. Online Registrierung */}
            <section id="agb-7" className={card} data-testid="section-agb-7">
              <h2 className={gradientHeading}>7. Online Registrierung</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Sofern der Kunde unsere Software über den Online Registrierungs- bzw. Bestellprozess
                  lizenziert, gilt Folgendes:
                </p>
                <p>
                  Um unsere Software in Übereinstimmung mit unseren AGB nutzen zu können, muss der Kunde ein
                  Benutzerkonto anlegen. Dazu ist eine Online-Registrierung erforderlich.
                </p>
                <p>
                  Mit erfolgreicher Bestellung unserer Software Leistungen kommt der Hauptvertrag über die
                  Inanspruchnahme unserer Software Leistungen durch die folgenden Schritte zustande:
                </p>
                <ul className={listClass}>
                  <li>
                    Auf unserer Website sind Informationen über Inhalt und Kosten der von uns angebotenen
                    kostenpflichtigen Software Leistungen zu finden. Diese Informationen stellen noch kein
                    Angebot auf Abschluss eines Hauptvertrages zur Inanspruchnahme unserer Leistungen dar.
                  </li>
                  <li>
                    Erst durch Absenden des entsprechenden Bestellformulars gibt der Kunde uns gegenüber ein
                    verbindliches Angebot auf Abschluss eines Hauptvertrages über die entsprechenden Software
                    Leistungen ab.
                  </li>
                  <li>
                    Wir weisen vor Absenden des Bestellformulars auf die Kostenpflichtigkeit der Bestellung hin
                    und geben dem Kunden die Möglichkeit, von diesen AGB sowie sonstigen vertraglichen
                    Bedingungen Kenntnis zu nehmen. Diese können zudem gedownloadet und gespeichert werden.
                  </li>
                  <li>
                    Weiterhin geben wir dem Kunden vor dem Absenden des Bestellformulars die Möglichkeit, seine
                    Eingaben zu überprüfen und ggf. zu korrigieren.
                  </li>
                  <li>
                    Nach Absenden des Bestellformulars erhält er von uns eine Eingangsbestätigung seiner
                    Bestellung an die von dem Kunden mitgeteilte E-Mail-Adresse. Diese Eingangsbestätigung
                    stellt grds. auch die Annahme seines Angebots auf Inanspruchnahme unserer Software
                    Leistungen dar.
                  </li>
                  <li>
                    In dieser E-Mail oder in einer separaten E-Mail wird dem Kunden der Vertragstext (bestehend
                    bspw. aus Bestellinhalte, AGB, AVV, Auftragsbestätigung und Rechnung) von uns, ggf. als
                    Link, zugesandt bzw. zur Verfügung gestellt (Vertragsbestätigung). Diese kann er downloaden
                    und speichern.
                  </li>
                  <li>
                    Mit der vollständigen Zahlung der erworbenen Software Leistungen erhält der Kunde
                    unmittelbaren Zugriff auf die Software Leistungen, soweit nicht anders vereinbart.
                  </li>
                </ul>
                <p>
                  Wir speichern den Vertragstext nicht dauerhaft; der Kunde muss sich die Unterlagen selbst
                  sichern.
                </p>
              </div>
            </section>

            {/* 8. Integrierte Dienste */}
            <section id="agb-8" className={card} data-testid="section-agb-8">
              <h2 className={gradientHeading}>8. Integrierte Dienste</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Für die Zurverfügungstellung unserer Leistungen greifen wir teilweise auf die Dienste von
                  anderen Anbietern zurück, die mit künstlicher Intelligenz arbeiten (nachfolgend auch
                  „Integrierte Dienste"). Integrierte Dienste nutzen wir unter anderem für die automatisierte
                  Generierung und Erstellung von Texten und Inhalten, zur Optimierung von Prozessen oder die
                  Verbesserung von Angeboten.
                </p>
                <p>
                  Welche Integrierten Dienste dies sind und von welchem Anbieter sie bereitgestellt werden,
                  kann der Kunde jederzeit der aktuellen Anlage Integrierte Dienste unterhalb dieser AGB
                  entnehmen, in der wir die Anbieter der Integrierten Dienste, der dahinterstehenden
                  Organisation sowie hierfür geltende weitergehende Geschäftsbedingungen angelegt haben.
                </p>
                <p>Im Rahmen der Nutzung von Leistungen, die auf Integrierte Dienste zurückgreifen, gilt das Folgende:</p>
                <ul className={listClass}>
                  <li>
                    Wir geben weder eine Garantie noch eine Gewähr für die Richtigkeit und Nutzbarkeit der
                    durch die Integrierten Dienste ausgegebenen Antworten und Ergebnisse. Diese können also
                    durchaus falsch sein. Daraus abgeleitete Handlungen sollten also nicht ungeprüft auf deren
                    Inhalte gestützt werden.
                  </li>
                  <li>
                    Wir geben weder eine Garantie noch eine Gewähr für die dauerhafte Verfügbarkeit der
                    Integrierten Dienste. Da diese von anderen Organisationen bereitgestellt werden, haben wir
                    keinen Einfluss auf die technischen Verfügbarkeiten.
                  </li>
                  <li>
                    Wir geben weder eine Garantie noch eine Gewähr dafür, dass die Antworten und Ergebnisse
                    frei von dem Kunden nutzbar sind. Wir weisen deutlich darauf hin, dass sämtliche Antworten
                    und Ergebnisse (urheber-)rechtlich geschützt sein könnten. Ein solcher Schutz verbietet in
                    der Regel insbesondere eine Weiterverbreitung der Antworten und Ergebnisse durch den Kunden.
                  </li>
                  <li>
                    Der Kunde entscheidet selbst und ist damit selbst dafür verantwortlich, welche
                    Informationen und Daten er mit unseren Leistungen teilt, die auf Integrierte Dienste
                    zurückgreifen. Wir prüfen die Integrierten Dienste zwar darauf, ob sie die geltenden
                    Gesetze und unsere Richtlinien einhalten. Dennoch sollte der Kunde keine Informationen und
                    Daten teilen, die dem Datenschutz oder einem Geheimnisschutz unterfallen bzw. besonders
                    sensible Informationen über sich selbst, seine Mitarbeitenden, Kunden, Dritte etc.
                    darstellen.
                  </li>
                </ul>
                <p>
                  Wir übernehmen, sofern nicht ausdrücklich zugesichert oder gesetzlich vorgeschrieben, keine
                  Verantwortung für aus der Nutzung der Leistungen, die auf Integrierte Dienste
                  zurückgreifen, resultierende Antworten und Ergebnisse bzw. Handlungen oder Unterlassungen
                  seinerseits. Das bedeutet, wir haften, sofern nicht gesetzlich verbindlich festgelegt bzw.
                  sofern nicht von uns zu vertreten, nicht für die Richtigkeit und Passgenauigkeit der
                  Antworten und Ergebnisse der Integrierten Dienste für seine Absichten oder für die
                  Handlungen und Unterlassungen, die für den Kunden hieraus resultieren. Im Übrigen haften wir
                  gem. den in diesen AGB kommunizierten Haftungsregelungen.
                </p>
                <p>
                  Die von uns Integrierten Dienste verarbeiten möglicherweise urheberrechtlich geschützte
                  Positionen bzw. an den Antworten und Ergebnissen, die von den Integrierten Diensten
                  ausgegeben werden, können urheberrechtlich geschützte Positionen bestehen. Diesbezüglich
                  gilt Folgendes: Der Kunde räumt uns das frei von Rechten Dritter bestehende Recht ein,
                  sämtliche urheberrechtlich geschützten Positionen, die er mit unseren Leistungen und damit
                  mit den von uns Integrierten Diensten verarbeitet, an die Integrierten Dienste
                  weiterzugeben. An den von den Integrierten Diensten generierten urheberrechtlich geschützten
                  Werken räumen wir dem Kunden wiederum das einfache Recht ein, diese gem. den Regelungen
                  dieser AGB im Rahmen der Nutzung unserer Leistungen zu nutzen. Diesbezüglich gilt
                  insbesondere die Regelung zur Einräumung von Nutzungsrechten gem. Ziff. 10 dieser AGB.
                </p>
                <p>
                  Für die Nutzung einzelner Integrierter Dienste können zusätzliche Geschäftsbedingungen des
                  jeweiligen Anbieters gelten. Welche Integrierte Dienste wir für die Zurverfügungstellung
                  unserer Leistungen nutzen und welche ggf. weitergehenden Geschäftsbedingungen hierbei
                  gelten, sind der Anlage Integrierte Dienste, in die wir die von uns verwendeten Integrierten
                  Dienste sowie deren Geschäftsbedingungen darstellen und die wir regelmäßig, etwa bei
                  Hinzufügung weiterer Integrierter Dienste, erneuern, zu entnehmen. Für die Einhaltung
                  dieser Geschäftsbedingungen ist der Kunde selbst verantwortlich. Wir weisen darauf hin, dass
                  Verstöße gegen diese Geschäftsbedingungen zu einem Ausschluss von oder einer Beschränkung
                  der Nutzung dieser Integrierten Dienste führen können. Wir haften nicht für Beschränkungen
                  unserer Leistungen, die aus seinem Verstoß gegen die Geschäftsbedingungen eines Integrierten
                  Dienstes resultieren.
                </p>
              </div>
            </section>

            {/* 9. Grundsätze zur Erbringung unserer Leistungen */}
            <section id="agb-9" className={card} data-testid="section-agb-9">
              <h2 className={gradientHeading}>9. Grundsätze zur Erbringung unserer Leistungen</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Unsere Software ist online-basiert. Für die Nutzung unserer Software ist eine funktionierende
                  Internetverbindung erforderlich.
                </p>
                <p>
                  In unserer Software hat der Kunde die Möglichkeit, weitere Nutzer anzulegen. Hierfür stellen
                  wir dem Kunden bzw. hierfür erstellt der Kunde oder die von dem Kunden angelegten Nutzer
                  entsprechende Passwörter und Zugangscodes. Der Kunde ist dafür verantwortlich, die für diesen
                  Vorgang richtigen Informationen über jeden von dem Kunden angelegten Nutzer (Namen,
                  E-Mail-Adressen und Kontaktinformationen) anzugeben und diese Informationen stets aktuell zu
                  halten. Der Kunde hat jeden angelegten Nutzer zur Einhaltung dieser AGB, des Hauptvertrages
                  sowie aller hierin in Bezug genommenen Regelungen zu verpflichten.
                </p>
                <p>
                  Wir stellen dem Kunden mit unserer Software und ihren Funktionen lediglich eine technische
                  Grundlage für die hiermit durch den Kunden in den Grenzen der erworbenen Leistungen (siehe
                  insbesondere die Leistungsbeschreibung unter{" "}
                  <a
                    href="https://intellomind.ai/leistungsbeschreibung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2"
                  >
                    https://intellomind.ai/leistungsbeschreibung
                  </a>
                  ) abzubildenden Zwecke zur Verfügung. Wir übernehmen, vorbehaltlich der Geltung gesetzlicher
                  Haftungspflichten sowie vorbehaltlich der Regelungen in diesen AGB, keine Verantwortung für
                  die mit unserer Software ausgeführten Handlungen bzw. für die mit unserer Software
                  verarbeiteten Inhalte. Für sämtliche von dem Kunden mit unserer Software ausgeführten
                  Handlungen und verarbeiteten Inhalte gelten die gesetzlichen Regelungen, Vereinbarungen und
                  Verträge, die er mit seinen Kunden, Partnern, Mitarbeitern etc. schließt, mit denen er bzw.
                  für die er unsere Software einsetzt.
                </p>
                <p>
                  Sollten wir dem Kunden im Rahmen unserer Software Leistungen die Möglichkeit anbieten,
                  Leistungen Dritter wie bspw. Telefondiensten oder Telefonnummerndiensten (nachfolgend auch
                  „Drittleistungen") in Anspruch zu nehmen, agieren wir im Rahmen der Bereitstellung dieser
                  Drittleistungen lediglich als Vermittler, mit denen der Kunde eine eigenständige
                  Vertragssituation eingeht. Diese Drittleistungen weisen wir stets als solche aus, damit der
                  Unterschied zu unseren eigenen Software Leistungen erkennbar wird. Diese Drittleistungen
                  bieten wir also nicht selbst an. Das bedeutet, wir vermitteln dem Kunden diese
                  Drittleistungen nur. Sollte der Kunde Drittleistungen in Anspruch nehmen, kann dies über ein
                  gesondertes Vertragsverhältnis zwischen dem Kunden und dem Dritten erfolgen, welches wir dem
                  Kunden im Rahmen der Nutzung unserer Software Leistungen vermitteln. Im Rahmen unserer
                  Software Leistungen treten wir bei der Buchung dieser Drittleistungen als vom Kunden
                  bevollmächtigter Stellvertreter der Drittleistungen auf. Wir bestellen also bspw. im Namen
                  und auf Rechnung des Kunden die entsprechende Drittleistung für den Kunden und reichen dem
                  Kunden die entsprechenden Vertragsunterlagen weiter. Wenn also der Kunde solche
                  Drittleistungen in Anspruch nimmt, sind wir für diese Drittleistungen selbst nicht
                  verantwortlich. Hierfür gelten ausschließlich die in seinem Vertragsverhältnis zwischen dem
                  Kunden und dem Dritten vereinbarten Bedingungen.
                </p>
                <p>
                  Bei der Nutzung unserer Software ist es dem Kunden insbesondere untersagt, Inhalte zu
                  verarbeiten, Dritten zur Verfügung zu stellen oder sonstwie mit unserer Software in
                  Verbindung zu bringen, die:
                </p>
                <ul className={listClass}>
                  <li>pornographisches oder obszönes Material beinhalten,</li>
                  <li>Krieg, Terror und andere Gewalttaten verherrlichen,</li>
                  <li>geeignet sind, Kinder oder Jugendliche sittlich schwer zu gefährden,</li>
                  <li>
                    Menschen in einer die Menschenwürde verletzenden Weise darstellen und/oder ein
                    tatsächliches Geschehen wiedergeben, ohne dass ein überwiegendes berechtigtes Interesse
                    gerade an dieser Form der Berichterstattung vorliegt,
                  </li>
                  <li>
                    den Hass gegen Teile der Bevölkerung oder gegen eine nationale, rassische, religiöse oder
                    durch ihr Volkstum bestimmte Gruppe aufstacheln, zu Gewalt- oder Willkürmaßnahmen gegen
                    sie auffordern oder die Menschenwürde anderer dadurch angreifen, dass Teile der
                    Bevölkerung oder eine der vorbezeichneten Gruppen beschimpft, böswillig verächtlich
                    gemacht oder verleumdet werden,
                  </li>
                  <li>
                    grausame oder sonst unmenschliche Gewalttätigkeiten gegen Menschen oder Tiere in einer Art
                    schildern, die eine Verherrlichung oder Verharmlosung solcher Gewalttätigkeiten ausdrücken
                    oder die das Grausame oder Unmenschliche des Vorganges in einer Würde verletzenden Weise
                    darstellen,
                  </li>
                  <li>
                    geeignet sind, andere zu verleugnen, zu beleidigen, zu bedrohen oder jemandem übel
                    nachzureden.
                  </li>
                </ul>
                <p>
                  Für die Inanspruchnahme unserer Software gelten die mietrechtlichen Vorschriften.
                  Instandhaltungsmaßnahmen wie Updates, Patches, Hotfixes sind Bestandteil unserer Leistung.
                  Ein weitergehender Support wird bei entsprechender Vereinbarung angeboten. Über die
                  Instandhaltungsmaßnahmen hinaus findet das gesetzliche Mietmängel-Gewährleistungsrecht
                  Anwendung.
                </p>
                <p>
                  Anpassungen, Änderungen und Ergänzungen der Software sowie Maßnahmen, die der Feststellung
                  und Behebung von Funktionsstörungen dienen, werden nur dann zu einer vorübergehenden
                  Unterbrechung oder Beeinträchtigung der Erreichbarkeit führen, wenn dies aus technischen
                  Gründen zwingend notwendig ist.
                </p>
                <p>
                  Die Verfügbarkeit der Software nach diesem Hauptvertrag beträgt 98% im Jahresdurchschnitt
                  einschließlich Wartungsarbeiten. Die Verfügbarkeit wird nicht länger als zwei Kalendertage
                  in Folge beeinträchtigt oder unterbrochen sein.
                </p>
                <p>Der Kunde darf unsere Leistungen nicht an Dritte zur gewerblichen Nutzung überlassen.</p>
                <p>Wir sind berechtigt, unsere Leistungen durch Dritte und Subunternehmen erbringen zu lassen.</p>
                <p>
                  Wir haben das Recht, in unserer Software während der Laufzeit des Hauptvertrages nach eigenem
                  Ermessen Updates, Upgrades, Erweiterungen und andere wesentliche Verbesserungen zur Verfügung
                  stellen. Der Kunde erkennt an, dass solche Maßnahmen zu Änderungen des Erscheinungsbildes
                  und/oder der Funktionalität der Software, der unterstützten Umgebung führen können und/oder
                  dass die fortgesetzte Nutzung der Software es erforderlich machen kann, dass er sein eigenes
                  System aktualisiert, einschließlich neuer Betriebssysteme (z.B. IOS, Android oder Windows)
                  oder Web-Browser.
                </p>
                <p>
                  Bei höherer Gewalt sind wir für die entsprechende Dauer berechtigt, unsere Leistungen um die
                  Dauer der Behinderung zuzüglich einer angemessenen Anlaufzeit hinauszuschieben, sofern uns
                  die Leistungserbringung tatsächlich nicht möglich ist. Als höhere Gewalt gelten von uns oder
                  von einem Subunternehmer nicht zu vertretene und zum Zeitpunkt des Vertragsschlusses nicht
                  vorhersehbare Ereignisse wie Betriebsstörungen, Streik, Aussperrung, Personalmangel,
                  Pandemien und Epidemien, behördliche Anordnungen und ähnliche Umstände. Das Recht jeder
                  Partei, im Falle länger andauernder höherer Gewalt den Hauptvertrag aus wichtigem Grund zu
                  kündigen, bleibt unberührt.
                </p>
                <p>
                  Für das Handeln seiner Nutzer ist der Kunde verantwortlich und steht hierfür wie für sein
                  eigenes Handeln ein.
                </p>
                <p>
                  Über Links oder Funktionalitäten in unserer Software kann der Kunde zu fremden Websites und
                  Software gelangen, die nicht von uns betrieben werden und für die wir nicht verantwortlich
                  sind. Solche Links oder Funktionalitäten sind entweder eindeutig gekennzeichnet oder durch
                  einen Wechsel in der Adresszeile des Browsers oder eine Änderung der Benutzeroberfläche
                  erkennbar.
                </p>
                <p>Bei der Nutzung unserer Software ist es dem Kunden untersagt:</p>
                <ul className={listClass}>
                  <li>Schutzrechte Dritter wie Marken, Urheber- und Namensrechte zu verletzen,</li>
                  <li>
                    Maßnahmen, Mechanismen oder Software in Verbindung mit unserer Software zu verwenden, die
                    die Funktion und den Betrieb der Software stören können,
                  </li>
                  <li>
                    Maßnahmen zu ergreifen, die eine unzumutbare oder übermäßige Belastung der technischen
                    Kapazitäten der Software zur Folge haben können,
                  </li>
                  <li>Inhalte zu blockieren, zu überschreiben oder zu modifizieren,</li>
                  <li>Reverse Engineering im Hinblick auf unsere Leistungen zu betreiben,</li>
                  <li>
                    der Software Elemente hinzuzufügen oder Elemente der Software zu ändern, zu löschen oder
                    in einer anderen Form zu modifizieren,
                  </li>
                  <li>
                    grafische Elemente zu kopieren, zu entnehmen oder anderweitig zu verwenden oder zu
                    versuchen, den Quellcode der Software zu dekompilieren (vorbehaltlich § 69e UrhG),
                  </li>
                  <li>
                    Hilfsmittel anzuwenden, die in den Betrieb der Software eingreifen (insbesondere sog.
                    „Bots", „Hacks" etc.),
                  </li>
                  <li>
                    sich Premium-Funktionen oder sonstige Vorteile, wie etwa die systematische oder
                    automatische Steuerung der Software oder einzelner Funktionen der Software, durch die
                    Verwendung von Software Dritter oder sonstigen Anwendungen zu verschaffen oder
                    Programmfehler zum eigenen Vorteil auszunutzen („Exploits"),
                  </li>
                  <li>
                    kommerzielle Werbung für Produkte bzw. Programme Dritter in Zusammenhang mit unseren
                    Leistungen zu verbreiten,
                  </li>
                  <li>
                    schadcodehafte oder virenbehaftete Dokumente, Dateien, IT-Systeme Dritter und Daten im
                    Zusammenhang mit unseren Leistungen zu verwenden,
                  </li>
                  <li>
                    über bereitgestellte Funktionalitäten und Schnittstellen hinausgehende Mechanismen,
                    Software und Skripte einzusetzen, insbesondere wenn hierdurch unsere Leistungen blockiert,
                    modifiziert, kopiert oder überschrieben werden, sowie
                  </li>
                  <li>
                    unsere Software durch Datenveränderung (§ 303a StGB), Computersabotage (§ 303b StGB),
                    Fälschung beweiserheblicher Daten (§ 269, 270 StGB), Unterdrückung beweiserheblicher
                    Daten (§ 274 StGB), Computerbetrug (§ 263a StGB), Ausspähen von Daten (§ 202a StGB),
                    Abfangen von Daten (§ 202b StGB) oder andere Straftaten zu beeinträchtigen.
                  </li>
                </ul>
                <p>
                  Wir sind berechtigt, nach Angabe von legitimen Gründen den Zugang zu unserer Software
                  abzulehnen und den Kunden bzw. seine Nutzer zu sperren oder auszuschließen bzw. den
                  Hauptvertrag außerordentlich zu kündigen, sollten wir wiederholte Beschwerden über den
                  Kunden erhalten oder sollten die Vorgaben aus dem Hauptvertrag und diesen AGB, sonstige
                  durch uns kommunizierte Anforderungen oder die Einhaltung gesetzlicher Regelungen wiederholt
                  missachtet werden. Hierüber werden wir den Kunden jeweils unverzüglich informieren und ihm
                  Gelegenheit zur Stellungnahme geben. Vor einer vollständigen Sperrung oder einem
                  vollständigen Ausschluss werden wir den Kunden angemessene Zeit vorab hierüber unter Angabe
                  entsprechender Gründe informieren. Sofern der Kunde den Grund, der zur Ablehnung, Sperrung
                  oder zum Ausschluss geführt hat, beseitigt, werden wir eine Wiederaufnahme in unserer
                  Software prüfen.
                </p>
              </div>
            </section>

            {/* 10. Mitwirkungspflichten des Kunden */}
            <section id="agb-10" className={card} data-testid="section-agb-10">
              <h2 className={gradientHeading}>10. Mitwirkungspflichten des Kunden</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Folgende Beistellungen und Mitwirkungen sind insbesondere von dem Kunden als
                  Nebenleistungspflichten kostenfrei uns gegenüber zu erbringen:
                </p>
                <ul className={listClass}>
                  <li>
                    Sicherstellung, dass der Kunde die von uns zur Verfügung gestellten Software Leistungen
                    rechtskonform in seinem eigenen Endkunden- und Nutzerverhältnis nutzt,
                  </li>
                  <li>
                    Sicherstellung, dass der Kunde über alle notwendigen (datenschutz-) rechtlichen
                    Erlaubnisse und Einwilligungen oder Berechtigungen seiner Endkunden und Nutzer sodass die
                    Bereitstellung und Nutzung unserer Software Leistungen gegenüber diesen Endkunden und
                    Nutzern rechtskonform erfolgen kann, was insbesondere für die eigenständige rechtskonforme
                    Umsetzung von datenschutz- und KI-rechtlicher Anforderungen gilt,
                  </li>
                  <li>
                    Die Sicherstellung, dass der Kunde von uns vermittelte Drittleistungen, wie insbesondere
                    Virtuelle Mobilfunknummern unter Einhaltung der hierfür geltenden gesetzlichen Vorgaben,
                    insbesondere solcher aus dem Gesetz gegen den unlauteren Wettbewerb, nutzt.
                  </li>
                  <li>
                    Falls notwendig: Einräumung von erforderlichen Nutzungsrechten an Software Dritter,
                    insbesondere Datenbanken, Server-Betriebssysteme und Anwendungen.
                  </li>
                  <li>
                    Falls notwendig: Erstellung von Backups des IT-Systems und anderen IT-Komponenten.
                  </li>
                  <li>
                    Meldungen von Sach- und Rechtsmängeln sowie von Störungen müssen eine
                    Problembeschreibung (z.B. mit Screenshots, anonymisierten Logfiles) enthalten.
                  </li>
                  <li>
                    Falls notwendig: Mitteilung der bei dem Kunden geltenden Richtlinien zum Fernzugriff auf
                    sein IT-System.
                  </li>
                  <li>
                    Falls notwendig: Zurverfügungstellung von Testfällen, Testdaten und Testumgebungen.
                  </li>
                  <li>
                    Bei sicherheitsrelevanten Updates behalten wir uns vor, unsere Leistungen kurzfristig
                    anzupassen. Daraus resultierende Anpassungen auf seinen IT-Systemen sind von dem Kunden
                    vorzunehmen. Bei Bedarf leisten wir dem Kunden hierbei Unterstützung.
                  </li>
                  <li>
                    Eigenständige und eigenverantwortliche Integration der Software Leistungen (ggf. nebst
                    Schnittstelle) in das bestehende IT-System, in bzw. mit beim Kunden bereits existierender
                    Software sowie sonstigen Diensten sowie in die Endkunden- bzw. Nutzerkommunikation des
                    Kunden.
                  </li>
                </ul>
                <p>
                  Der Kunde ist dafür verantwortlich, dass bei dem Kunden die technischen Voraussetzungen für
                  die Funktionsfähigkeit unserer Software gegeben sind, insbesondere hinsichtlich des
                  Betriebssystems, der Verbindung zum Internet und der (Browser-)Software unter Beachtung der
                  durch uns ggf. jeweils erteilten technischen Vorgaben. Im Falle der Weiterentwicklung oder
                  Änderung der technischen Komponenten der Software (z.B. Betriebssystem-, Browsersoftware)
                  obliegt es dem Kunden, die notwendigen Anpassungen bei der von dem Kunden eingesetzten
                  Software vorzunehmen.
                </p>
                <p>
                  Verzögert sich die Erbringung unserer Leistung aufgrund eines Umstandes, den der Kunde,
                  seine gesetzlichen Vertreter, Mitarbeitenden oder Erfüllungsgehilfen zu vertreten haben,
                  verschieben sich etwaige Terminvereinbarungen um den entsprechenden Zeitraum. Wir sind also
                  bis zur ordnungsgemäßen Erbringung seiner Mitwirkungspflichten von unserer Leistungspflicht
                  befreit.
                </p>
              </div>
            </section>

            {/* 11. Allgemeine Haftung */}
            <section id="agb-11" className={card} data-testid="section-agb-11">
              <h2 className={gradientHeading}>11. Allgemeine Haftung</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Wir haften, vorbehaltlich gesonderter Regelungen im Hauptvertrag oder in diesen AGB für von
                  uns, unsere gesetzlichen Vertreter, Erfüllungsgehilfen und die von uns eingeschalteten
                  Subunternehmer verursachten, unmittelbaren Sach- und Vermögensschäden.
                </p>
                <p>
                  Bei einfacher Fahrlässigkeit ist unsere Haftung auf den vertragstypischen und vorhersehbaren
                  Schaden beschränkt. Außerhalb der Verletzung wesentlicher Vertragspflichten ist unsere
                  Haftung auf den Ersatz mittelbarer Sach- und Vermögensschäden, insbesondere entgangenen
                  Gewinn, bei einfacher Fahrlässigkeit vollständig ausgeschlossen. Bei höherer Gewalt sowie
                  bei unentgeltlicher Nutzung unserer Leistungen ist unsere Haftung bei einfacher Fahrlässigkeit
                  insgesamt ausgeschlossen. Vertragswesentliche Pflichten sind solche, deren Erfüllung die
                  ordnungsgemäße Durchführung des Hauptvertrages überhaupt erst ermöglicht und auf deren
                  Erfüllung vertraut werden darf. Beide Parteien sind sich einig, dass der vertragstypische
                  und vorhersehbare Schaden auf das 2-fache der jährlichen Vergütung begrenzt ist.
                </p>
                <p>
                  Wir haften der Höhe nach unbegrenzt bei der Verletzung von Leben, Körper oder Gesundheit
                  sowie bei einem vorsätzlichen, grob fahrlässigen oder arglistigen Handeln. Gleiches gilt
                  bei der schriftlichen Übernahme einer Garantie für die Beschaffenheit oder Haltbarkeit einer
                  von uns zu erbringenden Leistung.
                </p>
                <p>Unsere Haftung nach dem Produkthaftungsgesetz bleibt unberührt.</p>
                <p>
                  Der Kunde hat für das Handeln seiner Mitarbeiter, gesetzlichen Vertreter,
                  Erfüllungsgehilfen und etwaiger anderer Nutzer unserer Leistungen wie für eigenes Handeln
                  einzustehen. Darüber hinaus hat der Kunde uns im Rahmen seiner Verantwortlichkeit (siehe
                  insbesondere Ziff. 5 und 6 dieser AGB) im Falle eines zum Schaden führenden Umstandes, den
                  wir nicht zu vertreten haben, auf erstes Anfordern von haftungsrechtlichen
                  Inanspruchnahmen Dritter aufgrund von Schäden freizustellen, die durch seine Nutzung
                  unserer Leistungen bei Dritten und sonstigen Betroffenen hervorgerufen wurden.
                </p>
              </div>
            </section>

            {/* 12. Gewährleistung für unsere Leistungen */}
            <section id="agb-12" className={card} data-testid="section-agb-12">
              <h2 className={gradientHeading}>12. Gewährleistung für unsere Leistungen</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Bei Vorliegen von Sach- und Rechtsmängeln gelten vorbehaltlich der Festlegungen in dieser
                  Ziffer die gesetzlichen Regelungen.
                </p>
                <p>
                  Es gilt § 377 HGB. Sämtliche Mängelansprüche stehen unter der Bedingung seiner
                  unverzüglichen Mängelanzeige gem. § 377 Abs. 1 und Abs. 3 HGB.
                </p>

                <h3 className={subheading}>Sachmängel</h3>
                <p>
                  Wir werden die angezeigten Mängel an der Software innerhalb einer angemessenen Frist auf
                  unsere Kosten zu beheben.
                </p>
                <p>
                  Der Kunde hat uns den zur Mängelbeseitigung erforderlichen Zugriff auf die Software zu
                  ermöglichen.
                </p>
                <p>
                  Im Falle des zweimaligen Fehlschlags der geschuldeten Mängelbeseitigung ist der Kunde zur
                  außerordentlichen Kündigung des Hauptvertrages gemäß § 543 Abs. 2 S. 1 Nr. 1 BGB
                  berechtigt. Ein Fehlschlag der Mängelbeseitigung liegt insbesondere dann vor, wenn die
                  Mängelbeseitigung für uns unmöglich ist, wenn wir die Mängelbeseitigung verweigern oder wenn
                  die Mängelbeseitigung durch uns aus sonstigen Gründen für den Kunden unzumutbar ist.
                </p>
                <p>
                  Bei Miete ist die verschuldensunabhängige Haftung auf Schadensersatz für bei Überlassung
                  vorhandene Mängel aus § 536a Abs. 1 BGB ausgeschlossen.
                </p>

                <h3 className={subheading}>Rechtsmängel</h3>
                <p>
                  Unsere Leistungen werden dem Kunden frei von Rechten Dritter verschafft. Der Kunde hat uns
                  unverzüglich in Textform zu informieren, wenn er Kenntnis über Rechte Dritter an unseren
                  Leistungen erlangt.
                </p>
                <p>
                  Auf unser Verlangen hat der Kunde uns die Verteidigung gegen die von Dritten geltend
                  gemachten Ansprüche zu überlassen, uns sämtliche hierfür notwendigen Informationen zur
                  Verfügung stellen, Erklärungen zu erteilen und Befugnisse einzuräumen. Im Gegenzug stellen
                  wir den Kunden von Zahlungs- und Schadensersatzansprüchen wegen der Rechte Dritter frei.
                </p>
                <p>
                  Sind unsere Leistungen tatsächlich mit Rechten Dritter belastet, sind wir nach unserer Wahl
                  berechtigt,
                </p>
                <ul className={listClass}>
                  <li>
                    die Rechter Dritter oder deren Geltendmachung zu beseitigen (z.B. durch Zahlung von
                    Lizenzgebühren), oder
                  </li>
                  <li>
                    unsere Leistungen in der Weise zu verändern, dass Rechte Dritter nicht mehr verletzt
                    werden.
                  </li>
                </ul>

                <h3 className={subheading}>Allgemein</h3>
                <p>
                  Mängelansprüche entfallen, wenn der Kunde ohne unsere vorherige Zustimmung Änderungen an
                  den Leistungen vorgenommen hat oder wenn die Leistungen von dem Kunden zu einem nicht von
                  diesem Hauptvertrag gedeckten Zweck eingesetzt werden und wir für das Auftreten des Mangels
                  nicht verantwortlich sind.
                </p>
                <p>
                  Sämtliche Ansprüche wegen Mängeln verjähren, sofern sie nicht ohnehin schon nach den
                  vorgenannten Regelungen beschränkt oder ausgeschlossen sind, in 12 Monaten.
                </p>
              </div>
            </section>

            {/* 13. Nutzungsrecht des Kunden */}
            <section id="agb-13" className={card} data-testid="section-agb-13">
              <h2 className={gradientHeading}>13. Nutzungsrecht des Kunden</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <h3 className={subheading}>a. Softwarenutzung & Allgemeines</h3>
                <p>
                  Der Kunde erhält ein einfaches, nicht ausschließliches, zeitlich auf die Dauer des
                  Hauptvertrages befristetes und räumlich unbeschränktes Recht zur Nutzung unserer Leistungen.
                </p>
                <p>
                  Die von dem Kunden angelegten Nutzer sind zur Nutzung der Software gleichermaßen
                  berechtigt, sofern diesbezügliche Lizenzen erworben wurden.
                </p>
                <p>
                  Eine selbständige Befugnis zur Unterlizenzierung oder sonstigen Übertragung seiner
                  Nutzungsrechte auf Dritte ist hiermit nicht verbunden.
                </p>
                <p>
                  Zur Ausstellung, öffentlichen Wiedergabe, insbesondere der öffentlichen
                  Zugänglichmachung, Bearbeitung, Umgestaltung, Übersetzung, Dekompilierung oder sonstigen
                  Umgestaltung der Software ist der Kunde nicht berechtigt. seine Rechte aus §§ 69d Abs. 3,
                  69e UrhG bleiben unberührt.
                </p>
                <p>
                  Wir sind berechtigt, unsere Leistungen samt neuer Releases, sowie sonst im Zusammenhang
                  mit dem Hauptvertrag erarbeitetes allgemeines Know-how, Erfahrungswissen, Methoden und
                  Vorgehensweisen anderweitig zu verwenden (Zurverfügungstellung an Dritte, als Open Source
                  Software etc.).
                </p>
                <p>
                  Test- und Demolizenzen sind vorbehaltlich einer anderweitigen Vereinbarung auf eine
                  Laufzeit von bis zu 30 Tagen beschränkt.
                </p>
                <p>
                  Die Inhalte unserer Leistungen stehen in unserem ausschließlichen Eigentum bzw. in unserer
                  ausschließlichen Rechteinhaberschaft bzw. im Eigentum / in der Rechteinhaberschaft unserer
                  Dienstleister. Alle Inhalte sind durch nationales und internationales Recht, insbesondere
                  Urheberrecht, geschützt. Die unerlaubte Verbreitung, Vervielfältigung, Verwertung oder
                  anderweitige Verletzung unserer gewerblichen Schutzrechte und Urheberrechte werden zivil-
                  und/oder strafrechtlich verfolgt.
                </p>
              </div>
            </section>

            {/* 14. Datenschutz */}
            <section id="agb-14" className={card} data-testid="section-agb-14">
              <h2 className={gradientHeading}>14. Datenschutz</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Wir erheben, verarbeiten und nutzen personenbezogene Daten im Zusammenhang mit der
                  Bereitstellung unserer Software. Alle Informationen zum Umgang mit personenbezogenen Daten
                  im Rahmen des Vertrages durch uns finden sich in unserer Datenschutzerklärung, die jederzeit
                  unter{" "}
                  <a
                    href="https://intellomind.ai/datenschutz-webapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2"
                  >
                    https://intellomind.ai/datenschutz-webapp
                  </a>{" "}
                  abrufbar ist.
                </p>
                <p>
                  Erlangt der Kunde unter dem Vertrag die Möglichkeit, Kenntnis von personenbezogenen Daten
                  von uns oder Dritten zu nehmen, sichert er zu, dass er diese Daten nur auf berechtigte Art
                  und Weise sowie zu einem vertragskonformen Zweck und unter Beachtung der gesetzlichen
                  Anforderungen verarbeitet.
                </p>
              </div>
            </section>

            {/* 15. Geheimhaltung */}
            <section id="agb-15" className={card} data-testid="section-agb-15">
              <h2 className={gradientHeading}>15. Geheimhaltung</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Im Rahmen der Zusammenarbeit erlangen beide Parteien Kenntnis von Geschäftsgeheimnissen der
                  jeweils anderen Partei oder Dritten. Ein Geschäftsgeheimnis ist eine Information, die den
                  Personen, die üblicherweise mit dieser Art von Informationen umgehen, weder allgemein
                  bekannt noch ohne Weiteres zugänglich ist, daher von wirtschaftlichem Wert ist und die somit
                  Gegenstand von angemessenen Geheimhaltungsmaßnahmen ist (vgl. § 2 GeschGehG). Ein
                  Geschäftsgeheimnis ist weiterhin eine Information, die als Geschäftsgeheimnis gekennzeichnet
                  ist, die durch gewerbliche Schutzrechte oder das Urheberrecht geschützt ist, die unter das
                  Bankgeheimnis oder den Datenschutz fällt und bei der ein berechtigtes Interesse an der
                  Geheimhaltung besteht. Kein Geschäftsgeheimnis sind Informationen, die der jeweils anderen
                  Partei vor der Offenlegung bekannt sind, die nach der Offenlegung der Öffentlichkeit ohne
                  Mitwirkung der offengelegten Partei bekannt geworden sind, die die offengelegte Partei durch
                  einen berechtigten Dritten erfahren hat und die die offengelegte Partei selbst entwickelt
                  hat.
                </p>
                <p>
                  Die empfangende Partei, sowie alle, die bestimmungsgemäß mit Geschäftsgeheimnissen in
                  Kontakt kommen, sind verpflichtet, die Geschäftsgeheimnisse streng vertraulich zu behandeln
                  und nur zu nutzen oder Dritten und Beschäftigten offenzulegen, wenn dies im Zusammenhang
                  mit dem Geschäftszweck erforderlich ist. Im Übrigen wird die empfangende Partei die
                  Geschäftsgeheimnisse vor Kenntnisnahme Dritter schützen.
                </p>
                <p>
                  Gegenstände sowie Dateien oder sonstige unkörperliche Gegenstände, auf denen sich
                  Geschäftsgeheimnisse befinden, sind auf Verlangen der offenlegenden Partei bzw. spätestens
                  mit Beendigung der Vertragsbeziehungen unverzüglich zu löschen oder an die offenlegende
                  Partei herauszugeben.
                </p>
              </div>
            </section>

            {/* 16. Übertragung auf Dritte */}
            <section id="agb-16" className={card} data-testid="section-agb-16">
              <h2 className={gradientHeading}>16. Übertragung auf Dritte</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Wir sind berechtigt, den Hauptvertrag auf einen Rechtsnachfolger oder ein mit uns verbundenes
                  Unternehmen zu übertragen. Hierüber werden wir den Kunden in Textform mindestens zwei Monate
                  vor der geplanten Übertragung informieren.
                </p>
                <p>
                  Eine Übertragung des Hauptvertrages auf einen Dritten bedarf seiner vorherigen Zustimmung.
                  Im Falle seines Widerspruchs wird der Hauptvertrag unverändert fortgeführt. Der Widerspruch
                  gilt als wichtiger Grund zur außerordentlichen Kündigung des Hauptvertrages durch uns.
                </p>
              </div>
            </section>

            {/* 17. Referenznennung */}
            <section id="agb-17" className={card} data-testid="section-agb-17">
              <h2 className={gradientHeading}>17. Referenznennung</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Beide Parteien sind nach vorheriger Freigabe der jeweils anderen Partei, die mindestens in
                  Textform (E-Mail ausreichend) zu erfolgen hat, berechtigt, die jeweils andere Partei samt
                  Logo und Kurzbeschreibung der jeweiligen Unternehmung in der Außendarstellung entsprechend
                  zu erwähnen. Hierfür notwendige Informationen, wie z.B. Logo, Beschreibungstexte,
                  Versionsstand, Kontakt- und Supportwege sind vorab bereitzustellen.
                </p>
              </div>
            </section>

            {/* 18. Schlussbestimmungen */}
            <section id="agb-18" className={card} data-testid="section-agb-18">
              <h2 className={gradientHeading}>18. Schlussbestimmungen</h2>
              <div className={`mt-4 space-y-3 ${body}`}>
                <p>
                  Die Abtretung von einzelnen Ansprüchen aus diesem Hauptvertrag bedarf der vorherigen
                  Zustimmung der jeweils anderen Partei in Textform. Die Abtretung von Geldansprüchen ist
                  hiervon ausgenommen.
                </p>
                <p>
                  Auf die gesamte Vertragsbeziehung der Parteien findet ausschließlich das Recht der
                  Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung.
                </p>
                <p>
                  Gerichtsstand für alle sich aus der Vertragsbeziehung ergebenden Streitigkeiten, ist das
                  sachlich zuständige Gericht an unserem Sitz.
                </p>
                <p>
                  Die Beachtung des Exportkontrollrechts sowie die Beachtung sämtlicher Ein- und
                  Ausfuhrbestimmungen in Bezug auf unsere Leistungen liegt ausschließlich bei dem Kunden.
                </p>
                <p>
                  Vorbehaltlich gesonderter Regelungen in diesen AGB zur Preisanpassung gilt Folgendes in
                  Bezug auf Änderungen und Ergänzungen der AGB sowie des gesamten Hauptvertrages: Änderungen
                  und Ergänzungen der AGB sowie des gesamten zwischen uns bestehenden Hauptvertrages bedürfen
                  zu ihrer Wirksamkeit der Textform (E-Mail ausreichend), sofern nicht die folgenden
                  Erläuterungen besondere Form- oder Prozessvorschriften vorschreiben.
                </p>
                <p>
                  Änderungen und Ergänzungen, die aufgrund geänderter rechtlicher oder technischer
                  Anforderungen an unserer Leistungserbringung von uns vorgenommen werden (müssen) und die
                  keine negativen Auswirkungen auf die dem Kunden zustehenden Leistungen haben, werden
                  wirksam, wenn der Kunde einer Änderung nicht innerhalb eines (1) Monats nach Zugang einer
                  Änderungsmitteilung in Textform widerspricht und wir ihn vorab auf sein Widerspruchsrecht
                  hingewiesen haben. Widerspricht der Kunde der Änderung, gilt der Hauptvertrag unverändert
                  weiter und wir sind zur außerordentlichen Kündigung des Hauptvertrages mit einer Frist von
                  einem (1) Monat zum Ende des nächsten Kalendermonats berechtigt.
                </p>
                <p>
                  Änderungen und Ergänzungen des Hauptvertrages, die wir aufgrund geänderter Leistungs-,
                  Vergütungs- oder sonstiger kaufmännischer oder operativer Anforderungen vornehmen möchten
                  und welche negative Auswirkungen auf unser Vertragsverhältnis für den Kunden haben, werden
                  nur wirksam, wenn er ihnen ausdrücklich zustimmt. Diese Zustimmung kann über das Klicken
                  eines Einwilligungs-Buttons in der Änderungsmitteilung (E-Mail oder Pop-Up im Rahmen der
                  Nutzung unserer Leistungen) bzw. auf einem sonstigen bereitgestellten einfachem &
                  transparentem Wege erteilt werden. Sollte der Kunde nicht zustimmen, gilt der Hauptvertrag
                  unverändert weiter und wir sind zur Kündigung des Hauptvertrages im Rahmen der vertraglich
                  vereinbarten Kündigungsfristen berechtigt.
                </p>
                <p>
                  Die Textform gilt auch für eine Änderung dieser Formklausel. Der Vorrang individueller
                  Nebenabreden bleibt unberührt.
                </p>
                <p>
                  Die vorgenannten Fristen gelten nicht und es besteht lediglich ein Informationsrecht über
                  Änderungen des Hauptvertrages, sofern die Änderungen zur Abwehr einer unvorhergesehenen und
                  unmittelbar drohenden Gefahr notwendig sind, um vor Betrug, Schadsoftware, Spam,
                  Verletzungen des Datenschutzes oder anderen Cybersicherheitsrisiken zu schützen.
                </p>
                <p>
                  Sollte eine der Bestimmungen des Hauptvertrages unwirksam sein oder der Hauptvertrag eine
                  regelungsbedürftige Lücke enthalten, berührt dies die Wirksamkeit der übrigen oder
                  lückenhaften Bestimmungen nicht. Die Parteien verpflichten sich in diesem Fall, die
                  unwirksamen oder lückenhaften Bestimmungen durch wirtschaftlich den unwirksamen oder
                  lückenhaften Bestimmungen am Nächsten kommende Bestimmungen zu ersetzen bzw. zu
                  vervollständigen.
                </p>
              </div>
            </section>

            {/* Anlage Integrierte Dienste */}
            <section id="agb-anlage" className={card} data-testid="section-agb-anlage">
              <h2 className={gradientHeading}>Anlage Integrierte Dienste</h2>
              <div className={`mt-4 ${body}`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border/40">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground w-8">Nr.</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Name des Anbieters</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Gegenstand der Leistung</th>
                        <th className="text-left py-2 font-semibold text-foreground">Link zu Nutzungsbedingungen</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/20">
                        <td className="py-3 pr-4 align-top">1</td>
                        <td className="py-3 pr-4 align-top">Microsoft Ireland Operations, Ltd.</td>
                        <td className="py-3 pr-4 align-top">Betrieb der GPT-Modelle</td>
                        <td className="py-3 align-top">
                          <a
                            href="https://learn.microsoft.com/en-us/legal/cognitive-services/openai/code-of-conduct"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2 break-all"
                          >
                            learn.microsoft.com/en-us/legal/cognitive-services/openai/code-of-conduct
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 align-top">2</td>
                        <td className="py-3 pr-4 align-top">OpenAI Ireland Ltd.</td>
                        <td className="py-3 pr-4 align-top">Betrieb der GPT-Modelle</td>
                        <td className="py-3 align-top">
                          <a
                            href="https://openai.com/policies/business-terms/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2 break-all"
                          >
                            openai.com/policies/business-terms/
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
