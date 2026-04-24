import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AnimatedBackground } from "@/components/animated-background";

// Lazy-load heavy below-fold sections — each becomes its own JS chunk
const StickyPhoneSection = lazy(() =>
  import("@/components/sticky-phone-section").then(m => ({ default: m.StickyPhoneSection }))
);
const FeaturesSection = lazy(() =>
  import("@/components/features-section").then(m => ({ default: m.FeaturesSection }))
);
const IntegrationsSection = lazy(() =>
  import("@/components/integrations-section").then(m => ({ default: m.IntegrationsSection }))
);
const ServicesSection = lazy(() =>
  import("@/components/services-section").then(m => ({ default: m.ServicesSection }))
);
const AboutSection = lazy(() =>
  import("@/components/about-section").then(m => ({ default: m.AboutSection }))
);
const IndustriesSection = lazy(() =>
  import("@/components/industries-section").then(m => ({ default: m.IndustriesSection }))
);
const ContactSection = lazy(() =>
  import("@/components/contact-section").then(m => ({ default: m.ContactSection }))
);
const Footer = lazy(() =>
  import("@/components/footer").then(m => ({ default: m.Footer }))
);
const ChatbotButton = lazy(() =>
  import("@/components/chatbot-button").then(m => ({ default: m.ChatbotButton }))
);
const CookieBanner = lazy(() =>
  import("@/components/cookie-banner").then(m => ({ default: m.CookieBanner }))
);

export default function Home() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const contactSentinelRef = useRef<HTMLDivElement>(null);

  useMetaTags(
    "IntelloMind – KI-Lösungen für Unternehmen",
    "Intelligente KI-Assistenten für Telefon, Chat und E-Mail. Automatisieren Sie Ihren Kundenservice mit IntelloMind – 24/7, DSGVO-konform, sofort einsatzbereit."
  );

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      if (id === "contact") {
        setShowContact(true);
      }
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleShowContact = () => setShowContact(true);
    window.addEventListener("show-contact-section", handleShowContact);
    return () => window.removeEventListener("show-contact-section", handleShowContact);
  }, []);

  useEffect(() => {
    const sentinel = contactSentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContact(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />
      <main>
        {/* Hero is eager — visible immediately */}
        <HeroSection />
        {/* Everything below fold is lazy */}
        <Suspense fallback={null}>
          <StickyPhoneSection />
          <FeaturesSection />
          <IntegrationsSection />
          <ServicesSection />
          <AboutSection />
          <IndustriesSection />
        </Suspense>
        <div id="contact" ref={contactSentinelRef}>
          {showContact ? (
            <Suspense fallback={<div className="min-h-96" />}>
              <ContactSection />
            </Suspense>
          ) : (
            <div className="min-h-96" />
          )}
        </div>
      </main>
      <Suspense fallback={null}>
        <Footer onOpenCookieSettings={() => setShowCookieSettings(true)} />
        <ChatbotButton />
        <CookieBanner forceOpen={showCookieSettings} onClose={() => setShowCookieSettings(false)} />
      </Suspense>
    </div>
  );
}
