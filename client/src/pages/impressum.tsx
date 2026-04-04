import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { CookieBanner } from "@/components/cookie-banner";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Impressum() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  useMetaTags(
    "Impressum – IntelloMind UG",
    "Impressum der IntelloMind UG (haftungsbeschränkt), Hüingser Ring 1, 58710 Menden. Pflichtangaben gemäß § 5 DDG."
  );

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
                Impressum
              </span>
            </h1>
            <p className="text-muted-foreground text-base">
              Gesetzlich vorgeschriebene Pflichtangaben gemäß § 5 DDG.
            </p>
          </div>

          <div className="space-y-10">
            <section
              className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm"
              data-testid="section-impressum-diensteanbieter"
            >
              <h2 className="text-lg font-semibold mb-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Verantwortlicher Diensteanbieter
              </h2>
              <div className="mt-4 text-foreground/80 leading-relaxed space-y-1">
                <p className="font-medium text-foreground">Intellomind UG (haftungsbeschränkt)</p>
                <p>Hüingser Ring 1</p>
                <p>58710 Menden</p>
                <p className="mt-3">
                  <span className="text-muted-foreground">Geschäftsführer:</span> Agron Basha
                </p>
              </div>
            </section>

            <section
              className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm"
              data-testid="section-impressum-register"
            >
              <h2 className="text-lg font-semibold mb-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Registereintrag & Registernummer
              </h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Der Diensteanbieter ist eingetragen im Handelsregister des Registergerichts in
                Arnsberg unter der Registernummer{" "}
                <span className="font-medium text-foreground">HRB 15494</span>.
              </p>
            </section>

            <section
              className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm"
              data-testid="section-impressum-identifikation"
            >
              <h2 className="text-lg font-semibold mb-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Identifikationsnummern
              </h2>
              <p className="mt-4 text-foreground/80">
                <span className="text-muted-foreground">USt.-ID Nr.:</span>{" "}
                <span className="font-medium text-foreground">DE369547141</span>
              </p>
            </section>

            <section
              className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm"
              data-testid="section-impressum-kontakt"
            >
              <h2 className="text-lg font-semibold mb-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Kontaktmöglichkeiten
              </h2>
              <div className="mt-4 space-y-2 text-foreground/80">
                <p>
                  <span className="text-muted-foreground">E-Mail:</span>{" "}
                  <a
                    href="mailto:info@intellomind.ai"
                    className="font-medium text-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text transition-colors"
                    data-testid="link-impressum-email"
                  >
                    info@intellomind.ai
                  </a>
                </p>
                <p>
                  <span className="text-muted-foreground">Telefon:</span>{" "}
                  <a
                    href="tel:+4917670599319"
                    className="font-medium text-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text transition-colors"
                    data-testid="link-impressum-phone"
                  >
                    +49 176 70599319
                  </a>
                </p>
              </div>
            </section>

            <section
              className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm"
              data-testid="section-impressum-mstv"
            >
              <h2 className="text-lg font-semibold mb-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Verantwortlicher gem. § 18 Abs. 2 MStV
              </h2>
              <div className="mt-4 text-foreground/80 leading-relaxed space-y-1">
                <p className="font-medium text-foreground">Agron Basha</p>
                <p>Intellomind UG (haftungsbeschränkt)</p>
                <p>Hüingser Ring 1</p>
                <p>58710 Menden</p>
              </div>
            </section>

            <section
              className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm"
              data-testid="section-impressum-haftung"
            >
              <h2 className="text-lg font-semibold mb-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Haftung für Inhalte & Verlinkungen
              </h2>
              <div className="mt-4 text-foreground/80 leading-relaxed space-y-4 text-sm">
                <p>
                  Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte auf unseren
                  digitalen Diensten können wir, vorbehaltlich gesetzlicher Haftungspflichten, wie
                  insbesondere im Rahmen von Vorsatz und grober Fahrlässigkeit, keine Gewähr
                  übernehmen. Sie wurden jedoch mit größter Sorgfalt erstellt. Wir sind als
                  Diensteanbieter nach § 7 DDG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
                  übermittelte und gespeicherte Informationen zu überwachen. Eine Haftung ist erst
                  ab dem Zeitpunkt der Kenntnis von Rechtsverletzungen möglich. In diesem Fall
                  werden wir umgehend aktiv werden und die rechtswidrigen Inhalte entfernen. Für
                  weitere Information steht unsere Datenschutzerklärung zur Verfügung.
                </p>
                <p>
                  In unseren digitalen Diensten sind Links zu externen Diensten Dritter enthalten.
                  Auf die Inhalte dieser Dienste Dritter haben wir keinen Einfluss. Daher können
                  wir, vorbehaltlich gesetzlicher Haftungspflichten, wie insbesondere im Rahmen von
                  Vorsatz und grober Fahrlässigkeit, weder für die Korrektheit, die
                  Rechtskonformität noch die Vollständigkeit dieser Dienste Dritter eine Gewähr
                  übernehmen. Zum Zeitpunkt der Verlinkung auf die Dienste Dritter waren keine
                  Rechtsverstöße ersichtlich, die uns von einer Verlinkung abgehalten hätten. Bei
                  Bekanntwerden einer Rechtsverletzung durch die Dienste Dritter werden die
                  Verlinkungen in unseren Diensten unverzüglich entfernt. Eine dauerhafte Kontrolle
                  der Dienste Dritter erfolgt nicht. Verantwortlich für die Inhalte der Dienste
                  Dritter sind die jeweiligen Betreiber.
                </p>
              </div>
            </section>

            <section
              className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-sm"
              data-testid="section-impressum-urheberrecht"
            >
              <h2 className="text-lg font-semibold mb-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Urheberrecht für Inhalte
              </h2>
              <p className="mt-4 text-foreground/80 leading-relaxed text-sm">
                Das Urheberrecht für die Inhalte liegt, soweit nicht anderweitig gekennzeichnet bei
                dem Verantwortlichen Diensteanbieter. Die Inhalte unterliegen dem deutschen
                Urheberrecht. Jegliche Nutzung im Rahmen einer Vervielfältigung, Verbreitung,
                Verwertung etc. bedarf der vorherigen Zustimmung in Textform durch den
                Diensteanbieter. Dies gilt insbesondere für kommerzielle Verwertungen.
              </p>
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
